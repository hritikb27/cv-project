import React, { useState } from "react"
import UI from "../UI";
import ExperienceForm from "./ExperienceForm";
import { v4 } from 'uuid'
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";

function Form() {
    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        email: "",
        contact: "",
        id:v4()
    })

    const [experience, setExperience] = useState([{
        companyName: "",
        positionTitle: "",
        jobTasks: "",
        jobDuration: "",
        id: v4()
    }])

    const [education, setEducation] = useState([{
        schoolName: "",
        studyTitle: "",
        studyDate: "",
        id: v4()
    }])

    //Edit Personal Info
    function onPersonalInfoChange(event) {
        const { name, value } = event.target
        setPersonalInfo(prevState => {
            const newInfo = { ...prevState, [name]: value }
            return newInfo
        })
    }

    //Edit Experience Info
    function handleExpChange(event, id) {
        const { name, value } = event.target;
        setExperience(prevState => {
            const newState = [...prevState];
            newState.forEach(item => {
                if (item.id === id) {
                    return item[name] = value
                }
            })

            return newState
        })
    }

    //Add More Experience Info Fields
    function addExpForm() {
        setExperience(prevState => {
            const newState = [...prevState];
            const newForm = {
                companyName: "",
                positionTitle: "",
                jobTasks: "",
                jobDuration: "",
                id: v4()
            }
            newState.push(newForm)

            return newState
        })
    }

    //Delete Experience Info Fields
    function deleteExpForm(id) {
        setExperience(prevState=>{
            const newInfo = [...prevState]
            newInfo.forEach(item=>{
                if(item.id===id){
                    const index = newInfo.indexOf(item)
                    newInfo.splice(index, 1)
                }
            })
            return newInfo
        })
    }

    //Edit Education Info
    function handleEduChange(event, id) {
        const {name, value} = event.target
        setEducation(prevState => {
            const newInfo = [...prevState]
            newInfo.forEach(item => {
                if (item.id === id) {
                    item[name] = value
                    return item
                }
            })
            return newInfo
        })
    }

    //Add More Education Fields
    function addEducationForm() {
        const format = {
            schoolName: "",
            studyTitle: "",
            studyDate: "",
            id: v4()
        }
        setEducation(prevState=>{
            const newInfo = [...prevState, format]
            return newInfo
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    //Delete Education Fields
    function deleteEduForm(id){
        setEducation(prevState=>{
            const newInfo = [...prevState]
            newInfo.forEach(item=>{
                if(item.id===id){
                    const index = newInfo.indexOf(item)
                    newInfo.splice(index, 1)
                }
            })
            return newInfo
        })
    }

    //Render

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "20rem" }}>
            <div style={{ width: "50%" }}>
                <form onSubmit={handleSubmit}>
                    Personal Info
                    <br />
                    <PersonalInfo key={personalInfo.id} data={personalInfo} onHandleChange={onPersonalInfoChange} />
                    <br />

                    Experience
                    <br />
                    <div id="experienceForm">
                        {experience.map(item => {
                            return <ExperienceForm key={item.id} data={item} onHandleChange={handleExpChange} onHandleDelete={deleteExpForm} />
                        })}
                    </div>

                    <button onClick={addExpForm}>Add More</button><br />

                    Education
                    <br />
                    {education.map(item => {
                        return <Education key={item.id} data={item} onHandleChange={handleEduChange} onHandleDelete={deleteEduForm} />
                    })}
                </form>
                <button onClick={addEducationForm}>Add More</button><br />
            </div>

            <UI personal={personalInfo} education={education} ExpForm={experience} />
        </div>
    )
}

export default Form