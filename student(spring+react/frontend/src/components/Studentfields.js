import React,{useState,useEffect} from "react";
import { MapHTMLAttributes } from "react";
export function Student()
{
    function handleSubmit(e)
    {
        e.preventDefault();
        const student={name,address};
        console.log(student);
        
        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
    }).then(()=>{
        console.log("student added")
    })
    }

    const[name,setName] = useState('');
    const[address,setAddress] = useState('');
    const[students,setStudents] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll").then(res=>res.json())
        .then(result=>setStudents(result));
    },[]);
    const list = students.map((student)=><li key="student">{student.name} - {student.address}</li>)
    return (
        <div class="container text-center">
            <link rel="stylesheet" href="App.css"/>
            <form>
                <div class="column">
                    <div class="row">
                <label for="name" id="name">Student Name   </label>
                <input type="text" id="name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <br />
                <br />
                <br />
                <div class="row">
                <label for="address" id="address">Student address   </label>
                <input type="text" id="address" onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <br />
                <br />
                <br />
                <input type="submit" onClick={handleSubmit} />
                </div>
            </form>
            <h2>Students</h2>
            <ul>
                {list}
            </ul>
        </div>
    );
}