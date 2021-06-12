
const numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var count = 0
var count1 = 0
for(let i = 0; i<numbers.length; i++){
    if(numbers[i]>count){
        count = numbers[i];
    };
}
// a = 0
for(let i=0; i<numbers.length; i++){
    if (numbers[i]>count1&&numbers[i]<count){
        count1 = numbers[i];
    };
};
console.log(count1,count)
