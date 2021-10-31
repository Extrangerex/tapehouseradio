import { useCallback } from "react";

export const useFetch = () => {
  const request = useCallback(
    /**
     *
     * @param {string} url
     * @param { method?: string, data?: any } options
     * @returns
     */
    (url, options) => {
      return fetch(url, {
        method: options?.method ?? "GET",
        body: JSON.stringify(options?.data),
        headers: { "Content-Type": "application/json" },
      }).then(async (result) => {
        if (result.status !== 200) {
          throw await result?.json();
        }

        return result;
      });
    },
    []
  );

  return { request };
};
