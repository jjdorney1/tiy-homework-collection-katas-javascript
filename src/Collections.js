/**
 * Created by jeffreydorney on 8/17/16.
 */

console.log("*** JAVASCRIPT COLLECTION KATAS ***");

// ********************
// ARRAYS IN JAVASCRIPT
// ********************

console.log("\nFirst Last Six Kata\n**********************");

// sets first three arrays for FirstLastSix
var arrayOne = [1, 2, 6];
var arrayTwo = [6, 1, 2, 3];
var arrayThree = [13, 6, 1, 2, 3];

// firstLastSix object
function firstLast6(array){

    // creates duplicate array for making changes
    var newArray = array;

    // sets a variable to an index if 6 is contained
    var contains6 = newArray.indexOf(6);

    /// checks to see if that index is the first or last
    if(contains6 == 0 || contains6 == newArray.length-1) {
        return true;
    } else {

        return false;
    }
}

// firstLast6 output lines
console.log("firstLast6([" + arrayOne + "]) -> " + firstLast6(arrayOne));
console.log("firstLast6([" + arrayTwo + "]) -> " + firstLast6(arrayTwo));
console.log("firstLast6([" + arrayThree + "]) -> " + firstLast6(arrayThree));
console.log("");

console.log("\nSame First Last Kata\n**********************");

// sets arrays for sameFirstLast
var sameFirstLastOne = [1,2,3];
var sameFirstLastTwo = [1,2,3,1];
var sameFirstLastThree = [1,2,1];

// sameFirstLast object
function sameFirstLast(array){
    var newArray = array;

    if(newArray[0] == newArray[newArray.length-1]) {
        return true;
    } else {
        return false;
    }
}

console.log("sameFirstLast([" + sameFirstLastOne + "]) -> " + sameFirstLast(sameFirstLastOne));
console.log("sameFirstLast([" + sameFirstLastTwo + "]) -> " + sameFirstLast(sameFirstLastTwo));
console.log("sameFirstLast([" + sameFirstLastThree + "]) -> " + sameFirstLast(sameFirstLastThree));
console.log("");

console.log("\nRotate Left 3 Kata\n**********************");

// kata for rotateLeft3
var rotateLeft3One = [1,2,3];
var rotateLeft3Two = [5,11,9];
var rotateLeft3Three = [7,0,0];

function rotateLeft3(array){
    var newArray = [array[1], array[2], array[0]];
    return newArray;
}

console.log("rotateLeft3([" + rotateLeft3One + "]) -> " + rotateLeft3(rotateLeft3One));
console.log("rotateLeft3([" + rotateLeft3Two + "]) -> " + rotateLeft3(rotateLeft3Two));
console.log("rotateLeft3([" + rotateLeft3Three + "]) -> " + rotateLeft3(rotateLeft3Three));
console.log("");

console.log("\nReverse 3 Kata\n**********************");

// kata for reverse3
var reverse3One = [1,2,3];
var reverse3Two = [5,11,9];
var reverse3Three = [7,0,0];

function reverseLeft3(array){
    var newArray = [array[2], array[1], array[0]];
    return newArray;
}

console.log("reverseLeft3([" + reverse3One + "]) -> " + reverseLeft3(reverse3One));
console.log("reverseLeft3([" + reverse3Two + "]) -> " + reverseLeft3(reverse3Two));
console.log("reverseLeft3([" + reverse3Three + "]) -> " + reverseLeft3(reverse3Three));
console.log("");

console.log("\nSum First Penultimate Kata\n**********************");

// kata for sumFirstPenultimate
var sumFirstPenultimateOne = [1,2,3];
var sumFirstPenultimateTwo = [1,1];
var sumFirstPenultimateThree = [1,1,1,1];
var sumFirstPenultimateFour = [1,2,3,4,];

function sumFirstPenultimate(array){

    // checks to make sure its at least 2 items
    if(array.length >= 2) {

        // adds the first and second from last items
        var sumOfNums = array[0] + array[array.length - 2];
        return sumOfNums;

        // checks the length to see if it's one
    } else if(array.length == 1) {
        return array[0];

        // returns zero value if it's length zero
    } else {
        return 0;
    }
}

console.log("sumFirstPenultimate([" + sumFirstPenultimateOne + "]) -> " + sumFirstPenultimate(sumFirstPenultimateOne));
console.log("sumFirstPenultimate([" + sumFirstPenultimateTwo + "]) -> " + sumFirstPenultimate(sumFirstPenultimateTwo));
console.log("sumFirstPenultimate([" + sumFirstPenultimateThree + "]) -> " + sumFirstPenultimate(sumFirstPenultimateThree));
console.log("sumFirstPenultimate([" + sumFirstPenultimateFour + "]) -> " + sumFirstPenultimate(sumFirstPenultimateFour));
console.log("");

// *********************
// OBJECTS IN JAVASCRIPT
// *********************

console.log("\nMap Bully Kata\n**********************");

// map bully kata

// declaring hashmap variables
var mapBullyOne = ({"b": "dirt", "a": "candy"});
var mapBullyTwo = ({"a": "candy"});
var mapBullyThree = ({"b": "carrot", "c": "meh", "a": "candy"});

// mapBully object
function mapBully(map){
    map["b"] = map["a"];
    map["a"] = "";
    return map;
}

// template:
// mapBully({"b": "dirt", "a": "candy"}) -> {"b": "candy", "a": ""}

console.log("mapBully({\"b\": \"dirt\", \"a\": \"candy\"}) ->", mapBully(mapBullyOne));
console.log("mapBully({\"a\": \"candy\"}) ->", mapBully(mapBullyTwo));
console.log("mapBully({\"b\": \"carrot\", \"c\": \"meh\", \"a\": \"candy\") ->", mapBully(mapBullyThree));

console.log("\nMap Share Kata\n**********************");

// map share kata

// declaring hashmap variables
var mapShareOne = ({"b": "bbb", "c": "ccc", "a": "aaa"});
var mapShareTwo = ({"b": "xyz", "c": "ccc"});
var mapShareThree = ({"d": "hi", "c": "meh", "a": "aaa"});

// mapShare object
function mapShare(map){
    var newMap = map;
    delete newMap["c"];

    if(newMap["a"]) {
        newMap["b"] = newMap["a"];
    }
    return newMap
}

console.log("mapShare({\"b\": \"bbb\", \"c\": \"ccc\", \"a\": \"aaa\"}) ->", mapShare(mapShareOne));
console.log("mapShare({\"b\": \"xyz\", \"c\": \"ccc\"}) ->", mapShare(mapShareTwo));
console.log("mapShare({\"d\": \"hi\", \"c\": \"meh\", \"a\": \"aaa\"}) ->", mapShare(mapShareThree));

console.log("\nMap AB Kata\n**********************");

// map AB kata
var mapABOne = {"b": "There", "a": "Hi"};
var mapABTwo = {"a": "Hi"};
var mapABThree = {"b": "There"};

function mapAP(map) {
    var newMap = map;

    if(newMap["a"] && newMap["b"]) {
        newMap["ab"] = (newMap["a"] + newMap["b"]);
    }
    return newMap
}

console.log("mapAP({\"b\": \"There\", \"a\": \"Hi\"}) ->", mapAP(mapABOne));
console.log("mapAP({\"a\": \"Hi\"}) ->", mapAP(mapABTwo));
console.log("mapAP({\"b\": \"There\"}) ->", mapAP(mapABThree));

console.log("\nWord Length Kata\n**********************");

// wordLength kata
var wordLengthOne = (["a","bb","a","bb"]);
var wordLengthTwo = (["this","and","that","and"]);
var wordLengthThree = (["code","code","code","bug"]);

/*
function wordLen(array) {
    var map;
    var newObject;
    var wordLengthCount;
    var wordToCount;
    var arrayLength = array.length;

    for(var a = 0; a < arrayLength; a++){
        wordToCount = (array.shift());
        wordLengthCount = wordToCount.length;

        if(!newObject.contains(wordToCount)){
            newObject.add({wordToCount : wordLengthCount});
        } else {
            newObject.add({wordToCount : wordLengthCount + 1})
        }
        newObject = { wordToCount : wordLengthCount };

        console.log(arrayLength + " - Array Length");
        console.log(wordToCount + " - Word to Count");
        console.log(array + " - Array");
        console.log(wordLengthCount + " - Word Length Count");
        console.log(newObject);
        // if(!map.includes(nextWord)){
        //    map.push({nextWord: nextWord.length})
        // }
    }
    return map;
}

console.log("wordLength([\"a\",\"bb\",\"a\",\"bb\"}) ->", wordLen(wordLengthOne));
*/


var test1 = (["a", "bb", "ccc", "d"]);
var test2 = (["bbb", "c", "dd", "aaaaa"]);
var test3 = {
    "a" : "hi",
    "b" : "there",
    "c" : "buddy"
}

function testFunction(array) {

    for(newObject : array){
        wordToCount = 
    }
    var newObject = array;
    var wordToCount = newObject.pop();
    var wordLenth = wordToCount.length;
    return newObject + " " + wordLenth;

}

console.log(testFunction(test1));
console.log(testFunction(test2));
