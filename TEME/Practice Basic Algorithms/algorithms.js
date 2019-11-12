//cerinta 1
function myFunction(email) {
    var one = email.split("@");
    var two = email[0];
    var three = two.length / 2;
    var four = two.substring(0, (two.length - three));
    var five = one[1];
    return four + "...@" + five;
}
console.log(myFunction("ovidiu...@test.com"))

//cerinta 2
function myFunction(str){
    var str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++){
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
  }
    console.log(myFunction("i am superman"));

//cerinta 4
function repeatString(str, num) {
    var repeat = "";
    while (num < 10){
       repeat += str;
       num++;
}
    return repeat;
  }
  console.log(repeatString("Wantsome", 3));


//cerinta 7
function reverseOfString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseOfString("Learning JavaScript"));

//cerinta 8
function factNumber(x){
    if (x === 0) {
        return 1;
    } else {
        return x * factNumber(x-1);
    }
}
console.log(factNumber(4))
