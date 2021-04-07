import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 300px);
  overflow: auto;
  background-color: #1f1f1f;
  padding: 5px 15px 50px;
  margin: 0 0 10px;
  list-style: none;
  border-radius: 4px;
  box-shadow: 0 4px 8px 8px rgb(0 0 0 / 8%);

  .message {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  .message:nth-child(odd) {
    justify-content: start;
  }

  .message:nth-child(even) {
    justify-content: flex-end;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .text {
    border-radius: 16px;
    background-color: #404040;
    display: inline-block;
    margin: 0 10px;
    padding: 5px 15px;
  }
`;
