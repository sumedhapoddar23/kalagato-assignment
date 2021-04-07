import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataStart, onTabDataChange } from "./store/actions";
import { Wrapper } from "./styles";
import Input from "../../components/UI/atoms/Input";
import Editor from "../../components/UI/atoms/Editor";
import TabGroup from "../../components/UI/molecules/TabGroup";
import Chat from "../../components/UI/organisms/Chat";

const Homepage = ({}) => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(0);
  const [message, setMessage] = useState("");

  const dispatchOnTabDataChange = useCallback(
    (argArr) => dispatch(onTabDataChange(argArr)),
    [dispatch]
  );

  const dispatchFetchData = useCallback(
    (argArr) => dispatch(fetchDataStart(argArr)),
    [dispatch]
  );

  const tabs = useSelector((state) => state.homepageReducer.tabs);

  const chatList = useSelector((state) => state.homepageReducer.chatList);

  const loading = useSelector((state) => state.homepageReducer.loading);

  const editorDidMount = (editor) => {
    editor.focus();
  };

  const onChange = (newValue) => {
    dispatchOnTabDataChange({
      mode: "edit",
      name: tabs[selectedTab].name,
      code: newValue,
    });
  };

  const onTabClick = (index) => {
    setSelectedTab(index);
  };

  const onDeleteTabClick = (tab, index) => {
    dispatchOnTabDataChange({
      mode: "delete",
      tab: tab,
    });
    if (index === selectedTab) {
      setSelectedTab(index - 1);
    }
  };

  const onAddTabClick = () => {
    dispatchOnTabDataChange({
      mode: "add",
      tab: {
        name: `newscript${tabs.length + 1}.js`,
        code: "/* This is an empty tab.*/",
      },
    });
    setSelectedTab(tabs.length);
  };

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const onEnterPress = (e) => {
    dispatchFetchData({
      message: message,
      code: `(${tabs[0].code})('${message}')`,
    });
    setMessage("");
  };

  return (
    <Wrapper>
      <div className="left">
        <TabGroup
          tabs={tabs}
          onTabClick={onTabClick}
          selectedTab={selectedTab}
          onDeleteTabClick={onDeleteTabClick}
          onAddTabClick={onAddTabClick}
        />
        <Editor
          width="90%"
          height="100%"
          value={tabs[selectedTab] ? tabs[selectedTab].code : ""}
          onChange={onChange}
          editorDidMount={editorDidMount}
        />
      </div>
      <div className="right">
        <Chat loading={loading} chatList={chatList} />
        <Input
          placeholder="Type message here..."
          value={message}
          onChange={onMessageChange}
          onEnterPress={onEnterPress}
        />
      </div>
    </Wrapper>
  );
};

export default Homepage;
