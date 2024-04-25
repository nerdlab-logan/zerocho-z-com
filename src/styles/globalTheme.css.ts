// globalTheme.css.ts

import {
  globalStyle,
  createThemeContract,
  createGlobalTheme,
  createTheme,
} from '@vanilla-extract/css'

export const global = createGlobalTheme(':root', {
  fontFamily: {
    notoSansKR: `var(--font-noto-sans-kr)`,
  },
  fontSize: {
    xLarge: '48px',
    large: '36px',
    medium: '28px',
    regular: '18px',
    small: '16px',
    micro: '14px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    large: '700',
  },
  color: {},
})

const themeColor = createThemeContract({
  color: {
    mainBackground: null,
    contentBackground: null,
    modalBackground: null,
    modalContentBackground: null,
    mainFontColor: null,
    borderColor: null,
    gradient: null,
  },
})

export const lightTheme = createTheme(themeColor, {
  color: {
    mainBackground: '#f7f9fa',
    contentBackground: '#ffffff',
    modalBackground: 'rgba(0, 0, 0, 0.4)',
    modalContentBackground: '#ffffff',
    mainFontColor: '#2c2c2c',
    borderColor: '#cbc9f9',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  },
})

export const darkTheme = createTheme(themeColor, {
  color: {
    mainBackground: '#1d1d1d',
    contentBackground: '#2c2c2c',
    modalBackground: 'rgba(91, 112, 131, 0.4)',
    modalContentBackground: '#1d1d1d',
    mainFontColor: '#ffffff',
    borderColor: '#b1b1b3',
    gradient: 'linear-gradient(#091236, #1E215D)',
  },
})

export const vars = { ...global, themeColor }

globalStyle('body', {
  fontSize: global.fontSize.small,
  backgroundColor: vars.themeColor.color.mainBackground,
  userSelect: 'none',
  transition: 'all 0.25s linear',
})
