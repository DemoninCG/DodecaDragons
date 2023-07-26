//Sets the info for magic hcallenges based on which one you're hovering over
function showMagicChallenge(x) {
  switch(x) {
    case 0:
      document.getElementById("magicChallengeTitle").innerHTML = ""
      document.getElementById("magicChallengeInfo").innerHTML = "<a style='color: #606'>Hover over a challenge to see what it does!</a><br><a style='color: #060'>You can select up to 4 challenges, and you will earn separate scores for each amount of challenges you enter at once (1, 2, 3 and 4).</a><a style='color: #046'> Bonuses are based on the highest score achieved in each amount of challenges, multiplied together.</a>"
      break
    case 1:
      document.getElementById("magicChallengeTitle").innerHTML = "A1 - Magic fail"
      document.getElementById("magicChallengeInfo").innerHTML = "magic effect is ^0.2 then /1.000e25."
      break
    case 2:
      document.getElementById("magicChallengeTitle").innerHTML = "A2 - Market crash"
      document.getElementById("magicChallengeInfo").innerHTML = "Gold and platinum gain are severely reduced (^0.25)."
      break
    case 3:
      document.getElementById("magicChallengeTitle").innerHTML = "B1 - Freezing"
      if (game.magicUpgradesBought[14]) {document.getElementById("magicChallengeInfo").innerHTML = "Fire gain is severely reduced (^0.3)."}
      else {document.getElementById("magicChallengeInfo").innerHTML = "Fire gain is severely reduced (^0.1)."}
      break
    case 4:
      document.getElementById("magicChallengeTitle").innerHTML = "B2 - Awful alchemy"
      document.getElementById("magicChallengeInfo").innerHTML = "Platinum upgrade 6's effect is /1.000e25 and gold/click is always 20."
      break
    default:
      document.getElementById("magicChallengeTitle").innerHTML = ""
      document.getElementById("magicChallengeInfo").innerHTML = "<a style='color: #606'>Hover over a challenge to see what it does!</a><br><a style='color: #060'>You can select up to 4 challenges, and you will earn separate scores for each amount of challenges you enter at once (1, 2, 3 and 4).</a><a style='color: #046'> Bonuses are based on the highest score achieved in each amount of challenges, multiplied together.</a>"
  }
}

//Activates/deactivates magic challenges
function activateMagicChallenge(x) {
  if (!game.challengesActive) {
    if (!game.selectedChallenges[x-1]) {
      game.selectedChallenges[x-1] = true
      document.getElementsByClassName("magicChallenge")[x-1].style.color = "#0f0"
    }
    else {
      game.selectedChallenges[x-1] = false
      document.getElementsByClassName("magicChallenge")[x-1].style.color = "white"
    }
  }
}

//Enters/exits magic challenges
function enterExitMagicChallenges() {
  //Checks if you're not running challenges and also if you have more than 0 selected
  if (!game.challengesActive && (game.dragonTimeCooldown == 0 || game.unlockedAchievements[6] > 0) && (game.selectedChallenges[0] || game.selectedChallenges[1] || game.selectedChallenges[2] || game.selectedChallenges[3])) {
    magicReset()
    game.challengesActive = true
    game.noOfSelectedChallenges = + game.selectedChallenges[0] + game.selectedChallenges[1] + game.selectedChallenges[2] + game.selectedChallenges[3]
    document.getElementById("activeChallenges").innerHTML = "Challenges active: " + (game.selectedChallenges[0] ? 'A1 ' : '') + (game.selectedChallenges[1] ? 'A2 ' : '') + (game.selectedChallenges[2] ? 'B1 ' : '') + (game.selectedChallenges[3] ? 'B2' : '') + " (" + game.noOfSelectedChallenges + ")"
    updateSmall()
  }
  else if (game.challengesActive) {
    //A bunch of stuff for setting scores
    if (game.noOfSelectedChallenges == 1 && game.magicScoreToGet.gt(game.magicScore1)) game.magicScore1 = game.magicScoreToGet
    else if (game.noOfSelectedChallenges == 2 && game.magicScoreToGet.gt(game.magicScore2)) game.magicScore2 = game.magicScoreToGet
    else if (game.noOfSelectedChallenges == 3 && game.magicScoreToGet.gt(game.magicScore3)) game.magicScore3 = game.magicScoreToGet
    else if (game.noOfSelectedChallenges == 4 && game.magicScoreToGet.gt(game.magicScore4)) game.magicScore4 = game.magicScoreToGet
    document.getElementById("magicScore1").innerHTML = format(game.magicScore1, 0)
    document.getElementById("magicScore2").innerHTML = format(game.magicScore2, 0)
    document.getElementById("magicScore3").innerHTML = format(game.magicScore3, 0)
    document.getElementById("magicScore4").innerHTML = format(game.magicScore4, 0)
    document.getElementById("magicMult1").innerHTML = format(game.magicScore1.add(1), 0)
    document.getElementById("magicMult2").innerHTML = format(game.magicScore2.add(1), 0)
    document.getElementById("magicMult3").innerHTML = format(game.magicScore3.add(1), 0)
    document.getElementById("magicMult4").innerHTML = format(game.magicScore4.add(1), 0)
    
    if (game.inHell) {game.magifolds = new Decimal(1)}
    else {game.magifolds = game.magicScore1.add(1).mul(game.magicScore2.add(1)).mul(game.magicScore3.add(1)).mul(game.magicScore4.add(1))}
    document.getElementById("magifolds").innerHTML = format(game.magifolds, 0)
    if (game.darkMagicUpgradesBought[3]) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(8), 2)}
    else if (game.magicUpgradesBought[18]) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(6), 2)}
    else {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(4), 2)}
    document.getElementsByClassName("resourceText")[5].innerHTML = format(game.magifolds, 0)
    magicReset()
    game.challengesActive = false
    game.noOfSelectedChallenges = + game.selectedChallenges[0] + game.selectedChallenges[1] + game.selectedChallenges[2] + game.selectedChallenges[3]
    document.getElementById("activeChallenges").innerHTML = "You are not in any challenges!"
  }
}