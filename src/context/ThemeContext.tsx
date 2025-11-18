import React, { createContext, useContext, useState, useEffect } from 'react'

export interface Theme {
  mode: 'light' | 'dark'
  colors: {
    background: string
    text: string
    primary: string
    secondary: string
    cardBg: string
    sidebarBg: string
    border: string
  }
}

const lightTheme: Theme = {
  mode: 'light',
  colors: {
    background: '#ffffff',
    text: '#000000',
    primary: '#90EE90',
    secondary: '#143464',
    cardBg: '#efefef',
    sidebarBg: '#444',
    border: '#grey'
  }
}

const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    background: '#1a1a1a',
    text: '#e0e0e0',
    primary: '#90EE90',
    secondary: '#143464',
    cardBg: '#2a2a2a',
    sidebarBg: '#222',
    border: '#555'
  }
}

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('momentum-theme')
    return saved === 'dark'
  })

  useEffect(() => {
    localStorage.setItem('momentum-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
