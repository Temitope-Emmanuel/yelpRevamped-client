import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Box} from "@material-ui/core"
import CampgroundCard from "./CampgroundCard"

const useStyles = makeStyles(theme => ({
  root:{
    width:"95%",
    display:"grid",
    margin:"2.5%",
    gridGap:".25em",
    gridTemplateColumns:"repeat(auto-fit,minmax(18em,1fr))",
    gridAutoRows:"20em",
    alignItems:"baseline",
    gridAutoFlow:"dense",
    
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