// import React, { useEffect, useState, Fragment } from "react";
// import Papa from "papaparse";
// import firebase from '../../firebase';

// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Github from "./Github";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";
// import Table from "react-bootstrap/Table";
// import BootstrapTable from "react-bootstrap-table-next";
// import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
// import paginationFactory from "react-bootstrap-table2-paginator";
// function About() {
//  const [data, setData] = useState({});
//  Papa.parse(
//    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSqcTXwKmnJMuG1742iERdwuMD8Ri-Bz8okCjZbM9tKU7w3PJWYZmofpZ-pP8HgmWsw-NM4q84xWSF/pub?gid=2004499149&single=true&output=csv",
//    {
//      download: true,
//      header: true,
//      complete: (results) => {
//        setData(results.data);
//      },
//    }
//  );
  
//  const movies = Array.from(data);
//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col
//             md={7}
//             style={{
//               justifyContent: "center",
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
//               Substation <strong className="purple">1</strong>
//             </h1>
//           </Col>
//         </Row>

//         <Table striped bordered hover variant="dark">
        
//           <thead>
//             <tr>
//               <th>Time</th>
//               <th>Humidity</th>
//               <th>Temperature</th>
              
//             </tr>
//           </thead>
//           <tbody>
//           {movies.map((data) => (
//             <tr key={data.Substation}>
//               <td>{data.Time}</td>
//               <td>{data.Humidity}</td>
//               <td>{data.Temperature}</td>
//             </tr>
            
//           ))}
            
//           </tbody>
//         </Table>
      
       
//       </Container>
//     </Container>
//   );
// }




// export default About;

import React from "react";
import { useState } from "react";
import { MDBDataTable, MDBNavLink } from "mdbreact";



const About = () => {
 
const data = {
  columns: [
    {
      label: "Substation",
      field: "substation",
      sort: "asc",
      width: 150,
    },
    {
      label: "Time",
      field: "time",
      sort: "asc",
      width: 270,
    },
    {
      label: "Temperature",
      field: "temperature",
      sort: "asc",
      width: 200,
    },
    {
      label: "Humidity",
      field: "humidity",
      sort: "asc",
      width: 100,
    },
    {
      label: "Health",
      field: "health",
      sort: "asc",
      width: 150,
    },
  ],
  rows: [
    {
      substation: "1",
      time: "1:20pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:48pm",
      temperature: "46",
      humidity: "26",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:47pm",
      temperature: "47",
      humidity: "27",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:46pm",
      temperature: "48",
      humidity: "28",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:45pm",
      temperature: "49",
      humidity: "29",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:44pm",
      temperature: "50",
      humidity: "30",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:43pm",
      temperature: "51",
      humidity: "31",
      health: "Good",
    },

    {
      substation: "1",
      time: "1:42pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:41pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:40pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:39pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:38pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:37pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:36pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:35pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:34pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:33pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:32pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:31pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:30pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:29pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:28pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:27pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:26pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:25pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:24pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:23pm",
      temperature: "45",
      humidity: "25",
      health: "Good",
    },
    {
      substation: "1",
      time: "1:22pm",
      temperature: "100",
      humidity: "96",
      health: "Bad",
    },

  ],
};

  return (
    <MDBDataTable
      className="table"
      noBottomColumns={true}
      bordered
      small
      data={data}
    />
  );
};

export default About;

