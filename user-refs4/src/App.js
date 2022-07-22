import React,{useState,useRef} from 'react'
import './App.css';

function App() {
  const details={
    fullname:"",
    RegNo: "",
    Course:""
  }
  const [studentDetails,setStudentDetails]=useState(details);
  const inputRef=useRef(null)
 const [studentList,setStudentList]=useState([])
function handleClick(event){
  event.preventDefault();
  setStudentList(prevStudents => {
    return {
      ...prevStudents,
      studentDetails
    }
  })
  console.log(studentList)
}
  //console.log(studentDetails)
  
 
  return (
    <div className="App">
      <form>
        <fieldset>
        <legend>Add Student:</legend>
        <input name='fullname'
        ref={inputRef}
        onChange={(event)=>setStudentDetails(prevDetails =>  {
          return{
            ...prevDetails,
            [event.target.name]:event.target.value
          }
        })
      }
        value={studentDetails.fullname}
        placeholder="Enter Fullname"
        type="text"/><br></br><br></br>


        <input name='RegNo'
          ref={inputRef}
             placeholder="Enter RegNo"
               onChange={(event)=>setStudentDetails(prevDetails =>  {
          return{
            ...prevDetails,
            [event.target.name]:event.target.value
          }
        })
      }
        value={studentDetails.RegNo}
        type="text"/><br></br><br></br>
        <input name='Course'
          ref={inputRef}
             placeholder="Enter Course"
             onChange={(event)=>setStudentDetails(prevDetails =>  {
              return{
                ...prevDetails,
                [event.target.name]:event.target.value
              }
            })
          }
        value={studentDetails.Course}
        type="text"/><br></br><br></br>
        <button onClick={(event)=>handleClick(event)}>Add Student</button>
        <h1>Student List</h1>
        </fieldset>  
      </form>
    </div>
  );
}

export default App;
