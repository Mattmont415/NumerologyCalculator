let objLetterNumber = {
	A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, 
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8, '7': 7
}

//Passed from the HTML file to correctly format the printed data
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

  //Fills out the entered information, followed by detailed number descriptions
  document.getElementById("textdisplay").innerHTML = fullname;
  document.getElementById("bdaydisplay").innerHTML = translateDate(date);

  //Life Number Printing - Both upper and lower
  document.getElementById("lifelessonnum").innerHTML = calcWordNumber(date);
    document.getElementById("lifenumberinfo").innerHTML = getLifeNumberInfo(calcWordNumber(date));
  //Soul Number Printing - Both upper and lower
  document.getElementById("soulnum").innerHTML = calcWordNumber(vowels);
    document.getElementById("soulnumberinfo").innerHTML = getSoulNumberInfo(calcWordNumber(vowels))
  //Outer Personality Number Printing 
  document.getElementById("outernum").innerHTML = calcWordNumber(conson);

  //Destiny Number Printing
  document.getElementById("destinynum").innerHTML = calcWordNumber(fullname);

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


//This will print the life number info based on the calculation
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
    if (baseNum < 10) strReturn += "<br><br>Also the base number can provide helpful knowledge...<br>" + lifeNumStats[baseNum-1];
  }
  //Display the Life Lesson Number Label formatted to be red
  document.getElementById("lbllifelessonlower").innerHTML = "Life Lesson Number: "
  return strReturn;
}



function getSoulNumberInfo(nums) {
  let strReturn = `Your Soul Number is your real personality, the you that is known only to you. If one embraces the philosophy of reincarnation, the Soul Number also indicates what you have been in previous lifetimes. This part of your personality is not easily recognized by others unless they know you very well. The Soul Number is what you, in your in- ner secret self, desire to be. This urge may be so strong that it can overcome other vibrations of your four basic numbers. Since the Soul Number reveals something of accumulated growth in past lives, it becomes an underlying force which influences the actions of your present life. If, however, the soul urge remains repressed by outer circumstances, and the soul fails to accomplish its purpose, it may need to repeat the same vibrational urge in a future life, until it finds true expression.<br><br>`;

  let soulNumStats = [
    `***1*** THE SOUL NUMBER: The leadership won in past lives now brings a desire to continue striving for higher consciousness. You are independent regarding your beliefs. Your desire for free and independent thinking continues to occupy your inner-most yearning. Do not let this strong drive obstruct your attainmentof practical goals in the present life. You are always conscious of your inner strength and would have difficulty taking a secondary position among your contemporaries. If marriage or partnership is considered, investigate the inner yearnings of your prospective partner to safeguard the successful outcome of your relationship. If your individuality is too strong, it could express itself as bossiness and be a detriment to personal happiness. So firm is the intensity of your focus and so strong the memory of self-glory from the past that you are apt to stand on your convictions even though it could disrupt important relationships. Your inner strength gives you something to rely on when the going is rough, and you can be a tower of inspiration to others in times of trouble.******`,
    `***2*** THE SOUL NUMBER: You have a strong desire for peace and harmony. You are considerate and tactful, adaptable and gentle. You are a follower rather than a leader. Tact is a strong point in your makeup; therefore, you are a go-between or agent, helping to bring peace between opposing forces. You avoid hurting the feelings of others to the point of subordinating yourself to their wills. As a I result, you appear shy and lacking in confidence. Try to overcome indecision; while you are hesitating, others may forge ahead of you and claim what should be yours. Dare to do what you know is right and do not let emotions deter your purpose. Your sensitivity can be positive when used to tune in to the balancing forces of the universe and bring forth truths which help all people gain understanding.******`,
    `***3*** THE SOUL NUMBER: You are very conscientious in regard to duty. You are well aware of the law of the Trinity, and know that inspiration and imagination will bring the best results when used to help others. This could easily become your philosophy of life. Follow your urge to create and expand the activities that interest you. You seek happiness and find it in making others happy. If a person feels depressed, a visit with you will bring them hope and courage. Expand your ideals by dedicating yourself to the expression of good cheer and optimism. Work to make your dreams come true, but not to the extreme of becoming impractical. Love is important to you — both in giving and receiving — but try to hold to reason in your loving expansiveness. You become happy and well-adjusted by making others happy.******`,
    `***4*** THE SOUL NUMBER: You are well organized, a trait which could bring you material success. Your practicality permeates your entire being. Others could set a pattern after your well-ordered program of living. Your loyalty, balance and dependability mean much to those around you. They know where you stand in all things and feel that any dealings with you will be handled squarely. You take matters seriously, whether in business or romance, and can therefore make your dreams come true in a planned, practical way.******`,
    `***5*** THE SOUL NUMBER: You claim the right to freedom and will not allow any limitations of your ideals or ways of thinking. Variety of self-expression is absolutely essential. You would feel dull and listless without the stimulation of changes and new outlooks. Travel is one of your soul's desires since you believe it to be educational and broadening. Narrowness cannot be tolerated. If you feel yourself falling into a rut, a trip, a new outfit or a vacation could change the vibrations for the better and open new avenues for continued inner growth.******`,
    `***6*** THE SOUL NUMBER: You respond to beauty, harmony and peace. You are affectionate, sympathetic and loyal to those you love. Your mission could be to teach others to maintain peace and harmony in their lives and to spread the idea of the Golden Rule. You work hard to keep domestic harmony as your ideal way of life. 24 Of all the love vibrations in the various numbers, yours is the most likely to be guilty of a smothering love, so deep is your desire to live for your own immediate family. Learn to allow your family members to express their own desires in life, even if you do not agree with their choices.******`,
    `***7*** THE SOUL NUMBER: You are quiet and reserved, a good thinker, analyzer and mediator. You need peaceful surroundings and become irritable if your environment is noisy. You are re- fined, sensitive, secretive and usually psychic. You may live alone and remain unmarried. You could be celibate and join the higher mystical order of humanity. Your true nature is to be calm, to develop depth of character, and thus to benefit humanity through philosophy.******`,
    `***8*** THE SOUL NUMBER: Ambition is your keyword. You believe in accomplishment and let no obstacle deter you in attaining your goal. Your number is not an easy one to handle, but the rewards are worth your effort. You are one who will tackle a big job in order to rise above the crowd and arrive at the pinnacle. You have the ability to organize large groups and undertakings successfully. Psychology will help you understand the masses with whom you may work. Others expect more of you than of the average person, so you must rely upon your inner self to guide you to stay at the top. This is the number of high-ranking sports figures.******`,
    `***9*** THE SOUL NUMBER: Intuition is strongly active in your life. You are sensitive and imaginative and can think in abstract terms. Although you may appear vague at times, you are ex- tremely impressionable, compassionate and generous. You need to have and to give love. You are kind and forgiving, with an expansive consciousness dedicated to uplifting humanity. This could be the number of a master or adept from a previous lifetime.******`,
    `***11*** THE SOUL NUMBER: You have been on the spiritual path for a long time, probably for more than one incarnation. Through spiritual evolution you have learned much of the mysteries of life and death. You have courage, talent and leadership ability. You are understanding, wise, intuitive and often clairvoyant, with extremely sensitive ESP abilities and strong spiritual leanings. You also have the fortitude to contend with many changes and unexpected events.******`,
    `***22*** THE SOUL NUMBER: With the power of 22, you have the urge to continue the tangible achievements of past lifetimes. You desire material fulfillment. You are the master builder. Your soul's aim is to leave the world a tangibly better place for your having been here, so it follows that you must keep mental balance while expressing your ideals in practical ways. You have higher goals than the average person; you should keep your feet on the ground while your thoughts expand.******`,
    `***33*** THE SOUL NUMBER: You are ready to sacrifice for humanity. You see clearly a vision of future world conditions and feel ready to help in any way you can to bring peace to all mankind. Sometimes your life lesson vibrations can be in opposition to your soul's urges; nevertheless, you will practice generosity and try to see other people's points of view. This circumstance may force you temporarily to take a background position but the hope remains that you will reach a position to promote your ideals. You stand ever ready to help others.******`,
    `***44*** THE SOUL NUMBER: Universal concepts are part of your consciousness; they now express themselves as inner urges to accomplish great advances in world culture. You desire to unite the practical with the philosophical. A career within the government or in the United Nations could give you the opportunity to promote these ideals among all peoples. You are willing to shoulder heavy responsibilities. Your inner self realizes that it is adept; now the problem becomes how to manifest it in the outer world. You believe that your soul will guide you into fields where your great expectations can be promoted. You have an innate ability to solve everyday problems and can work with others to help them organize their lives.******`
  ];

  let baseNum = 0;
  let leftNum = 0;
  let masterNum = 0;
  let breakNum = [];
  
  if (nums.length === 1) {
    breakNum = nums[0].split("/");
    leftNum = parseInt(breakNum[0]);
    baseNum = parseInt(breakNum[1]);
    if (baseNum < 10) strReturn += soulNumStats[baseNum-1];
  } else {
    //Case of a master num, add the master description AND the base num script
    breakNum = nums[0].split("/");
    leftNum = parseInt(breakNum[0]);
    masterNum = parseInt(breakNum[1]);
    baseNum = parseInt(nums[1]);
    if (masterNum === 11) strReturn += soulNumStats[9];
    if (masterNum === 22) strReturn += soulNumStats[10];
    if (masterNum === 33) strReturn += soulNumStats[11];
    if (masterNum === 44) strReturn += soulNumStats[12];
    if (baseNum < 10) strReturn += "<br><br>Also the base number can provide useful knowledge...<br>" + soulNumStats[baseNum-1];
  }
  //Display the Life Lesson Number Label formatted to be red
  document.getElementById("lblsoullessonlower").innerHTML = "Soul Number: "
  return strReturn;
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

