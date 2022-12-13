
import React from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import {Link, Route} from "wouter";

export default function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <h1>Gifs</h1>
        <Link to='/gif/cr7'>El bicho</Link>
        <Link to='/gif/worldcup'>Mundial</Link>
        <Link to='/gif/cats'>Gatos</Link>
        <Route 
        component={ListOfGifs}
        path ="/gif/:keyword"/>
        
      </section>
    </div>
  );
}


