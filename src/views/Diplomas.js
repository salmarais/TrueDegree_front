import React from "react";
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
    Input,
    Form, Button
} from "reactstrap";
import MUIDataTable from "mui-datatables";
import FileImport from "../components/FileImport/FileImport";
import {columns, data} from "../variables/diplomas";
import {FormGroup} from "@material-ui/core";

// Variables
import LIST_DIPLOMAS from "../variables/api";
/*

const columns = ["Name", "Company", "City", "State"];

const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
];
*/

const options = {
    filterType: 'checkbox',
};



class Diplomas extends React.Component {


    constructor(props) {
        super(props);
        this.requests = data;
        this.state = {
            id: null,
            university: data[1][4],
            name: null,
            cin: null,
            type: null,
            date: null,

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
        data.preventDefault();
    }
/*
    componentDidMount() {
        fetch(LIST_DIPLOMAS)
            .then(res => res.json())
            .then((data) => {
                this.setState({ diplomas: data })
            })
            .catch(console.log)
    }*/

    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col lg="12" md="12" sm="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        <h2>Importing diplomas</h2>
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <p> Import csv file with diploma data</p>
                                    <FileImport />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6" md="12" sm="12">
                            <Card>
                                <CardBody>
                                    <MUIDataTable
                                        title={"Employee List"}
                                        data={data}
                                        columns={columns}
                                        options={options}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6" md="12" sm="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Add new diplomas
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col className="pr-1" md="5">
                                                <FormGroup>
                                                    <label>University (disabled)</label>
                                                    <Input
                                                        defaultValue={this.state.university}
                                                        disabled
                                                        placeholder="University Name"
                                                        type="text"
                                                        onChange={this.handleInputChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-1" md="3">
                                                <FormGroup>
                                                    <label>Date</label>
                                                    <Input
                                                        required
                                                        placeholder="Date"
                                                        type="date"
                                                        onChange={this.handleInputChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="4">
                                                <FormGroup>
                                                    <label htmlFor="Type">
                                                        Degree Type
                                                    </label>
                                                    <Input
                                                        placeholder="Type"
                                                        type="text"
                                                        onChange={this.handleInputChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <label>First Name</label>
                                                    <Input
                                                        placeholder="First Name"
                                                        type="text"
                                                        onChange={this.handleInputChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="6">
                                                <FormGroup>
                                                    <label>Last Name</label>
                                                    <Input
                                                        placeholder="Last Name"
                                                        type="text"
                                                        onChange={this.handleInputChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <div className="update ml-auto mr-auto">
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    type="submit"
                                                    onChange={this.handleInputChange}
                                                >
                                                    Add Diploma
                                                </Button>
                                            </div>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Diplomas;
