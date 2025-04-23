import {
  Avatar,
  Box,
  Stack,
  TextField,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ onDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        height: "60px",
        alignItems: "center",
        padding: "0 16px",
        backgroundColor: "white",
        justifyContent: "space-between",
        position: "sticky",
        top: "0px",
        zIndex: 1100,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      {isMobile ? (
        <IconButton
          onClick={onDrawerToggle}
          edge="start"
          sx={{ mr: 2, color: theme.palette.text.primary }}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <Typography variant="h6" color={theme.palette.primary.main}>
          Dashboard
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexGrow: 2,
          ml: isMobile ? 0 : 2,
        }}
      >
        <TextField
          type="search"
          placeholder="Search here..."
          variant="standard"
          size="small"
          sx={{
            borderRadius: "8px",
            width: isMobile ? "100%" : "100%",
            maxWidth: "500px",
            flexGrow: isMobile ? 1 : 0,
          }}
        />
      </Box>

      <Stack spacing={2} direction="row" alignItems="center">
        <Box
          sx={{
            display: isMobile ? "none" : "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography variant="subtitle2" color={theme.palette.text.secondary}>
            Eng (US)
          </Typography>
        </Box>
        <IconButton aria-label="notifications">
          <NotificationsIcon color="action" />
        </IconButton>
        <Stack direction="row" alignItems="center" gap={1}>
          <Avatar
            src="/person.png"
            alt="User Profile"
            sx={{ width: 30, height: 30 }}
          />
          <Stack direction="column" alignItems="flex-start" spacing={-0.5}>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color={theme.palette.text.primary}
            >
              Mufliq
            </Typography>
            <Typography variant="caption" color={theme.palette.text.secondary}>
              Admin
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
