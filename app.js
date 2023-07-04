function doubleValues(arr) {
  let doubleArr = [];
  arr.forEach(function (val) {
    doubleArr.push(val * 2);
  });
  return doubleArr;
}

function onlyEvenValues(arr) {
  let evenArr = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      evenArr.push(val);
    }
  });
  return evenArr;
}

let stringNames = ["hello", "goodbye", "hola", "adios"];

function showFirstandLast(arr) {
  const newArr = [];
  arr.forEach(function (word) {
    newArr.push(word[0] + word[word.length - 1]);
  });
  return newArr;
}

let keyValArray = [{ name: "Ben" }, { name: "Sue" }, { name: "Johnny" }];

function addKeyAndValue(array, key, value) {
  array.forEach(function (obj) {
    obj[key] = value;
  });
  return array;
}

// you can add keys and values to an object using square bracket notation obj[key] = value so whatever key and value is added to the array. You can also use dot notation for this, review early javascript object stuff.

function vowelCount(string) {
  const vowelArr = Array.from(string);
  let newObj = {};
  const vowels = "aeiou";

  vowelArr.forEach(function (char) {
    let lowerChar = char.toLowerCase();
    if (vowels.indexOf(lowerChar) !== -1) {
      if (newObj[lowerChar]) {
        newObj[lowerChar]++;
      } else {
        newObj[lowerChar] = 1;
      }
    }
  });
  return newObj;
}

// you are chedking to see if the character is a vowel using indexOf, if it is you are checking to see if it exists in the empty object you made, if so you are adding to the count. If it does not you are setting the count of that character equal to 1 then returning the object.

function doubleValuesWithMap(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}
// Why does it have to return twice? The second return is just creating the new array arr.map, you have to tell it to return the new array too.

let nummys = [2, 3, 4, 5];

let doubles = nummys.map(function (val) {
  return val * 2;
});

// This is an example of using maps the same way as you are in the function but assigning it to a variable you pass the array into.

function valTimesIndex(arr) {
  return arr.map(function (val, i) {
    return val * i;
  });
}

// works fine b/c with all 3 forEach, map, and filter you can pass in value, index, and array.

function extractKey(arr, key) {
  return arr.map(function (val) {
    return val[key];
  });
}

function extractFullName(arr) {
  return arr.map(function (val) {
    return val.first + " " + val.last;
  });
}

let fullNames = [
  { first: "Ben", last: "Mills" },
  { first: "Bob", last: "Dalsin" },
  { first: "Lou", last: "Clark" },
];

let petArray = [
  { name: "Ben", hasPets: true },
  { name: "Tom", hasPets: false },
  { name: "John", hasPets: true },
  { name: "Sally", hasPets: true },
];

function filterByValue(arr, key) {
  return arr.filter(function (val) {
    return !val[key];
  });
}

// This would only return Tom if you did not have the ! it would return all the pet owners. The function is returning when the entered key is true.

function find(arr, value) {
  return arr.filter(function (val) {
    return value === val;
  });
}

function findInObj(arr, key, value) {
  return arr.filter(function (val) {
    return val[key] === value;
  });
}

function removeVowels(string) {
  const vowelArr = Array.from(string.toLowerCase());
  const vowels = "aeiou";
//   let lowerCased = vowelArr.toLowerCase();

    return vowelArr.filter(function(val){
        return vowels.indexOf(val) === -1;
    });
}

// you lowercase it when you create the array from the string, then filter through it letter by letter (each letter equals an index of the array) and return all of the ones where the index of that letter in the vowel string = -1 meaining it is not a vowel. 

function doubleOddNumbers(arr){
    return arr.filter(function(val){
       return val % 2 !== 0;
    })
    .map(function(val){
        return val * 2;
    });
}

// research the syntax of this one with .map linking right onto the whole expression?

// you just run them back to back with no ; inbetween. 