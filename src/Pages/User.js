import {Table ,Button,Form,Row,Col,Container} from "react-bootstrap";
import "./User.css";
import { useEffect, useState } from "react"

// FireStore  and Firebase  imoprts
import { db } from "../Components/Firebase/Config"
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";

export default function ActiveExample(props) {

  //firebase Fetching Data from Firestore
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
  }, [users]);

  // Add Document Firestore
  const [title, setTitle] = useState("");
  const [meternum, setMeternum] = useState("");
  const [cell, setCell] = useState("");
  const [addr, setAddr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowInput(false);
    setAddr("");
    setCell("");
    setTitle("");
    setMeternum("");
    setShowSubmitButton(true);
    await addDoc(collection(db, "UserList"), {
      title: title,
      meternum: meternum,
      addr: addr,
      cell: cell,
    });
  };
  // Delete firesotre Document
  const handleClick = async (id) => {
    await deleteDoc(doc(db, "UserList", id));
  };

  // Show Inpur Handler
  const [showInput, setShowInput] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  
  const handleShowInput = () => {
    setShowInput(true);
    setShowSubmitButton(false);
    
  };

  return (
    <div className="Users">

      <Container className="head">
        <Row className="mb-3">
          <Col lg={3}><h1 className="userheading">Users</h1></Col>
          <Col lg={9}> {showSubmitButton && (
          <Button  onClick={handleShowInput}>
            Add New 
          </Button>
        )}</Col>
        </Row>
        <Row>
          <Col lg={9}><p></p></Col>
          
        </Row>
      </Container>
      
      
       
        
                
      {showInput && 
      <Form>
        <Row className="mb-3 ">
          <Col lg={2} >
          
      <Form.Control
      
        placeholder="Consumer Name"
       
        aria-label="Consumer Name"
        aria-describedby="basic-addon1"
        onChange={(e) => setTitle(e.target.value)}

      />
      </Col>

      <Col lg={2}>
      <Form.Control
      className="numinput"
        placeholder="Meter#"
        aria-label="Meter Num"
        aria-describedby="basic-addon1"
        type="number"
        onChange={(e) => setMeternum(e.target.value)}
      />
       </Col>

      <Col lg={2}>
      <Form.Control
      className="numinput"
        placeholder="Cell#"
        aria-label="Cell Num"
        aria-describedby="basic-addon1"
        type="number"
        onChange={(e) => setCell(e.target.value)}
      />
       </Col>

      <Col lg={2}>
      <Form.Control
        placeholder="Address"
        aria-label="Address"
        aria-describedby="basic-addon1"
        onChange={(e) => setAddr(e.target.value)}
      />
      </Col>
      <Col lg={1}>
      <Button  onClick={handleSubmit}  id="button-addon2">
            {" "}
            Submit
          </Button>
   

          </Col></Row>
     
      </Form>
        }  


      {/* Users List  Showing  Users from Firebase to Application */}
      <Container>
        <Row>
          <Col lg={9}>
          
      <Table  hover className="UserTable" size ="sm">
        <thead >
          <tr>
            <th>Consummer</th>
            <th>Meter Number</th>
            <th>Cell Number</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.title}</td>
                  <td>{user.meternum}</td>
                  <td>{user.cell}</td>
                  <td>{user.addr}</td>
                  <td>
                    <Button
                     
                      
                      size="small"
                      onClick={() => handleClick(user.id)}
                    >
                      Remove
                    </Button>{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      </Col>
        </Row>
      </Container>


{/* 
      {showInput && (
        <div>
          <div
            component="form"
            sx={{
              "& > :not(style)": { m: 0.5, width: "19ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="standard-required"
              label="Consumer Name"
              type="text"
              variant="standard"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              required
              id="standard-number"
              label="Meter Number"
              type="number"
              variant="standard"
              onChange={(e) => setMeternum(e.target.value)}
            />
            <TextField
              required
              id="standard-number"
              label="Cell Number"
              type="number"
              variant="standard"
              onChange={(e) => setCell(e.target.value)}
            />
            <TextField
              required
              id="standard-required"
              label="Address"
              type="text"
              variant="standard"
              onChange={(e) => setAddr(e.target.value)}
            />
            <Button variant="contained" color="success" onClick={handleSubmit}>
              {" "}
              Submit
            </Button>
          </div>
        </div>
      )} */}


    </div>
  );
}
