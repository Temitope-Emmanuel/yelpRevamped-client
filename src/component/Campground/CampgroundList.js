import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Box} from "@material-ui/core"
import CampgroundCard from "./CampgroundCard"

const useStyles = makeStyles(theme => ({
  root:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    position:"relative",
    alignItems:"center",
    justifyContent:"center",
    padding:theme.spacing(0,1.5),
    [theme.breakpoints.down("sm")]:{
      flexDirection:"column"
    }
  },

}))



const CampgroundList = function(props){

  const classes = useStyles()

  return(
    <Box className={classes.root}>
      {props.campground.map((m) => (
          <CampgroundCard key={m._id} content = {m}
       />
      ))}
    </Box>
  )
}


export default CampgroundList