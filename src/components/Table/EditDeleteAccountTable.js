import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor, handleEditAccount, handleDeleteAccount } = props;

  const handleDeleteClick = (e) => {
    handleDeleteAccount(e);
  }

  const handleEditClick = (e) => {
    handleEditAccount(e);
  }

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={prop.id} className={classes.tableBodyRow}>
                <TableCell className={classes.tableCell} key={`username${prop.username}`}>
                  {prop.username}
                </TableCell>
                <TableCell className={classes.tableCell} key={`email${prop.email}`}>
                  {prop.email}
                </TableCell>
                <TableCell className={classes.tableCell} key={`userType${prop.userType}`}>
                  {prop.userType}
                </TableCell>
                <TableCell className={classes.tableCell} key={`button${prop.userType}`}>
                  <Button className={classes.button} variant="contained" color="primary" onClick={(e) => handleEditClick(prop.username, e)}>
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" onClick={(e) => handleDeleteClick(prop.username, e)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
