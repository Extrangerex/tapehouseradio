import React, { useCallback, useState } from 'react'
import icons8Utilisateur96 from '../static/png/icons8-utilisateur-96.png'
import $ from 'jquery';

function Menu() {


    // MenuMobile

    const menuBtn = document.querySelector(".menu-btn");

    const [menuOpen, setMenuOpen] = useState(false);


    const handleMenuBtn = useCallback(() => {
        $(".menu1").toggleClass("isOpen");

        if (!menuOpen) {
            menuBtn.classList.add("open");
            setMenuOpen(true);
        } else {
            menuBtn.classList.remove("open");
            setMenuOpen(false);
        }
    }, [$]);

    return (
        <div className="menu1">
            <div className="contain">
                <div className="menu-btn" onClick={() => handleMenuBtn}>
                    <div className="circle">
                        <div className="eye" />
                    </div>
                </div>

                <div className="navigation">
                    <a href="#radio" className="radio">
                        RADIOS
                    </a>
                    <a href="#mixtapes">
                        MIXTAPES
                    </a>
                </div>
                <div className="button">
                    <button>SUPPORT US</button>
                </div>
                <div className="others">
                    <a href="#" className="shop">
                        SHOP
                    </a>
                    <a href="#">STUDIO</a>
                </div>
                <a href="#" className="account">
                    <img src={icons8Utilisateur96} alt="Logo user" className="width-img" />
                    MY THR
                </a>
                <div className="download-apps">
                    <a href="#" className="ios"><i className="fab fa-apple" />IOS APP</a>
                    <a href="#"><i className="fab fa-google-play" />ANDROID APP</a>
                </div>
                <div className="social-icons">
                    <a href="#" className="facebook"><i className="fab fa-facebook-f" /></a>
                    <a href="#" className="instagram"><i className="fab fa-instagram" /></a>
                    <a href="#" className="spotify"><i className="fab fa-spotify" /></a>
                    <a href="#" className="youtube"><i className="fab fa-mixcloud" /></a>
                </div>
            </div>
        </div>
    );
}

export default Menu;
