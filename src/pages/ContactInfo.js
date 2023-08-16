import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactShow from '../jsonfiles/contacts.json'
import CV from '../assets/chinapickeringCV.pdf'
import '../styles/ContactInfo.css';




function Contacts(props){
  return (
    <Row className='linkImageText'>
      <Col className='icons' xs={2}>
      <a href={props.link} target="_blank" rel="contactlink"  className='contactURL pt-2'>
      <img src={props.icon} className='linkImage my-2' alt='contact icons'/>
      </a>
      </Col>
      <Col xs={10} className='linksAndInfo'>
      <p className='contactName'>{props.name}</p>
      <p className='phoneEmail'>{props.show}</p>
      </Col>
    </Row>
  )
}


function ContactInfo() {
  return (
    <Container className='contactLinks '>
      <Row className='contactLinksRow d-flex justify-content-center'>
        {ContactShow.map((link) => (
          <Contacts
          icon ={link.icon}
          link={link.link}
          name={link.name}
          show={link.show}
          />
        ))}
      </Row>
      <Row className="CV">
        <Col>
        <a href={CV} target="_blank" rel="CV link" className='CVLink'>
        <img className='CVIcon ml-10' src='/images/cv.png' alt='CV icon'></img>
        </a>
        </Col>
        <Col>
        <p className='CVText mt-10'>CV</p>
        </Col>

      </Row>
    </Container>
  )
}

export default ContactInfo
