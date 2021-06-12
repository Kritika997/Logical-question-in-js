const name1=[ 'n', 'i', 't', 'i', 'n','k' ] ;
var a = name1.length;
var b = []
var b =name1.length-1
console.log(b)
for (i in name1){
    if(name1[i]===name1[b]){
        console.log("yes it is palindrome")
    }else{
        console.log("no")
    }
    b=b-1
}
// for(a>0; a--;){
//     b.push(name1[a]);
// }
// if (name1===b){
//     console.log("pelindrome");
// }else{
//     console.log("not");
// }