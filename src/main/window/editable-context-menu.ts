import {
  richMarkdownContextMenuCommandChannel,
  type RichMarkdownContextMenuCommand,
  type RichMarkdownContextMenuCommandPayload
} from '../../shared/rich-markdown-context-menu'
import { t } from '../../shared/i18n'

type EditableContextMenuWebContents = Pick<
  Electron.WebContents,
  'replaceMisspelling' | 'send' | 'session'
>

function markdownCommandItem(
  label: string,
  command: RichMarkdownContextMenuCommand,
  webContents: EditableContextMenuWebContents,
  point: { x: number; y: number }
): Electron.MenuItemConstructorOptions {
  return {
    label,
    click: () => {
      const payload: RichMarkdownContextMenuCommandPayload = { command, ...point }
      webContents.send(richMarkdownContextMenuCommandChannel, payload)
    }
  }
}

function buildMarkdownMenuTemplate(
  webContents: EditableContextMenuWebContents,
  point: { x: number; y: number }
): Electron.MenuItemConstructorOptions[] {
  return [
    markdownCommandItem(t('contextMenu.addLink'), 'add-link', webContents, point),
    { type: 'separator' },
    {
      label: t('contextMenu.format'),
      submenu: [
        markdownCommandItem(t('contextMenu.bold'), 'bold', webContents, point),
        markdownCommandItem(t('contextMenu.italic'), 'italic', webContents, point),
        markdownCommandItem(t('contextMenu.strike'), 'strike', webContents, point),
        markdownCommandItem(t('contextMenu.inlineCode'), 'inline-code', webContents, point),
        markdownCommandItem(t('contextMenu.codeBlock'), 'code-block', webContents, point),
        markdownCommandItem(t('contextMenu.quote'), 'blockquote', webContents, point)
      ]
    },
    {
      label: t('contextMenu.paragraph'),
      submenu: [
        markdownCommandItem(t('contextMenu.bodyText'), 'paragraph', webContents, point),
        markdownCommandItem(t('contextMenu.heading1'), 'heading-1', webContents, point),
        markdownCommandItem(t('contextMenu.heading2'), 'heading-2', webContents, point),
        markdownCommandItem(t('contextMenu.heading3'), 'heading-3', webContents, point),
        { type: 'separator' },
        markdownCommandItem(t('contextMenu.bulletList'), 'bullet-list', webContents, point),
        markdownCommandItem(t('contextMenu.numberedList'), 'ordered-list', webContents, point),
        markdownCommandItem(t('contextMenu.checklist'), 'task-list', webContents, point)
      ]
    },
    {
      label: t('contextMenu.insert'),
      submenu: [
        markdownCommandItem(t('contextMenu.link'), 'add-link', webContents, point),
        markdownCommandItem(t('contextMenu.image'), 'image', webContents, point),
        markdownCommandItem(t('contextMenu.divider'), 'divider', webContents, point),
        markdownCommandItem(t('contextMenu.codeBlock'), 'code-block', webContents, point)
      ]
    },
    { type: 'separator' },
    { role: 'cut' },
    { role: 'copy' },
    { role: 'paste' },
    { role: 'pasteAndMatchStyle', label: t('contextMenu.pasteAsPlainText') },
    { role: 'selectAll' }
  ]
}

function buildNativeEditMenuTemplate(): Electron.MenuItemConstructorOptions[] {
  return [
    { role: 'cut' },
    { role: 'copy' },
    { role: 'paste' },
    { role: 'pasteAndMatchStyle', label: t('contextMenu.pasteAsPlainText') },
    { role: 'selectAll' }
  ]
}

export function buildEditableContextMenuTemplate(
  params: Electron.ContextMenuParams,
  webContents: EditableContextMenuWebContents
): Electron.MenuItemConstructorOptions[] {
  if (!params.isEditable) {
    return []
  }

  const suggestions = params.dictionarySuggestions.slice(0, 5)
  const isRichMarkdownSurface = params.formControlType === 'none'
  if (!isRichMarkdownSurface && suggestions.length === 0 && !params.misspelledWord) {
    return []
  }

  const template: Electron.MenuItemConstructorOptions[] = suggestions.map((suggestion) => ({
    label: suggestion,
    click: () => webContents.replaceMisspelling(suggestion)
  }))

  if (params.misspelledWord) {
    if (template.length > 0) {
      template.push({ type: 'separator' })
    }
    template.push({
      label: t('contextMenu.addToDictionary'),
      click: () => {
        webContents.session.addWordToSpellCheckerDictionary(params.misspelledWord)
      }
    })
  }

  if (template.length > 0) {
    template.push({ type: 'separator' })
  }
  template.push(
    ...(isRichMarkdownSurface
      ? buildMarkdownMenuTemplate(webContents, { x: params.x, y: params.y })
      : buildNativeEditMenuTemplate())
  )

  return template
}
