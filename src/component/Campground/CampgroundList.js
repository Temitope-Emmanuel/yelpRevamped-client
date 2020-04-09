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
    alignItems:"center",
    flexWrap:"wrap",
    padding:theme.spacing(2),
    margin:theme.spacing(3),
    cursor:"pointer"
  }
}))



const CampgroundList = function(props){

  const classes = useStyles()

  return(
    <Box className={classes.root}>
      <CampgroundCard/>
      {/* <CampgroundCard/>
      <CampgroundCard/>
      <CampgroundCard/>
      <CampgroundCard/> */}
    </Box>
  )
}


export default CampgroundList