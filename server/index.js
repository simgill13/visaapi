const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
// const {Usersky} = require('./models');
const passport = require("passport"); //added this
const proxy = require('http-proxy-middleware');
const {BasicStrategy} = require('passport-http');
const BearerStrategy = require("passport-http-bearer").Strategy; // a
const app = express();
app.use(bodyParser.json())
var setCookie = require('set-cookie');








































// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {


         
         
            
            server = app.listen(port, () => {
                resolve();
            }).on('error', reject);
        
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
