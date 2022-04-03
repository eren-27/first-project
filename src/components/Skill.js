import { Card,Row,Col,Container } from "react-bootstrap";

const Skill =()=>{
    return(
            <Container>
            <div className="row gy-5 pt-5 pb-5">
            <h2 className="text-center">Skill</h2>

            <div>
                <Row>

                <Col xs={6}>
                    <Card border="secondary" >
                        <Card.Header>Tools</Card.Header>
                        <Card.Body>
                        <Card.Title className="pb-3">My Tools are...</Card.Title>
                        
                            <p>Visual studio code</p>
                            <p>Xampp</p>
                            <p>Postman</p>
                            <p>Git</p>
                        
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={6}>
                        <Card border="secondary" >
                        <Card.Header>Skill programing</Card.Header>
                        <Card.Body>
                        <Card.Title className="pb-3">My Skill programing are...</Card.Title>
                       
                            <p>Javascript</p>
                            <p>php</p>
                            <p>SQL</p>
                           
                       
                        </Card.Body>
                        </Card>
                    </Col>
            
                    
                </Row>
                </div>

                <div>
                <Row>
                    <Col xs={6}>
                    <Card border="secondary" >
                        <Card.Header>Framework / Library</Card.Header>
                        <Card.Body>
                        <Card.Title className="pb-3">My Framework / Library are...</Card.Title>
                        
                            <p>React</p>
                            <p>Angular</p>
                            <p>Laravel</p>
                        
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </div>

             
               
            </div>
               
            </Container>
    )
}

export default Skill;