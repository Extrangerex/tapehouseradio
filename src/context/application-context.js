import { createContext, useCallback, useEffect, useRef, useState } from "react";

const defaultApplicationContextValue = {
  user: null,
  setUser: null,
  handlePlayStream1: null,
  handlePlayStream2: null,
  handlePause: null,
  isPlayingPlayer1: null,
  isPlayingPlayer2: null,
  player1Ref: null,
  player2Ref: null,
};

export const ApplicationContext = createContext(defaultApplicationContextValue);

export function ApplicationContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [isPlayingPlayer1, setIsPlayingPlayer1] = useState(false);
  const [isPlayingPlayer2, setIsPlayingPlayer2] = useState(false);
  const player1Ref = useRef();
  const player2Ref = useRef();

  const handlePlayStream1 = useCallback(() => {
    player2Ref.current.setAttribute("src", null);
    player1Ref.current.setAttribute(
      "src",
      "https://manager6.streamradio.fr:1605/stream"
    );

    player1Ref.current.play();
    setIsPlayingPlayer1(true);
    setIsPlayingPlayer2(false);
  }, []);

  const handlePlayStream2 = useCallback(() => {
    player2Ref.current.setAttribute(
      "src",
      "https://manager6.streamradio.fr:2445/stream"
    );
    player1Ref.current.setAttribute("src", null);

    player2Ref.current.play();
    setIsPlayingPlayer1(false);
    setIsPlayingPlayer2(true);
  }, []);

  const handlePause = useCallback((refObject) => {
    if (refObject.current.getAttribute("id") === "jp_audio_0") {
      setIsPlayingPlayer1(false);
    } else {
      setIsPlayingPlayer2(false);
    }

    refObject.current.setAttribute("src", null);
  }, []);

  useEffect(() => {
    const authJson = window.localStorage.getItem("AUTH-DATA");

    if (authJson) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <ApplicationContext.Provider
      value={{
        user,
        setUser,
        player1Ref,
        player2Ref,
        handlePlayStream1,
        handlePlayStream2,
        handlePause,
        isPlayingPlayer1,
        isPlayingPlayer2,
      }}
    >
      <audio ref={player1Ref} id="jp_audio_0" preload="metadata"></audio>
      <audio ref={player2Ref} id="jp_audio_1" preload="metadata"></audio>
      {children}
    </ApplicationContext.Provider>
  );
}
