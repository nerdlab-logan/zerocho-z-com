import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/globalTheme.css'

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: vars.themeColor.color.contentBackground,
  width: '100dvw',
  height: '100dvh',
})
