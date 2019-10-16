exports.numbers= function (){
    for (var x = 1; x <= 100; x++){
       console.log(x);  
    }
       
}

exports.even= function (){
    
for (var y = 1; y<=100; y++){
    if (y%2 == 0)
        console.log(y);
}
}

exports.odd= function (){
 for (var z = 1; z<=100; z++){
    if (z%2 != 0)
        console.log(z);   
}

}

