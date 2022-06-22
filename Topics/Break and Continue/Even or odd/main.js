function checkEvenOrOdd(numbers) {
    numbers.some(function (number) {
        if (number === 0) {
            return true;
        } else if (number % 2 === 0) {
            console.log("even");
        } else if (number % 2 !== 0) {
            console.log("odd");
        }
    });
}
