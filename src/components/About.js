import { Container,Row,Col } from "react-bootstrap";
import './ComponentsColor.css'

const About=()=>{
    const profile = "https://www.looper.com/img/gallery/the-surprising-number-of-titans-eren-kills-as-a-human-in-attack-on-titan/l-intro-1643171427.jpg"

    return(
        <Container style={{body:"#D5D5D5"}}>
            
        <div style={{body:"#D5D5D5"}}>
            <div>  
                <h2 className="text-center pt-5">About Component</h2>
            </div>
            
        <Row>
            <Col md={4} style={{backgroundColor:"red"}}>
                <img src={profile} alt="erenChild" style={{borderRadius:"50%",width:"250px",height:"250px"}}/>
            </Col>

            <Col md={8} style={{backgroundColor:"blue"}}>
               
            </Col>
           
        </Row>
               
                   
        <Row>
            <Col md={4} style={{backgroundColor:"red"}}>
               
            </Col>

            <Col md={8} style={{backgroundColor:"#D5D5D5"}}>
                <p>ชื่อ : นายวรวิทย์ แสงพรหม</p>
                <p>ชื่อเล่น : เลนส์</p>
                <p>อายุ : 23 ปี</p>
            </Col>
           
        </Row>
             </div>
        </Container>
    )
}

export default About;