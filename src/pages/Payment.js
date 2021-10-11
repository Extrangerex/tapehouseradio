import React from "react";

export function Payment() {
    return (

        <div className="section-payment">


            <img src="../static/logo/SVG/logo-shopFichier 3.svg" alt="Logo Tape House Radio" className="logo"
                 style={{width: '250px', marginBottom: '30px'}}/>


            <form className="form">

                <span>"Pay with Stripe"</span>

                <div className="field">
                    <input type="text" name="name" id="" placeholder="Name" required="required"/>
                </div>

                <div className="field">
                    <input type="email" name="email" id="" placeholder="Your@email.com" required="required"/>
                </div>

                <div className="field">
                    <input type="number" placeholder="Card number" required="required"/>
                </div>

                <div className="numbers">

                    <div className="field field-number-mm">
                        <input type="number" placeholder="mm" required="required"/>
                    </div>

                    <span className="light"/>

                    <div className="field field-number-yy">
                        <input type="number" placeholder="yy" required="required"/>
                    </div>

                    <div className="field field-number-cvc">
                        <input type="number" placeholder="cvc" required="required"/>
                    </div>

                </div>


                <button className="payment" type="submit">PAYMENT</button>

                <button type="submit" className="paypal">
                    <span>CHECK OUT WITH PAYPAL</span>
                </button>


                <span className="light">- OR -</span>

                <button className="button-pay-apple" type="submit">
                    <span>PAY WITH APPLE</span>
                </button>

            </form>


        </div>
    );
}
