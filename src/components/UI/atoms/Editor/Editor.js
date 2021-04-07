import React from "react";
import MonacoEditor from "react-monaco-editor";

const Editor = ({ value, onChange, editorDidMount, ...rest }) => {
  return (
    <MonacoEditor
      language="javascript"
      theme="vs-dark"
      value={value}
      options={{
        selectOnLineNumbers: true,
      }}
      onChange={onChange}
      editorDidMount={editorDidMount}
      {...rest}
    />
  );
};

export default Editor;
