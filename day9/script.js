const con = document.getElementById('container')
const arr = ["./assets/spartans1.jpg",
    "./assets/spartans2.jpg",
    "./assets/spartans3.jpg",
    "./assets/spider.jpg"
]

let i = 0;

let changeimg = () => {
    i++;
    if (i == 4) {
        i = 0;
    }
    con.style.backgroundImage = `url('${arr[i]}')`;
}

let changeimg2 = () => {
    i--
    if (i == -1) {
        i = 3;

    }
    con.style.backgroundImage = `url('${arr[i]}')`;
}

let change = (a) => {
    con.style.backgroundImage = `url('${arr[a]}')`;
}

setInterval(changeimg, 2000);