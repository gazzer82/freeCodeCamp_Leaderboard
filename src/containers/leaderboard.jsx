import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCampers} from '../actions/action_fetch_campers';
import RenderCampers from '../components/camper_row'

class CampersTable extends Component {
  constructor(props){
    super(props);
    this.state= {
      viewMode: '30'
    }
    this.props.fetchCampers();
  }
  render(){
    return(
      <div className='main-table z-depth-2'>
        <div className='center table-title'>
          <h4>Leaderboard</h4>
        </div>
        <table className='bordered camper-table'>
          <thead className='camperHeader'>
            <tr>
              <th className='center'><h6>#</h6></th>
              <th></th>
              <th><h6>Camper Name</h6></th>
              <th className='center'
                onClick={() => {
                  console.log('sorting by 30 days');
                  this.setState({viewMode: '30'})
                }
              }>
              <h6>
                Points in past 30 days {(this.state.viewMode === '30') ? '\u2304' : ''}
              </h6></th>
              <th className='center'
                  onClick={() => {
                  console.log('sorting by all time');
                  this.setState({viewMode: 'all'})
                  }
                } >
                <h6>
                  All time points {(this.state.viewMode === 'all') ? '\u2304' : ''}
                </h6>
              </th>
            </tr>
          </thead>
            <RenderCampers viewMode={this.state.viewMode} campers30={this.props.campers30} campersAll={this.props.campersAll} />
        </table>
      </div>
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
