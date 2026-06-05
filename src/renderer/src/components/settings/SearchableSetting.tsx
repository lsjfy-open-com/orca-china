import type React from 'react'
import { cn } from '@/lib/utils'
import { useAppStore } from '../../store'
import { matchesSettingsSearch, type SettingsSearchEntry } from './settings-search'
import { translateUiText } from '@/i18n/ui-text'

type SearchableSettingProps = SettingsSearchEntry & {
  children: React.ReactNode
  className?: string
  forceVisible?: boolean
  id?: string
}

export function SearchableSetting({
  title,
  description,
  forceVisible = false,
  keywords,
  children,
  className,
  id
}: SearchableSettingProps): React.JSX.Element | null {
  const query = useAppStore((state) => state.settingsSearchQuery)
  const localizedTitle = translateUiText(title)
  const localizedDescription = description ? translateUiText(description) : undefined
  const localizedKeywords = [
    title,
    description ?? '',
    ...(keywords ?? []),
    localizedTitle,
    localizedDescription ?? ''
  ].filter(Boolean)
  if (
    !forceVisible &&
    !matchesSettingsSearch(query, {
      title: localizedTitle,
      description: localizedDescription,
      keywords: localizedKeywords
    })
  ) {
    return null
  }

  return (
    <div className={cn('scroll-mt-6 w-full max-w-3xl', className)} id={id}>
      {children}
    </div>
  )
}
