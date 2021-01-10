let objLetterNumber = {
	A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, 
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
}

function returnString() {
  //Get the name and date
  let fullname = document.getElementById("nametext").value;
  let date = document.getElementById("date").value;
  //Need to compare to vowels and consonants for the Soul and Outer #'s respect
  let vowelStr = "aeiouAEIOU";
  let consoStr = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  //Separates the vowels and consonants from the name
  let vowels = fullname.split("").filter(x => vowelStr.indexOf(x) > -1).join("");
  console.log(vowels);
  let conson = fullname.split("").filter(x => consoStr.indexOf(x) > -1).join("");
  console.log(conson);
  document.getElementById("display").innerHTML = "For the text:<br>" + fullname + 
    "<br><br>Your Numbers Are:" + 
    "<br><strong>Life Lesson Number: </strong>" + calcWordNumber(date) +
    "<br><strong>Soul Number: </strong>" + calcWordNumber(vowels) +
    "<br><strong>Outer Personality Number: </strong>" + calcWordNumber(conson) + 
    "<br><strong>Path of Destiny Number: </strong>" + calcWordNumber(fullname);
}

function calcWordNumber(string) {
	string = string.toUpperCase();
  let sum = 0;
  let master = 0;
  //If there is no 0 or 1
  if (string.indexOf("0") > -1 || string.indexOf("1") > -1) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] >= "0" && string[i] <= "9") {
        sum += parseInt(string[i]);
      }
    }
  } else {
    for (let i = 0; i < string.length; i++) {
      if (string[i] >= "A" && string[i] <= "Z") {
        sum += objLetterNumber[string[i]];
      }
    }
  }

  
  
  //Congest the number if it is too great
  if (sum > 78) 
  	sum = sum.toString().split("").map(x => parseInt(x)).reduce((acc, x) => acc + x);
  
  //Number on left side for breakdown of nums
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
  	return "Master num! " + master + ". Base number: " + left + "/" + sum + "."
  } else {
  	return "No Master Number. Base Number: " + left + "/" + sum + ".";
  }
  
}

//document.getElementById("display").innerHTML = calcWordNumber(document.getElementById("nametext"));
document.getElementById("formform").submit();

