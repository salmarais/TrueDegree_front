import React from "react";
import {Col, Row, Card, CardBody, CardHeader, CardTitle, FormGroup, Input, Button} from "reactstrap";
import VERIFY_DIPLOMAS from "../variables/api";

class Verify extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            id: event.target.value
        });
    }

    handleSubmit = data => {
        console.log(this.state);
        /*fetch(SEARCH_DIPLOMAS)
            .then(res => res.json())
            .then((data) => {
                this.setState({ diplomas: data })
            })
            .catch(console.log)*/
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
                                    <CardTitle>Search for diploma by ID</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Input
                                                    defaultValue=""
                                                    placeholder="Diploma ID"
                                                    type="text"
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

export default Verify;
