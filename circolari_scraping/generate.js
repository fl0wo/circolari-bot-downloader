var fs = require("fs");

fs.readFile("files/body.txt", function(err, buf) {
    var x = buf.toString().split("\n");
    var data = "";
    var array = [];

    x.forEach(obj => {
        if(obj.substr(0,obj.indexOf(":")) == "ajax_html_ids[]")
            array.push(obj.substr(obj.indexOf(":") + 1 ,obj.lenght));
        else
            data += "\"" + obj.substr(0,obj.indexOf(":")) + "\" : \"" + obj.substr(obj.indexOf(":") + 1 ,obj.lenght) + "\",\n";
    });
    data += "ajax_html_ids : " + JSON.stringify(array);

    console.log(data);

    fs.writeFile("temp.txt", data, function(err, data) {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });

    console.log(x[0]);
});