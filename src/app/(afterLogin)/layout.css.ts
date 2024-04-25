import { globalStyle, style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  alignItems: 'stretch',
  backgroundColor: '#fff',
})

export const leftSection = style({
  width: '275px',
  height: '100dvh',
})

export const leftSectionWrapper = style({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  flexGrow: '1',
})

export const logo = style({
  display: 'inline-block',
  height: '56px',
  marginTop: '2px',
})

export const logoPill = style({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ':hover': {
    backgroundColor: 'rgba(15,20,25,0.1)',
  },
})

export const main = style({
  width: '600px',
  height: '200dvh',
})

export const postButton = style({
  margin: '16px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '52px',
  boxShadow: 'rgba(0,0,0,0.08) 0px 8px 28px',
  backgroundColor: '#1d9bf0',
  width: '234px',
  border: 'none',
  color: 'white',
  fontWeight: '700',
  fontSize: '17px',
  borderRadius: '26px',
  ':hover': {
    backgroundColor: '#1a8cd8',
  },
})

export const rightSection = style({
  width: '350px',
  height: '100%',
})

export const rightSectionInner = style({
  height: '100%',
  width: '990px',
  display: 'flex',
  justifyContent: 'space-between',
})

export const rightSectionWrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  height: '100dvh',
  flexDirection: 'column',
  flexGrow: '1',
})

export const followRecommend = style({
  fontSize: '20px',
  fontWeight: 'bold',
  backgroundColor: '#f7f9f9',
  borderRadius: '16px',
  margin: '12px 0',
  padding: '12px 16px',
})

globalStyle(`${followRecommend} h3`, {
  paddingBottom: 12,
})

export const leftSectionFixed = style({
  position: 'fixed',
  width: 'inherit',
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
})

globalStyle(`${leftSectionFixed} nav`, {
  flex: '1',
})

globalStyle(`${leftSectionFixed} nav li`, {
  listStyleType: 'none',
})

export const search = style({
  position: 'fixed',
  height: '42px',
  width: 'inherit',
  borderRadius: '21px',
  backgroundColor: '#eff3f4',
  marginTop: '6px',
  marginBottom: '12px',
  display: 'flex',
  alignItems: 'center',
})

globalStyle(`${search} input`, {
  outline: 'none',
  backgroundColor: 'inherit',
  border: 'none',
  padding: '12px',
  marginLeft: '5px',
  fontSize: '15px',
})

globalStyle(`${search} svg`, {
  marginLeft: '20px',
  fill: '#536471',
})
