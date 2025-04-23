import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import SideBar from "./SideBar"
import Container_One from "./containers/Container_One"
import Container_two from "./containers/Container_Two"
import Container_three from "./containers/Container_Three"
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const excludePath = ["/leaderboard", "/order", "/product", "/sales-report", "/message", "/setting", "/sign-out"]

  const path = excludePath.includes(location.pathname)

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": { width: 300, boxSizing: "border-box" },
          }}
        >
          <SideBar />
        </Drawer>
      ) : (
        <SideBar />
      )}
      <Box
        component="main"
        sx={{ flexGrow: 1, paddingX: 1, overflowX: "hidden" }}
      >
        <Navbar onDrawerToggle={handleDrawerToggle} />
        <Outlet /> 
        {!path && (
          <>
        <Container_One />
        <Container_two />
        <Container_three />
          </>
        )}
      </Box>
    </Box>
  );
}

export default Dashboard;
