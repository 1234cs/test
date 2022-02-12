import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import reducer from "../reducers";
const configureStore = () => {
  const store = createStore(reducer);
  return store;
};

const wrapper = createWrapper(configureStore, {});

export default wrapper;
