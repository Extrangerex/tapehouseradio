import React from "react";
import playSolid from '../../static/svg/play-solid.svg';


function Mixtapes(){
    return(
        <section className="mixtapes" id="mixtapes">
        <span className="title">MIXTAPES</span>

        <div className="all">
            <div className="card card-one">
                <div className="metas">
                </div>
                <div className="blockplay">
                    <img src={playSolid} alt="" />
                </div>
            </div>

            <div className="card card-two">
                <div className="metas">
                </div>
                <div className="blockplay">
                    <img src={playSolid} alt="" />
                </div>
            </div>

            <div className="card card-three">
                <div className="metas">
                </div>
                <div className="blockplay">
                    <img src={playSolid} alt="" />
                </div>
            </div>

            <div className="card card-four">
                <div className="metas">
                </div>
                <div className="blockplay">
                    <img src={playSolid} alt="" />
                </div>
            </div>

            <div className="card card-five">
                <div className="metas">
                </div>
                <div className="blockplay">
                    <img src={playSolid} alt="" />
                </div>
            </div>

            <div className="card card-six">
                <div className="metas">
                </div>
                <div className="blockplay">
                    <img src={playSolid} alt="" />
                </div>
            </div>
            
        </div>
    </section>
        );
}

export default Mixtapes;
