/* eslint-disable react/style-prop-object */
import React, { useCallback, useState } from "react";
import icons8Utilisateur96 from "../static/png/icons8-utilisateur-96.png";
import nouveaulogonoirFichier from "../static/svg/nouveaulogonoirFichier 3.png";
import icons8Jouer90 from "../static/png/icons8-jouer-90.png";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Nav() {
  const menuBtn = document.querySelector(".menu-btn");

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuBtn = useCallback(() => {
    $(".menu1").toggleclassName("isOpen");

    if (!menuOpen) {
      menuBtn.classNameList.add("open");
      setMenuOpen(true);
    } else {
      menuBtn.classNameList.remove("open");
      setMenuOpen(false);
    }
  }, [menuOpen, menuBtn]);

  return (
    <>
      <div className="menu1">
        <div className="contain">
          <div className="menu-btn" onClick={() => handleMenuBtn}>
            <div className="circle">
              <div className="eye"></div>
            </div>
          </div>

          <div className="navigation">
            <a href="#radio" className="radio">
              RADIOS
            </a>
            <a href="#mixtapes">MIXTAPES</a>
            {/* <a href="#latest">
                    LATEST
                </a>  */}
          </div>
          <div className="button">
            <button>SUPPORT US</button>
          </div>
          <div className="others">
            <Link to="#" className="shop">
              SHOP
            </Link>
            <Link to="#">STUDIO</Link>
          </div>
          <Link to="/profile" className="account">
            <img
              src={icons8Utilisateur96}
              alt="Logo user"
              style={{ width: "15px" }}
            />
            MY THR
          </Link>
          <div className="download-apps">
            <Link to="#" className="ios">
              <FontAwesomeIcon icon={["fab", "apple"]} />
              IOS APP
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={["fab", "google-play"]} />
              ANDROID APP
            </Link>
          </div>
          <div className="social-icons">
            <Link to="#" className="facebook">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </Link>
            <Link to="#" className="instagram">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </Link>
            <Link to="#" className="spotify">
              <FontAwesomeIcon icon={["fab", "spotify"]} />
            </Link>
            <Link to="#" className="youtube">
              <FontAwesomeIcon icon={["fab", "mixcloud"]} />
            </Link>
          </div>
        </div>
      </div>

      <section className="nav">
        <div className="navtop">
          <div className="left">
            <img
              src={nouveaulogonoirFichier}
              alt="Logo THR"
              className="logo"
              style={{ width: "35px", marginLeft: "7px" }}
            />
            <ul>
              <a href="#radio">
                <li>RADIOS</li>
              </a>
              {/* <li>LATEST</li>  */}
              <a href="#mixtapes">
                <li>MIXTAPES</li>
              </a>
            </ul>
            <button>SUPPORT US</button>
            <div className="menu-btn">
              <div className="circle">
                <div className="eye"></div>
              </div>
            </div>
          </div>
          <div className="right">
            <ul>
              <li>SHOP</li>
              <li>STUDIO</li>
              <Link to="/connect">
                <li className="account">
                  <img
                    src={icons8Utilisateur96}
                    alt="Logo user"
                    style={{ width: "15px" }}
                  />
                  MY THR
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="navbottom">
          <div className="playerleft">
            <div className="live">
              <span>LIVE 1</span>
              <div className="pointlive"></div>
            </div>
            <div className="player">
              <div className="bouton">
                <div className="controls">
                  <FontAwesomeIcon icon={["fas", "play"]} />
                  <FontAwesomeIcon
                    icon={["fas", "pause"]}
                    style={{ display: "none" }}
                  />
                </div>
                <div className="radioStream">
                  <audio id="jp_audio_0" preload="metadata"></audio>
                </div>
              </div>
              <div className="metas">
                <div className="now">NOW :&nbsp;</div>
                <span className="artiste" id="artist">
                  Tape House
                </span>
                <span>&nbsp;-&nbsp;</span>
                <span className="titre" id="titre">
                  LIVE 1
                </span>
              </div>
              {/* <div className="current-music img">
                        <img src="" className="pochette" id="cover" alt="" style="width: 32px; height: 32px; border: 1px solid white;">
                    </div>
                    <div className="radioStream">
                        <audio id="jp_audio_1" preload="metadata"></audio>
                    </div>  */}
            </div>
          </div>
          {/* <div className="separation"></div>  */}
          <div className="playerright">
            <div className="live">
              <span>LIVE 2</span>
              <div className="pointlive"></div>
            </div>
            <div className="player">
              <img
                src={icons8Jouer90}
                alt=""
                style={{ width: "20px", height: "20px", margin: "0 10px" }}
              />
              <div className="btn-play-pause">
                <img src="" alt="" />
              </div>
              <div className="metas">
                <div className="now">NOW :&nbsp;</div>
                <div className="artist">
                  <span>TOUR MAUBOURG</span>
                </div>
                <div className="music">
                  <span>ALLEGRESSE</span>
                </div>
              </div>
              {/* <img src="./Ressources/jpg/img2.jpg" alt="Image musique en cours live 2" style="width: 32px; height: 32px; border: 1px solid white;">  */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Nav;
