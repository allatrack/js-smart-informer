var fs = require("fs");
const path = require('path');

//console.log(fs.readFileSync('./001/expected.html'));
var template = fs.readFileSync('./template.html',  'utf8');

var dirs = [];
fs.readdirSync('./').forEach(function(file) {
    dirs.push(file);
});

dirs.forEach(function(folderName){

    if (folderName ==='prepare.js' ||folderName === 'template.html' || folderName === 'error'){
        return;
    }

    var _template = template;
    var page = fs.readFileSync('./'+folderName+'/expected.html',  'utf8');
    var regex = /CONTENT/g;
    var result = _template.replace(regex, page);
    var path_to_save ='./'+folderName+'/smart_informer_test.html';


    fs.writeFile(path_to_save , result, function(err ) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved to path "+path_to_save  +"!");
    });
});

