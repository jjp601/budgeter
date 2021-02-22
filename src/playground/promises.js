const promise = new Promise((resolve, reject) => {
    resolve({
        name: 'Jon',
        age: 28
    })
})

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('Error: ', error);
})