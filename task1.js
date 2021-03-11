import readline from 'readline';


const reverseString = str => str.split('').reverse().join('');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', line => {
    console.log(reverseString(line));
});
