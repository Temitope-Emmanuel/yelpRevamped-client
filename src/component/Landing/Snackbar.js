import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

const SnackbarComponent = function({alert,addAlert,...props}) {

  const [isSnackbar,setSnackbar] = React.useState(Boolean(alert))

  const handleSnackbar = () =>{
    setSnackbar(!isSnackbar)
  }
  React.useEffect(() => {
    setSnackbar(Boolean(alert))
    setTimeout(() => {
      addAlert("")
    }, 2500)

  },[alert])

  
   return (
    <div style={{zIndex:"2000"}}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={3000}
        ContentProps={{
            "aria-describedby": "alert-id"
          }}
        open={isSnackbar}
        onClose={handleSnackbar}
        action={[
            <IconButton
              onClick={handleSnackbar}
              color='inherit'
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          ]}
        TransitionComponent={SlideTransition}
        message={alert}
      />
    </div>
  );
}

export default React.memo(SnackbarComponent)