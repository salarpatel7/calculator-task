function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }

    const numArray = numbers.split(delimiter);
    const negatives = numArray.filter(num => parseInt(num) < 0);

    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

console.log(add("")); // Output: 0
console.log(add("1")); // Output: 1
console.log(add("1,5")); // Output: 6
console.log(add("1,2,3,4,5")); // Output: 15
console.log(add("1\n2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3
try {
    console.log(add("1,-2,3,-4,5")); // Throws Error: Negative numbers not allowed: -2,-4
} catch (e) {
    console.error(e.message);
}

