import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyPicture from '../assets/me.png';
import Contact from './Contact';
import About from './AboutMe';
import Projects from './Projects';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import '../styles/Homepage.css';
import Particles from './Particles';



function Homepage() {

  const viewAbout = () => {
    console.log("Directing to about me page")
  }

  const viewContact = () => {
    console.log("Directing to contact page")
  }

  return (
    <>
      <div className='heroBanner'>
        <Container >
          <Row>
          <Particles 
                canvasClassName="example"
                height="120px"
                width="100vw"
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                        url: 'path/to/svg.svg'
                    }
                }} />
            <Col md={6} className='heroInfo'>
              <h1 className='name text-center'>China Pickering</h1>
              <h2 className='headerSubheading text-center'>Portfolio</h2>
              <h3 className='phrase text-center'>Learning website development from scratch, whilst travelling the WORLD!</h3>
              <div className='headerBtns d-flex justify-content-center'>
              <Link to='/aboutme'>
                <Button onClick={viewAbout} variant="primary" size='lg' className='AboutmeBtn me-4'>Get to know me</Button>
              </Link>
              <Link to='/contactme'>
                <Button oncClick={viewContact} variant="light"size='lg' className='contactBtn'>Contact Me</Button>
              </Link>
              </div>
            </Col>
            <Col md={5}>
            <div className='mePicMobile d-flex justify-content-center'>
            <img className='heroPicture mx-1' src={MyPicture} alt='picturePortfolio'/>
            </div>
            </Col>
          </Row>
        </Container>
       
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default Homepage