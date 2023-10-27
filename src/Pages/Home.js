import {Table, Container , Row , Col} from "react-bootstrap";
import { useState, useEffect } from "react";

//style
import "./Home.css";

//firesotore
import { db } from "../Components/Firebase/Config";
import { collection, getDocs } from "firebase/firestore";
import Card from "../Components/Home/Card";
import LineChart from "../Components/Home/LineChart";
export default function Home() {
  // firestore
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const ref = collection(db, "UserList");

    getDocs(ref).then((snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      setUsers(result);
    });
  }, []);

 
 

  return (
    <div className="Home">
      <Container>
        <Row>
          <Col>
          <Card />
          </Col>
          <Col lg={6}>
          <h3 className="heading"> Consumers:</h3>
          <p></p>

      <Table  hover className="UserTable" size ="sm">
      
        <thead>
          <tr>
            <th>Consummer</th>
            <th>Meter # </th>
            <th>Cell Number</th>
          
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.title}</td>
              <td>{user.meternum}</td>
              <td>{user.cell}</td>
            </tr>
          ))}
        </tbody>
      </Table>
          </Col>
         
        </Row>
        <Row>
        <Col>
          <LineChart />
          </Col>

        </Row>
      </Container>

    
    </div>
  );
}
