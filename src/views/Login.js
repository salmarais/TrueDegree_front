import React from "react";
import {Col, Row, Card, CardBody, CardHeader, CardTitle, FormGroup, Input, Button} from "reactstrap";
import { LOGIN } from "variables/api";
import Token from "helpers/Token"

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: null,
            message: null,
            token: null,
            email: null,
            password: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    setToken(userToken) {
        sessionStorage.setItem('token', JSON.stringify(userToken));
      }
      
    getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
      }

    // handleInputChange(event) {
    //     console.log('hangle input')
    //     this.setState({
    //         cin: event.target.value
    //     });
    // }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name, value);

        this.setState({
            [name]: value
        });
    }

    handleSubmit = data => {
        console.log(this.state);

        this.setToken("blablablabla");
        console.log("token", this.getToken());

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.state.email, password: this.state.password })
        };
        fetch(LOGIN, requestOptions)
            .then(res => {
                console.log(res.headers.get('x-auth-token'));
                this.setToken('res.headers.get("sdsdsd")');
                //JSON parsing throws an error here, not critical
                //res.json().then(data => console.log(data.headers));
                console.log("token", Token.getToken);
            })
            /*.then(data => {
                this.setState({ status: data.status, message: data.message })
                
            } )*/
            .catch(console.log);        

        data.preventDefault();
    }

    render() {
        return(
            <>
                <div className="content">
                    <Row>
                        <Col md="8">
                            <Card className="wrapping-center content-center align-content-md-center">
                                <CardHeader>
                                    <CardTitle>Login</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                    <Col md="12" sm="12">
                                            <FormGroup>
                                                <label>Email</label>
                                                <Input
                                                    defaultValue=""
                                                    name="email"
                                                    placeholder="Email"
                                                    type="email"
                                                    onChange = {this.handleInputChange}
                                                />
                                            </FormGroup>
                                        </Col><Col md="12" sm="12">
                                            <FormGroup>
                                                <label>Password</label>
                                                <Input
                                                    defaultValue=""
                                                    name="password"
                                                    placeholder="Password"
                                                    type="password"
                                                    onChange = {this.handleInputChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="ml-auto mr-auto">
                                                <Button
                                                    className="btn-primary"
                                                    color="primary"
                                                    type="submit"
                                                    onClick = {this.handleSubmit}
                                                >
                                                    Search
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Login;
