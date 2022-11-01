import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";

// firesotre
import { db } from "../Components/Firebase/Config";
import { collection, getDocs } from "firebase/firestore";

//Style
import "./Billing.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Billing() {
  const [users, setUsers] = useState([]);
  const [showInvoice, setShowInvoice] = useState(false);

  const [title,setTitle]  = useState()
  const [meternum ,setMeternum] = useState()
  const [addr ,setAddr] = useState()
  const [cell , setCell] = useState()
  // use Effect and State for User Data
  // Firebase
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

  //Invoice Handling
  const handleInvoice = ( title, addr,meternum ,cell) => {
    setShowInvoice(true);
    
    setTitle(title)
    setMeternum(meternum)
    setAddr(addr)
    setCell(cell)
    
  };
  const handleClose = () => setShowInvoice(false);

  return (
    <div className="Bill">
      <Container className="head">
        <Row>
          <Col lg={8}>
            <h4 className="heading"> Consumers-Bill</h4>
          </Col>
        </Row>
        <Row>
          <Col lg={9}>
            <p></p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg={9}>
          
      <Table hover className="UserTable">
        <thead>
          <tr>
            <th>Consummer</th>
            <th>Meter Number</th>
            <th>Cell Number</th>
            <th>Address</th>
            <th>Bill</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.title}</td>
              <td>{user.meternum}</td>
              <td>{user.cell}</td>
              <td>{user.addr}</td>
              <td>
                <Button
                  onClick={() => handleInvoice( user.title , user.addr,user.meternum ,user.cell)}
                  
                >
                  View
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Col>
        </Row>
      </Container>
      {showInvoice && (
        <div className="ModalBackdrop">
          <div className="Modal">
            <Modal.Dialog fullscreen="xl-down" size="lg">
              <Modal.Header>
                <Modal.Title>Aqua Surveilance</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div className="modalbody">
                  <div>
                    <h5>From</h5>
                    <p> Benazir Bhutto shaheed University Lyari karachi</p>
                    <h5>To</h5>
                    <p>
                        `{title} : {addr}`
                    </p>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th> Account Information </th>
                      </tr>
                      <tr>
                        <td>Account Number</td>
                        <td>{meternum}</td>
                      </tr>
                      <tr>
                        <td>Billing Date</td>
                        <td>7/10/2022</td>
                      </tr>
                      <tr>
                        <td>Due Date</td>
                        <td>20/10/2022</td>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="BillTable">
                  <Table >
                    <thead>
                      <tr>
                        <th>Meter Number</th>
                        <th>Service Dates</th>
                        <th>Current/Liters</th>
                        <th>previous/Liters</th>
                        <th>Rs:1/liter</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{meternum}</td>
                        <td>20/1/2022</td>
                        <td>500</td>
                        <td>0</td>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
      )}
    </div>
  );
}
