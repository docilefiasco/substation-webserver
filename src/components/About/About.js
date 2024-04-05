 import React, { useEffect, useState, Fragment } from "react";
  import Papa from "papaparse";
  import "../About/style.css";
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



import { MDBDataTable, MDBNavLink } from "mdbreact";



const About = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   const fetchGoogleSheetData = async () => {
    //     const csvUrl =
    //       "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSqcTXwKmnJMuG1742iERdwuMD8Ri-Bz8okCjZbM9tKU7w3PJWYZmofpZ-pP8HgmWsw-NM4q84xWSF/pub?gid=0&single=true&output=csv"; // Replace with your Google Sheets CSV file URL
    //     const response = await fetch(csvUrl);
    //     const text = await response.text();
    //     const parsedData = Papa.parse(text, { header: true });
    //     setData(parsedData.data);
        
        
    //   };

    //   fetchGoogleSheetData();
      
    // }, []);
 
const data = {
  columns: [
    {
      label: "SL",
      field: "SL",
      sort: "asc",
      width: 150,
    },
    {
      label: "Time",
      field: "Time",
      sort: "asc",
      width: 350,
    },
    {
      label: "Hydrogen",
      field: "Hydrogen",
      sort: "asc",
      width: 150,
    },
    {
      label: "Oxygen",
      field: "Oxygen",
      sort: "asc",
      width: 100,
    },
    {
      label: "Methane",
      field: "Methane",
      sort: "asc",
      width: 100,
    },
    {
      label: "CO",
      field: "CO",
      sort: "asc",
      width: 100,
    },
    {
      label: "CO2",
      field: "CO2",
      sort: "asc",
      width: 100,
    },
    {
      label: "Ethylene",
      field: "Ethylene",
      sort: "asc",
      width: 100,
    },
    {
      label: "Ethane",
      field: "Ethane",
      sort: "asc",
      width: 100,
    },
    {
      label: "Acethylene",
      field: "Acethylene",
      sort: "asc",
      width: 150,
    },
    {
      label: "DBDS",
      field: "DBDS",
      sort: "asc",
      width: 100,
    },
    {
      label: "PF",
      field: "Power_Factor",
      sort: "asc",
      width: 100,
    },
    {
      label: "IV",
      field: "Interfacial_V",
      sort: "asc",
      width: 100,
    },
    {
      label: "DR",
      field: "Dielectric_rigidity",
      sort: "asc",
      width: 100,
    },
    {
      label: "Humid",
      field: "Water_content",
      sort: "asc",
      width: 100,
    },
    {
      label: "HI",
      field: "Health_index",
      sort: "asc",
      width: 100,
    },
    // {
    //   label: "LE",
    //   field: "Life_expectation",
    //   sort: "asc",
    //   width: 100,
    // },
  ],
  rows: [
    {
      SL: "1",
      Time: "12:00 AM",
      Hydrogen: "2845",
      Oxygen: "5860",
      Nitrogen: "27842",
      Methane: "7406",
      CO: "32",
      CO2: "1344",
      Ethylene: "16684",
      Ethane: "5467",
      Acethylene: "7",
      DBDS: "19",
      Power_Factor: "1",
      Interfacial_V: "45",
      Dielectric_rigidity: "55",
      Water_content: "0",
      Health_index: "95.2",
    },
    {
      SL: "2",
      Time: "12:05 AM",
      Hydrogen: "12886",
      Oxygen: "61",
      Nitrogen: "25041",
      Methane: "877",
      CO: "83",
      CO2: "864",
      Ethylene: "4",
      Ethane: "305",
      Acethylene: "0",
      DBDS: "45",
      Power_Factor: "1",
      Interfacial_V: "45",
      Dielectric_rigidity: "55",
      Water_content: "0",
      Health_index: "85.5",
    },
    {
      SL: "3",
      Time: "12:10 AM",
      Hydrogen: "2820",
      Oxygen: "16400",
      Nitrogen: "56300",
      Methane: "144",
      CO: "257",
      CO2: "1080",
      Ethylene: "206",
      Ethane: "11",
      Acethylene: "2190",
      DBDS: "1",
      Power_Factor: "1",
      Interfacial_V: "39",
      Dielectric_rigidity: "52",
      Water_content: "11",
      Health_index: "85.3",
    },
    {
      SL: "4",
      Time: "12:15 AM",
      Hydrogen: "1099",
      Oxygen: "70",
      Nitrogen: "37520",
      Methane: "545",
      CO: "184",
      CO2: "1402",
      Ethylene: "6",
      Ethane: "230",
      Acethylene: "0",
      DBDS: "87",
      Power_Factor: "4.58",
      Interfacial_V: "33",
      Dielectric_rigidity: "49",
      Water_content: "5",
      Health_index: "85.3",
    },
    {
      SL: "5",
      Time: "12:20 AM",
      Hydrogen: "3210",
      Oxygen: "3570",
      Nitrogen: "47900",
      Methane: "160",
      CO: "360",
      CO2: "2130",
      Ethylene: "4",
      Ethane: "43",
      Acethylene: "4",
      DBDS: "1",
      Power_Factor: "0.77",
      Interfacial_V: "44",
      Dielectric_rigidity: "55",
      Water_content: "3",
      Health_index: "85.2",
    },
    {
      SL: "6",
      Time: "12:25 AM",
      Hydrogen: "13500",
      Oxygen: "343",
      Nitrogen: "36500",
      Methane: "3150",
      CO: "113",
      CO2: "984",
      Ethylene: "5",
      Ethane: "1230",
      Acethylene: "1",
      DBDS: "1",
      Power_Factor: "4.93",
      Interfacial_V: "37",
      Dielectric_rigidity: "52",
      Water_content: "6",
      Health_index: "75.6",
    },
    {
      SL: "7",
      Time: "12:30 AM",
      Hydrogen: "10200",
      Oxygen: "11900",
      Nitrogen: "33700",
      Methane: "573",
      CO: "87",
      CO2: "611",
      Ethylene: "0",
      Ethane: "162",
      Acethylene: "0",
      DBDS: "1",
      Power_Factor: "3.53",
      Interfacial_V: "45",
      Dielectric_rigidity: "55",
      Water_content: "5",
      Health_index: "75.6",
    },
    {
      SL: "8",
      Time: "12:35 AM",
      Hydrogen: "3",
      Oxygen: "15459",
      Nitrogen: "41347",
      Methane: "5",
      CO: "68",
      CO2: "902",
      Ethylene: "12",
      Ethane: "2",
      Acethylene: "13",
      DBDS: "5",
      Power_Factor: "0.58",
      Interfacial_V: "41",
      Dielectric_rigidity: "71",
      Water_content: "6",
      Health_index: "73.2",
    },
    {
      SL: "9",
      Time: "12:40 AM",
      Hydrogen: "16",
      Oxygen: "2470",
      Nitrogen: "59600",
      Methane: "8",
      CO: "520",
      CO2: "2660",
      Ethylene: "5",
      Ethane: "8",
      Acethylene: "2",
      DBDS: "164",
      Power_Factor: "0.29",
      Interfacial_V: "44",
      Dielectric_rigidity: "56",
      Water_content: "4",
      Health_index: "72.8",
    },
  ],
};
  console.log(data);
 
  return (
    <MDBDataTable
      className="table"
      noBottomColumns={true}
      bordered
      small
      data={data}
      
    >
      
      </MDBDataTable>
    
  );
};

export default About;

