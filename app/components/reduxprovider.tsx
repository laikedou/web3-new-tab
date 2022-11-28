"use client";
import store from "../store";

import { Provider } from "react-redux";

import React, { PropsWithChildren } from "react";

const reduxprovider = (props: PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default reduxprovider;
