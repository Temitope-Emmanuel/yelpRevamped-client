import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {green} from "@material-ui/core/colors"
import LabelWrapper from "../SignUp/LabelWrapper"
import BookForm from "./BookForm"


import CommentList from "../Comment"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

const TabComponent =  function (props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className={classes.root}>
      <AppBar style={{
        width:"100%",
        borderRadius:"3em 3em 0  0",
        color:green[900],
        fontWeight:"500",
        backgroundColor:"rgba(0,0,0,.3)",
        overflow:"hidden"
      }} position="static">
        <LabelWrapper color={green[700]}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab style={{fontWeight:"inherit",fontSize:"1em",letterSpacing:".15em"}} label="Comment" {...a11yProps(0)} />
          <Tab style={{fontWeight:"inherit",fontSize:"1em",letterSpacing:".15em"}} label="Book Now" {...a11yProps(1)} />
        </Tabs>
        </LabelWrapper>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel style={{
          backgroundColor:"rgba(0,0,0,.4)",
          width:"100%",
          height:"100%"
        }} value={value} index={0} dir={theme.direction}>
          <CommentList {...props} />
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <BookForm/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}


export default TabComponent