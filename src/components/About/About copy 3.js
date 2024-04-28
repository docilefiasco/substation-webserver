// Filename - App.js

import React, { useState } from "react";
import Papa from "papaparse";
//import "./App.css";
import { useCSVReader, formatFileSize } from "react-papaparse";
import Table from "react-bootstrap/Table";
// Allowed extensions for input file

function About3() {
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        setParsedData(results.data);
        setTableRows(rowsArray[0]);
        setValues(valuesArray);
      },
    });
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default About3;
