import { useSelector, useDispatch } from "react-redux";
export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Counter:{counter}</p>

      <button onClick={() => dispatch({ type: "counter/add" })}>Add</button>
      <button onClick={() => dispatch({ type: "counter/minus" })}>minus</button>
    </>
  );
}
