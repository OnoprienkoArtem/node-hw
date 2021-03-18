
import task1 from './task1.js';
import task2 from './task2.js';

const tasks = { task1, task2 };

console.log(process.argv);
console.log(process.argv[2]);

tasks[process.argv[2]]();