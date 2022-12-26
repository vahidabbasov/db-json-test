import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  let [user, setUser] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/employees').then((res)=>(setUser(res.data)) )
  },[]);
  console.log(user);
  return user.map((data)=>{
    return (
      <>
      <div key={data.id}>id: {data.id}</div>
    <div>first name: {data.first_name}</div>
    <div>last name: {data.last_name}</div>
    <div>email: {data.email}</div>
</>
       
    )}
  )
    }

export default App;
