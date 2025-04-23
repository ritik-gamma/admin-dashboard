import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const tableFiled = [
  "ID",
  "Name",
  "Sales $",
  "Region",
  "Last Activity",
];


const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
  tableContainer: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8, 
    overflow: "hidden",
  },
  tableHeading: {
    flexDirection: "row",
    backgroundColor: "#5D5FEF",
    borderRadius: 8, 
    padding: 10,
  },
  tableHeadingText: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
    fontSize: 12,
    color: "#222",
  },
});




const Sales_Pdf_Document = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Sales Leaderboard</Text>
          <View style={styles.tableHeading}>
            {tableFiled.map((item, index) => (
              <Text key={index} style={styles.tableHeadingText}>
                {item}
              </Text>
            ))}
          </View>
          <View style={styles.tableContainer}>
          {data.map((row) => (
            <View key={row.id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{row.id}</Text>
              <Text style={styles.tableCell}>{row.name}</Text>
              <Text style={styles.tableCell}>{row.sales}</Text>
              <Text style={styles.tableCell}>{row.region}</Text>
              <Text style={styles.tableCell}>{row.lastActivity}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};



export default Sales_Pdf_Document;
