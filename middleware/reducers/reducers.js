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
