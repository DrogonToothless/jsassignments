function correctNotation() {
    const string = "18 7 /";
    const characters = string.split(" ");
    if (!isNaN(characters[0]) && !isNaN(characters[1])) {
        const numberOne = parseInt(characters[0]);
        const numberTwo = parseInt(characters[1]);
        console.log(numberOne, numberTwo);
        function mathNumbers() {
            const operator = characters[2];
            let answer;
            if (operator === "+") {
                answer = numberOne + numberTwo;
            } else if (operator === "-") {
                answer = numberOne - numberTwo;
            } else if (operator === "*") {
                answer = numberOne * numberTwo;
            } else if (operator === "/") {
                answer = numberOne / numberTwo;
            } else {
                console.log("Couldn't find a valid operator");
                return;
            }
            console.log(answer);
        }
        mathNumbers();
    } else {
        console.log("Couldn't find any valid numbers");
    }
}
correctNotation();