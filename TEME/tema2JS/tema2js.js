//cerinta 1-pseudocod
//Denumesc functia, adaug parametrul apoi deschid corpul functiei;
//doresc ca in momentul in care parametrul ia valoarea 2 (sex F), sa mi se returneze "Persoana verificata este de sexul F";
//folosesc If, daca a are valoarea 2 atunci returneaza "Persoana verificata este de sexul F";
//daca a nu va lua valoarea 2, atunci sa mi se returneze "Persoana verificata este de sexul M";
//in consola daca pun valoarea doi la parametru, va returna "Persoana verificata este de sexul F",
//iar daca pun alta valoare, va returna "Persoana verificata este de sexul M".

function namedFunction (a) {
   if (a == 2) {
       return "Persoana verificata este de sexul F";
   } else {
       return "Persoana verificata este de sexul M";
   }
}
console.log(namedFunction(2));

//cerinta 2-pseudocod
//Denumesc variabila, adaug parametrul functiei, apoi deschid corpul functiei;
//daca parametrul qualifying va lua valoarea primului interval atunci va returna calificativul corespunzator acestui punctaj (E);
//folosesc else if pentru celelalte calificative, fiecare returnand calificativul corespunzator intervalului de punctaj;

var numericValue = function(qualifying) {
    if (qualifying <= 3) {
        return "Calificatul corespunzator punctajului 1-3 este E";
    }else if (qualifying > 3 && qualifying <= 6 ) {
        return "Calificatul corespunzator punctajului 3-6 este D";// aici am pus interval de la 4 deoarece 
        //daca pun de la 3 imi da prima varianta de calificativ, m-am gandit ca ar fi trebuit sa fie 4-6
    }else if (qualifying >=7  && qualifying <= 8) {
        return "Calificatul corespunzator punctajului 7-8 este B";
    }else if (qualifying === 9) {
        return "Calificatul corespunzator punctajului 9 este A";
    }else if (qualifying === 10){
        return "Calificatul corespunzator punctajului 10 este A+";
    }   
}
console.log(numericValue(4));

//cerinta 3-pseudocod
//Denumesc variabila, adaug parametrul functiei, apoi deschid corpul functiei;
//daca parametrul brand va lua valoarea primei masini, 
//atunci va returna tara in care se produce masina (Ex: "Marca Mercedes se produce in Germania);
//folosesc else if pentru celelalte branduri, fiecare returnand tara corespunzatoare;
//am folosit 3 variante(asta daca am inteles eu bine):named function, anonymous function si switch.

//Una dintre implementari trebuie sa fie 
//bazata pe Object Literals ( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals )
//nu am inteles exact ce presupune object literals

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


//anonymous function

// function (brand) {
//     if (brand === "Mercedes") {
//         return "Marca Mercedes se produce in Germania";
//     }else if (brand === "Skoda") {
//         return "Marca Skoda se produce in Cehia";
//     }else if (brand === "Bugatti") {
//         return "Marca Bugatti se produce in Italia";
//     }else if (brand === "Kia") {
//         return "Marca Kia se produce in China";
//     } else if (brand === "Nissan") {
//         return "Marca Nissan se produce in Coreea";
//     }else if (brand === "Lexus") {
//         return "Marca Lexus se produce in UK";
//     }else {
//         return "Marca este necunoscuta";
//     }
// }
// console.log(x("BMW"));

//switch

// switch (car) {
//     case "Mercedes": "Marca Mercedes se produce in Germania";
//     break;
//     case "Skoda": "Marca Skoda se produce in Cehia";
//     break;
//     case "Bugatti": "Marca Bugatti se produce in Italia";
//     break;
//     case "Kia": "Marca Kia se produce in China";
//     break;
//     case "Nissan": "Marca Nissan se produce in Coreea";
//     break;
//     case "Lexus": "Marca Lexus se produce in UK";
//     break;
//     default: "Marca este necunoscuta";
// }
// console.log(car("Lexus"))


//cerinta 4-pseudocod
// incep declararea functiei IIFE
// vreau ca functia mea sa sorteze datele in ordine crescatoare
// am incercat varianta de mai jos, dar aparent nu functioneaza.

(function (name, salary) {
    var cars = [
        {name: "John",  salary: 20000 },
        { name: "Danny", salary: 30500 },
        { name: "Bekker", salary: 15000 }
      ];
    var sorted = cars.sort(function(name, salary){
        return cars[name]- cars[salary]
    });
   
})();
console.log("John", 20000);



