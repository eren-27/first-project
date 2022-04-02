import { IoLogoGameControllerB } from 'react-icons/io';
import { BiMoviePlay } from 'react-icons/bi';
import { AiFillRead } from 'react-icons/ai';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { Container,Row,Col,Card } from "react-bootstrap";
import './ComponentsColor.css'

const Hobby =()=>{
    return(
            <Container>
                <div className='pt-5 pb-5'>
                <h2 className="text-center">Hobby Component</h2>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                    <Card border="secondary" >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                        <Card.Title>Hobby Component</Card.Title>
                       
                            <p className="pt-3"><IoLogoGameControllerB/> เล่นเกม</p>
                            <p>ดูหนัง <BiMoviePlay/></p>
                            <p><AiFillRead/> อ่านหนังสือ</p>
                            <p>ฟังเพลง <BsMusicNoteBeamed/></p>
                       
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                </div>
            </Container>
    )
}

export default Hobby;