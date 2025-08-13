let arr = [10, 20, 30, 45, 45, 30, 45, 78]
let search = 45;
let a;

for (i = 0; i < arr.length; i++) {
    if (arr[i] == search) {
        a = i
    }
}
console.log("The index is", a)