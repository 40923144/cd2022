var tipuesearch = {"pages": [{'title': 'About', 'text': '網站倉儲: https://github.com/40923144/cd2022 \n 課程網誌: https://40923144.github.io/cd2022/blog/index.html \n', 'tags': '', 'url': 'About.html'}, {'title': 'Note', 'text': '', 'tags': '', 'url': 'Note.html'}, {'title': '倉儲建立', 'text': '先在自己的隨身碟新增一個資料夾"cd2022" \n \n cd tmp \n cd cd2022 \n \n 複製自己倉儲網址 \n \n 並打上 git clone recurse submodules,後面貼上剛剛複製的網址 \n \n 完成後打cms進入靜態網站,並複製以下網址 \n \n 先將title更改成自己學號 \n \n 再點選Edit All就可以更改自己的網站內容,完成後記得按generate_pages \n \n 回到小黑窗並打上acp "(名稱)" \n \n', 'tags': '', 'url': '倉儲建立.html'}, {'title': 'Token 建立', 'text': '進到Setting \n \n 選擇Developer settings \n \n 進到Personal access tokens 之後再點選Generate new token \n \n 更改以下東西在按下Generate token後會出現一串亂碼先複製下來 \n \n 將剛剛複製的亂碼貼到config就完成了 \n \n', 'tags': '', 'url': 'Token 建立.html'}, {'title': 'WINK 上傳', 'text': '點右鍵 再點檢視頁面來源 \n \n 再複製以下的東西 \n <script> var winkVideoData = { dataVersion: 1, frameRate: 20, buttonFrameLength: 10, buttonFrameOffset: 5, frameStops: { }, }; // ]]></script> \n \n 修改框框內的東西再將影片放入download就完成了 \n \n', 'tags': '', 'url': 'WINK 上傳.html'}, {'title': 'Leo', 'text': 'cd tmp \n leo \n 進入到自己的blog \n \n 紅框框內就可以製作自己的部落格 \n \n 完稱編輯後,先儲存再對著local-blog點右鍵再點Goto Script \n \n 複製框框內的東西到小黑窗在打上acp就完成了 \n \n \n', 'tags': '', 'url': 'Leo.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'W2', 'text': '第6組: repo: \xa0 40923113 \xa0 www: \xa0 40923113 \n \xa0 repo: \xa0 40923130 \xa0 www: \xa0 40923130 \xa0 \n repo: \xa0 40923140 \xa0 www: \xa0 40923140 \xa0 \n repo: \xa0 40923144 \xa0 www: \xa0 40923144 \n \xa0 repo: \xa0 40923145 \xa0 www: \xa0 40923145 \xa0 \n repo: \xa0 40923149 \xa0 www: \xa0 40923149 \n \xa0 repo: \xa0 40923150 \xa0 www: \xa0 40923150 \n \xa0 repo: \xa0 40923152 \xa0 www: \xa0 40923152 \xa0 \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '總共有38個 NX1980 相近的 YOUTUBE 教學影片，使用WINK影片重點解說NX1980功能內容。 \n 我解說的部分為16~19 共4部影片 \n 16. NX Subassemblies  (子母件組合) \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 17. NX Curves,Tubes,Wave Geometry Linker \xa0(製作零件並結合) \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 18. NX Assemblies Top Down \xa0(繪製放置馬達之平台) \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 19. Working Drawing of Engine Mount  (繪製出零件的三視圖) \n \n \n \n \n \n   \n \n \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W6', 'text': '打上 leo 進到自己的blog \n \n 將框框內更改成當週的標題 \n \n 紅框框內就可以製作自己的部落格 \n \n 完稱編輯後,先儲存再對著 local-blog 點右鍵再點 Goto Script \n \n 複製框框內的東西到小黑窗在打上acp就完成了 \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '\n git clone \xa0 https://github.com/mdecourse/scarysim.git \n 修改 scarysim.pro, 蓋掉第 11 行, 成為 # LIBS\xa0\xa0\xa0\xa0 += -lglut -lGLU \n cd scarysim \n qmake -o Makefile scarysim.pro \n mingw32-make -f Makefile.Release 可以在 release 目錄取得 scarysim.exe \n 因為 scarysim.exe 執行需要 base.obj, arm1.obj, arm2.obj, arm3.obj 等零件外型檔案, 以及對應的 .mtl 材質檔案, 因此可將 scarysim.exe 移至倉儲根目錄, 並且需要 msys64_20210419\\mingw64\\bin 路徑中的 dll 動態連結程式庫配合執行. \n 由於此套程式碼在 Target 模式下, 零組件間會造成干涉, 表示其 Inverse Kinematic 運算並不正確, 請設法修正此錯誤後, 修改其零件尺寸與操作控制方法, 設法模擬 MTB 的 \xa0 Pick and Place demo \xa0 範例. \n 請各組指定組員分別利用 Solvespace、NX12、NX1980、NX2008 與 Onshape 繪製 \xa0 Pick and Place demo \xa0 範例所需的零組件, 並完成 Coppeliasim 4.1.0、4.2.0 與 4.3.0 版的 MTB 機械手臂 Pick and Place 模擬, 完成後請說明在使用不同 MCAD 系統與版次的情況下, 該如何執行協同產品設計專案. \n \n 模擬手臂的零件： \n \n \n \n \n \n 組合後的模擬手臂 \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '分別以 Solvespace, NX (12, 1980 或 2008) 及 Onshape, 完成各零件 工程圖 與 組合圖 後, 將 uarm 組合件轉為 \xa0 STL 格式後轉入 CoppeliaSim , 並安排以 GUI Slider 方式 控制前三軸作動 . 各組員需將零組件繪製過程與 CoppeliaSim 操控流程及心得 \n 我使用  Oneshape  來繪製零件，以下是我畫的四個零件 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W10', 'text': '請各組員在下列影片中加入註解說明後, 分別以 w10_block_ui、w10_nx_integ 與 w10_ssh 作為標題, 將說明影片嵌入個人 cd2022 網站頁面 (設為 H2 或 H3) 及 blog 網誌中. \n \xa0 \n', 'tags': '', 'url': 'W10.html'}, {'title': 'block_ui', 'text': '用程式叫出零件長寬高的參數 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'block_ui.html'}, {'title': 'nx_integ', 'text': '修改NX啟動檔,就可以同時使用NX12 NX1980 NX2008 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'nx_integ.html'}, {'title': 'ssh', 'text': '創建一個新的SSH \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'ssh.html'}, {'title': 'W11', 'text': '本週將要進行兩項任務, 第一是確認各分組能夠有效在組長的分組倉儲中, 以非同步協同的方式進行 uArm 機械手臂場景的建置與操控, 第二則是從 CoppeliaSim 的兩種 \xa0 XML 檔案格式 , 了解如何透過程式方法建立 uArm 機械手臂場景. \n \n \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W11-1', 'text': '請各組組員在第一節課堂時段, 以每兩人一小組的方式, 在組長帳號下的分組倉儲中的同一網頁 (標題為 w11s1 ~w11s4) 加入個人 w8-w10 協同設計過程所負責的項目內容與心得. 過程中請參考下列 Wink 影片解決可能產生的衝突, 最後並將 git pull 至 acp 的操作過程, 建立 Wink 影片後, 以組員為單位嵌入個人負責的協同網頁中. \n 學習要點: \n 各組員是否透過 SSH 協定, 參與組長帳號下的分組倉儲內容協同編輯? \n 各組員是否在自己的 Github 帳號下, fork 分組協同倉儲後, 與組長帳號下的分組倉儲內容保持同步? \n 各組員是否在近端對分組倉儲改版前, 都透過 git pull 處理內容衝突與合併後, 再對分組倉儲改版? \n 各組是否每週舉行分組會議, 檢討協同設計內容進度, 並研討所面臨議題解決方案? \n', 'tags': '', 'url': 'W11-1.html'}, {'title': 'W11-2', 'text': 'w11-2 任務: \n \n 請自行搜尋 STL 檔案中的 ASCII 與 Binary 格式, 舉例說明這兩種零件檔案格式如何定義? \n 請利用 MTB 機械手臂中的 Link2 零件檔案為例, 分別在 Solvespace、NX 與 Onshape 中建立 Link2 零件檔案後, 分別以 Binary 與 ASCII 格式轉出 STL 檔案, 若轉出的 STL 為 Binary 格式, 則請設法以 Python 程式轉為 ASCII 格式, 反之, 若轉出的 STL 為 ASCII 格式, 也請設法以 Python 程式轉為 Binary 格式. \n 請試著將 Link2 零件檔案轉入 Coppeliasim 後, 分別以兩種 XML 格式轉出, 並以 Leo Editor 導入後比較其內容差異. CoppeliaSim 兩種 XML 格式中的 tags, 可利用下列檔案讀取: \n \n 學習要點: \n STL 零件檔案格式是如何定義的? \n 為什麼 STL 格式的零件檔案需要分 ASCII 與 Binary 格式? \n Python 程式如何讀取 Binary 格式的 STL 零件檔案? \n 能否利用 Python 程式對 STL 格式的零件檔案, 分別在 ASCII 與 Binary 之間互相轉換? \n CoppeliaSim 機電模擬場景中的 XML 檔案, 能否置入 STL 格式的零件? \n 利用程式方法組合 XML 格式的 CoppeliaSim 機電模擬場景的目的為何? \n 一個整合零組件架構、驅動配置、GUI 介面以及自動控制程式的 CoppeliaSim 場景, 其 XML tags 與屬性檔案能否透過 Leo Editor 執行編輯? \n', 'tags': '', 'url': 'W11-2.html'}, {'title': 'W12', 'text': '\n cd2022_uarm_nx12_imported.7z \xa0 中, 若計入重複引用的零件, 總數有多少? 請列出組成此一 uarm 機械手臂所需的 BOM 列表. \n 若不計入重複引用的零件, 總數有多少? 請列出各零件名稱. \n 當執行機械手臂的設計過程中, 若已知各零件所擬採用的零件材料密度, 請問此一設計中的 uarm 機械手臂的淨重量為多少? ( uArm-Swift-Specifications.pdf ) \n 當執行機械手臂設計與製程規劃時, 若已知各零件擬採行的製造程序、取得方法與所需時間及成本, 請問此一設計中的 uarm 機械手臂, 該如何計算一定數量需求下, 需花費多少時間? 如何計算成本? \n \n W12_Task \n 總共引用155個子零件,其中個別零件總數為58個 \n 30%的零件採 Steel 製作,其餘的採 Aluminum 製作,總重量約 2.2205 kg \n 全部零件採 \xa0Aluminum 製,總重量約 1.4123 kg \n 全部零件採 \xa0 Steel \xa0 製,總重量約\xa04.1062 kg \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'Graduate School', 'text': '\n 可以從影片內的網址去看看以前學長姐推甄研究所所遇到的事情以及需要準備的書審報告 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Graduate School.html'}, {'title': 'cadlab startup', 'text': '\n 利用批次檔案關閉 IPv4, Proxy 自動偵測, 自行設定 IPv6 DNS 與 Proxy. \n 利用 Hybrid 啟動可攜系統. \n 利用 .reg 設定 Putty session, 在 IPv6 網段, 需要包括 Proxy 與 Private key 位置. \n 啟動可攜系統時同時開啟位於 F: 中的 NX2008 \n \n \n \n \n \n \n   \n \n \n \n \n', 'tags': '', 'url': 'cadlab startup.html'}, {'title': 'NXOpen Python', 'text': '\n', 'tags': '', 'url': 'NXOpen Python.html'}, {'title': 'suction pad', 'text': '\n', 'tags': '', 'url': 'suction pad.html'}, {'title': 'W13', 'text': '下載新版的CoppeliaSimEdu_4.3.0 \n \n 先到Teams裡選取一般在選框框內的東西 \n \n 選好之後按下載解壓縮就完成了 \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '\n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '\n', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': '利用 tkinter GUI 介面 slider 控制 uArm 機械手臂 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n   \n \n', 'tags': '', 'url': 'W16.html'}, {'title': 'Online exam', 'text': '', 'tags': '', 'url': 'Online exam.html'}]};