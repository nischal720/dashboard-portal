import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../redux/features/appLayout/applayoutslice";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: "white",
}));

export default function Header() {
  const open = useSelector((state) => state.sidebarConfigure.sideBarEnable);
  const dispatch = useDispatch();
  const handleDrawer = () => {
    dispatch(toggleSideBar());
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" flexDirection="row" alignItems="center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawer()}
            edge="start"
            sx={{ ...(open && { display: "block" }) }}
          >
            <MenuIcon style={{ color: "#000" }} />
          </IconButton>
          <div>
            <Typography variant="h6" color={"#000"}>
              Header content aata
            </Typography>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
