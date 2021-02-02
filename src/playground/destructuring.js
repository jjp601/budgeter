// Object Destructuring

// const person = {
//     name: 'Jon',
//     age: 29,
//     location: {
//         city: 'Omaha',
//         temp: 54
//     }
// }

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;

// console.log(`Its ${temperature} in ${city}.`);

// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [ street, city, state = 'New York', zip ] = address;

console.log(`You are in ${city}, ${state}.`);


const item = ['Coffee', '$2.00', '$2.50', '$2.75'];

const [ product, , mediumPrice ] = item;

console.log(`A medium ${product} costs ${mediumPrice}.`);
