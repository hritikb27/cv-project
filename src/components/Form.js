import React, { useState } from "react"
import UI from "../UI";
import ExperienceForm from "./ExperienceForm";

function Form() {
    const [yourName, setName] = useState("hritik");
    const [email, setEmail] = useState("hritik@gmail.com");
    const [contact, setContact] = useState("4345634634");

    const [school, setSchool] = useState("")
    const [studyTitle, setStudyTitle] = useState("")
    const [studyDate, setStudyDate] = useState("")

    const [companyName, setCompanyName] = useState("")
    const [positionTitle, setPositionTitle] = useState("")
    const [jobTasks, setJobTasks] = useState()
    const [jobDuration, setJobDuration] = useState()

    const ExpData = {
        companyName,
        positionTitle,
        jobTasks,
        jobDuration,
        handleCompanyName,
        handlePositionTitle,
        handleJobTasks,
        handleJobDuration
    }

    //Personal Info
    const handleName = (event) => {
        const value = event.target.value
        setName(value)
    }

    const handleEmail = (event) => {
        const value = event.target.value
        setEmail(value)
    }

    const handleContact = (event) => {
        const value = event.target.value
        setContact(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    //Experience

    function handleCompanyName(event) {
        const value = event.target.value
        setCompanyName(value)
    }

    function handlePositionTitle(event) {
        const value = event.target.value
        setPositionTitle(value)
    }

    function handleJobTasks() {
        setJobTasks()
    }

    function handleJobDuration() {
        setJobDuration()
    }

    //Education

    function handleSchoolName(event) {
        const value = event.target.value;
        setSchool(value)
    }

    function handleStudyTitle(event) {
        const value = event.target.value;
        setStudyTitle(value)
    }

    function handleStudyDate(event) {
        const value = event.target.value;
        setStudyDate(value)
    }

    //Add More Functionality

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",marginRight:"20rem"}}>
            <div style={{width:"50%"}}>
                <form onSubmit={handleSubmit}>
                Personal Info
                <br/>
                    <input type="text" name="name" onChange={handleName} value={yourName}></input>
                    <input type="text" name="email" onChange={handleEmail} value={email}></input>
                    <input type="number" name="contact" onChange={handleContact} value={contact}></input>
                <br/>

                Experience
                <br/>
                <div id="experienceForm">
                    <ExperienceForm data={ExpData}/>
                </div>

                <button>Add More</button><br/>

                Education
                <br/>
                    <input type="text" value={school} onChange={handleSchoolName} placeholder="School Name" />
                    <input type="text" value={studyTitle} onChange={handleStudyTitle} placeholder="Study Title" />
                    <input type="date" value={studyDate} onChange={handleStudyDate} />
                </form>
                <button>Add More</button><br/>
            </div>

            <UI name={yourName} email={email} contact={contact} school={school} studyTitle={studyTitle} studyDate={studyDate} company={companyName} position={positionTitle} />
        </div>
    )
}

export default Form