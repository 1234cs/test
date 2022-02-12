import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNameAction, changeTestValue } from "../reducers";
const Index = () => {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    dispatch(changeTestValue(true));
  }, []);
  return (
    <>
      <h1>hi</h1>
      <button onClick={onClick}>누르면 옆에 값 변함.</button>
      {state.test ? "true" : "false"}
    </>
  );
};

export default Index;
