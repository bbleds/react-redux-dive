// create root reducer
var combineReducer = function(currentState, action){

  // set next state - clone currentState object so we do not refer to same object
  var nextState = Object.assign({}, currentState);
  nextState = {
    count: counter(nextState.count, action),
    sum: sum(nextState.sum, action)
  }

  return nextState;
}


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

var sum = function(currentState, action){
  var DEFAULT_STATE = 0;

  // check for deault state
  if (currentState == undefined){
    nextState = DEFAULT_STATE;
    return nextState;
  }

  // handle dispatch actions
  switch(action.type){
    case 'SUM':
      nextState = parseInt(action.a) + parseInt(action.b);
      return nextState;
    default:
      nextState = currentState;
      return nextState;
  }
}
