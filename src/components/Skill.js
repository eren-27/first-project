import { Card,Row,Col,Container } from "react-bootstrap";

const Skill =()=>{
    return(
            <Container>
            <div className="row gy-5 pt-5 pb-5">
            <h2 className="text-center">Skill Component</h2>

            <div>
                <Row>

                <Col xs={6}>
                    <Card border="secondary" >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                        <Card.Title>Tools</Card.Title>
                        
                            <p className="pt-3">Visual studio code</p>
                            <p>Visual studio</p>
                            <p>Xampp</p>
                            <p>Postman</p>
                            <p>Git</p>
                            <p>Photoshop</p>
                            <p>Adobe XD</p>
                            <p>Figma</p>
                        
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={6}>
                        <Card border="secondary" >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                        <Card.Title>Skill programing</Card.Title>
                       
                            <p className="pt-3">Javascript</p>
                            <p>php</p>
                            <p>SQL</p>
                            <p>Java</p>
                            <p>c#</p>
                            <p>Python</p>
                       
                        </Card.Body>
                        </Card>
                    </Col>
            
                    
                </Row>
                </div>

                <div>
                <Row>
                    <Col xs={6}>
                    <Card border="secondary" >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                        <Card.Title>Framework / Library</Card.Title>
                        
                            <p className="pt-3">React</p>
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