import { Logo } from "../components/commons/Logo";
import { useForm } from "react-hook-form";
import "../scss/connect.scss";
import Nav from "../components/Nav";
import { useAuth } from "../hooks/useAuth";
import swal from "sweetalert2";

export function Connect() {
  const loginForm = useForm();
  const signUpForm = useForm();
  const { signup, login } = useAuth();

  const onSignupSubmit = (data) => {
    signup(data?.username, data?.password, data?.email)
      .then(() => console.log("success"))
      .catch((err) => {
        swal.fire({
          html: err.message,
          title: "Oopss",
          icon: "error",
        });
      });
  };

  const onLoginSubmit = (data) => {
    login(data?.username, data?.password)
      .then(() => console.log("logged in"))
      .catch((err) => {
        swal.fire({
          html: err.message,
          title: "Oopss",
          icon: "error",
        });
      });
  };

  return (
    <>
      <Nav></Nav>
      <div className="page-connect">
        <section className="section">
          <section className="connect">
            <div className="logo">
              <Logo />
            </div>

            <section className="connect-with-your-mail">
              {/*<div className="signup-login">*/}
              {/*    <span className="sign-up">SIGN UP</span>*/}
              {/*    <span className="log-in">LOG IN</span>*/}
              {/*</div>*/}
              <section className="forms">
                <form
                  className="log-in"
                  onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                >
                  <h1>Connexion</h1>

                  <label>
                    <b>User name</b>
                  </label>
                  <input
                    type="text"
                    {...loginForm.register("username", { required: true })}
                    placeholder="Type your username"
                  />

                  <label>
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    {...loginForm.register("password", { required: true })}
                    placeholder="Type your password"
                    name="password"
                    required
                  />

                  <input type="submit" id="submit" value="LOGIN" />
                </form>

                <div className="or">- OR -</div>

                <form
                  onSubmit={signUpForm.handleSubmit(onSignupSubmit)}
                  method="POST"
                  className="create-account"
                >
                  <h2>Create account</h2>

                  <label>
                    <b>User name</b>
                  </label>
                  <input
                    type="text"
                    {...signUpForm.register("username", { required: true })}
                    placeholder="Type your username"
                  />

                  <label>
                    <b>Email address</b>
                  </label>
                  <input
                    type="email"
                    {...signUpForm.register("email", { required: true })}
                    placeholder="Type your email"
                  />

                  <label>
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    {...signUpForm.register("password", { required: true })}
                    placeholder="Type your password"
                    name="password"
                  />

                  <label>
                    <b>Confirm your password</b>
                  </label>
                  <input
                    type="password"
                    placeholder="Re-type your password"
                    {...signUpForm.register("password", { required: true })}
                  />

                  <input type="submit" id="submit" value="CREATE ACCOUNT" />
                </form>
              </section>

              <span className="same-account">
                *the same account as{" "}
                <a href="https://www.tapehouse.shop">Tape House Shop</a>
              </span>

              <span className="account-email">
                Or create/log-in with socials
              </span>
            </section>

            <section className="connect-with-socials">
              <div className="sign-in-socials">
                <div className="google">
                  <div className="logo-socials">
                    <img
                      src="../static/logo/SVG/google-brands.svg"
                      alt="Logo Google"
                    />
                  </div>
                  <div className="span">
                    <span>Login with Google</span>
                  </div>
                </div>
                <div className="facebook">
                  <div className="logo-socials">
                    <img
                      src="../static/logo/SVG/facebook-f-brands.svg"
                      alt="Logo Facebook"
                    />
                  </div>
                  <div className="span">
                    <span>Login with Facebook</span>
                  </div>
                </div>
                <div className="apple">
                  <div className="logo-socials">
                    <img
                      src="../static/logo/SVG/apple-brands.svg"
                      alt="Logo Apple"
                    />
                  </div>
                  <div className="span">
                    <span>Login with Apple</span>
                  </div>
                </div>
              </div>

              <span className="same-account">
                *the same account as{" "}
                <a href="https://www.tapehouse.shop">Tape House Shop</a>
              </span>

              <span className="account-email">Or create/log-in with email</span>
            </section>
          </section>
        </section>
      </div>
    </>
  );
}
