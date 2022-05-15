/* const person = {
    name: 'John Doe',
    age: 35,
}

person.age = 65; */



/*
const add = (x, y) => x + y;

const double = number => number * 2;
 */



/* const personData = () => ({
    name: "john doe",
    age: 34,
    job: 'programmer'
}) */


/* const sayHello = () => console.log("Hello");
const sayHelloTo = sayHello;
sayHello2 = sayHelloTo; */




/* const myFunction = true
    ? () => console.log('This is true')
    : () => console.log('this is false');

 */



/*
const DEVELOPMENT = true;

const fetchDataReal = () => {
    // time intensive
}

const fetchDataFake = () => ({
    name: 'John Doe',
    age: 35,
})


const fetchData = DEVELOPMENT
    ? fetchDataFake
    : fetchDataReal */




/* const add = x => x + 2;
const multiply = x => x * 2;
const divide = x => x / 2;

const allFunctions = [
    add,
    multiply,
    divide
]

let number = 60;

allFunction.forEach(func => number = func(number));

console.log(number); */



// creating functions and add arguments
/* const add = (x, y) => x + y;
const subs = (x, y) => x - y;

const combine2 = func => func(2, 3)

console.log(combine2(add)) */


/* const createPrinter = () => () => console.log('hello'); */



/* const multiplyer = y => x => x * y;

const double = multiplyer(2);
const triple = multiplyer(3);
const quad = multiplyer(4);

console.log(double(8)); */



/* const createPrinter = () => {

    const myFavoriteNumber = 42;

    return () =>
        console.log(`My favorite number ${myFavoriteNumber}`);
}

const printer = createPrinter()
printer() */



/* const person = ({ name, age, job }) => {

    var _name = name; // private
    var _age = age;
    var _job = job;

    return {
        getName: () => _name, //only accessible by this
        setJob: newJob => _job = newJob,
    }
}
const me = person({ name: "shawn", age: 25, job: 'developer' });
console.log(me.getName())
console.log(me.setJob('senior developer')) */



/* Higher order functions  */


/* const person = {
    name: "John doe",
    age: 50,
    hairColor: 'brown',
    eyeColor: 'blue'
}

const careerData = {
    title: "Developer",
    company: 'ABC software'
}

const personCareerData = {
    ...person,
    ...careerData
}

console.log(personCareerData) */

/* const numbers = [1, 2, 3, 4, 5, 6]
const newNumbers = [
    0,
    ...numbers,
    7
]

console.log(newNumbers) */


/* const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNumbers = numbers.map(number => number * 2);
console.log(newNumbers)


let numEven = numbers.filter(number => number % 2 === 0)
console.log(numEven) */


/* const words = [
    'hello',
    'goodbye',
    'the',
    'antartica'
]

let filterFive = words.filter(word => word.length > 5);
console.log(filterFive)
 */



/* const employees = [{
    name: 'Jane Doe',
    salary: 90000,
}, {
    name: 'Donald Jones',
    salary: 65000,
}, {
    name: 'Donna Appleseed',
    salary: 1500000,
}, {
    name: 'John Smith',
    salary: 250000,
}]; */


/* const makeMillions = () => employees.filter(employee => employee.salary > 1000000);
const result = employees.some(makeMillions)
console.log(result)
 */

/* let name = "david";
let joe = !!name; //convert to boolean
console.log(joe) */



/* const formValues = [
    'shawn',
    'david',
    'Maine',
    ''
]

const isNotEmpty = string => !!string;
const allFiend = formValues.every(isNotEmpty)

console.log(allFiend)
 */


/* let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sliNumbers = numbers.slice(2, 5);
console.log(numbers.slice().reverse())
console.log(numbers)

console.log(sliNumbers) */



/* let numbers = [5, 6, 10, 11, 25, 44, 88, 98, 80, 64, 58, 77, 35, 25, 73, 16]
const sortNum = numbers.sort()
console.log(sortNum.sort((a, b) => b - a)) */
/* 
let numbers = [5, 6, 10, 11, 25, 44, 88, 98, 80, 64, 58, 77, 35, 25, 73, 16]
const reduceNum = numbers.reduce((total, numbers) => total + numbers, 0)
console.log(reduceNum)
 */



/* 

const employees = [{
    name: 'John Olsen',
    age: 54,
    jobTitle: 'developer',
    salary: 70000,
}, {
    name: 'Karen Norris',
    age: 34,
    jobTitle: 'engineer',
    salary: 75000,
}, {
    name: 'Daryl Cline',
    age: 25,
    jobTitle: 'secretary',
    salary: 54000,
}, {
    name: 'Abbey Garcia',
    age: 40,
    jobTitle: 'developer',
    salary: 100000,
}, {
    name: 'Finn Smith',
    age: 29,
    jobTitle: 'engineer',
    salary: 40000,
}, {
    name: 'Eve Wordsworth',
    age: 20,
    jobTitle: 'developer',
    salary: 65000,
}, {
    name: 'Ronald Jacobs',
    age: 60,
    jobTitle: 'developer',
    salary: 90000,
}];



const filterEmployee = employees.filter(employee => employee.jobTitle !== 'developer');
console.log(filterEmployee)  

const mapEmployeee = filterEmployee.map(filterEmployee => filterEmployee.salary)
console.log(mapEmployeee)

const reduceEmployee = mapEmployeee.reduce((total, mapEmployeee) => total + mapEmployeee, 0)
console.log(reduceEmployee)

const averageSalary = reduceEmployee / mapEmployeee.length;
console.log(averageSalary)

*/


/* const add = (x, y) => x + y;
const addPartial = (x, y) => add(x, y);

const add5 = addPartial(5, 10)
console.log(add5) */


/* const countDown = x => {
    if (x < 0) return;
    console.log(x);
    countDown(x - 1)
}
countDown(10) */


/* const countUp = (x, max) => {
    if (x > max) return;
    console.log(x);
    countUp(x + 1, max)
}
countUp(0, 500) */

/* 
convert arrow function to normal function */
/* const add = (x, y, z) => x + y + z;
console.log(add.toString()) */

/* const add = (x, y, z) => x + y + z;
console.log(add(1, 2, 3))
 */

/* const add = (x, y, z) => x + y + z;
console.log(add.apply(null, [1, 3, 3]))
 */

/* const add = (x, y, z) => x + y + z;
const arg = [1, 2, 3];
console.log(add(...arg)) */

/* const add = (x, y, z) => x + y + z;
const arg = [1, 2, 3];
const add1 = add.bind(null, 1);
console.log(add1(2, 3)) */


/* challenges */



/* const electionVotes = [
    'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley',
    'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 'Ben',
    'Michael', 'Rick', 'Albert', 'Karen', 'Harry',
    'Karen', 'Donna', 'Ashley', 'Albert', 'Harry',
    'Dane', 'Dane', 'Rick', 'Donna', 'Mortimer',
];

const tallyVotes = votes =>
    votes.reduce((total, name) => ({
        ...total,
        [name]: total[name] ? total[name] + 1 : 1,
    }), {})


console.log(tallyVotes(electionVotes));
 */

/* import words from 'an-array-of-english-words';


const counterOcurrences = arr =>
    arr.reduce((total, str) => ({
        ...total,
        [str]: acc[str] ? acc[str] + 1 : 1,
    }), {})

const hasSameLetterCount = (word1, word2) => {
    const word1Count = counterOcurrences(word1.split(''))
    const word2Count = counterOcurrences(word2.split(''))

    return Object.keys(word1Count).length === Object.keys(word2Count).length
        && Object.keys(word1Count).every(letter => word1Count[letter] === word2Count[letter])
}


const findAnagrams = (word, allWords) => {

    return allWords.filter(entry => hasSameLetterCount(word, entry))
        .filer(anagram => anagram !== word)
}

console.log(findAnagrams('cinema', words));
 */
/*
    Expected output: ['iceman', 'anemic']
*/


///validation functional programming

const currentInputValues = {
    firstName: 'dataa', // Must be at least 2 characters
    lastName: '', // Must be at least 2 characters
    zipCode: '', // Must be exactly 5 characters
    state: '', // Must be exactly 2 characters
}

const inputCriteria = {
    firstName: [
        value => value.length >= 2 ? '' : 'First name is at lease 2 characters'
    ],
    lastName: [
        value => value.length >= 2 ? '' : 'Last name is at lease 2 characters'
    ],
    zipCode: [
        value => value.length === 5 ? '' : 'Zipcode must be exactly 5 characters long'
    ],
    state: [
        value => value.length >= 2 ? '' : 'State is at lease 2 characters'
    ],
};

const getErrorMessages = (inputs, criteria) => {
    return Object.keys(inputs).reduce((acc, fieldName) => [
        ...acc,
        ...criteria[fieldName].map(test => test(inputs[fieldName])),

    ], []).filter(message => message)
}

console.log(getErrorMessages(currentInputValues, inputCriteria));

/*
    Expected Output: [
        'First name must be at least 2 characters',
        'Last name must be at least 2 characters',
        'Zip code must be exactly 5 characters',
        'State must be exactly 2 characters',
    ]
    */