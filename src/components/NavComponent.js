/* eslint-disable react/style-prop-object */
import React from 'react'
import icons8Utilisateur96 from '../Ressources/PNG/icons8-utilisateur-96.png';
import nouveaulogonoirFichier from '../Ressources/SVG/nouveaulogonoirFichier 3.png';
import icons8Jouer90 from '../Ressources/PNG/icons8-jouer-90.png';

function Nav(){
    return(<section className="nav">
    <div className="navtop">
        <div className="left">
            <img src={nouveaulogonoirFichier} alt="Logo THR" className="logo width-nav-img"/>
            <ul>
                <a href="#radio"><li>RADIOS</li></a>
                <a href="#mixtapes"><li>MIXTAPES</li></a>
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
                <a href="./connect.html"><li className="account"><img src={icons8Utilisateur96} alt="Logo user" className="width-img" />MY THR</li></a>
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
                        <div className="controls"><i className="fas fa-play " id="btnPlay"></i>
                                <i className="fas fa-pause "id="btnPause"></i> 
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
                {/*<!-- <div className="current-music img">
                        <img src="" className="pochette" id="cover" alt="" style="width: 32px; height: 32px; border: 1px solid white;">
                    </div>
                    <div className="radioStream">
                        <audio id="jp_audio_1" preload="metadata"></audio>
</div> -->*/}
            </div>
        </div>
        <div className="playerright">
            <div className="live">
                <span>LIVE 2</span>
                <div className="pointlive"></div>
            </div>
            <div className="player">
                <img src={icons8Jouer90} alt="" className="play-ico-width" />
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
            </div>
        </div>
    </div>
</section>
);
}
export default Nav;