import React from "react";

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
        <div>
            <input type="text" name="companyName" value={companyName} onChange={(event)=>onHandleChange(event, id)} placeholder="Company Name" />
            <input type="text" name="positionTitle" value={positionTitle} onChange={(event)=>onHandleChange(event,id)} placeholder="Position Title" />
            <input type="text" name="jobTasks" value={jobTasks} onChange={(event)=>onHandleChange(event,id)} />
            <input type="text" name="jobDuration" value={jobDuration} onChange={(event)=>onHandleChange(event,id)} />
            <button onClick={()=>onHandleDelete(id)}></button>
        </div>
    )
}

export default ExperienceForm