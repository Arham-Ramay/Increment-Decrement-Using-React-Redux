const initialState = 0;

const changeNumber = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

export default changeNumber;