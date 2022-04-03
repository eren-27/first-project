import { BsFacebook,BsInstagram,BsFillTelephoneFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { Container,Row,Col,Card } from "react-bootstrap";
import './ComponentsColor.css'

const Contact =()=>{
    return(
        <Container>
            <div className="pt-5 pb-5">
            <h2 className="text-center">Contact</h2>
            <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
            <Card border="secondary" >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Education Component</Card.Title>
                 <p><BsFacebook/> : Worawit Sangprom</p>
                    <p><BsInstagram/> : eren_yeager27</p>
                    <p><BsFillTelephoneFill/> : 097-3079061</p>
                    <p><SiGmail/> : Worawitnstaru@gmail.com</p>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={1}></Col>
            </Row>
            </div>
        </Container>
    )
}

export default Contact;