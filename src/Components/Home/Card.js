import { useState,useEffect } from 'react';
//Style
import './Card.css'
//firesotore
import { db } from "../Firebase/Config";
import { collection, getDocs } from "firebase/firestore";

export default function Card(){

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

    return(
        <div className="Card">
            <div className="grid-container">
                
                <div className="grid-item-title"><span>Users</span></div>
                <div className="grid-item-icon"><img alt='group' src='./Images/group.png' /> </div>
                <div className="moving-icon"><img alt="chart-up" src='./Images/chart-up.png' /> </div>
                <div className="user-data">{users.length    }</div>
            </div>
        </div>
    )
}