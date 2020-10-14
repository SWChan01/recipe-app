import React from 'react';
import './App.css';
import Navagation from './components/Navagation'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import SearchByKeywords from './components/SearchByKeywords'
import Cover from './components/Cover'


const App = () => {

    const API_KEY = process.env.REACT_APP_SPOONTACULAR_API_KEY;







  return (
    <>
        <Navagation />
        <Router>
            <Switch>
                <Route exact path="/" component={Cover}/>
                <Route exact path="/searchByKeywords" component={SearchByKeywords}/>
                <Route exact path="/searchByKeywords/:query" component={SearchByKeywords}/>

            </Switch>
        </Router>
    </>

  );
}

export default App;
