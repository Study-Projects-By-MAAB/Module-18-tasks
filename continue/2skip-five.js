/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (num = 55; num <= 85; num++) {
    if (num % 2 !== 0) {
        if (num % 5 === 0) {
            continue
        }
        console.log(num);
    }
}