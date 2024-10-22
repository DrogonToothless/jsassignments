let letters = ["a", "b", "c", "d", "e", "f"];
let targetLetter = "f";
let startIndex = 0;
let endIndex = letters.length - 1;
let midPoint = Math.floor((startIndex + endIndex) / 2);
while (letters[midPoint] !== targetLetter) {
    if (targetLetter < letters[midPoint]) {
        endIndex = midPoint - 1;
        console.log(endIndex);
    } else if (targetLetter > letters[midPoint]) {
        startIndex = midPoint + 1;
        console.log(startIndex);
    }
    midPoint = Math.floor((startIndex + endIndex) / 2);
    console.log(midPoint)
}
if (letters[midPoint] === targetLetter) {
    console.log(targetLetter)
} else {
    console.log(-1)
}