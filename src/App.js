
import React from 'react'
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

import {Link, Route} from "wouter";

export default function App() {
  
  return (
    <StaticContext.Provider value={{
      name:'Yael',
      ejemplo:true
    }}>
        <div className="App">
          <section className="App-content">
            <h1>Gifs</h1>
            <Link to='/'>Home</Link>
            <GifsContextProvider>
              <Route 
                component={Home}
                path ="/"
              />
              <Route 
                component={SearchResults}
                path ="/search/:keyword"
              />
              <Route 
                component={Detail}
                path ="/gif/:id"
              />
            </GifsContextProvider>
          </section>
        </div>
    </StaticContext.Provider>
    
  );
}


