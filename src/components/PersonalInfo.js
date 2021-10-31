import React from "react";

function PersonalInfo(props) {
    const {
        name,
        email,
        contact
    } = props.data

    const onHandleChange = props.onHandleChange

    return(
        <div>
            <input type="text" name="name" value={name} placeholder="Enter your name..." onChange={(event)=>{onHandleChange(event)}}></input>
            <input type="text" name="email" value={email} placeholder="Email" onChange={(event)=>{onHandleChange(event)}}></input>
            <input type="number" name="contact" value={contact} placeholder="" onChange={(event)=>{onHandleChange(event)}}></input>
        </div>
    )
}

export default PersonalInfo