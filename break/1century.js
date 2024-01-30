/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

let num = 1;
while (num <= 200) {
    if (num <= 100) {
        console.log(num);
    }
    num++;
}

for (num = 1; num <= 200; num++) {
    if (num <= 100) {
        console.log(num);
    }
}