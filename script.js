const inputField = document.getElementById("numberInput");
const sortButton = document.getElementById("sortButton");
const resetButton = document.getElementById("resetButton");
const errorMessage = document.getElementById("errorMessage");
const outputMessage = document.getElementById("outputMessage");

function bubbleSortFun(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function showError(message) {
    errorMessage.textContent = message;
    outputMessage.textContent = "";
}

function showOutput(numbers) {
    errorMessage.textContent = "";
    outputMessage.textContent = numbers.length ? `Sorted Numbers: ${numbers.join(", ")}` : "No numbers to sort.";
}

function sortNumbers() {
    const input = inputField.value.trim();
    if (!input) {
        return showError("Please enter valid numbers separated by commas or spaces.");
    }

    const numberArray = input.split(",")
                             .flatMap(part => part.trim().split(" "))
                             .filter(num => num !== '');


    if (!numberArray.every(item => !isNaN(item))) {
        return showError("Please enter valid numbers separated by commas or spaces.");
    }

    const numbers = bubbleSortFun(numberArray.map(Number));
    showOutput(numbers);
}

function resetFields() {
    inputField.value = "";  
    errorMessage.textContent = "";  
    outputMessage.textContent = "";  
}

sortButton.addEventListener("click", sortNumbers);
resetButton.addEventListener("click", resetFields);  
