const initialState = {
  width: 100,
  height: 200,
  color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
  // Handle actions here - make sure you don't mutate the state!
  const { type, color } = action;

  // ACTION 1 - Increment height by 10
  if (type === "HEIGHT") {
    console.log("reducer")
    var newObject =  {
      ...state,
      height: state.height + 10
    }
  }
  // ACTION 2 - Increment width by 10
  if (type === "WIDTH") {
    console.log("reducer")
    var newObject =  {
      ...state,
      width: state.width + 10
    }
  }
  // ACTION 3 - Change the color
  if (type === "COLOR") {
    if (color === "red") {
      console.log("reducer")
      var newObject =  {
        ...state,
        color: "#ff0000"
      }
    } else if (color == "blue") {
      console.log("reducer")
      var newObject =  {
        ...state,
        color: "#0000ff"
      }
    }
  }

  return newObject;
}