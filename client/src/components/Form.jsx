import { useState } from "react"

export default function Form(props){

    const[name, setName] = useState("")
    const[url, setUrl] = useState("")

    const updateURLField = (e) => {
        setUrl(e.target.value)
    }

    const updateNameField = (e) => {
        setName(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault();
        const newLinkData = {name:name, url:url}
        props.onNewData(newLinkData);


        clearForm();
    }

    function clearForm(){
        setName("")
        setUrl("")
    }


    return(
        <form onSubmit={submitForm}>
            <label for="linkName">Link Name:</label>
            <input type="text" id="linkName" name="linkName" value={name} onChange={updateNameField} />
            <br />
            <br />
            <label for="URL">Link URL:</label>
            <input type="text" id="linkURL" name="linkURL" value={url} onChange={updateURLField}/>
            <br/>
            <br />
            <input type="submit" value="Submit"></input>
        </form>
    )
}


