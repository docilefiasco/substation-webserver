import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { IoLocationOutline } from "react-icons/io5";

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import Image from "react-bootstrap/Image";



function Map() {
  

  return (
    <div>
      <Container fluid className="map-section">
        <Particle />

        <h3>Map of NIT DURGAPUR</h3>
        <h4>positions of substations</h4>
        <img className="image" src={require("./mapimage.png")} />
        <a href="./about">
          <IoLocationOutline className="marker1" />
        </a>

        <a href="./about1">
          <IoLocationOutline className="marker2" />
        </a>
        <a href="./about2">
          <IoLocationOutline className="marker3" />
        </a>
      </Container>
    </div>
  );
}

export default Map;
