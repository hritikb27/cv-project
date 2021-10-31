import React from "react";

function UI(props){
    return(
        <div style={{minHeight:"70%", minWidth:"20%", border:"2px solid black", marginLeft:"80rem", marginTop:"0", width:"auto", position:"absolute", boxSizing:"border-box"}}>
            <h1>{props.name}<br />
            {props.email}<br />
            {props.contact}</h1>
            
            <br />

            {props.company}
            {props.position}<br />

            {props.school}
            {props.studyTitle}
            {props.studyDate}
        </div>
    )
}

export default UI