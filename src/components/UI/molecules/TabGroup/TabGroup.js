import React from "react";
import { Wrapper } from "./styles";

const TabGroup = ({
  tabs,
  onTabClick,
  selectedTab,
  onDeleteTabClick,
  onAddTabClick,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      {tabs.map((tab, index) => (
        <div
          key={index.toString()}
          className={`tab ${index === selectedTab ? "selected" : ""}`}
          onClick={() => onTabClick(index)}
        >
          {tab.name}
          {index > 0 && (
            <div
              className="delete"
              onClick={() => onDeleteTabClick(tab, index)}
            >
              x
            </div>
          )}
        </div>
      ))}
      <div className="add" onClick={() => onAddTabClick()}>
        +
      </div>
    </Wrapper>
  );
};

export default TabGroup;
