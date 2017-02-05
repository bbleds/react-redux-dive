"use strict";
// middleware ******

// example middleware used for logging
const logger = function(store){
	return function(next){
		return function(action){
      console.log('in action func');
      console.log('action is', action);
      console.log('before next method', store.getState());
			next(action);
      console.log('after next method', store.getState());
		}
	}
}

// error catching middleware
const errorCatcher = function(store){
	
	return function(next){
		return function(action){
      try {
        next(action);
      } catch (e) {
        console.group('error');
        console.error('error ocurred', e);
        console.groupEnd('error');
      }
	}
}

// Functionality ******

// create store
var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, errorCatcher));

var valueEl = document.getElementById('value');
var sumEl = document.getElementById('summedResult');

function render() {
  console.log('Rendering...');
  valueEl.innerHTML = store.getState().count;
  sumEl.innerHTML = store.getState().sum;
}

// invoke render everytime state is updated
store.subscribe(render);

// call decrease action creator
document.getElementById('decrement').addEventListener('click', decrease);

// execute increment () method after 1000 millisecond or 1 second
document.getElementById('incrementAsync').addEventListener('click', function () {
    setTimeout(
      increment
    , 1000);
  })

// apply mulitplication handler
document.getElementById('multiTen').addEventListener('click', multiply);

// apply sum handler
document.getElementById('sum').addEventListener('click', sumNums);
