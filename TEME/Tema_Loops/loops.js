//cerinta 1- pseudocod
//am scris for, am initializat i dandu-i valoarea 0, pt a incepe numaratoarea de la 0
//ca si conditie, pentru a itera pana la 20, am pus <=
//am incrementat expresia pentru ca i sa nu aiba mereu valoarea 0
//de fiecare data cand va itera se va verifica daca numarul din iteratie este par sau impar

for (i = 0; i <= 20; i++) { 
    if (i % 2 !==0){
        console.log(i + " este numar impar");
    } else {
    console.log(i + " este numar par");
    }    
}


i= 0;
while (i <= 20){
    if (i % 2 !==0){
        console.log(i + " este numar impar");
        i++;
    } else {
        console.log(i + " este numar par");
        i++;
    }    
}

//cerinta 2-pseudocod
//am scris for, am initializat i dandu-i valoarea 0
//ca si conditie, pentru a itera pana la 10, am pus <=
//am incrementat expresia pentru ca i sa nu aiba mereu valoarea 0
//vreau ca de fiecare data cand se itereaza, numarul iterat sa fie inmultuit cu 9
//am declarat var nine cu valoarea 9
//am declarat variabila multiply si am dat valoarea i*nine
//in consola va afisa de fiecare data rezultatul in urma i inmulit cu 9

for (i = 0; i <= 10; i++) { 
    var nine = 9;
    var multiply = i * nine ;
    console.log(" " + i + "*" + nine + "=", + multiply);
}

//while
//am initializat i dandu-i valoarea 0
//am scris while; ca si conditie, pentru a itera pana la 10, am pus <=
//vreau ca de fiecare data cand se itereaza, numarul iterat sa fie inmultuit cu 9
//am declarat var nine cu valoarea 9
//am declarat variabila multiply si am dat valoarea i*nine
//in consola va afisa de fiecare data rezultatul in urma i inmulit cu 9

i= 0;
while (i <= 10) { 
    var nine = 9
    var multiply = i * nine;     
    i++;
    console.log(" " + i + "*" + nine + "=", + multiply);
}


//cerinta 3-pseudocod

//am incercat mai jos o varianta dar nu imi dau seama cum as putea sa o fac sa mearga pentru toate numerele
//am declarat doua variabile, una ia valoarea 10(inmultirea cu 10), celalta va fi inmultirea dintre a si i
//i- l-am initializat la 1 pentru a incepe inmultirea de la 1
var a = 10;
var b;
for(i = 1; i <= 10; i++){
    b = a * i;
    console.log(" " + a + "*" + i + "=", + b)
}

//am gasit si varianta asta pe net si am incercat sa ii inteleg modul in care s-a facut 
//vreau ca tabla inmultirii sa itereze de la 1 la 10
//initializez i cu valoarea 1
//scriu for; conditia pentru a itera pana la 10 este <= 10; apoi incrementarea lui i
//vreau ca la fiecare iteratie sa se faca inmustirea intre toate numerele, de la 1 la 10.
//var result va afisa rezultatul inmulturii
//am facut doua for pentru a putea combina numerele care se inmultesc (pentru a se putea inmulti toate)

var result = '\n ';
for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        result += (i*j) + ' ';
    }
    result += '\n'
}console.log(result)


//cerinta 4-pseudocod
//am incercat sa trec functia expression intr-un for
//am initializat i dandu-i valoarea 1
//conditia pentru a itera pana la 10 este <= 10; apoi incrementarea lui i

var qualifying= i;
for(i = 1; i <= 10; i++) {
var numericValue = function(qualifying) {
    if (qualifying <= 3) {
        return "Calificatul corespunzator punctajului 1-3 este E";
    }else if (qualifying > 3 && qualifying <= 6 ) {
        return "Calificatul corespunzator punctajului 3-6 este D";
    }else if (qualifying >=7  && qualifying <= 8) {
        return "Calificatul corespunzator punctajului 7-8 este B";
    }else if (aqualifying === 9) {
        return "Calificatul corespunzator punctajului 9 este A";
    }else if (qualifying === 10){
        return "Calificatul corespunzator punctajului 10 este A+";
    }
}  
}
console.log("Pentru " + qualifying + " obtii calificativul E");
