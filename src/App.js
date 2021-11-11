import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Connect } from "./pages/Connect";
import { Favorites } from "./pages/Favorites";
import { Lasts } from "./pages/Lasts";
import { Payment } from "./pages/Payment";
import { Prices } from "./pages/Prices";
import { Profile } from "./pages/Profile";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faApple,
  faFacebook,
  faFacebookF,
  faGoogle,
  faGooglePlay,
  faInstagram,
  faMixcloud,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { ApplicationContextProvider } from "./context/application-context";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./config/firebase";
import { MoonLoader } from "react-spinners";

function App() {
  library.add([
    faFacebook,
    faInstagram,
    faMixcloud,
    faSpotify,
    faYoutube,
    faPlay,
    faPause,
    faApple,
    faGoogle,
    faGooglePlay,
    faFacebookF,
  ]);

  return (
    <Suspense fallback={<MoonLoader></MoonLoader>}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <ApplicationContextProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/connect" component={Connect} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/lasts/1">
                <Lasts id="1"></Lasts>
              </Route>
              <Route path="/lasts/2">
                <Lasts id="2"></Lasts>
              </Route>
              <Route path="/payment" component={Payment} />
              <Route path="/prices" component={Prices} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </Router>
        </ApplicationContextProvider>
      </FirebaseAppProvider>
    </Suspense>
  );
}

export default App;
