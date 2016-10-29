var aws = require('aws-sdk');

exports.handler = function (event, context, callback) {
    console.log("Hello " + event.name + "!");
}