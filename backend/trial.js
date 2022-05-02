// function joinedLogger(level,sep){
//     return function(){

//     }
// }
const sep = ";";

function trial() {
  return function (...arr) {
    throw new Error("jdjdjd!");
  };
}

console.log(trial()(...[1, 2, 3]));
