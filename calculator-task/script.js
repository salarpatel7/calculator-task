function add(numbers) {
    if (numbers === "") return 0;
    return parseInt(numbers);
}

console.log(add("")); // Output: 0
console.log(add("1")); // Output: 1