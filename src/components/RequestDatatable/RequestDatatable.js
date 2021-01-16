import React from "react";
import {Button} from "reactstrap";
import Table from "@material-ui/core/Table";


class RequestDatatable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = this.props.columns;
        this.data = this.props.data;
    }

    acceptRequest(requestId) {
        // this.crudService.acceptRequest(requestId);
        console.log("requestAccepted", requestId);
        // eslint-disable-next-line
        let matches = this.data.filter(request => request.degreeId.toLowerCase().includes(requestId));
    }
    cancelRequest(requestId) {
        // this.crudService.acceptRequest(requestId);
        console.log("requestRejected", requestId);
        // eslint-disable-next-line
        let matches = this.data.filter(request => request.degreeId.toLowerCase().includes(requestId));
    }

    render() {
        return (
            <>
                <div className="datatable">
                    <Table responsive>
                        <thead className="text-primary">
                        <tr>
                            {
                                this.columns.map(col => {
                                    return (
                                        <th>{col.label}</th>
                                    );
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.data.map(row => {
                                return (
                                    <tr>
                                        {
                                            this.columns.map(col => {
                                                return (
                                                    <td>{row[col.name]}</td>
                                                );})

                                        }
                                        <td>
                                            <Button
                                                className="btn-round btn-icon"
                                                color="success"
                                                outline
                                                size="sm"
                                                onClick={() => {
                                                    this.acceptRequest(row['degreeId'])
                                                }}
                                            >
                                                <i className="fa fa-check" />
                                            </Button>
                                        </td>
                                        <td>
                                            <Button
                                                className="btn-round btn-icon"
                                                color="danger"
                                                outline
                                                size="sm"
                                                onClick={() => this.cancelRequest(row['degreeId'])}
                                            >
                                                <i className="fa fa-times" />
                                            </Button>
                                        </td>
                                    </tr>
                                );})
                        }
                        </tbody>
                    </Table>
                </div>
            </>
        );
    }
}

export default RequestDatatable;
