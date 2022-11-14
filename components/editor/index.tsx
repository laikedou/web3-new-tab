"use client";
import React from "react";
import MonacoEditor from "@monaco-editor/react";
import { defaultCode } from "./const";
type Props = {
  code?: string;
};

const Editor = (props: Props) => {
  const { code = defaultCode } = props;

  return (
    <MonacoEditor
      height="90vh"
      defaultLanguage="typescript"
      theme="vs-dark"
      defaultValue={code}
    />
  );
};

export default Editor;
