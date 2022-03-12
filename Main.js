import area from './CircleArea.js';
import around from './CircleAround.js';

const args = process.argv.slice(2);

console.log("Dairenin Alanı => ", area(args[0]*1));
console.log("Dairenin Çevresi => ", around(args[0]*1));
