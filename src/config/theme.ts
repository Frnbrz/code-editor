import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {},
  useSystemColorMode: false,
  initialColorMode: 'dark',
  breakpoints: {
    sm: `1168px`,
    md: `1168px`,
    lg: `1169px`,
    xl: `1169px`,
    '2xl': `1169px`,
    '3xl': `1169px`,
  },
})

export default theme
