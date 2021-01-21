#ifndef MYTHHTTPSERVER_H
#define MYTHHTTPSERVER_H

// Qt
#include <QHostInfo>

// MythTV
#include "http/mythhttptypes.h"
#include "http/mythhttpthreadpool.h"

class BonjourRegister;

class MythHTTPServer : public MythHTTPThreadPool
{
    Q_OBJECT

    friend class MythHTTPInstance;

  signals:
    // Inbound
    void EnableHTTP     (bool Enable);
    void AddPaths       (const QStringList& Paths);
    void RemovePaths    (const QStringList& Paths);
    void AddHandlers    (const HTTPHandlers& Handlers);
    void RemoveHandlers (const HTTPHandlers& Handlers);
    void AddServices    (const HTTPServices& Services);
    void RemoveServices (const HTTPServices& Services);
    // Outbound
    void PathsChanged   (const QStringList& Paths);
    void HandlersChanged(const HTTPHandlers& Handlers);
    void ServicesChanged(const HTTPServices& Services);
    void OriginsChanged (const QStringList& Origins);
    void HostsChanged   (const QStringList& Hosts);
    // Internal
    void MasterResolved (QHostInfo Info);
    void HostResolved   (QHostInfo Info);

  protected slots:
    void newTcpConnection (qt_socket_fd_t Socket) override;
    void EnableDisable  (bool Enable);
    void NewPaths       (const QStringList& Paths);
    void StalePaths     (const QStringList& Paths);
    void NewHandlers    (const HTTPHandlers& Handlers);
    void StaleHandlers  (const HTTPHandlers& Handlers);
    void NewServices    (const HTTPServices& Services);
    void StaleServices  (const HTTPServices& Services);
    void ResolveMaster  (QHostInfo Info);
    void ResolveHost    (QHostInfo Info);

  protected:
    MythHTTPServer();
   ~MythHTTPServer() override;

  private:
    Q_DISABLE_COPY(MythHTTPServer)
    void Init();
    void Started(bool Tcp, bool Ssl);
    void Stopped();
    void BuildHosts();
    void BuildOrigins();
    void DebugHosts();
    void DebugOrigins();
    bool ReservedPath(const QString& Path);
    static QStringList BuildAddressList(QHostInfo& Info);

    BonjourRegister*  m_bonjour       { nullptr };
    BonjourRegister*  m_bonjourSSL    { nullptr };
    int               m_originLookups { 0 };
    int               m_hostLookups   { 0 };
    MythHTTPConfig    m_config;
    int               m_masterStatusPort { 0 };
    int               m_masterSSLPort    { 0 };
    QString           m_masterIPAddress  { };
};

#endif