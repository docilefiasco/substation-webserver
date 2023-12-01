import React, { useEffect, useState, Fragment } from "react";
import Papa from "papaparse";
import firebase from '../../firebase';

import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Table from "react-bootstrap/Table";

function About2() {
 const [data, setData] = useState({});
 Papa.parse(
   "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSqcTXwKmnJMuG1742iERdwuMD8Ri-Bz8okCjZbM9tKU7w3PJWYZmofpZ-pP8HgmWsw-NM4q84xWSF/pub?gid=2004499149&single=true&output=csv",
   {
     download: true,
     header: true,
     complete: (results) => {
       setData(results.data);
     },
   }
 );
  
 const movies = Array.from(data);
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Substation <strong className="purple">3</strong>
            </h1>
          </Col>
        </Row>

        <Table striped bordered hover variant="dark">
        
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Time</th>
              <th>Humidity</th>
              <th>Temperature</th>
              <th>Health</th>
              
            </tr>
          </thead>
          <tbody>
          {movies.map((data) => (
            <tr key={data.SNo}>
              <td>{data.SNo}</td>
              <td>{data.Time}</td>
              <td>{data.Humidity}</td>
              <td>{data.Temperature}</td>
              <td>{data.Health}</td>
            </tr>
            
          ))}
            
          </tbody>
        </Table>
      
       
      </Container>
    </Container>
  );
}

export default About2;
