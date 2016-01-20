import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCampers} from '../actions/action_fetch_campers';

class CampersTable extends Component {
  constructor(props){
    super(props);
    this.state= {
      viewMode: 'all'
    }
    this.props.fetchCampers();
  }
  renderCamper(camper,index){
    return(
      <tr key={camper.username}>
        <td>{index+1}</td>
        <td>{camper.username}</td>
        <td>{camper.recent}</td>
        <td>{camper.alltime}</td>
      </tr>
    );
  }
  renderCampers(){
    switch(this.state.viewMode){
      case '30':
        return(
          this.props.campers30.map(this.renderCamper)
        );
      case 'all':
        return(
          this.props.campersAll.map(this.renderCamper)
        );
    }
  }
  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th
              onClick={() => {
                console.log('sorting by 30 days');
                this.setState({viewMode: '30'})
              }
            }>Points in past 30 days</th>
            <th
              onClick={() => {
                console.log('sorting by all time');
                this.setState({viewMode: 'all'})
              }
            } >All time points</th>
          </tr>
        </thead>
        <tbody>
          {this.renderCampers()}
        </tbody>
      </table>
      );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCampers},dispatch);
}

function mapStateToProps(state){
  return {
    campers30: state.campers30,
    campersAll: state.campersAll
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CampersTable);
