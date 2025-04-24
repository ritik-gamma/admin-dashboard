import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { pdf, } from "@react-pdf/renderer";
import Sales_Pdf_Documnet from "../components/pdf/Sales_Pdf_Documnet";
import { Builder } from "xml2js";


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

const Leaderboard = () => {
  const [selected, setSelected] = useState([]);
  const [exportOption, setExportOption] = useState("");


  const handleClick = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };


  const handelExportChange = async (e) => {
    const option = e.target.value;
    setExportOption(option);

    if (option === "PDF") {
      await ExportPDF(); 
    } else if (option === "XML") {
      ExportXML();
    }else if(option === "CSV"){
      DownloadCSV()
    }
  };


  const ExportPDF = async () => {
    const pdfData =
      selected.length > 0
        ? salesData.filter((row) => selected.includes(row.id))
        : salesData;

    const blob = await pdf(<Sales_Pdf_Documnet data={pdfData} />).toBlob();

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "sales-leaderboard.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const ExportXML = () => {
    const dataToExport =
      selected.length > 0
        ? salesData.filter((row) => selected.includes(row.id))
        : salesData;
  
    // console.log("Data to Export:", dataToExport);
  
    const builder = new Builder();
    const xmlData = builder.buildObject({ salesData: dataToExport });
  
    // console.log("Generated XML:", xmlData);
  

    const blob = new Blob([xmlData], { type: "application/xml" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "sales-data.xml";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    // console.log("XML Export Completed!");
  };

  const DownloadCSV = () => {
    const csvString = [
      ["ID", "Name", "Sales $", "Region", "Last Activity"],
      ...salesData.map(item => [
        item.id,
        item.name,
        item.sales,
        item.region,
        item.lastActivity
      ])
    ]
      .map(row => row.join(","))
      .join("\n");

    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "leaderboard.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <FormControl sx={{ width: 120 }}>
          <InputLabel id="demo-simple-select-label">Export</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Export"
            value={exportOption}
            onChange={handelExportChange}
          >
            <MenuItem value="PDF">PDF</MenuItem>
            <MenuItem value="XML">XML</MenuItem>
            <MenuItem value="CSV">CSV</MenuItem>
          </Select>
        </FormControl>
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