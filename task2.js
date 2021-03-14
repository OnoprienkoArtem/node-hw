import fs from 'fs';
import csv from "csvtojson";


const csvFile = './csv/1.csv';

const readable = fs.createReadStream(csvFile);
const writable = fs.createWriteStream('./txt/out.json');


// readable
// .pipe(csv())
// .on('data', chunk => console.log(chunk))
// .pipe(writable);


// csv().fromStream(readable).then((jsonObj)=>{
//     console.log(jsonObj);
// })

readable.on('data', chunk => {
    console.log(chunk);  
});

readable.on('close', () => {
    console.log('close');  
});

readable.on('error', error => {
    console.log(error.message);  
});

readable.on('end', () => {
    console.log('end');  
});


