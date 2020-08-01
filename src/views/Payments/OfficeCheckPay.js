import React, {Component} from 'react';
import Select from 'react-select';
import {Link} from "react-router-dom"



class OfficeCheckPay extends Component {

    state = [
        { label: "Apple", value: 1 },
        { label: "Facebook", value: 2 },
        { label: "Netflix", value: 3 },
        { label: "Tesla", value: 4 },
        { label: "Amazon", value: 5 },
        { label: "Alphabet", value: 6 },
    ];

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <Select options={ this.state } />
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <button>
                    <Link to="/admin/tenantPayHistory">Check</Link>
                </button>
            </div>
        );
    }
}

export default OfficeCheckPay;