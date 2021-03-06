import React from "react";
import { Input, createMuiTheme, MuiThemeProvider } from "@material-ui/core";


const color = "#43a047";
const theme = createMuiTheme({
  palette: {
    common: { black: "#ffffff", white: "#00000" },
    primary: { main: color, dark: color, light: color },
    text: { primary: color, secondary: color }
  }
});

const LabelWrapper = function(props){
    return(
        <MuiThemeProvider theme={theme}>
        {props.children}
      </MuiThemeProvider>    
    )
}

  export default LabelWrapper