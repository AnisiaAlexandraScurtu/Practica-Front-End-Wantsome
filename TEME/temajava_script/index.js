// //cerinta 1
function isString(x, y){
    var x = "w3resources";
    var y = [0, 2, 4, 0];
    var resultOne = (typeof x === "string");
    var resultTwo = (typeof y === "string");
    console.log(resultOne);
    // console.log(resultTwo);
}
isString("w3resources", [0, 2, 4, 0]);

//cerinta 2
function isBlank( Wood ) {
    var result = Wood === ' ';
    var resultOne = Wood === 'abc'
    // return result;//
    return resultOne; //
}
console.log(isBlank(''));
 

//cerinta 3
function transform(str) {
    var str = "Robin, Singh";
    var string_to_array = str.split(",");
    console.log(string_to_array);
}
transform(" Robin ", " Singh ");

//cerinta 4
function abrev(str) {
    var str = "Robin Singh";
    var abbrev_name = str.substr(0, 7) + '.';
    console.log(abbrev_name);
}
abrev("Robin S.")


//cerinta 5
function letter(str){
    var str = 'js string exercise';
    var capitalize = str.charAt(0).toUpperCase()+str.slice(1);
    console.log(capitalize);
}
letter("Js string exercise")

//cerinta 6
function characterOne(str) {
    var str = "Robin Singh";
    var truncate_string = str.substr(0, 4);
    console.log(truncate_string);
}
characterOne("Robi");

//cerinta 7- nu sunt sigura ca este bine ce am facut
function myFunction(str){
    var str = 'Js STRING EXERCISES';
    var result = str.charCodeAt(1).toUpperCase;
    console.log(result);
}
myFunction('Js STRING EXERCICES')

//cerinta 8- nu sunt sigura ca este varianta corecta
function practice(_a) {
    var exercices = "We are doing some ";
    var javaScr = "JavaScript ";
    var position = "exercices.";
    var result = exercices.concat(javaScr, position);
    console.log(result);
}
practice("We are doing JavaScript exercices");

//cerinta 9
function jump(_a) {
    var _a = "The quick brown fox jumps over the lazy dog";
    var remove_first_occurence = _a.replace('the', '');
    console.log(remove_first_occurence);
}
jump("The quick brown fox jumps over lazy dog");

//cerinta 10- nu da nici un rezultat. am incercat dar altceva nu am reusit sa fac.
function myFunction(string_1, string_2) {
    var string_1 = 'abcd';
    var string_2 = 'AbcD';
    var compare_strings = string_1.toLowerCase() === string_2.toUpperCase();
    console.log(compare_strings);
    
}
myFunction('abcd', 'AbcD')

//cerinta 11
function letter(_a){
    var _a = 'Js string exercise';
    var capitalize = _a.charAt(0).toLowerCase()+_a.slice(1);
    console.log(capitalize);
}
letter("js string exercise");

