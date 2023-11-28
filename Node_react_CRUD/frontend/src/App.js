import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const data = {
    name: "balli",
    rollno: 26,
    DAA: 70,
    CN: 80,
    WT: 70,
    SDM: 70,
    total: 0
  };
  const [Ans,setAns] = useState('');
  function handleSubmit(e)
  {
    e.preventDefault();
    fetch("http://localhost:8080/student",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
     });
  }
     function ViewAll(e)
     {
      e.preventDefault();
      fetch("http://localhost:8080/stud").then((res)=>res.json()).then((result)=>setAns(result));
     }
  return (
    <div className="App">
     <button onClick={handleSubmit}>click</button> 
     <button onClick={ViewAll}>ViewAll</button>
     <p>{JSON.stringify(Ans)}</p>
    </div>
  );
}

export default App;
