import React from "react";
import "../style.css";

function PersonalInfo(props) {
    const {
        name,
        email,
        contact
    } = props.data

    const onHandleChange = props.onHandleChange

    return(
        <div className="form-div">
            <input type="text" className="form-control" name="name" value={name} placeholder="Enter your name..." onChange={(event)=>{onHandleChange(event)}}></input>
            <input type="text" className="form-control" name="email" value={email} placeholder="Email" onChange={(event)=>{onHandleChange(event)}}></input>
            <input type="text" className="form-control" name="contact" value={contact} placeholder="Contact Number" onChange={(event)=>{onHandleChange(event)}}></input>
        </div>
    )
}

export default PersonalInfo