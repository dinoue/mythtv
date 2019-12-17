// -*- Mode: c++ -*-
// Copyright (c) 2003-2004, Daniel Thor Kristjansson
#ifndef MPEGSTREAMDATA_H_
#define MPEGSTREAMDATA_H_

// C++
#include <cstdint>  // uint64_t
#include <vector>
using namespace std;

// Qt
#include <QMap>

#include "tspacket.h"
#include "mythtimer.h"
#include "streamlisteners.h"
#include "eitscanner.h"
#include "mythtvexp.h"
#include "tablestatus.h"

class EITHelper;
class PSIPTable;
class RingBuffer;

typedef vector<uint>                    uint_vec_t;

typedef QMap<unsigned int, PSIPTable*>  pid_psip_map_t;
typedef QMap<const PSIPTable*, int>     psip_refcnt_map_t;

typedef ProgramAssociationTable*               pat_ptr_t;
typedef ProgramAssociationTable const*         pat_const_ptr_t;
typedef vector<const ProgramAssociationTable*> pat_vec_t;
typedef QMap<uint, pat_vec_t>                  pat_map_t;
typedef QMap<uint, ProgramAssociationTable*>   pat_cache_t;

typedef ConditionalAccessTable*                cat_ptr_t;
typedef ConditionalAccessTable const*          cat_const_ptr_t;
typedef vector<const ConditionalAccessTable*>  cat_vec_t;
typedef QMap<uint, cat_vec_t>                  cat_map_t;
typedef QMap<uint, ConditionalAccessTable*>    cat_cache_t;

typedef ProgramMapTable*                pmt_ptr_t;
typedef ProgramMapTable const*          pmt_const_ptr_t;
typedef vector<const ProgramMapTable*>  pmt_vec_t;
typedef QMap<uint, pmt_vec_t>           pmt_map_t;
typedef QMap<uint, ProgramMapTable*>    pmt_cache_t;

typedef vector<unsigned char>           uchar_vec_t;

typedef vector<MPEGStreamListener*>     mpeg_listener_vec_t;
typedef vector<TSPacketListener*>       ts_listener_vec_t;
typedef vector<TSPacketListenerAV*>     ts_av_listener_vec_t;
typedef vector<MPEGSingleProgramStreamListener*> mpeg_sp_listener_vec_t;
typedef vector<PSStreamListener*>       ps_listener_vec_t;

enum CryptStatus
{
    kEncUnknown   = 0,
    kEncDecrypted = 1,
    kEncEncrypted = 2,
};

class MTV_PUBLIC CryptInfo
{
  public:
    CryptInfo() { }
    CryptInfo(uint e, uint d) : m_encryptedMin(e), m_decryptedMin(d) { }

  public:
    CryptStatus m_status            {kEncUnknown};
    uint        m_encryptedPackets {0};
    uint        m_decryptedPackets {0};
    uint        m_encryptedMin     {1000};
    uint        m_decryptedMin     {8};
};

enum PIDPriority
{
    kPIDPriorityNone   = 0,
    kPIDPriorityLow    = 1,
    kPIDPriorityNormal = 2,
    kPIDPriorityHigh   = 3,
};
typedef QMap<uint, PIDPriority> pid_map_t;

class MTV_PUBLIC MPEGStreamData : public EITSource
{
  public:
    MPEGStreamData(int desiredProgram, int cardnum, bool cacheTables);
    virtual ~MPEGStreamData();

    void SetCaching(bool cacheTables) { m_cacheTables = cacheTables; }
    void SetListeningDisabled(bool lt) { m_listeningDisabled = lt; }

    virtual void Reset(void) { Reset(-1); }
    virtual void Reset(int desiredProgram);

    /// \brief Current Offset from computer time to DVB time in seconds
    double TimeOffset(void) const;

    // EIT Source
    void SetEITHelper(EITHelper *eit_helper) override; // EITSource
    void SetEITRate(float rate) override; // EITSource
    virtual bool HasEITPIDChanges(const uint_vec_t& /*in_use_pids*/) const
        { return false; }
    virtual bool GetEITPIDChanges(const uint_vec_t& /*in_use_pids*/,
                                  uint_vec_t& /*add_pids*/,
                                  uint_vec_t& /*del_pids*/) const
        { return false; }

    // Table processin
    void SetIgnoreCRC(bool haveCRCbug) { m_haveCrcBug = haveCRCbug; }
    virtual bool IsRedundant(uint pid, const PSIPTable&) const;
    virtual bool HandleTables(uint pid, const PSIPTable &psip);
    virtual void HandleTSTables(const TSPacket* tspacket);
    virtual bool ProcessTSPacket(const TSPacket& tspacket);
    virtual int  ProcessData(const unsigned char *buffer, int len);
    inline  void HandleAdaptationFieldControl(const TSPacket* tspacket);

    // Listening
    virtual void AddListeningPID(
        uint pid, PIDPriority priority = kPIDPriorityNormal)
        { m_pidsListening[pid] = priority; }
    virtual void AddNotListeningPID(uint pid)
        { m_pidsNotListening[pid] = kPIDPriorityNormal; }
    virtual void AddWritingPID(
        uint pid, PIDPriority priority = kPIDPriorityHigh)
        { m_pidsWriting[pid] = priority; }
    virtual void AddAudioPID(
        uint pid, PIDPriority priority = kPIDPriorityHigh)
        { m_pidsAudio[pid] = priority; }

    virtual void RemoveListeningPID(uint pid) { m_pidsListening.remove(pid);  }
    virtual void RemoveNotListeningPID(uint pid)
        { m_pidsNotListening.remove(pid); }
    virtual void RemoveWritingPID(uint pid) { m_pidsWriting.remove(pid);    }
    virtual void RemoveAudioPID(uint pid)   { m_pidsAudio.remove(pid);      }

    virtual bool IsListeningPID(uint pid) const;
    virtual bool IsNotListeningPID(uint pid) const;
    virtual bool IsWritingPID(uint pid) const;
    bool IsVideoPID(uint pid) const
        { return m_pidVideoSingleProgram == pid; }
    virtual bool IsAudioPID(uint pid) const;

    const pid_map_t& ListeningPIDs(void) const
        { return m_pidsListening; }
    const pid_map_t& AudioPIDs(void) const
        { return m_pidsAudio; }
    const pid_map_t& WritingPIDs(void) const
        { return m_pidsWriting; }

    uint GetPIDs(pid_map_t&) const;

    // PID Priorities
    PIDPriority GetPIDPriority(uint pid) const;

    // Table versions
    void SetVersionPAT(uint tsid, int version, uint last_section)
    {
        m_patStatus.SetVersion(tsid, version, last_section);
    }
    void SetVersionPMT(uint pnum, int version, uint last_section)
    {
        m_pmtStatus.SetVersion(pnum, version, last_section);
    }

    // Sections seen
    bool HasAllPATSections(uint tsid) const;

    bool HasAllCATSections(uint tsid) const;

    bool HasAllPMTSections(uint prog_num) const;

    // Caching
    bool HasProgram(uint progNum) const;

    bool HasCachedAllPAT(uint tsid) const;
    bool HasCachedAnyPAT(uint tsid) const;
    bool HasCachedAnyPAT(void) const;

    bool HasCachedAllCAT(uint tsid) const;
    bool HasCachedAnyCAT(uint tsid) const;
    bool HasCachedAnyCAT(void) const;

    bool HasCachedAllPMT(uint pnum) const;
    bool HasCachedAnyPMT(uint pnum) const;
    bool HasCachedAllPMTs(void) const;
    bool HasCachedAnyPMTs(void) const;

    pat_const_ptr_t GetCachedPAT(uint tsid, uint section_num) const;
    pat_vec_t GetCachedPATs(uint tsid) const;
    pat_vec_t GetCachedPATs(void) const;
    pat_map_t GetCachedPATMap(void) const;

    cat_const_ptr_t GetCachedCAT(uint tsid, uint section_num) const;
    cat_vec_t GetCachedCATs(uint tsid) const;
    cat_vec_t GetCachedCATs(void) const;
    cat_map_t GetCachedCATMap(void) const;

    pmt_const_ptr_t GetCachedPMT(uint program_num, uint section_num) const;
    pmt_vec_t GetCachedPMTs(void) const;
    pmt_map_t GetCachedPMTMap(void) const;

    virtual void ReturnCachedTable(const PSIPTable *psip) const;
    virtual void ReturnCachedPATTables(pat_vec_t&) const;
    virtual void ReturnCachedPATTables(pat_map_t&) const;
    virtual void ReturnCachedCATTables(cat_vec_t&) const;
    virtual void ReturnCachedCATTables(cat_map_t&) const;
    virtual void ReturnCachedPMTTables(pmt_vec_t&) const;
    virtual void ReturnCachedPMTTables(pmt_map_t&) const;

    // Encryption Monitoring
    void AddEncryptionTestPID(uint pnum, uint pid, bool isvideo);
    void RemoveEncryptionTestPIDs(uint pnum);
    bool IsEncryptionTestPID(uint pid) const;

    void TestDecryption(const ProgramMapTable* pmt);
    void ResetDecryptionMonitoringState(void);

    bool IsProgramDecrypted(uint pnum) const;
    bool IsProgramEncrypted(uint pnum) const;

    // "signals"
    void AddMPEGListener(MPEGStreamListener*);
    void RemoveMPEGListener(MPEGStreamListener*);
    void UpdatePAT(const ProgramAssociationTable*);
    void UpdateCAT(const ConditionalAccessTable*);
    void UpdatePMT(uint program_num, const ProgramMapTable*);

    void AddWritingListener(TSPacketListener*);
    void RemoveWritingListener(TSPacketListener*);

    // Single Program Stuff, signals with processed tables
    void AddMPEGSPListener(MPEGSingleProgramStreamListener*);
    void RemoveMPEGSPListener(MPEGSingleProgramStreamListener*);
    void AddAVListener(TSPacketListenerAV*);
    void RemoveAVListener(TSPacketListenerAV*);
    void UpdatePATSingleProgram(ProgramAssociationTable*);
    void UpdatePMTSingleProgram(ProgramMapTable*);

    // Program Stream Stuff
    void AddPSStreamListener(PSStreamListener *val);
    void RemovePSStreamListener(PSStreamListener *val);

  public:
    // Single program stuff, sets
    void SetDesiredProgram(int p);
    inline void SetPATSingleProgram(ProgramAssociationTable*);
    inline void SetPMTSingleProgram(ProgramMapTable*);
    void SetVideoStreamsRequired(uint num)
        { m_pmtSingleProgramNumVideo = num;  }
    uint GetVideoStreamsRequired() const
        { return m_pmtSingleProgramNumVideo; }
    void SetAudioStreamsRequired(uint num)
        { m_pmtSingleProgramNumAudio = num;  }
    uint GetAudioStreamsRequired() const
        { return m_pmtSingleProgramNumAudio; }
    void SetRecordingType(const QString &recording_type);

    // Single program stuff, gets
    int DesiredProgram(void) const          { return m_desiredProgram; }
    uint VideoPIDSingleProgram(void) const  { return m_pidVideoSingleProgram; }
    QString GetRecordingType(void) const    { return m_recordingType; }

    const ProgramAssociationTable* PATSingleProgram(void) const
        { return m_patSingleProgram; }
    const ProgramMapTable* PMTSingleProgram(void) const
        { return m_pmtSingleProgram; }

    ProgramAssociationTable* PATSingleProgram(void)
        { return m_patSingleProgram; }
    ProgramMapTable* PMTSingleProgram(void)
        { return m_pmtSingleProgram; }

    // Single program stuff, mostly used internally
    int VersionPATSingleProgram(void) const;
    int VersionPMTSingleProgram(void) const;

    bool CreatePATSingleProgram(const ProgramAssociationTable&);
    bool CreatePMTSingleProgram(const ProgramMapTable&);

  protected:
    // Table processing -- for internal use
    PSIPTable* AssemblePSIP(const TSPacket* tspacket, bool& moreTablePackets);
    bool AssemblePSIP(PSIPTable& psip, TSPacket* tspacket);
    void SavePartialPSIP(uint pid, PSIPTable* packet);
    PSIPTable* GetPartialPSIP(uint pid)
        { return m_partialPsipPacketCache[pid]; }
    void ClearPartialPSIP(uint pid)
        { m_partialPsipPacketCache.remove(pid); }
    void DeletePartialPSIP(uint pid);
    void ProcessPAT(const ProgramAssociationTable *pat);
    void ProcessCAT(const ConditionalAccessTable *cat);
    void ProcessPMT(const ProgramMapTable *pmt);
    void ProcessEncryptedPacket(const TSPacket&);

    static int ResyncStream(const unsigned char *buffer, int curr_pos, int len);

    void UpdateTimeOffset(uint64_t si_utc_time);

    // Caching
    void IncrementRefCnt(const PSIPTable *psip) const;
    virtual bool DeleteCachedTable(const PSIPTable *psip) const;
    void CachePAT(const ProgramAssociationTable *pat);
    void CacheCAT(const ConditionalAccessTable *_cat);
    void CachePMT(const ProgramMapTable *pmt);

  protected:
    int                       m_cardId;
    QString                   m_siStandard                  {"mpeg"};

    bool                      m_haveCrcBug                  {false};

    mutable QMutex            m_siTimeLock;
    uint                      m_siTimeOffsetCnt             {0};
    uint                      m_siTimeOffsetIndx            {0};
    double                    m_siTimeOffsets[16]           {0.0};

    // Generic EIT stuff used for ATSC and DVB
    EITHelper                *m_eitHelper                   {nullptr};
    float                     m_eitRate                     {0.0F};

    // Listening
    pid_map_t                 m_pidsListening;
    pid_map_t                 m_pidsNotListening;
    pid_map_t                 m_pidsWriting;
    pid_map_t                 m_pidsAudio;
    bool                      m_listeningDisabled           {false};

    // Encryption monitoring
    mutable QMutex            m_encryptionLock              {QMutex::Recursive};
    QMap<uint, CryptInfo>     m_encryptionPidToInfo;
    QMap<uint, uint_vec_t>    m_encryptionPnumToPids;
    QMap<uint, uint_vec_t>    m_encryptionPidToPnums;
    QMap<uint, CryptStatus>   m_encryptionPnumToStatus;

    // Signals
    mutable QMutex            m_listenerLock                {QMutex::Recursive};
    mpeg_listener_vec_t       m_mpegListeners;
    mpeg_sp_listener_vec_t    m_mpegSpListeners;
    ts_listener_vec_t         m_tsWritingListeners;
    ts_av_listener_vec_t      m_tsAvListeners;
    ps_listener_vec_t         m_psListeners;

    // Table versions
    TableStatusMap            m_patStatus;
    TableStatusMap            m_catStatus;
    TableStatusMap            m_pmtStatus;

    // PSIP construction
    pid_psip_map_t            m_partialPsipPacketCache;

    // Caching
    bool                             m_cacheTables;
    mutable QMutex                   m_cacheLock            {QMutex::Recursive};
    mutable pat_cache_t              m_cachedPats;
    mutable cat_cache_t              m_cachedCats;
    mutable pmt_cache_t              m_cachedPmts;
    mutable psip_refcnt_map_t        m_cachedRefCnt;
    mutable psip_refcnt_map_t        m_cachedSlatedForDeletion;

    // Single program variables
    int                       m_desiredProgram;
    QString                   m_recordingType               {"all"};
    bool                      m_stripPmtDescriptors         {false};
    bool                      m_normalizeStreamType         {true};
    uint                      m_pidVideoSingleProgram       {0xffffffff};
    uint                      m_pidPmtSingleProgram         {0xffffffff};
    uint                      m_pmtSingleProgramNumVideo    {1};
    uint                      m_pmtSingleProgramNumAudio    {0};
    ProgramAssociationTable  *m_patSingleProgram            {nullptr};
    ProgramMapTable          *m_pmtSingleProgram            {nullptr};

  // PAT Timeout handling.
  private:
    bool                      m_invalidPatSeen              {false};
    bool                      m_invalidPatWarning           {false};
    MythTimer                 m_invalidPatTimer;
};

#include "mpegtables.h"

inline void MPEGStreamData::SetPATSingleProgram(ProgramAssociationTable* pat)
{
    delete m_patSingleProgram;
    m_patSingleProgram = pat;
}

inline void MPEGStreamData::SetPMTSingleProgram(ProgramMapTable* pmt)
{
    delete m_pmtSingleProgram;
    m_pmtSingleProgram = pmt;
}

inline int MPEGStreamData::VersionPATSingleProgram() const
{
    return (m_patSingleProgram) ? int(m_patSingleProgram->Version()) : -1;
}

inline int MPEGStreamData::VersionPMTSingleProgram() const
{
    return (m_pmtSingleProgram) ? int(m_pmtSingleProgram->Version()) : -1;
}

inline void MPEGStreamData::HandleAdaptationFieldControl(const TSPacket*)
{
    // TODO
    //AdaptationFieldControl afc(tspacket.data()+4);
}

#endif
