import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Container,Box} from "@material-ui/core"
import {Icon1,Icon2,Icon3} from "../../assets/images/campground icons"
import {green} from "@material-ui/core/colors"
import "./underline.css"

const useStyles = makeStyles(theme => ({
    root: {
        width:"100%",
        "& div":{
            textAlign:"center",
            "& a":{
                textAlign:"center",
                fontSize:"2em",
                letterSpacing:".07em",
                fontWeight:"500",
                transition:"color .3s ease",
                "&:hover":{
                    color:green[700],
                }
            }
        }
      },
      iconCardContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        width:"100%",
        [theme.breakpoints.down("sm")]:{
        flexDirection:"column-reverse"
        }
      },
      mainCardContainer:{
        width:"30%",
        margin:theme.spacing(0,1.5),
        height:"auto",
        [theme.breakpoints.down("sm")]:{
            width:"100%"
        }
      },
      iconBox:{
          width:"100%",
          height:"13em",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
          backgroundSize:"contain"
      },
      detailHolder:{
          "& h4":{
              fontSize:"1.9em",
              fontWeight:"500",
              opacity:".9",
              margin:theme.spacing(2,0)
          },
          "& p":{
              fontSize:"1.1em",
              opacity:".8",
              lineHeight:"2em"
          }
      },
      media: {
        height: 140,
      }
}))



const Detail = function({icons}){

    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <div className="box-c">
            <a className="custom-underline" >Amenities</a>
            </div>
            <Box className={classes.iconCardContainer}>
            {icons.map((m,idx) => (
            <Box key={idx} className={classes.mainCardContainer}>
                <Box style={{backgroundImage:`url(${m})`}} className={classes.iconBox}/>
                <Box className={classes.detailHolder}>
                    <h4>Best Thing About Camping</h4>
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                       Eum aspernatur accusantium, reiciendis eveniet soluta harum!
                        Vel delectus ab odit. Sequi nihil asperiores provident in. 
                        Cupiditate iusto praesentium obcaecati quae corrupti.
                    </p>
                </Box>
            </Box>
            ))}
            </Box>
        </Container>
      );
}

Detail.defaultProps = {
    icons:[Icon1,Icon2,Icon3]
}

export default Detail


