import styled from "styled-components";

export const Wrapper = styled.div`
  background: black;
  color: #ffffff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .left {
    height: calc(100vh);
  }
  .react-monaco-editor-container {
    overflow: auto;
  }
  .right {
    padding: 100px;
  }
`;
