import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Collapse } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { menus } from "./_menu";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    height: "100%" ,
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  background-color: #e5e5e5;
  color: #fcfcfc;
  &.active {
    && {
      background-color: #e5e5e5;
    }
  }
`;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Sidebar = () => {
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const sideBarToggle = useSelector(
    (state) => state.sidebarConfigure.sideBarEnable
  );
  const handleSubMenuToggle = (index) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <Header
        open={open}
        handleDrawerOpen={handleDrawerClose}
        drawerWidth={drawerWidth}
      /> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#2f2d2dcc",
            color: "#FCFCFC", // Set text color to white
          },
        }}
        variant="persistent"
        anchor="left"
        open={sideBarToggle}
      >
        <DrawerHeader sx={{ display: "flex", justifyContent: "center" }}>
          {/* Icon rakhne */}
          <div>IOcon Rakha </div>
        </DrawerHeader>
        <List style={{ height: "100%" }}>
          {menus.map((menu, index) => {
            return (
              <React.Fragment key={menu.name + "-" + index}>
                <StyledNavLink to={menu.path}>
                  <ListItemButton onClick={() => handleSubMenuToggle(index)}>
                    <ListItemIcon>{menu.icon}</ListItemIcon>
                    <ListItemText>{menu.name}</ListItemText>
                    {menu.subMenus.length > 0 ? (
                      subMenuOpen[index] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : null}
                  </ListItemButton>
                </StyledNavLink>
                {menu.subMenus.length > 0 && (
                  <Collapse
                    in={subMenuOpen[index]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {menu.subMenus.map((subMenu, subIndex) => {
                        return (
                          <StyledNavLink
                            key={subMenu.name + "-" + subIndex}
                            to={subMenu.path}
                          >
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon>{subMenu.icon}</ListItemIcon>
                              <ListItemText primary={subMenu.name} />
                            </ListItemButton>
                          </StyledNavLink>
                        );
                      })}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            );
          })}
        </List>
        <Divider style={{ backgroundColor: "#fcfcfc" }} />
        <p>logout btn ata rakha</p>
      </Drawer>
      <Main open={sideBarToggle}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
};
export default Sidebar;
