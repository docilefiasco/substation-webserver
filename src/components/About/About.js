import React, { useEffect, useState, Fragment } from "react";
import Papa from "papaparse";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Table from "react-bootstrap/Table";

function About() {
 const [data, setData] = useState({});
 Papa.parse(
   "https://docs.google.com/spreadsheets/d/13yfha5-pVdMJROmOqxyJoo2rEEgZokmglKexPEoUO0o/pub?output=csv",
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
              Substation <strong className="purple">1</strong>
            </h1>
          </Col>
        </Row>

        <Table striped bordered hover variant="dark">
        
          <thead>
            <tr>
              <th>Time</th>
              <th>Humidity</th>
              <th>Temperature</th>
              
            </tr>
          </thead>
          <tbody>
          {movies.map((data) => (
            <tr key={data.Substation}>
              <td>{data.Time}</td>
              <td>{data.Humidity}</td>
              <td>{data.Temperature}</td>
            </tr>
            
          ))}
            
          </tbody>
        </Table>
      
        {/* <ul>
          {movies.map((data) => (
            <li key={data.Time}>
              <li>Time -- {data.Time}</li>
              <li>Humidity - {data.Humidity}</li>
              <li>Temperature - {data.Temperature}</li>
            </li>
            
          ))}
        </ul> */}
      </Container>
    </Container>
  );
}

export default About;
