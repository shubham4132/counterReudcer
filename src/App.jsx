import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/counter";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}
