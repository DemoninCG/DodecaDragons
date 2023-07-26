// Steps for adding new achievements:
// 1. add name and requirements to relevant arrays in constants.js
// 2. if reward, add reward description to reward object in constants.js
// 3. if reward, implement rewards via processAchievementRewards and/or whatever other means are needed

// Adding new achievement categories:
// 1. add new array to achievementNames and achievementRequirements, ideally with proper comment labels, in constants.js
// 2. add new object to achievementResources array and a new string to the achievementColours array
// 3. add new int onto the end of each sub-array in the achievementDisplayUnlocks array
// 3. add new int to the end of game.unlockedAchievements array

//Sets aspects of the achievement element
achievementBox = document.createElement("div")
achievementBox.style.display = "inline-block"
achievementBox.style.position = "relative"
achievementBox.style.width = "50px"
achievementBox.style.height = "50px"
achievementBox.style.marginBottom = "4px"
achievementBox.style.marginRight = "4px"
achievementBox.style.backgroundColor = "#555"
achievementBox.style.color = "white"
achievementBox.style.textAlign = "center"
achievementBox.style.lineHeight = "16px"
achievementBox.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #dfdfdf,inset -2px -2px grey,inset 2px 2px #fff"
achievementBox.classList.add("achievement")

//Sets aspects of the achievement row element
achievementRow = document.createElement("div")
achievementRow.style.display = "block"


//Shows an individual achievement
//x is the row, y is the column
function showAchievement(x,y) {
  let thisId = "ach" + y + "x" + x; //generate unique id for each achievement e.g. ach1x3 where 0 is resource (fire) and 3 is achievement number within group
  let newHTML = "";
  //if (game.unlockedAchievements[y] > 11 && achievementStarRequirements[y][x]) {
  //  if (game.unlockedAchievements[y] - 12 > x) {
  //    newHTML += "<img src='img/starFilled.png' class='achievementStar' />"
  //  } else {
  //    newHTML += "<img src='img/starEmpty.png' class='achievementStar' />"
  //  }
  //}
  if (Object.keys(achievementRewards).indexOf(thisId) > -1) { //check if achievement has a reward, in which case we want to highlight it.
    //newHTML += "<img src='img/starFilled.png' class='achievementStar' />"
    newHTML += "<p style='margin-top: 11px; color: #6ff'><span style='font-size: 22px'>" + romanNumerals[x] + "</span><br>" + achievementResources[y].shortName + "</p>";
  } else {
    //newHTML += "<img src='img/starEmpty.png' class='achievementStar' />"
    newHTML += "<p style='margin-top: 11px'><span style='font-size: 22px'>" + romanNumerals[x] + "</span><br>" + achievementResources[y].shortName + "</p>";
  }
  achievementBox.innerHTML = newHTML;
  achievementBox.style.borderTop = "4px solid " + achievementColours[y] //Colours the top of each achievement based on the resource
  achievementBox.id = thisId;
  document.getElementById("achievementsDiv").appendChild(achievementBox.cloneNode(true));
  
  if (game.unlockedAchievements[y] > x) {
    document.getElementById(thisId).classList.add("achievementUnlocked");
    //if (game.unlockedAchievements[y] - 12 > x && achievementStarRequirements[y][x]) {
    //  document.getElementById(thisId).classList.add("achievementStarred");
    //}
  }
}

function showAchievements(x) {
  //Currently removes all the achievements and then adds them again, could be improved
  document.getElementById("achievementsDiv").innerHTML = "";
  let unlocks = achievementDisplayUnlocks[x] || achievementDisplayUnlocks[achievementDisplayUnlocks.length - 1]; //if no data for selected x value, default to highest unlock value
  let visibleAchievements = []; //tracking which categories actually have visible achievements at current unlock level
  for (let i=0;i<unlocks.length;i++) {
    if (unlocks[i] > 0) visibleAchievements.push(unlocks[i]) //exclude any entries of 0 from the new array
  }
  for (let i=0;i<visibleAchievements[0];i++) showAchievement(i,0)
  for (let j=1;j<visibleAchievements.length; j++) {
    document.getElementById("achievementsDiv").innerHTML += "<br>"
    for (i=0;i<visibleAchievements[j];i++) showAchievement(i,j)
  }
  
  /*
  switch (x) {
    case 0:
    case 1:
    case 2:
      for (i=0;i<3;i++) showAchievement(i,0)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<2;i++) showAchievement(i,1)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<1;i++) showAchievement(i,2)
      break;
    case 3:
      for (i=0;i<4;i++) showAchievement(i,0)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<3;i++) showAchievement(i,1)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<2;i++) showAchievement(i,2)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<1;i++) showAchievement(i,3)
      break;
    case 4:
    case 5:
      for (i=0;i<6;i++) showAchievement(i,0)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<4;i++) showAchievement(i,1)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<3;i++) showAchievement(i,2)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<5;i++) showAchievement(i,3)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<1;i++) showAchievement(i,4)
      break;
    case 6:
      for (i=0;i<7;i++) showAchievement(i,0)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<5;i++) showAchievement(i,1)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<4;i++) showAchievement(i,2)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<6;i++) showAchievement(i,3)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<2;i++) showAchievement(i,4)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<1;i++) showAchievement(i,5)
      break;
    case 7:
      for (i=0;i<8;i++) showAchievement(i,0)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<6;i++) showAchievement(i,1)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<6;i++) showAchievement(i,2)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<7;i++) showAchievement(i,3)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<3;i++) showAchievement(i,4)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<1;i++) showAchievement(i,5)
      break;
    case 8:
    case 9:
      for (i=0;i<10;i++) showAchievement(i,0)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<6;i++) showAchievement(i,1)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<7;i++) showAchievement(i,2)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<8;i++) showAchievement(i,3)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<4;i++) showAchievement(i,4)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<3;i++) showAchievement(i,5)
      document.getElementById("achievementsDiv").innerHTML += "<br>"
      for (i=0;i<1;i++) showAchievement(i,6)
      break;
    case 10:

      break;
    case 11:

      break;
    case 12:

      break;
    case 13:

      break;
    case 14:
    default:

      break;
  }
  */
}
showAchievements(0)

function getHoveredAchievement() {
  let selected = document.querySelector(".achievement:hover"); //use css selector to search for selected achievement since event targets are seemingly unreliable
  return selected === null ? selected : selected.id //return null if none found, otherwise return the achievement's id string
}

function showAchievementInfo(x,y) {
  let newHtml = "";
  if (x === null) { //show default text if no hovered achievement is detected
    newHtml += "<p style='font-size: 22px; line-height: 22px; margin: 4px; color: #bbb'>Achievement name</p>";
    newHtml += "<p style='color: #bbb'>Mouse over an achievement for more info!</p>"
    document.getElementById("achievementInfo").innerHTML = newHtml;
    return;
  }
  newHtml += "<p style='font-size: 22px; line-height: 22px; margin: 4px'>" + achievementNames[x][y] + "</p>" 
  newHtml += "<p>Obtain " + format(achievementRequirements[x][y], 0) + " " + achievementResources[x].name + "."; //example: Obtain 1e10 fire
  //if (game.unlockedAchievements[x] >= 12 && achievementStarRequirements[x][y]) newHtml += "<span style='color: #FFD700; text-shadow: 1px 1px #860'> Star requirement: Obtain " + format(achievementStarRequirements[x][y], 0) + " " + achievementResources[x].name + ".</span>"; //example: Star requirement: Obtain e1e10 fire
  newHtml += "</p>";
  let thisId = "ach" + x + "x" + y;
  if (Object.keys(achievementRewards).indexOf(thisId) > -1) { //check whether the acheivementRewards object has an entry for this id
    newHtml += "<p style='color: #8ff'>Reward: " + achievementRewards[thisId] + "</p>" 
  }
  /*
  switch (thisId) {
    case "0-4":
      newHtml += "<p style='color: #8ff'>Reward: Unlocks Max All button for platinum!</p>"
    break;
    case "3-0":
      newHtml += "<p style='color: #8f8'>Reward: Unlocks Buy Max button for fire upgrades!</p>"
    break;
    case "3-1":
      newHtml += "<p style='color: #8f8'>Reward: Unlocks Max Buy All button for fire upgrades!</p>"
    break;
    case "3-4":
      newHtml += "<p style='color: #8f8'>Reward: Keep all platinum upgrades on magic reset!</p>"
    break;
    case "3-5":
      newHtml += "<p style='color: #8f8'>Reward: Gain 1% of potential magic per second!</p>"
    break;
  }
  */
  document.getElementById("achievementInfo").innerHTML = newHtml;
}

function checkAchievements() {
  for (let i=0;i<Object.keys(achievementResources).length;i++) { //achievementResourceInternals tells us the internal names of the resources e.g. cyanSigils
    if (game.unlockedAchievements[i] > 23) {
     //all achievements for this resource have been starred, nothing else to be done
    } else if (game.unlockedAchievements[i] > 11) {
      //all 12 unlocked, now looking at stars
      /*
      if (game.unlockedAchievements[i] == 12 && document.getElementById("ach" + i + "x0").childNodes[0].nodeName == "P") {for (j=0;j<12;j++) {if (achievementStarRequirements[i][j]) document.getElementById("ach" + i + "x" + j).innerHTML = "<img src='img/starEmpty.png' class='achievementStar' />" + document.getElementById("ach" + i + "x" + j).innerHTML}} //If at exactly 12 unlocks and if the first element in the row does not have a star icon, add empty stars to that row
      let starToCheck = game.unlockedAchievements[i] - 12;
      let nextStarCost = new Decimal(achievementStarRequirements[i][starToCheck])
      if (nextStarCost.isNaN || !nextStarCost.gte(1)) return; //should hopefully exit out if next star's cost is undefined or improperly defined
      if (game[achievementResources[i].internalName].gte(nextStarCost)) {
        game.unlockedAchievements[i] += 1;
        //make achievement box for stars here?
        let thisElem = document.getElementById("ach" + i + "x" + starToCheck);
        thisElem.classList.add("achievementStarred");
        thisElem.childNodes[0].src = "img/starFilled.png";
      }
      */
    } else {
      //fewer than 12 achievements, not checking for stars yet
      let loops = 0; //tested without this variable, but I added it in afterwards to be 100% sure we don't get stuck in an infinite loop.
      // I'm really paranoid about while loops
      if (!document.getElementById("ach" + i + "x" + game.unlockedAchievements[i])) continue; //skip this resource if the next achievement isn't yet loaded into the DOM
      while (loops < 10 && achievementRequirements[i][game.unlockedAchievements[i]] !== undefined && new Decimal(game[achievementResources[i].internalName]).gte(achievementRequirements[i][game.unlockedAchievements[i]])) {
        if (!document.getElementById("ach" + i + "x" + game.unlockedAchievements[i])) break; //break this loop if next achievement isn't yet loaded into the DOM
        game.unlockedAchievements[i] += 1;
        achievementBoxOpen(i,game.unlockedAchievements[i] - 1)
        document.getElementById("ach" + i + "x" + (game.unlockedAchievements[i] - 1)).classList.add("achievementUnlocked");
        processAchievementRewards();
        loops++
      }
    }
  }

}

function processAchievementRewards() {
  //gold rewards
  if (game.unlockedAchievements[0] > 4) document.getElementById("platinumMaxAllButton").style.display = "block";
  if (game.unlockedAchievements[0] > 8) document.getElementById("minerAutoBuyMaxButton").style.display = "inline-block"
  if (game.unlockedAchievements[0] > 10) {document.getElementById("magicUpgradeBuyMaxButton").style.display = "block"; document.getElementById("darkMagicUpgradeBuyMaxButton").style.display = "block";}
  //magic rewards
  if (game.unlockedAchievements[3] > 0) for (i=0;i<6;i++) document.getElementsByClassName("fireBuyMaxButton")[i].style.display = "inline-block"
  if (game.unlockedAchievements[3] > 1) document.getElementById("fireMaxAllButton").style.display = "block";
  //maybe showing divs for auto magic gain readout?
  //uranium rewards
  if (game.unlockedAchievements[5] > 2) document.getElementById("uraniumMaxAllButton").style.display = "block";
  //cyan sigil rewards
  if (game.unlockedAchievements[6] > 1) document.getElementById("dragonFeedButton").innerHTML = '<b>Feed your dragon</b><br>Turns some of your score and magifolds into dragon food<br>Next feed requires <a id="dragonFeedCost">' + format(game.dragonFeedCost, 0) + '</a> magifolds'
  if (game.unlockedAchievements[6] > 2) document.getElementById("fireAutoMaxAllButton").style.display = "block";
  
  //blue sigil rewards
  if (game.unlockedAchievements[7] > 0) document.getElementById("dragonFeedButton").innerHTML = '<b>Feed your dragon</b><br>Next feed requires <a id="dragonFeedCost">' + format(game.dragonFeedCost, 0) + '</a> magifolds'
  //violet sigil rewards
  if (game.unlockedAchievements[9] > 0) {document.getElementById("dragonPetStuff").style.display = "block"}
  //pink sigil rewards
  if (game.unlockedAchievements[10] > 1) {document.getElementsByClassName("box")[20].style.display = "block"}
  //knowledge rewards
  if (game.unlockedAchievements[11] > 0) {document.getElementById("sigilResetAutomation").style.display = "block"}
  if (game.unlockedAchievements[11] > 7) {document.getElementById("knowledgeAutoMaxAllButton").style.display = "block"}
  //tome rewards
  if (game.unlockedAchievements[12] > 2) {document.getElementById("knowledgeMaxAllButton").style.display = "block"}
  //blue fire rewards
  if (game.unlockedAchievements[13] > 2) for (i=0;i<6;i++) document.getElementsByClassName("blueFireBuyMaxButton")[i].style.display = "inline-block"
  if (game.unlockedAchievements[13] > 4) {
    document.getElementById("blueFireMaxAllButton").style.display = "block"
    document.getElementById("blueFireAutoMaxAllButton").style.display = "block";
  }
  //yellow sigil rewards
  if (game.unlockedAchievements[18] > 2) document.getElementById("sigilResetterCycleModeSpan").style.display = "block";
  //plutonium rewards
  if (game.unlockedAchievements[19] > 0) document.getElementById("plutoniumMaxAllButton").style.display = "block";
  if (game.unlockedAchievements[19] > 2) document.getElementById("tomeUpgradeBuyMaxButton").style.display = "block";
  //holy fire rewards
  if (game.unlockedAchievements[21] > 3) for (i=0;i<5;i++) document.getElementsByClassName("holyFireBuyMaxButton")[i].style.display = "inline-block"
	if (game.unlockedAchievements[21] > 7) {
    document.getElementById("holyFireMaxAllButton").style.display = "block"
    document.getElementById("holyFireAutoMaxAllButton").style.display = "block";
  }
	//Planet rewards
	if (game.unlockedAchievements[23] > 5) document.getElementById("planetBuyMaxButton").style.display = "inline-block";
	if (game.unlockedAchievements[23] > 6) for (i=0;i<5;i++) document.getElementsByClassName("plagueBuyMaxButton")[i].style.display = "inline-block"
	//Hypergod rewards
	if (game.unlockedAchievements[24] > 5) {
    document.getElementById("plagueMaxAllButton").style.display = "block"
    document.getElementById("plagueAutoMaxAllButton").style.display = "block";
  }
	if (game.unlockedAchievements[24] > 6) {
    document.getElementById("lightEssenceMaxAllButton").style.display = "block"
    document.getElementById("darkEssenceMaxAllButton").style.display = "block"
    document.getElementById("deathEssenceMaxAllButton").style.display = "block"
  }
	if (game.unlockedAchievements[24] > 7) document.getElementById("finalityEssenceMaxAllButton").style.display = "block"
}

function achievementBoxOpen(x,y) {
  //Sets the position of the box so that it slowly enters the frame
  document.getElementsByClassName("box")[18].style.transition = "none"
  document.getElementsByClassName("box")[18].style.left = "-380px"
  setTimeout(function() {
    document.getElementsByClassName("box")[18].style.transition = "left 800ms ease-in-out"
    document.getElementsByClassName("box")[18].style.left = "5px"
  }, 50)
  document.getElementById("achievementBoxInfo").innerHTML = "<b>" + achievementNames[x][y] + "</b> - Obtain " + format(achievementRequirements[x][y], 0) + " " + achievementResources[x].name + "."
  let thisId = "ach" + x + "x" + y;
  if (Object.keys(achievementRewards).indexOf(thisId) > -1) { //check whether the acheivementRewards object has an entry for this id
    document.getElementById("achievementBoxInfo").innerHTML += "<br><br><span style='color: #088; font-size: 16px; font-weight: bold; margin-right: 2px'>Reward gained: " + achievementRewards[thisId] + "</span>" 
  }
  setTimeout(achievementBoxClose, 6000)
}

function achievementBoxClose() {
  //Sets the position of the box so that it slowly exits the frame
  document.getElementsByClassName("box")[18].style.transition = "left 800ms ease-in-out"
  document.getElementsByClassName("box")[18].style.left = "-380px"
}

function promiseDelay(timeDelay) {
  return new Promise((resolve) => {setTimeout(resolve, timeDelay)})
}

async function achievementTabFlash() {
  if (game.achievementFlashActive === true) return;
  game.achievementFlashActive = true;
  let startTime = Date.now();
  //let finishTime = startTime + 3000;
  let currentTime = startTime;
  let elapsedTime = 0;
  let achieveTab = document.getElementById("achievementTabButton");
  while (game.currentTab !== 3) {
    currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let currentColourAmt = 0.5 * Math.sin(Math.PI * 4 * (elapsedTime / 1000 - 0.125)) + 0.5; //this is a sin function that fluctuates between 0 and 1 with period of 0.5s
    achieveTab.style.background = "#bb" + lerpColour("bb","ff",currentColourAmt) + "bb";
    await promiseDelay(10);
  }
  game.achievementFlashActive = false;
  achieveTab.style.background = "";
}
