import React from "react";
import { Input, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

function App() {
  return <Input value="Test" />;
}

const color = "#43a047";
const theme = createMuiTheme({
  palette: {
    common: { black: color, white: color },
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