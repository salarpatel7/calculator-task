function add(numbers) {
    if (numbers === "") return 0;
    const numArray = numbers.split(",");
    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

console.log(add("")); // Output: 0
console.log(add("1")); // Output: 1
console.log(add("1,5")); // Output: 6
