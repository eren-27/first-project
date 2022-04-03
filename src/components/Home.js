import { Container,Row,Col } from "react-bootstrap";

const Home =()=>{
    return(
        <Container>
        <div>
            <h2 className="text-center pt-5">Portfolio</h2>

            <Row className="pt-4">
                <Col xs lg={3}></Col>
                <Col xs={6} md={4} lg={6}>
                    <p>
                        This is my Portfolio. On the front-end I use React to do it 
                        and on the back-end I use NodeJs and mySQL. I practice coding 
                        on Form pages by studying Youtube. On the Comments pages I'm 
                        using them myself.
                    </p>
                </Col>
                <Col xs lg={3}></Col>
            </Row>
           
        </div>
        </Container>
    )
}

export default Home;