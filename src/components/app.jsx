import React, { Component } from 'react';
import Leaderboard from '../containers/leaderboard'

require("materialize-css/bin/materialize.css");

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Leaderboard />
        <div className='gitLink'>
          <span className='viewsource'>View source code on</span>
          <span className='gitlogo'><a href="https://github.com/gazzer82/freeCodeCamp_Leaderboard"><img className='responsive-img gitlogo' src={require("../../images/GitHub_Logo.png")} /></a></span>
        </div>
      </div>
    );
  }
}
