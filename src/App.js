import React from 'react';
import './App.css';
import Navagation from './components/Navagation'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import SearchByKeywords from './components/SearchByKeywords'

//GET example: 
//https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2



const App = () => {

    const API_KEY = process.env.REACT_APP_SPOONTACULAR_API_KEY;







  return (
    <>
        <Navagation />
        <Router>
            <Switch>
                <Route exact path="/">
                    <SearchByKeywords />
                </Route>

            </Switch>
        </Router>
    </>

  );
}

export default App;
