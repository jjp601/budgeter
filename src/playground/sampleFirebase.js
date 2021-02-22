/*---------------- FIREBASE ---------------- */
// Get a reference to the database service
// const database = firebase.database();

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses);
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses);
//     })

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 1095.00,
//     createdAt: 34870573883
// })

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Python'
// })

// database.ref().set({
//     name: 'Jon P',
//     age: 29,
//     job: 'Software Developer',
//     location: {
//         city: 'Omaha',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((err) => {
//     console.log('Error: ', err);
// })

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })


/*---------------- FIREBASE ---------------- */