import Axios from "axios";
import { useState } from "react";
import { Container,Form,Button } from "react-bootstrap";

const Comment =()=>{

    const [author,setAuthor] = useState("");
    const [comment,setComment] = useState("");

    const [comments,setComments] = useState([]);

    const getComments =()=>{
        Axios.get('http://localhost:3001/comments').then((response)=>{
            setComments(response.data);
        })
    }

    const addComment =()=>{
        Axios.post('http://localhost:3001/add-comment',{
            author:author,
            comment:comment
        }).then(()=>{
            setComments([
                ...comments,
                {
                    author:author,
                    comment:comment
                }
                ])
        })
    }

    return(
        <Container>
            <div className="row pb-5">
            <div className="col-12 col-md-6 offset-md-3">
            <h2 className="text-center pt-5 pb-5">Comment</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Author name</Form.Label>
                    <Form.Control type="text" placeholder="Input your name" htmlFor="author"
                     onChange={(event)=>{
                        setAuthor(event.target.value)
                    }}
                    />
                    <Form.Text className="text-muted">
                        You can use the joke name.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Your Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Input your comment" htmlFor="comment" 
                     onChange={(event)=>{
                        setComment(event.target.value)
                    }}
                    />
                </Form.Group>
                <br/>
                <Button variant="success" type="submit" onClick={addComment}>
                    Add comment
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