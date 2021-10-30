import React, {useState} from "react"
import UI from "../UI";

function GeneralEdu() {
    const [yourName, setName] = useState("hritik");
    const [email, setEmail] = useState("hritik@gmail.com");
    const [contact, setContact] = useState("4345634634");

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

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    return(
        <div>
            Personal Info
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleName} value={yourName}></input>
                <input type="text" name="email" onChange={handleEmail} value={email}></input>
                <input type="number" name="contact" onChange={handleContact} value={contact}></input>
            </form>

            <UI name={yourName} email={email} contact={contact} />
        </div>
    )
}

export default GeneralEdu