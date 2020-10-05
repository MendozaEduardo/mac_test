'use strict';

const express = require('express');
const axios = require('axios');

const port = 9000;
const app = express();

const ifaces = require('os').networkInterfaces();
console.log('ifaces', ifaces);
let address;

function getIPAddress() {
    try {
        Object.keys(ifaces).forEach((dev) => {
            ifaces[dev].filter((details) => {
                if (details.family === 'IPv4' && details.internal === false) {
                    address = details.address;
                }
            });
        });
    } catch (error) {
        console.log('Error: ', error);
    }
        console.log("Address: ", address ? address : '0.0.0.0');
        return address ? address : '0.0.0.0';
}

const ip = getIPAddress();
console.log('IP: ', ip);
// function to retrieve data

const getCountry = async (address) => {
    try {
        const response = await axios.get(
            'https://ipvigilante.com/json/' + address
        );
        if (response.status == 200) {
            let country = JSON.stringify(response.data.data.country_name);
            console.log('Country: ', country);
            return country;
        } else return;
    } catch (error) {
        console.log('Error: ', error);
    }
};

app.get('/', (req, res) => {
    res.send (getCountry(ip));
});

app.listen(port, () => console.log('Listening from port: ', port));
