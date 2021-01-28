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
import {ADD_DIPLOMAS} from "../variables/api";
import Label from "reactstrap/lib/Label";

const options = {
    filterType: 'checkbox',
};



class Diplomas extends React.Component {


    constructor(props) {
        super(props);
        this.requests = data;
        this.state = {
            id: null,
            fullName: null,
            field: null,
            cin: null,
            degreeType: null,
            issuingDate: null,
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

        const requestOptions = {
            method: 'POST',
            //With protected routes, we're sure that users that reach this view are authenticated
            // and hence, auth token is saved in local storage
            headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') },
            body: JSON.stringify(
                { name: this.state.fullName,
                    cin: this.state.cin,
                    date: this.state.issuingDate,
                    field: this.state.field,
                    type: this.state.degreeType})
        };
        fetch(ADD_DIPLOMAS, requestOptions)
            .then(res => res.json())
            .then(data => this.setState({id: data.diplomaID}))
            .catch(console.log);   

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
/*
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
*/


renderID(){
    return (
        <>
                                    <CardHeader>
                                    <CardTitle>
                                        Diploma's Unique ID
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                  <Form>
                                        <Row>
                                        <div className="text-main">
                                            <Label>
                                                {this.state.id}
                                            </Label>
                                        </div>

                                        </Row>
                                        <Row>
                                            <div className="update ml-auto mr-auto">
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    type="submit"
                                                >
                                                    Back
                                                </Button>
                                            </div>
                                        </Row>
                                    </Form>
                                </CardBody>

        </>
 
    );}

renderForm(){
    return (
        <>
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
                                                    <label>Full Name</label>
                                                    <Input
                                                        name="fullName"
                                                        required
                                                        defaultValue={this.state.university}
                                                        placeholder="John Ripper"
                                                        type="text"
                                                        onChange={this.handleInputChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-1" md="3">
                                                <FormGroup>
                                                    <label>Date</label>
                                                    <Input
                                                        name="issuingDate"
                                                        required
                                                        placeholder="Issuing Date"
                                                        type="date"
                                                        onChange={this.handleInputChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="4">
                                                <FormGroup>
                                                    <label htmlFor="Type">
                                                        CIN
                                                    </label>
                                                    <Input
                                                        name="cin"
                                                        required
                                                        placeholder="12345678"
                                                        type="text"
                                                        onChange={this.handleInputChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <label>Field</label>
                                                    <Input
                                                        name="field"
                                                        required
                                                        placeholder="CS, SWE, etc."
                                                        type="text"
                                                        onChange={this.handleInputChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="6">
                                                <FormGroup>
                                                    <label>Degree Type</label>
                                                    <Input
                                                        name="degreeType"
                                                        required
                                                        placeholder="Bachelor's, Master's, etc."
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

        </>
    );
}

toggleRender(){
    if(this.state.id)
        return this.renderID();
    else
        return this.renderForm();
}
render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col lg="6" md="12" sm="12">
                            <Card>
                                {this.toggleRender()}
                                
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Diplomas;
