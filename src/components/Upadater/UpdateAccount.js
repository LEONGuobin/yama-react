import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { API_ROOT } from '../../constants';

const useStyles = makeStyles((theme) => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 4),
  },
  formControl: {
    width: '100%',
  },
}));

export default function UpdateAccount(props) {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [unit, setUnit] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleUnitChange(event) {
    setUnit(event.target.value);
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    fetch(`${API_ROOT}/users/${props.usernsme}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('TOKEN_KEY')).token}`
      },
      body: JSON.stringify({
        "username": props.usernsme,
        "password": password,
        "email": email,
        "unit": unit,
        "firstname": firstname,
        "lastname": lastname,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error(response.stateText);
      })
      .then((data) => {
        props.handleClickCancelEdit();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Create Account</h4>
              <p className={classes.cardCategoryWhite}>Complete all the information</p>
            </CardHeader>
            <CardBody>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                  <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Username"
                          defaultValue={props.usernsme}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="unit"
                          name="unit"
                          variant="outlined"
                          required
                          fullWidth
                          id="unit"
                          label="Unit"
                          autoFocus
                          value={unit}
                          onChange={handleUnitChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="firstname"
                          name="firstname"
                          variant="outlined"
                          required
                          fullWidth
                          id="firstname"
                          label="First Name"
                          autoFocus
                          value={firstname}
                          onChange={handleFirstNameChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="lastname"
                          name="lastname"
                          variant="outlined"
                          required
                          fullWidth
                          id="lastname"
                          label="Last Name"
                          autoFocus
                          value={lastname}
                          onChange={handleLastNameChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Update
                    </Button>
                  </form>
                </div>
              </Container>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
