
// create store
var store = Redux.createStore(combineReducer);

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
