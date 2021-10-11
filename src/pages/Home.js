import Footer from "../components/Footer";
import Latest from "../components/Latest";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import BlockCaroussel from "../components/page-home/BlockCarroussel";
import IFrame from "../components/page-home/IFrames";
import Mixtapes from "../components/page-home/Mixtapes";
import Players from "../components/page-home/Players";
import SendUs from "../components/SendUs";


export function Home() {
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