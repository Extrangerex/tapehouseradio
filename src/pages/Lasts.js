import Footer from "../components/Footer";
import "../scss/last.scss";

import codyFichier14 from "../static/png/codyFichier 14.png";
import crackazatFichier10 from "../static/png/crackazatFichier 10.png";
import ishmaelFichier17 from "../static/png/ishmaelFichier 17.png";
import liberatorzFichier16 from "../static/png/liberatorzFichier 16.png";
import matazzFichie13 from "../static/png/matazzFichier 13.png";
import mfFichier15 from "../static/png/mfFichier 15.png";
import prozakFichier12 from "../static/png/prozakFichier 12.png";
import ummFichier11 from "../static/png/ummFichier 11.png";

export function Lasts() {
  const lastMusics = [
    {
      metaHour: "10:10",
      artists: "Jazz Liberatorz",
      music: "Fucking Game",
      img: codyFichier14,
    },
    {
      metaHour: "10:10",
      artists: "Jazz Liberatorz",
      music: "Fucking Game",
      img: crackazatFichier10,
    },
    {
      metaHour: "10:10",
      artists: "Jazz Liberatorz",
      music: "Fucking Game",
      img: ishmaelFichier17,
    },
    {
      metaHour: "10:10",
      artists: "Jazz Liberatorz",
      music: "Fucking Game",
      img: liberatorzFichier16,
    },
    {
      metaHour: "10:10",
      artists: "Jazz Liberatorz",
      music: "Fucking Game",
      img: matazzFichie13,
    },
    {
      metaHour: "10:10",
      artists: "Jazz Liberatorz",
      music: "Fucking Game",
      img: mfFichier15,
    },
    {
      metaHour: "10:10",
      artists: "Jazz Liberatorz",
      music: "Fucking Game",
      img: prozakFichier12,
    },
    {
      metaHour: "10:10",
      artists: "Jazz Liberatorz",
      music: "Fucking Game",
      img: ummFichier11,
    },
  ];

  return (
    <div className="page-lasts ">
      <section className="all">
        <section className="header" id="top">
          <h1 className="title">LAST JAZZ HOUSE</h1>
        </section>

        <div id="arrow-up">
          <a href="#top">
            <i className="fas fa-chevron-up" />
          </a>
        </div>

        <section className="content-jazz content">
          {lastMusics.map((music) => (
            <div className="last-music">
              <img src={music.img} alt="Last one" className="img-one img" />
              <div className="meta-hour">
                <span>{music.metaHour}</span>
              </div>
              <div className="meta-artist">
                <span>{music.artists}</span>
              </div>
              <div className="meta-music">
                <span>{music.music}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="footer">
          <section className="send-your-productions">
            <div className="content-footer">
              <div className="titles">
                <div className="title">SEND US YOUR PRODUCTIONS</div>
                <div className="subtitle">
                  ONLY IF IT'S IN THE STYLE OF OUR RADIOS
                </div>
              </div>

              <div className="mail">
                <span>admin@tapehouse.live</span>
              </div>
            </div>
          </section>

          <Footer></Footer>
        </section>
      </section>
    </div>
  );
}
