function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiterPattern = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n", 2);
        delimiterPattern = new RegExp(parts[0][2]);
        numbers = parts[1];
    }

    const numArray = numbers.split(delimiterPattern);
    const negativeNumbers = numArray.filter(num => parseInt(num, 10) < 0);

    if (negativeNumbers.length) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(",")}`);
    }

    return numArray.reduce((total, number) => total + parseInt(number, 10), 0);
}

module.exports = { add };
