//Task 1
let s1 = new Set();
s1.add('h');
s1.add('b');
s1.add('o');
s1.add('h');
console.log(s1);

//Task 2
document.querySelector('.b2').onclick = f2;
let s2 = new Set();
function f2() {
    let input = document.querySelector('.i2').value;
    s2.add(input);
    console.log(s2);
}

//Task 3
document.querySelector('.b3').onclick = f3;

function f3() {
    let input = document.querySelector('.i3').value;
    s2.delete(input);
    console.log(s2);
}

//Task 4
document.querySelector('.b4').onclick = f4;
function f4() {
    let s4 = new Set();
    s4.add(1);
    s4.add(2);
    s4.add(3);
    let input = +document.querySelector('.i4').value;
    console.log(s4.has(input))
    if (s4.has(input)) {
        document.querySelector('.out4').innerHTML = true;
    }
    else {
        document.querySelector('.out4').innerHTML = false;
    }
}

//Task 5
document.querySelector('.b5').onclick = f5;
function f5() {
    let s5 = new Set();
    s5.add(1);
    s5.add(2);
    s5.add(3);
    s5.add(4);
    document.querySelector('.out5').textContent = s5.size;
}

//Task 6
document.querySelector('.b6').onclick = f6;
function f6() {
    let s6 = new Set();
    s6.add(1);
    s6.add(2);
    s6.add(3);
    s6.add(1);
    console.log(s6)
}

//Task 7
document.querySelector('.b7').onclick = f7;
function f7() {
    let input = document.querySelector('.i7').value;
    let s7 = new Set(input);
    if (input.length == s7.size && input.length >= 6) {
        document.querySelector('.out7').textContent = 1;
    }
    else {
        document.querySelector('.out7').textContent = 0;
    }
}


//Task 8
document.querySelector('.b8').onclick = () => {
    console.log(f8());
};
let s8 = new Set([1, 2, 3, 4, 6, 7, 8, 9]);
let ar8 = Array.from(s8);
let res8 = [];
function f8() {
    for (let i = 0; i < ar8.length; i++) {
        if (ar8[i] > 5) {
            res8.push(ar8[i]);
        }
    }
    return res8;
}

const f9 = our_set => {
    return Array.from(our_set).join(' ');
}

document.querySelector('.b-9').onclick = () => {
    let s9 = new Set([9, 8, 7, 6, 5]);
    document.querySelector('.out-9').innerHTML = f9(s9);
}





