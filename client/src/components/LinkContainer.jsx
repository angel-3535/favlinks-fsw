import Table from './Table'
import Form from './Form'
import '../center.css'
import { useEffect, useState } from 'react'


export default function LinkContainer(){

    //Create a "React Variable" (the way we make variables for a react ui)
    //Creates a set method for the variable
    const[linkData, setLinkData] = useState([])

    useEffect(()=>{
        fetch('api/links').then(response => response.json()).then(data => setLinkData(data)).catch(error => console.error('Error fetching data: ', error))
    },[])

    const handleRemove = (index) => {
       
        const updatedLinkData = [...linkData]
        const removedLink = updatedLinkData.splice(index, 1)[0]

        fetch(`/api/links/${removedLink.id}`, {
            method: 'DELETE',
        }).then(response => {
            if(response.ok){
                localStorage.setItem("linkData", JSON.stringify(updatedLinkData))
                setLinkData(updatedLinkData)
            }else{
                throw new Error('Failed to delete link')
            }
        }).catch(error => console.error('Eroor deleting link:', error))
      }
    
      const handleSubmit = (newData) => {

        fetch('/api/links', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData)
        })
        .then(response => response.json())
        .then(addedLink => {
            const newLinkData = [...linkData, addedLink]
            localStorage.setItem("linkData", JSON.stringify(newLinkData))
            setLinkData(newLinkData)
        })
        .catch(error => console.error('Error adding link:', error))
      }

    return(
        <div className="centerContent">
            <div>
                <h1>My Favorite Links</h1>
                <p>Add a new link with a name and URL to the table! </p>
                <Table linkData={linkData} removeLink={handleRemove}/>
                <h1>Add New</h1>
                <Form onNewData = {handleSubmit}/>
            </div>
        </div>
    )

}
