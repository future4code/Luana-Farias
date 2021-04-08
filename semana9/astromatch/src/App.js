import React from 'react'
import Home from './pages/Home'
import Chat from './pages/Chat'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import * as api from './api/api'



function App() {

  return (
    <div className="App">
      
      <Router>

        <Switch>
          <Route path="/" exact component={Home} />
            
          <Route path="/chat" component={Chat}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
