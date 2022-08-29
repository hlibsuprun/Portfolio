import { createPinia, setActivePinia } from 'pinia'
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'

import { themes, useThemeStore } from '@/stores/theme'

describe('Expression Store', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn()
      }))
    })
  })

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('state', () => {
    /*
     * INITIAL STATE
     */
    it('initial state', () => {
      const themeStore = useThemeStore()
      const theme = themes['light']

      expect(themeStore.theme).toEqual(theme)
    })

    /*
     * DIRECT STATE CHANGE
     */
    it('direct state change', () => {
      const themeStore = useThemeStore()
      const theme = themes['dark']
      themeStore.theme = theme

      expect(themeStore.theme).toEqual(theme)
    })
  })

  describe('actions', () => {
    /*
     * toggleDarkTheme
     */
    it('toggleDarkTheme', () => {
      const themeStore = useThemeStore()
      const theme = themes['dark']

      themeStore.toggleDarkTheme()

      expect(themeStore.theme).toEqual(theme)
    })

    /*
     * toggleLightTheme
     */
    it('toggleLightTheme', () => {
      const themeStore = useThemeStore()
      let theme = themes['dark']

      themeStore.theme = theme
      theme = themes['light']

      themeStore.toggleLightTheme()

      expect(themeStore.theme).toEqual(theme)
    })
  })
})
