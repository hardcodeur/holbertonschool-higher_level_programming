#!/usr/bin/node
const request = require('request'),fs = require('fs'),url = process.argv[2];
request(url,{ json: true },function (error, response, body) {
  let taskReturn = new Object();
  body.forEach(task => {
    if(task.completed){
      if (!taskReturn[task.userId]) {
        taskReturn[task.userId] = 0;
      }
      taskReturn[task.userId]++;
    }
  });
  console.log(taskReturn);
});