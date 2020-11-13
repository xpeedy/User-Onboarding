import Styled from "styled-components"
import './App.css';
import Form from "./Components/Form"
import {useState, useEffect} from "react"
import styled from "styled-components";


function App() {
  const [users, setUsers] = useState([])

  function userList(para){
    const arr = [...users]
    arr.push(para);
    setUsers(arr)
  }

  return (
    <AppContainer>
      <StyleH1>
      <h1>Add New User</h1>  
      </StyleH1>
      <InputDiv>
      <Form userfunc={userList}/>
      </InputDiv>
      <div>{JSON.stringify(users)}
      </div>
    </AppContainer>
  );
}

export default App;

const AppContainer = Styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


`
const StyleH1 = styled.h1`
font-size: 1.5rem;
`

const InputDiv = Styled.div`
display: flex;
justify-content: center;
padding: 6%;
width: 20%;
box-shadow:0 0 15px 5px rgba(0,0,0,0.06);
`