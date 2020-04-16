import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Button,Box} from '@material-ui/core';
import {Link} from "react-router-dom"
import {Divider,Grow} from '@material-ui/core';
import {green,red} from "@material-ui/core/colors"
import AddForm from "./AddForm"
import {TransitionGroup,CSSTransition} from "react-transition-group"
import "../../assets/styles/transition.css"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    padding:theme.spacing(2,0),
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight:"500",
    opacity:".9",
    letterSpacing:".09em"
  },
  headingContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%"
  },
  details: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    height:"100%",
    margin:theme.spacing(0,-.4),
    fontSize:"1.2em",
    [theme.breakpoints.down("md")]:{
      flexDirection:"column",
      alignItems:"center",
    }
  },
  imageContainer:{
    height:"13em",
    width:"20em",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"fit",
    backgroundColor:"purple",
    borderRadius:"1em",
    [theme.breakpoints.down("xs")]:{
    width:"100%",
    height:"8em",
    backgroundColor:"blue"
    },
  },
  helper: {
    borderLeft: `2px solid black`,
    padding: theme.spacing(10, 2),
    width:"40%",
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    [theme.breakpoints.down("md")]:{
      borderLeft:"none",
      padding:theme.spacing(0,2),
      width:"100%",
      height:"40%"
    }
  },
  link:{
      display:"block",
      textDecoration:"none",
      float:"right",
      color:green[400],
      transition:"all .4s ease",
      marginBottom:theme.spacing(2),
      "&:hover":{
          color:green[700],
          fontWeight:600
      }
  },
  buttonContainer:{
    "& button":{
      margin:theme.spacing(1,.9)
  }
  }
 }));

const Expansion = function({campground,editCampground,deleteCampground,...props}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [showForm,setShowForm] = React.useState(false)
  

  const handleForm = () => {
    setShowForm(!showForm)
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
      <div className={classes.root}>
        <TransitionGroup>
      {campground.map((camp) => (
          <CSSTransition 
          key={camp._id}
          classNames="page"
          timeout={500}
          >      
      <ExpansionPanel
      className={classes.expansionContainer}
       transitiononprops={{unmountOnExit:true}} 
       elevation={10}
       key={camp._id}
       onChange={handleChange(camp._id)}
       expanded={expanded === camp._id}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={camp._id}
          id={camp._id}>
            <Box className={classes.headingContainer}>
            <Typography className={classes.heading}>{camp.name}</Typography>
          {expanded !== camp._id ? <img height="25" alt="camp-img" src={camp.location}/> : null}
            </Box>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
            <div className={classes.imageContainer} style={{
                borderRadius:".5em",
                backgroundImage:`url(${camp.location})`
            }} />
          <div className={clsx(classes.column, classes.helper)}>
            <p className={classes.detailParagraph} >
                {camp.description}
            </p>
            <Link to={`/campground/${camp._id}`} 
                className={classes.link}>
                Learn more
              </Link>
          </div>
        </ExpansionPanelDetails>
        <Divider style={{backgroundColor:"rgba(0,0,0,.4)",margin:"0 1.4em"}} />
        <Grow mountOnEnter unmountOnExit in={expanded === camp._id && showForm} >
          <AddForm 
            campId ={camp._id}
            campName={camp.name}
            campDesc={camp.description} 
            useHandleCollapsed={handleForm} 
            editCampground={editCampground} 
            inputs={['Campground','description']} />
        </Grow>
        <ExpansionPanelActions className={classes.buttonContainer} style={{float:"left",margin:"0 .5em"}}>
          <Button size="small"
          onClick={() => deleteCampground(camp._id)}
           style={{
              backgroundColor:red[900]
          }}>Delete</Button>
          <Button size="small" 
          onClick={handleForm}
          style={{
              backgroundColor:green[500]
          }}>
            Edit
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
          </CSSTransition>
      ))}
        </TransitionGroup>
      </div>    
  );
}
 export default React.memo(Expansion)