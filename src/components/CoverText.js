import React,{useState} from 'react';
import {Button} from 'react-bootstrap'
const CoverText = () =>{
    const [query,setQuery] = useState("");


    const handleChange = (e) =>{
        console.log(query)
        setQuery(e.target.value)
    }


    return (
        <>
            <div className="searchArea">
                <h4 className="searchBarText">
                    Search recipes with keyword
                 </h4>

                <div className="searchBar">
                    <input type="text" onChange={(e)=>handleChange(e)} placeholder="Type recipe here"/>
                    <a href={`/searchByKeywords/${query}`}><Button>Search</Button></a>
                </div>

            </div>

        </>
    )
}



export default CoverText;