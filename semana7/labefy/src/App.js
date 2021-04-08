import React from 'react'
import * as bananinha from './api'
import ListaDePlaylists from './components/ListaDePlaylists'
import CriaPlaylist from './components/CriaPlaylist'
// import {pegarTodasPlaylists} from './api'

export default class App extends React.Component {

  state = {
    playlists: [],
    inputValue: "teste"
  }

  componentDidMount = () => {
    this.pegarPlaylists()
  }

  pegarPlaylists = () => {
    bananinha.pegarTodasPlaylists().then(r => {
      this.setState({ playlists: r})
      console.log("estado", r)
      // this.setState({ playlists: r.result.list})
      // this.setState({ playlists: [...r.result.list]})
    })
  }


  

  render () {
    return (
      <div>
        <CriaPlaylist />
        <ListaDePlaylists/>
  
      </div>
    );
  }

}


