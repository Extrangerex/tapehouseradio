import React from 'react';
import Menu from './components/MenuComponent';
import Nav from './components/NavComponent';
import BlockCaroussel from './components/BlockCarrousselComponent';
import Mixtapes from './components/MixtapesComponent';
import Latest from './components/LatestComponent';
import Players from './components/PlayersComponent';
import SendUs from './components/SendUsComponent';
import Footer from './components/FooterComponent';
import './CSS/main.css'
import IFrame from './components/IFramesComponent';

function App() {
  return (
    <>
      <Menu></Menu>
      <Nav></Nav>
      <BlockCaroussel></BlockCaroussel>
      <Mixtapes></Mixtapes>
      <Latest></Latest>
      <IFrame></IFrame>
      <Players></Players>
      <SendUs></SendUs>
      <Footer></Footer>
    </>
  );
}

export default App;
