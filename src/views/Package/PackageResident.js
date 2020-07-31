import React, {useEffect, useState} from 'react';
import PackageTable from "./PackageTable";
import PackageAdd from "./PackageAdd";
import {API_ROOT, AUTH_HEADER} from "../../constants";


const PackageResident = () => {
    // const userName
    // const authority


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getPackagesByName = () => {

        setLoading(true);
        setError('');

        const token = localStorage.getItem("TOKEN_KEY");
        const username = localStorage.getItem("USER_NAME")
        console.log("Get Packages");
        fetch(`${API_ROOT}/resident/delivery`, {
            method: 'GET',
            headers: {
                'Authorization': `${AUTH_HEADER} ${token}`,
            },

        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Loading Post Error")
            })
            .then(data => {
                console.log(data);
                const packageList = data.map(element => {
                    return {
                        residentName: element.username,
                        time: (new Date(element.date)).toLocaleDateString(),
                        residentAddress: element.location,
                        locker: element.locker,
                        status: element.status,
                        packageUUID: element.id,
                    }
                })
                setPackages(packageList);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setLoading(false);
                setError(e.message);
            })
    }
    useEffect(getPackagesByName, []);
    const [packages, setPackages] = useState([
    ]);

    return (
        <div>
            {/* display different component according to authority*/}
            <PackageTable user="resident" data={packages} setData={setPackages}/>
        </div>
    );
};

export default PackageResident;