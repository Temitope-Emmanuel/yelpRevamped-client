import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Fade,Box,OutlinedInput,ButtonGroup ,TextField,Checkbox,FormGroup,Button} from "@material-ui/core"
import {green,red} from "@material-ui/core/colors"
import UseInputState from "../../hooks/useFormState"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  HeadingContainer:{
    margin:theme.spacing(4,1.5),
    "& h4":{
      fontSize:"1.7em",
      fontWeight:"500",
      letterSpacing:".1em",
      margin:theme.spacing(.1,0)
    },
    "& p":{
      opacity:".8",
      textTransform:"capitalize"
    }
  },
  formContainer:{
    margin:theme.spacing(1.5),
    padding:theme.spacing(.5),
    display:"flex",
    justifyContent:"flex-start"
  },
  subFormContainer:{
    display:"flex",
    alignItems:"center",
    padding:theme.spacing(1),
    justifyContent:"space-between"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  buttonContainer:{
    margin:theme.spacing(2),
    marginLeft:"auto"
 }
}));

export default function BookForm() {
  const classes = useStyles();
  const [email,updateEmail,ResetEmail] = UseInputState("")
  const [adult,updateAdult,ResetAdult] = UseInputState("")
  const [children,updateChildren,ResetChildren] = UseInputState("")
  const [textField,updateTextField,ResetTextField] = UseInputState("")
  const [checked, setChecked] = React.useState(false);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);  
  }

  
  return (
    <Box className={classes.root}>
        <Box className={classes.HeadingContainer}>
            <h4>New Booking</h4>
            <p>Please fill out the booking form and we will get back to
              you as soon as possible <br/> Thank you very much.
            </p>
        </Box>
        <FormGroup className={classes.formContainer}>
          <Box className={classes.subFormContainer}>
            <FormControl style={{
              width:"60%"
            }}>
                <InputLabel htmlFor="email" ><span>Email</span> </InputLabel>
                <OutlinedInput id="email" value={email} 
                 onChange={updateEmail} 
                 placeholder="you@youremail.com"  />
            </FormControl>

            <FormControl style={{
              width:"35%"
            }} variant="outlined" className={classes.formControl}>
                <InputLabel id="adult"><span>Number of Adults</span> </InputLabel>
                <Select
                  labelId="adult"
                  id="demo-simple-select-outlined"
                  value={adult}
                  onChange={updateAdult}
                  label="Adult"
                >
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                    <MenuItem value={4}>Four</MenuItem>
                    <MenuItem value={5}>Five</MenuItem>
                    <MenuItem value={10}>More</MenuItem>
                </Select>
            </FormControl>
          </Box>
            <Box className={classes.subFormContainer}>
              <Box>
                <span>Will There Be Children ? </span>
                <Checkbox checked={checked} onChange={handleCheckChange} />
              </Box>
            <Fade mountOnEnter unmountOnExit in={checked} > 
              <FormControl style={{
                width:"35%"
              }} variant="outlined" className={classes.formControl}>
              <InputLabel id="children"><span>Number of Children</span> </InputLabel>
              <Select
                labelId="children"
                id="demo-simple-select-children"
                value={children}
                onChange={updateChildren}
                label="Children"
              >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
                <MenuItem value={4}>Four</MenuItem>
                <MenuItem value={5}>Five</MenuItem>
                <MenuItem value={10}>More</MenuItem>
            </Select>
            </FormControl>
        </Fade>
        </Box>
              <TextField
                style={{width:"97.8%"}}
                id="outlined-multiline-static"
                label="More Requests ?"
                multiline
                rows="5"
                defaultValue={textField}
                onChange={updateTextField}
                variant="outlined"/>
            <ButtonGroup className={classes.buttonContainer}>
              <Button type="submit" style={{
                backgroundColor:green[400]
              }} >Submit</Button>
              <Button style={{
                backgroundColor:red[600]
              }} >Cancel</Button>
            </ButtonGroup>
        </FormGroup>
      </Box>
  );
}