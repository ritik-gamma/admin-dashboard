import { Box, Button, Stack, Typography } from "@mui/material";
import Visitor_Chart from "../charts/Visitor_Chart";
import Sales_Card from "../Sales_Card";

const Container_One = () => {
  return (
    <Box sx={{ width: "100%" }} p={1}>
      <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
        <Stack
          direction="column"
          p={1}
          borderRadius={2}
          bgcolor="white"
          width={{ xs: "auto", sm: "55%" }}
          justifyContent="space-around"
        >
          <Stack direction="row" justifyContent="space-between" mb={2}>
            <Stack direction="column">
              <Typography fontSize="h6" fontWeight="bold">
                Today Sales
              </Typography>
              <Typography fontSize="subtitle2" color="textSecondary">
                Sales Summary
              </Typography>
            </Stack>
            <Button variant="outlined">Export</Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Sales_Card />
          </Stack>
        </Stack>

        <Box
          width={{ xs: "auto", sm: "40%" }}
          bgcolor="white"
          borderRadius={2}
          height="100%"
        >
          <Typography fontSize={20} fontWeight={700} p={1}>
            Vistor Insight
          </Typography>

          <Visitor_Chart />
        </Box>
      </Stack>
    </Box>
  );
};

export default Container_One;
