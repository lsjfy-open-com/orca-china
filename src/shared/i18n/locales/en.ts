const en = {
  // Menu
  menu: {
    file: 'File',
    edit: 'Edit',
    view: 'View',
    window: 'Window',
    help: 'Help',
    settings: 'Settings',
    checkForUpdates: 'Check for Updates...',
    exploreOrca: 'Explore Orca',
    gettingStarted: 'Getting Started with Orca',
    reportCrash: 'Report Crash...',
    exportPdf: 'Export as PDF...',
    exit: 'Exit',
    reload: 'Reload',
    forceReload: 'Force Reload',
    resetSize: 'Reset Size',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    toggleFullscreen: 'Toggle Fullscreen',
    openWorktreePalette: 'Open Worktree Palette',
    appearance: 'Appearance',
    toggleLeftSidebar: 'Toggle Left Sidebar',
    toggleRightSidebar: 'Toggle Right Sidebar',
    showStatusBar: 'Show Status Bar',
    showTasksButton: 'Show Tasks Button',
    showMobileButton: 'Show Orca Mobile Button',
    showTitlebarAppName: 'Show Titlebar App Name'
  },

  // Editable context menu
  contextMenu: {
    addLink: 'Add link',
    format: 'Format',
    paragraph: 'Paragraph',
    insert: 'Insert',
    bold: 'Bold',
    italic: 'Italic',
    strike: 'Strike',
    inlineCode: 'Inline code',
    codeBlock: 'Code block',
    quote: 'Quote',
    bodyText: 'Body text',
    heading1: 'Heading 1',
    heading2: 'Heading 2',
    heading3: 'Heading 3',
    bulletList: 'Bullet list',
    numberedList: 'Numbered list',
    checklist: 'Checklist',
    link: 'Link',
    image: 'Image',
    divider: 'Divider',
    pasteAsPlainText: 'Paste as plain text',
    addToDictionary: 'Add to dictionary'
  },

  // Settings navigation
  settingsNav: {
    groups: {
      capabilities: 'AI Capabilities',
      setup: 'Set Up',
      workflows: 'Workflows',
      interface: 'Interface',
      remote: 'Remote Access',
      security: 'Privacy & Security',
      advanced: 'Advanced',
      experimental: 'Experimental'
    },
    panels: {
      agents: {
        title: 'Agents',
        description: 'Manage AI agents, set a default, and customize commands.'
      },
      accounts: {
        title: 'AI Provider Accounts',
        description: 'Optional account switching for Claude, Codex, Gemini, and OpenCode Go.'
      },
      orchestration: {
        title: 'Orchestration',
        description: 'Coordinate multiple coding agents through Orca.'
      },
      'computer-use': {
        title: 'Computer Use',
        description: 'Enable agents to control any app on your computer.'
      },
      voice: {
        title: 'Voice',
        description: 'Local speech-to-text dictation with on-device models.'
      },
      'setup-guide': {
        title: 'Onboarding checklist',
        description: 'Finish the onboarding checklist for core Orca workflows.'
      },
      general: {
        title: 'General',
        description: 'Workspace defaults, app setup, and maintenance.'
      },
      integrations: {
        title: 'Integrations',
        description: 'Connect GitHub, GitLab, Linear, and source-hosting services.'
      },
      git: {
        title: 'Git & Source Control',
        description: 'Branch naming, base refs, attribution, and AI commit messages.'
      },
      tasks: {
        title: 'Task Sources',
        description: 'Choose which task providers appear in the Tasks page and sidebar.'
      },
      terminal: {
        title: 'Terminal',
        description: 'Shells, renderer, sessions, and terminal behavior.'
      },
      'quick-commands': {
        title: 'Quick Commands',
        description: 'Saved terminal commands, scoped globally or per project.'
      },
      browser: {
        title: 'Browser',
        description: 'Home page, link routing, and session cookies.'
      },
      'floating-workspace': {
        title: 'Floating Workspace',
        description: 'Global terminal, browser, and markdown tabs.'
      },
      appearance: {
        title: 'Appearance',
        description: 'Theme, zoom, app and terminal appearance, sidebars, and status bar.'
      },
      input: {
        title: 'Input & Editing',
        description: 'Selection and editing behavior.'
      },
      notifications: {
        title: 'Notifications',
        description: 'Native desktop notifications for agent and terminal events.'
      },
      shortcuts: {
        title: 'Shortcuts',
        description: 'Keyboard shortcuts for common actions.'
      },
      stats: {
        title: 'Stats & Usage',
        description: 'Orca stats plus Claude, Codex, and OpenCode usage analytics.'
      },
      servers: {
        title: 'Remote Orca Servers',
        descriptionDesktop: 'Switch between local desktop mode and paired remote Orca runtimes.',
        descriptionWeb: 'Connect this browser to a saved Orca server.'
      },
      ssh: {
        title: 'SSH Hosts',
        description: 'Remote SSH hosts for files, terminals, and git.'
      },
      mobile: {
        title: 'Mobile',
        description: 'Control terminals and agents from your phone.'
      },
      'developer-permissions': {
        title: 'macOS Permissions',
        description: 'macOS privacy access for terminal-launched developer tools.'
      },
      privacy: {
        title: 'Privacy & Telemetry',
        description: 'Anonymous usage data and telemetry controls.'
      },
      advanced: {
        title: 'Advanced',
        description: 'Low-level compatibility settings for troubleshooting.'
      },
      experimental: {
        title: 'Experimental',
        description: 'New features that are still taking shape. Give them a try.'
      }
    }
  },

  // Settings sidebar
  settingsSidebar: {
    backToApp: 'Back to app',
    searchSettings: 'Search settings',
    onboardingChecklist: 'Onboarding checklist',
    notInstalled: 'Not installed',
    installed: 'Installed',
    checking: 'Checking',
    noMatchingProjects: 'No matching project settings.',
    noProjectsAdded: 'No projects added yet.',
    projects: 'Projects',
    ssh: 'SSH',
    onboardingAriaLabel: 'Onboarding checklist, {{done}} of {{total}} done. Show setup guide.',
    complete: '{{done}}/{{total}} complete'
  },

  // App chrome
  app: {
    minimize: 'Minimize',
    maximize: 'Maximize',
    restore: 'Restore',
    close: 'Close',
    applicationMenu: 'Application menu',
    toggleSidebar: 'Toggle sidebar',
    goBack: 'Go back',
    goForward: 'Go forward',
    toggleRightSidebar: 'Toggle right sidebar',
    collapsePane: 'Collapse pane',
    appShellError: 'Orca hit a renderer error.',
    appShellErrorDesc:
      'The app shell could not finish rendering. Retry to remount it, or relaunch Orca if the error persists.',
    workspaceShellError: 'The workspace shell hit an error.',
    workspaceListError: 'The workspace list hit an error.',
    workbenchError: 'The workspace workbench hit an error.',
    pageError: 'This page hit an error.',
    rightSidebarError: 'The right sidebar hit an error.',
    floatingWorkspaceError: 'The floating workspace hit an error.',
    statusBarError: 'The status bar hit an error.',
    crashReportError: 'The crash report dialog hit an error.',
    onboardingError: 'Onboarding hit an error.'
  },

  uiText: {}
}

export default en
