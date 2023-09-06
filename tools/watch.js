const fs = require('fs');
const { execSync } = require('child_process')

fs.watch("src", (event, filename) => {
    console.log(`${new Date()}: ${filename} ${event}`);
    console.log(execSync('npm run build').toString());
});