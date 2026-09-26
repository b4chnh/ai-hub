const L = (lang, en, vi) => (lang === "vi" ? vi : en);

const pages = {
  vi: {
    htmlLang: "vi",
    title: "AI Hub — từng tab trên menu bar",
    navTabs: "Các tab",
    download: "Tải DMG",
    langLabel: "EN",
    foot: "AI Hub · app native cho macOS · MIT",
    heroEyebrow: "macOS 14 trở lên · Apple Silicon · MIT",
    heroTitle: "Từng tab hiện đúng những gì.",
    heroLede: "AI Hub là app menu bar. Bấm icon để mở panel. Bên trong có năm tab: Tổng quan, Cloud AI, Hệ thống, AI Local và Điều khiển. Trang này đi từng màn hình và ghi đúng các hàng đang vẽ trong app.",
    req: "Cần macOS 14 trở lên",
    facts: ["Panel 440 pt, mở rộng 780 pt", "Tiếng Việt và English", "Token nằm trong Keychain", "API local chỉ 127.0.0.1"],
    shellTitle: "Khung chung của mọi tab",
    shell: [
      ["Tiêu đề", "Icon, chữ AI Hub, và dòng phụ là các mục đang bật: Cloud · Hệ thống · Local · Điều khiển."],
      ["Ba nút góc phải", "Đổi kích thước panel, làm mới toàn bộ, và mở Cài đặt."],
      ["Thanh tab", "Overview, Cloud AI, System, AI Local, Controls. Tab tắt trong Cài đặt sẽ biến mất. Nếu tắt hết, Overview vẫn còn."],
      ["Kích thước", "Rộng 440 pt. Nút phóng to đưa panel lên 780 pt. Cao tối thiểu khoảng 480 pt khi không ở dạng thu gọn."]
    ],
    sectionTitle: "Bên trong từng tab",
    sectionLede: "Chọn một tab. Khung bên trái là bố cục màn hình đó. Cột bên phải là từng hàng chữ, số và nút thật sự có trên tab.",
    example: "Số liệu trong khung là ví dụ, không phải máy của bạn.",
    installTitle: "Cài và chạy",
    install: [
      ["Tải", "Nút tải trỏ tới file .dmg của bản phát hành mới nhất. Kéo AI Hub.app vào thư mục Applications."],
      ["Lần mở đầu", "App ký bằng Apple Development, chưa notarize. Control-click biểu tượng rồi chọn Open."],
      ["Quyền quản trị", "Chỉ khi bấm Áp dụng ở tab cấu hình IP. Quét ARP và đọc quota không xin mật khẩu quản trị."],
      ["Widget", "Thêm widget AI Hub cỡ nhỏ, vừa hoặc lớn. Bấm widget mở lại panel."]
    ]
  },
  en: {
    htmlLang: "en",
    title: "AI Hub — what each tab shows",
    navTabs: "Tabs",
    download: "Download DMG",
    langLabel: "VI",
    foot: "AI Hub · native macOS app · MIT",
    heroEyebrow: "macOS 14 or later · Apple Silicon · MIT",
    heroTitle: "What each tab actually shows.",
    heroLede: "AI Hub is a menu bar app. Click the icon to open the panel. Inside are five tabs: Overview, Cloud AI, System, AI Local, and Controls. This page walks through each screen and names the rows the app draws.",
    req: "Requires macOS 14 or later",
    facts: ["Panel is 440 pt, expanded 780 pt", "English and Tiếng Việt", "Tokens stay in Keychain", "Local APIs are 127.0.0.1 only"],
    shellTitle: "What every tab shares",
    shell: [
      ["Title", "Icon, the words AI Hub, and a subtitle of the sections that are on: Cloud · System · Local · Controls."],
      ["Three buttons", "Resize the panel, refresh everything, and open Settings."],
      ["Tab bar", "Overview, Cloud AI, System, AI Local, Controls. A tab hidden in Settings disappears. If every tab is hidden, Overview stays."],
      ["Size", "440 pt wide. The resize button opens it to 780 pt. Minimum height is about 480 pt unless the panel is compact."]
    ],
    sectionTitle: "Inside each tab",
    sectionLede: "Pick a tab. The frame on the left is that screen’s layout. The column on the right is each label, number, and button that screen really has.",
    example: "Figures in the frame are examples, not your Mac.",
    installTitle: "Install and open",
    install: [
      ["Download", "The download button points at the .dmg on the latest release. Drag AI Hub.app into Applications."],
      ["First launch", "The app is Apple Development signed and not notarized. Control-click the icon and choose Open."],
      ["Administrator", "Only when you press Apply on the IP configuration tab. ARP scan and quota reads do not ask for an admin password."],
      ["Widget", "Add the AI Hub widget in small, medium, or large. Clicking it opens the panel."]
    ]
  }
};

const tabs = {
  vi: [
    {
      id: "menu",
      pill: "Menu bar",
      kicker: "Trước khi mở panel",
      title: "Icon trên thanh menu",
      lead: "Icon là một viên nang. Chữ trên viên nang đổi theo mục đã chọn trong Cài đặt. Tooltip ghi rõ nguồn số.",
      rows: [
        ["Quota cloud còn lại", "Chế độ mặc định. Viên nang hiện phần trăm còn lại thấp nhất của AI đã chọn. Chọn được: quota thấp nhất, Codex, Grok, Claude, hoặc Antigravity."],
        ["Tooltip quota", "Dạng AI Hub · tên AI · cửa sổ: còn bao nhiêu phần trăm · giờ đặt lại. Chưa có số thì hiện — và tooltip nói chưa có quota."],
        ["CPU", "Viên nang hiện phần trăm CPU, đã quy về 0–100%."],
        ["Áp lực RAM", "Khác hai chế độ kia: bên cạnh icon có chữ RAM và từ áp lực thô của hệ thống: normal, warning, critical, hoặc unknown. Không phải một phần trăm."],
        ["Menu khi bấm icon", "Tài khoản: Đăng nhập Codex, Grok, Claude, Antigravity, và Đăng xuất tất cả."],
        ["Ghim và cửa sổ", "Ghim widget ra Desktop, giữ cửa sổ luôn nổi, mở lúc đăng nhập."],
        ["Liên kết và thoát", "Mở trang usage của Codex, mở trang usage của Grok, và Thoát AI Hub."]
      ]
    },
    {
      id: "overview",
      pill: "Tổng quan",
      kicker: "Tab Overview",
      title: "Một màn hình rút gọn của máy, cloud và model local",
      lead: "Overview không cuộn danh sách dài. Nó ghép ba khối: máy này, tối đa ba thẻ cloud, và tối đa hai runtime local.",
      rows: [
        ["THIS MAC", "Ba vòng đồng tâm: RAM cam, CPU tím, ổ đĩa xanh, kèm phần trăm. Giữa vòng là icon máy."],
        ["Bộ nhớ", "Đã dùng / tổng, số trống, và áp lực bộ nhớ."],
        ["CPU", "Tên chip, số nhân, số luồng, và nhiệt. Có số °C thì hiện nhiệt độ, không thì hiện trạng thái nhiệt."],
        ["Ổ đĩa", "Đã dùng / tổng, tên volume, và dung lượng trống."],
        ["Mạng", "Tốc độ tải xuống và tải lên. Tên cổng ưu tiên en0 nếu cổng đó đang có số liệu, không thì cổng en* đầu tiên."],
        ["Giờ cập nhật", "Góc phải khối máy ghi giờ mẫu mới nhất, Đang lấy mẫu, Tạm dừng, hoặc Dữ liệu cũ."],
        ["CLOUD AI", "Tối đa ba tài khoản đã có quota. Mỗi thẻ: tên, phần trăm còn lại, thanh, tên gói, và đồng hồ đặt lại. Bấm thẻ nhảy sang tab Cloud."],
        ["AI LOCAL", "Tối đa hai runtime. Chấm xanh là online. Có model đang nạp thì hiện tên model và RAM nếu runtime báo. Không có model thì hiện Online · Chưa nạp model. Offline thì ghi trạng thái kết nối."],
        ["Khi tắt hết mục", "Nếu System, Cloud và AI Local đều tắt, Overview chỉ còn một dòng: bật các mục trong Cài đặt."]
      ]
    },
    {
      id: "cloud",
      pill: "Cloud AI",
      kicker: "Tab Cloud AI",
      title: "Mỗi tài khoản một thẻ, mỗi hạn mức một hàng",
      lead: "Bốn provider: Codex, Antigravity, Claude, Grok. Provider chưa có credential bị ẩn hoàn toàn. Tài khoản đã kết nối đứng trước. Tài khoản chưa kết nối gom ở dưới với nút Đăng nhập.",
      rows: [
        ["Đầu thẻ", "Icon, tên provider, và nhãn gói nếu khác tên provider. Tài khoản đang được chọn cho menu bar có dấu được chọn."],
        ["Đăng nhập / Đăng xuất", "Thẻ chưa có số có nút Đăng nhập. Thẻ đã kết nối có Đăng xuất. Token OAuth nằm trong Keychain. App cũng đọc credential CLI của Codex, Grok và Claude cho đến khi bạn đăng xuất."],
        ["Một hạn mức", "Tên cửa sổ, phần trăm còn lại, chữ còn, thanh màu, và Đặt lại sau cùng đồng hồ đếm ngược. Cửa sổ Antigravity gồm 5 giờ và Weekly."],
        ["Màu", "Còn trên 25% là trạng thái thường. Từ 25% trở xuống ghi Sắp hết hạn mức. Về 0 ghi Đã hết hạn mức."],
        ["Nhiều cửa sổ", "Thẻ đủ hiện từng cửa sổ. Nếu chỉ còn chỗ cho một hàng, hàng đó là hạn mức thấp nhất và có chữ +N hạn mức."],
        ["Dữ liệu cũ", "Nếu lần lấy quota cách hơn 15 phút, tab hiện dòng Dữ liệu cloud đã cũ."],
        ["Thứ tự", "Tài khoản đang gắn trên menu bar đứng đầu nhóm đã kết nối. Góc phải tiêu đề ghi giờ lấy dữ liệu hoặc Đang cập nhật."]
      ]
    },
    {
      id: "system",
      pill: "Hệ thống",
      kicker: "Tab System",
      title: "Cùng khối máy, cộng chi tiết bộ nhớ, tiến trình và biểu đồ",
      lead: "Tab Hệ thống dùng lại vòng THIS MAC, rồi mở thêm phần chỉ có khi tab này đang chọn.",
      rows: [
        ["Chi tiết bộ nhớ", "Sáu ô: Wired (hệ thống giữ), Active (dùng gần đây), đã nén, Inactive (có thể thu hồi), trang trống, và Swap."],
        ["Tạm dừng monitor", "Công tắc Pause monitoring. Bật lên thì mẫu hệ thống, biểu đồ và dòng freshness dừng theo."],
        ["Top tiến trình", "Năm tiến trình đầu. Sắp theo CPU hoặc RAM. Mỗi hàng: icon app, tên, tên app nếu khác, PID, chỉ số còn lại, nút Thoát và nút bắt buộc dừng."],
        ["Thoát tiến trình", "Hộp thoại hỏi dừng PID đó. Chọn Thoát hoặc Bắt buộc dừng. Cảnh báo dữ liệu chưa lưu có thể mất. Một số tiến trình hệ thống bị từ chối."],
        ["Ba biểu đồ", "CPU %, RAM %, và tải xuống theo byte/giây. Lịch sử tối đa 5 phút. Chưa đủ điểm thì hiện Đang thu thập lịch sử."],
        ["Các hàng số", "RAM nén, Swap, dung lượng ổ, giao diện mạng, nhiệt độ CPU hoặc trạng thái nhiệt."],
        ["Chú thích", "CPU quy về 0–100%. RAM ước tính từ active + wired + compressed. Mạng cộng các cổng vật lý en* đang hoạt động, không đếm trùng VPN."]
      ]
    },
    {
      id: "local",
      pill: "AI Local",
      kicker: "Tab AI Local",
      title: "Rapid-MLX, Ollama và LM Studio trên máy này",
      lead: "App chỉ nói chuyện với 127.0.0.1. Cổng mặc định: Rapid-MLX 8000, Ollama 11434, LM Studio 1234. Đổi cổng và token trong Cài đặt.",
      rows: [
        ["Trạng thái runtime", "Đã kết nối, Chưa kết nối, Cần token, API chưa hỗ trợ, Phản hồi lỗi, hoặc Dữ liệu cũ."],
        ["Khi offline", "Một dòng hướng dẫn: bật local server và kiểm tra cổng, hoặc thêm API token nếu server yêu cầu."],
        ["Mỗi model", "Tên model. Trạng thái Đã nạp, Đã tải, hoặc Có trên API · chưa rõ trạng thái RAM. Thêm Đã ghim và số yêu cầu đang chạy nếu runtime báo."],
        ["Số của model", "RAM và dung lượng đĩa khi có. Quantization và context length khi có."],
        ["Nạp / giải phóng", "Nút Load hoặc Unload. Giải phóng hỏi lại: model rời RAM, file trên đĩa giữ nguyên. Model đang ghim hoặc đang có request thì nút bị khóa."],
        ["Mở runtime", "Rapid-MLX mở trang /docs trên cổng local. Ollama và LM Studio mở app trong Applications nếu có."],
        ["Giới hạn", "Đã nạp không có nghĩa model đang sinh câu trả lời. Tab này không xóa file model."]
      ]
    },
    {
      id: "ip",
      pill: "Cấu hình IP",
      kicker: "Tab Controls · Cấu hình IP",
      title: "Đọc IP đang dùng và gán IP tĩnh cho một cổng",
      lead: "Controls có hai ngăn: Cấu hình IP và ARP Scanner. Ngăn này đọc dịch vụ IPv4 của macOS và áp cấu hình DHCP hoặc IP tĩnh.",
      rows: [
        ["Giao diện", "Menu các dịch vụ mạng. Hết dịch vụ thì hiện Chưa có kết nối IPv4."],
        ["Ba hàng đang chạy", "IP kèm chấm xanh nếu đã có địa chỉ, Subnet mask, và Gateway / Router."],
        ["DHCP · tự động", "Bật: hiện câu IP do DHCP cấp, hoặc câu chờ cáp / chờ lease nếu chưa có IP."],
        ["IP tĩnh", "Tắt DHCP thì hiện ba ô: địa chỉ IP, subnet mask, gateway. Gateway để trống khi test L2 không cần router."],
        ["Áp dụng thay đổi", "Hộp thoại nhắc tên cổng, IP, mask, gateway, và cảnh báo có thể ngắt kết nối. DNS không đổi. Cần xác thực quản trị viên."],
        ["Sau khi áp dụng", "Dòng trạng thái: đã áp dụng, hoặc lý do lỗi nếu cấu hình bị từ chối hay không khôi phục được."],
        ["Hai lối ra", "Mở Cài đặt mạng của macOS, hoặc chuyển thẳng sang ARP Scanner."]
      ]
    },
    {
      id: "scan",
      pill: "ARP Scanner",
      kicker: "Tab Controls · ARP Scanner",
      title: "Quét dải mạng và mở từng thiết bị tìm được",
      lead: "Quét dải đang dùng, hoặc một CIDR / khoảng IP tự gõ. MAC chỉ có trên subnet L2 hiện tại. Dải khác là quét TCP.",
      rows: [
        ["Quét mạng / Dừng", "Nút Quét mạng chạy khi còn địa chỉ để quét. Đang quét thì nút đổi thành Dừng."],
        ["Dải mạng hiện tại", "Tên cổng, IP, mask, và số host sẽ quét."],
        ["Dải tùy chỉnh", "Ô nhập 192.0.2.0/24 hoặc 192.0.2.10 - 192.0.2.40. Bốn dải mẫu: 192.168.0.0/24 (iDRAC), 192.168.1.0/24, 10.0.0.0/24, 172.16.0.0/24."],
        ["Tiến độ", "Thanh, số IP đã quét / tổng, và số thiết bị tìm thấy."],
        ["Ô lọc", "Lọc theo IP, MAC, hãng, tên máy hoặc loại thiết bị. Đếm dạng còn lại / tổng."],
        ["Thẻ thiết bị", "Icon loại, IP, nhãn loại, hostname, thời gian phản hồi, MAC, hãng, và các cổng mở."],
        ["Nút trên thẻ", "Mở Web nếu có trang, copy lệnh SSH, copy RTSP với camera, và Copy IP."]
      ]
    },
    {
      id: "settings",
      pill: "Cài đặt",
      kicker: "Sheet bánh răng",
      title: "Ngôn ngữ, menu bar, tab nào hiện, và cổng local",
      lead: "Cài đặt không phải tab thứ sáu. Nó là sheet rộng khoảng 450 pt, mở từ bánh răng trên panel.",
      rows: [
        ["Ngôn ngữ", "English hoặc Tiếng Việt. Đổi là các nhãn trong panel đổi theo."],
        ["Thanh menu", "Ba lựa chọn: Quota cloud còn lại, CPU, hoặc Áp lực RAM."],
        ["AI trên topbar", "Chỉ hiện khi thanh menu đang để quota: quota còn lại thấp nhất, hoặc một provider cụ thể. Tự lưu."],
        ["Các tab hiển thị", "Công tắc Overview, Cloud AI, System, AI Local, Controls."],
        ["Cổng API local", "Rapid-MLX, Ollama, LM Studio. Đều là 127.0.0.1. Cổng phải từ 1 đến 65535."],
        ["Token", "Ô mật khẩu cho Rapid-MLX và LM Studio. Lưu trong Keychain. Để trống nếu server không yêu cầu."],
        ["Lưu kết nối", "Nút Lưu kết nối ghi cổng và token rồi đóng sheet. Nút Đóng bỏ qua thay đổi chưa lưu."]
      ]
    },
    {
      id: "widget",
      pill: "Widget",
      kicker: "WidgetKit",
      title: "Ba cỡ widget, cùng một snapshot",
      lead: "Widget đọc file snapshot do app ghi. Không tự giữ token. Dữ liệu cũ sau 15 phút thì có nhãn đồng hồ. Bấm widget mở panel qua aihub://dashboard.",
      rows: [
        ["Nhỏ", "Tên AI đang chọn, phần trăm còn lại của hạn mức thấp nhất, thanh, rồi CPU và RAM."],
        ["Vừa", "Một bên là khối cloud. Bên kia là CPU, RAM, và dung lượng ổ trống."],
        ["Lớn", "Khối cloud, hàng hệ thống, và model local đang nạp đầu tiên kèm RAM nếu có."],
        ["Chưa có snapshot", "Widget hiện Mở AI Hub và dòng Chọn AI để theo dõi."],
        ["AI nào được hiện", "Chỉ provider đã đăng nhập và có usage. Provider ẩn không lên widget."]
      ]
    }
  ],
  en: [
    {
      id: "menu",
      pill: "Menu bar",
      kicker: "Before the panel opens",
      title: "The menu bar icon",
      lead: "The icon is a capsule. The text inside follows the metric chosen in Settings. The tooltip names the source of the number.",
      rows: [
        ["Cloud quota remaining", "The default. The capsule shows the lowest remaining percent of the AI you picked: lowest quota, Codex, Grok, Claude, or Antigravity."],
        ["Quota tooltip", "Reads AI Hub · provider · window: percent left · reset time. With no number the capsule shows — and the tooltip says quota is unavailable."],
        ["CPU", "The capsule shows CPU percent, normalized to 0–100%."],
        ["Memory pressure", "Different from the other two modes: next to the icon the title reads RAM plus the raw system word: normal, warning, critical, or unknown. Not a percent."],
        ["Click the icon", "Accounts: Sign in Codex, Grok, Claude, Antigravity, and Sign out all."],
        ["Pin and window", "Pin the widget to the Desktop, keep the window on top, and open at login."],
        ["Links and quit", "Open Codex usage, open Grok usage, and Quit AI Hub."]
      ]
    },
    {
      id: "overview",
      pill: "Overview",
      kicker: "Overview tab",
      title: "A short page for the Mac, cloud quota, and local models",
      lead: "Overview does not scroll a long list. It stacks three blocks: this Mac, up to three cloud cards, and up to two local runtimes.",
      rows: [
        ["THIS MAC", "Three concentric rings: RAM in orange, CPU in purple, disk in teal, each with a percent. A computer icon sits in the middle."],
        ["Memory", "Used / total, free, and memory pressure."],
        ["CPU", "Chip name, cores, threads, and thermal. A °C reading shows when one exists; otherwise the thermal state word."],
        ["Storage", "Used / total, volume name, and free space."],
        ["Network", "Download and upload rate. The interface name prefers en0 when that port has counters, otherwise the first en* port."],
        ["Updated time", "The corner of the Mac block shows the latest sample time, Sampling, Paused, or Out of date."],
        ["CLOUD AI", "Up to three accounts that have quota. Each card: name, remaining percent, bar, plan, and reset clock. Clicking the card opens the Cloud tab."],
        ["AI LOCAL", "Up to two runtimes. A green dot means online. A loaded model shows its name and RAM when the runtime reports it. No loaded model reads Online · Idle. Offline shows the connection state."],
        ["Everything hidden", "If System, Cloud, and AI Local are all off, Overview only says to enable sections in Settings."]
      ]
    },
    {
      id: "cloud",
      pill: "Cloud AI",
      kicker: "Cloud AI tab",
      title: "One card per account, one row per limit",
      lead: "Four providers: Codex, Antigravity, Claude, and Grok. A provider with no credential is hidden. Connected accounts come first. Accounts that are not connected sit below with a Sign in button.",
      rows: [
        ["Card header", "Icon, provider name, and plan label when it differs from the name. The account selected for the menu bar is marked selected."],
        ["Sign in / Sign out", "A card with no numbers has Sign in. A connected card has Sign out. OAuth tokens live in Keychain. The app can also read Codex, Grok, and Claude CLI credentials until you sign out."],
        ["One limit", "Window name, remaining percent, the word left, a colored bar, and Resets in plus a countdown. Antigravity windows include 5 hours and Weekly."],
        ["Color", "Above 25% left is the normal state. At 25% or below the card says Running low. At 0 it says Limit reached."],
        ["Several windows", "The full card lists every window. When only one row fits, that row is the tightest limit and shows +N limits."],
        ["Stale data", "If the quota fetch is older than 15 minutes, the tab says cloud data is out of date."],
        ["Order", "The menu-bar account is first among connected accounts. The section corner shows the fetch time or Refreshing."]
      ]
    },
    {
      id: "system",
      pill: "System",
      kicker: "System tab",
      title: "The same Mac block, plus memory detail, processes, and charts",
      lead: "The System tab reuses the THIS MAC rings, then adds the sections that exist only while this tab is selected.",
      rows: [
        ["Memory breakdown", "Six cells: wired, active, compressed, inactive, free pages, and swap."],
        ["Pause monitoring", "A Pause monitoring switch. On, system samples, charts, and the freshness line pause with it."],
        ["Top processes", "Five processes. Sort by CPU or RAM. Each row: app icon, name, app name when it differs, PID, the other metric, Quit, and Force Quit."],
        ["Stopping a process", "A dialog names that PID. Choose Quit or Force Quit. It warns that unsaved work may be lost. Some system processes are refused."],
        ["Three charts", "CPU %, RAM %, and download in bytes per second. History is up to 5 minutes. Too few points reads Collecting history."],
        ["Number rows", "Compressed RAM, swap, disk capacity, network interfaces, and CPU temperature or thermal state."],
        ["Footnote", "CPU is normalized to 0–100%. RAM estimates active + wired + compressed. Network sums active physical en* interfaces and does not count VPN twice."]
      ]
    },
    {
      id: "local",
      pill: "AI Local",
      kicker: "AI Local tab",
      title: "Rapid-MLX, Ollama, and LM Studio on this Mac",
      lead: "The app only talks to 127.0.0.1. Default ports: Rapid-MLX 8000, Ollama 11434, LM Studio 1234. Change ports and tokens in Settings.",
      rows: [
        ["Runtime state", "Connected, Offline, Needs token, API unavailable, Invalid response, or Out of date."],
        ["While offline", "One line of help: enable the local server and check the port, or add an API token if the server requires one."],
        ["Each model", "Model name. State is Loaded, Downloaded, or Advertised · residency unknown. Pinned and active-request count appear when the runtime reports them."],
        ["Model numbers", "RAM and disk size when present. Quantization and context length when present."],
        ["Load / unload", "A Load or Unload button. Unload asks first: the model leaves RAM, the file stays on disk. A pinned model or one with active requests keeps the button disabled."],
        ["Open runtime", "Rapid-MLX opens the local /docs page. Ollama and LM Studio open the app in Applications when it is there."],
        ["Limit", "Loaded does not mean the model is generating. This tab never deletes model files."]
      ]
    },
    {
      id: "ip",
      pill: "IP config",
      kicker: "Controls · Network Config",
      title: "Read the current IP and assign a static address",
      lead: "Controls has two panes: Network Config and ARP Scanner. This pane reads the macOS IPv4 service and applies DHCP or a manual address.",
      rows: [
        ["Interface", "A menu of network services. With none, the pane says no IPv4 connection is available."],
        ["Three live rows", "IP with a green dot when an address exists, subnet mask, and gateway."],
        ["DHCP · automatic", "On: a line that DHCP assigned the address, or that the Mac is waiting for a cable or a lease."],
        ["Static IP", "DHCP off shows three fields: IP address, subnet mask, and gateway. Leave the gateway empty for an L2 test with no router."],
        ["Apply changes", "A dialog names the port, IP, mask, and gateway, and warns that connections may drop. DNS is unchanged. Administrator authorization is required."],
        ["After apply", "A status line: settings applied, or the error if the change was rejected or could not be restored."],
        ["Two exits", "Open macOS Network Settings, or jump straight to ARP Scanner."]
      ]
    },
    {
      id: "scan",
      pill: "ARP Scanner",
      kicker: "Controls · ARP Scanner",
      title: "Scan a range and open each device you find",
      lead: "Scan the active subnet, or a CIDR / range you type. MAC addresses exist only on the current L2 subnet. Other ranges are TCP scans.",
      rows: [
        ["Scan / Stop", "Scan Network runs when there are addresses to scan. While a scan is running the button becomes Stop."],
        ["Active subnet", "Port name, IP, mask, and how many hosts will be scanned."],
        ["Custom range", "A field for 192.0.2.0/24 or 192.0.2.10 - 192.0.2.40. Four presets: 192.168.0.0/24 (iDRAC), 192.168.1.0/24, 10.0.0.0/24, 172.16.0.0/24."],
        ["Progress", "A bar, IPs scanned / total, and devices found."],
        ["Filter", "Filter by IP, MAC, vendor, hostname, or device type. The count reads remaining / total."],
        ["Device card", "Category icon, IP, type label, hostname, response time, MAC, vendor, and open ports."],
        ["Card buttons", "Open Web when a page exists, copy the SSH command, copy RTSP for a camera, and Copy IP."]
      ]
    },
    {
      id: "settings",
      pill: "Settings",
      kicker: "Gear sheet",
      title: "Language, menu bar, which tabs show, and local ports",
      lead: "Settings is not a sixth tab. It is a sheet about 450 pt wide, opened from the gear on the panel.",
      rows: [
        ["Language", "English or Tiếng Việt. Changing it changes the labels in the panel."],
        ["Menu bar", "Three choices: cloud quota remaining, CPU, or memory pressure."],
        ["AI on the menu bar", "Shown only while the menu bar metric is quota: lowest remaining quota, or one provider. Saved automatically."],
        ["Visible tabs", "Toggles for Overview, Cloud AI, System, AI Local, and Controls."],
        ["Local API ports", "Rapid-MLX, Ollama, and LM Studio. All on 127.0.0.1. A port must be from 1 to 65535."],
        ["Tokens", "Password fields for Rapid-MLX and LM Studio. Stored in Keychain. Leave blank if the server does not require authentication."],
        ["Save connections", "Save connections writes ports and tokens, then closes the sheet. Close discards unsaved edits."]
      ]
    },
    {
      id: "widget",
      pill: "Widget",
      kicker: "WidgetKit",
      title: "Three widget sizes, one snapshot",
      lead: "The widget reads a snapshot the app writes. It does not hold tokens. Data older than 15 minutes gets a clock label. Clicking the widget opens the panel at aihub://dashboard.",
      rows: [
        ["Small", "Selected AI name, remaining percent of the tightest limit, a bar, then CPU and RAM."],
        ["Medium", "Cloud block on one side. CPU, RAM, and free disk on the other."],
        ["Large", "Cloud block, a system row, and the first loaded local model with RAM when reported."],
        ["No snapshot yet", "The widget says Open AI Hub and Choose an AI to monitor."],
        ["Which AI appears", "Only a signed-in provider that has usage. Hidden providers stay off the widget."]
      ]
    }
  ]
};

function shell(lang, active, inner) {
  const labels = [
    ["overview", "Overview"],
    ["cloud", "Cloud AI"],
    ["system", L(lang, "System", "Hệ thống")],
    ["local", "AI Local"],
    ["controls", L(lang, "Controls", "Điều khiển")]
  ];
  const on = active === "ip" || active === "scan" ? "controls" : active;
  const tabsHtml = labels.map(([id, name]) => (id === on ? `<b>${name}</b>` : `<span>${name}</span>`)).join("");
  return `<div class="device" aria-hidden="true">
    <div class="device-h">
      <div class="mark"></div>
      <div><strong>AI Hub</strong><span>Cloud · ${L(lang, "System", "Hệ thống")} · Local · ${L(lang, "Controls", "Điều khiển")}</span></div>
      <div class="icons"><i>⤡</i><i>↻</i><i>⚙</i></div>
    </div>
    <div class="tabs">${tabsHtml}</div>
    ${inner}
  </div>`;
}

function macBlock(lang) {
  return `<div class="sec"><span>THIS MAC</span><span>12:31:54</span></div>
    <div class="card mac">
      <div>
        <div class="rings"><span class="ram"></span><span class="cpu"></span><span class="disk"></span></div>
        <div class="legend">
          <div><span class="dot" style="background:#ff9f0a"></span>RAM <b>70%</b></div>
          <div><span class="dot" style="background:#bf5af2"></span>CPU <b>28%</b></div>
          <div><span class="dot" style="background:#64d2ff"></span>${L(lang, "Disk", "Ổ đĩa")} <b>76%</b></div>
        </div>
      </div>
      <div class="spec">
        <div class="line"><span class="o">▣</span><div><b class="o">${L(lang, "Memory", "Bộ nhớ")}</b><small>${L(lang, "Free: 14 GB", "Trống: 14 GB")}</small></div><div>34 GB <small>/ 48 GB</small><small>${L(lang, "Pressure: Normal", "Áp lực: Bình thường")}</small></div></div>
        <div class="line"><span class="p">▣</span><div><b class="p">CPU</b><small>12 ${L(lang, "cores", "nhân")} · 12 ${L(lang, "threads", "luồng")}</small></div><div>Apple Silicon<small>${L(lang, "Thermal: Normal", "Nhiệt: Bình thường")}</small></div></div>
        <div class="line"><span class="t">▣</span><div><b class="t">${L(lang, "Storage", "Ổ đĩa")}</b><small>Macintosh HD</small></div><div>350 GB <small>/ 460 GB</small><small>${L(lang, "Free: 110 GB", "Trống: 110 GB")}</small></div></div>
        <div class="line"><span class="g">▣</span><div><b class="g">${L(lang, "Network", "Mạng")}</b><small>${L(lang, "Activity", "Trạng thái")}</small></div><div>↓ 1.2 MB/s<small>↑ 80 KB/s · en0</small></div></div>
      </div>
    </div>`;
}

const mocks = {
  menu(lang) {
    const items = lang === "vi"
      ? ["Tài khoản ▸ Đăng nhập Codex", "Đăng nhập Grok", "Đăng nhập Claude", "Đăng nhập Antigravity", "Đăng xuất tất cả", "Ghim widget ra Desktop", "Giữ luôn nổi", "Mở lúc đăng nhập", "Mở usage Codex", "Mở usage Grok", "Thoát AI Hub"]
      : ["Accounts ▸ Sign in Codex", "Sign in Grok", "Sign in Claude", "Sign in Antigravity", "Sign out all", "Pin widget to Desktop", "Keep on top", "Open at login", "Open Codex usage", "Open Grok usage", "Quit AI Hub"];
    return `<div class="device" aria-hidden="true">
      <div class="menu-strip"><span>Finder</span><span>File</span><span class="capsule">AI Hub 72%</span></div>
      <div class="menu-list">${items.map((item) => `<div>${item}</div>`).join("")}</div>
      <p class="muted">${L(lang, "Default capsule is remaining quota. CPU replaces the percent. Memory pressure mode adds the word RAM plus the pressure state.", "Viên nang mặc định là quota còn lại. CPU thay bằng phần trăm CPU. Áp lực RAM thêm chữ RAM và trạng thái.")}</p>
    </div>`;
  },
  overview(lang) {
    return shell(lang, "overview", `
      ${macBlock(lang)}
      <div class="sec"><span>CLOUD AI</span><span>12:31</span></div>
      <div class="pair">
        <div class="quota"><div><b>Codex</b><div class="muted">Plus · 2:31 PM</div></div><div class="bar"><i style="width:72%"></i></div><b class="ok">72%</b></div>
        <div class="quota"><div><b>Grok</b><div class="muted">SuperGrok · 4:10 PM</div></div><div class="bar"><i style="width:64%"></i></div><b class="ok">64%</b></div>
      </div>
      <div class="sec"><span>AI LOCAL</span><span></span></div>
      <div class="runtime"><span class="dot" style="background:#30d158"></span><b>Rapid-MLX</b><span class="muted" style="margin-left:auto">example-7b · 9 GB</span></div>
      <div class="runtime"><span class="dot" style="background:#636366"></span><b>Ollama</b><span class="muted" style="margin-left:auto">${L(lang, "Offline", "Chưa kết nối")}</span></div>
    `);
  },
  cloud(lang) {
    return shell(lang, "cloud", `
      <div class="sec"><span>CLOUD AI</span><span>12:31</span></div>
      <div class="card">
        <div class="device-h"><b>Codex</b><span class="muted">Plus</span><span class="badge" style="margin-left:auto">${L(lang, "On menu bar", "Trên menu bar")}</span></div>
        <div class="window"><div class="toprow"><span class="muted">5 HOURS</span><span class="pct ok">72% <small>${L(lang, "left", "còn")}</small></span></div><div class="bar"><i style="width:72%"></i></div><div class="muted">${L(lang, "Resets in 3h 12m", "Đặt lại sau 3 giờ 12 phút")}</div></div>
        <div class="window"><div class="toprow"><span class="muted">WEEKLY</span><span class="pct low">22% <small>${L(lang, "left", "còn")}</small></span></div><div class="bar"><i style="width:22%;background:#ff9f0a"></i></div><div class="muted">${L(lang, "Resets in 4d", "Đặt lại sau 4 ngày")}</div></div>
        <div class="muted" style="margin-top:6px">${L(lang, "Weekly · Running low", "Weekly · Sắp hết hạn mức")}</div>
        <div class="btn">${L(lang, "Sign out", "Đăng xuất")}</div>
      </div>
      <div class="card" style="margin-top:8px">
        <b>Claude</b>
        <div class="muted">${L(lang, "Auto-detects from CLI / IDE or click Sign in.", "Tự nhận từ CLI / IDE hoặc bấm Đăng nhập.")}</div>
        <div class="btn">${L(lang, "Sign in", "Đăng nhập")}</div>
      </div>
    `);
  },
  system(lang) {
    return shell(lang, "system", `
      ${macBlock(lang)}
      <div class="sec"><span>${L(lang, "MEMORY BREAKDOWN", "CHI TIẾT BỘ NHỚ")}</span></div>
      <div class="memgrid">
        <div>Wired <b>8 GB</b></div><div>Active <b>22 GB</b></div>
        <div>${L(lang, "Compressed", "Đã nén")} <b>3 GB</b></div><div>Inactive <b>6 GB</b></div>
        <div>${L(lang, "Free pages", "Trang trống")} <b>7 GB</b></div><div>Swap <b>0 B</b></div>
      </div>
      <div class="sec"><span>TOP ${L(lang, "PROCESSES", "TIẾN TRÌNH")}</span><span>CPU | RAM</span></div>
      <div class="process"><b>Codex</b><span class="muted">PID 1204</span><span class="pid">18.4%</span></div>
      <div class="process"><b>WindowServer</b><span class="muted">PID 401</span><span class="pid">6.1%</span></div>
      <div class="sec"><span>CPU · %</span><span>${L(lang, "Up to 5 minutes", "Tối đa 5 phút")}</span></div>
      <div class="chart"></div>
    `);
  },
  local(lang) {
    return shell(lang, "local", `
      <div class="sec"><span>AI LOCAL</span><span></span></div>
      <div class="card">
        <div class="device-h"><b>Rapid-MLX</b><span class="muted" style="margin-left:auto">${L(lang, "Connected", "Đã kết nối")}</span></div>
        <div style="margin-top:8px"><b>example-7b-4bit</b></div>
        <div class="chips"><span>${L(lang, "Loaded", "Đã nạp")}</span><span>Q4</span><span>Context 8192</span></div>
        <div class="muted">RAM 9.1 GB · Disk 4.4 GB</div>
        <div class="btn">${L(lang, "Unload model", "Giải phóng model")}</div>
        <div class="btn">${L(lang, "Open runtime", "Mở runtime")}</div>
        <div class="muted">127.0.0.1:8000</div>
      </div>
      <div class="card" style="margin-top:8px">
        <div class="device-h"><b>Ollama</b><span class="muted" style="margin-left:auto">${L(lang, "Offline", "Chưa kết nối")}</span></div>
        <div class="muted">${L(lang, "Enable the local API server and check the port in Settings.", "Bật API server và kiểm tra cổng trong Cài đặt.")}</div>
        <div class="muted">127.0.0.1:11434</div>
      </div>
      <p class="muted">${L(lang, "Loaded does not mean generating. Model files are never deleted here.", "Đã nạp không có nghĩa đang sinh câu trả lời. Không xóa file model.")}</p>
    `);
  },
  ip(lang) {
    return shell(lang, "ip", `
      <div class="seg"><b>${L(lang, "Network Config", "Cấu hình IP")}</b><span>ARP Scanner</span></div>
      <div class="card">
        <b>${L(lang, "Network", "Mạng")}</b>
        <div class="field">${L(lang, "Interface", "Giao diện")}<b>Ethernet · en0</b></div>
        <div class="field">IP <b><span class="dot" style="background:#30d158"></span> 192.0.2.10</b></div>
        <div class="field">${L(lang, "Subnet mask", "Subnet mask")}<b>255.255.255.0</b></div>
        <div class="field">${L(lang, "Gateway / Router", "Gateway / Router")}<b>192.0.2.1</b></div>
        <div class="muted" style="margin-top:8px">${L(lang, "DHCP · automatic  ○ off", "DHCP · tự động  ○ tắt")}</div>
        <div class="field">${L(lang, "IP address", "Địa chỉ IP")}<b>192.0.2.10</b></div>
        <div class="field">${L(lang, "Gateway / Router · optional for L2", "Gateway · không bắt buộc khi test L2")}<b>192.0.2.1</b></div>
        <div class="btn">${L(lang, "Apply changes…", "Áp dụng thay đổi…")}</div>
        <p class="muted">${L(lang, "DNS is unchanged. Administrator authorization is required.", "DNS không đổi. Cần xác thực quản trị viên.")}</p>
      </div>
    `);
  },
  scan(lang) {
    return shell(lang, "scan", `
      <div class="seg"><span>${L(lang, "Network Config", "Cấu hình IP")}</span><b>ARP Scanner</b></div>
      <div class="card">
        <div class="device-h"><b>ARP Scanner</b><span class="btn" style="margin:0 0 0 auto">${L(lang, "Scan Network", "Quét mạng")}</span></div>
        <div class="seg"><b>${L(lang, "Active Subnet", "Dải hiện tại")}</b><span>${L(lang, "Custom range", "Tùy chỉnh")}</span></div>
        <div class="muted"><span class="dot" style="background:#30d158"></span> Ethernet: 192.0.2.10/255.255.255.0 · 254 IP</div>
        <div class="muted" style="margin-top:8px">${L(lang, "Filter IP, MAC, vendor, hostname…", "Lọc IP, MAC, hãng, tên máy…")}</div>
      </div>
      <div class="card" style="margin-top:8px">
        <div class="device-h"><b>192.0.2.20</b><span class="badge">${L(lang, "Switch", "Switch")}</span><span class="muted" style="margin-left:auto">4 ms</span></div>
        <div class="muted">(lab-switch)</div>
        <div class="muted">MAC 02:00:00:00:00:14 · Example Labs</div>
        <div class="chips"><span>22</span><span>80</span><span>443</span></div>
        <div class="btn">${L(lang, "Open Web", "Mở Web")}</div>
        <div class="btn">SSH</div>
        <div class="btn">Copy IP</div>
      </div>
    `);
  },
  settings(lang) {
    const row = (k, v) => `<div class="field">${k}<b>${v}</b></div>`;
    return `<div class="device sheet" aria-hidden="true">
      <b>${L(lang, "AI Hub Settings", "Cài đặt AI Hub")}</b>
      ${row(L(lang, "Language", "Ngôn ngữ"), lang === "vi" ? "Tiếng Việt" : "English")}
      ${row(L(lang, "Menu bar", "Thanh menu"), L(lang, "Cloud quota remaining", "Quota cloud còn lại"))}
      ${row(L(lang, "AI on menu bar", "AI trên topbar"), L(lang, "Lowest remaining quota", "Quota còn lại thấp nhất"))}
      <div class="sec"><span>${L(lang, "VISIBLE TABS", "CÁC TAB HIỂN THỊ")}</span></div>
      <div class="muted">Overview · Cloud AI · System · AI Local · Controls</div>
      <div class="sec"><span>${L(lang, "LOCAL API PORTS · 127.0.0.1", "CỔNG API LOCAL · 127.0.0.1")}</span></div>
      ${row("Rapid-MLX", "8000")}
      ${row("Ollama", "11434")}
      ${row("LM Studio", "1234")}
      ${row("Rapid-MLX API token", "••••••")}
      <p class="muted">${L(lang, "Tokens are stored in Keychain. Leave blank if the server does not require authentication.", "Token nằm trong Keychain. Để trống nếu server không yêu cầu xác thực.")}</p>
      <div class="btn">${L(lang, "Close", "Đóng")}</div>
      <div class="btn">${L(lang, "Save connections", "Lưu kết nối")}</div>
    </div>`;
  },
  widget(lang) {
    return `<div class="widgets" aria-hidden="true">
      <div class="widget">
        <header><span>AI Hub</span><span class="muted">${L(lang, "Small", "Nhỏ")}</span></header>
        <div>Codex</div>
        <div class="big ok">72%</div>
        <div class="bar"><i style="width:72%"></i></div>
        <div class="cols" style="margin-top:8px"><span>CPU 28%</span><span>RAM 70%</span></div>
      </div>
      <div class="widget">
        <header><span>AI Hub</span><span class="muted">12:31</span></header>
        <div class="cols">
          <div><div>Codex</div><div class="big ok">72%</div><div class="muted">5h · ${L(lang, "left", "còn")}</div></div>
          <div><div>CPU 28%</div><div>RAM 70%</div><div class="muted">${L(lang, "Disk free", "Ổ trống")} 110 GB</div></div>
        </div>
      </div>
      <div class="widget">
        <header><span>AI Hub</span><span class="muted">${L(lang, "Large", "Lớn")}</span></header>
        <div>Codex <b class="ok">72%</b></div>
        <div class="muted">CPU 28% · RAM 70% · ${L(lang, "Disk", "Ổ đĩa")} 76%</div>
        <div style="margin-top:8px">Rapid-MLX</div>
        <div>example-7b-4bit</div>
        <div class="muted">${L(lang, "Loaded", "Đã nạp")} · 9.1 GB</div>
      </div>
    </div>`;
  }
};

let lang = localStorage.getItem("aihub-lang") === "en" ? "en" : "vi";
let current = location.hash.replace("#", "") || "overview";

function list(id) {
  return tabs[lang].find((tab) => tab.id === id) || tabs[lang][1];
}

function render() {
  const text = pages[lang];
  if (!tabs[lang].some((tab) => tab.id === current)) current = "overview";
  const tab = list(current);
  document.documentElement.lang = text.htmlLang;
  document.title = text.title;
  document.querySelector('[data-i="navTabs"]').textContent = text.navTabs;
  document.querySelector('[data-i="foot"]').textContent = text.foot;
  document.getElementById("lang").textContent = text.langLabel;
  document.getElementById("lang").setAttribute("aria-label", lang === "vi" ? "English" : "Tiếng Việt");

  const shell = text.shell.map(([title, body]) => `<div><strong>${title}</strong><p>${body}</p></div>`).join("");
  const rows = tab.rows.map(([title, body]) => `<div class="row"><strong>${title}</strong><p>${body}</p></div>`).join("");
  const pills = tabs[lang].map((item) => {
    const selected = item.id === tab.id;
    return `<button type="button" role="tab" aria-selected="${selected}" data-tab="${item.id}">${item.pill}</button>`;
  }).join("");
  const install = text.install.map(([title, body]) => `<div><strong>${title}</strong><p>${body}</p></div>`).join("");

  document.getElementById("app").innerHTML = `
    <section class="hero" id="top">
      <p class="eyebrow">${text.heroEyebrow}</p>
      <h1>${text.heroTitle}</h1>
      <p class="lede">${text.heroLede}</p>
      <div class="actions">
        <a class="dl" id="hero-download" href="https://github.com/b4chnh/ai-hub/releases/latest">${text.download}</a>
        <span class="fine" id="req">${text.req}</span>
      </div>
      <ul class="facts">${text.facts.map((fact) => `<li>${fact}</li>`).join("")}</ul>
    </section>
    <section class="shell-note">
      <h2>${text.shellTitle}</h2>
      <div class="shell-grid">${shell}</div>
    </section>
    <section id="tabs">
      <div class="section-head">
        <h2>${text.sectionTitle}</h2>
        <p>${text.sectionLede}</p>
      </div>
      <div class="pills" role="tablist">${pills}</div>
      <div class="stage">
        <div class="mock-col">
          <div id="mock">${mocks[tab.id](lang)}</div>
          <p class="example">${text.example}</p>
        </div>
        <article class="copy">
          <p class="kicker">${tab.kicker}</p>
          <h3>${tab.title}</h3>
          <p class="lead">${tab.lead}</p>
          ${rows}
        </article>
      </div>
    </section>
    <section class="install" id="install">
      <h2>${text.installTitle}</h2>
      <div class="install-grid">${install}</div>
    </section>`;

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => select(button.dataset.tab));
  });
  wireDownload();
}

function select(id) {
  current = id;
  history.replaceState(null, "", `#${id}`);
  render();
  document.getElementById("tabs").scrollIntoView({ block: "start" });
}

function wireDownload() {
  const nodes = [document.getElementById("download"), document.getElementById("hero-download")].filter(Boolean);
  nodes.forEach((node) => {
    if (window.__aihubDmg) node.href = window.__aihubDmg;
  });
}

async function loadRelease() {
  try {
    const response = await fetch("https://api.github.com/repos/b4chnh/ai-hub/releases/latest", {
      headers: { Accept: "application/vnd.github+json" }
    });
    if (!response.ok) return;
    const release = await response.json();
    const asset = (release.assets || []).find((item) => /\.dmg$/i.test(item.name));
    window.__aihubDmg = asset ? asset.browser_download_url : release.html_url;
    const label = `${pages[lang].download}${release.tag_name ? " " + release.tag_name : ""}`;
    document.getElementById("download").textContent = label;
    const hero = document.getElementById("hero-download");
    if (hero) hero.textContent = label;
    wireDownload();
  } catch (_) {
    /* releases/latest stays as the fallback link */
  }
}

document.getElementById("lang").addEventListener("click", () => {
  lang = lang === "vi" ? "en" : "vi";
  localStorage.setItem("aihub-lang", lang);
  render();
  loadRelease();
});

window.addEventListener("hashchange", () => {
  const next = location.hash.replace("#", "");
  if (next && next !== current) {
    current = next;
    render();
  }
});

render();
loadRelease();
