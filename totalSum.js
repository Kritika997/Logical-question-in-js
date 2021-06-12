const number = 30;
const n = [10, 11, 12, 13, 14, 17, 18, 19];
var a = []
for(let i = 0; i<n.length; i++){
    let b = []
    for(let j=1; j<n.length; j++){
        if(n[i]+n[j]==number){
            b.push(n[i]);
            b.push(n[j]);
        };
    };
    if(! b.includes(a[i])){
        a.push(b);
    }
}
console.log(a)