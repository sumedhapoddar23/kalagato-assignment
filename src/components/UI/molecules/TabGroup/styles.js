import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 14px;
  .tab {
    display: flex;
    padding: 5px;
    border: 1px solid #1f1f1f;
    width: fit-content;
    margin: 0 5px;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
    }
    &.selected {
      border: 2px solid #2b2b2b;
    }
    .delete {
      margin: 0 5px;
    }
  }
  .add {
    &:hover {
      cursor: pointer;
    }
  }
`;
