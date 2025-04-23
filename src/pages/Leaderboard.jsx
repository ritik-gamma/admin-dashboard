import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box,
  Checkbox,
} from "@mui/material";
import { FileDownload } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Sales_Pdf_Documnet from "../components/pdf/Sales_Pdf_Documnet";

const salesData = [
  {
    id: 1,
    name: "Alice Smith",
    sales: 15000,
    region: "North",
    lastActivity: "2025-04-20",
  },
  {
    id: 2,
    name: "Bob Johnson",
    sales: 22000,
    region: "East",
    lastActivity: "2025-04-21",
  },
  {
    id: 3,
    name: "Charlie Brown",
    sales: 18500,
    region: "West",
    lastActivity: "2025-04-19",
  },
  {
    id: 4,
    name: "Diana Lee",
    sales: 25000,
    region: "South",
    lastActivity: "2025-04-18",
  },
  {
    id: 5,
    name: "Eve Williams",
    sales: 12000,
    region: "Central",
    lastActivity: "2025-04-17",
  },
  {
    id: 6,
    name: "Franklin Harris",
    sales: 17500,
    region: "North",
    lastActivity: "2025-04-16",
  },
  {
    id: 7,
    name: "Grace Wilson",
    sales: 19500,
    region: "East",
    lastActivity: "2025-04-15",
  },
  {
    id: 8,
    name: "Henry Taylor",
    sales: 23000,
    region: "West",
    lastActivity: "2025-04-14",
  },
  {
    id: 9,
    name: "Ivy Martin",
    sales: 14000,
    region: "South",
    lastActivity: "2025-04-13",
  },
  {
    id: 10,
    name: "Jack White",
    sales: 21000,
    region: "Central",
    lastActivity: "2025-04-12",
  },
];

const StyledTableContainer = styled(Paper)(() => ({
  borderRadius: 8,
  boxShadow: 3,
}));

const SuccessButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: green[500],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

const Leaderboard = () => {
  const [selected, setSelected] = useState([]);
  console.log("selected", selected);

  const handleClick = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <Box sx={{ width: "100%", margin: "auto", mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h5">Sales Leaderboard</Typography>
        <PDFDownloadLink
          document={
            <Sales_Pdf_Documnet
              data={
                selected.length > 0
                  ? salesData.filter((row) => selected.includes(row.id))
                  : salesData
              }
            />
          }
          fileName="sales-leaderboard.pdf"
        >
          {({ loading }) =>
            loading ? (
              "Generating PDF"
            ) : (
              <SuccessButton variant="contained" startIcon={<FileDownload />}>
                Export
              </SuccessButton>
            )
          }
        </PDFDownloadLink>
      </Box>
      <StyledTableContainer
        sx={{
          borderRadius: "16px",
          boxShadow: 3,
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead sx={{ bgcolor: "#5D5FEF", color: "white" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: 700, fontSize: 20 }}>
                Select
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 700, fontSize: 20 }}>
                ID
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 700, fontSize: 20 }}>
                Name
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 700, fontSize: 20 }}>
                Sales ($)
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 700, fontSize: 20 }}>
                Region
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 700, fontSize: 20 }}>
                Last Activity
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salesData.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    onChange={() => handleClick(row.id)}
                    checked={selected.includes(row.id)}
                  />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.sales}</TableCell>
                <TableCell>{row.region}</TableCell>
                <TableCell>{row.lastActivity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Box>
  );
};

export default Leaderboard;
