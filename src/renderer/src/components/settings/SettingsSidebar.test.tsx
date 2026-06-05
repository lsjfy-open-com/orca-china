import { renderToStaticMarkup } from 'react-dom/server'
import { Bot, Mic, Network } from 'lucide-react'
import { describe, expect, it, vi } from 'vitest'
import { SettingsSidebar } from './SettingsSidebar'
import { TooltipProvider } from '../ui/tooltip'
import { initI18n } from '../../i18n'

vi.mock('@/hooks/useShortcutLabel', () => ({
  useShortcutLabel: () => '⌘F'
}))

async function renderSidebar(locale: 'en' | 'zh-CN' = 'en'): Promise<string> {
  await initI18n(locale)
  return renderToStaticMarkup(
    <TooltipProvider>
      <SettingsSidebar
        activeSectionId="orchestration"
        generalGroups={[
          {
            id: 'capabilities',
            title: 'AI Capabilities',
            sections: [
              {
                id: 'agents',
                title: 'Agents',
                icon: Bot
              },
              {
                id: 'orchestration',
                title: 'Orchestration',
                icon: Network,
                installStatus: 'install'
              },
              {
                id: 'voice',
                title: 'Voice',
                icon: Mic,
                installStatus: 'installed'
              }
            ]
          },
          {
            id: 'setup',
            title: 'Set Up',
            sections: [
              {
                id: 'accounts',
                title: 'AI Provider Accounts',
                icon: Bot,
                badge: 'Optional'
              }
            ]
          }
        ]}
        repoSections={[]}
        hasRepos={false}
        searchQuery=""
        onBack={vi.fn()}
        onSearchChange={vi.fn()}
        onSelectSection={vi.fn()}
      />
    </TooltipProvider>
  )
}

describe('SettingsSidebar', () => {
  it('renders install state labels separately from static badges', async () => {
    const markup = await renderSidebar()

    expect(markup).toContain('Not installed')
    expect(markup).toContain('Installed')
    expect(markup).toContain('Optional')
  })

  it('renders localized install state labels', async () => {
    const markup = await renderSidebar('zh-CN')

    expect(markup).toContain('未安装')
    expect(markup).toContain('已安装')
  })
})
