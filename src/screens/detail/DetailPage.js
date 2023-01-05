import React, { useState } from "react";
import {Col, Container, Row, Image, Button, Modal} from "react-bootstrap";
import '../../assets/css/detail.css';
import Fire from "../../assets/images/icons/Fire.svg";
import Nft from "../../assets/images/nfts/704.jpeg";
import Office from "../../assets/images/nfts/office_boss_desk.svg";
import HeatScale from "../../assets/images/icons/102_HeatScale.svg";
import ETH from "../../assets/images/icons/ETH.svg";
import OpenSea from "../../assets/images/icons/OpenSea.svg";
import LooksRare from "../../assets/images/icons/LooksRare.svg";
import Maximize from "../../assets/images/icons/Maximize.svg";
import OwnerRank from "../../assets/images/icons/OwnerRank.svg";
import ShareonInstagram from "../../assets/images/icons/ShareonInstagram.svg";
import DownloadNote from "../../assets/images/icons/DownloadNote.svg";
import FavoriteNFT from "../../assets/images/icons/FavoriteNFT.svg";
import ShareonTwitter from "../../assets/images/icons/ShareonTwitter.svg";
import NoteLocation from "../../assets/images/icons/NoteLocation.svg";
import BossProximity from "../../assets/images/icons/BossProximity.svg";
import EmployeeName from "../../assets/images/icons/EmployeeName.svg";
import Steak from "../../assets/images/icons/Steak.svg";
import Position from "../../assets/images/icons/Position.svg";
import Message from "../../assets/images/icons/Message.svg";
import Doodle from "../../assets/images/icons/Doodle.svg";
import InkColor from "../../assets/images/icons/InkColor.svg";
import NoteColor from "../../assets/images/icons/NoteColor.svg";
import Pin from "../../assets/images/icons/Pin.svg";
import Magnet from "../../assets/images/icons/Magnet.svg";
import ForSaleinRealLife from "../../assets/images/icons/ForSaleinRealLife.svg";
import DistancetoHQ from "../../assets/images/icons/DistancetoHQ.svg";
import HomeSquareFootage from "../../assets/images/icons/HomeSquareFootage.svg";
import Bedrooms from "../../assets/images/icons/Bedrooms.svg";
import Bathrooms from "../../assets/images/icons/Bathrooms.svg";


function DetailPage() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="DetailPage">
      <Container>
        <div className="custom-padding mt-5">
          <Row>
            <Col md={5}>
              <Image src={Nft} className="thumbnail"/>
              <div className="text-right cursor-pointer">
                <Image src={Maximize} onClick={handleShow} />
              </div>
            </Col>
            <Col md={7}>
              <h1 className="custom-font-h1">iQuitNotes</h1>
              <h1 className="custom-font-h1">#07945</h1>
              <div className="d-flex align-items-baseline">
                <Image src={Fire} />
                <span className="rarity-title">RARITY</span>
              </div>
              <h7>8,746 of 20,000</h7>
              <div>
                <Image src={HeatScale} />
              </div>
              <div className="mt-2 mb-2 d-flex align-items-center">
                <Image src={ETH} width="28"/>
                <span className="price-eth">1.7 ETH</span>
                <span className="ms-2 price-dollar">($2,140)</span>
              </div>
              <div className="mt-4 mb-2"><button className="custom-button"><Image src={OpenSea} className="me-1"/> View on Opensea</button></div>
              <div className="mt-2 mb-2"><button className="custom-button"><Image src={LooksRare} className="me-1"/> View on LooksRare</button></div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="black-section mt-4">
        <Container>
          <div className="custom-padding">
            <Row>
              <Col md={5}>
                <div className="d-flex align-items-center mb-2">
                  <Image src={OwnerRank} className='me-1'/>
                  <span className="owner-title">OWNER RANK</span>
                </div>
                <p className="mb-0 text-white">0xF7128274D8...B3d4B2F50130</p>
                <p className="mb-0 text-white">Accrued $PTO: 3,270</p>
                <a className="mb-0 text-white" href="#">Ranked #388 on the Leaderboard</a>
              </Col>
              <Col md={7}>
                <div className="social mt-1">
                  <div className="first">
                    <Image src={FavoriteNFT} />
                    <div className="mt-1">
                      <a href="#" className="text-white fs-15">Favorite NFT</a>
                    </div>
                  </div>
                  <div className="second">
                    <Image src={DownloadNote} />
                    <div className="mt-1">
                      <a href="#" className="text-white fs-15">Download Note</a>
                    </div>
                  </div>
                  <div className="third">
                    <Image src={ShareonInstagram} />
                    <div className="mt-1">
                      <a href="#" className="text-white fs-15">Share on Instagram</a>
                    </div>
                  </div>
                  <div className="third">
                    <Image src={ShareonTwitter} />
                    <div className="mt-1">
                      <a href="#" className="text-white fs-15">Share on Twitter</a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container>
        <div className="custom-padding mt-4">
          <div className="d-flex align-items-center">
            <Image src={NoteLocation} className="me-1" />
            <span className="owner-title text-black">NOTE LOCATION</span>
          </div>
          <div>
            <span className="room-table me-2">Conference Room Table</span><span className="per">(2.5%)</span>
          </div>
          <Image src={Office} />
          <Row className="mt-4">
            <Col md={6}>
              <div className="d-flex align-items-center">
                <Image src={BossProximity} className="me-1" />
                <span className="owner-title text-black fw-bold">BOSS PROXIMITY</span>
              </div>
              <div className="mb-3">
                <span className="room-table me-2">42'3"</span><span className="per">(2.5%)</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={Steak} className="me-1" />
                <span className="owner-title text-black fw-bold">STAKING</span>
              </div>
              <div className="mb-3">
                <span className="room-table me-2">5 $PTO a day</span><span className="per">(37%)</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={Message} className="me-1" />
                <span className="owner-title text-black fw-bold">MESSAGE</span>
              </div>
              <div className="mb-3">
                <span className="room-table me-2">SEE YA!</span><span className="per">(5%)</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={Doodle} className="me-1" />
                <span className="owner-title text-black fw-bold">DOODLE</span>
              </div>
              <div className="mb-3">
                <span className="room-table me-2">Unicorn Cat</span><span className="per">(.25%)</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={InkColor} className="me-1" />
                <span className="owner-title text-black fw-bold">INK COLOR</span>
              </div>
              <div className="mb-3">
                <span className="room-table me-2">Black</span><span className="per">(63.7%)</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={NoteColor} className="me-1" />
                <span className="owner-title text-black fw-bold">NOTE COLOR</span>
              </div>
              <div className="mb-3">
                <span className="room-table me-2">Neon Blue</span><span className="per">(4.7%)</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={Pin} className="me-1" />
                <span className="owner-title text-black fw-bold">PIN</span>
              </div>
              <div className="mb-3">
                <span className="room-table me-2">None</span><span className="per">(47.7%)</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={Magnet} className="me-1" />
                <span className="owner-title text-black fw-bold">MAGNET</span>
              </div>
              <div className="mb-3">
                <span className="room-table me-2">None</span><span className="per">(98.3%)</span>
              </div>                        
            </Col>
            <Col md={6}>
              <div className="d-flex align-items-center">
                <Image src={EmployeeName} className="me-1" />
                <span className="owner-title text-black fw-bold">EMPLOYEE NAME</span>
              </div>
              <div className="mb-3">
                <span className="room-table me-2">Michael Boltkitten</span><span className="per">(20%)</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={Position} className="me-1" />
                <span className="owner-title text-black">POSITION</span>
              </div>
              <div className="mb-3">
                <span className="room-table me-2">Sr Director of AR/VR</span><span className="per">(0.01%)</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={ForSaleinRealLife} className="me-1" />
                <span className="owner-title text-black">HOME ADDRESS</span>
              </div>
              <div className="mb-3">
                <p className="mb-0 home-address">1706 Timber Ridge Dr,</p>
                <div><span className="home-address me-2">Austin, TX 78741</span><span className="per">(Only 1)</span></div>
                <p className="mb-0 home-address fw-bold">For Sale in Real Life</p>
                <p className="mb-0 room-table">View Property</p>
              </div>
              <div className="d-flex align-items-center">
                <Image src={DistancetoHQ} className="me-1" />
                <span className="owner-title text-black">DISTANCE TO HQ</span>
              </div>
              <div className="mb-3">
                <span className="room-table me-2">1.1 mi in traffic</span><span className="per">(.6%)</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={HomeSquareFootage} className="me-1" />
                <span className="owner-title text-black">HOME SQFT</span>
              </div>
              <div className="mb-3">
                <span className="room-table me-2">1,531</span><span className="per">(.003%)</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={Bedrooms} className="me-1" />
                <span className="owner-title text-black">BEDROOMS</span>
              </div>
              <div className="mb-3">
                <span className="room-table me-2">3</span><span className="per">(27.3%)</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={Bathrooms} className="me-1" />
                <span className="owner-title text-black">BATHROOMS</span>
              </div>
              <div className="mb-3">
                <span className="room-table me-2">3</span><span className="per">(21.5%)</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose} animation={false} className="custom-modal">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><Image src={Nft} className="modal-image"/></Modal.Body>
      </Modal>
    </div>
  );
}

export default DetailPage;
