import React, { Component } from 'react';
import Leaderboard from '../containers/leaderboard'

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>Hello World</h1>
        <Leaderboard />
        <h4>View source code on <a href="https://github.com/gazzer82/freeCodeCamp_Leaderboard"><img src={require("../../images/GitHub_Logo.png")} /></a></h4>
      </div>
    );
  }
}
