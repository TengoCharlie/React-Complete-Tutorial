import { create } from 'zustand'

/**
 * useThemeStore (Zustand example)
 * -------------------------------
 * Zustand provides a lightweight global store without Context.
 * Here we track UI theme to show alternative global state management.
 */
export const useThemeStore = create((set) => ({
  theme: 'light',
  toggle: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}))
