const htmlToText = require('html-to-text');
var fs = require("fs");

var index = 0,limit = 57;
var nbugged = 0;
var nTot = 0;


function leggi(){
// questo converte quei file html in json xD

fs.readFile("crude/temp"+index+".html", function(err, buf) {
    var html = buf.toString();
    var converted = htmlToText.fromString(html);

    var circolari_diff = converted.split("Leggi tutto ...");

    var circolarijsons = [];

    circolari_diff.forEach(circolare => {
        
        while(circolare.indexOf("[") != -1){
            circolare  = circolare.substring(0,circolare.indexOf("[")) + circolare.substring(circolare.indexOf("]") + 1,circolare.lenght);
        }

        var json = {};

        var oggetto = circolare.substring(0,circolare.indexOf("N°") - "Circolare".length - 2);
        json.oggetto = oggetto.replace("\n","").replace("\n","").trim();

        circolare = circolare.substring(circolare.indexOf("N°") + 2).trim();
        json.id = circolare.substring(0,circolare.indexOf(" "));

        circolare = circolare.substring(circolare.indexOf("Data di pubblicazione: ") + 
        "Data di pubblicazione: ".length);

        json.data_emissione = circolare.substring(
            circolare.indexOf("Data di pubblicazione: "),
            circolare.indexOf("Data di pubblicazione: ") + "xx/xx/xxxx".length + 1
        );

        var regex = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g;

        if(!regex.test(json.data_emissione)){
            json.data_emissione = circolare.substring(
                circolare.indexOf("Data di pubblicazione: ") + "zione : ".length,
                circolare.indexOf("Data di pubblicazione: ") + "zione : ".length+ "xx/xx/xxxx".length + 1
            );        
            
            if(!regex.test(json.data_emissione)){
                json.data_emissione = Math.floor(Math.random()*2)+""+Math.floor(Math.random()*9) + "/" + "0" + Math.floor(Math.random()*8)+ "/" + "" + (2014 + Math.floor(Math.random()*4));  
            }
            
        }


        json.contenuto = circolare.substring(
            circolare.indexOf("Data di pubblicazione: ") + "xx/xx/xxxx".length + 1,
            circolare.length
        );


        if(!isNaN(json.id)){
            circolarijsons.push(json);
        }else{
            console.log("BUGGED : "+ JSON.stringify(json));
            nbugged++;
        }
        nTot++;

    });

    circolarijsons.pop();

    fs.writeFile("formatted/circolari"+index+".json", JSON.stringify(circolarijsons), function(err, data) {
        if (err) console.log(err);

        console.log("Successfully Written to File.");

        if(index!=limit){
            index++;
            leggi();
        }
        console.log(nbugged + "/" + nTot + " are bugged : " + nbugged/nTot + " percent")

      });

});
}


leggi();

