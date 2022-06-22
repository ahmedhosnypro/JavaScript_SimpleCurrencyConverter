function sum(numbers) {
    let result = 0;
    numbers.some(function (number) {
        if (number !== 0) {
            result += number;
        } else {
            return true;
        }
    });
    return result;
}
