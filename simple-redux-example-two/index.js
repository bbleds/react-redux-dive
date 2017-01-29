
    // create store
    var store = Redux.createStore(counter);

    // create reducer
    function counter(currentState, action){
      // set deafult state
      var DEFAULT_STATE = {count: 0, sum: 0};
      // set next state - clone currentState object so we do not refer to same object
      var nextState = Object.assign({}, currentState);

      // check for deault state
      if (currentState == undefined){
        nextState = DEFAULT_STATE;
        return nextState;
      }

      // handle dispatch actions
      switch(action.type){
        case 'DECREMENT':
          nextState.count = currentState.count - 1;
          return nextState;
        case 'INCREMENT':
          nextState.count = currentState.count + 1;
          return nextState;
        case 'MULTIPLY':
          nextState.count = currentState.count * 10;
          return nextState;
        case 'SUM':
          nextState.sum = parseInt(action.a) + parseInt(action.b);
          return nextState;
        default:
          return nextState;
      }

    }

      var valueEl = document.getElementById('value');
      var sumEl = document.getElementById('summedResult');
      function render() {
        console.log('Rendering...');
        valueEl.innerHTML = store.getState().count;
        sumEl.innerHTML = store.getState().sum;
      }

      // invoke render everytime state is updated
      store.subscribe(render);

      document.getElementById('decrement')
        // call decrease action creator
        .addEventListener('click', decrease);

      document.getElementById('incrementAsync')
        .addEventListener('click', function () {
          setTimeout(
            increment
          , 1000); // execute increment () method after 1000 millisecond or 1 second
        })

        // apply mulitplication handler
        document.getElementById('multiTen')
        .addEventListener('click', multiply);

        // apply sum handler
        document.getElementById('sum')
        .addEventListener('click', sum);
