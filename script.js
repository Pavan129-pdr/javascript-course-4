// Part 1: Array Manipulation Methods

// 1. Add 3 fruits using push()
let fruits1 = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits1.push("Pineapple", "Kiwi", "Papaya");
console.log("1.", fruits1);

// 2. Remove the last element using pop()
let numbers2 = [10, 20, 30, 40, 50, 60];
numbers2.pop();
console.log("2.", numbers2);

// 3. Remove the first element using shift()
let names3 = ["Pavan", "Rahul", "Priya", "Kiran", "Arjun"];
names3.shift();
console.log("3.", names3);

// 4. Add two numbers at the beginning using unshift()
let numbers4 = [30, 40, 50, 60];
numbers4.unshift(10, 20);
console.log("4.", numbers4);

// 5. Remove 2 elements starting from index 1 using splice()
let arr5 = [10, 20, 30, 40, 50];
arr5.splice(1, 2);
console.log("5.", arr5);

// 6. Replace 3 with 100 using splice()
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 1, 100);
console.log("6.", arr6);

// 7. Replace elements from index 2 to index 4 using fill()
let numbers7 = [1, 2, 3, 4, 5];
numbers7.fill("hello", 2, 5);
console.log("7.", numbers7);

// Part 2: Array Merge and Search Methods
// 8. Combine two arrays using concat()
let arr8a = [10, 20, 30];
let arr8b = [40, 50, 60];
let result8 = arr8a.concat(arr8b);
console.log("8.", result8);

// 9. Extract elements from index 1 to index 4 using slice()
let arr9 = [10, 20, 30, 40, 50, 60];
let result9 = arr9.slice(1, 5);
console.log("9.", result9);

// 10. Convert nested array into a single-level array
let nested10 = [1, [2, 3], [4, [5, 6]]];
let result10 = nested10.flat(Infinity);
console.log("10.", result10);

// 11. Check whether 30 exists using includes()
let arr11 = [10, 20, 30, 40, 50];
console.log("11.", arr11.includes(30));

// 12. Find the index of 20 using indexOf()
let arr12 = [5, 10, 15, 20, 25];
console.log("12.", arr12.indexOf(20));

// 13. Find the last index of 2 using lastIndexOf()
let arr13 = [1, 2, 3, 2, 1, 2];
console.log("13.", arr13.lastIndexOf(2));

// 14. Arrange numbers using sort()
let numbers14 = [50, 10, 40, 20, 30];
numbers14.sort((a, b) => a - b);
console.log("14.", numbers14);

// 15. Reverse an array of 7 numbers
let numbers15 = [1, 2, 3, 4, 5, 6, 7];
numbers15.reverse();
console.log("15.", numbers15);

// Part 3: Spread and Rest Operators

// 16. Merge two arrays using the spread operator
let arr16a = [1, 2, 3, 4];
let arr16b = [5, 6, 7, 8];
let result16 = [...arr16a, ...arr16b];
console.log("16.", result16);

// 17. Merge student and job objects using spread
let student17 = {
    name: "Pavan",
    age: 23,
    cgpa: 8.5
};

let job17 = {
    role: "Backend Developer",
    company: "ABC Technologies"
};

let employee17 = { ...student17, ...job17 };
console.log("17.", employee17);

// 18. Accept two parameters and collect remaining arguments
function example18(a, b, ...remaining) {
    console.log("First parameter:", a);
    console.log("Second parameter:", b);
    console.log("Remaining arguments:", remaining);
}

example18(10, 20, 30, 40, 50);

// 19. Sum a, b, c[0], and c[1]
function one(a, b, ...c) {
    let sum = a + b + c[0] + c[1];
    console.log("19. Sum:", sum);
}

one(10, 20, 30, 40);

// 20. Copy all elements from the first array into a new array
let arr20a = [10, 20, 30, 40];
let arr20b = [50, 60, 70];
let copy20 = [...arr20a];

console.log("20. Original array:", arr20a);
console.log("20. New array:", copy20);
console.log("20. Second array:", arr20b);

// Part 4: Array Destructuring

// 21. Extract four values using array destructuring
let arr21 = [10, 20, 30, 40];

let [a21, b21, c21, d21] = arr21;

console.log("21.", a21, b21, c21, d21);

// 22. Extract values using nested destructuring
let nested22 = [1, 2, [3, 4, [5, 6]]];

let [a22, b22, [c22, d22, [e22, f22]]] = nested22;

console.log("22.", a22, b22, c22, d22, e22, f22);

// 23. Extract student details using destructuring
let student23 = ["Pavan", 23, 8.5];

let [name23, age23, cgpa23] = student23;

console.log("23. Name:", name23);
console.log("23. Age:", age23);
console.log("23. CGPA:", cgpa23);

// Part 5: Object Destructuring

// 24. Extract name, role, and location
let person24 = {
    name: "Pavan",
    role: "Backend Developer",
    location: "Hyderabad"
};

let { name: name24, role: role24, location: location24 } = person24;

console.log("24. Name:", name24);
console.log("24. Role:", role24);
console.log("24. Location:", location24);

// 25. Extract city and state using nested object destructuring
let student25 = {
    name: "Pavan",
    address: {
        city: "Rajahmundry",
        state: "Andhra Pradesh"
    }
};

let {
    address: { city: city25, state: state25 }
} = student25;

console.log("25. City:", city25);
console.log("25. State:", state25);

// 26. Extract all four values using destructuring
let person26 = {
    name: "Pavan",
    role: "Backend Developer",
    location: {
        mainLocation: "Hyderabad",
        currentLocation: "Vijayawada"
    }
};

let {
    name: name26,
    role: role26,
    location: {
        mainLocation: main26,
        currentLocation: current26
    }
} = person26;

console.log("26. Name:", name26);
console.log("26. Role:", role26);
console.log("26. Main Location:", main26);
console.log("26. Current Location:", current26);


// Part 6: Mixed Practical Challenges

// 27. Remove first and last elements, then add two at the beginning
let arr27 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr27.shift();
arr27.pop();
arr27.unshift(100, 200);

console.log("27.", arr27);

// 28. Use includes(), indexOf(), and lastIndexOf()
let arr28 = [10, 20, 30, 20, 40, 20, 50];
let selected28 = 20;

console.log("28. Exists:", arr28.includes(selected28));
console.log("28. First index:", arr28.indexOf(selected28));
console.log("28. Last index:", arr28.lastIndexOf(selected28));

// 29. Merge employee objects and destructure name and role
let employee29a = {
    name: "Pavan",
    age: 23
};

let employee29b = {
    role: "Backend Developer",
    company: "ABC Technologies"
};

let employee29 = { ...employee29a, ...employee29b };

let { name: name29, role: role29 } = employee29;

console.log("29. Employee Name:", name29);
console.log("29. Employee Role:", role29);
console.log("29. Complete Employee:", employee29);

// 30. Flatten a nested array, reverse it, and print
let nested30 = [1, [2, 3], [4, [5, 6]], 7];

let result30 = nested30.flat(Infinity);
result30.reverse();

console.log("30.", result30);

