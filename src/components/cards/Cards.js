import { Container, Image } from "react-bootstrap";
import Nft from "../../assets/images/nfts/704.jpeg";
import Fire from "../../assets/images/icons/Fire.svg";
import HeatScale from "../../assets/images/icons/102_HeatScale.svg";

function Card () {
  return (
    <div className="Card mb-3">
        <div className="zoom-effect-container">
          <div className="image-card">
            <Image src={Nft} className="card-image"/>
          </div>
        </div>
        <div className="out-container">
          <div className="nft-content">
            <div className="first"><Image src={Fire} width='28'/></div>
            <div className="second">
              <a className="mb-0" href="/detail">iQuitNotes #09275</a>
              <Image src={HeatScale}/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Card;