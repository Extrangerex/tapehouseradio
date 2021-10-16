import React from "react";
import Nav from "../components/Nav";

import "../scss/favorites.scss";
export function Favorites() {
  return (
    <>
      <Nav></Nav>
      <div className="page-favorites">
        <div className="header-favorites">
          <h1>FAVORITES</h1>
        </div>
        <div className="favorites">
          <div className="card">
            <div className="contain-card">
              <div className="card-content card-front">
                <img src="../static/png/codyFichier%2014.png" alt="Favorite" />
                <div className="card-meta">
                  <p className="artist">Cody Currie</p>
                  <p className="title">Beer Machine</p>
                </div>
              </div>
              <div className="card-content card-back">
                <img
                  src="../static/svg/card-back-whiteFichier 1.svg"
                  alt="Card Back"
                  className="card-back-img"
                />
                <div className="content">
                  <h3 className="listen-on" style={{ color: "black" }}>
                    LISTEN ON
                  </h3>
                  <div className="icons">
                    <i className="fab fa-spotify" />
                    <i className="fab fa-apple" />
                    <i className="fab fa-deezer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="contain-card">
              <div className="card-content card-front">
                <img
                  src="../static/png/liberatorzFichier%2016.png"
                  alt="Favorite"
                />
                <div className="card-meta">
                  <p className="artist">Jazz Liberatorz</p>
                  <p className="title">Clin d'oeil</p>
                </div>
              </div>
              <div className="card-content card-back">
                <img
                  src="../static/svg/card-back-whiteFichier 1.svg"
                  alt="Card Back"
                  className="card-back-img"
                />
                <div className="content">
                  <h3 className="listen-on" style={{ color: "black" }}>
                    LISTEN ON
                  </h3>
                  <div className="icons">
                    <i className="fab fa-spotify" />
                    <i className="fab fa-apple" />
                    <i className="fab fa-deezer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
