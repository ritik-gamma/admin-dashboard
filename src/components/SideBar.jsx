import { Box, Button, Stack, Typography } from "@mui/material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

const SidebarNav = [
  { id: 1, icon: <SignalCellularAltIcon />, title: "Leaderboard", path: "/leaderboard" },
  { id: 2, icon: <ShoppingCartIcon />, title: "Order", path: "/order" },
  { id: 4, icon: <LocalMallIcon />, title: "Product", path: "/product" },
  { id: 5, icon: <ShowChartIcon />, title: "Sales Report", path: "/sales-report" },
  { id: 6, icon: <MessageIcon />, title: "Message", path: "/message" },
  { id: 7, icon: <SettingsIcon />, title: "Setting", path: "/setting" },
  { id: 8, icon: <ExitToAppIcon />, title: "Sign out", path: "/signout" },
];


const SideBar = () => {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        width: 300,
        height: "100vh",
        bgcolor: "white",
        justifyContent:"space-between",
        position:"sticky",
        top:0
      }}
    >
      <Box px={2} py={3}>
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
          onClick={() => navigate("/")}
          sx={{cursor:"pointer"}}
        >
          <img src="/logo.png" alt="logo" height={30} />
          <Typography variant="h5" fontWeight="bold">
            Dabang
          </Typography>
        </Stack>
      </Box>

      <Stack alignItems="start" pt={2} spacing={2} flexGrow={1} px={2}>
        <Button
          variant="contained"
          startIcon={<img src="/logo.png" alt="dashboard" height={24} />}
          sx={{
            bgcolor: "#5D5FEF",
            borderRadius: "16px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "white",
            padding: "10px 16px",
            width: "100%",
            justifyContent: "flex-start",
          }}
        >
          Dashboard
        </Button>
        {SidebarNav.map((item) => (
          <Stack
            direction="row"
            gap={2}
            key={item.id}
            alignItems="center"
            color="#737791"
            px="16px"
            py="8px"
            sx={{
              cursor: "pointer",
              "&:hover": { backgroundColor: "#F0F2F5", borderRadius: "8px" },
            }}
          >
            {item.icon}
            <Button fontSize="16px" color="#737791" onClick={() => navigate(item.path)}>{item.title}</Button>
          </Stack>
        ))}
      </Stack>

      <Box p={2} display="flex" justifyContent="center">
        <img
          src="/pro.png"
          alt="dabang pro"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default SideBar;
