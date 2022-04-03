import { Container } from "react-bootstrap";
import Axios from "axios"
import { useState } from "react";

const Form =()=>{

    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [country,setCountry] = useState("");
    const [position,setPosition] = useState("");
    const [wage,setWage] = useState(0);

    const [employeeList,setEmployeeList] = useState([]);

    const getEmployees = ()=>{
        Axios.get('http://localhost:3001/employee').then((response)=>{
            setEmployeeList(response.data);
        })
    }

    const addEmployees =()=>{
        Axios.post('http://localhost:3001/create',{
            name:name,
            age:age,
            country:country,
            position:position,
            wage:wage
        }).then(()=>{
            setEmployeeList([
                ...employeeList,
                {
                    name:name,
                    age:age,
                    country:country,
                    position:position,
                    wage:wage
                }
                ])
        })
    }

    return(
        <Container className="pb-5">
            <h2 className="text-center pt-5 pb-5">Form</h2>
            <div className="col-12 col-md-6 offset-md-3">
                <form>
                    <div>
                        <label htmlFor="name" className="form-label">
                            <b>Name : </b>
                        </label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Input your name"
                            onChange={(event)=>{
                                setName(event.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="age" className="form-label">
                            <b>Age : </b>
                        </label>
                         <input 
                        type="number"
                        className="form-control"
                        placeholder="Input your age"
                        onChange={(event)=>{
                            setAge(event.target.value)
                        }}
                    />
                    </div>
                    <div>
                        <label htmlFor="country" className="form-label">
                            <b>Country : </b> 
                        </label>
                         <input 
                        type="text"
                        className="form-control"
                        placeholder="Input your country"
                        onChange={(event)=>{
                            setCountry(event.target.value)
                        }}
                    />
                    </div>
                    <div>
                        <label htmlFor="position" className="form-label">
                            <b>Position : </b>
                        </label>
                         <input 
                        type="text"
                        className="form-control"
                        placeholder="Input your position"
                        onChange={(event)=>{
                            setPosition(event.target.value)
                        }}
                    />
                    </div>
                    <div>
                        <label htmlFor="wage" className="form-label">
                            <b>Wage : </b>
                        </label>
                         <input 
                        type="number"
                        className="form-control"
                        placeholder="Input your wage"
                        onChange={(event)=>{
                            setWage(event.target.value)
                        }}
                    />
                    </div>
                    <br/>
                   <button className="btn btn-success" onClick={addEmployees}>Add employee</button>
                </form>
                <hr/>
                <div className="employees">
                    <button className="btn btn-primary" onClick={getEmployees}>Show employees</button>
                    <br/><br/>
                    {employeeList.map((val,key)=>{
                        return(
                            <div className="employee card" key={val.id}>
                                <div className="card-body text-left">
                                    <p className="card-text"><b>id : </b>{val.id}</p>
                                    <p className="card-text"><b>Name :  </b>{val.name} </p>
                                    <p className="card-text"><b>Age : </b>{val.age} </p>
                                    <p className="card-text"><b>Country : </b>{val.country} </p>
                                    <p className="card-text"><b>Position : </b>{val.position} </p>
                                    <p className="card-text"><b>Wage : </b>{val.wage} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

export default Form;