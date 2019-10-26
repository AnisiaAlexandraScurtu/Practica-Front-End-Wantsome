//cerinta 1
//1. Scrieti o functie sub forma named function care accepta ca argument un CNP si verifica sexul unei persoane. 
//In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".

function namedFunction (cnp){
   if (cnp) {
       return "Persoana verificata este de sexul M/F";
   }
}
console.log(namedFunction(2547567335467));

//cerinta 2
//2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica 
//cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
//- 1-3 = E
//- 3-6 = D
//- 7-8 = B
//- 9 = A
//- 10 = A+
//Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".

var numericValue = function(qualifying) {
    if (qualifying === 1-3) {
        return "Calificatul corespunzator punctajului 1-3 este E";
    }else if (qualifying === 3-6) {
        return "Calificatul corespunzator punctajului 3-6 este D";
    }else if (qualifying === 7-8) {
        return "Calificatul corespunzator punctajului 7-8 este B";
    }else if (qualifying === 9) {
        return "Calificatul corespunzator punctajului 9 este A";
    }else if (qualifying === 10){
        return "Calificatul corespunzator punctajului 10 este A+";
    }   
}
console.log(numericValue(3-6));

//cerinta 3
//Scrieti o functie care accepta ca argument numele marcii unei masini si 
//returneaza un text de forma: "Marca [marca] se produce in [tara]". 
//rebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " 
//Scrieti codul in 3 variante diferite. In declararea functiei trebuie sa se regaseasca o functie anonima. 
//Una dintre implementari trebuie sa fie 
//bazata pe Object Literals ( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals )

//Named function
function car (brand) {
    if (brand === "Mercedes") {
        return "Marca Mercedes se produce in Germania";
    }else if (brand === "Skoda") {
        return "Marca Skoda se produce in Cehia";
    }else if (brand === "Bugatti") {
        return "Marca Bugatti se produce in Italia";
    }else if (brand === "Kia") {
        return "Marca Kia se produce in China";
    } else if (brand === "Nissan") {
        return "Marca Nissan se produce in Coreea";
    }else if (brand === "Lexus") {
        return "Marca Lexus se produce in UK";
    }else {
        return "Marca este necunoscuta";
    }
}
console.log(car("Lexus"));

//function expression???
var myCar = function (brand) {
    if (brand === "Mercedes") {
        return "Marca Mercedes se produce in Germania";
    }else if (brand === "Skoda") {
        return "Marca Skoda se produce in Cehia";
    }else if (brand === "Bugatti") {
        return "Marca Bugatti se produce in Italia";
    }else if (brand === "Kia") {
        return "Marca Kia se produce in China";
    } else if (brand === "Nissan") {
        return "Marca Nissan se produce in Coreea";
    }else if (brand === "Lexus") {
        return "Marca Lexus se produce in UK";
    }else {
        return "Marca este necunoscuta";
    }
}
console.log(myCar("BMW"));

//anonymous function
function x (brand) {
    if (brand === "Mercedes") {
        return "Marca Mercedes se produce in Germania";
    }else if (brand === "Skoda") {
        return "Marca Skoda se produce in Cehia";
    }else if (brand === "Bugatti") {
        return "Marca Bugatti se produce in Italia";
    }else if (brand === "Kia") {
        return "Marca Kia se produce in China";
    } else if (brand === "Nissan") {
        return "Marca Nissan se produce in Coreea";
    }else if (brand === "Lexus") {
        return "Marca Lexus se produce in UK";
    }else {
        return "Marca este necunoscuta";
    }
}
console.log(x("BMW"));

//implementare bazata pe Object Literals
switch (car) {
    case "Mercedes": "Marca Mercedes se produce in Germania";
    break;
    case "Skoda": "Marca Skoda se produce in Cehia";
    break;
    case "Bugatti": "Marca Bugatti se produce in Italia";
    break;
    case "Kia": "Marca Kia se produce in China";
    break;
    case "Nissan": "Marca Nissan se produce in Coreea";
    break;
    case "Lexus": "Marca Lexus se produce in UK";
    break;
    default: "Marca este necunoscuta";
}
console.log(car("Lexus"))

//cerinta 4
//Scrieti o functie de tip IIFE care:
//- sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
//var cars = [
 // {name: "John",  salary: 20000 },
  //{ name: "Danny", salary: 30500 },
 // { name: "Bekker", salary: 15000 }
//];
//- afiseaza in consola array-ul sortat






