import { Box, Stack, Typography } from "@mui/material";
import Product_Chart from "../charts/Product_Chart";
import Geo_Chart from "../charts/Geo_Chart";
import Volume_Chart from "../charts/Volume_Chart";

const Container_three = () => {
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
          Top Product
        </Typography>
        <Product_Chart />
      </Box>

      <Box
        width={{ xs: "100%", sm: "26%" }}
        bgcolor="white"
        p={1}
        borderRadius={2}
        display="flex"
        flexDirection="column"
      >
        <Typography variant="small" fontWeight={700} p={2}>
          Sales Map by Country
        </Typography>
        <Geo_Chart />
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
          Volume vs Service
        </Typography>
        <Volume_Chart />
      </Box>
    </Stack>
  );
};

export default Container_three;
