#!/usr/bin/node
const request = require('request'),fs = require('fs'),url = process.argv[2],filePath = process.argv[3];
request(url,function (error, response, body) {
  fs.writeFile(filePath, body, (err) => {
    if (err) throw err;
  });
});