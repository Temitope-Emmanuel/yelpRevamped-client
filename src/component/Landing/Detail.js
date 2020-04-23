import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import {Container,Box} from "@material-ui/core"
import {Icon1,Icon2,Icon3} from "../../assets/images/campground icons"
import {green} from "@material-ui/core/colors"
import "./underline.css"

const useStyles = makeStyles(theme => ({
    root: {
        width:"100%",
        margin:"3em auto",
        display:"flex",
        justifyContent:"center",
        flexDirection:'column',
        "& div":{
            textAlign:"center",
            "& a":{
                textAlign:"center",
                fontSize:"2em",
                letterSpacing:".07em",
                fontWeight:"500",
                transition:"color .3s ease",
                "&:hover":{
                    color:green[600],
                }
            }
        }
      },
      iconCardContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        [theme.breakpoints.down("sm")]:{
        flexDirection:"column-reverse"
        }
      },
      mainCardContainer:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
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
          backgroundSize:"contain",
          [theme.breakpoints.down("sm")]:{
              width:"70%",
              height:"9em"
          }
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
          },
          [theme.breakpoints.down("sm")]:{
              "& h4":{
                  fontSize:"1.2em",
                  opacity:"1"
              },
              "& p":{
                  fontSize:".9em",
                  lineHeight:"1.2em"
              },
              padding:theme.spacing(0,3)
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
                <Box style={{backgroundImage:`url(${m})`}} 
                 className={classes.iconBox}/>
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


