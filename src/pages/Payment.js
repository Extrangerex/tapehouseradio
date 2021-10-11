import React from "react";
import { useForm } from "react-hook-form";
import "../scss/payment.scss";

import logoShopFichier from "../static/logo/SVG/logo-shopFichier 3.svg";

export function Payment() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {};

  return (
    <div className="page-payment">
      <section className="section-payment">
        <img
          src={logoShopFichier}
          alt="Logo Tape House Radio"
          className="logo"
          style={{ width: "250px", marginBottom: "30px" }}
        />
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input
            type={"hidden"}
            {...register("action", { value: "create-payment" })}
          />

          <span>"Pay with Stripe"</span>

          <div className="field">
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
            />
          </div>

          <div className="field">
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Your@email.com"
            />
          </div>

          <div className="field">
            <input
              type="number"
              {...register("number", { required: true })}
              placeholder="Card number"
            />
          </div>

          <div className="numbers">
            <div className="field field-number-mm">
              <input
                type="number"
                {...register("expMonth", { required: true })}
                placeholder="mm"
              />
            </div>

            <span className="light" />

            <div className="field field-number-yy">
              <input
                type="number"
                {...register("expYear", { required: true })}
                placeholder="yy"
              />
            </div>

            <div className="field field-number-cvc">
              <input
                type="number"
                placeholder="cvc"
                {...register("cvc", { required: true })}
              />
            </div>
          </div>

          <button className="payment" type="submit">
            PAYMENT
          </button>

          <button className="paypal">
            <span>CHECK OUT WITH PAYPAL</span>
          </button>

          <span className="light">- OR -</span>

          <button className="button-pay-apple">
            <span>PAY WITH APPLE</span>
          </button>
        </form>
      </section>
    </div>
  );
}
