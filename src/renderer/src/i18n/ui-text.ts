import type React from 'react'
import { translateText } from '../../../shared/i18n'

export function translateUiText(value: string, params?: Record<string, string | number>): string {
  return translateText(value, params)
}

export function translateUiNode(node: React.ReactNode): React.ReactNode {
  return typeof node === 'string' ? translateUiText(node) : node
}

export function translateUiChildren(children: React.ReactNode): React.ReactNode {
  if (typeof children === 'string') {
    return translateUiText(children)
  }
  if (Array.isArray(children)) {
    return children.map((child) => translateUiChildren(child))
  }
  return children
}
