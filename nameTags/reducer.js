const initialState = [
  {name: "Kamilah"},
  {name: "Stuart"}
];

const reducer = (state = initialState, action) => {
  // Handle actions here - make sure you don't mutate the state!
  const { type } = action;

  // Add a Name Tag
  if (type === "NEW-TAG") {
    var newState = [
      ...state,
      {
        name: String(nameBox.value)
      }
    ]
  }
  
  return newState;
}