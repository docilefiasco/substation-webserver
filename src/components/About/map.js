import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { IoLocationOutline } from "react-icons/io5";

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import Image from "react-bootstrap/Image";
import Papa from "papaparse";


function Map() {
   const [data, setData] = useState({});
   Papa.parse(
     "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSqcTXwKmnJMuG1742iERdwuMD8Ri-Bz8okCjZbM9tKU7w3PJWYZmofpZ-pP8HgmWsw-NM4q84xWSF/pub?gid=2023049888&single=true&output=csv",
     {
       download: true,
       header: true,
       complete: (results) => {
         setData(results.data);
       },
     }
   );
   console.log(data);

   const substation = Array.from(data);

  return (
    <div>
      <Container fluid className="map-section">
        <Particle />

        <h3>Map of NIT DURGAPUR</h3>
        <h4>positions of substations</h4>
        <img className="image" src={require("./mapimage.jpeg")} />

        <a href="./station1">
          <IoLocationOutline className="marker1" />
        </a>

        <a href="./station2">
          <IoLocationOutline className="marker2" />
        </a>
        <a href="./station3">
          <IoLocationOutline className="marker3" />
        </a>
        <a href="./station1">
          <IoLocationOutline className="marker1" />
        </a>
        <a href="./station4">
          <IoLocationOutline className="marker4" />
        </a>
        <a href="./station1">
          <IoLocationOutline className="marker5" />
        </a>
        <a href="./station1">
          <IoLocationOutline className="marker6" />
        </a>
        <a href="./station1">
          <IoLocationOutline className="marker7" />
        </a>
        <a href="./station1">
          <IoLocationOutline className="marker8" />
        </a>
        <a href="./station1">
          <IoLocationOutline className="marker9" />
        </a>
        <a href="./station2">
          <IoLocationOutline className="marker10" />
        </a>
      </Container>
    </div>
  );
}

export default Map;
