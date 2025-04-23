import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme, value }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.grey[200],
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: 5,
    backgroundColor: value > 50 ? "#4caf50" : "#f44336",
  },
}));

function createData(id, name, popularity, sales) {
  return { id, name, popularity, sales };
}

const rows = [
  createData(1, "Home", 60, 24),
  createData(2, "Disney", 90, 37),
  createData(3, "Bathroom", 30, 24),
  createData(4, "Apple", 75, 67),
];

const Product_Chart = () => {
  const maxSales = Math.max(...rows.map((row) => row.sales));

  return (
    <TableContainer sx={{ p: 1 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Popularity</TableCell>
            <TableCell align="right">Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <BorderLinearProgress
                  variant="determinate"
                  value={(row.sales / maxSales) * 100}
                  valueLabelDisplay="auto"
                  valueNumeric={row.sales}
                />
              </TableCell>
              <TableCell align="right">{row.sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Product_Chart;
