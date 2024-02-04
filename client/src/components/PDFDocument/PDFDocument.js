import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const PDFDocument = ({ data }) => (
  <Document>
    <Page size="A4">
      <View style={styles.table}>
        {/* Render table headers */}
        <View style={styles.row}>
          <Text style={styles.header}>Item Name</Text>
          <Text style={styles.header}>Dimensions</Text>
          <Text style={styles.header}>Quantity</Text>
          <Text style={styles.header}>Price Per Unit</Text>
        </View>

        {/* Render table data */}
        {data.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.cell}>{item.item_name}</Text>
            <Text style={styles.cell}>{item.dimensions}</Text>
            <Text style={styles.cell}>{item.quantity}</Text>
            <Text style={styles.cell}>{item.price}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  row: { 
    flexDirection: 'row',
  },
  header: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 5,
    flex: 1,
  },
  cell: {
    textAlign: 'center',
    fontSize: 10,
    padding: 5,
    flex: 1,
  },
});

export default PDFDocument;