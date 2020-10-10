import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form,FormControl,Nav,Navbar,Button} from 'react-bootstrap'

const Navagation = () => {
    return (
    <>   
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#searchByKeywords" active>Get recipes by keywords</Nav.Link>
                <Nav.Link href="#searchByIngredients">Get recipes by ingredients</Nav.Link>
                <Nav.Link href="#randomRecipes">Get random recipes  </Nav.Link>
            </Nav>
        </Navbar>
        <br />
    </>
    )
}

export default Navagation;