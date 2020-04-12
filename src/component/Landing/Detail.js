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
        padding:"0 5%",
        margin:theme.spacing(5.5,0),
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
        justifyContent:"center",
        alignItems:"center",
      },
      media: {
        height: 140,
      },
      cardContainer:{
          margin:theme.spacing(1.5)
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
            <Card key={idx} className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    className={classes.media}
                    image={m}
                    title="Contemplative Reptile"
                    style={{height:"15em"}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Best Things About Camping
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
            ))}
            </Box>
        </Container>
      );
}

Detail.defaultProps = {
    icons:[Icon1,Icon2,Icon3]
}

export default Detail


