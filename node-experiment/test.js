var filesYo = require('fs');
var https = require('https');
filesYo.writeFile (__dirname + "/index.html", "<h1>rock<?h1>");
var dogUrl ="https://www.petfinder.com/wp-content/uploads/2013/03/dog-smiles-gallery25003944b.jpeg";
var dogFile= filesYo.createWriteStream(__dirname + "/node-dog.jpg");
var request = https.get(dogUrl, function(response){

	response.pipe(dogFile);

};

