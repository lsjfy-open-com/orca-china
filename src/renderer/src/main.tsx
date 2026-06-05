import './assets/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { RecoverableRenderErrorBoundary } from './components/error-boundaries/RecoverableRenderErrorBoundary'
import {
  installRendererCrashDiagnostics,
  recordRendererCrashBreadcrumb
} from './lib/crash-diagnostics'
import { applyDocumentTheme } from './lib/document-theme'
import { shouldEnableReactGrab } from './lib/react-grab-dev-gate'
import { initI18n } from './i18n'
import { t } from '../../shared/i18n'

recordRendererCrashBreadcrumb('renderer_bootstrap_started', { dev: import.meta.env.DEV })
installRendererCrashDiagnostics()

if (
  import.meta.env.DEV &&
  shouldEnableReactGrab({
    dev: import.meta.env.DEV,
    enableFlag: import.meta.env.VITE_ENABLE_REACT_GRAB
  })
) {
  void import('react-grab').then(({ init }) => init())
  void import('react-grab/styles.css')
}

applyDocumentTheme('system', { disableTransitions: false })

const rootElement = document.getElementById('root')
if (!rootElement) {
  recordRendererCrashBreadcrumb('renderer_root_missing')
  throw new Error('Renderer root element not found.')
}

initI18n('zh-CN').then(() => {
  createRoot(rootElement).render(
    <StrictMode>
      <RecoverableRenderErrorBoundary
        boundaryId="app.root"
        surface="app-root"
        title={t('app.appShellError')}
        description={t('app.appShellErrorDesc')}
      >
        <App />
      </RecoverableRenderErrorBoundary>
    </StrictMode>
  )
  recordRendererCrashBreadcrumb('renderer_bootstrap_rendered')
})
