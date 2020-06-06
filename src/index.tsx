import React from "react"
import ReactDOM from "react-dom"
import {App} from "./components/app"
import {ThemeProvider, createMuiTheme, CssBaseline} from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    common: {
      black: "rgba(70, 70, 70, 1)",
      white: "rgba(255, 255, 255, 1)"
    },
    background: {
      paper: "rgba(46, 46, 46, 1)",
      default: "rgba(26, 26, 26, 1)"
    },
    primary: {
      light: "rgba(247, 212, 90, 1)",
      main: "rgba(230, 194, 69, 1)",
      dark: "rgba(162, 134, 35, 1)",
      contrastText: "#1d1d1d"
    },
    secondary: {
      light: "rgba(115, 207, 247, 1)",
      main: "rgba(38, 169, 226, 1)",
      dark: "rgba(15, 107, 147, 1)",
      contrastText: "rgba(255, 255, 255, 1)"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(231, 231, 231, 0.54)",
      disabled: "rgba(255, 255, 255, 1)",
      hint: "rgba(255, 255, 255, 1)"
    }
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: "white"
      }
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)
