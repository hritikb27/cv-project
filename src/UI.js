import React from "react";

function UI(props){
    return(
        <div style={{height:"70%", border:"2px solid black", color: "red", marginLeft:"80rem"}}>
            {props.name}
            {props.email}
            {props.contact}

            {props.company}
            {props.position}

            {props.school}
            {props.studyTitle}
            {props.studyDate}
        </div>
    )
}

export default UI