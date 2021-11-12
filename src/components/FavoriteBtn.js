import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import { useFavorites } from "../hooks/useFavorites";

export const FavoriteBtn = ({ music, size = 16 }) => {
  const { pushFavorite, removeFavorite, favorites, status } = useFavorites();

  const favs = useMemo(() => favorites, [favorites]);

  if (status !== "success") {
    return <></>;
  }

  return favs?.find((value) => value?.id === music?.id) != null ? (
    <div onClick={() => removeFavorite(music)}>
      <FontAwesomeIcon
        icon={["fas", "heart"]}
        style={{ color: "red" }}
        size={size}
      />
    </div>
  ) : (
    <div onClick={() => pushFavorite(music)}>
      <FontAwesomeIcon icon={["fas", "heart"]} color={"#fff"} size={size} />
    </div>
  );
};
