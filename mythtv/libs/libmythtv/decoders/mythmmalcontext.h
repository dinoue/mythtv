#ifndef MYTHMMALCONTEXT_H
#define MYTHMMALCONTEXT_H

// MythTV
#include "mythcodeccontext.h"
#include "mythmmalinterop.h"

using MMALProfiles = QList<MythCodecContext::CodecProfile>;

class MythMMALContext : public MythCodecContext
{
  public:
    MythMMALContext(DecoderBase *Parent, MythCodecID Codec);
   ~MythMMALContext() override;
    static MythCodecID GetSupportedCodec(AVCodecContext **Context,
                                         AVCodec **Codec,
                                         const QString &Decoder,
                                         AVStream *Stream,
                                         uint StreamType);
    void        InitVideoCodec          (AVCodecContext *Context, bool SelectedStream, bool &DirectRendering) override;
    bool        RetrieveFrame           (AVCodecContext *Context, VideoFrame *Frame, AVFrame *AvFrame) override;
    int         HwDecoderInit           (AVCodecContext *Context) override;
    void        SetDecoderOptions       (AVCodecContext *Context, AVCodec *Codec) override;
    static bool GetBuffer               (AVCodecContext *Context, VideoFrame *Frame, AVFrame *AvFrame, int);
    bool        GetBuffer2              (AVCodecContext *Context, VideoFrame *Frame, AVFrame *AvFrame, int);
    static enum AVPixelFormat GetFormat (AVCodecContext*, const AVPixelFormat *PixFmt);
    static void GetDecoderList          (QStringList &Decoders);
    static bool HaveMMAL                (void);
    static bool CheckCodecSize          (int Width, int Height, MythCodecContext::CodecProfile Profile);

  protected:
    static const MMALProfiles& GetProfiles(void);
    MythMMALInterop* m_interop { nullptr };
};

#endif // MYTHMMALCONTEXT_H