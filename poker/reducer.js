const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

function getRandomFace() {
  var letters = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
  for (var i = 0; i < 1; i++) {
    face = letters[Math.floor(Math.random() * 13)];
  }
  return face;
}

function getRandomSuit() {
  var letters = 'SCHD';
  for (var i = 0; i < 1; i++) {
    suit = letters[Math.floor(Math.random() * 4)];
  }
  return suit;
}

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, card } = action;

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if (type === 'RANDOM') {
      if (card === 1) {
        var newState = [
          {
            value: getRandomFace(),
            suit: getRandomSuit()
          },
          ...state.slice(1)
        ]
      } else if (card === 2) {
        var newState = [
          ...state.slice(0, 1),
          {
            value: getRandomFace(),
            suit: getRandomSuit()
          }
        ]
      }
    }
    return newState;
}