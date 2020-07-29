import React, {useEffect, useState} from "react";
import MaterialTable, {MTableToolbar} from "material-table";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {CheckBox, CheckBoxOutlineBlank} from '@material-ui/icons';
import {
    primaryCardHeader,
} from "assets/jss/material-dashboard-react.js";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),

    },
}));

const PackageTable = props => {
    // fetch the data
    // get /package
    const {data, setData} = props;
    const handleChange = (rowData) => {
        if(rowData.status === true){
            alert("You have already confirm the packages");
            return;
        }
        alert("Confirm the receiving? Your operation cannot be recover.");
        //setData({ ...data, [event.target.name]: event.target.checked });
        console.log(rowData);
        //checkRemote(rowData.packageUUID)
        setData((prevState) => {
            const data = [...prevState];
            console.log(data.indexOf(rowData));
            data[data.indexOf(rowData)].status = true;
            return data;
        });
        console.log(data);
    };

    // const checkRemote = (uuid) => {
    //         fetch(`$http://yama-env.eba-jrxdggtp.us-east-2.elasticbeanstalk.com/manager/delivery/${uuid}`, {
    //             method: 'PUT',
    //             headers: {
    //             },
    //             id: uuid,
    //         })
    //             .then((response) => {
    //                 console.log(response);
    //                 throw new Error('Fail to check.');
    //             })
    //             .catch((e) => {
    //                 console.error(e);
    //             });
    // }

    const classes = useStyles();

    const columns = [
        {title: "Resident Name", field: "residentName", width: 150},
        {title: "Resident Address", field: "residentAddress", width: 150},
        {title: "Time", field: "time", width: 150},
        {title: "Package ID", field: "packageUUID", width: 150},
        {title: "Locker", field: "locker", width: 150},
        {
            title: "Status", field: "status", width: 150,
            render: rowData => {
                return (rowData.status == true ? <CheckBox/> : <CheckBoxOutlineBlank/>);
            }
        },
    ];

    return (
        <Container maxWidth="md">
            <div className={classes.paper}>
                <MaterialTable
                    columns={columns}
                    data={data}
                    title="Packages"
                    components={{
                        Toolbar: props => (
                            <div style={{ ...primaryCardHeader, color: "#FFF"}}>
                                <MTableToolbar {...props} />
                            </div>
                        )
                    }}
                    options={{
                        searchFieldStyle: {color: "#FFF"}
                    }}
                    actions={[
                        {
                            icon: 'checked',
                            tooltip: 'Confirm Receiving',
                            onClick: (event, rowData) => handleChange(rowData)
                        }
                    ]}

                />

            </div>

        </Container>
    );
};

export default PackageTable;