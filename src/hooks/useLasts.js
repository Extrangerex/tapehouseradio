import { useCallback, useState } from "react";
import { useFetch } from "./useFetch";

export const useLasts = () => {
  const { request } = useFetch();
  const [lastMusics1, setLastMusics1] = useState([]);
  const [lastMusics2, setLastMusics2] = useState([]);

  const live1Url =
    "https://manager6.streamradio.fr:1590/api/v2/history/?format=json";

  const live2Url =
    "https://manager6.streamradio.fr:2430/api/v2/history/?format=json";

  const getLastMusics = useCallback(
    ( limit = 100, id = 1 ) => {
      request(`${id === 1 ? live1Url : live2Url}&limit=${limit ?? 100}`)
        .then((request) => request.json())
        .then((data) => {
          if (id === 1) {
            setLastMusics1(data?.results);
          } else if (id === 2) {
            setLastMusics2(data?.results);
          }
        });
    },
    [request]
  );


  return {
    lastMusics1,
    lastMusics2,
    getLastMusics
  };
};
