const fs = require('fs');
const request = require('request');


request(process.argv[2], (error, response, body) => { //if i remove error and response it no longer works, why

  fs.writeFile(process.argv[3], body, function (err) {
    if (err) return console.log(err);

    let stats = fs.statSync(process.argv[3]);
    let fileSize = stats["size"];

    console.log(`Downloaded and saved ${fileSize} bytes to ${process.argv[3]}`); 

  });
});



