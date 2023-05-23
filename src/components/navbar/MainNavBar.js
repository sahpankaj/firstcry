import { ThemeProvider } from "@emotion/react";
import { Box, Button, List, Menu, unstable_createMuiStrictModeTheme } from "@mui/material";
import React, { useState } from "react";
import club_logo from "../../images/club_logo.png"
import "../../styles/MainNavBar.css"
const theme = unstable_createMuiStrictModeTheme({});
const MyMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    if (e.currentTarget.localName !== "ul") {
     

      
      const menu = document.getElementById("simple-menu").children[2];
      const menuBoundary = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return;
      }
    
  }
    setOpen(false);
  };

  theme.props = {
    MuiList: {
      onMouseLeave: (e) => {
        handleClose(e);
      }
    }
  };
  return (
    <Box sx={{backgroundColor:"gold", color:"black", display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", padding:"9px 0px", boxShadow:"1px 2px 5px gray", zIndex:1, }}>
      <ThemeProvider theme={theme}>
     
        <Button
          id="menubutton1"
          className="menubuttons"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301,
            color:"#575757",
            fontWeight:"600"
           }}
        >
         ALL CATEGORIES
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
        <Button
          id="menubutton1"
          className="menubuttons"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301 , color:"#575757",fontWeight:"600"}}
        >
        BOY FASHION
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
        <Button
          id="menubutton1"
          className="menubuttons"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301 ,color:"#575757",fontWeight:"600"}}
        >
         GIRL FASHION
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
        <Button
          id="menubutton1"
          className="menubuttons"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301,color:"#575757",fontWeight:"600" }}
        >
         FOOTWEAR
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
        <Button
          id="menubutton1"
          className="menubuttons"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301,color:"#575757",fontWeight:"600" }}
        >
         TOYS
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
        <Button
          id="menubutton1"
          className="menubuttons"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301 ,color:"#575757",fontWeight:"600"}}
        >
         DIAPEARING
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
        <Button
          id="menubutton1"
          className="menubuttons"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301 ,color:"#575757",fontWeight:"600"}}
        >
        GEAR
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
        <Button
          id="menubutton1"
          className="menubuttons"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301 ,color:"#575757",fontWeight:"600"}}
        >
         FEEDING
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
        <Button
          id="menubutton1"
          className="menubuttons"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301 ,color:"#575757",fontWeight:"600"}}
        >
         BATH
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
        <Button
          id="menubutton1"
          className="menubuttons"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301 ,color:"#575757",fontWeight:"600"}}
        >
         NURSERY
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
        <Button
          id="menubutton1"
          className="menubuttons"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301,color:"#575757",fontWeight:"600" }}
        >
         MOMS
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
        <Button
          id="menubutton1"
          className="menubuttons"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301,color:"#575757",fontWeight:"600" }}
        >
         HEALTH
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
        <Button
          id="menubutton1"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301,color:"#575757", fontWeight:"600" }}
        >
         BOUTIUES
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
        <Button
          id="menubutton1"
          className="menubuttons"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301 }}
        >
         <img src= {club_logo} alt="club logo"/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
      

      </ThemeProvider>
    </Box>
  );
};

export default MyMenu;
