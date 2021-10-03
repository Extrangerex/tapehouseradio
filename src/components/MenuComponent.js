/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import icons8Utilisateur96 from '../Ressources/PNG/icons8-utilisateur-96.png'

function Menu(){
    return(
        <div className="menu1">
        <div className="contain">
            <div className="menu-btn">
                <div className="circle">
                    <div className="eye"></div>
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
                <img src={icons8Utilisateur96} alt="Logo user" className="width-img"/>
                MY THR
                </a>
            <div className="download-apps">
                <a href="#" className="ios"><i className="fab fa-apple"></i>IOS APP</a>
                <a href="#"><i className="fab fa-google-play"></i>ANDROID APP</a>
            </div>
            <div className="social-icons">
                <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" className="spotify"><i className="fab fa-spotify"></i></a>
                <a href="#" className="youtube"><i className="fab fa-mixcloud"></i></a>
            </div>
        </div>
    </div> 
        );
}

export default Menu;