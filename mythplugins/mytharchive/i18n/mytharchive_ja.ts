<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ja_JP" sourcelanguage="en_US">
<context>
    <name>(ArchiveUtils)</name>
    <message>
        <location filename="../mytharchive/archiveutil.cpp" line="74"/>
        <source>Cannot find the MythArchive work directory.
Have you set the correct path in the settings?</source>
        <translation>MythArchive の作業ディレクトリーが見つかりません。
設定で正しいパスを設定しましたか？</translation>
    </message>
</context>
<context>
    <name>(MythArchiveMain)</name>
    <message>
        <location filename="../mytharchive/main.cpp" line="92"/>
        <source>Found a lock file but the owning process isn&apos;t running!
Removing stale lock file.</source>
        <translation>ロック ファイルが見つかりましたが、所有しているプロセスは実行中ではありません！
古いロックファイルを削除します。</translation>
    </message>
    <message>
        <location filename="../mytharchive/main.cpp" line="203"/>
        <source>Last run did not create a playable DVD.</source>
        <translation>最終実行では、再生可能な DVD を作成していません。</translation>
    </message>
    <message>
        <location filename="../mytharchive/main.cpp" line="210"/>
        <source>Last run failed to create a DVD.</source>
        <translation>最終実行では、DVD の作成に失敗しました。</translation>
    </message>
</context>
<context>
    <name>ArchiveFileSelector</name>
    <message>
        <location filename="../mytharchive/importnative.cpp" line="205"/>
        <source>Find File To Import</source>
        <translation>インポートするファイルを検索</translation>
    </message>
    <message>
        <location filename="../mytharchive/importnative.cpp" line="265"/>
        <source>The selected item is not a valid archive file!</source>
        <translation>選択した項目は、有効なアーカイブファイルではありません！</translation>
    </message>
</context>
<context>
    <name>ArchiveSettings</name>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="20"/>
        <source>MythArchive Temp Directory</source>
        <translation>MythArchive 一時ディレクトリー</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="23"/>
        <source>Location where MythArchive should create its temporary work files. LOTS of free space required here.</source>
        <translation>MythArchive が一時作業ファイルを作る場所。ここには、たくさんの空き容量が必要です。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="35"/>
        <source>MythArchive Share Directory</source>
        <translation>MythArchive 共有ディレクトリー</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="38"/>
        <source>Location where MythArchive stores its scripts, intro movies and theme files</source>
        <translation>MythArchive がスクリプト、イントロ動画、テーマファイルを保存する場所</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="50"/>
        <source>Video format</source>
        <translation>動画フォーマット</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="55"/>
        <source>Video format for DVD recordings, PAL or NTSC.</source>
        <translation>DVD 録画の動画フォーマット。PAL または NTSC。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="64"/>
        <source>File Selector Filter</source>
        <translation>ファイル選択フィルター</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="67"/>
        <source>The file name filter to use in the file selector.</source>
        <translation>ファイル選択画面で利用する、ファイル名のフィルター。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="76"/>
        <source>Location of DVD</source>
        <translation>DVD の場所</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="79"/>
        <source>Which DVD drive to use when burning discs.</source>
        <translation>ディスクへの書き込みにどの DVD ドライブを使うか。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="89"/>
        <source>DVD Drive Write Speed</source>
        <translation>DVD ドライブ書き込み速度</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="92"/>
        <source>This is the write speed to use when burning a DVD. Set to 0 to allow growisofs to choose the fastest available speed.</source>
        <translation>DVD への書き込み速度。0 を設定すると growisofs に最大速度を選択させます。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="103"/>
        <source>Command to play DVD</source>
        <translation>DVD 再生コマンド</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="106"/>
        <source>Command to run when test playing a created DVD. &apos;Internal&apos; will use the internal MythTV player. %f will be replaced with the path to the created DVD structure eg. &apos;xine -pfhq --no-splash dvd:/%f&apos;.</source>
        <translation>作成した DVD をテスト再生する際に実行するコマンド。「内蔵」は MythTV の内蔵プレーヤーを使用します。%f は作成した DVD 構造に置き換わります。例 : 「xine -pfhq --no-splash dvd:/%f」。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="119"/>
        <source>Copy remote files</source>
        <translation>リモートファイルをコピー</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="122"/>
        <source>If set files on remote filesystems will be copied over to the local filesystem before processing. Speeds processing and reduces bandwidth on the network</source>
        <translation>リモートファイルシステムのファイルを設定すると、処理の前にローカルファイルシステムにコピーします。処理速度が上がり、ネットワークの帯域も減少します</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="134"/>
        <source>Always Use Mythtranscode</source>
        <translation>常に Mythtranscode を使用</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="137"/>
        <source>If set mpeg2 files will always be passed though mythtranscode to clean up any errors. May help to fix some audio problems. Ignored if &apos;Use ProjectX&apos; is set.</source>
        <translatorcomment>Fix spelling of MPEG-2</translatorcomment>
        <translation>MPEG-2 ファイルが設定されると、mythtranscode の処理にかけて、エラーが出ないようクリーニングします。いくつかの音声の問題も修正されます。「ProjectX を使用」を設定すると、この設定を無視します。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="149"/>
        <source>Use ProjectX</source>
        <translation>ProjectX を使用</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="152"/>
        <source>If set ProjectX will be used to cut commercials and split mpeg2 files instead of mythtranscode and mythreplex.</source>
        <translation>設定すると、CM カットや MPEG-2 ファイルの分割の際、mythtranscode や mythreplex ではなく、ProjectX を使用します。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="163"/>
        <source>Use FIFOs</source>
        <translation>FIFO を使用</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="166"/>
        <source>The script will use FIFOs to pass the output of mplex into dvdauthor rather than creating intermediate files. Saves time and disk space during multiplex operations but not supported on Windows platform</source>
        <translation>スクリプトは、中間ファイルを作成するのではなく、FIFO を使用して mplex の出力を dvdauthor に渡します。マルチプレックス操作中に時間とディスク領域を節約しますが、Windows プラットフォームはサポートしていません</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="179"/>
        <source>Add Subtitles</source>
        <translation>サブタイトルを追加</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="182"/>
        <source>If available this option will add subtitles to the final DVD. Requires &apos;Use ProjectX&apos; to be on.</source>
        <translation>この設定を有効にすると、最終の DVD にサブタイトルを追加します。「ProjectX を使う」がオンになっている必要があります。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="192"/>
        <source>Main Menu Aspect Ratio</source>
        <translation>メインメニューのアスペクト比</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="194"/>
        <location filename="../mytharchive/archivesettings.cpp" line="210"/>
        <source>4:3</source>
        <comment>Aspect ratio</comment>
        <translation>4:3</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="195"/>
        <location filename="../mytharchive/archivesettings.cpp" line="211"/>
        <source>16:9</source>
        <comment>Aspect ratio</comment>
        <translation>16:9</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="199"/>
        <source>Aspect ratio to use when creating the main menu.</source>
        <translation>メインメニューを作る際に利用するアスペクト比。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="208"/>
        <source>Chapter Menu Aspect Ratio</source>
        <translation>チャプターメニューのアスペクト比</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="212"/>
        <location filename="../mytharchive/archivesettings.cpp" line="221"/>
        <source>Video</source>
        <translation>ビデオ</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="217"/>
        <source>Aspect ratio to use when creating the chapter menu. &apos;%1&apos; means use the same aspect ratio as the associated video.</source>
        <extracomment>%1 is the translation of the &quot;Video&quot; combo box choice</extracomment>
        <translation>チャプターメニューを作成する際に利用するアスペクト比。「%1」でj関連するビデオと同じアスペクト比を使用します。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="228"/>
        <source>Date format</source>
        <translation>日付書式</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="231"/>
        <source>Samples are shown using today&apos;s date.</source>
        <translation>サンプルは今日の日付を表示しています。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="237"/>
        <source>Samples are shown using tomorrow&apos;s date.</source>
        <translation>サンプルは明日の日付を表示しています。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="255"/>
        <source>Your preferred date format to use on DVD menus. %1</source>
        <extracomment>%1 gives additional info on the date used</extracomment>
        <translation>DVD メニューで使用したい日付書式。%1</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="264"/>
        <source>Time format</source>
        <translation>時間書式</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="271"/>
        <source>Your preferred time format to display on DVD menus. You must choose a format with &quot;AM&quot; or &quot;PM&quot; in it, otherwise your time display will be 24-hour or &quot;military&quot; time.</source>
        <translation>DVD メニューに表示する時間フォーマット。AM・PM を含む書式を選ぶべきですが、そうでない場合は24時間表示かミリタリータイムを使います。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="282"/>
        <source>Default Encoder Profile</source>
        <translation>デフォルト エンコード プロファイル</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="284"/>
        <source>HQ</source>
        <comment>Encoder profile</comment>
        <translation>HQ</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="285"/>
        <source>SP</source>
        <comment>Encoder profile</comment>
        <translation>SP</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="286"/>
        <source>LP</source>
        <comment>Encoder profile</comment>
        <translation>LP</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="287"/>
        <source>EP</source>
        <comment>Encoder profile</comment>
        <translation>EP</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="291"/>
        <source>Default encoding profile to use if a file needs re-encoding.</source>
        <translation>ファイルに再エンコードが必要な場合に利用するデフォルトのエンコードプロファイル。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="300"/>
        <source>mplex Command</source>
        <translation>mplex コマンド</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="304"/>
        <source>Command to run mplex</source>
        <translation>mplex を実行するコマンド</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="313"/>
        <source>dvdauthor command</source>
        <translation>dvdauthor コマンド</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="317"/>
        <source>Command to run dvdauthor.</source>
        <translation>dvdauthor を実行するコマンド。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="326"/>
        <source>mkisofs command</source>
        <translation>mkisofs コマンド</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="330"/>
        <source>Command to run mkisofs. (Used to create ISO images)</source>
        <translation>mkisofs を実行するコマンド。(ISO イメージを作るのに使います)</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="339"/>
        <source>growisofs command</source>
        <translation>growisofs コマンド</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="343"/>
        <source>Command to run growisofs. (Used to burn DVDs)</source>
        <translation>growisofs コマンド。(DVD への書き込みに使います)</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="352"/>
        <source>M2VRequantiser command</source>
        <translation>M2VRequantiser コマンド</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="356"/>
        <source>Command to run M2VRequantiser. Optional - leave blank if you don&apos;t have M2VRequantiser installed.</source>
        <translation>M2VRequantiser を実行するコマンド。任意 - M2VRequantiser をインストールしていなければ、空白のままに。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="366"/>
        <source>jpeg2yuv command</source>
        <translation>jpeg2yuv コマンド</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="370"/>
        <source>Command to run jpeg2yuv. Part of mjpegtools package</source>
        <translation>jpeg2yuv を実行するコマンド。mjpegtools パッケージの一部</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="379"/>
        <source>spumux command</source>
        <translation>spumux コマンド</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="383"/>
        <source>Command to run spumux. Part of dvdauthor package</source>
        <translation>spumux を実行するコマンド。dvdauthor パッケージの一部</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="392"/>
        <source>mpeg2enc command</source>
        <translation>mpeg2enc コマンド</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="396"/>
        <source>Command to run mpeg2enc. Part of mjpegtools package</source>
        <translation>mpeg2enc を実行するコマンド。mjpegtools パッケージの一部</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="405"/>
        <source>projectx command</source>
        <translation>projectx コマンド</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="409"/>
        <source>Command to run ProjectX. Will be used to cut commercials and split mpegs files instead of mythtranscode and mythreplex.</source>
        <translation>ProjectX を実行するコマンド。CMカットや MPEG ファイルの際に mythtranscode や mythreplex の代わりに使います。</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="418"/>
        <source>MythArchive Settings</source>
        <translation>MythArchive 設定</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="442"/>
        <source>MythArchive External Commands</source>
        <translation>MythArchive 外部コマンド</translation>
    </message>
    <message>
        <source>MythArchive Settings (2)</source>
        <translation type="vanished">MythArchive Settings (2)</translation>
    </message>
    <message>
        <location filename="../mytharchive/archivesettings.cpp" line="434"/>
        <source>DVD Menu Settings</source>
        <translation>DVD メニュー設定</translation>
    </message>
    <message>
        <source>MythArchive External Commands (1)</source>
        <translation type="vanished">MythArchive External Commands (1)</translation>
    </message>
    <message>
        <source>MythArchive External Commands (2)</source>
        <translation type="vanished">MythArchive External Commands (2)</translation>
    </message>
</context>
<context>
    <name>BurnMenu</name>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="1093"/>
        <source>Cannot burn a DVD.
The last run failed to create a DVD.</source>
        <translation>DVD に書き込めません。
最終実行では、DVD の作成に失敗しました。</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="1099"/>
        <location filename="../mytharchive/mythburn.cpp" line="1111"/>
        <source>Burn DVD</source>
        <translation>DVD に書き込む</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="1100"/>
        <source>
Place a blank DVD in the drive and select an option below.</source>
        <translation>
ブランク DVD をドライブにセットして以下の設定を選択してください。</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="1112"/>
        <source>Burn DVD Rewritable</source>
        <translation>DVD Rewritable に書き込む</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="1113"/>
        <source>Burn DVD Rewritable (Force Erase)</source>
        <translation>DVD Rewritable に書き込む (強制消去)</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="1167"/>
        <source>It was not possible to run mytharchivehelper to burn the DVD.</source>
        <translation>DVD への書き込みに mytharchivehelper が使えません。</translation>
    </message>
</context>
<context>
    <name>BurnThemeUI</name>
    <message>
        <location filename="../mythburn/themes/burnthemestrings.h" line="5"/>
        <source>Has an intro and contains a main menu with 4 recordings per page. Does not have a chapter selection submenu.</source>
        <translation>イントロつき、メインメニューはページごとに4つの録画。チャプター選択のサブメニューなし。</translation>
    </message>
    <message>
        <location filename="../mythburn/themes/burnthemestrings.h" line="6"/>
        <source>Has an intro and contains a summary main menu with 10 recordings per page. Does not have a chapter selection submenu, recording titles, dates or category.</source>
        <translation>イントロつき、メインメニューはページごとに10つの録画。チャプター選択のサブメニュー、録画のタイトル、日付、カテゴリーなし。</translation>
    </message>
    <message>
        <location filename="../mythburn/themes/burnthemestrings.h" line="7"/>
        <source>Has an intro and contains a main menu with 6 recordings per page. Does not have a scene selection submenu.</source>
        <translation>イントロつき、メインメニューはページごとに6つの録画。チャプター選択のサブメニューなし。</translation>
    </message>
    <message>
        <location filename="../mythburn/themes/burnthemestrings.h" line="8"/>
        <source>Has an intro and contains a main menu with 3 recordings per page and a scene selection submenu with 8 chapters points. Shows a program details page before each recording.</source>
        <translation>イントロつき、メインメニューはページごとに3つの録画。8つのチャプターポイントを備えるシーン選択サブメニュー。各録画の前に番組詳細ページを表示。</translation>
    </message>
    <message>
        <location filename="../mythburn/themes/burnthemestrings.h" line="9"/>
        <source>Has an intro and contains a main menu with 3 recordings per page and a scene selection submenu with 8 chapters points. Shows a program details page before each recording. Uses animated thumb images.</source>
        <translation>イントロつき、メインメニューはページごとに3つの録画。8つのチャプターポイントを備えるシーン選択サブメニュー。各録画の前に番組詳細ページを表示。アニメーションするサムネール画像を使用。</translation>
    </message>
    <message>
        <location filename="../mythburn/themes/burnthemestrings.h" line="10"/>
        <source>Has an intro and contains a main menu with 3 recordings per page and a scene selection submenu with 8 chapters points.</source>
        <translation>イントロつき、メインメニューはページごとに3つの録画。8つのチャプターポイントを備えるシーン選択サブメニュー。</translation>
    </message>
    <message>
        <location filename="../mythburn/themes/burnthemestrings.h" line="11"/>
        <source>Has an intro and contains a main menu with 3 recordings per page and a scene selection submenu with 8 chapters points. All the thumb images are animated.</source>
        <translation>イントロつき、メインメニューはページごとに3つの録画。8つのチャプターポイントを備えるシーン選択サブメニュー。すべてのサムネール画像がアニメーション。</translation>
    </message>
    <message>
        <location filename="../mythburn/themes/burnthemestrings.h" line="12"/>
        <source>Creates an auto play DVD with no menus. Shows an intro movie then for each title shows a details page followed by the video in sequence.</source>
        <translation>メニュー無しで自動再生する DVD を作成。イントロ動画を表示し、タイトルごとに詳細ページとそれに続くビデオを順番に表示します。</translation>
    </message>
    <message>
        <location filename="../mythburn/themes/burnthemestrings.h" line="13"/>
        <source>Creates an auto play DVD with no menus and no intro.</source>
        <translation>メニューとイントロ動画無しで自動再生する DVD を作成。</translation>
    </message>
</context>
<context>
    <name>DVDThemeSelector</name>
    <message>
        <location filename="../mytharchive/themeselector.cpp" line="201"/>
        <location filename="../mytharchive/themeselector.cpp" line="212"/>
        <source>No theme description file found!</source>
        <translation>テーマ記述ファイルが見つかりません！</translation>
    </message>
    <message>
        <location filename="../mytharchive/themeselector.cpp" line="225"/>
        <source>Empty theme description!</source>
        <translation>テーマ記述が空です！</translation>
    </message>
    <message>
        <location filename="../mytharchive/themeselector.cpp" line="230"/>
        <source>Unable to open theme description file!</source>
        <translation>テーマ記述ファイルが開けません！</translation>
    </message>
</context>
<context>
    <name>ExportNative</name>
    <message>
        <location filename="../mytharchive/exportnative.cpp" line="197"/>
        <source>You need to add at least one item to archive!</source>
        <translation>アーカイブするには、少なくとも 1 つの項目を追加する必要があります！</translation>
    </message>
    <message>
        <location filename="../mytharchive/exportnative.cpp" line="342"/>
        <source>Menu</source>
        <translation>メニュー</translation>
    </message>
    <message>
        <location filename="../mytharchive/exportnative.cpp" line="349"/>
        <source>Remove Item</source>
        <translation>項目の削除</translation>
    </message>
    <message>
        <location filename="../mytharchive/exportnative.cpp" line="441"/>
        <source>It was not possible to create the DVD. An error occured when running the scripts</source>
        <translation>DVD が作成できません。スクリプト実行中にエラーが発生</translation>
    </message>
    <message>
        <location filename="../mytharchive/exportnative.cpp" line="477"/>
        <source>You don&apos;t have any videos!</source>
        <translation>動画がありません！</translation>
    </message>
</context>
<context>
    <name>FileSelector</name>
    <message>
        <location filename="../mytharchive/fileselector.cpp" line="64"/>
        <source>Find File</source>
        <translation>ファイル検索</translation>
    </message>
    <message>
        <location filename="../mytharchive/fileselector.cpp" line="67"/>
        <source>Find Directory</source>
        <translation>ディレクトリー検索</translation>
    </message>
    <message>
        <location filename="../mytharchive/fileselector.cpp" line="70"/>
        <source>Find Files</source>
        <translation>ファイル検索</translation>
    </message>
    <message>
        <location filename="../mytharchive/fileselector.cpp" line="283"/>
        <source>The selected item is not a directory!</source>
        <translation>選んだ項目はディレクトリーではありません！</translation>
    </message>
</context>
<context>
    <name>ImportNative</name>
    <message>
        <location filename="../mytharchive/importnative.cpp" line="389"/>
        <source>You need to select a valid channel id!</source>
        <translation>有効なチャンネルIDを選択してください！</translation>
    </message>
    <message>
        <location filename="../mytharchive/importnative.cpp" line="420"/>
        <source>It was not possible to import the Archive.  An error occured when running &apos;mytharchivehelper&apos;</source>
        <translation>アーカイブをインポートできません。「mytharchivehelper」の実行中にエラーが発生</translation>
    </message>
    <message>
        <location filename="../mytharchive/importnative.cpp" line="550"/>
        <source>Select a channel id</source>
        <translation>チャンネルIDを選択</translation>
    </message>
    <message>
        <location filename="../mytharchive/importnative.cpp" line="576"/>
        <source>Select a channel number</source>
        <translation>チャンネル番号を選択</translation>
    </message>
    <message>
        <location filename="../mytharchive/importnative.cpp" line="602"/>
        <source>Select a channel name</source>
        <translation>チャンネル名を選択</translation>
    </message>
    <message>
        <location filename="../mytharchive/importnative.cpp" line="628"/>
        <source>Select a Callsign</source>
        <translation>コールサインを選択</translation>
    </message>
</context>
<context>
    <name>LogViewer</name>
    <message>
        <location filename="../mytharchive/logviewer.cpp" line="76"/>
        <source>Cannot find any logs to show!</source>
        <translation>表示するログが見つかりません！</translation>
    </message>
    <message>
        <location filename="../mytharchive/logviewer.cpp" line="198"/>
        <source>Background creation has been asked to stop.
This may take a few minutes.</source>
        <translation>バックグラウンド作成に停止依頼がありました。
数分時間がかかります。</translation>
    </message>
    <message>
        <location filename="../mytharchive/logviewer.cpp" line="337"/>
        <source>Menu</source>
        <translation>メニュー</translation>
    </message>
    <message>
        <location filename="../mytharchive/logviewer.cpp" line="345"/>
        <source>Don&apos;t Auto Update</source>
        <translation>自動更新しない</translation>
    </message>
    <message>
        <location filename="../mytharchive/logviewer.cpp" line="347"/>
        <source>Auto Update</source>
        <translation>自動更新</translation>
    </message>
    <message>
        <location filename="../mytharchive/logviewer.cpp" line="349"/>
        <source>Show Progress Log</source>
        <translation>進捗ログを表示</translation>
    </message>
    <message>
        <location filename="../mytharchive/logviewer.cpp" line="350"/>
        <source>Show Full Log</source>
        <translation>すべてのログを表示</translation>
    </message>
</context>
<context>
    <name>MythBurn</name>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="330"/>
        <location filename="../mytharchive/mythburn.cpp" line="450"/>
        <source>No Cut List</source>
        <translation>カットリストなし</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="341"/>
        <source>You need to add at least one item to archive!</source>
        <translation>アーカイブするには、少なくとも 1 つの項目を追加する必要があります！</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="387"/>
        <source>Retrieving File Information. Please Wait...</source>
        <translation>ファイル情報を取得中です。お待ちください...</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="453"/>
        <source>Encoder: </source>
        <translation>エンコーダー : </translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="765"/>
        <source>Menu</source>
        <translation>メニュー</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="319"/>
        <location filename="../mytharchive/mythburn.cpp" line="439"/>
        <source>Using Cut List</source>
        <translation>カットリストを使用しています</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="324"/>
        <location filename="../mytharchive/mythburn.cpp" line="444"/>
        <source>Not Using Cut List</source>
        <translation>カットリストを使用していません</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="776"/>
        <source>Don&apos;t Use Cut List</source>
        <translation>カットリストを使用しない</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="781"/>
        <source>Use Cut List</source>
        <translation>カットリストを使用</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="786"/>
        <source>Remove Item</source>
        <translation>項目の削除</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="787"/>
        <source>Edit Details</source>
        <translation>詳細の編集</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="788"/>
        <source>Change Encoding Profile</source>
        <translation>エンコード プロファイルを変更</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="789"/>
        <source>Edit Thumbnails</source>
        <translation>サムネールの編集</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="924"/>
        <source>It was not possible to create the DVD.  An error occured when running the scripts</source>
        <translation>DVD が作成できません。スクリプト実行中にエラーが発生</translation>
    </message>
    <message>
        <location filename="../mytharchive/mythburn.cpp" line="966"/>
        <source>You don&apos;t have any videos!</source>
        <translation>動画がありません！</translation>
    </message>
</context>
<context>
    <name>MythControls</name>
    <message>
        <location filename="../mytharchive/main.cpp" line="323"/>
        <source>Toggle use cut list state for selected program</source>
        <translation>選択した番組のカットリスト使用を切り替え</translation>
    </message>
    <message>
        <location filename="../mytharchive/main.cpp" line="326"/>
        <source>Create DVD</source>
        <translation>DVD の作成</translation>
    </message>
    <message>
        <location filename="../mytharchive/main.cpp" line="328"/>
        <source>Create Archive</source>
        <translation>アーカイブの作成</translation>
    </message>
    <message>
        <location filename="../mytharchive/main.cpp" line="330"/>
        <source>Import Archive</source>
        <translation>アーカイブのインポート</translation>
    </message>
    <message>
        <location filename="../mytharchive/main.cpp" line="332"/>
        <source>View Archive Log</source>
        <translation>アーカイブログを表示</translation>
    </message>
    <message>
        <location filename="../mytharchive/main.cpp" line="334"/>
        <source>Play Created DVD</source>
        <translation>作成した DVD を再生</translation>
    </message>
    <message>
        <location filename="../mytharchive/main.cpp" line="336"/>
        <source>Burn DVD</source>
        <translation>DVD への書き込み</translation>
    </message>
</context>
<context>
    <name>RecordingSelector</name>
    <message>
        <location filename="../mytharchive/recordingselector.cpp" line="88"/>
        <location filename="../mytharchive/recordingselector.cpp" line="373"/>
        <location filename="../mytharchive/recordingselector.cpp" line="478"/>
        <source>All Recordings</source>
        <translation>すべての録画</translation>
    </message>
    <message>
        <location filename="../mytharchive/recordingselector.cpp" line="109"/>
        <source>Retrieving Recording List.
Please Wait...</source>
        <translation>録画リストの取得中です。
お待ちください...</translation>
    </message>
    <message>
        <location filename="../mytharchive/recordingselector.cpp" line="133"/>
        <source>Either you don&apos;t have any recordings or no recordings are available locally!</source>
        <translation>録画がないか、ローカルで使用できる録画がありません！</translation>
    </message>
    <message>
        <location filename="../mytharchive/recordingselector.cpp" line="181"/>
        <source>Menu</source>
        <translation>メニュー</translation>
    </message>
    <message>
        <location filename="../mytharchive/recordingselector.cpp" line="188"/>
        <source>Clear All</source>
        <translation>すべて選択解除</translation>
    </message>
    <message>
        <location filename="../mytharchive/recordingselector.cpp" line="189"/>
        <source>Select All</source>
        <translation>すべて選択</translation>
    </message>
</context>
<context>
    <name>SelectDestination</name>
    <message>
        <location filename="../mytharchive/archiveutil.cpp" line="30"/>
        <source>Single Layer DVD</source>
        <translation>一層 DVD</translation>
    </message>
    <message>
        <location filename="../mytharchive/archiveutil.cpp" line="34"/>
        <source>Dual Layer DVD</source>
        <translation>二層 DVD</translation>
    </message>
    <message>
        <location filename="../mytharchive/archiveutil.cpp" line="31"/>
        <source>Single Layer DVD (4,482 MB)</source>
        <translation>一層 DVD (4,482 MB)</translation>
    </message>
    <message>
        <location filename="../mytharchive/archiveutil.cpp" line="35"/>
        <source>Dual Layer DVD (8,964 MB)</source>
        <translation>二層 DVD (8,964 MB)</translation>
    </message>
    <message>
        <location filename="../mytharchive/archiveutil.cpp" line="38"/>
        <source>DVD +/- RW</source>
        <translation>DVD +/- RW</translation>
    </message>
    <message>
        <location filename="../mytharchive/archiveutil.cpp" line="39"/>
        <source>Rewritable DVD</source>
        <translation>Rewritable DVD</translation>
    </message>
    <message>
        <location filename="../mytharchive/archiveutil.cpp" line="42"/>
        <source>File</source>
        <translation>ファイル</translation>
    </message>
    <message>
        <location filename="../mytharchive/archiveutil.cpp" line="43"/>
        <source>Any file accessable from your filesystem.</source>
        <translation>ファイルシステムからアクセスできるすべてのファイル。</translation>
    </message>
    <message>
        <location filename="../mytharchive/selectdestination.cpp" line="261"/>
        <location filename="../mytharchive/selectdestination.cpp" line="317"/>
        <source>Unknown</source>
        <translation>不明</translation>
    </message>
</context>
<context>
    <name>ThemeUI</name>
    <message>
        <location filename="themestrings.h" line="21"/>
        <source>A high quality profile giving approx. 1 hour of video on a single layer DVD</source>
        <translation>高品質プロファイルは、一層 DVD に約 1 時間の動画を収録</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="23"/>
        <source>A standard play profile giving approx. 2 hour of video on a single layer DVD</source>
        <translation>標準再生プロファイルは、一層 DVD に約 2 時間の動画を収録</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="22"/>
        <source>A long play profile giving approx. 4 hour of video on a single layer DVD</source>
        <translation>長時間再生プロファイルは、一層 DVD に約 4 時間の動画を収録</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="20"/>
        <source>A extended play profile giving approx. 6 hour of video on a single layer DVD</source>
        <translation>拡張再生プロファイルは、一層 DVD に約 6 時間の動画を収録</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="5"/>
        <source>%DATE%, %TIME%</source>
        <translation>%DATE% %TIME%</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="221"/>
        <source>Select Destination</source>
        <translation>保存先の選択</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="78"/>
        <source>Choose where you would like your files archived.</source>
        <translation>ファイルをアーカイブする場所を選択してください。</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="185"/>
        <source>Output Type:</source>
        <translation>出力タイプ :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="100"/>
        <source>Destination:</source>
        <translation>保存先 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="138"/>
        <source>Free Space:</source>
        <translation>空き容量 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="79"/>
        <source>Click here to find an output location...</source>
        <translation>ここをクリックして出力場所を検索...</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="160"/>
        <source>Make ISO Image</source>
        <translation>ISO イメージを作成</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="52"/>
        <source>Burn to DVD</source>
        <translation>DVD への書き込み</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="115"/>
        <source>Erase DVD-RW before burning</source>
        <translation>書き込み前に DVD-RW を消去</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="58"/>
        <source>Cancel</source>
        <translation>キャンセル</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="199"/>
        <source>Previous</source>
        <translation>前</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="173"/>
        <source>Next</source>
        <translation>次</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="130"/>
        <source>Filter:</source>
        <translation>フィルター :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="180"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="123"/>
        <source>File Finder</source>
        <translation>ファイル検索</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="231"/>
        <source>Select the file you wish to use.</source>
        <translation>使用したいファイルを選択してください。</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="48"/>
        <source>Back</source>
        <translation>戻る</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="139"/>
        <source>Home</source>
        <translation>ホーム</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="176"/>
        <source>No videos available</source>
        <translation>利用できる動画がありません</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="154"/>
        <source>Log Viewer</source>
        <translation>ログ表示</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="214"/>
        <source>See logs from your archive runs.</source>
        <translation>アーカイブ実行でのログを表示します。</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="267"/>
        <source>Update</source>
        <translation>更新</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="117"/>
        <source>Exit</source>
        <translation>終了</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="266"/>
        <source>Up Level</source>
        <translation>上位レベル</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="280"/>
        <source>description goes here.</source>
        <translation>説明がここに。</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="12"/>
        <source>0.00 GB</source>
        <oldsource>0.00Gb</oldsource>
        <translation>0.00 GB</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="6"/>
        <source>%SIZE% ~ %PROFILE%</source>
        <translation>%SIZE% ~ %PROFILE%</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="8"/>
        <source>%date% / %profile%</source>
        <translation>%date% / %profile%</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="9"/>
        <source>%size% (%profile%)</source>
        <translation>%size% (%profile%)</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="13"/>
        <source>0.00Gb</source>
        <translation>0.00Gb</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="17"/>
        <source>12.34GB</source>
        <translation>12.34GB</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="18"/>
        <source>&lt;-- Details</source>
        <translation>&lt;-- Details</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="19"/>
        <source>&lt;-- Main Menu</source>
        <translation>&lt;-- Main Menu</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="26"/>
        <source>Add Recordings</source>
        <translation>録画を追加</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="28"/>
        <source>Add Videos</source>
        <translation>動画を追加</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="29"/>
        <source>Add a recording or video to archive.</source>
        <translation>アーカイブする録画か動画を追加します。</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="30"/>
        <source>Add a recording, video or file to archive.</source>
        <translation>アーカイブする録画か動画、またはファイルを追加します。</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="32"/>
        <source>Archive</source>
        <translation>アーカイブ</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="33"/>
        <source>Archive Callsign:</source>
        <translation>コールサインをアーカイブ :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="34"/>
        <source>Archive Chan ID:</source>
        <translation>チャンネルID をアーカイブ:</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="35"/>
        <source>Archive Chan No:</source>
        <translation>チャンネル番号をアーカイブ:</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="36"/>
        <source>Archive Files</source>
        <translation>ファイルをアーカイブ</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="38"/>
        <source>Archive Item:</source>
        <translation>項目をアーカイブ :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="40"/>
        <source>Archive Items to DVD</source>
        <translation>DVD に項目をアーカイブ</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="41"/>
        <source>Archive Log Viewer</source>
        <translation>ログ表示をアーカイブ</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="42"/>
        <source>Archive Media</source>
        <translation>メディアをアーカイブ</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="43"/>
        <source>Archive Name:</source>
        <translation>アーカイブ名 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="46"/>
        <source>Associate Channel</source>
        <translation>チャンネルを関連付ける</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="47"/>
        <source>Associated Channel</source>
        <translation>関連チャンネル</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="49"/>
        <source>Burn</source>
        <translation>書き込む</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="50"/>
        <source>Burn Created DVD</source>
        <translation>作成した DVD を書き込み</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="51"/>
        <source>Burn the last created archive to DVD</source>
        <translation>最後に作成したアーカイブを DVD に書き込む</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="53"/>
        <source>Burn to DVD:</source>
        <translation>DVD に書き込み :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="54"/>
        <source>CUTLIST</source>
        <translation>カットリスト</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="55"/>
        <source>Callsign</source>
        <translation>コールサイン</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="57"/>
        <source>Callsign:  %1</source>
        <translation>コールサイン : %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="59"/>
        <source>Cancel Job</source>
        <translation>ジョブを中止</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="61"/>
        <source>Chan. Id:</source>
        <translation>チャンネル ID :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="63"/>
        <source>Change</source>
        <translation>変更</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="65"/>
        <source>Channel ID</source>
        <translation>チャンネル ID</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="67"/>
        <source>Channel ID:  %1</source>
        <translation>Channel ID : %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="68"/>
        <source>Channel Name:</source>
        <translation>チャンネル名 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="69"/>
        <source>Channel No</source>
        <translation>チャンネル番号</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="71"/>
        <source>Channel Number:  %1</source>
        <translation>チャンネル番号 :  %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="74"/>
        <source>Chapter Menu --&gt;</source>
        <translation>チャプターメニュー --&gt;</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="75"/>
        <source>Chapter Menu:</source>
        <translation>チャプターメニュー :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="76"/>
        <source>Chapters</source>
        <translation>チャプター</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="82"/>
        <source>Create ISO Image:</source>
        <translation>ISO イメージを作成 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="83"/>
        <source>Create a</source>
        <translation>作成</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="84"/>
        <source>Create a DVD of your videos</source>
        <translation>あなたの動画のDVDを作成</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="85"/>
        <source>Current Destination:</source>
        <translation>現在の保存先 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="87"/>
        <source>Current Position:</source>
        <translation>現在の位置 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="88"/>
        <source>Current Size:</source>
        <translation>現在のサイズ :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="89"/>
        <source>Current selected item size: %1</source>
        <translation>現在の選択項目サイズ : %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="90"/>
        <source>Current size: %1</source>
        <translation>現在のサイズ : %1</translation>
    </message>
    <message numerus="yes">
        <location filename="themestrings.h" line="91"/>
        <source>Current: %n</source>
        <translation>
            <numerusform>現在 : %n</numerusform>
        </translation>
    </message>
    <message>
        <location filename="themestrings.h" line="92"/>
        <source>DVD</source>
        <translation>DVD</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="93"/>
        <source>DVD Media</source>
        <translation>DVD メディア</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="94"/>
        <source>DVD Menu</source>
        <translation>DVD メニュー</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="96"/>
        <source>Date (time)</source>
        <translation>日付 (時刻)</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="98"/>
        <source>Destination</source>
        <translation>保存先</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="99"/>
        <source>Destination Free Space:</source>
        <translation>保存先空き容量 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="103"/>
        <source>Details:</source>
        <translation>詳細 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="104"/>
        <source>Done</source>
        <translation>完了</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="105"/>
        <source>Edit Archive item Information</source>
        <translation>アーカイブ項目情報の編集</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="106"/>
        <source>Edit Details</source>
        <translation>詳細の編集</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="107"/>
        <source>Edit Thumbnails</source>
        <translation>サムネールの編集</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="108"/>
        <source>Eject your</source>
        <translation>取り出し</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="110"/>
        <source>Encode your video</source>
        <translation>動画のエンコード</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="111"/>
        <source>Encode your video to a file</source>
        <translation>動画をファイルにエンコード</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="112"/>
        <source>Encoded Size:</source>
        <translation>エンコード済みサイズ :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="113"/>
        <source>Encoder Profile:</source>
        <translation>エンコード プロファイル :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="114"/>
        <source>Encoding Profile</source>
        <translation>エンコード プロファイル</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="116"/>
        <source>Error: %1</source>
        <translation>エラー : %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="118"/>
        <source>Export</source>
        <translation>エクスポート</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="119"/>
        <source>Export your</source>
        <translation>エクスポート</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="120"/>
        <source>Export your videos</source>
        <translation>動画のエクスポート</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="121"/>
        <source>File</source>
        <translation>ファイル</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="122"/>
        <source>File Browser</source>
        <translation>ファイルブラウザー</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="125"/>
        <source>File browser</source>
        <translation>ファイルブラウザー</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="126"/>
        <source>File...</source>
        <translation>ファイル...</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="127"/>
        <source>Filename:</source>
        <translation>ファイル名 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="128"/>
        <source>Filesize</source>
        <translation>ファイルサイズ</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="132"/>
        <source>Find Location</source>
        <translation>場所を検索</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="134"/>
        <source>First, select the thumb image you want to change from the overview. Second, press the &apos;tab&apos; key to move to the select thumb frame button to change the image.</source>
        <translation>最初に、概要から変更したいサムネール画像を選択します。次に、「Tab」キーを押して変更したいサムネールフレームボタンに移動して選択します。</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="135"/>
        <source>Force Overwrite of DVD-RW Media</source>
        <translation>DVD-RW メディアに強制的に上書き</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="136"/>
        <source>Force Overwrite of DVD-RW Media:</source>
        <translation>DVD-RW メディアに強制的に上書き :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="140"/>
        <source>Import</source>
        <translation>インポート</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="142"/>
        <source>Import an</source>
        <translation>インポート</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="143"/>
        <source>Import recordings from a native archive</source>
        <translation>ネイティブアーカイブから録画をインポート</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="144"/>
        <source>Import videos from an Archive</source>
        <translation>アーカイブから動画をインポート</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="146"/>
        <source>Intro --&gt;</source>
        <translation>イントロ --&gt;</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="147"/>
        <source>Intro:</source>
        <translation>イントロ :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="148"/>
        <source>Local Callsign:</source>
        <translation>ローカルコールサイン :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="149"/>
        <source>Local Chan ID:</source>
        <translation>ローカルチャンネルID :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="150"/>
        <source>Local Chan No:</source>
        <translation>ローカルチャンネル番号 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="152"/>
        <source>Local Name:</source>
        <translation>ローカル名 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="153"/>
        <source>Log</source>
        <translation>ログ</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="155"/>
        <source>Log viewer</source>
        <translation>ログ表示</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="156"/>
        <source>MENU changes focus. Numbers 0-9 jump to that thumb image.
When the preview image has focus, UP/DOWN changes the seek amount, LEFT/RIGHT jumps forward/backward by the seek amount, and SELECT chooses the current preview image for the selected thumb image.</source>
        <translation>MENU でフォーカスが移ります。数字の 0-9 で該当するサムネール画像にジャンプします。
プレビュー画像にフォーカスがある状態で、上・下でシーク量を変更、右・左でシーク量だけ早送り・巻戻し、SELECTで現在のプレビュー画像を選択したサムネール画像として選択します。</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="158"/>
        <source>Main Menu:</source>
        <translation>メインメニュー :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="159"/>
        <source>Main menu</source>
        <translation>メインメニュー</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="161"/>
        <source>Make ISO image</source>
        <translation>ISO イメージを作成</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="162"/>
        <source>Make ISO image:</source>
        <translation>ISO イメージを作成 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="163"/>
        <source>Media</source>
        <translation>メディア</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="165"/>
        <source>Metadata</source>
        <translation>メタデータ</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="166"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="168"/>
        <source>Name:  %1</source>
        <translation>名前 :  %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="169"/>
        <source>Navigation</source>
        <translation>ナビゲーション</translation>
    </message>
    <message numerus="yes">
        <location filename="themestrings.h" line="172"/>
        <source>New: %n</source>
        <translation>
            <numerusform>新規 :  %n</numerusform>
        </translation>
    </message>
    <message>
        <location filename="themestrings.h" line="174"/>
        <source>No files are selected for DVD</source>
        <translation>DVD 用に選択されたファイルがありません</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="177"/>
        <source>Not Applicable</source>
        <translation>適用できません</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="178"/>
        <source>Not Available in this Theme</source>
        <translation>このテーマでは使えません</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="179"/>
        <source>Not available in this theme</source>
        <translation>このテーマでは使えません</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="184"/>
        <source>Original Size:</source>
        <translation>元のサイズ :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="186"/>
        <source>Overwrite DVD-RW Media:</source>
        <translation>DVD-RW メディアに上書き :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="188"/>
        <source>Parental Level</source>
        <translation>ペアレンタルレベル</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="189"/>
        <source>Parental Level:</source>
        <translation>ペアレンタルレベル :</translation>
    </message>
    <message numerus="yes">
        <location filename="themestrings.h" line="191"/>
        <source>Parental Level: %n</source>
        <translation>
            <numerusform>ペアレンタルレベル : %n</numerusform>
        </translation>
    </message>
    <message>
        <location filename="themestrings.h" line="194"/>
        <source>Play the last created archive DVD</source>
        <translation>最後に作成したアーカイブ DVD を再生</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="195"/>
        <source>Position View:</source>
        <translation>位置表示 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="196"/>
        <source>Press &apos;left&apos; and &apos;right&apos; arrows to move through the frames. Press &apos;up&apos; and &apos;down&apos; arrows to change seek amount. Press &apos;select&apos; or &apos;enter&apos; key to lock the selected thumb image.</source>
        <translation>「左」と「右」を押してフレーム間を移動します。「上」と「下」でシーク量を変更。「select」または「Enter」キーで選択したサムネール画像をロックします。</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="198"/>
        <source>Preview</source>
        <translation>プレビュー</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="201"/>
        <source>Read video from data dvd or file</source>
        <translation>動画をデータ DVD またはファイルから読む</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="203"/>
        <source>Recordings</source>
        <translation>録画</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="204"/>
        <source>Recordings group:</source>
        <translation>録画グループ :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="206"/>
        <source>Save recordings and videos to a native archive</source>
        <translation>録画や動画をネイティブアーカイブに保存</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="207"/>
        <source>Save recordings and videos to video DVD</source>
        <translation>録画や動画を DVD として保存</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="209"/>
        <source>Search Chan ID</source>
        <translation>チャンネルIDを検索</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="210"/>
        <source>Search Chan NO</source>
        <translation>チャンネル番号を検索</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="212"/>
        <source>Search Local</source>
        <translation>ローカルを検索</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="216"/>
        <source>Seek Amount:</source>
        <translation>シーク量 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="217"/>
        <source>Seek amount:</source>
        <translation>シーク量 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="220"/>
        <source>Select Channel</source>
        <translation>チャンネルを選択</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="224"/>
        <source>Select Files</source>
        <translation>ファイルを選択</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="225"/>
        <source>Select Recordings</source>
        <translation>録画を選択</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="226"/>
        <source>Select Recordings for your archive or image</source>
        <translation>アーカイブかイメージにする録画を選択</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="228"/>
        <source>Select a destination for your archive or image</source>
        <translation>アーカイブかイメージの保存先を選択</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="233"/>
        <source>Select thumb image:</source>
        <translation>サムネール画像を選択 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="234"/>
        <source>Select your DVD menu theme</source>
        <translation>DVD メニューのテーマを選択</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="235"/>
        <source>Selected Items to be archived</source>
        <translation>選択した項目をアーカイブします</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="236"/>
        <source>Selected Items to be burned</source>
        <translation>選択した項目をメディアに書き込みます</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="237"/>
        <source>Selected recording item size: %1</source>
        <translation>選択した録画項目サイズ : %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="238"/>
        <source>Selected video item size: %1</source>
        <translation>選択した動画項目サイズ : %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="239"/>
        <source>Sep 13, 2004 11:00 pm (1h 15m)</source>
        <translation>Sep 13, 2004 11:00 pm (1h 15m)</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="240"/>
        <source>Show</source>
        <translation>表示</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="241"/>
        <source>Show Recordings</source>
        <translation>録画を表示</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="293"/>
        <source>~</source>
        <translation>~</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="227"/>
        <source>Select Videos</source>
        <translation>Select Videos</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="273"/>
        <source>Video Category:</source>
        <translation>Video Category:</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="181"/>
        <source>Ok</source>
        <translation>Ok</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="242"/>
        <source>Show Videos</source>
        <translation>動画を表示</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="243"/>
        <source>Show log with archive activities</source>
        <translation>アーカイブ処理の録画を表示</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="244"/>
        <source>Show the Archive Log Viewer</source>
        <translation>アーカイブログ表示</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="245"/>
        <source>Size:</source>
        <translation>サイズ :</translation>
    </message>
    <message numerus="yes">
        <location filename="themestrings.h" line="246"/>
        <source>Size: %n</source>
        <translation>
            <numerusform>サイズ : %n</numerusform>
        </translation>
    </message>
    <message>
        <location filename="themestrings.h" line="249"/>
        <source>Start Time: %1</source>
        <translation>開始時間 : %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="250"/>
        <source>Start to</source>
        <translation>開始</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="251"/>
        <source>Start to Burn your archive to DVD</source>
        <translation>アーカイブの DVD 書き込みを開始</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="253"/>
        <source>Subtitle: %1</source>
        <translation>サブタイトル : %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="254"/>
        <source>Test</source>
        <translation>テスト</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="255"/>
        <source>Test created</source>
        <translation>テストを作成</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="256"/>
        <source>Test created DVD</source>
        <translation>テスト作成したDVD</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="257"/>
        <source>Theme description</source>
        <translation>テーマの説明</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="258"/>
        <source>Theme for the DVD menu:</source>
        <translation>DVD メニューのテーマ :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="259"/>
        <source>Theme preview:</source>
        <translation>テーマプレビュー :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="264"/>
        <source>Title: %1</source>
        <translation>タイトル : %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="265"/>
        <source>Tools and Utilities for archives</source>
        <translation>アーカイブのツール</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="268"/>
        <source>Use archive</source>
        <translation>アーカイブを使用</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="269"/>
        <source>Used: %1</source>
        <translation>使用済み : %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="270"/>
        <source>Utilities</source>
        <translation>ツール</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="271"/>
        <source>Utilities for MythArchive</source>
        <translation>MythArchive ツール</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="272"/>
        <source>Video Category</source>
        <translation>動画カテゴリー</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="274"/>
        <source>Video category:</source>
        <translation>動画カテゴリー :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="275"/>
        <source>Videos</source>
        <translation>動画</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="276"/>
        <source>View progress of your archive or image</source>
        <translation>アーカイブまたはイメージの進捗状況を表示</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="277"/>
        <source>Write video to data dvd or file</source>
        <translation>動画をデータDVDまたはファイルに書く</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="278"/>
        <source>XML File to Import</source>
        <translation>インポートする XML ファイル</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="279"/>
        <source>decrease seek amount</source>
        <translation>シーク量を減らす</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="281"/>
        <source>frame</source>
        <translation>フレーム</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="282"/>
        <source>increase seek amount</source>
        <translation>シーク量を増やす</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="283"/>
        <source>move left</source>
        <translation>左に移動</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="284"/>
        <source>move right</source>
        <translation>右に移動</translation>
    </message>
    <message numerus="yes">
        <location filename="themestrings.h" line="285"/>
        <source>profile: %n</source>
        <translation>
            <numerusform>プロファイル : %n</numerusform>
        </translation>
    </message>
    <message>
        <location filename="themestrings.h" line="287"/>
        <source>title goes here</source>
        <translation>タイトルをここからはじめる</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="288"/>
        <source>to</source>
        <translation>to</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="289"/>
        <source>x.xx GB</source>
        <oldsource>x.xx Gb</oldsource>
        <translation>x.xx GB</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="187"/>
        <source>PL:</source>
        <translation>PL:</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="15"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="290"/>
        <source>x.xx Gb</source>
        <translation>x.xx Gb</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="64"/>
        <source>Change Encoding Profile</source>
        <translation>エンコード プロファイルを変更</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="16"/>
        <source>12.34 GB</source>
        <oldsource>12.34GB</oldsource>
        <translation>12.34 GB</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="95"/>
        <source>DVD Menu Theme</source>
        <translation>DVD メニューテーマ</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="77"/>
        <source>Choose the appearance of your DVD.</source>
        <translation>DVD の見た目を選択してください。</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="260"/>
        <source>Theme:</source>
        <translation>テーマ :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="145"/>
        <source>Intro</source>
        <translation>イントロ</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="157"/>
        <source>Main Menu</source>
        <translation>メインメニュー</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="73"/>
        <source>Chapter Menu</source>
        <translation>チャプターメニュー</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="102"/>
        <source>Details</source>
        <translation>詳細</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="218"/>
        <source>Select Archive Items</source>
        <translation>アーカイブする項目を選択</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="232"/>
        <source>Select the recordings and videos you wish to save.</source>
        <translation>保存したい録画や動画を選択してください。</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="175"/>
        <source>No files are selected for archive</source>
        <translation>アーカイブ用のファイルを選択していません</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="25"/>
        <source>Add Recording</source>
        <translation>録画を追加</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="27"/>
        <source>Add Video</source>
        <translation>動画を追加</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="24"/>
        <source>Add File</source>
        <translation>ファイルを追加</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="11"/>
        <source>0 mb</source>
        <translation>0 mb</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="292"/>
        <source>xxxxx mb</source>
        <translation>xxxxx mb</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="37"/>
        <source>Archive Item Details</source>
        <translation>アーカイブ項目の詳細</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="263"/>
        <source>Title:</source>
        <translation>タイトル :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="252"/>
        <source>Subtitle:</source>
        <translation>サブタイトル :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="247"/>
        <source>Start Date:</source>
        <translation>開始日 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="262"/>
        <source>Time:</source>
        <translation>時間 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="97"/>
        <source>Description:</source>
        <translation>説明 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="261"/>
        <source>Thumb Image Selector</source>
        <translation>サムネール画像選択</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="86"/>
        <source>Current Position</source>
        <translation>現在の位置</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="14"/>
        <source>0:00:00.00</source>
        <translation>0:00:00.00</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="215"/>
        <source>Seek Amount</source>
        <translation>シーク量</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="137"/>
        <source>Frame</source>
        <translation>フレーム</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="205"/>
        <source>Save</source>
        <translation>保存</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="229"/>
        <source>Select a theme</source>
        <translation>テーマを選択</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="291"/>
        <source>xxxxx MB</source>
        <oldsource>xxxxx mb</oldsource>
        <translation>xxxxx MB</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="131"/>
        <source>Find</source>
        <translation>検索</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="10"/>
        <source>0 MB</source>
        <translation>0 MB</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="197"/>
        <source>Prev</source>
        <translation>前</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="286"/>
        <source>sep 13, 2004 11:00 pm (1h 15m)</source>
        <translation>sep 13, 2004 11:00 pm (1h 15m)</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="124"/>
        <source>File Finder To Import</source>
        <translation>インポートするファイルの検索</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="248"/>
        <source>Start Time:</source>
        <translation>開始時間 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="219"/>
        <source>Select Associated Channel</source>
        <translation>関連チャンネルを選択</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="45"/>
        <source>Archived Channel</source>
        <translation>アーカイブチャンネル</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="60"/>
        <source>Chan. ID:</source>
        <translation>チャンネル ID :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="62"/>
        <source>Chan. No:</source>
        <translation>チャンネル番号 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="56"/>
        <source>Callsign:</source>
        <translation>コールサイン :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="167"/>
        <source>Name:</source>
        <translation>名前 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="151"/>
        <source>Local Channel</source>
        <translation>ローカルチャンネル番号</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="211"/>
        <source>Search Channel</source>
        <translation>チャンネル検索</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="208"/>
        <source>Search Callsign</source>
        <translation>コールサイン検索</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="213"/>
        <source>Search Name</source>
        <translation>名前検索</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="133"/>
        <source>Finish</source>
        <translation>完了</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="222"/>
        <source>Select Destination:</source>
        <translation>保存先の選択 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="192"/>
        <source>Parental level: %1</source>
        <translation>ペアレンタルレベル : %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="183"/>
        <source>Old size:</source>
        <translation>旧サイズ :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="171"/>
        <source>New size:</source>
        <translation>新サイズ :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="230"/>
        <source>Select a theme:</source>
        <translation>テーマを選択 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="164"/>
        <source>Menu</source>
        <translation>メニュー</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="72"/>
        <source>Chapter</source>
        <translation>チャプター</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="101"/>
        <source>Detail</source>
        <translation>詳細</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="223"/>
        <source>Select File to Import</source>
        <translation>インポートするファイルの選択</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="31"/>
        <source>Add video</source>
        <translation>動画を追加</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="129"/>
        <source>Filesize: %1</source>
        <translation>Filesize: %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="202"/>
        <source>Recorded Time: %1</source>
        <translation>開始時間 : %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="7"/>
        <source>%&quot;|SUBTITLE|&quot; %%(|ORIGINALAIRDATE|) %%(|STARS|) %%DESCRIPTION%</source>
        <translation>%&quot;|SUBTITLE|&quot; %%(|ORIGINALAIRDATE|) %%(|STARS|) %%DESCRIPTION%</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="190"/>
        <source>Parental Level: %1</source>
        <translation>ペアレンタルレベル : %1</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="39"/>
        <source>Archive Items</source>
        <translation>項目をアーカイブ</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="200"/>
        <source>Profile:</source>
        <translation>プロファイル :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="182"/>
        <source>Old Size:</source>
        <translation>旧サイズ :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="170"/>
        <source>New Size:</source>
        <translation>新サイズ :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="66"/>
        <source>Channel ID:</source>
        <translation>Channel ID :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="70"/>
        <source>Channel Number:</source>
        <translation>チャンネル番号 :</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="81"/>
        <source>Create DVD</source>
        <translation>DVD の作成</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="80"/>
        <source>Create Archive</source>
        <translation>アーカイブの作成</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="109"/>
        <source>Encode Video File</source>
        <translation>動画ファイルのエンコード</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="141"/>
        <source>Import Archive</source>
        <translation>アーカイブのインポート</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="44"/>
        <source>Archive Utilities</source>
        <translation>アーカイブツール</translation>
    </message>
    <message>
        <source>Show Log Viewer</source>
        <translation type="vanished">Show Log Viewer</translation>
    </message>
    <message>
        <location filename="themestrings.h" line="193"/>
        <source>Play Created DVD</source>
        <translation>作成した DVD を再生</translation>
    </message>
    <message>
        <source>Burn DVD</source>
        <translation type="vanished">Burn DVD</translation>
    </message>
</context>
<context>
    <name>ThumbFinder</name>
    <message>
        <location filename="../mytharchive/thumbfinder.cpp" line="856"/>
        <source>Menu</source>
        <translation>メニュー</translation>
    </message>
    <message>
        <location filename="../mytharchive/thumbfinder.cpp" line="863"/>
        <source>Exit, Save Thumbnails</source>
        <translation>サムネールを保存して終了</translation>
    </message>
    <message>
        <location filename="../mytharchive/thumbfinder.cpp" line="864"/>
        <source>Exit, Don&apos;t Save Thumbnails</source>
        <translation>サムネールを保存せずに終了</translation>
    </message>
</context>
<context>
    <name>VideoSelector</name>
    <message>
        <location filename="../mytharchive/videoselector.cpp" line="140"/>
        <source>Menu</source>
        <translation>メニュー</translation>
    </message>
    <message>
        <location filename="../mytharchive/videoselector.cpp" line="147"/>
        <source>Clear All</source>
        <translation>すべて選択解除</translation>
    </message>
    <message>
        <location filename="../mytharchive/videoselector.cpp" line="148"/>
        <source>Select All</source>
        <translation>すべて選択</translation>
    </message>
    <message>
        <location filename="../mytharchive/videoselector.cpp" line="330"/>
        <location filename="../mytharchive/videoselector.cpp" line="496"/>
        <source>All Videos</source>
        <translation>すべてのビデオ</translation>
    </message>
    <message>
        <location filename="../mytharchive/videoselector.cpp" line="549"/>
        <source>You need to enter a valid password for this parental level</source>
        <translation>このペアレンタルレベルではパスワード入力が必要です</translation>
    </message>
</context>
</TS>
