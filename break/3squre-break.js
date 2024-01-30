/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let num = 1;
let square;
while (num <= 100) {
    square = num * num
    if (square) {
        break
    }
    console.log(num);
    num++
}