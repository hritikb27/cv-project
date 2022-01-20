import React from "react";

function UI(props) {
    return (
        <div id="uiDisplay">
            <h1 style={{textAlign:"center", color:"whitesmoke"}}>Resume</h1>

            {<div style={{backgroundColor:"#f8f8ff", color:"black"}}>
                <h1>{props.personal.name}<br />
                    {props.personal.email}<br />
                    {props.personal.contact}</h1>
            </div>
            }

            <br />

            {props.ExpForm.map(item => {
                return <div style={{backgroundColor:"#f8f8ff", color:"black"}} key={item.id} >
                    Experience
                    <h1>{item.companyName}</h1>
                    <h1>{item.positionTitle}</h1>
                    <h1>{item.jobTasks}</h1>
                    <h1>{item.jobDuration}</h1>
                </div>
            })}
            <br />

            {props.education.map(item=>{
                return <div style={{backgroundColor:"#f8f8ff", color:"black"}} key={item.id}>
                    Education
                    <h1>{item.schoolName}</h1>
                    <h1>{item.studyTitle}</h1>
                    <h1>{item.studyDate}</h1>
                </div>
            })}
        </div>
    )
}

export default UI