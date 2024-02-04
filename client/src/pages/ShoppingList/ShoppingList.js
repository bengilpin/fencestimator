import "./ShoppingList.scss";
import * as React from "react";
import { useTable } from "react-table";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { CSVLink } from "react-csv";

function ShoppingList({ data, measurements }) {
  const pdfRef = useRef();

  // Calculate totalPrice first
  const totalPrice = data.reduce((total, { quantity, price }) => {
    // Check if price is null or undefined before parsing
    if (price) {
      const parsedPrice = parseFloat(price.replace("$", ""));
      return total + quantity * parsedPrice;
    }
    return total;
  }, 0);

  const memoData = React.useMemo(() => {
    // Adding measurements and total price to the data array
    const newData = [...data];
    newData.push({
      item_name: `${measurements.height} ft in height and ${measurements.length} ft in length. ${measurements.sections} sections that should be ${measurements.distanceApart} ft apart.`,
      dimensions: "",
      quantity: "",
      price: `$${totalPrice.toFixed(2)}`,
    });
    return newData;
  }, [data, measurements, totalPrice]); // Include totalPrice in dependency array

  const columns = React.useMemo(
    () => [
      { id: "name", Header: "Item Name", accessor: "item_name" },
      { id: "dimensions", Header: "Dimensions", accessor: "dimensions" },
      { id: "quantity", Header: "Quantity", accessor: "quantity" },
      { id: "price", Header: "Price Per Unit", accessor: "price" },
    ],
    []
  );

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );

      pdf.text(`Total Price: $${totalPrice.toFixed(2)}`, 10, pdfHeight - 10);
      pdf.save("materialslist.pdf");
    });
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: memoData });

  return (
    <div className="shopping-list">
      <div ref={pdfRef} className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="buttons">
        <button onClick={downloadPDF} className="pdf-export">
          Download PDF
        </button>
        <CSVLink
          data={memoData}
          headers={columns.map((column) => ({
            label: column.Header,
            key: column.accessor,
          }))}
          filename="shopping_list.csv"
        >
          Download CSV
        </CSVLink>
      </div>
    </div>
  );
}

export default ShoppingList;
