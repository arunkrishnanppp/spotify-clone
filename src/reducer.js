export const initialState = {
  user: null,
  playlists: [],
  playingSong: false,
  item: null,
  // token:
  //   "BQCnmVBCyh-xSP_IEpKqKXLRl9y5cn8x1Yy46AwxHrezn3Ep5qh9iqkU0yxcsMtPicfjkDkz4_muitHr3WnZPycVEgbz6VpKDu-zQZHptgx7Zvii9RTvatZBRqHrEeThn0VaYSbtL5Zlarkh4RbBzCyaqydHMwPj-0ZvyO1ZrBIc7KAYjsli",
};

const reducer = (state, action) => {
  console.log(action);

  // action will have two typestype and [payload]
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAY_LIST":
      return { ...state, playlists: action.playlists };
    case "DISCOVER_WEEKLY":
      return { ...state, discover_weekly: action.discover_weekly };
    default:
      return state;
  }
};
export default reducer;
