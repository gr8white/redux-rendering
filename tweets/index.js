const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

// dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const sortLikes = document.getElementById("sortLikes")
sortLikes.addEventListener('click', e => dispatch({type: "SORT", order: "LIKES"}), console.log("button works"))

const sortRetweets = document.getElementById("sortRetweets")
sortRetweets.addEventListener('click', e => dispatch({type: "SORT", order: "RETWEETS"}), console.log("button works"))

const sortReplies = document.getElementById("sortReplies")
sortReplies.addEventListener('click', e => dispatch({type: "SORT", order: "REPLIES"}), console.log("button works"))
