import React , {useState} from 'react'

export default function StudentsList({ fullnamee, regNooo, coursee, idd, handleDelete, donee }) {

    const [done,setDone] = useState(donee)

    function handleUpdate() {
        setDone((done)=> !done)
    }

    return (
        <div style={{ border: "2px solid red", margin: "5px" }}>
            <h2>{fullnamee}</h2>
            <p>Reg No : {regNooo}</p>
            <p>Course : {coursee}</p>
            <div>
                <button style={{ margin: "2px" }} onClick={() => handleDelete(idd)}>DELETE</button>
                <button style={{ margin: "2px" }} onClick={() => handleUpdate(idd)}>{done ? "Cleared" : "Not cleared"}</button>
            </div>

        </div>
    )
}
