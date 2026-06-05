export const zhCNGeneralSettingsUiText = {
  // General settings
  Navigation: '导航',
  'Tab Order': '标签页排序',
  'Recent or tab strip.': '按最近使用或标签栏顺序切换。',
  'Most recent': '最近使用',
  'Tab strip order': '标签栏顺序',
  'Configure where new workspaces are created.': '配置新工作区的创建位置。',
  'Workspace Directory': '工作区目录',
  'Root directory where workspace folders are created.': '创建工作区文件夹的根目录。',
  Browse: '浏览',
  'Nest Workspaces': '嵌套工作区',
  'Create workspaces inside a repo-named subfolder.': '在以代码库命名的子文件夹中创建工作区。',
  'Ask Before Deleting Workspaces': '删除工作区前询问',
  'Show a confirmation dialog before deleting a workspace.': '删除工作区前显示确认对话框。',
  'Show a confirmation before deleting a workspace from the context menu. Failed deletes still surface a Force Delete fallback.':
    '从上下文菜单删除工作区前显示确认。删除失败时仍会显示“强制删除”兜底操作。',
  'Ask Before Deleting Automations': '删除自动化前询问',
  'Show a confirmation dialog before deleting an automation and its run history.':
    '删除自动化及其运行历史前显示确认对话框。',
  'Show a confirmation before deleting automations and their run history.':
    '删除自动化及其运行历史前显示确认。',
  'Open In Menu': '打开方式菜单',
  'Add custom launchers to the workspace Open in menu.':
    '向工作区的“打开方式”菜单添加自定义启动器。',
  "VS Code is always included first. Add executables to show extra entries in each workspace's Open in menu.":
    'VS Code 始终排在第一位。添加可执行程序后，会在每个工作区的“打开方式”菜单中显示额外入口。',
  'Commands are not shell-parsed. Use only an executable command name. For flags, use a wrapper script.':
    '命令不会经过 Shell 解析。这里只填写可执行命令名；如需参数，请使用包装脚本。',
  'Add Cursor': '添加 Cursor',
  'Add Zed': '添加 Zed',
  'Add Custom Launcher': '添加自定义启动器',
  'Executable command': '可执行命令',
  'Remove launcher': '移除启动器',
  Network: '网络',
  'Configure app-level network routing.': '配置应用级网络路由。',
  'HTTP Proxy': 'HTTP 代理',
  'Proxy URL for Orca network requests and local terminal children.':
    '用于 Orca 网络请求和本地终端子进程的代理 URL。',
  'Leave empty to use system proxy settings and inherited proxy environment variables.':
    '留空则使用系统代理设置和继承的代理环境变量。',
  'Supports http, https, socks, socks4, and socks5 URLs.':
    '支持 http、https、socks、socks4 和 socks5 URL。',
  'Proxy Bypass Rules': '代理绕过规则',
  'Hosts that should bypass the configured HTTP proxy.': '不使用已配置 HTTP 代理的主机。',
  'Optional. Separate hosts with commas, semicolons, or new lines.':
    '可选。可用逗号、分号或换行分隔主机。',
  Editor: '编辑器',
  'Configure how Orca persists file edits.': '配置 Orca 如何保存文件编辑。',
  'Auto Save Files': '自动保存文件',
  'Save editor and editable diff changes automatically after a short pause.':
    '短暂停顿后自动保存编辑器和可编辑 diff 中的更改。',
  'Auto Save Delay': '自动保存延迟',
  'How long Orca waits after your last edit before saving automatically.':
    '最后一次编辑后，Orca 等待多久再自动保存。',
  'How long Orca waits after your last edit before saving automatically. First launch defaults to 1000 ms.':
    '最后一次编辑后，Orca 等待多久再自动保存。首次启动默认 1000 毫秒。',
  'How long Orca waits after your last edit before saving automatically. First launch defaults to {{ms}} ms.':
    '最后一次编辑后，Orca 等待多久再自动保存。首次启动默认 {{ms}} 毫秒。',
  'Default Diff View': '默认 Diff 视图',
  'Preferred presentation format for showing git diffs by default.':
    '默认显示 Git diff 时优先使用的展示格式。',
  Inline: '行内',
  'Side-by-side': '并排',
  'Default Diff File Tree': '默认 Diff 文件树',
  'Show or hide the file tree when opening combined diff views.':
    '打开组合 diff 视图时显示或隐藏文件树。',
  Shown: '显示',
  Hidden: '隐藏',
  Minimap: '缩略图',
  'Show the minimap overview when editing a file.': '编辑文件时显示缩略图概览。',
  'Markdown Review Notes': 'Markdown 评审备注',
  'Show local markdown review note controls in rich editor mode.':
    '在富文本编辑模式中显示本地 Markdown 评审备注控件。',
  'Show local markdown note controls in rich editor mode and agent handoff actions.':
    '在富文本编辑模式和智能体交接操作中显示本地 Markdown 备注控件。',
  'Prompt Cache Timer': '提示词缓存计时器',
  'Claude caches your conversation to reduce costs. When idle too long the cache expires and the next message resends full context at higher cost. This shows a countdown so you know when to resume.':
    'Claude 会缓存对话以降低成本。空闲过久后缓存会过期，下一条消息需要以更高成本重新发送完整上下文。此处会显示倒计时，方便你掌握继续输入的时机。',
  'Cache Timer': '缓存计时器',
  'Show a countdown after a Claude agent becomes idle.': 'Claude 智能体空闲后显示倒计时。',
  'Show a countdown in the sidebar after a Claude agent becomes idle.':
    'Claude 智能体空闲后在侧栏显示倒计时。',
  'Timer Duration': '计时器时长',
  "Match this to your provider's cache TTL.": '与服务商的缓存 TTL 保持一致。',
  "Match this to your provider's cache TTL. The default is 5 minutes.":
    '与服务商的缓存 TTL 保持一致。默认 5 分钟。',
  '5 minutes': '5 分钟',
  '1 hour': '1 小时',
  Updates: '更新',
  'Current version: {{version}}': '当前版本：{{version}}',
  'Check for Updates': '检查更新',
  'Check for app updates and install a newer Orca version.': '检查应用更新并安装新版 Orca。',
  'Install Update ({{version}})': '安装更新（{{version}}）',
  'Restart to Update ({{version}})': '重启以更新（{{version}}）',
  'Updates are checked automatically on launch.': '启动时会自动检查更新。',
  'Checking for updates...': '正在检查更新...',
  'You’re on the latest version.': '当前已是最新版本。',
  'Update error. {{message}}': '更新出错。{{message}}',
  'Update check failed. {{message}}': '更新检查失败。{{message}}',
  'Release notes': '发行说明',
  'Support Orca': '支持 Orca',
  'Star Orca on GitHub': '在 GitHub 为 Orca 点星',
  'Support the project with a GitHub star via the gh CLI.':
    '通过 gh CLI 在 GitHub 为项目点星以支持 Orca。',
  Star: '点星',
  'Starring...': '正在点星...',
  'Try Again': '重试',
  'Thanks for the support!': '感谢支持！'
}
