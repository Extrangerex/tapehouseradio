import React from 'react';
import './css/main.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Connect } from './pages/Connect';
import { Favorites } from './pages/Favorites';
import { Lasts } from './pages/Lasts';
import { Payment } from './pages/Payment';
import { Prices } from './pages/Prices';
import { Profile } from './pages/Profile';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faMixcloud, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';



function App() {

  library.add([faFacebook, faInstagram, faMixcloud, faSpotify, faYoutube]);



  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/connect" component={Connect} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/lasts" component={Lasts} />
        <Route path="/payment" component={Payment} />
        <Route path="/prices" component={Prices} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
