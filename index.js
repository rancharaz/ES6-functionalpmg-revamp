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


const words = [
    'hello',
    'goodbye',
    'the',
    'antartica'
]

let filterFive = words.filter(word => word.length > 5);
console.log(filterFive)

















































































