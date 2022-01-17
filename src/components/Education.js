import React from "react";
import "../style.css";

function Education(props) {
    const {
        schoolName,
        studyTitle,
        studyDate,
        id
    } = props.data

    const onHandleChange = props.onHandleChange
    const onHandleDelete = props.onHandleDelete

    return (
        <div className="form-div">
            <input type="text" className="form-control" name="schoolName" value={schoolName} onChange={(event)=>onHandleChange(event, id)} placeholder="School Name" />
            <input type="text" className="form-control" name="studyTitle" value={studyTitle} onChange={(event)=>onHandleChange(event, id)} placeholder="Study Title" />
            <input type="date" className="form-control" name="studyDate" value={studyDate} onChange={(event)=>onHandleChange(event, id)} />
            <button onClick={()=>onHandleDelete(id)}>Delete</button>
        </div>
    )
}

export default Education