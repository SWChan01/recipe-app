import React ,{useState,useEffect} from 'react';
import {Form,InputGroup,Button} from 'react-bootstrap'
//import Result from './Result'

const SearchByKeywords = () =>{


//GET example: 
//https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2

    const API_KEY=process.env.REACT_APP_SPOONTACULAR_API_KEY;

    const [result,setResult] = useState("");
    const [search,setSearch] = useState("");
    const [query,setQuery] = useState("");



    function sendRequest(){
        let url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10?apiKey=${API_KEY}`
        fetch(url)
        .then((response)=>{
            response.json();
        })
        .then((result)=>{
            console.log(result);
        });
    }

    useEffect(()=>{
        sendRequest();
    },[query]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(search);
        setQuery(search);

    }   

    const handleOnChange = (e) =>{
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    









    return (
        <>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Form.Control type="text" onChange={(e) => {handleOnChange(e)}} placeholder="Search recipe by keywords"></Form.Control>
                    <Button>Search</Button>
                </InputGroup>
            </Form>


        </>

    )
}





export default SearchByKeywords;