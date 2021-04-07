import actionTypes from "./types";
import cloneDeep from "lodash/cloneDeep";
import find from "lodash/find";
import findIndex from "lodash/findIndex";

export const homepageReducer = (
  state = {
    tabs: [
      {
        name: "script.js",
        code: "function name (param) {return param;}",
      },
    ],
    loading: false,
    chatList: [],
  },
  action
) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_START:
      let chats = cloneDeep(state.chatList);
      chats.push(action.payload.message);
      chats.push(". . .");
      return {
        ...state,
        loading: true,
        chatList: chats,
      };

    case actionTypes.FETCH_DATA_SUCCESS:
      let chat = cloneDeep(state.chatList);
      chat[chat.length - 1] = action.payload;
      return {
        ...state,
        chatList: chat,
        loading: false,
      };

    case actionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.ON_TAB_DATA_CHANGE:
      let tabsData = cloneDeep(state.tabs);
      if (action.payload.mode === "add") {
        tabsData.push(action.payload.tab);
      } else if (
        action.payload.mode === "edit" &&
        find(tabsData, {
          name: action.payload.name,
        })
      ) {
        let item = find(tabsData, {
          name: action.payload.name,
        });
        let itemIndex = findIndex(tabsData, {
          name: action.payload.name,
        });
        item.code = action.payload.code;
        tabsData[itemIndex] = item;
      } else if (action.payload.mode === "delete") {
        tabsData = tabsData.filter(
          (tab) => tab.name !== action.payload.tab.name
        );
      }
      return {
        ...state,
        tabs: tabsData,
      };

    default:
      return state;
  }
};
