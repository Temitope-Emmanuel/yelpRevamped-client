import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Box} from "@material-ui/core"
import CampgroundCard from "./CampgroundCard"

const useStyles = makeStyles(theme => ({
  root:{
    width:"100%",
    height:"60vh",
    display:"flex",
    flexDirection:"row",
    position:"relative",
    alignItems:"center",
    flexWrap:"wrap",
    padding:theme.spacing(2),
    margin:theme.spacing(5),
    cursor:"pointer"
  },

}))



const CampgroundList = function(props){

  const classes = useStyles()

  return(
    <Box className={classes.root}>
      {props.campground.map((m) => (
          <CampgroundCard key={m._id} content = {m} />
        
      ))}
    </Box>
  )
}


export default CampgroundList