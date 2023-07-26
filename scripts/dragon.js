//Unlocks dragon
function unlockDragon() {
  if (game.gold.gte(200)) {
    game.gold = game.gold.sub(200)
    document.getElementById("unlockDragonButton").style.display = "none"
    document.getElementById("unlockAlchemyButton").style.display = "block"
    document.getElementsByClassName("box")[3].style.display = "block"
    document.getElementsByClassName("resourceRow")[2].style.display = "block"
    addUnlock() //sets unlock to 1
  }
}

//Handles buying new dragon stages
function upgradeDragon(x) {
  if (x==1 && game.gold.gte(2500000)) {
    game.gold = game.gold.sub(2500000)
    document.getElementsByClassName("upgradeDragonButton")[0].style.display = "none"
    document.getElementsByClassName("upgradeDragonButton")[1].style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon2.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have an</a><br>Adult dragon"
    document.getElementById("dragonInfo").innerHTML = "Your large dragon friend inspires awe and fear, and spews fire for you."
    game.dragonStage = 2
  }
  else if (x==2 && game.gold.gte(1e12)) {
    game.gold = game.gold.sub(1e12)
    document.getElementsByClassName("upgradeDragonButton")[1].style.display = "none"
    document.getElementsByClassName("upgradeDragonButton")[2].style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon3.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have an</a><br>Elder dragon"
    document.getElementById("dragonInfo").innerHTML = "Your strong and wise dragon friend rests upon your mountain of gold, and defends it with inferno-like breath."
    game.dragonStage = 3
  }
  else if (x==3 && game.gold.gte(1e25)) {
    game.gold = game.gold.sub(1e25)
    document.getElementsByClassName("upgradeDragonButton")[2].style.display = "none"
    document.getElementsByClassName("upgradeDragonButton")[3].style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon4.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Dark dragon"
    document.getElementById("dragonInfo").innerHTML = "Your menacing dark dragon calls upon the power of the void itself to defend your empire."
    game.dragonStage = 4
  }
  else if (x==4 && game.gold.gte(1e150)) {
    game.gold = game.gold.sub(1e150)
    document.getElementsByClassName("upgradeDragonButton")[3].style.display = "none"
    document.getElementById("dragonImg").src = "img/iconDragon5.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Light dragon"
    document.getElementById("dragonInfo").innerHTML = "Your heavenly light dragon focuses the power of the gods themselves to protect your people from harm. It can also fire lightning out of its claws, because it's cool like that."
    game.dragonStage = 5
    document.getElementById("dragonAffectionStuff").style.display = "block"
    document.getElementById("dragonTimeCooldown").innerHTML = game.dragonTimeCooldown
    document.getElementById("dragonTimeSpent").innerHTML = format(game.dragonTimeSpent, 0)
    game.dragonTimeEffect = new Decimal(1.2).pow(game.dragonTimeSpent.pow(0.3))
    if (game.dragonTimeEffect.gt(2)) game.dragonTimeEffect = game.dragonTimeEffect.add(2).pow(0.5)
    if (game.dragonTimeEffect.gt(2.5)) {
      game.dragonTimeEffect = new Decimal(2.5)
      document.getElementById("dragonTimeEffectCap").innerHTML = " (capped)"
    }
    else {document.getElementById("dragonTimeEffectCap").innerHTML = ""}
    document.getElementById("dragonTimeEffect").innerHTML = format(game.dragonTimeEffect, 3)
    if (game.dragonTimeCooldown > 0) {document.getElementById("dragonSpendTimeButton").disabled = true}
    else {document.getElementById("dragonSpendTimeButton").disabled = false}
    document.getElementById("dragonFeedCost").innerHTML = format(game.dragonFeedCost, 0)
    document.getElementById("dragonFood").innerHTML = format(game.dragonFood, 0)
    document.getElementById("dragonFoodEffect").innerHTML = format(new Decimal(1.3).pow(game.dragonFood), 3)
  }
  else if (x==5 && game.gold.gte("e1.5e11")) {
    document.getElementsByClassName("upgradeDragonButton")[4].style.display = "none"
    document.getElementsByClassName("upgradeDragonButton")[5].style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon6.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Machine dragon"
    document.getElementById("dragonInfo").innerHTML = "Despite being filled with immense eldrich technology spiralling inwards forever, a million billion tiny cogs quietly ticking away, your dragon feels like merely a cog itself. Perhaps... it is still imperfect."
    game.dragonStage = 6
    document.getElementById("unlockBloodButton").style.display = "block"
  }
  else if (x==6 && game.gold.gte("e1e55")) {
    document.getElementsByClassName("upgradeDragonButton")[5].style.display = "none"
    document.getElementById("unlockVoidMagicUpgradesButton").style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon7.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Holy dragon"
    document.getElementById("dragonInfo").innerHTML = "Your dragon channels boundless energy through itself, a being of near-infinite strength. One even the gods fear. How did we get here?"
    game.dragonStage = 7
  }
  else if (x==7 && game.gold.gte("e1e200")) {
    document.getElementsByClassName("upgradeDragonButton")[6].style.display = "none"
		document.getElementById("unlockPlanetsButton").style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon8.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Multidimensional dragon"
    document.getElementById("dragonInfo").innerHTML = "Your dragon can view countless universes at once and channel all of their combined power."
    game.dragonStage = 8
  }
	else if (x==8 && game.gold.gte("ee35000")) {
    document.getElementsByClassName("upgradeDragonButton")[7].style.display = "none"
    document.getElementById("dragonImg").src = "img/iconDragon9.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Plague dragon"
    document.getElementById("dragonInfo").innerHTML = "Dripping with the most dangerous substance in the omniverse, your dragon is completely unkillable."
    game.dragonStage = 9
  }
	else if (x==9 && game.gold.gte("ee1.75e6")) {
    document.getElementsByClassName("upgradeDragonButton")[8].style.display = "none"
		document.getElementById("unlockNuclearPastaButton").style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon10.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Death dragon"
    document.getElementById("dragonInfo").innerHTML = "Your dragon embodies death itself. It seems you have killed Death and taken his place as the taker of souls."
    game.dragonStage = 10
  }
	else if (x==10 && game.gold.gte("ee1.5e9")) {
    document.getElementsByClassName("upgradeDragonButton")[9].style.display = "none"
		document.getElementById("unlockFinalityCubesButton").style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon11.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Finality dragon"
    document.getElementById("dragonInfo").innerHTML = "Your dragon is now composed of the essence of the omniverse itself. It is physically impossible to become any stronger. Unless...?"
    game.dragonStage = 11
  }
  document.getElementById("dragonStageCounter").innerHTML = romanNumerals[game.dragonStage - 1]
}

//Spending time with your dragon
function dragonSpendTime() {
  if (game.dragonTimeCooldown == 0 && !game.challengesActive) {
    let dragonTimeToGet = new Decimal(1 + Math.floor((Date.now() - game.lastUpdate) / 30000));
    if (game.darkMagicUpgradesBought[2]) {dragonTimeToGet = dragonTimeToGet.mul(10)}
    if (game.unlocks >= 12) dragonTimeToGet = dragonTimeToGet.mul(new Decimal(2).pow(game.indigoSigilUpgradesBought[2].pow(0.6)))
    game.dragonTimeSpent = game.dragonTimeSpent.add(dragonTimeToGet.floor())
    game.dragonTimeCooldown = 30
    document.getElementById("dragonSpendTimeButton").disabled = true
    document.getElementById("dragonTimeCooldown").innerHTML = game.dragonTimeCooldown
    document.getElementById("dragonTimeSpent").innerHTML = format(game.dragonTimeSpent, 0)
    game.dragonTimeEffect = new Decimal(1.2).pow(game.dragonTimeSpent.pow(0.3))
    if (game.dragonTimeEffect.gt(2)) game.dragonTimeEffect = game.dragonTimeEffect.add(2).pow(0.5)
    dragonTimeEffectCap = new Decimal(2.5)
    if (game.tomeUpgradesBought[8] == true) dragonTimeEffectCap = dragonTimeEffectCap.mul(game.blueFireUpgradesBought[4].pow(0.7).div(5).add(1))
    if (game.unlocks >= 26) dragonTimeEffectCap = dragonTimeEffectCap.mul(game.holyFireUpgradesBought[2].pow(0.7).mul(5).add(1))
		if (game.voidMagicUpgradesBought[8] == true) dragonTimeEffectCap = dragonTimeEffectCap.mul(10000)
    if (game.dragonTimeEffect.gt(dragonTimeEffectCap)) {
      game.dragonTimeEffect = dragonTimeEffectCap
      document.getElementById("dragonTimeEffectCap").innerHTML = " (capped)"
    }
    else {document.getElementById("dragonTimeEffectCap").innerHTML = ""}
    document.getElementById("dragonTimeEffect").innerHTML = format(game.dragonTimeEffect, 3)
  }
}

//Feeding your dragon
function dragonFeed() {
  if (game.magifolds.gte(game.dragonFeedCost) && !game.challengesActive) {
    if (game.unlockedAchievements[10] > 0) {
      maxDragonFeedsBuyable = new Decimal(game.magifolds).log10().log10().div(0.301).sub(3).floor().add(1)
     // game.dragonFood = game.dragonFood.add(maxDragonFeedsBuyable);
      game.dragonFood = Decimal.max(game.dragonFood, maxDragonFeedsBuyable)
      game.dragonFeedCost = new Decimal(10).pow(new Decimal(2).pow(game.dragonFood).mul(8).round());
    }
    else {
      game.dragonFood = game.dragonFood.add(1);
      game.dragonFeedCost = new Decimal(10).pow(new Decimal(2).pow(game.dragonFood).mul(8).round());
    }
    document.getElementById("dragonFeedCost").innerHTML = format(game.dragonFeedCost, 0);
    document.getElementById("dragonFood").innerHTML = format(game.dragonFood, 0);
    document.getElementById("dragonFoodEffect").innerHTML = format(new Decimal(1.3).pow(game.dragonFood), 3);
    //Resetting all the score and magifold stuff
    if (game.unlockedAchievements[7] > 0) {
      //do nothing :D
    } else if (game.unlockedAchievements[6] > 1) {
      game.magicScore1 = game.magicScore1.sqrt();
      game.magicScore2 = game.magicScore2.sqrt();
      game.magicScore3 = game.magicScore3.sqrt();
      game.magicScore4 = game.magicScore4.sqrt();
    } else {
      game.magicScore1 = new Decimal(0)
      game.magicScore2 = new Decimal(0)
      game.magicScore3 = new Decimal(0)
      game.magicScore4 = new Decimal(0)
    }
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
  }
}

//Petting your dragon
//This code could probably be shortened a lot!
function dragonPet() {
  if (game.dragonPets == 0 && game.cyanSigils.gte(250)) {
    game.cyanSigils = game.cyanSigils.sub(250)
    game.dragonPets++
    document.getElementById("dragonPetRequirement").innerHTML = "blue"
    document.getElementById("dragonPets").innerHTML = game.dragonPets
    document.getElementById("dragonPetEffect").innerHTML = format(new Decimal(5).pow(game.dragonPets ** 0.5), 2)
  }
  else if (game.dragonPets == 1 && game.blueSigils.gte(250)) {
    game.blueSigils = game.blueSigils.sub(250)
    game.dragonPets++
    document.getElementById("dragonPetRequirement").innerHTML = "indigo"
    document.getElementById("dragonPets").innerHTML = game.dragonPets
    document.getElementById("dragonPetEffect").innerHTML = format(new Decimal(5).pow(game.dragonPets ** 0.5), 2)
  }
  else if (game.dragonPets == 2 && game.indigoSigils.gte(250)) {
    game.indigoSigils = game.indigoSigils.sub(250)
    game.dragonPets++
    document.getElementById("dragonPetRequirement").innerHTML = "violet"
    document.getElementById("dragonPets").innerHTML = game.dragonPets
    document.getElementById("dragonPetEffect").innerHTML = format(new Decimal(5).pow(game.dragonPets ** 0.5), 2)
  }
  else if (game.dragonPets == 3 && game.violetSigils.gte(250)) {
    game.violetSigils = game.violetSigils.sub(250)
    game.dragonPets++
    document.getElementById("dragonPetRequirement").innerHTML = "pink"
    document.getElementById("dragonPets").innerHTML = game.dragonPets
    document.getElementById("dragonPetEffect").innerHTML = format(new Decimal(5).pow(game.dragonPets ** 0.5), 2)
  }
  else if (game.dragonPets == 4 && game.pinkSigils.gte(250)) {
    game.pinkSigils = game.pinkSigils.sub(250)
    game.dragonPets++
    document.getElementById("dragonPetButton").innerHTML = "You have petted your dragon sufficiently."
    document.getElementById("dragonPetButton").disabled = true
    document.getElementById("dragonPets").innerHTML = game.dragonPets
    document.getElementById("dragonPetEffect").innerHTML = format(new Decimal(5).pow(game.dragonPets ** 0.5), 2)
  }
}

//Hypergod stuff is here because I don't want to make another script file only for this
function defeatHypergod() {
	if (game.gold.gte(hypergodDefeatCosts[game.hypergodsDefeated])) {
		game.hypergodsDefeated++
		if (game.hypergodsDefeated == 12) {
			document.getElementById("hypergodImage").style.display = "none"
			document.getElementById("hypergodName").style.display = "none"
			document.getElementById("hypergodText").innerHTML = "&#8202;&#8202;There are no more hypergods to defeat!"
			document.getElementById("hypergodButton").style.display = "none"
			document.getElementById("bigFinishButton").style.display = "block"
		}
		else {
			document.getElementById("hypergodImage").src = "img/hypergod" + (game.hypergodsDefeated+1) + ".png"
			document.getElementById("hypergodName").innerHTML = hypergodNames[game.hypergodsDefeated]
			document.getElementById("hypergodText").innerHTML = hypergodText[game.hypergodsDefeated]
			document.getElementById("hypergodDefeatCost").innerHTML = format(hypergodDefeatCosts[game.hypergodsDefeated])
		}
	}
}