import { useCallback } from "react";
import consts from "../config/consts";
import { useFetch } from "./useFetch";

export const useAuth = () => {
  const { request } = useFetch();

  const user = JSON.parse(localStorage.getItem("AUTH-DATA"));

  const authenticated = user != null;

  const signout = useCallback(() => localStorage.removeItem("AUTH-DATA"), []);

  const login = useCallback(async (username, password) => {
    const result = await request(`${consts.apiBaseUrl}/jwt-auth/v1/token`, {
      data: {
        username,
        password,
      },
      method: "POST",
    });

    const json = await result.json();

    if (!json?.success) {
      throw { ...json, status: result.status };
    }

    localStorage.setItem("AUTH-DATA", JSON.stringify(json?.data));

    return json;
  }, []);

  const signup = useCallback(async () => {}, []);

  return {
    login,
    signout,
    user,
    authenticated
  };
};
