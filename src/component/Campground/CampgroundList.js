import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Box} from "@material-ui/core"
import CampgroundCard from "./CampgroundCard"

const useStyles = makeStyles(theme => ({
  root:{
    width:"95%",
    display:"grid",
    minHeight:"50vh",
    margin:"3em auto",
    gridGap:".5em",
    gridTemplateColumns:"repeat(auto-fit,minmax(17em,auto))",
    gridAutoRows:"minmax(18em,auto)",
    alignItems:"center",
    justifyItems:"center",
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