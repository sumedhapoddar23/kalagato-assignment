import React from "react";
import { Wrapper } from "./styles";
import Bot from "../../../../images/bot.png";
import User from "../../../../images/user.jpeg";

const Chat = ({ chatList, loading, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {chatList.map((text, index) => (
        <div className={`message`} key={index.toString()}>
          {index % 2 === 0 && <img src={User} alt="" />}
          <span className="text">{text}</span>
          {index % 2 !== 0 && <img src={Bot} alt="" />}
        </div>
      ))}
    </Wrapper>
  );
};

export default Chat;
