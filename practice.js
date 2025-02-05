// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphins = calcAverage(44, 42, 64);
// const scoreKoalas = calcAverage(78, 43, 24);


// const checkWinner = function(avgDolphins, avgKoalas){
//   if(avgDolphins >= 2 * avgKoalas){
//     console.log(`Dolphins win!! - ${avgDolphins} to ${avgKoalas}`)  
//   } else if(avgKoalas >= 2 * avgDolphins){
//     console.log(`Koalas win!! - ${avgKoalas} to ${avgDolphins}`)
//   } else{
//     console.log(`no team wins... 😢`)
//   }
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas));

let screenContainer = document.getElementById('screen');

let screen = 0;



const addToScreen = (screenPrint) => {
  'numOne' === screenPrint ? 
  screenContainer.textContent = screen += 1 : 
  'numTwo' === screenPrint ? 
  screenContainer.textContent = screen += 2 : 
  0;
};

const resetScreen = () => {
  screenContainer.textContent = screen = 0;
};