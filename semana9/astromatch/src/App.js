import React from 'react'
import Home from './pages/Home'
import Chat from './pages/Chat'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"



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
