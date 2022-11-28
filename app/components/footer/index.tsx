"use client";
import { useAppDispatch, useAppSelector } from "#/app/hooks";
import { incremented } from "#/app/store/actions";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.user.count);
  return (
    <div>
      当前count{count}{" "}
      <button
        onClick={() => {
          dispatch(incremented());
        }}
      >
        add
      </button>
    </div>
  );
};

export default Footer;
