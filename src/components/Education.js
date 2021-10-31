import React from "react";

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
        <div>
            <input type="text" name="schoolName" value={schoolName} onChange={(event)=>onHandleChange(event, id)} placeholder="School Name" />
            <input type="text" name="studyTitle" value={studyTitle} onChange={(event)=>onHandleChange(event, id)} placeholder="Study Title" />
            <input type="date" name="studyDate" value={studyDate} onChange={(event)=>onHandleChange(event, id)} />
            <button onClick={()=>onHandleDelete(id)}></button>
        </div>
    )
}

export default Education