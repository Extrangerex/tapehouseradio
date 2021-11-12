import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Nav from "../components/Nav";
import cardBackWhiteFichier from "../static/svg/card-back-whiteFichier 1.svg";

import "../scss/favorites.scss";
import { useFavorites } from "../hooks/useFavorites";
export function Favorites() {
  const { favorites, status } = useFavorites();

  if (status !== "success") return <></>;

  return (
    <>
      <Nav></Nav>
      <div className="page-favorites">
        <div className="header-favorites">
          <h1 style={{ color: "white" }}>FAVORITES</h1>
        </div>
        <div className="favorites">
          {favorites?.map((music) => (
            <>
              <div className="card" style={{ color: "white" }}>
                <div className="contain-card">
                  <div className="card-content card-front">
                    <img src={music?.img_large_url} alt="Favorite" />
                    <div className="card-meta">
                      <p className="artist">{music?.author}</p>
                      <p className="title">{music?.title}</p>
                    </div>
                  </div>
                  <div className="card-content card-back">
                    <img
                      src={cardBackWhiteFichier}
                      alt="Card Back"
                      className="card-back-img"
                    />
                    <div className="content">
                      <h3 className="listen-on" style={{ color: "black" }}>
                        LISTEN ON
                      </h3>
                      <div className="icons">
                        <FontAwesomeIcon size={36} icon={["fab", "spotify"]} />
                        <FontAwesomeIcon size={36} icon={["fab", "apple"]} />
                        <FontAwesomeIcon size={36} icon={["fab", "deezer"]} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
