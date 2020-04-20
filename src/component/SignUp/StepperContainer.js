import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {green,red} from "@material-ui/core/colors"

import {FormControl,FilledInput,InputLabel,ButtonGroup} from "@material-ui/core";
import LabelWrapper from "./LabelWrapper"
import useInputState from "../../hooks/useFormState";

import FaceTwoToneIcon from '@material-ui/icons/FaceTwoTone';
import HttpsTwoToneIcon from '@material-ui/icons/HttpsTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import PhotoCameraTwoToneIcon from '@material-ui/icons/PhotoCameraTwoTone';

const useColorlibStepIconStyles = makeStyles(theme => ({
    root: {
      backgroundColor: 'whitesmoke',
      color:"black",
      zIndex: 1,
      width: 55,
      height: 55,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      "& svg":{
        fontSize:"2.1em"
      },
      [theme.breakpoints.down("xs")]:{
        width:35,
        height:35,
        "& svg":{
          fontSize:"1.3em"
        }
      }
    },
    active: {
      backgroundImage:
        `linear-gradient( 136deg, ${green[100]} 0%, ${green[300]} 70%, ${green[600]} 100%)`,
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
      backgroundColor:green[600]
    },
  }));
  
  function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
  
    const icons = {
      1: <EmailTwoToneIcon />,
      2: <HttpsTwoToneIcon />,
      3: <FaceTwoToneIcon />,
      4: <PhotoCameraTwoToneIcon />,
    };
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }
  


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height:"90%",
    margin:"auto 0",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    '& label.Mui-focused': {
      color: green[500],
      fontSize:"1.1em",
      margin:".3em .5em"
    },
    "& .MuiStepContent-root":{
      borderLeft:"3px solid black",
      margin:"0 1.8em",
      marginTop:".2em",
      borderRadius:'.2em 0 0 0',
      [theme.breakpoints.down("xs")]:{
        marginTop:".2em",
        margin:"0 1em"
      }
    }, 
    "& .MuiStepConnector-lineVertical":{
      borderLeft:"3px solid black",
      margin:"0 1.05em",
      borderRadius:'0 0 0 .2em',
      [theme.breakpoints.down("xs")]:{
        margin:"0 .2em"
      }
    },
    "& .MuiStepper-root":{
      width:"60%",
      [theme.breakpoints.down("xs")]:{
        width:"90%",
        padding:".2em !important"
      }
    }
   },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    display:"flex",
    justifyContent:"flex-end",
    width:"70%",
    "& button":{
      borderRadius:"1.1em 0 1.1em 0",
      color:"black",
    },
    [theme.breakpoints.down("xs")]:{
      "& button":{
        fontSize:".8em",
        padding:".3em 0"
      },
      width:"100%"
    }
  },
  resetContainer: {
    width:"auto",
    padding: theme.spacing(1,2),
    "& button":{
      padding:theme.spacing(1,3)
    },
    "& div":{
      display:"flex",
      flexDirection:"row",
      justifyContent:"flex-end",
      alignItems:"center"
    },
    "& p":{
      margin:"0 0",
      fontSize:"1.2em",
      opacity:".8",
      fontWeight:"400",
    },
     [theme.breakpoints.down("xs")]:{
       fontSize:".9em",
       "& button":{
         padding:".3em .1em"
       }
     }
  },
  formControl:{
    width:"70%",
    [theme.breakpoints.down("xs")]:{
      width:"100%"
    }
  }
}));

function getLoginSteps() {
  return ['Input Email','Input Password'];
}

function getSignUpSteps() {
  return ['Add Email','Create Password','Add Username','Add Profile Image'];
}


const StepperContainer = function (props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = props.signup ? getSignUpSteps() : getLoginSteps();
  const [email,updateEmail,resetEmail] = useInputState("")
  const [username,updateUsername,resetUsername] = useInputState("")
  const [password,updatePassword,resetPassword] = useInputState("")
  const [ProfileImageUrl,updateProfileImageUrl,resetProfileImageUrl] = useInputState("")


const getStepContent = (step) => {
    switch (step) {
      case 0:
        return {
          Label:"Add Email",
          placeholder:"Input Your Email",
          type:"email",
          state:[email,updateEmail]
        };
      case 1:
        return {
          Label:"Create Password",
          placeholder:"Input Your Password",
          type:"password",
          state:[password,updatePassword]
        };
      case 2:
        return {
          Label:"Create Username",
          placeholder:"Input Your New Your Username",
          state:[username,updateUsername]
        };
      case 3:
        return {
          Label:"Add Profile Image URL",
          placeholder:"Input Your Image Url Here",
          state:[ProfileImageUrl,updateProfileImageUrl]
        };
      default:
        return 'Unknown step';
    }
  }  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      password,username,
      email,
      profileImgUrl:ProfileImageUrl
    }
    console.log(payload)
    const address = props.signup ? "signup":"login";
    props.authUser(address,payload).then(
      (response) =>{
        console.log(response)
      }
    ).catch((e) => {
      console.log(e)
    })
    resetUsername()
    resetEmail()
    resetPassword()
    resetProfileImageUrl()
    handleReset()
    props.history.push("/")
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}
       orientation="vertical">
        {steps.map((label, idx) => (
          <Step key={idx}>
            <StepLabel 
            StepIconComponent={ColorlibStepIcon}
             >{activeStep === idx ? label : getStepContent(idx).state[0] }</StepLabel>
            <StepContent>
              <FormControl className={classes.formControl} size="small">
                <InputLabel size="small"
                htmlFor={getStepContent(idx).Label}>{getStepContent(idx).Label}</InputLabel>
                  <LabelWrapper>
                <FilledInput
                required={true}
                style={{
                  color:"black"
                }} size="small"
                autoFocus = {idx === activeStep} 
                 type={getStepContent(idx).type || "text"}
                 value={getStepContent(idx).state[0]}
                 onKeyPress = {(e) => (e.which === 13 && handleNext())}
                 onChange={getStepContent(idx).state[1]}
                 id={getStepContent(idx).Label}
                 placeholder={getStepContent(idx).Label} />
                  </LabelWrapper>
              </FormControl>
              <div className={classes.actionsContainer}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    style={{backgroundColor:green[600]}}
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper style={{
          backgroundColor:"whitesmoke"
        }} square elevation={5} className={classes.resetContainer}>
          <p> All Steps are finished Click Below to submit</p>
          <ButtonGroup>
          <Button style={{
            backgroundColor:red[300],
            color:red[900],
          }} onClick={handleBack} type="button" className={classes.button}>
            Back
          </Button>
          <Button style={{
            backgroundColor:green[300],
            color:green[900],
          }} onClick={handleSubmit} type="submit" className={classes.button}>
            Submit
          </Button>
          </ButtonGroup>
        </Paper>
      )}
    </div>
  );
}
export default StepperContainer