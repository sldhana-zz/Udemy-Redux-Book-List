// all reducers get two parameters, current state and action.
// state argument is not application state, only the state this reducer is responsible for.
//this reducer gets all actions, so in the case where it doesn't care about an action, all re
//reducers should have a default state.

//redux doesn't allow undefined to be returned, so, you have to have initial state
export default function(state = null, action) {
  switch(action.type){
    case 'BOOK_SELECTED':
      //this will set the state of the "activeBook" to this object
      return action.payload;
    default:
      return state;
  }
}
