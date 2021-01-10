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
  let conson = fullname.split("").filter(x => consoStr.indexOf(x) > -1).join("");

  document.getElementById("textdisplay").innerHTML = fullname;
  document.getElementById("bdaydisplay").innerHTML = translateDate(date);
  document.getElementById("lifelessonnum").innerHTML = calcWordNumber(date);
  document.getElementById("soulnum").innerHTML = calcWordNumber(vowels);
  document.getElementById("outernum").innerHTML = calcWordNumber(conson);
  document.getElementById("destinynum").innerHTML = calcWordNumber(fullname);

  //In Calc word number, just get the ['Left/Master' and 'Left/Base']

  //Have a separate function to format it to "Master number: " for the purpose of the strings

  //Click here to get a detailed explanation of what your numbers mean!
  //Try to pass all the numbers to the link so that they can be read from the text file
}

function translateDate(strDate) {
  let arrDate = strDate.split("-");
  let monthArray = ['0','January','February','March','April','May','June','July',
    'August','September','October','November','December'];
  let day = parseInt(arrDate[2]);
  let year = arrDate[0];
  let month = monthArray[parseInt(arrDate[1])];
  if (day === 1 || day === 21 || day === 31) day = day + "st";
  if (day === 2 || day === 22) day = day + "nd";
  if (day === 3 || day === 23) day = day + "rd";
  if ((day >= 4 && day <= 20) || (day >= 24 && day <= 30)) day = day.toString() + "th";
  return "The " + day + " day, of month " + month + ", and year " + year;
}

function calcWordNumber(string) {
	string = string.toUpperCase();
  let sum = 0;
  let master = 0;
  //If there is a zero or one - calculate the date
  if (string.indexOf("0") > -1 || string.indexOf("1") > -1) {
    //Split the string evenly, three numbers
    let splitDate = string.split("-");
    console.log(splitDate);
    sum += parseInt(splitDate[1]) + parseInt(splitDate[2]);
    console.log("Sum here! " + sum);
    sum += splitDate[0].split("").map(x => parseInt(x)).reduce((sum, x) => sum + x);
    console.log("Sum here! " + sum);
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

