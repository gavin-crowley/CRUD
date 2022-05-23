// https://medium.com/@saraffath/crud-operations-using-es6-es2015-javascript-34c9afa821a9/
//comment

// 1. Create

// ========= AMATEUR ===========

let array = [];
const singers = ["justin", "drake", "posty", "charlie"];
for (let i = 0; i < singers.length; i++) {
  array.push(elements[i]);
}
console.log(array);

// =========== PRO ==============

let array = [];
const singers = ["justin", "drake", "posty", "charlie"];
array.push(...singers);
console.log(array);

// 2. Read

// ========= AMATEUR ===========

for (let j = 0; j < array.length; j++) {
  k = j + 1;
  console.log("Entry" + k + " " + array[j]);
}

// =========== PRO ==============

let printArray = () =>
  array.map((arrayElement, index) => {
    console.log(`Entry ${index + 1}. ${arrayElement}`);
  });
printArray();

//Output :
// Entry 1. justin
// Entry 2. drake
// Entry 3. post
// Entry 4. savage





// 3. Update

// ========= AMATEUR ===========

const elementAttributes = {
  name: "justin",
  age: "22",
  nationality: "canada",
  hobby: "singer"
};
elementAttributes.age = 24;
console.log(elementAttributes);

// =========== PRO ==============

let elementAttributes = {
  name: "justin",
  age: "22",
  nationality: "canada",
  hobby: "singer"
};
const elementAttributes = { ...elementAttributes, age: "24" };
console.log(elementAttributes);





// 4. Delete

// ========= AMATEUR ===========

const array = ["justin", "drake", "posty", "charlie"];
const index = array.indexOf("drake");
array.splice(index, 1);
console.log(array);

// =========== PRO ==============

const array = ["justin", "drake", "posty", "charlie"];
let deleteAnElement = array.filter(item => {
  return item !== "drake";
});
console.log(deleteAnElement);
