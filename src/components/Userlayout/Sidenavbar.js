import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import logo from '../logo.png'
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const drawerWidth = "116px";

function ResponsiveDrawer(props) {
  const [auth, setAuth] = React.useState(true);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
    {/* <img src={logo} className="logo" alt="" /><p style={{display:'inline-block', fontSize:'20px'}}> Cyethack Solutions</p> */}
    
      <Toolbar />
      <Divider />
      <List>
      <ListItem>
           
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon sx={{marginLeft:"13px"}} />
              </ListItemIcon>
            </ListItemButton>
          
            
          </ListItem>
          <ListItem  >
            <ListItemButton>
              <ListItemIcon>
                <GroupsOutlinedIcon sx={{marginLeft:"13px"}} />
              </ListItemIcon>
              {/* <div><ListItemText>Team </ListItemText></div> */}

            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <SummarizeOutlinedIcon sx={{marginLeft:"13px"}} />
              </ListItemIcon>
              
              {/* <span>Report </span> */}

            </ListItemButton>
          </ListItem>

          <ListItem  >
            <ListItemButton>
              <ListItemIcon>
                <HighlightAltIcon sx={{marginLeft:"13px"}}/>
              </ListItemIcon>
              {/* <ListItemText>Target </ListItemText> */}

            </ListItemButton>
          </ListItem>

          <ListItem  >
            <ListItemButton>
              <ListItemIcon>
                <SettingsOutlinedIcon sx={{marginLeft:"13px"}} />
              </ListItemIcon>
              
              {/* <ListItemText> Setting </ListItemText> */}

            </ListItemButton>
            
          </ListItem>
      </List>

    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <AppBar
        position="fixed"
       
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor:"#fff", }}
      >
        <Toolbar>
          <img src={logo} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{color:'#000', display: { xs: 'none', sm: 'block' } }}
          >
            Cyethack
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <FormControl>
        <InputLabel sx={{color:'#000', }}>VMDR</InputLabel>
        <Select
        sx={{width:'15vh',  height:'45px',backgroundColor:"#D9D9D940",border:'0px solid rgba(0, 0, 0, 0.25)', borderRadius:'5px', marginRight:'20px'}}
          labelId="demo-simple-select-label"
        //   id="demo-simple-select"
        //   value={age}
          label="Age"
        //   onChange={handleChange}
        >
          <MenuItem value={10}>Asset 1</MenuItem>
          <MenuItem value={20}>Asset 2</MenuItem>
          <MenuItem value={30}>Asset 3</MenuItem>
        </Select>
      </FormControl>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="white"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon sx={{color:"#000"}} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{color:"#000"}} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;