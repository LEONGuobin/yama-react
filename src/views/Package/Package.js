import React, {useEffect, useState} from 'react';
import PackageTable from "./PackageTable";
import PackageAdd from "./PackageAdd";


const Package = () => {
    // const userName
    // const authority

    // const getPackages = () => {
    //         var myHeaders = new Headers();
    //         myHeaders.append('Content-Type', 'application/json');
    //         myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiIiwidXNlclR5cGUiOiJUZW5hbnQiLCJpYXQiOjE1OTU5ODY0NDEsImV4cCI6MTU5NjA3Mjg0MX0.FCG_2bUZvB7-GtyT2g2XN0tP50r1te1KkAyRUF3ylLU");
    //
    //         var requestOptions = {
    //             method: 'GET',
    //             headers: myHeaders,
    //             redirect: 'follow'
    //         };
    //
    //         fetch("http://yama-backend.herokuapp.com/manager/delivery", requestOptions)
    //             .then(response => response.text())
    //             .then(result => console.log(result))
    //             .catch(error => console.log('error', error));
    // }
    // useEffect(getPackages, []);


    // const [loading, setLoading] = useState(false);
    // const [error, setError]  = useState('');
    //
    // const getPackages = () => {

    //     setLoading(true);
    //     setError('');
    //     console.log("Get packages");
    //     fetch(`http://yama-env.eba-jrxdggtp.us-east-2.elasticbeanstalk.com/manager/delivery`, {
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
    //             const packageList = data.map(element => {
    //                 return {
    //                     residentName: element.userId,
    //                     time: element.date,
    //                     residentAddress: element.location,
    //                     locker: element.locker,
    //                     status: element.status,
    //                     packageUUID: element.id,
    //                 }
    //             })
    //             setPackages(packageList);
    //             setLoading(false);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //             setLoading(false);
    //             setError(e.message);
    //         })
    // }

    // useEffect(getPackages, []);

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
            <PackageAdd/>
            <PackageTable data={packages} setData={setPackages}/>
        </div>
    );
};

export default Package;