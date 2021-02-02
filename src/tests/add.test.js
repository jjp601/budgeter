const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should Add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
})

test('Should return a name with greeting', () => {
    const result = generateGreeting('Jon');
    expect(result).toBe('Hello Jon!')
})

test('Should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!')
})