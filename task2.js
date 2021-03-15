import fs from 'fs';
import csvtojson from "csvtojson";


const csvFile = './csv/1.csv';

const readable = fs.createReadStream(csvFile);
const writable = fs.createWriteStream('./txt/out.json');


// readable
// .pipe(csvtojson())
// .on('data', chunk => console.log(chunk))
// .pipe(writable);


csvtojson().fromStream(readable).pipe(writable);



readable.on('close', () => {
    console.log('close');  
});

readable.on('error', error => {
    console.log(error.message);  
});

readable.on('end', () => {
    console.log('end');  
});


