import React from "react";
// reactstrap components
import {
    Row,
    Col, CardBody, Card, CardTitle, CardFooter,
} from "reactstrap";

import RequestDatatable from "../components/RequestDatatable/RequestDatatable";
import {columns, data} from "../variables/requests";

class Requests extends React.Component {
    constructor(props) {
        super(props);
        this.requests = data;
    }
    render() {
        return (
            <>
                <div className="content">
                    <h1>Requests Page</h1>
                    <Row>
                        <Col md="6">
                            <Card>
                                <CardBody>
                                    <RequestDatatable
                                        data={this.requests}
                                        columns={columns}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-stats">
                                <CardBody>
                                    <Row>
                                        <Col md="4" xs="5">
                                            <div className="icon-big text-center icon-warning">
                                                <i className="nc-icon nc-globe text-warning" />
                                            </div>
                                        </Col>
                                        <Col md="8" xs="7">
                                            <div className="numbers">
                                                <p className="card-category">Number of Requests</p>
                                                <CardTitle tag="p">{this.requests.length}</CardTitle>
                                                <p />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter>
                                    <hr />
                                    <div className="stats">
                                        <i className="fas fa-sync-alt" /> Update Now
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Requests;
