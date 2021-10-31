import { useCallback, useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export const useLasts = () => {
  const { request } = useFetch();
  const [lastMusics1, setLastMusics1] = useState([]);
  const live1Url =
    "https://manager5.streamradio.fr:1280/api/v2/history/?format=json";

  const getLastMusics = useCallback(
    (limit = 100) => {
      request(`${live1Url}&limit=${limit}`)
        .then((request) => request.json())
        .then((data) => {
          setLastMusics1(data?.results);
        });
    },
    [request]
  );

  useEffect(() => {
    if (!lastMusics1 || lastMusics1?.length < 1) {
      getLastMusics();
    }
  }, [lastMusics1, getLastMusics]);

  return {
    lastMusics1,
  };
};
