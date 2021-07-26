var listNumber = [];
var i = 0;
var j = 0;

for(i = 0; i < 16; i++) {
    
    var number = Math.floor(Math.random() * 101);

    var newnumber = true;

    for(j = 0; j < i; j++){
        if(listNumber[j] == number)
            newnumber = false;
    }

    if(newnumber) 
        listNumber[i] = number;
    else
        i--;

    // do {
    //     var numberUser = parseInt(prompt("Inserisci un numero"));
    // }while(numberUser != listNumber[i]);
}

console.log(listNumber);





