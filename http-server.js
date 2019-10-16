var http = require ('http');

var hostname='127.0.0.1' //adresse IP localhost

var port = 3000;

var server = http.createServer(function(req,res){

    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html'); //dire au navigateur quel type de fichier est renvoyé
   
   res.end("<h1> 'Hello World\n' </h1>");    //la fonction end permet de terminer la requete, et on peut préciser les données qu'on veut envoyer en paramètre
    

});
                                 
  
server.listen(port, hostname, function(){
    console.log("Server running at http://"+hostname+":"+port+"/");
});