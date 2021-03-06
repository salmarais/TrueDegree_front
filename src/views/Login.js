import React from "react";
import {Col, Row, Card, CardBody, CardHeader, CardTitle, FormGroup, Input, Button} from "reactstrap";
import { LOGIN } from "variables/api";
import { setToken, getToken, isLoggedIn } from "utils/utils";
import { Redirect } from "react-router";

class Login extends React.Component {

    constructor(props) {
        super(props);
        let isLogin;
        this.state = {
            isLoggedIn: isLoggedIn(),
            status: null,
            message: null,
            token: null,
            email: null,
            password: null
        };

        //for testing
        localStorage.removeItem('token');
        this.handleInputChange = this.handleInputChange.bind(this);
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

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.state.email, password: this.state.password })
        };
        fetch(LOGIN, requestOptions)
            .then(res => {
                const authToken = res.headers.get('x-auth-token');
                setToken(authToken);
                this.setState({isLoggedIn: true});

            })
            /*.then(data => {
                this.setState({ status: data.status, message: data.message })
                
            } )*/
            .catch(console.log);        

        data.preventDefault();
    }

    componentDidMount() {
        //this.isLogin = isLoggedIn();
      }
      componentDidUpdate(e) {
        // Nothing for the moment
      }

    render() {
            if(this.state.isLoggedIn) {
                console.log("reacheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed");
            return (<Redirect to="/admin/diplomas" />)
        } else {
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
                                                    Login
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
}

export default Login;
