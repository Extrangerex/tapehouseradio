import { getAuth, signInAnonymously } from "@firebase/auth";
import { useCallback, useEffect } from "react";
import { useFirebaseApp } from "reactfire";
import consts from "../config/consts";
import { FetchError } from "../models/Error";
import { useFetch } from "./useFetch";

export const useAuth = () => {
  const { request } = useFetch();

  const app = useFirebaseApp();

  const auth = getAuth(app);

  const user = JSON.parse(localStorage.getItem("AUTH-DATA"));

  const authenticated = user != null;

  const signout = useCallback(() => localStorage.removeItem("AUTH-DATA"), []);

  const login = useCallback(
    async (username, password) => {
      const result = await request(`${consts.apiBaseUrl}/jwt-auth/v1/token`, {
        data: {
          username,
          password,
        },
        method: "POST",
      });

      const json = await result.json();

      if (!json?.success) {
        throw FetchError({ ...json }, result.status);
      }

      localStorage.setItem("AUTH-DATA", JSON.stringify(json?.data));

      return json;
    },
    [request]
  );

  const signup = useCallback(
    async (username, password, email) => {
      const result = await request(`${consts.apiBaseUrl}/wp/v2/users`, {
        data: {
          username,
          password,
          email,
        },
        method: "POST",
      });

      const json = await result.json();

      if (!json?.success) {
        throw FetchError({ ...json }, result.status);
      }
      
      return json;
    },
    [request]
  );

  useEffect(() => {
    auth.onAuthStateChanged((credential) => {
      if (!credential) signInAnonymously(auth);
    });
  }, [auth]);

  return {
    login,
    signout,
    user,
    authenticated,
    signup,
  };
};
