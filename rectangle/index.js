const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

// dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

var width = document.getElementById("width")
width.addEventListener('click', e => dispatch({type: "WIDTH"}))

var height = document.getElementById("height")
height.addEventListener('click', e => dispatch({type: "HEIGHT"}))

var red = document.getElementById("red")
red.addEventListener('click', e => dispatch({type: "COLOR", color: "red"}))

var blue = document.getElementById("blue")
blue.addEventListener('click', e => dispatch({type: "COLOR",color: "blue"}))