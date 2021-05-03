console.log("process.env.Docker username \t: " + process.env.Docker_USR);
console.log("process.env.Docker password \t: " + process.env.Docker_PSW);

const options = {
      headers: {
        'Authorization': 'Basic ' + Buffer.from(process.env.Docker_USR + ':' + process.env.Docker_PSW).toString('base64')
      }
    }
console.log("\n options with base64\t: " + JSON.stringify(options));
