import React from "react";
import "../style.css";

function ExperienceForm(props) {
    const {
        companyName,
        positionTitle,
        jobTasks,
        jobDuration,
        id,
    } = props.data

    const onHandleChange = props.onHandleChange
    const onHandleDelete = props.onHandleDelete

    return (
        <div className="form-div">
            <input type="text" className="form-control" name="companyName" value={companyName} onChange={(event)=>onHandleChange(event, id)} placeholder="Company Name" />
            <input type="text" className="form-control" name="positionTitle" value={positionTitle} onChange={(event)=>onHandleChange(event,id)} placeholder="Position Title" />
            <input type="text" className="form-control" name="jobTasks" value={jobTasks} onChange={(event)=>onHandleChange(event,id)} placeholder="Job Tasks" />
            <input type="text" className="form-control" name="jobDuration" value={jobDuration} onChange={(event)=>onHandleChange(event,id)} placeholder="Job Duration" />
            <button onClick={()=>onHandleDelete(id)}>Delete</button>
        </div>
    )
}

export default ExperienceForm