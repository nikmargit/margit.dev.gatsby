import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const red = `#E94B3CFF`
const yellow = `#FEE715FF`
const black = `#101820FF`

export default merge(defaultThemeColors, {
  primary: red,
  modes: {
    dark: {
      background: black,
      primary: yellow,
    },
  },
})
