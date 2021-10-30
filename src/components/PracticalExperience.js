import React, {useState} from "react"
import UI from "../UI";

function PracticalExperience() {
    const [companyName, setCompanyName] = useState("")
    const [positionTitle, setPositionTitle] = useState("")
    const [jobTasks, setJobTasks] = useState()
    const [jobDuration, setJobDuration] = useState()

    function handleCompanyName(event){
        const value = event.target.value
        setCompanyName(value)
    }

    function handlePositionTitle(event){
        const value = event.target.value
        setPositionTitle(value)
    }
    
    function handleJobTasks(){
        setJobTasks()
    }
    
    function handleJobDuration(){
        setJobDuration()
    }

    return(
        <div>
            Experience
            <form>
                <input type="text" value={companyName} onChange={handleCompanyName} placeholder="Company Name" />
                <input type="text" value={positionTitle} onChange={handlePositionTitle} placeholder="Position Title" />
                <input type="text" value={jobTasks} onChange={handleJobTasks} />
                <input type="text" value={jobDuration} onChange={handleJobDuration} />
            </form>

            <UI company={companyName} position={positionTitle} />
        </div>
    )
}

export default PracticalExperience