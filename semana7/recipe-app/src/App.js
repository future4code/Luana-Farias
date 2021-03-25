import './App.css';
import React from 'react'
import {appId, appKey} from './components/ApiSettings'
import axios from 'axios';
import Search from './components/Search'
import Filter from './components/Filter'



class App extends React.Component {

  state = {
    searchResult: [],
    inputValue: ""
  }

  componentDidMount = () => {
    this.searchRecipe();
  }
  
  searchRecipe = async () => {
    const response = await axios.get(`https://api.edamam.com/search?q=${this.state.inputValue}&app_id=${appId}&app_key=${appKey}`);
    this.setState({ searchResult : response.data.hits})
    console.table(this.state.searchResult)
    // console.log(response.data)
  }

  onChangeInput = (e) => {
    this.setState({ inputValue: e.target.value })
    // console.log(this.state.inputValue)
  }

    render () {

      return (
        <div className="App">
          
          <Search 
          searchRecipe={this.searchRecipe}
          onChangeInput={this.onChangeInput}
          value={this.state.inputValue}
          searchResult={this.state.searchResult}
          />

          <Filter />
        </div>
      );
    }
    }



export default App;
