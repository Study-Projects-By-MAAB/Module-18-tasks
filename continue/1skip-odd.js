/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

let num = 1;
while (num <= 40) {
    num++;
    if (num % 2 !== 0) {
        continue;
    }
    console.log(num);
}