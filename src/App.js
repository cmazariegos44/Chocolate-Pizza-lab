import React from 'react'
import './App.css';
import {Switch,BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Components/Home'
import OurHeader from './Components/Header'
import OurFooter from './Components/Footer'
import ImageSection from './Components/ImageSection'
import OurRecipe from './Components/Recipe';
import OurIngredientList from './Components/IngredientList'
import pizzaCookie from './data.js'



function App() {
  return (
    <div className="App">
   <Router>
      < OurHeader/>
      <header className="App-header">
      < ImageSection/>
      < OurRecipe/>
      < OurIngredientList class = "our-list" />
      </header>
      < OurFooter/>
    </Router>
    </div>
  );
}



export default App;
