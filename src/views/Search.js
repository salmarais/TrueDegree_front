import React from "react";
import {Col, Row, Card, CardBody, CardHeader, CardTitle, FormGroup, Input, Button} from "reactstrap";
import SEARCH_DIPLOMAS, { LIST_DIPLOMAS } from "../variables/api";
import {columns, data} from "../variables/diplomas";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cin: null,
            diplomaIds: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = data => {
        console.log(this.state);
        fetch(LIST_DIPLOMAS + '/CIN=' + this.state.cin)
            .then(res => res.json())
            .then((data) => {
                this.setState({ diplomaIds: data })
            })
            .catch(console.log)
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
                                    <CardTitle>Search for Diplomas</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <label>Student Name</label>
                                                <Input
                                                    defaultValue=""
                                                    placeholder="Name"
                                                    type="text"
                                                    onChange = {this.handleInputChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" sm="12">
                                            <FormGroup>

                                                <label>Cin</label>
                                                <Input
                                                    defaultValue=""
                                                    placeholder="Cin"
                                                    type="text"
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
                                                    onSubmit = {this.handleSubmit}
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

export default Search;
