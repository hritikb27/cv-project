import React from "react";

function UI(props) {
    return (
        <div style={{ minHeight: "70%", minWidth: "20%", border: "2px solid black", marginLeft: "80rem", marginTop: "0", width: "auto", position: "absolute", boxSizing: "border-box" }}>

            {<div style={{backgroundColor:"brown", color:"whitesmoke"}}>
                <h1>{props.personal.name}<br />
                    {props.personal.email}<br />
                    {props.personal.contact}</h1>
            </div>
            }

            <br />

            {props.ExpForm.map(item => {
                return <div style={{backgroundColor:"pink", color:"whitesmoke"}} key={item.id} >
                    Experience
                    <h1>{item.companyName}</h1>
                    <h1>{item.positionTitle}</h1>
                    <h1>{item.jobTasks}</h1>
                </div>
            })}
            <br />

            {props.education.map(item=>{
                return <div key={item.id}>
                    <h1>{item.schoolName}</h1>
                    <h1>{item.studyTitle}</h1>
                    <h1>{item.studyDate}</h1>
                </div>
            })}
        </div>
    )
}

export default UI