const list1 = [1,2,3,4,5,6];
const list2 = [2,3,1,0,6,7];
var a = [];
for (let i = 0; i<list1.length; i++){
    if(! list2.includes(list1[i])){
        a.push(list1[i]);
    }
};
console.log(a);