var marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65],
    [95, 45, 78]
] 
var sum = 0;
var i= 0;
while(i<marks.length){
    var j = 0;
    while(j<marks[i].length){
        sum+=marks[i][j];
        j++
    }
    i++
}
console.log(sum)