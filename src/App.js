import "./App.css";
import { useEffect, useState } from "react";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./spotify";

import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import Player from "./Components/Player";
const spotify = new SpotifyWebApi();
function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    // window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // setToken(Authtoken.access_token);
      dispatch({ type: "SET_TOKEN", token: _token });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        // console.log(user);
        dispatch({ type: "SET_USER", user: user });
      });
      spotify.getUserPlaylists().then((playlists) => {
        // console.log(playlists);
        dispatch({ type: "SET_PLAY_LIST", playlists: playlists });
      });

      spotify.getPlaylist("2g6fkDfDNKoa4G9mkUNmfM").then((playlist) => {
        console.log(playlist);
        dispatch({ type: "DISCOVER_WEEKLY", discover_weekly: playlist });
      });
    }
  }, []);

  console.log(user, token);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

// { prop drilling issue }
// the main isseu with many componenets in react is that we have to pass the props to lower end/
// thisissue is called props drilling
// the soliution is COntect API(Basic form of REDUX)

// There will be a data layer
// REact context api->Redux->FLux
