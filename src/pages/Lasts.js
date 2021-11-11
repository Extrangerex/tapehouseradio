import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useLasts } from "../hooks/useLasts";
import "../scss/last.scss";
import { useEffect } from "react";

export function Lasts({ id }) {
  const { lastMusics1, lastMusics2, getLastMusics } = useLasts();

  const getMetaHour = (ts) => {
    const date = new Date(ts);
    return `${date?.getHours()}:${date?.getMinutes()}`;
  };

  useEffect(() => {
    if (!lastMusics1 || lastMusics1?.length < 1) {
      getLastMusics(null, 1);
    }

    if (!lastMusics2 || lastMusics2.length < 1) {
      getLastMusics(null, 2);
    }
  }, [lastMusics1, lastMusics2, getLastMusics]);

  return (
    <>
      <Nav></Nav>
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
            {lastMusics1.map((music) => (
              <div className="last-music">
                <img
                  src={music?.img_large_url}
                  alt="Last one"
                  className="img-one img"
                />
                <div className="meta-hour">
                  <span>{getMetaHour(music?.ts)}</span>
                </div>
                <div className="meta-artist">
                  <span>{music.author}</span>
                </div>
                <div className="meta-music">
                  <span>{music.title}</span>
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
    </>
  );
}
