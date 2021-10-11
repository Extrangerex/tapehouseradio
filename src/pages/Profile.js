import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "../scss/profile.scss";

export function Profile() {
  let [index, setIndex] = useState(1);

  useEffect(() => {
    const onglets = document.querySelectorAll(".onglets");

    const contenu = document.querySelectorAll(".contenu");
    onglets.forEach((onglet) => {
      onglet.addEventListener("click", () => {
        if (onglet.classList.contains("active")) {
          return;
        } else {
          onglet.classList.add("active");
        }

        setIndex(onglet.getAttribute("data-anim"));

        for (let i = 0; i < onglets.length; i++) {
          if (onglets[i].getAttribute("data-anim") !== index) {
            onglets[i].classList.remove("active");
          }
        }

        for (let j = 0; j < contenu.length; j++) {
          if (contenu[j].getAttribute("data-anim") === index) {
            console.log(j);
            contenu[j].classList.add("activeContenu");
          } else {
            contenu[j].classList.remove("activeContenu");
          }
        }
      });
    });
  }, [index]);

  return (
    <div className="page-profile">
      <section className="account-page-profile spa" data-spa="12">
        <section className="all-content-profile">
          <section className="content-profile">
            <h1 style={{ fontSize: "25px" }}>CLUB HOUSE</h1>

            <div className="profile-sidebar">
              {/* <div className="profile-name">
                        <span className="hi">Hi,&nbsp;</span>
                        <span className="profile-name-name">
                            Theo Che Roces
                        </span>
                    </div>  */}
              <div className="profile-menu">
                <span className="profile-menu-favorites onglets" data-anim="1">
                  {/* <i className="far fa-heart"></i>  */}
                  <b>Favs</b>
                </span>

                <span className="profile-menu-latests onglets" data-anim="2">
                  {/* <i className="far fa-clock"></i> */}
                  <b>Lasts</b>
                </span>

                <span
                  className="profile-menu-infos onglets active"
                  data-anim="3"
                >
                  {/* <i className="fas fa-info"></i>  */}
                  <b>Account</b>
                </span>

                <span
                  className="profile-menu-subscriptions onglets"
                  data-anim="4"
                >
                  {/* <i className="fas fa-dollar-sign"></i> */}
                  <b>Plans</b>
                </span>

                <span className="profile-menu-payments onglets" data-anim="5">
                  {/* <i className="fas fa-shopping-cart"></i> */}
                  <b>Invoices</b>
                </span>
              </div>
            </div>

            <div className="profile-content">
              <div className="profile-content-favorites contenu" data-anim="1">
                <span>
                  To see your favorites, <br /> click here
                </span>

                <button className="spa-onglets" data-spa="10">
                  YOUR FAVS
                </button>
              </div>

              <div className="profile-content-latest contenu" data-anim="2">
                <span>
                  To see the latest music played on each radio station, <br />{" "}
                  click here
                </span>

                <button style={{ cursor: "pointer" }}>LATEST MUSIC</button>
              </div>

              <div
                className="profile-content-infos contenu activeContenu"
                data-anim="3"
              >
                <div className="you-are-connected">
                  <div className="you-are-connected-left">
                    <span>Account</span>
                  </div>
                  <div className="you-are-connected-right">
                    <span className="you-are-connected-with">
                      You are connected with &nbsp;
                    </span>
                    <span className="facebook-google-apple">Apple</span>
                  </div>
                </div>

                <div className="see-your-account">
                  <div className="you-are-connected-right">
                    <span className="you-are-connected-with">
                      For see your account, click here &nbsp;
                    </span>
                    <span className="facebook-google-apple">ACCOUNT</span>
                  </div>
                </div>

                <div className="trait"></div>

                <div className="newsletters">
                  <div className="newsletters-left">
                    <span className="newletters-title">Newletters</span>
                  </div>
                  <div className="newsletters-right">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="YOUR@EMAIL.COM"
                    />
                    <button>SEND</button>
                  </div>
                </div>

                <div className="trait"></div>

                <div className="log-out">
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Log-out</span>
                </div>
              </div>

              <div
                className="profile-content-subscriptions contenu"
                data-anim="4"
              >
                <span className="title">
                  Click on a plans to see the benefits
                </span>

                <div className="cards">
                  <div className="card-plan-one card spa-onglets" data-spa="13">
                    <span className="price">FREE</span>
                  </div>
                  <div className="card-plan-two card spa-onglets" data-spa="13">
                    <span className="price">
                      2,5€ <b> / Month</b>
                    </span>
                  </div>
                  <div
                    className="card-plan-three card spa-onglets"
                    data-spa="13"
                  >
                    <span className="price">
                      25€ <b> / Year</b>
                    </span>
                  </div>
                </div>

                {/* <button className="advantages">See advantages</button>  */}
              </div>

              <div className="profile-content-payments contenu" data-anim="5">
                <div className="title">
                  <span>The last 3 invoices</span>
                </div>
                <div className="invoices">
                  <hr />
                  <div className="invoice-one invoice">
                    <div className="dates">
                      <span className="date">03/02/21</span>
                    </div>
                    <div className="infos">
                      <span className="price">2,5€</span>
                      <div className="product">
                        <span className="product-info-one">Plan VIP</span>
                        <span className="product-info-two">Every month</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="invoice-two invoice">
                    <div className="dates">
                      <span className="date">03/02/21</span>
                    </div>
                    <div className="infos">
                      <span className="price">2,5€</span>
                      <div className="product">
                        <span className="product-info-one">Plan VIP</span>
                        <span className="product-info-two">Every month</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="invoice-three invoice">
                    <div className="dates">
                      <span className="date">03/02/21</span>
                    </div>
                    <div className="infos">
                      <span className="price">2,5€</span>
                      <div className="product">
                        <span className="product-info-one">Plan VIP</span>
                        <span className="product-info-two">Every month</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="button-view-all-invoices-div">
                  <button
                    className="button-all-invoices spa-onglets"
                    data-spa="15"
                  >
                    View all invoices
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="footer-page footer-page-account">
          <Footer></Footer>
        </section>
      </section>
    </div>
  );
}
