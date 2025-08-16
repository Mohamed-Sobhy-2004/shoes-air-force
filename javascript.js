let BigImg = document.getElementById('Big-img')
let Container = document.getElementById('Container')


function img(src) {
    BigImg.src = src
}

function black() {
    Container.style.background = '#000'
}

function Gray() {
    Container.style.background = '#222'
}

function Gold() {
    Container.style.background = '#f5cb86'
}




let ary = [1, 3, 52, 36, 7, 8, 4]

console.log(ary.sort())