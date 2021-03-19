import readline from 'readline';

 const task1 = () => {
    const reverseString = str => str.split('').reverse().join('');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', line => {
        process.stdout.write(reverseString(line)); 
    });
}

export default task1;

