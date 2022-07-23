import React , {useState} from 'react'

export default function StudentsList({ fullnamee, regNooo, coursee, idd, handleDelete, donee }) {

    const [done,setDone] = useState(donee)

    function handleUpdate() {
        setDone((done)=> !done)
    }

    return (
        <div>
           <table>
  <tr>
    <th>Student Name</th>
    <th>Registation No</th>
    <th>Course</th>
    <th>Edit</th>
  </tr>
  <tr>
    <td>{fullnamee}</td>
    <td>{regNooo}</td>
    <td>{coursee}</td>
    <td><button>Delete</button></td>
  </tr>
</table>
        </div>
    )
}

