import { Container, Row, Col } from "react-bootstrap"
import React from "react";


const About = () => { 
     return (
    
    <section>
        <Container className="bg-danger">
            <Row>
                <Col>
                <img src="https://picsum.photos/300/300" />
        
                </Col>
                <Col>
                <h1>Hi I am Barbara</h1>
                <p>I am a software Engineer located in South Florida. I use Mongodb, CSS, Python. ON the side I like to sing, read.</p>
                <p>Contact me: barbaralaurince@gmail.com</p>
                </Col>
            </Row>
        </Container>
    </section>
  

  )
}
 
export default About
