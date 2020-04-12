import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Share from '@material-ui/icons/Share';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useNeumorphShadowStyles } from '@mui-treasury/styles/shadow/neumorph';
import {Rating} from "@material-ui/lab"
import {green} from "@material-ui/core/colors"
import {withRouter} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 304,
    width:"20%",
    margin:".8%",
    " & .MuiCardMedia-root":{
        height:"7em !important"
    }
  },
  content: {
    padding: ".2em 1em",
    textAlign:"center",
    height:"60%",
    margin:"3em 0",
    marginTop:"-1.2em",
    "& h3":{
        fontWeight:"600",
        letterSpacing:".1em"
    },
    "& p":{
        fontSize:"1em",
        fontWeight:"600",
        opacity:".7",
        textAlign:"left"
    },
    "& span":{
      fontSize:"1.29em",
      fontWeight:"600",
      letterSpacing:".1em",
      textAlign:"left !important"
    }
  },
  cardContainer:{
    clipPath: "polygon(0px 0px, 100% 0%, 100% 84%, 0% 100%)"
  },
  avatar: {
    width: 50,
    height: 50,
    border: `2.5px solid ${green[300]}`,
    margin: '-48px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
  iconContainer:{
    float:"right",
    margin:".5em .1em",
    marginTop:"-1em"
  }
}));

const CampgroundCard = (props) => {
  const cardStyles = useStyles();
  const neomorphStyles = useNeumorphShadowStyles()
  const shadowStyles = useSoftRiseShadowStyles();

  console.log(props)
  return (
    <Card onClick={() => props.history.push(`/campground/${props.content._id}`)} 
     className={cx(cardStyles.root, shadowStyles.root,neomorphStyles.root)}>
      <CardMedia className={cardStyles.cardContainer}  
       image={props.content.location} />

      <Avatar className={cardStyles.avatar} alt={props.content.user.username}
      src={props.content.user.profileImgUrl}
      />

      <CardContent className={cardStyles.content}>
        <h3>{props.content.name} </h3>
         <p>{props.content.description}</p>
         <span>Created By {props.content.user.username} </span>
      </CardContent>
      <Box className={cardStyles.iconContainer} >
          <Rating defaultValue={4} name="star" readOnly />
        <IconButton>
          <Share />
        </IconButton>
      </Box>
    </Card>
  );
};

export default withRouter(CampgroundCard);