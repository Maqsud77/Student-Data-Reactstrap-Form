import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Form, FormGroup, Label, Input, FormText, Col} from 'reactstrap';

class App extends Component {
    state = {
        users: [],
        user: {
            firstName: "",
            Password: "",
            Hobbies: "",
            Level: "",
            GPA: "",
            Majors: ""
        }
    }
    changename = (event) => {
        const {user} = this.state
        user.firstName = event.target.value
        this.setState({user})
        console.log(user)
    }
    password = (event) => {
        const {user} = this.state
        user.Password = event.target.value
        this.setState({user})
        console.log(user)
    }
    Gpa = (event) => {
        const {user} = this.state
        user.GPA = event.target.value
        this.setState({user})
        console.log(user)
    }
    Majors = (event) => {
        const {user} = this.state
        user.Majors = event.target.value
        this.setState({user})
        console.log(user)
    }
    checkbox = (event) => {
        const {user} = this.state
        if (event.target.checked) {
            user.Hobbies += event.target.value + " "
        }
    }
    Level = (event) => {
        const {user} = this.state
        if (event.target.checked) {
            user.Level = event.target.value
        }
    }
    submit = () => {
        const {user, users} = this.state
        let copieduser = Object.assign({}, user)
        users.push(copieduser)
        this.setState({users})

    }

    render() {
        return (
            <div className={"container"}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center mt-3">
                        <div className="col-8 border px-3">
                            <h1>Student data</h1>
                            <hr/>
                            <Form>
                                <FormGroup row className={"mb-2"}>
                                    <Label sm={2} for="exampleName">Name</Label>
                                    <Col sm={10}>
                                        <Input onChange={this.changename} type="text" name="Name" id="exampleName"
                                               placeholder="My name"/>
                                        <FormText> Please enter your first and lastname.(requared)</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className={"mb-2"}>
                                    <Label sm={2} for="examplePassword">Password</Label>
                                    <Col sm={10}>
                                        <Input onChange={this.password} type="password" name="password"
                                               id="examplePassword"/>
                                        <FormText>Password must be five or more characters</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className={"mb-2 "}>
                                    <Label sm={2}>Hobbies</Label>
                                    <Col sm={10} className={"d-flex align-items-center"}>
                                        <FormGroup check>
                                            <Label for="checkbox" check className={"mx-2"}>
                                                <Input onChange={this.checkbox} value={"surfing"} id={"checkbox"}
                                                       type="checkbox"/>{' '}
                                                Surfing
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label for="checkbox1" check className={"mx-2"}>
                                                <Input onChange={this.checkbox} value={"Runing"} id={"checkbox1"}
                                                       type="checkbox"/>{' '}
                                                Runing
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label for="checkbox2" check className={"mx-2"}>
                                                <Input onChange={this.checkbox} value={"Bikking"} id={"checkbox2"}
                                                       type="checkbox"/>{' '}
                                                Bikking
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label for="checkbox3" check className={"mx-2"}>
                                                <Input onChange={this.checkbox} value={"Padding"} id={"checkbox3"}
                                                       type="checkbox"/>{' '}
                                                Padding
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className={"mb-2"}>
                                    <Label sm={2}>Level</Label>
                                    <Col sm={10} style={{display: "flex"}}>
                                        <FormGroup check>
                                            <Label check className={"mx-2"}>
                                                <Input onChange={this.Level} value={"Freshman"} type="radio"
                                                       name="radio1"/>{' '}
                                                Freshman
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check className={"mx-2"}>
                                                <Input onChange={this.Level} value={"Sophomore"} type="radio"
                                                       name="radio1"/>{' '}
                                                Sophomore
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check className={"mx-2"}>
                                                <Input onChange={this.Level} value={"Junior"} type="radio"
                                                       name="radio1"/>{' '}
                                                Junior
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check className={"mx-2"}>
                                                <Input onChange={this.Level} value={"Senior"} type="radio"
                                                       name="radio1"/>{' '}
                                                Senior
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check className={"mx-2"}>
                                                <Input onChange={this.Level} value={"Other"} type="radio"
                                                       name="radio1"/>{' '}
                                                Other
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                </FormGroup>
                                <FormGroup row className={"mb-2"}>
                                    <Label sm={2} for="exampleSelect">GPA</Label>
                                    <Col sm={10}>
                                        <Input onChange={this.Gpa} type="select" name="select" id="exampleSelect">
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </Input>
                                        <FormText>Select your GPA (requared)</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className={"mb-2"}>
                                    <Label sm={2} for="exampleSelectMulti">Majors</Label>
                                    <Col sm={10}>
                                        <Input onChange={this.Majors} type="select" name="selectMulti"
                                               id="exampleSelectMulti"
                                               multiple>
                                            <option value={"Physics"}>physics</option>
                                            <option value={"chemestry"}>chemistry</option>
                                            <option value={"Mathematcs"}>Mathematcs</option>
                                            <option value={"Biology"}>Biology</option>
                                        </Input>
                                        <FormText>Select zero or more majors.(optional)</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className={"mb-2"}>
                                    <Label sm={2} for="exampleSelectMulti"></Label>
                                    <Col sm={10}>
                                        <Button  onClick={this.submit} color={"primary"}>Submit</Button>
                                        <Button className={"mx-2"}>Cancel</Button>
                                    </Col>
                                </FormGroup>

                            </Form>
                            <table className={"table"}>
                                <thead>
                                <tr>
                                    <th>№</th>
                                    <th>firstName</th>
                                    <th>Password</th>
                                    <th>Hobbies</th>
                                    <th>Level</th>
                                    <th>Gpa</th>
                                    <th>Majors</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.users.map((item, index) => {
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.Password}</td>
                                            <td>{item.Hobbies}</td>
                                            <td>{item.Level}</td>
                                            <td>{item.GPA}</td>
                                            <td>{item.Majors}</td>
                                        </tr>
                                    }
                                )}
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;