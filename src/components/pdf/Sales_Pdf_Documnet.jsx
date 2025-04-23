import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    borderWidth: 2,
    borderColor: "#333",
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
  tableHeading: {
    flexDirection: "row",
    border: "1px solid black",
    backgroundColor: "#5D5FEF",
    paddingVertical: 8,
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: "row",
    border: "1px solid black",
    paddingVertical: 8,
    marginBottom: 8,
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
    fontSize: 12,
    color: "#222",
  },
  
});

const tableFiled = [
  "ID",
  "Name",
  "Sales $",
  "Region",
  "Last Activity",
];

const Sales_Pdf_Document = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Sales Leaderboard</Text>

        <View style={styles.tableHeading}>
          {tableFiled.map((item, index) => (
            <Text key={index} style={styles.tableCell}>
              {item}
            </Text>
          ))}
        </View>

        {data.map((row) => (
          <View key={row.id} style={styles.tableRow}>
            <Text style={styles.tableCell}>{row.id}</Text>
            <Text style={styles.tableCell}>{row.name}</Text>
            <Text style={styles.tableCell}>{row.sales}</Text>
            <Text style={styles.tableCell}>{row.region}</Text>
            <Text style={styles.tableCell}>{row.lastActivity}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default Sales_Pdf_Document;
