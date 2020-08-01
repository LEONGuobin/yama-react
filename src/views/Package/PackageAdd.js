import React, {useState} from "react";
import MaterialTable, {MTableToolbar} from "material-table";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {primaryCardHeader} from "../../assets/jss/material-dashboard-react";
import {AddBox} from "@material-ui/icons";
import {API_ROOT, AUTH_HEADER} from "../../constants";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),

    },
}));


const PackageAdd = props => {
    // fetch the data
    const {getPackages} = props;
    const submit = () => {
        console.log(data);
        const token = localStorage.getItem("KEY");
        console.log(token);
        const raw = data.map(element => {
            return {
                username: element.username,
                location: element.location,
                locker: element.locker,
            }
        })

        fetch(`${API_ROOT}/manager/delivery`, {
            method: 'POST',
            headers: {
                'Authorization': `${AUTH_HEADER} ${token}`,
                "Content-Type":  "application/json"
            },
            body: JSON.stringify(raw),

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
    ])



    const classes = useStyles();

    const columns = [
        {title: "Resident Name", field: "username", width: 150},
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