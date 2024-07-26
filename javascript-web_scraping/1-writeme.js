#!/usr/bin/node
const fs = require('fs'),path = process.argv[2],textWrite=process.argv[3];
fs.writeFile(path, textWrite, (err) => {
if (err){
    console.log(err);
};
});