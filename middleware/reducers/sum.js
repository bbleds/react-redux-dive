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
      action.a = !action.a ? 0 : action.a;
      action.b = !action.b ? 0 : action.b;
      nextState = parseInt(action.a) + parseInt(action.b);
      return nextState;
    default:
      nextState = currentState;
      return nextState;
  }
}
