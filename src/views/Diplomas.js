import React from "react";
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
} from "reactstrap";
import MUIDataTable from "mui-datatables";
import FileImport from "../components/FileImport/FileImport";

const columns = ["Name", "Company", "City", "State"];

const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
    filterType: 'checkbox',
};



class Diplomas extends React.Component {
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
                        <Col lg="4" md="6" sm="12">
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
                    </Row>
                </div>
            </>
        );
    }
}

export default Diplomas;
