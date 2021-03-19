import fs from 'fs';
import readline from 'readline';
import csvtojson from "csvtojson";

const task2 = () => {
    const csvFile = './csv/nodejs-hw1-ex1.csv';
    const txtFile = './txt/nodejs-hw1-ex2.txt';

    const readable = fs.createReadStream(csvFile);
    const writable = fs.createWriteStream(txtFile);

    const rl = readline.createInterface({
        input: csvtojson().fromStream(readable),
        output: writable,
        terminal: false
    });

    rl.on('line', line => rl.output.write(line))    


    rl.on('close', () => {
        console.log('close');  
    });

    rl.on('error', error => {
        console.log(error.message);  
    });

    rl.on('end', () => {
        console.log('end');  
    });
}

export default task2;
