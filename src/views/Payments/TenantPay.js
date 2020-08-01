import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import GridContainer from "../../components/Grid/GridContainer"
import Card from "../../components/Card/Card"
import CardBody from "../../components/Card/CardBody"
import GridItem from "../../components/Grid/GridItem"
import Button from "components/CustomButtons/Button.js";

class TenantPay extends Component {
    state = {
        username: "apple",
        balance: 3600,
        address: "xxx xxx xxx"
    }

    render() {
        return (
            <div>
                <GridContainer>
                    <Card>
                        <CardBody>
                            <GridContainer direction="column">
                                <GridItem >
                                    <div className = "userAddress">
                                        Property Address: {this.state.address}
                                    </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                    <div className = "payBlock">
                                        <h2>Your Current Balance</h2>
                                        <div className = "payContainer">
                                            <div className = "payColumn1">$ {this.state.balance}</div>
                                            <Link to="/admin/tenantPaymentPages">
                                                <Button color="primary">Pay Now</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                    <Link className = "payHistory" to="/admin/tenantPayHistory">Payment History</Link>
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                    </Card >
                </GridContainer>

            </div>
        );
    }
}

export default TenantPay;