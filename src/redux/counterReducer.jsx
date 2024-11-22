const initialState = { counter: 0 };
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/add":
      return { ...state, counter: state.counter + 1 };
    case "counter/minus":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
