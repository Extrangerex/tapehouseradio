import "../scss/prices.scss";

export function Prices() {
  return (
    <div className="page-prices">
      <section className="content-prices">
        <section className="cards">
          <div className="free card">
            <span className="pricetitle">FREE</span>
            <h1>FREE</h1>
            <div className="button1">CONTINUE</div>
            <div className="board">
              <span className="access">
                <i className="fas fa-check" /> &nbsp; Only 2 Radios :'(
              </span>
              <span className="latests">
                <i className="fas fa-times times" /> &nbsp; View latests musics
              </span>
              <span className="favorits">
                <i className="fas fa-times times" /> &nbsp; Add musics on your
                favorits
              </span>
              <span className="discounts">
                <i className="fas fa-times times" /> &nbsp; -20% on the shop
              </span>
              <span className="engagement">
                <i className="fas fa-check" /> &nbsp; Free
              </span>
            </div>
          </div>

          <div className="monthly card">
            <span className="pricetitle">MONTHLY</span>
            <h1>
              2,5€<b className="details">/MONTH</b>
            </h1>
            <div className="button3">PURCHASE</div>
            <div className="board">
              <span className="access">
                <i className="fas fa-check" /> &nbsp; 8 Radios
              </span>
              <span className="latests">
                <i className="fas fa-check" /> &nbsp; View latests musics
              </span>
              <span className="favorits">
                <i className="fas fa-check" /> &nbsp; Add musics on your
                favorits
              </span>
              <span className="discounts">
                <i className="fas fa-check" /> &nbsp; -20% on the shop
              </span>
              <span className="engagement">
                <i className="fas fa-check" /> &nbsp; Whithout engagement
              </span>
            </div>
          </div>

          <div className="annual card">
            <span className="pricetitle">ANNUAL</span>
            <h1>
              25€<b className="details">/YEAR</b>
            </h1>
            <div className="button3">PURCHASE</div>
            <div className="board">
              <span className="access">
                <i className="fas fa-check" /> &nbsp; 8 Radios
              </span>
              <span className="latests">
                <i className="fas fa-check" /> &nbsp; View latests musics
              </span>
              <span className="favorits">
                <i className="fas fa-check" /> &nbsp; Add musics on your
                favorits
              </span>
              <span className="discounts">
                <i className="fas fa-check" /> &nbsp; -20% on the shop
              </span>
              <span className="engagement">
                <i className="fas fa-check" /> &nbsp; Whithout engagement
              </span>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
