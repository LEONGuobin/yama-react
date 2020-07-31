import React, {useEffect, useState} from 'react';
import PackageTable from "./PackageTable";
import PackageAdd from "./PackageAdd";
import {API_ROOT, AUTH_HEADER} from "../../constants";


const PackageManager = () => {
    // const userName
    // const authority




    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getPackages = () => {

        setLoading(true);
        setError('');

        const token = localStorage.getItem("TOKEN_KEY");
        //const {token, userId} = JSON.parse(tokenJson);
        //console.log(userId);

        console.log("Get Packages");
        fetch(`${API_ROOT}/manager/delivery`, {
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

    useEffect(getPackages, []);

    // const getPackagesByName = () =>{
    //     setLoading(true);
    //     setError('');
    //     fetch(`http://yama-env.eba-jrxdggtp.us-east-2.elasticbeanstalk.com/resident/delivery/search/${userId}`, {
    //         method: 'GET',
    //         headers: {
    //         }
    //     })
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json();
    //             }
    //             throw new Error("Loading Post Error")
    //         })
    //         .then(data => {
    //             setPackages(data);
    //             setLoading(false);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //             setLoading(false);
    //             setError(e.message);
    //         })
    // }


    // Display different information according to authority;
    // useEffect(getPackages, []);

    const [packages, setPackages] = useState([
        {
            residentName: "a1",
            residentAddress: "apt 101",
            time: (new Date()).toLocaleDateString(),
            packageUUID: 12345,
            locker: "A5",
            status: false,
        },
        {
            residentName: "a2",
            residentAddress: "apt 101",
            time: (new Date()).toLocaleDateString(),
            packageUUID: 12345,
            locker: "A5",
            status: false,
        },
    ]);

    return (
        <div>
            {/* display different component according to authority*/}
            <PackageAdd getPackages={getPackages}/>
            <PackageTable user="manager" data={packages} setData={setPackages}/>
        </div>
    );
};

export default PackageManager;