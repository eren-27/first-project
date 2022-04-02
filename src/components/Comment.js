import Axios from "axios";
import { useState } from "react";
import { Container,Form,Button } from "react-bootstrap";

const Comment =()=>{

    const [comments,setComments] = useState([]);

    const getComments =()=>{
        Axios.get('http://localhost:3001/comments').then((response)=>{
            setComments(response.data);
        })
    }

    return(
        <Container>
            <div className="row pb-5">
            <div className="col-12 col-md-6 offset-md-3">
            <h2 className="text-center pt-5 pb-5">Comment component</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Author name</Form.Label>
                    <Form.Control type="text" placeholder="Input your name" htmlFor="author"/>
                    <Form.Text className="text-muted">
                        You can use the joke name.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Text area</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Input your comment" htmlFor="comment"/>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <hr/>
            <div className="comments">
                    <button className="btn btn-primary" onClick={getComments}>Show comments</button>
                    <br/><br/>
                    {comments.map((val,key)=>{
                        return(
                            <div className="comments card" key={val.id}>
                                <div className="card-body text-left">
                                    <p className="card-text"><b>Name :  </b>{val.author} </p>
                                    <p className="card-text"><b>Age : </b>{val.comment} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
        </Container>
    )
}

export default Comment;