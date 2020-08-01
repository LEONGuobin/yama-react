import React, {useState} from 'react';
import {withStyles} from '@material-ui/styles';
import {makeStyles} from "@material-ui/core/styles";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from "components/Typography/Primary";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem"
import CustomInput from "../../components/CustomInput/CustomInput"
import Card from "../../components/Card/Card"
import CardBody from "../../components/Card/CardBody"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

class GetStepContent extends React.Component {

    render() {

        const {BA, stepIndex, setFN, setLN, setRN, setAN, setRAN, setPA, PA} = this.props;

        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <Card>
                                    <CardBody>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <CustomInput
                                                    labelText="First Name *"
                                                    id="first-name"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        onChange: setFN
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <CustomInput
                                                    labelText="Last Name *"
                                                    id="last-name"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        onChange: setLN
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <CustomInput
                                                    labelText="Routing Number *"
                                                    id="routing-number"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        onChange: setRN
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <CustomInput
                                                    labelText="Account Number *"
                                                    id="account-number"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        onChange: setAN
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <CustomInput
                                                    labelText="Re-enter Account Number *"
                                                    id="re-enter-account-number"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        onChange: setRAN
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                    </CardBody>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <GridContainer>
                            <Card>
                                <CardBody>
                                    <div className="payBlock">
                                        <GridContainer direction="column">
                                            <GridItem xs={12} sm={12} md={12}>
                                                <h2>Your Current Balance</h2>
                                                <h2 className="payColumn2"> $ {BA} </h2>
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <div> Pay Amount:</div>
                                                <div><input onChange={setPA}/></div>
                                            </GridItem>
                                        </GridContainer>
                                    </div>
                                </CardBody>
                            </Card>
                        </GridContainer>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <Card>
                            <CardBody className="payConfirm">
                                <h3>A payment of $ {PA} will be made today.</h3>
                            </CardBody>
                        </Card>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <Card>
                            <CardBody className="payComplete">
                                <div></div>
                                <h3>Payment Complete!</h3>
                            </CardBody>
                        </Card>
                    </div>
                );
            default:
                return 'Unknown stepIndex';
        }
    }
}

class HorizontalLabelPositionBelowStepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 3600,
            activeStep: 0,
            firstName: "start",
            lastName: "",
            routeNumber: "",
            accountNumber: "",
            reAccountNumber: "",
            paymentAmount: 0,
            steps: ['Account', 'Payment', 'Verification', 'Confirmation']
        };
        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setRouteNumber = this.setRouteNumber.bind(this);
        this.setAccountNumber = this.setAccountNumber.bind(this);
        this.setReAccountNumber = this.setReAccountNumber.bind(this);
        this.setPaymentAmount = this.setPaymentAmount.bind(this);
    }

    handleNext = () => {
        this.setState({activeStep: this.state.activeStep + 1})
    };

    handleBack = () => {
        this.setState({activeStep: this.state.activeStep - 1})
    };

    handleReset = () => {
        this.setState({activeStep: 0})
    };

    setFirstName(e) {
        this.setState({firstName: e.target.value});
    }

    setLastName(e) {
        this.setState({lastName: e.target.value});
    }

    setRouteNumber(e) {
        this.setState({routeNumber: e.target.value});
    }

    setAccountNumber(e) {
        this.setState({accountNumber: e.target.value});
    }

    setReAccountNumber(e) {
        this.setState({reAccountNumber: e.target.value});
    }

    setPaymentAmount(e) {
        this.setState({paymentAmount: +e.target.value});
    }

    render() {
        const {classes} = this.props;
        console.log(this.state.paymentAmount);
        return (
            <div className={classes.root}>
                <Stepper activeStep={this.state.activeStep} alternativeLabel>
                    {this.state.steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {this.state.activeStep === this.state.steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>All steps completed</Typography>
                            <Button onClick={this.handleReset}>Make Another Payment</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>
                                <GetStepContent BA={this.state.balance}
                                                stepIndex={this.state.activeStep}
                                                setFN={this.setFirstName}
                                                setLN={this.setLastName}
                                                setRN={this.setRouteNumber}
                                                setAN={this.setAccountNumber}
                                                setRAN={this.setReAccountNumber}
                                                setPA={this.setPaymentAmount}
                                                PA={this.state.paymentAmount}
                                />
                            </Typography>
                            <div>
                                <Button
                                    disabled={this.state.activeStep === 0}
                                    onClick={this.handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" onClick={this.handleNext}>
                                    {this.state.activeStep === this.state.steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(HorizontalLabelPositionBelowStepper);