import { zhCNUiText } from './zh-CN-ui-text'

const zhCN = {
  // 菜单
  menu: {
    file: '文件',
    edit: '编辑',
    view: '视图',
    window: '窗口',
    help: '帮助',
    settings: '设置',
    checkForUpdates: '检查更新...',
    exploreOrca: '探索 Orca',
    gettingStarted: 'Orca 入门指南',
    reportCrash: '报告崩溃...',
    exportPdf: '导出 PDF...',
    exit: '退出',
    reload: '重新加载',
    forceReload: '强制重新加载',
    resetSize: '重置大小',
    zoomIn: '放大',
    zoomOut: '缩小',
    toggleFullscreen: '切换全屏',
    openWorktreePalette: '打开工作树面板',
    appearance: '外观',
    toggleLeftSidebar: '切换左侧栏',
    toggleRightSidebar: '切换右侧栏',
    showStatusBar: '显示状态栏',
    showTasksButton: '显示任务按钮',
    showMobileButton: '显示 Orca Mobile 按钮',
    showTitlebarAppName: '显示标题栏应用名称'
  },

  // 右键上下文菜单
  contextMenu: {
    addLink: '添加链接',
    format: '格式',
    paragraph: '段落',
    insert: '插入',
    bold: '粗体',
    italic: '斜体',
    strike: '删除线',
    inlineCode: '行内代码',
    codeBlock: '代码块',
    quote: '引用',
    bodyText: '正文',
    heading1: '标题 1',
    heading2: '标题 2',
    heading3: '标题 3',
    bulletList: '无序列表',
    numberedList: '有序列表',
    checklist: '任务列表',
    link: '链接',
    image: '图片',
    divider: '分割线',
    pasteAsPlainText: '粘贴为纯文本',
    addToDictionary: '添加到词典'
  },

  // 设置导航
  settingsNav: {
    groups: {
      capabilities: 'AI 能力',
      setup: '设置',
      workflows: '工作流',
      interface: '界面',
      remote: '远程访问',
      security: '隐私与安全',
      advanced: '高级',
      experimental: '实验性'
    },
    panels: {
      agents: {
        title: '智能体',
        description: '管理 AI 智能体，设置默认选项，自定义命令。'
      },
      accounts: {
        title: 'AI 服务商账号',
        description: '可选的 Claude、Codex、Gemini 和 OpenCode Go 账号切换。'
      },
      orchestration: {
        title: '智能体编排',
        description: '通过 Orca 协调多个编码智能体。'
      },
      'computer-use': {
        title: '计算机控制',
        description: '允许智能体控制你电脑上的任何应用。'
      },
      voice: {
        title: '语音',
        description: '使用本地设备端模型进行语音转文字听写。'
      },
      'setup-guide': {
        title: '入门检查清单',
        description: '完成 Orca 核心工作流的入门检查清单。'
      },
      general: {
        title: '通用',
        description: '工作区默认设置、应用设置和维护。'
      },
      integrations: {
        title: '集成',
        description: '连接 GitHub、GitLab、Linear 及代码托管服务。'
      },
      git: {
        title: 'Git 与源代码管理',
        description: '分支命名、基准引用、归属和 AI 提交信息。'
      },
      tasks: {
        title: '任务源',
        description: '选择在任务页面和侧栏中显示哪些任务提供方。'
      },
      terminal: {
        title: '终端',
        description: 'Shell、渲染器、会话和终端行为。'
      },
      'quick-commands': {
        title: '快捷命令',
        description: '保存的命令，可全局或按项目设置作用域。'
      },
      browser: {
        title: '浏览器',
        description: '主页、链接路由和会话 Cookie。'
      },
      'floating-workspace': {
        title: '浮动工作区',
        description: '全局终端、浏览器和 Markdown 标签页。'
      },
      appearance: {
        title: '外观',
        description: '主题、缩放、应用和终端外观、侧栏和状态栏。'
      },
      input: {
        title: '输入与编辑',
        description: '选择和编辑行为。'
      },
      notifications: {
        title: '通知',
        description: '智能体和终端事件的原生桌面通知。'
      },
      shortcuts: {
        title: '快捷键',
        description: '常见操作的键盘快捷键。'
      },
      stats: {
        title: '统计与用量',
        description: 'Orca 统计信息以及 Claude、Codex 和 OpenCode 用量分析。'
      },
      servers: {
        title: '远程 Orca 服务器',
        descriptionDesktop: '在本地桌面模式和配对的远程 Orca 运行时之间切换。',
        descriptionWeb: '将浏览器连接到已保存的 Orca 服务器。'
      },
      ssh: {
        title: 'SSH 主机',
        description: '用于文件、终端和 Git 的远程 SSH 主机。'
      },
      mobile: {
        title: '移动端',
        description: '通过手机控制终端和智能体。'
      },
      'developer-permissions': {
        title: 'macOS 权限',
        description: '终端启动的开发者工具的 macOS 隐私访问权限。'
      },
      privacy: {
        title: '隐私与遥测',
        description: '匿名使用数据和遥测控制。'
      },
      advanced: {
        title: '高级',
        description: '用于故障排除的低级兼容性设置。'
      },
      experimental: {
        title: '实验性',
        description: '仍在完善中的新功能，欢迎试用。'
      }
    }
  },

  // 设置侧栏
  settingsSidebar: {
    backToApp: '返回应用',
    searchSettings: '搜索设置',
    onboardingChecklist: '入门检查清单',
    notInstalled: '未安装',
    installed: '已安装',
    checking: '检查中',
    noMatchingProjects: '没有匹配的项目设置。',
    noProjectsAdded: '尚未添加项目。',
    projects: '项目',
    ssh: 'SSH',
    onboardingAriaLabel: '入门检查清单，已完成 {{done}} / {{total}}。显示设置指南。',
    complete: '已完成 {{done}}/{{total}}'
  },

  // 应用主界面
  app: {
    minimize: '最小化',
    maximize: '最大化',
    restore: '还原',
    close: '关闭',
    applicationMenu: '应用菜单',
    toggleSidebar: '切换侧栏',
    goBack: '后退',
    goForward: '前进',
    toggleRightSidebar: '切换右侧栏',
    collapsePane: '折叠面板',
    appShellError: 'Orca 遇到渲染器错误。',
    appShellErrorDesc: '应用外壳无法完成渲染。请重试挂载，如错误持续存在请重启 Orca。',
    workspaceShellError: '工作区外壳遇到错误。',
    workspaceListError: '工作区列表遇到错误。',
    workbenchError: '工作区工作台遇到错误。',
    pageError: '此页面遇到错误。',
    rightSidebarError: '右侧栏遇到错误。',
    floatingWorkspaceError: '浮动工作区遇到错误。',
    statusBarError: '状态栏遇到错误。',
    crashReportError: '崩溃报告对话框遇到错误。',
    onboardingError: '入门向导遇到错误。'
  },

  uiText: zhCNUiText
}

export default zhCN
