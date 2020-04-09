import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

const SnackbarComponent = function({open,handleSnackbar,...props}) {
  

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={3000}
        ContentProps={{
            "aria-describedby": "alert-id"
          }}
        open={open}
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
        message="I love snacks"
      />
    </div>
  );
}

export default SnackbarComponent