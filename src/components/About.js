import { Container,Row,Col } from "react-bootstrap";
import './ComponentsColor.css'

const About=()=>{
    const profile = "https://www.looper.com/img/gallery/the-surprising-number-of-titans-eren-kills-as-a-human-in-attack-on-titan/l-intro-1643171427.jpg"

    return(
        <Container className="pb-3">
            
        <div>
            <div>  
                <h2 className="text-center pt-5">About</h2>
            </div>
            
        <Row className="text-center">
            <Col xs></Col>
            <Col xs> <img src={profile} alt="erenChild" style={{borderRadius:"50%",width:"250px",height:"250px"}}/></Col>
            <Col xs></Col>
           
        </Row>
               
                   
        <Row className="pt-4">
            <Col xs lg={4.5}></Col>
            <Col xs={6} md={4} lg={3}> <p><b>Name :</b> Worawit Saengprom</p>
                <p><b>Nickname :</b> Lens</p>
                <p><b>Age :</b> 24 years old</p>
                <p><b>Gender :</b> Male</p>
                <p><b>Phone :</b> 097 307 9061</p>
                <p><b>E-mail :</b> worawitnstru@gmail.com</p></Col>
            <Col xs lg={4.5}></Col>
        </Row>
             </div>
        </Container>
    )
}

export default About;