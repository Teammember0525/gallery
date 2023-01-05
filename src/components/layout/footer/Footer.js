import {Container, Row, Col, Image} from 'react-bootstrap';
import Twitter from '../../../assets/images/icons/Twitter.svg';
import Instagram from '../../../assets/images/icons/Instagram.svg';
import TikTok from '../../../assets/images/icons/TikTok.svg';

function Footer() {
  return (
    <div className='Footer'>
      <div className='footer-border'>
        <Container>
          <Row md={3} lg={3} xs={1}>
            <Col className='under'>
              <p className='footer-title'>About</p>
              <p className='footer-items'>Origin Story</p>
              <p className='footer-items'>About iQuitNotes NFTs</p>
              <p className='footer-items'>Career Consulting</p>
              <p className='footer-items'>Work Glossary</p>
            </Col>
            <Col className='under'>
              <p className='footer-title'>NFT Links</p>
              <p className='footer-items'>Win $1M</p>
              <p className='footer-items'>Buy NFTs</p>
              <p className='footer-items'>Gallery</p>
              <p className='footer-items'>Leaderboard</p>
            </Col> 
            <Col className='last'>
              <p className='footer-title'>Never Quit Believing</p>
              <p className='footer-items footer-items-mb'>iQuitNotes believes in your potential and</p>
              <p className='footer-items footer-items-mb'>is <a href="#">invested in your professional</a></p>
              <p className='footer-items footer-items-mb'><a href="#">development.</a> The iQuitNotes NFTs could</p>
              <p className='footer-items footer-items-mb'>provide a chance for you to <a href="#">win $1M!</a></p>
            </Col>
          </Row>
          <Row md={1} lg={1} xs={1}>
            <Col className='mt-3 social-part'>
              <a href='https://www.tiktok.com/@iquitnotes' target='_blank'><Image src={Twitter} width='24' className='me-3 social-icon'/></a>
              <a href='https://www.instagram.com/iquitnotes' target='_blank'><Image src={Instagram} width='24' className='me-3 social-icon' /></a>
              <a href='https://twitter.com/iquitnotes' target='_blank'><Image src={TikTok} width='24'  className='me-3 social-icon'/></a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='footer-bottom'>
        <a href='https://iquitnotes.com/'>© iQuitNotes</a>
      </div>
    </div>
  );
}

export default Footer;
