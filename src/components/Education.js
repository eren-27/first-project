import { Container,Row,Col,Card } from "react-bootstrap";
import './ComponentsColor.css'

const Education =()=>{
    return(
        <Container className="pt-5 pb-5">
            <h2 className="text-center">Education</h2>
            <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
            <Card border="secondary" >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Education Component</Card.Title>
                
                 <p className="pt-3"><b>Graduated high school from : </b>Ronphibunkiat Wasuntharaphiwat school</p>
                    <p><b>Program : </b>Art-Math</p>
                    <p><b>GPA : </b>2.56</p>
                    <p><b>Graduated from university : </b>Nakhon Si Thammarat Rajabhat University</p>
                    <p><b>Major : </b> Business computer</p>
                    <p><b>GPA : </b> 3.57</p>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={1}></Col>
            </Row>

        </Container>
    )
}

export default Education;