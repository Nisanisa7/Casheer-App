import React from "react";
import * as string from "../string";
const initialState = {
  profile: {},
  error: null,
  message: null,
  status: null,
};
const AuthReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        profile: action.payload,
      };
    case string.REGISTER_KASIR:
      return {
        ...state,
        profile: action.payload,
      };
    case string.LOGIN_ADMIN:
      return {
        ...state,
        profile: action.payload,
      };
    case string.REGISTER_ADMIN:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
