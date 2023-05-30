// import { Button, Grid } from "@mui/material";
// import React from "react";
// import Logo from "../../assets/logo.png";
// import { MENU_LINKS } from "../../constants/Menu";
// import MenuLink from "../MenuLink";

// const Navbar = () => {
//   return (
//     <div>
//       <Grid container direction="row" alignItems="center" spacing={3}>
//         <Grid item xs={3}>
//           <img src={Logo} alt="logo" />
//         </Grid>
//         <Grid item xs={6}>
//           <Grid spacing={2} direction="row">
//             {MENU_LINKS.map((item) => (
//               <Grid
//                 item
//                 style={{
//                   paddingTop: 0,
//                   cursor: "pointer",
//                   pointerEvents: "auto",
//                 }}
//               >
//                 <MenuLink name={item} />
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//         <Grid item xs={3}>
//           <Grid spacing={2} direction="row">
//             <Grid item style={{ paddingTop: 0 }}>
//               <Button
//                 variant="outlined"
//                 sx={{
//                   borderRadius: 50,
//                   borderColor: "#3C5671",
//                   color: "#3C5671",
//                 }}
//               >
//                 Sign In
//               </Button>
//             </Grid>
//             <Grid item style={{ paddingTop: 0 }}>
//               <Button
//                 variant="contained"
//                 sx={{
//                   borderRadius: 50,
//                   background: "#3C5671",
//                   borderColor: "#3C5671",
//                 }}
//               >
//                 Sign Up
//               </Button>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Navbar;

// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Hidden,
// } from "@mui/material";
// // import MenuIcon from "@mui/icons-material/Menu";

// const Navbar = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         {/* Logo and Title */}
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Logo & Title
//         </Typography>

//         {/* Services */}
//         <Hidden mdDown>
//           <Button color="inherit">Service 1</Button>
//           <Button color="inherit">Service 2</Button>
//           <Button color="inherit">Service 3</Button>
//           <Button color="inherit">Service 4</Button>
//         </Hidden>

//         {/* Buttons */}
//         <Button color="inherit">Button 1</Button>
//         <Button color="inherit">Button 2</Button>

//         {/* Mobile Menu */}
//         <Hidden mdUp>
//           <IconButton
//             size="large"
//             edge="end"
//             color="inherit"
//             aria-label="menu"
//             sx={{ ml: 2 }}
//           >
//             <div>fff</div>
//             {/* <MenuIcon /> */}
//           </IconButton>
//         </Hidden>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const services = ["Service 1", "Service 2", "Service 3", "Service 4"];

  const renderServices = () => {
    return (
      <List>
        {services.map((service, index) => (
          <ListItem button key={index}>
            <ListItemText primary={service} />
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Mobile Menu */}
        <Hidden mdUp>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
            <div onClick={toggleDrawer} onKeyDown={toggleDrawer}>
              {renderServices()}
            </div>
          </Drawer>
        </Hidden>
        {/* Logo and Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo & Title
        </Typography>

        {/* Services */}
        <Hidden mdDown>
          {services.map((service, index) => (
            <Button color="inherit" key={index}>
              {service}
            </Button>
          ))}
        </Hidden>

        {/* Buttons */}
        <Button color="inherit">Button 1</Button>
        <Button color="inherit">Button 2</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;