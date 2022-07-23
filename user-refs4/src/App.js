import React, { useState } from "react";
import "./App.css";
import StudentsList from "./StudentsList";

function App() {
  const details = [
    {
      id: 1,
      fullName: "Mure",
      regNo: "123",
      course: "MCS",
      done : false
    },
    {
      id: 2,
      fullName: "Sammy",
      regNo: "358",
      course: "Med",
      done : true
    },
    {
      id: 3,
      fullName: "Tarzan",
      regNo: "875",
      course: "BSC",
      done : false
    },
    {
      id: 4,
      fullName: "Shaddy",
      regNo: "88",
      course: "Mechanical",
      done : false
    },
  ];

  const [fullName, setFullName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [course, setCourse] = useState("");

  const [studentList, setStudentList] = useState(details);

  function handleClick(event) {
    event.preventDefault();
    const newStudent = {
      fullName,
      regNo,
      course,
      done : false,
    };

    setStudentList((studentList) => [...studentList, newStudent]);
    setFullName("")
    setRegNo("")
    setCourse("")
  }

  const studentListFunction = studentList.map((students) => {
    return (
      <StudentsList
        key={students.id}
        fullnamee={students.fullName}
        idd={students.id}
        regNooo={students.regNo}
        coursee={students.course}
        donee={students.done}
        handleDelete = {handleDeleteStudent}
      />
    );
  });

  function handleDeleteStudent(id){
    const updatedStudents = studentList.filter(students => students.id !== id)
    setStudentList(updatedStudents)
  }

  return (
    <div className="App">
      <form onSubmit={handleClick}>
        <fieldset>
          <legend>Add Student:</legend>
          <input
            name="fullname"
            onChange={(event) => setFullName(event.target.value)}
            value={fullName}
            placeholder="Enter Fullname"
            type="text"
          />
          <br></br>
          <br></br>

          <input
            name="RegNo"
            placeholder="Enter RegNo"
            onChange={(event) => setRegNo(event.target.value)}
            value={regNo}
            type="text"
          />
          <br></br>
          <br></br>
          <input
            name="Course"
            placeholder="Enter Course"
            onChange={(event) => setCourse(event.target.value)}
            value={course}
            type="text"
          />
          <br></br>
          <br></br>
          <input type="submit" value="Add Student" />

          <h1>Student List</h1>
          {studentListFunction}
        </fieldset>
      </form>
    </div>
  );
}

export default App;
