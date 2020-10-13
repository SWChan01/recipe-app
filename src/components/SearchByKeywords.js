import React ,{useState,useEffect} from 'react';
import {Form,InputGroup,Button,Container} from 'react-bootstrap'
import Result from './Result'
import Preview from './Preview'
import './SearchByKeyword.css'

const SearchByKeywords = () =>{


//GET example: 
//https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2
//https://api.spoonacular.com/recipes/12345/information?apiKey=0cb18685d22f41239310cbae0ac3f1b8
//https://api.spoonacular.com/recipes/search?apiKey=myKeYz&number=1&query=

    const API_KEY=process.env.REACT_APP_SPOONTACULAR_API_KEY;

    const [result,setResult] = useState([]);
    const [search,setSearch] = useState("");
    const [query,setQuery] = useState("default");


    useEffect(()=>{
        console.log("here!")
        sendRequest();
    },[query]);


    async function sendRequest(){
        console.log(query)
        if(query != "default"){
            let URL = `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&number=${10}&query=${query}`
            let betterURL=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${10}&query=${query}&addRecipeInformation=${true}&fillIngredients=${true}`;
            let result = await fetch(betterURL);
            let data = await result.json();

            console.log(data);

            setResult(data.results);


            // fetch(url)
            // .then( response => response.json())
            // .then( data => console.log(data))


            // fetch(url)
            // .then( (response) => {response.json()} )
            // .then( (data) => {console.log(data)} )

        }

        

    }



    function handleSubmit(e){
        console.log("i did not submit")
        e.preventDefault();
        console.log(search);
        setQuery(search);
        console.log(query)

    }   

    const handleOnChange = (e) =>{
        console.log("this happened")
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    









    return (
        <>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Form.Control type="text" onChange={(e) => {handleOnChange(e)}} placeholder="Search recipe by keywords"></Form.Control>
                    <Button type="submit">Search</Button>
                </InputGroup>
            </Form>



            <Container className="displayRecipes">
                {result.map( element=> (
                    // <Result
                    //     title = {element.title}
                    //     image = {element.image}
                    //     summary = {element.summary}
                    //     instructions = {element.analyzedInstructions}
                    //     ingredients = {element.extendedIngredients}
                    //  />
                
                    <Preview
                        title = {element.title}
                        image = {element.image}
                        summary = {element.summary}
                    />

                
                ))}



            </Container>
        


        </>

    )
}





export default SearchByKeywords;