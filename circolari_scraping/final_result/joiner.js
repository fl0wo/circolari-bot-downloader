var fs = require("fs");

const nfiles = 57;
var i = 0;

var final_array = [];

for(;i<nfiles;i++){
    let s = JSON.parse(fs.readFileSync("../formatted/circolari"+i+".json"));

    final_array = final_array.concat(s);
}

console.log(final_array);

fs.appendFileSync('all_circolari.json', JSON.stringify(final_array));
