import { ref, set, push, query, getDatabase } from "@firebase/database";
import { useCallback } from "react";
import { useDatabaseListData, useFirebaseApp } from "reactfire";
import { useAuth } from "./useAuth";

export const useFavorites = () => {
  const { user } = useAuth();
  const app = useFirebaseApp();
  const database = getDatabase(app);
  const favoritesRef = ref(
    database,
    `user-data/${user?.user_nicename}/favorites`
  );
  const favoritesQuery = query(favoritesRef);
  const { status, data: favorites } = useDatabaseListData(favoritesQuery);

  const pushFavorite = useCallback(
    (music) => {
      const newRef = push(favoritesRef);
      set(newRef, {
        ...music,
        createdAt: Date.now(),
        path: `user-data/${user?.user_nicename}/favorites/${newRef.key}`,
      });
    },
    [favoritesRef, user]
  );

  const removeFavorite = useCallback(
    (music) => {
      if (status !== "success") return;
      set(favoritesRef, {
        ...favorites.filter((value) => value?.id !== music?.id),
      });
    },
    [favorites, status, favoritesRef]
  );

  return {
    pushFavorite,
    favorites,
    status,
    removeFavorite,
  };
};
