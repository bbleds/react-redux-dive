var decrease = function () {
  // set decrement dispatch action
  var action = {type: 'DECREMENT'};
  store.dispatch(action);
};

var increment = function() {
  // set increment dispatch action
  var action = {type: 'INCREMENT'};
  store.dispatch(action);
}

var multiply = function(){
  var action = {type: 'MULTIPLY'};
  store.dispatch(action);
}

var sumNums = function(){
  var valOne = document.getElementById('a').value;
  var valTwo = document.getElementById('b').value;
  var action = {type: 'SUM', a: valOne, b: valTwo};

  store.dispatch(action);
}
