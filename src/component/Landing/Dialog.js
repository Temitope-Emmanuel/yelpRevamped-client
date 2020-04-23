import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {green,red} from "@material-ui/core/colors"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogComponent = function ({open,history,handleDialog,logout,...user}) {

  
  const handleLogout = ()=>{
    logout()
    handleDialog()
    history.push("/")
  }
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Log-out Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
              Are You Sure You want to Log-out {user.user.username}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{textTransforme:"capitalize"}}>
          <Button style={{
              backgroundColor:red[300],
              color:red[700]
          }} onClick={handleDialog} color="primary">
            NO
          </Button>
          <Button style={{
              backgroundColor:green[300],
              color:green[700]
          }} onClick={handleLogout} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogComponent