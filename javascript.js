let objLetterNumber = {
	A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, 
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8, '7': 7
}

function returnString() {
  //Get the name and date
  let fullname = document.getElementById("nametext").value;
  let date = document.getElementById("date").value;
  //Need to compare to vowels and consonants for the Soul and Outer #'s respect
  let vowelStr = "aeiouAEIOU7";
  let consoStr = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  //Separates the vowels and consonants from the name
  let vowels = fullname.split("").filter(x => vowelStr.indexOf(x) > -1).join("");
  let conson = fullname.split("").filter(x => consoStr.indexOf(x) > -1).join("");

  document.getElementById("textdisplay").innerHTML = fullname;
  document.getElementById("bdaydisplay").innerHTML = translateDate(date);
    document.getElementById("lifenumberinfo").innerHTML = getLifeNumberInfo(calcWordNumber(date));
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
  return month + " " + day + ", " + year;
}

//*** COME BACK HERE!!!
function getLifeNumberInfo(nums) {
  //Input will be as an array, either length 2 (has master) or length 1, w/ no master
  let strReturn = `This represents the lessons you must learn in this lifetime and is most significant in your choice of a career. It is derived from your full birthdate. Even a business or idea has a moment of "birth" and can therefore be treated in the same way. The Life Lesson Number is a constant and cannot be changed or modified in any way because it is derived from the birthdate. It indicates vocation plus the lesson you came into incarnation to overcome or to learn. It also represents the cosmic gift you are given in order to accomplish your destiny.<br><br>`;
  //Holds the data for life lesson numbers
  
  let lifeNumStats = [
    `***1*** THE LIFE LESSON NUMBER: You must learn to be original, strong-willed, creative and innovative. You should have the courage and drive to go ahead into new fields of expression and be a pioneer. You should always go forward, never turn back. At times you may be dictatorial and stubborn because you do not like to be restricted or directed. You are a good executive, and work best alone. You are usually efficient and well-organized. You are not naturally domestic but can manage well in any situation. You usually like sports and athletics, and enjoy the thrill of winning. You are sophisticated, not emotionally romantic, and always appear at the head of social and commercial groups. By learning the lessons of number 1, you become intimately familiar with the God energy, that probing, seeking, independent spark that moves all creation. You are creative on the physical plane because your pioneer spirit precedes all others, and expresses your unique individuality. *******`,
    `***2*** THE LIFE LESSON NUMBER: You are here to learn to become a good mixer. You are a good salesperson, more persuasive than forceful. You should be a support for those in the leadership role, help them to find their goals in life, and remain behind the scenes if necessary. This quality can be a help to you in business because those who benefit from your talents will in turn help you make use of your abilities. In partnerships and groups, you will encounter the lessons you came to learn in this lifetime. Success is then very possible. You must have consideration for others, and should bring people together for a common cause. Various professions are open to you as you learn to be adaptable to most things that need to be done. You could select a career in finance, music, medicine, religion or statistical analysis and research. ******`,
    `***3*** THE LIFE LESSON NUMBER: You are best in intellectual, artistic or creative endeavors. You need to express, to manifest and to see the results of your work. Beauty, fruitfulness, luxury and pleasure are your keywords. You should have ambition and pride. You must become conscious of the law, and, by being an excellent disciplinarian, you will achieve a position of authority over others. 3 combines the daring of 1 with the caution of 2. It is a number of self-expression and freedom and is extravagant in using energies to gain freedom. You must guard against becoming a jack-of-all-trades; rather, you should specialize. You could then be successful in artistic, religious or inventive pursuits. You should never do routine work because you dislike restriction. You should work alone for the best results. Business partnerships become too disciplined for your freedom-loving nature. You could write, lecture, teach or find your niche in journalism. Whatever you decide to specialize in, you must use your creative and inspirational talents. ******`,
    `***4*** THE LIFE LESSON NUMBER: You must build a solid foundation on which to base your life. This demands a well-ordered system of conduct and morals. Administration or some sort of management would be the best type of employment for you. You want your home life to conform to the culture in which you live. You will provide well for those within your care, and you expect them to respond with respect and dignity. You should become a diligent worker and honestly earn your success. By being thrifty, you will have an adequate savings account as security against any possible losses. You should learn not to take a chance unless it is a sure bet. You should seek high goals. You might want to achieve concrete results quickly, and therefore should strive for patience and perseverance. Learn to face reality, and base all your efforts on sound practical reasoning. ******`,
    `***5*** THE LIFE LESSON NUMBER: Your keyword is freedom. If you have "free rein," you can accomplish wonders, but if you feel bound or limited, you lose your enthusiasm and accomplish little. You would be a good explorer or Peace Corps volunteer, as you learn well by travel and experience. You are a diligent student if interested in the subject, but you may fail in subjects for which you see no useful ends. You should be eager for new experience, and shun monotony. In your quest for knowledge, you will become interested in discovering answers in books and magazines. An avid reader, a fluent talker, and a versatile doer, you are the witty conversationalist, and brighten any group by your mere presence. You are here to learn and to ex- perience the value of freedom, and should not tie yourself down too severely. Your talents, once learned, prepare you for a literary career or a position in sales, and dealing with the public. ******`,
    `***6*** THE LIFE LESSON NUMBER: You are here to learn a sense of responsibility for your family and community. 6 is the love and domestic vibration and requires that you be responsive to the social needs of others. A fine sense of balance must be acquired so that you can equalize injustices. This keen sense bestows artistic abilities as well as judgmental talents which can be utilized in the legal system. You should develop the compassion and understanding necessary to ease the burdens of those who will naturally be drawn to you. You are among those who serve, teach and bring comfort to humanity. A wide choice of professions is yours including nursing, teaching, welfare work, the ministry, medicine, restaurant enterprises, the legal profession and possibly veterinary or animal husbandry. You may also choose to enter a career in the arts, interior decorating or hairdressing. ******`,
    `***7*** THE LIFE LESSON NUMBER: You are here to use and to develop your mind. Your words should be full of wisdom when you decide to talk. Your strong intuition helps in any line you choose and gives insight when needed. You may be an enigma to others, and even to yourself at times. You like to read, think and meditate. Many times you have to rely on your soul-force to solve difficult material problems. You may delve into the occult, the mysterious and the phenomenal side of life. Music and other arts are in harmony with your keynotes. You may be drawn to the church, science or research and analysis. A career in mathematics or investigation could hold your interest. You should learn to spend time by yourself, in the woods or by the seashore, where you can get in touch with your inner self and your deepest thoughts because your destiny is to use your mind. ******`,
    `***8*** THE LIFE LESSON NUMBER: This is the number of power and ambition, the number of the executive, the boss, who lives by brain and brawn. You will learn to work and will want to see everyone else working. You can push people to become successful in their own right. You should lead and show by example how to profit in business. You are here to learn to handle power, authority and money. You can build a business empire and should work to that end. You want success for your family and for the family name as a matter of pride. You want your offspring to carry on your name with honor and dignity. Sports is another field open to you, as this number vibration bestows great strength and endurance. Many famous athletes operate under an 8. ******`,
    `***9*** THE LIFE LESSON NUMBER: You should be the universal lover of humanity, patient, kind and understanding. You are at the peak of life's expression, and must turn and show others the way. You seem to receive wisdom from above; thus you know that the true way of happiness is in service to others. You are the marrying type, strong in passion and compassion. You easily acquire money or wealth, and know how to preserve it. You are never petty but deal in broad concepts and can attain success in the face of difficulties. You are here to show others the way, through your breadth of thinking. You can choose from many professions; education and medicine are the most usual. You may become an orator, writer or lecturer with equal ease. Communication, foreign service, statesmanship and leadership positions are easily within your capacity. ******`,
    `***11*** THE LIFE LESSON NUMBER: the keywords here are altruism and community. You came into a unique and testing incarnation. You must practice "love thy neighbor as thyself" and use it as your foundation. Your strong intuitions are of value in gaining wisdom and inspiration. 11 is one of the most difficult vibrations because the demand for high standards is constant. You must learn patience and at the same time be able to make quick decisions. Seek for balance between the material, physical life which has to be considered, and the inspirational, spiritual life which underlies your self-understanding. You can succeed in the field of science, because all new inventions and discoveries such as the laser rays, research in the fields of anti-gravity or kirlian photography or any area of electronics would appeal to you. You could choose to be an astronomer or astrologer, or a Bible researcher and interpreter. You may become a teacher or writer in the field of philosophy. You are original and creative, and could become an inspirational speaker. 11 is an esoteric master number of spiritual import. It bestows courage, power and talent with strong feelings of leadership. You must not let this power go to your head, since fame and recognition are likely; instead realize that true mastership is service. ******`,
    `***22*** THE LIFE LESSON NUMBER: You must express a basic building urge, accomplish things in a big way, and work with large groups or business concerns. You would enjoy the import-export business which could demand long-distance travel and meetings with persons of authority. You like to take an inspirational idea and put it to practical use. Self-knowledge is very valuable to you. 22 gives the promise of success. You know how to use your ability to adjust the physical laws of life and living, to demonstrate exoteric wisdom rather than esoteric. You could become an executive in banking or financial affairs in a national capacity, or help to organize businesses for others as an efficiency expert or the like. As an ambassador to foreign countries, you would demonstrate statesmanship. You like to be occupied in some large enterprise to challenge your power to achieve. Your lesson is to learn to take charge of large organizations and corporations and to handle money efficiently and usefully for the benefit of large groups of people. ******`,
    `***33*** THE LIFE LESSON NUMBER: You should be steady and reliable and develop a strong desire to protect others. You would like to live close to nature, and this urge may influence you to choose a life in agriculture. Your goal would be to produce food on a large scale to help provide sustenance for the hungry of the world. You would never be found in any profession that could act destructively to humanity. Your talent may lie along the line of the arts—music to bring harmony, painting to bring beauty, or literature to promote education. Service in the field of medicine and healing could also attract you. Possibly you would choose the law as a way to protect others through justice. Since the 33 consciousness is almost beyond that of humanity, and is Christ-like in expression, a place within the ministry or priesthood could lead you to the realm of your dreams as a world savior. You may be required to sacrifice your own desires for the needs of others in order to fulfill your vibration. ******`,
    `***44*** THE LIFE LESSON NUMBER: This number stands for strength and complete mental control over your life while on earth. It requires discipline in every department of life so that you may be instrumental in promoting the material advancement of the world. Your mind must be trained to let the higher forces work within it, and you must keep your body and your environment in order, so that you are ready for any opportunity to achieve these same results for others. Your high energy potential is meant to further evolution by helping others set their world in order. You should try to promote better ethics and justice in the world of business. You must recognize reality, then use what you learn to alleviate the physical burdens of others. You are the instrument by which this alteration takes place. By displaying bravery, resourcefulness, courage and discipline, you serve as an example for others. Look into Edgar Case in for more information about the 44 vibration. ******`
  ];

  //Variables to hold the master, left, and base num from when an array is passesd in
  let baseNum = 0;
  let leftNum = 0;
  let masterNum = 0;
  let breakNum = [];
  //If no master, split the numbers;
  if (nums.length === 1) {
    breakNum = nums[0].split("/");
    leftNum = parseInt(breakNum[0]);
    baseNum = parseInt(breakNum[1]);
    if (baseNum < 10) strReturn += lifeNumStats[baseNum-1];
  } else {
    //Case of a master num, add the master description AND the base num script
    breakNum = nums[0].split("/");
    leftNum = parseInt(breakNum[0]);
    masterNum = parseInt(breakNum[1]);
    baseNum = parseInt(nums[1]);
    if (masterNum === 11) strReturn += lifeNumStats[9];
    if (masterNum === 22) strReturn += lifeNumStats[10];
    if (masterNum === 33) strReturn += lifeNumStats[11];
    if (masterNum === 44) strReturn += lifeNumStats[12];
    if (baseNum < 10) strReturn += "<br><br>Also the base number..." + lifeNumStats[baseNum-1];
  }
  //Display the Life Lesson Number Label formatted to be red
  document.getElementById("lbllifelessonlower").innerHTML = "Life Lesson Number: "
  return strReturn;
}

function readText(filePath) {
  let outText = "";
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
    //return "Master num! " + master + ". Base number: " + left + "/" + sum + "."
    return [left + "/" + master, sum];
  } else {
    //return "No Master Number. Base Number: " + left + "/" + sum + ".";
    return [left + "/" + sum];
  }
  
}


//document.getElementById("display").innerHTML = calcWordNumber(document.getElementById("nametext"));
document.getElementById("formform").submit();

