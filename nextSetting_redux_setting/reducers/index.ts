import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  test: false,
  name: "siwon",
};

export const changeTestValue = (data) => {
  return {
    type: "CHANGE_TEST_VALUE",
    data: !data,
  };
};
export const changeNameAction = (data) => {
  return {
    type: "CHANGE_NAME",
    data,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case "CHANGE_TEST_VALUE":
      return {
        ...state,
        test: action.data,
      };
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.data,
      };
    default:
      return state;
  }
};

export default rootReducer;
