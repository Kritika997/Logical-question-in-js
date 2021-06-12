// function myDispalyer(some){
//     console.log(some);
// };
// function myCalculator(num1,num2,mycallback){
// let sum = num1+num2;
// mycallback(sum);
// };
// myCalculator(5,5,myDispalyer);
// var name1 = window.prompt("Enter your name: ");
// console.log(name1);

function scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await scaryClown();
    console.log('Message:', msg);
  }
  
msg();
