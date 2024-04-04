import React, { useEffect, useState, Fragment } from "react";
import Papa from "papaparse";
import firebase from "../../firebase";

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
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSqcTXwKmnJMuG1742iERdwuMD8Ri-Bz8okCjZbM9tKU7w3PJWYZmofpZ-pP8HgmWsw-NM4q84xWSF/pub?gid=122582593&single=true&output=csv",
    {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    }
  );

  const substation = Array.from(data);
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
              Substation <strong className="purple">2</strong>
            </h1>
          </Col>
        </Row>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>SL.No.</th>
              <th>Time</th>
              <th>Hydrogen</th>
              <th>Oxygen</th>
              <th>Nitrogen</th>
              <th>Methane</th>
              <th>CO</th>
              <th>CO2</th>
              <th>Ethylene</th>
              <th>Acethylene</th>
              <th>DBDS</th>
              <th>Power Factor</th>
              <th>Interfacial V</th>
              <th>Dielectric Rigidity</th>
              <th>Water Content</th>
              <th>Health Index</th>
              <th>Life Expectancy</th>
              
            </tr>
          </thead>
          <tbody>
            {substation.map((data) => (
              <tr key={data.SL}>
                <td>{data.SL}</td>
                <td>{data.Time}</td>
                <td>{data.Hydrogen}</td>
                <td>{data.Oxygen}</td>
                <td>{data.Methane}</td>
                <td>{data.CO}</td>
                <td>{data.CO2}</td>
                <td>{data.Ethylene}</td>
                <td>{data.Ethane}</td>
                <td>{data.Acethylene}</td>
                <td>{data.DBDS}</td>
                <td>{data.Power_Factor}</td>
                <td>{data.Interfacial_V}</td>
                <td>{data.Dielectric_rigidity}</td>
                <td>{data.Water_content}</td>
                <td>{data.Health_index}</td>
                <td>{data.Life_expectation}</td>
                
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}

export default About2;
