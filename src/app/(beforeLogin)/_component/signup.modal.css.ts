import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/globalTheme.css'

export const actionButton = style({
  width: '100%',
  height: '50px',
  borderRadius: '25px',
  backgroundColor: '#0f1419',
  color: 'white',
  fontSize: '17px',
  ':disabled': {
    opacity: '0.5',
  },
  ':hover': {
    backgroundColor: '#272c30',
  },
})

export const input = style({
  width: '100%',
  border: 'none',
  fontSize: '17px',
  marginTop: '16px',
  padding: '12px 8px 8px',
  outline: 'none',
})

export const inputDiv = style({
  display: 'flex',
  flexDirection: 'column',
  height: '56px',
  position: 'relative',
  margin: '12px 0',
})

export const inputLabel = style({
  width: '100%',
  display: 'inline-block',
  position: 'absolute',
  top: '0',
  border: '1px solid #cfd9de',
  borderRadius: '4px',
  fontSize: '13px',
  height: '56px',
  padding: '8px 8px 0',
  color: '#536471',
  ':focus-within': {
    color: 'red',
  },
})

export const modalFooter = style({
  padding: '24px 80px',
})

export const closeButton = style({
  width: '34px',
  height: '34px',
  borderRadius: '17px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#fff',
  position: 'absolute',
  left: '16px',
  top: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    backgroundColor: 'rgba(15,20,25,0.1)',
  },
  '@media': {
    'all and (min-width: 687px)': {
      left: '16px',
      backgroundColor: 'black',
    },
  },
})

export const closeButtonSvg = style({
  '@media': {
    'all and (min-width: 687px)': {
      fill: 'white',
    },
  },
})

export const modal = style({
  backgroundColor: vars.themeColor.color.modalContentBackground,
  position: 'relative',
  top: '5%',
  maxWidth: '80vw',
  minWidth: '600px',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  height: '550px',
  '@media': {
    'all and (min-width: 687px)': {
      top: '5%',
      minWidth: '600px',
      maxWidth: '600px',
      height: '550px',
      padding: '0',
    },
  },
})

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
})

export const modalBackground = style({
  width: '100vw',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: vars.themeColor.color.modalBackground,
})

export const modalBody = style({
  flex: '1',
  padding: '0 80px',
  '@media': {
    'all and (min-width: 687px)': {
      padding: '0 80px',
    },
  },
})

export const modalHeader = style({
  padding: '36px 80px 20px',
  fontSize: '31px',
  fontWeight: 'bold',
  '@media': {
    'all and (min-width: 687px)': {
      padding: '36px 80px 20px',
    },
  },
})
