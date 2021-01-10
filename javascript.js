let objLetterNumber = {
	A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, 
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
}

function calcWordNumber(string) {
	string = string.toUpperCase();
  let sum = 0;
  let master = 0;
	for (let i = 0; i < string.length; i++) {
  	if (string[i] >= "A" && string[i] <= "Z") {
    	sum += objLetterNumber[string[i]];
    }
  }
  
  console.log(sum);
  //Congest the number if it is too great
  if (sum > 78) 
  	sum = sum.toString().split("").map(x => parseInt(x)).reduce((acc, x) => acc + x);
  
  //Number on left side
  let left = sum;
  while (sum > 9) {
    if (sum === 11 || sum === 22 || sum === 33 || sum === 44) {
      master = sum;
    }
    console.log(sum)
    sum = sum.toString().split("").map(x => parseInt(x)).reduce((acc, x) => acc + x);
  }
  console.log(sum)
  
  if (master > 0) {
  	return "The base number of " + string + ", is: " + sum + ". Master num! " + left + "/" + master;
  } else {
  	return "The base number of " + string + ", is: " + left + "/" + sum + ". No master";
  }
  
}

console.log(calcWordNumber("sacramento"))