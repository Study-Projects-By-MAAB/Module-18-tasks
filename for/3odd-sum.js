

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

// <--- Subtask 1 --->

let sum = 0;
for (o = 91; o <= 129; o += 2) {
    sum = sum + o;
}
console.log(sum);


// <--- Subtask 2 --->

let sumE = 0;
for (e = 51; e <= 85; e++) {
    e % 2 == 0 ? sumE = sumE + e : 0;
}
console.log(sumE);
