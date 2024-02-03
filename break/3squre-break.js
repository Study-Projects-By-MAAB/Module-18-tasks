/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let num = 1;
let rooted;
while (num <= 100) {
    rooted = Math.sqrt(num)
    if (num != 1) {
        if (Number.isInteger(rooted)) {
            console.log('firstSquare Number: ', num);
            break;
        }
    }
    console.log(num);
    num++
}