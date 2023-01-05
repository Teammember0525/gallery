import { Col, Container, Image, Form, Row } from "react-bootstrap";
import SideBar from "../../components/layout/sidebar/SideBar";
import Refresh from "../../assets/images/icons/Refresh.svg";
import Close from "../../assets/images/icons/Close.svg";
import Filter from "../../assets/images/icons/Filter.svg";
import Card from "../../components/cards/Cards";
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{'background' : 'none', 'padding' : '0px', 'border' : 'none'}} onClick={handleShow} >
        <Image className="filter-icon" src={Filter} width="24" />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SideBar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function HomePage() {
  
  const [close, setClose] = useState(true);

  return (
    <div className="HomePage">
      <Container>
        <Row>
          <Col md={3} className="pe-0 side-part">
            <div className="form-area">
              <SideBar />
            </div>
          </Col>
          <Col md={9} className="image-content">
            <Row>
              <Col xs={9} sm={9} md={6}>
                <Form.Label className="custom-label">808 iQuitNotes</Form.Label>
              </Col>
              <Col xs={3} sm={3} md={6} className="text-right">
                <Image src={Refresh} width="24" />
                <OffCanvasExample key="2" placement="end" name="end" />
              </Col>
            </Row>
            <Row md={1}>
              <Col className="pt-2 pb-3">
                <div className="filters me-4">
                  <span className="filter-title">FILTERS</span>
                  <span class="ms-2 custom-badge">1</span>
                </div>
                <div className="filter-options">
                  <div className="filter-content" style={{'display' : close == false ? 'none' : ''}}>
                    <div>
                      <span className="me-2 filter-font">NOTE COLOR: NEON BLUE</span>
                      <span className="closeimage"><Image src={Close} width='14' onClick={(e)=> setClose(false)}/></span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} sm={6} md={3}>
                <Card />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <Card />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <Card />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <Card />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <Card />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <Card />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <Card />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <Card />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <Card />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <Card />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <Card />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <Card />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <Card />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <Card />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>      
    </div>
  );
}

export default HomePage;
