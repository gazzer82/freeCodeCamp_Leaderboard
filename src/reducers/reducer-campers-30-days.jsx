import { FETCH_CAMPERS } from '../actions/action_fetch_campers';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_CAMPERS:
      return action.payload.data;
  }
  return state;
}
