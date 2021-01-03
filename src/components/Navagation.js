import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form,FormControl,Nav,Navbar,Button} from 'react-bootstrap'
import './Navagation.css'

const Navagation = () => {
    return (
    <>   
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/searchByKeywords" >Get recipes by keywords</Nav.Link>
                <Nav.Link href="/advancedSearch">Get recipes by criteria</Nav.Link>
            </Nav>
        </Navbar>
    </>
    )
}

export default Navagation;