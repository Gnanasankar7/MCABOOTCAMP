const con = document.getElementById('container')
const arr = ["./assets/spartans1.jpg",
    "./assets/spartans2.jpg",
    "./assets/spartans3.jpg",
    "./assets/spider.jpg"
]

let i = 1;
let changeimg = () => {
    if (i == 4) {
        i = 0;
    }
    con.style.backgroundImage = `url('${arr[i]}')`;
    i++
}
let j = 3;
let changeimg2 = () => {
    if (j == -1) {
        j = 3;

    }
    con.style.backgroundImage = `url('${arr[j]}')`;
    j--
}