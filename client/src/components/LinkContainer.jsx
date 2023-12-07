import Table from './Table'
import Form from './Form'
import '../center.css'
import { useEffect, useState } from 'react'


export default function LinkContainer(){

    //Create a "React Variable" (the way we make variables for a react ui)
    //Creates a set method for the variable
    const[linkData, setLinkData] = useState([])

    useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem("linkData"))
        if(storedData){
            setLinkData(storedData)
        }
    },[])

    const handleRemove = (index) => {
       
        const updatedLinkData = [...linkData]

        updatedLinkData.splice(index, 1)
        setLinkData(updatedLinkData)
        localStorage.setItem("linkData", JSON.stringify(updatedLinkData))
      }
    
      const handleSubmit = (newData) => {

        const newLinkData = [...linkData, newData]
        setLinkData(newLinkData)
        localStorage.setItem("linkData", JSON.stringify(newLinkData))

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
