#!/usr/bin/node
/*
* Script
*/

const process = require('process');
const fs = require('process');

const fileparh = process.argv[2];
const content = process.argv[3];

fs.writeFile(filepath, content, 'utf8', err => {
    if (err) {
	console.log(err);
    }
});
