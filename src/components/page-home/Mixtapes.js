import React from "react";
import playSolid from "../../static/svg/play-solid.svg";

function Mixtapes() {
  return (
    <section className="mixtapes" id="mixtapes">
      <span className="title">MIXTAPES</span>

      <div className="all">
        <div className="card card-one">
          <div className="metas">
            {/* <div className="live">
                        <span className="on-live">ON LIVE</span>
                        <div className="pointlive"></div>
                    </div> 
                     <span className="name-radio">VINYLES</span>
                    <span className="now">NOW :</span>
                    <span className="artist">TOUR MAUBOURG</span>
                    <span className="music">ALLEGRESSE</span>  */}
          </div>
          <div className="blockplay">
            <img src={playSolid} alt="" />
          </div>
        </div>

        <div className="card card-two">
          <div className="metas">
            {/* <div className="live">
                        <span className="on-live">ON LIVE</span>
                        <div className="pointlive"></div>
                    </div> 
                     <span className="name-radio">DEEP HOUSE</span>
                    <span className="now">NOW :</span>
                    <span className="artist">TOUR MAUBOURG</span>
                    <span className="music">ALLEGRESSE</span>  */}
          </div>
          <div className="blockplay">
            <img src={playSolid} alt="" />
          </div>
        </div>

        <div className="card card-three">
          <div className="metas">
            {/* <div className="live">
                        <span className="on-live">ON LIVE</span>
                        <div className="pointlive"></div>
                    </div> 
                     <span className="name-radio">JAZZ HOUSE</span>
                    <span className="now">NOW :</span>
                    <span className="artist">TOUR MAUBOURG</span>
                    <span className="music">ALLEGRESSE</span>  */}
          </div>
          <div className="blockplay">
            <img src={playSolid} alt="" />
          </div>
        </div>

        <div className="card card-four">
          <div className="metas">
            <div className="live">
              <span className="on-live">ON LIVE</span>
              <div className="pointlive"></div>
            </div>
            <span className="name-radio">AMBIANT</span>
            <span className="now">NOW :</span>
            <span className="artist">TOUR MAUBOURG</span>
            <span className="music">ALLEGRESSE</span>
          </div>
          <div className="blockplay">
            <img src={playSolid} alt="" />
          </div>
        </div>

        <div className="card card-five">
          <div className="metas">
            {/* <div className="live">
                        <span className="on-live">ON LIVE</span>
                        <div className="pointlive"></div>
                    </div>  */}
            {/* <span className="name-radio">ABSTRACT</span>
                    <span className="now">NOW :</span>
                    <span className="artist">TOUR MAUBOURG</span>
                    <span className="music">ALLEGRESSE</span>  */}
          </div>
          <div className="blockplay">
            <img src={playSolid} alt="" />
          </div>
        </div>

        <div className="card card-six">
          <div className="metas">
            {/* <div className="live">
                        <span className="on-live">ON LIVE</span>
                        <div className="pointlive"></div>
                    </div>  */}
            {/* <span className="name-radio">RAP</span>
                    <span className="now">NOW :</span>
                    <span className="artist">TOUR MAUBOURG</span>
                    <span className="music">ALLEGRESSE</span>  */}
          </div>
          <div className="blockplay">
            <img src={playSolid} alt="" />
          </div>
        </div>

        {/* <div className="images">
                <img src="./Ressources/1x/-vinyleFichier 7.png" alt="">
            <img src="./Ressources/1x/-deephouseFichier 8.png" alt="">
            <img src="./Ressources/1x/-jazzhouseFichier 9.png" alt="">
            <img src="./Ressources/1x/-abstraitFichier 11.png" alt="">
            <img src="./Ressources/1x/-ambiantFichier 10.png" alt="">
            <img src="./Ressources/1x/--rapFichier 12.png" alt="">

            </div>  */}
      </div>
    </section>
  );
}

export default Mixtapes;
