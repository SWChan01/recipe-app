import React ,{useState,useEffect} from 'react';
import {Form,InputGroup,Button,Container} from 'react-bootstrap'
import Preview from './Preview'
import './SearchByKeyword.css'
import JSONres from '../res.js'




const SearchByKeywords = ({queryMsg,doQuery}) =>{


//GET example: 
//https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2
//https://api.spoonacular.com/recipes/12345/information?apiKey=0cb18685d22f41239310cbae0ac3f1b8
//https://api.spoonacular.com/recipes/search?apiKey=myKeYz&number=1&query=

    const API_KEY=process.env.REACT_APP_SPOONTACULAR_API_KEY;

    const [result,setResult] = useState([]);
    const [search,setSearch] = useState("");
    const [query,setQuery] = useState("default");
    const [firstLoad,setFirstLoad] = useState(0);


    useEffect(()=>{
        console.log(JSONres)
        console.log("here!")
        sendRequest();
    },[query]);


    async function sendRequest(){
        console.log(window.location.pathname);

        let url =window.location.pathname
        if(url !== "/searchByKeywords" && !firstLoad){
            let res = url.split("/searchByKeywords/");
            setQuery(res[1]);
            setSearch(res[1]);

            let betterURL=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${10}&query=${query}&addRecipeInformation=${true}&fillIngredients=${true}`;
            console.log(betterURL);
            let result = await fetch(betterURL);
            let data = await result.json();
            console.log(betterURL);
            console.log(data);

            setResult(data.results);
            setFirstLoad(1);



        }

        else if(query !== "default"){
            // let URL = `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&number=${10}&query=${query}`
            // let betterURL=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${10}&query=${query}&addRecipeInformation=${true}&fillIngredients=${true}`;
            // let result = await fetch(betterURL);
            // let data = await result.json();
            // console.log(betterURL);
            // console.log(data);

            // setResult(data.results);


            // fetch(url)
            // .then( response => response.json())
            // .then( data => console.log(data))


            // fetch(url)
            // .then( (response) => {response.json()} )
            // .then( (data) => {console.log(data)} )








            // //test query:pasta
            // setResult(JSONres.results);


            let betterURL=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${10}&query=${query}&addRecipeInformation=${true}&fillIngredients=${true}`;
            console.log(betterURL);
            let result = await fetch(betterURL);
            let data = await result.json();
            console.log(betterURL);
            console.log(data);

            setResult(data.results);
            setFirstLoad(1);




        }

        

    }



    function handleSubmit(e){
        e.preventDefault();
        console.log(search);
        setQuery(search);
        console.log(query)

    }   

    const handleOnChange = (e) =>{
        setSearch(e.target.value)
    }

    









    return (
        <>

            <form onSubmit={handleSubmit} className="search">
                    <input type="text" className="searchInput" onChange={(e) => {handleOnChange(e)}} placeholder="Search recipe by keywords" value={search} />
                    <Button type="submit">Search</Button>
            </form>



            <Container className="displayRecipes">
                {result.map( element=> (
                    <Preview
                        title = {element.title}
                        image = {element.image}
                        summary = {element.summary}
                        instructions = {element.analyzedInstructions}
                        ingredients = {element.extendedIngredients}
                    />

                
                ))}



            </Container>
        


        </>

    )
}





export default SearchByKeywords;