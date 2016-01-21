import { FETCH_CAMPERS } from '../actions/action_fetch_campers';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_CAMPERS:
      var returnData = action.payload.data.slice();
      return returnData.sort((a,b) => {
        return (a.alltime > b.alltime) ? -1 : 1;
      });
  }
  return state;
}
