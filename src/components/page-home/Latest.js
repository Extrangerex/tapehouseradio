import React from "react";

function Latest() {
  return (
    <section className="latest">
      <div className="subscribe-banniere">
        <div className="block">
          <div className="title">
            <h1>
              {/* You want support us ?  */}
              TAPE HOUSE VIP
            </h1>
          </div>
          <div className="paragraphe">
            <p>
              {/* Running a radio is disproportionately expensive, and to help us keep going we need support. If everyone subscribed for € 1 per month, we could keep radio going for a very long time.

                        If you subscribe for € 2.50 per month, you will have access to the latest music broadcast on both lives, you can add favorite music to find them later, and you will have access to a 20% discount on the entire shop.  */}
              BECOME A VIP AND GET BENEFITS.
              <br />
              FROM <b>€2,50</b>/month
            </p>
          </div>
          <button>
            {" "}
            <a href="./connect.html">BECOME A VIP</a>{" "}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Latest;
