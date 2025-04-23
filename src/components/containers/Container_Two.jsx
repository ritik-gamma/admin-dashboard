import { Box, Stack, Typography } from "@mui/material";
import Target_Chart from "../charts/Target_Chart";
import Revenue_Chart from "../charts/Revenue_Chart";
import Customer_Chart from "../charts/Customer_Chart";

const Container_two = () => {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} width="100%" p={1} gap={2}>
      <Box
        width={{ xs: "100%", sm: "40%" }}
        bgcolor="white"
        p={1}
        borderRadius={2}
        display="flex"
        flexDirection="column"
      >
        <Typography variant="small" fontWeight={700} p={1}>
          Total Revenue
        </Typography>
        <Revenue_Chart />
      </Box>

      <Box
        width={{ xs: "100%", sm: "26%" }}
        bgcolor="white"
        p={1}
        borderRadius={2}
        display="flex"
        flexDirection="column"
      >
        <Typography variant="small" fontWeight={700} p={1}>
          Customer Satisfaction
        </Typography>
        <Customer_Chart />
      </Box>

      <Box
        width={{ xs: "100%", sm: "26%" }}
        bgcolor="white"
        p={1}
        borderRadius={2}
        display="flex"
        flexDirection="column"
      >
        <Typography variant="small" fontWeight={700} p={1}>
          Target vs Reality
        </Typography>
        <Target_Chart />

        <Stack
          width="100%"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          p={1}
        >
          <Box component="img" src="/reality.png" width={24} height={24} />
          <Stack direction="column">
            <Typography fontSize={10} fontWeight={700}>
              Reality Sales
            </Typography>
            <Typography fontSize={10}>Global</Typography>
          </Stack>
          <Typography color="green">8,823</Typography>
        </Stack>

        <Stack
          width="100%"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          p={1}
        >
          <Box component="img" src="/target.png" width={24} height={24} />
          <Stack direction="column">
            <Typography fontSize={10} fontWeight={700}>
              Target Sales
            </Typography>
            <Typography fontSize={10}>Global</Typography>
          </Stack>
          <Typography color="orange">12,122</Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Container_two;
