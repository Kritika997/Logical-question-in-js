//apply method;
// function number(a,b,c){
    //     console.log(a+b+c);
    // }
    // var varray = [1,8,3];
    // number.apply(null,varray);
    
    // function number(a,b,c){
    //     console.log(a+b+c);
    // }
    // var varray = [1,8,3];
    // number(...varray);

//concat method;
// let a = [1,2,3];
// let b = [4,5,6];
// a = a.concat(b);
// console.log(a);

// let a = [1,2,3];
// let b = [4,5,9];
// a = [...a,...b]
// console.log(a);

//copy method;
// let a = [1,2,3];
// let b = a;
// b.push(4,5);
// console.log(b);

let a = [1,2,3];
let c = [6,7,8,9];
let b = [...a,4,5,...c];
console.log(b);
console.log(a,b);