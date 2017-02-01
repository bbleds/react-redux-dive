// create sub reducers
var counter = function(currentState, action){
  var DEFAULT_STATE = 0;

  // check for deault state
  if (currentState == undefined){
    nextState = DEFAULT_STATE;
    return nextState;
  }

  // handle dispatch actions
  switch(action.type){
    case 'DECREMENT':
      nextState = currentState - 1;
      return nextState;
    case 'INCREMENT':
      nextState = currentState + 1;
      return nextState;
    case 'MULTIPLY':
      nextState = currentState * 10;
      return nextState;
    default:
      nextState = currentState;
      return nextState;
  }

}
