/* oxlint-disable max-lines */
import { createElement, useMemo } from 'react'
// Why: this registry mirrors the Settings sidebar in one neutral module so
// Cmd+J and Settings visibility cannot drift. Keep it free of Settings pane UI
// imports; the boundary is enforced by a focused architecture test.
import {
  BarChart3,
  Bell,
  Blocks,
  Bot,
  Cable,
  FlaskConical,
  GitBranch,
  Globe,
  Keyboard,
  ListChecks,
  Lock,
  Mic,
  MousePointerClick,
  Network,
  Palette,
  PanelsTopLeft,
  Play,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  SquareTerminal,
  TextCursorInput,
  UserCog,
  Wrench
} from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import logo from '../../../../resources/logo.svg'
import type { Repo } from '../../../shared/types'
import { getRepoKindLabel } from '../../../shared/repo-kind'
import { t } from '../../../shared/i18n'
import { useAppStore } from '@/store'
import { isMacUserAgent, isWindowsUserAgent } from '@/components/terminal-pane/pane-helpers'
import type { SettingsNavSection } from '@/lib/settings-navigation-types'
import { GENERAL_PANE_SEARCH_ENTRIES } from '@/components/settings/general-search'
import { AGENTS_PANE_SEARCH_ENTRIES } from '@/components/settings/agents-search'
import { ACCOUNTS_PANE_SEARCH_ENTRIES } from '@/components/settings/accounts-search'
import { INTEGRATIONS_PANE_SEARCH_ENTRIES } from '@/components/settings/integrations-search'
import { GIT_PANE_SEARCH_ENTRIES } from '@/components/settings/git-search'
import { COMMIT_MESSAGE_AI_PANE_SEARCH_ENTRIES } from '@/components/settings/commit-message-ai-search'
import { TASKS_PANE_SEARCH_ENTRIES } from '@/components/settings/tasks-search'
import { FLOATING_WORKSPACE_SEARCH_ENTRIES } from '@/components/settings/floating-workspace-search'
import { APPEARANCE_PANE_SEARCH_ENTRIES } from '@/components/settings/appearance-search'
import { INPUT_PANE_SEARCH_ENTRIES } from '@/components/settings/input-search'
import { getTerminalPaneSearchEntries } from '@/components/settings/terminal-search'
import { QUICK_COMMANDS_PANE_SEARCH_ENTRIES } from '@/components/settings/quick-commands-search'
import { BROWSER_PANE_SEARCH_ENTRIES } from '@/components/settings/browser-pane-search'
import { NOTIFICATIONS_PANE_SEARCH_ENTRIES } from '@/components/settings/notifications-search'
import { ORCHESTRATION_PANE_SEARCH_ENTRIES } from '@/components/settings/orchestration-search'
import {
  RUNTIME_ENVIRONMENTS_SEARCH_ENTRY,
  WEB_RUNTIME_ENVIRONMENTS_SEARCH_ENTRY
} from '@/components/settings/runtime-environments-search'
import { SSH_PANE_SEARCH_ENTRIES } from '@/components/settings/ssh-search'
import { MOBILE_SETTINGS_PANE_SEARCH_ENTRIES } from '@/components/settings/mobile-settings-search'
import { COMPUTER_USE_PANE_SEARCH_ENTRIES } from '@/components/settings/computer-use-search'
import { VOICE_PANE_SEARCH_ENTRIES } from '@/components/settings/voice-pane-search'
import { DEVELOPER_PERMISSIONS_PANE_SEARCH_ENTRIES } from '@/components/settings/developer-permissions-search'
import { PRIVACY_PANE_SEARCH_ENTRIES } from '@/components/settings/privacy-search'
import { ADVANCED_PANE_SEARCH_ENTRIES } from '@/components/settings/advanced-search'
import { SHORTCUTS_PANE_SEARCH_ENTRIES } from '@/components/settings/shortcuts-search'
import { STATS_PANE_SEARCH_ENTRIES } from '@/components/stats/stats-search'
import { EXPERIMENTAL_PANE_SEARCH_ENTRIES } from '@/components/settings/experimental-search'
import { getRepositoryPaneSearchEntries } from '@/components/settings/repository-search'
import { cn } from '@/lib/utils'
import {
  getCachedWindowsTerminalCapabilities,
  getWindowsTerminalCapabilityOwnerKey
} from '@/lib/windows-terminal-capabilities'

function OrcaLogoSettingsIcon({ className }: LucideProps) {
  return createElement('img', {
    src: logo,
    alt: '',
    'aria-hidden': true,
    className: cn('object-contain invert dark:invert-0', className)
  })
}

export function isWebClientLocation(): boolean {
  return (
    Boolean((window as unknown as { __ORCA_WEB_CLIENT__?: boolean }).__ORCA_WEB_CLIENT__) ||
    window.location.pathname.endsWith('/web-index.html')
  )
}

export function buildSettingsNavigationMetadata({
  isMac,
  isWindows,
  isWindowsTerminalHost = isWindows,
  isWebClient,
  repos
}: {
  isMac: boolean
  isWindows: boolean
  isWindowsTerminalHost?: boolean
  isWebClient: boolean
  repos: readonly Repo[]
}): SettingsNavSection[] {
  const showDesktopOnlySettings = !isWebClient
  const terminalPaneSearchEntries = getTerminalPaneSearchEntries({
    isWindows: isWindowsTerminalHost,
    isMac
  })
  const runtimeEnvironmentsSearchEntry = isWebClient
    ? WEB_RUNTIME_ENVIRONMENTS_SEARCH_ENTRY
    : RUNTIME_ENVIRONMENTS_SEARCH_ENTRY

  return [
    // Why: this array's order must mirror SETTINGS_NAV_GROUPS so the Settings
    // sidebar and the Cmd+J palette both read top-to-bottom in the same grouped
    // order — keep each new entry beside its group's siblings.
    {
      id: 'agents',
      title: t('settingsNav.panels.agents.title'),
      description: t('settingsNav.panels.agents.description'),
      icon: Bot,
      searchEntries: AGENTS_PANE_SEARCH_ENTRIES,
      group: 'capabilities'
    },
    {
      id: 'accounts',
      title: t('settingsNav.panels.accounts.title'),
      description: t('settingsNav.panels.accounts.description'),
      icon: UserCog,
      searchEntries: ACCOUNTS_PANE_SEARCH_ENTRIES,
      group: 'capabilities',
      badge: 'Optional'
    },
    {
      id: 'orchestration',
      title: t('settingsNav.panels.orchestration.title'),
      description: t('settingsNav.panels.orchestration.description'),
      icon: Network,
      searchEntries: ORCHESTRATION_PANE_SEARCH_ENTRIES,
      group: 'capabilities'
    },
    ...(showDesktopOnlySettings
      ? [
          {
            id: 'computer-use',
            title: t('settingsNav.panels.computer-use.title'),
            description: t('settingsNav.panels.computer-use.description'),
            icon: MousePointerClick,
            searchEntries: COMPUTER_USE_PANE_SEARCH_ENTRIES,
            group: 'capabilities'
          },
          {
            id: 'voice',
            title: t('settingsNav.panels.voice.title'),
            description: t('settingsNav.panels.voice.description'),
            icon: Mic,
            searchEntries: VOICE_PANE_SEARCH_ENTRIES,
            group: 'capabilities'
          }
        ]
      : []),
    {
      id: 'setup-guide',
      title: t('settingsNav.panels.setup-guide.title'),
      description: t('settingsNav.panels.setup-guide.description'),
      icon: OrcaLogoSettingsIcon,
      searchEntries: [
        {
          title: t('settingsNav.panels.setup-guide.title'),
          description: 'Open the onboarding checklist for setup and milestone steps.',
          keywords: ['setup guide', 'get started with Orca', 'getting started']
        }
      ],
      group: 'setup'
    },
    {
      id: 'general',
      title: t('settingsNav.panels.general.title'),
      description: t('settingsNav.panels.general.description'),
      icon: SlidersHorizontal,
      searchEntries: GENERAL_PANE_SEARCH_ENTRIES,
      group: 'setup'
    },
    {
      id: 'integrations',
      title: t('settingsNav.panels.integrations.title'),
      description: t('settingsNav.panels.integrations.description'),
      icon: Blocks,
      searchEntries: INTEGRATIONS_PANE_SEARCH_ENTRIES,
      group: 'setup'
    },
    {
      id: 'git',
      title: t('settingsNav.panels.git.title'),
      description: t('settingsNav.panels.git.description'),
      icon: GitBranch,
      // Why: the AI commit messages pane is rendered inside Git, so shared
      // metadata must search both surfaces wherever Git appears.
      searchEntries: [...GIT_PANE_SEARCH_ENTRIES, ...COMMIT_MESSAGE_AI_PANE_SEARCH_ENTRIES],
      group: 'workflows'
    },
    {
      id: 'tasks',
      title: t('settingsNav.panels.tasks.title'),
      description: t('settingsNav.panels.tasks.description'),
      icon: ListChecks,
      searchEntries: TASKS_PANE_SEARCH_ENTRIES,
      group: 'workflows'
    },
    {
      id: 'terminal',
      title: t('settingsNav.panels.terminal.title'),
      description: t('settingsNav.panels.terminal.description'),
      icon: SquareTerminal,
      searchEntries: terminalPaneSearchEntries,
      group: 'workflows'
    },
    {
      id: 'quick-commands',
      title: t('settingsNav.panels.quick-commands.title'),
      description: t('settingsNav.panels.quick-commands.description'),
      icon: Play,
      searchEntries: QUICK_COMMANDS_PANE_SEARCH_ENTRIES,
      group: 'workflows'
    },
    ...(showDesktopOnlySettings
      ? [
          {
            id: 'browser',
            title: t('settingsNav.panels.browser.title'),
            description: t('settingsNav.panels.browser.description'),
            icon: Globe,
            searchEntries: BROWSER_PANE_SEARCH_ENTRIES,
            group: 'workflows'
          }
        ]
      : []),
    {
      id: 'floating-workspace',
      title: t('settingsNav.panels.floating-workspace.title'),
      description: t('settingsNav.panels.floating-workspace.description'),
      icon: PanelsTopLeft,
      searchEntries: FLOATING_WORKSPACE_SEARCH_ENTRIES,
      group: 'workflows'
    },
    {
      id: 'appearance',
      title: t('settingsNav.panels.appearance.title'),
      description: t('settingsNav.panels.appearance.description'),
      icon: Palette,
      searchEntries: APPEARANCE_PANE_SEARCH_ENTRIES,
      group: 'interface'
    },
    {
      id: 'input',
      title: t('settingsNav.panels.input.title'),
      description: t('settingsNav.panels.input.description'),
      icon: TextCursorInput,
      searchEntries: INPUT_PANE_SEARCH_ENTRIES,
      group: 'interface'
    },
    ...(showDesktopOnlySettings
      ? [
          {
            id: 'notifications',
            title: t('settingsNav.panels.notifications.title'),
            description: t('settingsNav.panels.notifications.description'),
            icon: Bell,
            searchEntries: NOTIFICATIONS_PANE_SEARCH_ENTRIES,
            group: 'interface'
          }
        ]
      : []),
    {
      id: 'shortcuts',
      title: t('settingsNav.panels.shortcuts.title'),
      description: t('settingsNav.panels.shortcuts.description'),
      icon: Keyboard,
      searchEntries: SHORTCUTS_PANE_SEARCH_ENTRIES,
      group: 'interface'
    },
    {
      id: 'stats',
      title: t('settingsNav.panels.stats.title'),
      description: t('settingsNav.panels.stats.description'),
      icon: BarChart3,
      searchEntries: STATS_PANE_SEARCH_ENTRIES,
      group: 'interface'
    },
    {
      id: 'servers',
      title: t('settingsNav.panels.servers.title'),
      description: isWebClient
        ? t('settingsNav.panels.servers.descriptionWeb')
        : t('settingsNav.panels.servers.descriptionDesktop'),
      icon: Server,
      searchEntries: [runtimeEnvironmentsSearchEntry],
      group: 'remote',
      badge: 'Beta'
    },
    ...(showDesktopOnlySettings
      ? [
          {
            id: 'ssh',
            title: t('settingsNav.panels.ssh.title'),
            description: t('settingsNav.panels.ssh.description'),
            icon: Cable,
            searchEntries: SSH_PANE_SEARCH_ENTRIES,
            group: 'remote'
          },
          {
            id: 'mobile',
            title: t('settingsNav.panels.mobile.title'),
            description: t('settingsNav.panels.mobile.description'),
            icon: Smartphone,
            searchEntries: MOBILE_SETTINGS_PANE_SEARCH_ENTRIES,
            group: 'remote'
          }
        ]
      : []),
    ...(showDesktopOnlySettings && isMac
      ? [
          {
            id: 'developer-permissions',
            title: t('settingsNav.panels.developer-permissions.title'),
            description: t('settingsNav.panels.developer-permissions.description'),
            icon: ShieldCheck,
            searchEntries: DEVELOPER_PERMISSIONS_PANE_SEARCH_ENTRIES,
            group: 'security'
          }
        ]
      : []),
    {
      id: 'privacy',
      title: t('settingsNav.panels.privacy.title'),
      description: t('settingsNav.panels.privacy.description'),
      icon: Lock,
      searchEntries: PRIVACY_PANE_SEARCH_ENTRIES,
      group: 'security'
    },
    ...(showDesktopOnlySettings
      ? [
          {
            id: 'advanced',
            title: t('settingsNav.panels.advanced.title'),
            description: t('settingsNav.panels.advanced.description'),
            icon: Wrench,
            searchEntries: ADVANCED_PANE_SEARCH_ENTRIES,
            group: 'advanced'
          }
        ]
      : []),
    {
      id: 'experimental',
      title: t('settingsNav.panels.experimental.title'),
      description: t('settingsNav.panels.experimental.description'),
      icon: FlaskConical,
      searchEntries: EXPERIMENTAL_PANE_SEARCH_ENTRIES,
      group: 'experimental'
    },
    ...repos.map((repo) => ({
      id: `repo-${repo.id}`,
      title: repo.displayName,
      description: `${getRepoKindLabel(repo)} • ${repo.path}`,
      icon: SlidersHorizontal,
      searchEntries: getRepositoryPaneSearchEntries(repo),
      group: 'repositories'
    }))
  ]
}

export function useSettingsNavigationMetadata(): SettingsNavSection[] {
  const repos = useAppStore((state) => state.repos)
  const activeRuntimeEnvironmentId = useAppStore(
    (state) => state.settings?.activeRuntimeEnvironmentId
  )
  const isMac = isMacUserAgent()
  const isWindows = isWindowsUserAgent()
  const isWebClient = isWebClientLocation()
  const windowsTerminalCapabilityOwnerKey = getWindowsTerminalCapabilityOwnerKey(
    activeRuntimeEnvironmentId
  )
  const isWindowsTerminalHost =
    isWindows ||
    getCachedWindowsTerminalCapabilities(windowsTerminalCapabilityOwnerKey).hostPlatform === 'win32'

  // Why: Settings and Cmd+J share this metadata so platform/runtime visibility
  // and search entries cannot drift. Keep this hook free of Settings pane UI
  // imports; see docs/reference/cmd-j-settings-actions-plan.md.
  return useMemo(
    () =>
      buildSettingsNavigationMetadata({
        isMac,
        isWindows,
        isWindowsTerminalHost,
        isWebClient,
        repos
      }),
    [isMac, isWindows, isWindowsTerminalHost, isWebClient, repos]
  )
}
