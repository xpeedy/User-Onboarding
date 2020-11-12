import logo from './logo.svg';
import './App.css';
import Form from "./Components/Form"
import {useState, useEffect} from "react"


function App() {
  const [users, setUsers] = useState([])

  function userList(para){
    const arr = [...users]
    arr.push(para);
    setUsers(arr)
  }

  return (
    <div>
    <Form userfunc={userList}/>
  {/* <div>{users[0].name}</div> */}
  <div>{JSON.stringify(users)} </div>
    </div>
  );
}

export default App;
