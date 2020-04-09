import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import MeetingRoomTwoToneIcon from '@material-ui/icons/MeetingRoomTwoTone';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import  {green} from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      fontSize:"1.5em"
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Navbar = function({history,handleDialog,user,...props}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isLoggedIn = user.isAuthenticated

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  
  const closeMenu = (url) => {
    handleMenuClose()
    history.push(url)
  }
  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => (closeMenu("/signup"))}>
        <IconButton aria-label="sign up" color="inherit">
          <Badge>
            <PersonAddTwoToneIcon/> 
          </Badge>
        </IconButton>
        <p>Sign Up</p>
      </MenuItem>
      <MenuItem onClick={()=> (closeMenu("/login"))}>
        <IconButton aria-label="Login" color="inherit">
          <Badge>
            <MeetingRoomTwoToneIcon/>
          </Badge>
        </IconButton>
        <p>Login</p>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = isLoggedIn ?(
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
          <MenuItem onClick={()=> (closeMenu(`/user/${user.user.id}`))}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
              <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleDialog} >
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          >
          <ExitToAppTwoToneIcon />
        </IconButton>
        <p>Log-Out</p>
      </MenuItem>
    </Menu>)
  :(<Menu
  anchorEl={mobileMoreAnchorEl}
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  id={mobileMenuId}
  keepMounted
  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  open={isMobileMenuOpen}
  onClose={handleMobileMenuClose}
>
    <MenuItem onClick={()=> (closeMenu("/login"))}>
    <IconButton
      aria-label="account of current user"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
    >
        <MeetingRoomTwoToneIcon/>
    </IconButton>
    <p>Login</p>
  </MenuItem>
  <MenuItem onClick={()=> (closeMenu("/signup"))}>
    <IconButton
      aria-label="account of current user"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
      >
      <PersonAddTwoToneIcon/> 
    </IconButton>
    <p>Sign Up</p>
  </MenuItem>
</Menu>)

  return (
    <div className={classes.grow}>
      <AppBar elevation={2} style={{backgroundColor:"black",color:"white"}} position="static">
        <Toolbar >
          <Typography className={classes.title} variant="h6" noWrap>
            YelpCamp
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>{
            user.isAuthenticated &&
            <IconButton onClick={handleDialog} aria-label="show 4 new mails" color="inherit">
              <ExitToAppTwoToneIcon />
            </IconButton>
          }
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={isLoggedIn ? ()=> (history.push(`/user/${user.user.id}`)) : handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}


export default Navbar