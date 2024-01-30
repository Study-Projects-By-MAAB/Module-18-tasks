/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/


/* subtask 1 */

let io = 81;
while (io <= 131) {
    console.log(io);
    io++;
}

/* subtask 2 */

let ies = 206;
let sum = 0;
while (ies <= 311) {
    sum = sum + ies;
    ies += 2;
}
console.log(sum);