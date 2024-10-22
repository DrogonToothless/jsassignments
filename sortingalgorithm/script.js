const numberArray = [2, 5, 4, 8, 3, 9, 1, 7, 6];
console.log(numberArray)
function numberSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
numberSort(numberArray);
console.log(numberArray);
