import React from "react"
import {makeStyles} from "@material-ui/core"
import {Rating} from "@material-ui/lab"
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';





const useStyles = makeStyles(theme => ({
    root:{
        "& svg":{
            color:"blue",
            backgroundColor:"purple"
        }
    }
}))
const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    const classes = useStyles()
    return <span className={classes.root} {...other}>{customIcons[value].icon}</span>;
  }



const RatingComponent = function(props){

    return(
        <div>
            <Rating name="campground-rating"
               IconContainerComponent={IconContainer}
               size={props.size || "large"}
               defaultValue={3}
          />
        </div>
    )
}

export default RatingComponent