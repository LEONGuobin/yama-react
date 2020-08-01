import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/EditDeleteAccountTable.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import UpdateAccount from "components/Upadater/UpdateAccount.js";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { API_ROOT } from "../../constants.js"

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function EditAccount() {
  const [usersData, setUsers] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [deleteUsernsme, setDeleteUsernsme] = useState('');
  const [editUsernsme, setEditUsernsme] = useState('');

  const handleClickDelete = () => {
    fetch(`${API_ROOT}/users/${deleteUsernsme}`, {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('TOKEN_KEY')).token}`
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error(response.stateText);
      })
      .then((data) => {
        console.log("Delete Success", data)
        handleClickCancel();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleClickCancel = () => {
    setOpen(false);
  };

  const handleClickCancelEdit = () => {
    setOpenEdit(false);
  };

  useEffect(() => {
    fetch(`${API_ROOT}/users/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('TOKEN_KEY')).token}`
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error(response.stateText);
      })
      .then((data) => {
        setUsers(JSON.parse(data));
      })
      .catch((err) => {
        console.error(err);
      });
  });

  const handleDeleteAccount = (prop) => {
    console.log("handleDeleteAccount", prop)
    setDeleteUsernsme(prop);
    setOpen(true);
  };

  const handleEditAccount = (prop) => {
    console.log("handleEditAccount", prop)
    setEditUsernsme(prop);
    setOpenEdit(true);
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Edit / Delete Account</h4>
            <p className={classes.cardCategoryWhite}>
              This is all users
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Username", "Email", "User Type", "Edit / Delete"]}
              tableData={usersData}
              handleDeleteAccount={handleDeleteAccount}
              handleEditAccount={handleEditAccount}
            />
          </CardBody>
        </Card>
      </GridItem>
      <div>
        <Dialog
          open={open}
          onClose={handleClickCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Note! After deleting the "{deleteUsernsme}" account, it cannot be restored permanently.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickDelete} color="primary">
              Delete
          </Button>
            <Button onClick={handleClickCancel} color="primary" autoFocus>
              Cancel
          </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Dialog
          open={openEdit}
          onClose={handleClickCancelEdit}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <UpdateAccount usernsme={editUsernsme} handleClickCancelEdit={handleClickCancelEdit} />
          </DialogContent>
        </Dialog>
      </div>
    </GridContainer>
  );
}
