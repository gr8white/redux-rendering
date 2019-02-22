const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

// dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const setName = document.getElementById('nameBox');
setName.addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    dispatch({ type: "NEW-TAG" }), 
    console.log("click worked")
  }
})
