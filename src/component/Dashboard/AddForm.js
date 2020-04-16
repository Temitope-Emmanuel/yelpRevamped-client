import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TerrainRoundedIcon from '@material-ui/icons/TerrainRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import {FormControl,InputLabel,FilledInput,Box,ButtonGroup} from "@material-ui/core"
import UseInputState from "../../hooks/useFormState"
import {green} from "@material-ui/core/colors"
import{Grow} from "@material-ui/core"
import LabelWrapper from "../SignUp/LabelWrapper"


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down("sm")]:{
      width:30,
      height:30
    },
    [theme.breakpoints.up("sm")]:{
      width:50,
      height:50
    }
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
}));

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;


  const icons = {
    1: <TerrainRoundedIcon />,
    2:<DescriptionRoundedIcon/>,
    3: <LocationOnRoundedIcon />,
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

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    "& .MuiStepper-root":{
      padding:theme.spacing(.5,0),
    },
    "& .MuiFormLabel-root":{
      [theme.breakpoints.down("sm")]:{
        fontSize:".8em",
        color:"black"
      }
    }
  },
  detailContainer:{
    width:"100%",
    display:"inherit",
    justifyContent:"center",
    margin:theme.spacing(.5,0)
  }
}));



const AddForm = function({addCampground,editCampground,inputs,...props}) {
  function getSteps() {
    return inputs;
  }
  const isEdit = inputs.length <= 2
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [campground,updateCampground,ResetCampground] = UseInputState(props.campName || "")
  const [description,updateDescription,ResetDescription] = UseInputState(props.campDesc || "")
  const [image,updateImage,ResetImage] = UseInputState("")
  const steps = getSteps();

  React.useEffect(() => {
    if(activeStep === steps.length){
        props.useHandleCollapsed()
        setActiveStep(0)
    }
  },[activeStep])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const resetInput = () => {
    ResetCampground()
    ResetImage()
    ResetDescription()
    handleNext()

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    isEdit ? 
    editCampground(props.campId,{
      name:campground,description      
    }):
      addCampground({
        name:campground,
        location:image,
        description
      })
      
      resetInput()
 } 

  const getStepContent = function(step) {
    switch (step) {
      case 0:
        return ["campground","Add Campground Name",campground,updateCampground];
      case 1:
        return ["description","Add a Description",description,updateDescription];
      case 2:
        return ["image","Add Image Url",image,updateImage];
      default:
        return 'Unknown step';
    }
  }  
  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label,idx) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
                    <LabelWrapper>
                <Grow in={activeStep === idx} >
                        <FormControl>
                            <InputLabel htmlFor={getStepContent(idx)[0]} >{getStepContent(idx)[1]} </InputLabel>
                            <FilledInput required style={{width:"100%"}} 
                             onKeyPress={(e) => e.which === 13 ? handleNext() : null}
                             onChange={getStepContent(idx)[3]}
                             value={getStepContent(idx)[2]} 
                             id={getStepContent(idx)[0]}  
                             placeholder={getStepContent(idx)[1]} />
                        </FormControl>
                </Grow>    
                    </LabelWrapper>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box className={classes.detailContainer} >
        {activeStep !== steps.length && (
            <ButtonGroup>
              <Button
               style={{backgroundColor:green[100]}}
               disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button
                variant="contained"
                style={{backgroundColor:green[600]}}
                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </ButtonGroup>
        )}
      </Box>
    </div>
  );
}

export default React.memo(AddForm)