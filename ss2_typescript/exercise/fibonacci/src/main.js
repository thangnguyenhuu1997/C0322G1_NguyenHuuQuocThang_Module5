var sum = 0;
function findFibonacci(n) {
    if (n == 0)
        return 0;
    if (n == 1 || n == 2)
        return 1;
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}
console.log("20 số đầu fibonacci đầu tiên là");
for (var i = 0; i < 20; i++) {
    console.log(findFibonacci(i));
    sum += findFibonacci(i);
}
console.log("tổng là: " + sum);
