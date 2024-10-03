function absolute (x,y) {
    return Math.abs(x - y);
}
console.log(absolute(43,87));

function square(value) {
    return Math.sqrt(value);

}
console.log(square(25));

function cube(num){
    return Math.cbrt(num);
}
console.log(cube(216));

function random(get){
    return Math.random(get);
}
console.log(random(7));

let c1=5
let c2=1
let c3=""
let c4=1
while( c2<=c1){
    c3+="*";
    c4++;
    console.log(c3);
    c2++;
}

