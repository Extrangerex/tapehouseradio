import Footer from "../components/Footer";
import '../css/last.css';

export function Lasts() {
    const lastMusics = [
        {
            metaHour: '10:10',
            artists: 'Jazz Liberatorz',
            music: 'Fucking Game',
            img: '../static/png/codyFichier%2014.png'
        },
        {
            metaHour: '10:10',
            artists: 'Jazz Liberatorz',
            music: 'Fucking Game',
            img: '../static/png/crackazatFichier%2010.png'
        },
        {
            metaHour: '10:10',
            artists: 'Jazz Liberatorz',
            music: 'Fucking Game',
            img: '../static/png/ishmaelFichier%2017.png'
        },
        {
            metaHour: '10:10',
            artists: 'Jazz Liberatorz',
            music: 'Fucking Game',
            img: '../static/png/liberatorzFichier%2016.png'
        },
        {
            metaHour: '10:10',
            artists: 'Jazz Liberatorz',
            music: 'Fucking Game',
            img: '../static/png/matazzFichier%2013.png'
        },
        {
            metaHour: '10:10',
            artists: 'Jazz Liberatorz',
            music: 'Fucking Game',
            img: '../static/png/mfFichier%2015.png'
        },
        {
            metaHour: '10:10',
            artists: 'Jazz Liberatorz',
            music: 'Fucking Game',
            img: '../static/png/prozakFichier%2012.png'
        },
        {
            metaHour: '10:10',
            artists: 'Jazz Liberatorz',
            music: 'Fucking Game',
            img: '../static/png/ummFichier%2011.png'
        }
    ]

    return (

        <section className="all">
            <section className="header" id="top">
                <h1 className="title">
                    LAST JAZZ HOUSE
                </h1>
            </section>

            <div id="arrow-up">
                <a href="#top"><i className="fas fa-chevron-up" /></a>
            </div>

            <section className="content-jazz content">
                {lastMusics.map(music => (
                    <div className="last-music">
                        <img src={music.img} alt="Last one" className="img-one img" />
                        <div className="meta-hour">
                            <span>{music.metaHour}
                            </span>
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
    );
}
