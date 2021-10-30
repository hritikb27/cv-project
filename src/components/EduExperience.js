import React, {useState} from "react";
import UI from "../UI";

function EduExperience() {
    const [school, setSchool] = useState("")
    const [studyTitle, setStudyTitle] = useState("")
    const [studyDate, setStudyDate] = useState("")

    function handleSchoolName(event){
        const value = event.target.value;
        setSchool(value)
    }
    
    function handleStudyTitle(event){
        const value = event.target.value;
        setStudyTitle(value)
    }
    
    function handleStudyDate(event){
        const value = event.target.value;
        setStudyDate(value)
    }

    return(
        <div>
            Education
            <form>
                <input type="text" value={school} onChange={handleSchoolName} placeholder="School Name" />
                <input type="text" value={studyTitle} onChange={handleStudyTitle} placeholder="Study Title" />
                <input type="date" value={studyDate} onChange={handleStudyDate} />
            </form>

            <UI school={school} studyTitle={studyTitle} studyDate={studyDate} />
        </div>
    )
}

export default EduExperience