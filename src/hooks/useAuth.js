import { getAuth, signInAnonymously } from "@firebase/auth";
import { useCallback, useEffect } from "react";
import { useFirebaseApp } from "reactfire";
import consts from "../config/consts";
import { useFetch } from "./useFetch";

/**
 * user example
 * {"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3dwdGVzdCIsImlhdCI6MTYzNjM0ODg5OSwibmJmIjoxNjM2MzQ4ODk5LCJleHAiOjE2MzY5NTM2OTksImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.-PJ2LqabTEitIhJ6ZBlg2VL9OW5uo3MfReHBT7a25ik",
 * "user_email":"jopichardomartinez@gmail.com","user_nicename":"admin","user_display_name":"admin"}
 */

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

      localStorage.setItem("AUTH-DATA", JSON.stringify(json));

      return json;
    },
    [request]
  );

  const signup = useCallback(
    async (username, password, email) => {
      const result = await request(`${consts.apiBaseUrl}/users`, {
        data: {
          username,
          password,
          email,
        },
        method: "POST",
      });

      const json = await result.json();

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
