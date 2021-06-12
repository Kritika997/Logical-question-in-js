const marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65, 76],
    [95, 45, 78, 52, 49]
];
var average = [];
var a = 0;
for(let i = 0; i<marks.length; i++){
    var sum = 0;
    for(let j=0; j<marks[i].length; j++){
        sum+=marks[i][j];
    }
    a = sum/marks.length;
    average.push(a);
}
console.log(average);