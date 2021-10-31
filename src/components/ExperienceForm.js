import React from "react";

function ExperienceForm(props) {
    const {
        companyName,
        positionTitle,
        jobTasks,
        jobDuration,
        handleCompanyName,
        handlePositionTitle,
        handleJobTasks,
        handleJobDuration
    } = props.data

    return (
        <div>
            <input type="text" value={companyName} onChange={handleCompanyName} placeholder="Company Name" />
            <input type="text" value={positionTitle} onChange={handlePositionTitle} placeholder="Position Title" />
            <input type="text" value={jobTasks} onChange={handleJobTasks} />
            <input type="text" value={jobDuration} onChange={handleJobDuration} />
        </div>
    )
}

export default ExperienceForm