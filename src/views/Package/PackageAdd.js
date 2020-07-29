import React, {useState} from "react";
import MaterialTable, {MTableToolbar} from "material-table";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import { v4 as uuidv4 } from 'uuid';
import {primaryCardHeader} from "../../assets/jss/material-dashboard-react";
import {AddBox, Search} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),

    },
}));

const PackageAdd = (getPackages) => {
    // fetch the data

    const submit = () => {
        console.log(data);
        const config = {
            method: 'POST',
            headers: {
            },
            body: data,
        }
        console.log(config);

        fetch(`http://yama-env.eba-jrxdggtp.us-east-2.elasticbeanstalk.com/manager/delivery`, {
            method: 'POST',
            headers: {
            },
            body: data,
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    return getPackages();
                }
                throw new Error('Failed to Add.');
            })
            .catch((e) => {
                console.error(e);
            });
    }

    const [data, setData] = useState([
        {
            userId: "a1",
            location: "Apt 309",
            locker: "Place Two",
        },
        {
            userId: "a2",
            location: "Apt 307",
            locker: "Place Two",
        },
    ])



    const classes = useStyles();

    const columns = [
        {title: "Resident Name", field: "userId", width: 150},
        {title: "Resident Address", field: "location", width: 150},
        {title: "Locker", field: "locker", width: 150},
    ];

    return (
        <Container maxWidth="md">
            <div className={classes.paper}>
                <MaterialTable
                    columns={columns}
                    data={data}
                    title="Add"
                    components={{
                        Toolbar: props => (
                            <div style={{ ...primaryCardHeader, color: "#FFF"}}>
                                <MTableToolbar {...props} />
                            </div>
                        )

                    }}
                    icons={{
                     Add: props => (
                         <AddBox style={{color: "#FFF"}} />
                     )
                    }}
                    options={{
                        search: false,

                    }}
                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    setData([...data, newData]);

                                    resolve();
                                }, 1000)
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const dataUpdate = [...data];
                                    const index = oldData.tableData.id;
                                    dataUpdate[index] = newData;
                                    setData([...dataUpdate]);

                                    resolve();
                                }, 1000)
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const dataDelete = [...data];
                                    const index = oldData.tableData.id;
                                    dataDelete.splice(index, 1);
                                    setData([...dataDelete]);

                                    resolve()
                                }, 1000)
                            }),
                    }}
                    actions={[
                        {
                            icon: 'publish',
                            iconProps: {style: {color: "#FFF"}},
                            tooltip: 'Submit',
                            isFreeAction: true,
                            onClick: (event) => {submit()}
                        }
                        ]}
                />

            </div>

        </Container>
    );
};

export default PackageAdd;