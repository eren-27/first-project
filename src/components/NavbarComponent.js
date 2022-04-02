import {Navbar,Nav,Container} from "react-bootstrap"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Hobby from "./Hobby"
import Skill from "./Skill"
import Home from "./Home";
import Form from "./Form";
import Comment from "./Comment";
import ENG_TH from "./ENG_TH";


const NavbarComponent=()=>{
    return(
        <Router>
        <div>
            <Navbar bg="dark"  variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">PORTFOLIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                    <Nav.Link as={Link} to={"/education"}>Education</Nav.Link>
                    <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                    <Nav.Link as={Link} to={"/hobby"}>Hobby</Nav.Link>
                    <Nav.Link as={Link} to={"/skill"}>Skill</Nav.Link>
                    <Nav.Link as={Link} to={"/form"}>Form</Nav.Link>
                    <Nav.Link as={Link} to={"/comment"}>Comment</Nav.Link>
                    <Nav.Link as={Link} to={"/engToTh"}>ENG to TH Component</Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link href="#deets">ENG to TH</Nav.Link>
                    <Nav.Link href="#deets">Dark to White</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
         <div>
                 <Switch>
                    <Route path="/home">
                         <Home />
                     </Route>
                     <Route path="/about">
                         <About />
                     </Route>
                     <Route path="/education">
                         <Education />
                     </Route>
                     <Route path="/contact">
                         <Contact />
                     </Route>
                     <Route path="/hobby">
                         <Hobby />
                     </Route>
                     <Route path="/skill">
                         <Skill />
                     </Route>
                     <Route path="/form">
                         <Form />
                     </Route>
                     <Route path="/comment">
                         <Comment />
                     </Route>
                     <Route path="/engToTh">
                         <ENG_TH />
                     </Route>
                             
                 </Switch>
             </div>
             </Router>
    )
}

export default NavbarComponent;