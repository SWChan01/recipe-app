import { render } from '@testing-library/react';
import React ,{Component} from 'react';
import CheckBox from './CheckBox'
import './AdvancedSearch.css'
import Preview from './Preview.js'

import JSONres from '../res.js'
import {Form,InputGroup,Button,Container} from 'react-bootstrap'


class AdvancedSearch extends Component{

    constructor(props) {
        super(props)

        this.state = {
            mealType : [
                {id:0 , value: "Main Course" , isChecked:false},
                {id:1 , value: "Side Dish" , isChecked:false},
                {id:2 , value: "Dessert" , isChecked:false},
                {id:3 , value: "Salad" , isChecked:false},
                {id:4 , value: "Bread" , isChecked:false},
                {id:5 , value: "Breakfast" , isChecked:false},
                {id:6 , value: "Soup" , isChecked:false},
                {id:7 , value: "Berverge" , isChecked:false},
                {id:8 , value: "Snack" , isChecked:false},
                {id:9 , value: "Drink" , isChecked:false},
            ],

            firstHalfCuisine : [
                {id:10 , value: "African" ,isChecked:false},
                {id:11 , value: "American" ,isChecked:false},
                {id:12 , value: "British" ,isChecked:false},
                {id:13 , value: "Cajun" ,isChecked:false},
                {id:14 , value: "Caribbean" ,isChecked:false},
                {id:15 , value: "Chinese" ,isChecked:false},
                {id:16 , value: "Eastern European" ,isChecked:false},
                {id:17 , value: "European" ,isChecked:false},
                {id:18 , value: "French" ,isChecked:false},
                {id:19 , value: "German" ,isChecked:false},
                {id:20 , value: "Greek" ,isChecked:false},
                {id:21 , value: "Indian" ,isChecked:false},
                {id:22 , value: "Irish" ,isChecked:false},
            ],
            secondHalfCuisine : [
                {id:23 , value: "Italian" ,isChecked:false},
                {id:24 , value: "Japanese" ,isChecked:false},
                {id:25 , value: "Jewish" ,isChecked:false},
                {id:26 , value: "Korean" ,isChecked:false},
                {id:27 , value: "Latin American" ,isChecked:false},
                {id:28 , value: "Mediterranean" ,isChecked:false},
                {id:29 , value: "Mexican" ,isChecked:false},
                {id:30 , value: "Middle Eastern" ,isChecked:false},
                {id:31 , value: "Nordic" ,isChecked:false},
                {id:32 , value: "Southern" ,isChecked:false},
                {id:33 , value: "Spanish" ,isChecked:false},
                {id:34 , value: "Thai" ,isChecked:false},
                {id:35 , value: "Vietnamese" ,isChecked:false},
            ],


            dietOption: [
                {id:36 , value: "High Protein" ,isChecked :false},
                {id:37 , value: "High Carb" ,isChecked :false},
                {id:38 , value: "Low Fat" ,isChecked :false},
                {id:39 , value: "Vegan Friendly" ,isChecked :false},
                {id:40 , value: "Low Cholesterol" ,isChecked :false},



            ],


            result:[]
            


        }

        this.handleMealType = (e) =>{
            console.log(e.target.value)

            let mealTypes = this.state.mealType;

            mealTypes.forEach(element =>{
                if(element.value === e.target.value){
                    element.isChecked = e.target.checked;
                    console.log(element.value+ " is " + element.isChecked);
                }
            })

            this.setState({mealType:mealTypes});



        }


        this.handleCuisine = (e) =>{
            let cuisines = this.state.firstHalfCuisine.concat(this.state.secondHalfCuisine);

            cuisines.forEach(element =>{
                if(element.value === e.target.value){
                    element.isChecked = e.target.checked;
                    console.log(element.value+ " is " + element.isChecked);
                }
            })

            this.setState({cuisine:cuisines});
        }



        this.handleSubmit = async (e) =>{
            e.preventDefault();



            let cuisineQuery = [];
            let mealTypeQuery = [];
            let dietOptionQuery =[];

            let cuisines = this.state.firstHalfCuisine.concat(this.state.secondHalfCuisine);
            cuisines.forEach(element => {
                if(element.isChecked === true ){
                    cuisineQuery.push(element.value); 
                }
            });

            console.log(cuisineQuery.toString());


            this.state.mealType.forEach(element => {
                if(element.isChecked === true ){
                    mealTypeQuery.push(element.value); 
                }
            });


            this.state.dietOption.forEach(element => {
                if(element.isChecked === true ){
                    dietOptionQuery.push(element.value); 
                }
            });

            console.log(mealTypeQuery.toString());




            let API_KEY = process.env.REACT_APP_SPOONTACULAR_API_KEY;
            let URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${10}&addRecipeInformation=${true}&fillIngredients=${true}&cuisine=${cuisineQuery.toString()}&type=${mealTypeQuery.toString()}`;
            console.log(URL);
            
            let result = await fetch(URL);
            let data = await result.json();
            console.log(data);


            this.setState({result:data.results})


            //this.setState({result:JSONres.results})




        }

    }




    render() {
    
    





        return(
            <>
                <form onSubmit = {this.handleSubmit}>  

                    <div className="criteria mealType">
                        <h2>Select Meal Type</h2>


                        <div>
                            {
                                this.state.mealType.map((element) => {
                                    return (<CheckBox handleClick = {this.handleMealType} {...element} />)
                                })
                            }
                        </div>

                    </div>


                    
                    <div className="criteria">
                        <h2>Select Cuisine Type</h2>

                        <div className="cuisineType">
                            {
                                this.state.firstHalfCuisine.map((element) => {
                                    return (<CheckBox handleClick = {this.handleCuisine} {...element} />)
                                })
                            }
                        </div>


                        <div className="cuisineType">
                            {
                                this.state.secondHalfCuisine.map((element) => {
                                    return (<CheckBox handleClick = {this.handleCuisine} {...element} />)
                                })
                            }
                        </div>
                    </div>


                    <div className="criteria">
                        <h2>Select Diet Option</h2>


                        <div className ="dietType">
                            {
                                this.state.dietOption.map((element) => {
                                    return (<CheckBox handleClick = {this.handleCuisine} {...element} />)
                                })
                            }
                        </div>
                    </div>




                    <Button className="advancedSearchButton" type="submit">Submit</Button>

                   
                </form>  

                {this.state.result.length > 0 &&
                    <h1>
                        Search Result:
                    </h1>
                }

                <Container className="displayRecipes">
                    {this.state.result.map( element=> (
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
        );
    }
}


export default AdvancedSearch;