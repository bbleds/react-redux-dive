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
      return nextState;
  }
}

// create root reducer
var combineReducer = function(currentState, action){
console.log('currentstate is root is =', currentState);
console.log('action is root is =', action);
  // set deafult state
  var DEFAULT_STATE = {count: 0, sum: 0};
  // set next state - clone currentState object so we do not refer to same object
  var nextState = Object.assign({}, currentState);
  nextState = {
    count: counter(nextState.count, action),
    sum: sum(nextState.sum, action)
  }

  return nextState;
}
