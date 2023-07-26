function randomizeKnowledgeTrade(trade) {
  sigilColourOptions = [1,2,3,4,5]
  sigilColourOptions.splice(Math.floor(Math.random() * 5), 1)
  sigilColourOptions.splice(Math.floor(Math.random() * 4), 1)
  if (game["knowledgeTrade" + trade + "SigilTypes"]) game["knowledgeTrade" + trade + "SigilTypes"] = sigilColourOptions;
  if (game["knowledgeTrade" + trade + "Multipliers"]) game["knowledgeTrade" + trade + "Multipliers"] = [Math.random() + 0.5, Math.random() + 0.5, Math.random() + 0.5, Math.random() / 2 + 1]
  if (game["knowledgeTrade" + trade + "Amounts"]) {
    game["knowledgeTrade" + trade + "Amounts"][0] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[sigilColourOptions[0]-1]).mul(game["knowledgeTrade" + trade + "Multipliers"][0]).mul(7.5).floor().mul(100)
    game["knowledgeTrade" + trade + "Amounts"][1] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[sigilColourOptions[1]-1]).mul(game["knowledgeTrade" + trade + "Multipliers"][1]).mul(7.5).floor().mul(100)
    game["knowledgeTrade" + trade + "Amounts"][2] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[sigilColourOptions[2]-1]).mul(game["knowledgeTrade" + trade + "Multipliers"][2]).mul(7.5).floor().mul(100)
  }
  if (game["knowledgeTrade" + trade + "Reward"]) {
    game["knowledgeTrade" + trade + "Reward"] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(game["knowledgeTrade" + trade + "Multipliers"][3])
    game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(new Decimal(2).pow(game.knowledgeUpgradesBought[0].pow(0.5)))
    if (game.tomeUpgradesBought[2] == true) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(2)
    if (game.tomeUpgradesBought[6] == true) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(game.totalTomes.pow(1.2).add(1))
    if (game.tomeUpgradesBought[8] == true) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(new Decimal(1000).pow(game.blueFireUpgradesBought[5].pow(0.6)))
    if (game.holyTetrahedronUpgradesBought[7]) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(1e150)
    if (game.holyOctahedronUpgradesBought[8]) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul("e550")
		if (game.voidMagicUpgradesBought[11] == true) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul("e12000")
		if (game.unlocks >= 33) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(new Decimal(10).pow(new Decimal(2).pow(game.darkEssenceUpgradesBought[2].pow(0.5)).mul(5e9)))
    game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].floor()
  }

  loadKnowledgeTrade(trade)
}

function setKnowledgeTrade(trade) {
  if (game["knowledgeTrade" + trade + "Amounts"]) {
    game["knowledgeTrade" + trade + "Amounts"][0] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[game["knowledgeTrade" + trade + "SigilTypes"][0] - 1]).mul(game["knowledgeTrade" + trade + "Multipliers"][0]).mul(7.5).floor().mul(100)
    game["knowledgeTrade" + trade + "Amounts"][1] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[game["knowledgeTrade" + trade + "SigilTypes"][1] - 1]).mul(game["knowledgeTrade" + trade + "Multipliers"][1]).mul(7.5).floor().mul(100)
    game["knowledgeTrade" + trade + "Amounts"][2] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[game["knowledgeTrade" + trade + "SigilTypes"][2] - 1]).mul(game["knowledgeTrade" + trade + "Multipliers"][2]).mul(7.5).floor().mul(100)
  }
  if (game["knowledgeTrade" + trade + "Reward"]) {
    game["knowledgeTrade" + trade + "Reward"] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(game["knowledgeTrade" + trade + "Multipliers"][3])
    game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(new Decimal(2).pow(game.knowledgeUpgradesBought[0].pow(0.5)))
    if (game.tomeUpgradesBought[2] == true) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(2)
    if (game.tomeUpgradesBought[6] == true) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(game.totalTomes.pow(1.2).add(1))
    if (game.tomeUpgradesBought[8] == true) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(new Decimal(1000).pow(game.blueFireUpgradesBought[5].pow(0.6)))
    if (game.holyTetrahedronUpgradesBought[7]) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(1e150)
    if (game.holyOctahedronUpgradesBought[8]) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul("e550")
		if (game.voidMagicUpgradesBought[11] == true) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul("e12000")
		if (game.unlocks >= 33) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(new Decimal(10).pow(new Decimal(2).pow(game.darkEssenceUpgradesBought[2].pow(0.5)).mul(5e9)))
    game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].floor()
  }
  
  loadKnowledgeTrade(trade)
}

function resetKnowledgeTrades() {
  knowledgeTradeLevelTemp = game.knowledgeTradeLevel
  game.knowledgeTradeLevel = new Decimal(1)
  setKnowledgeTrade(1)
  setKnowledgeTrade(2)
  setKnowledgeTrade(3)
  game.knowledgeTradeLevel = knowledgeTradeLevelTemp
}

function loadKnowledgeTrade(trade) {
  document.getElementsByClassName("knowledgeTradeInfo")[trade-1].innerHTML = "Lv" + format(game.knowledgeTradeLevel, 0) + " - " + format(game["knowledgeTrade" + trade + "Reward"], 0) + " knowledge<br>Costs:<br><img src='img/iconSigil" + (game["knowledgeTrade" + trade + "SigilTypes"][0]) + ".png'> " + format(game["knowledgeTrade" + trade + "Amounts"][0], 0) + " " + sigilColours[game["knowledgeTrade" + trade + "SigilTypes"][0]-1] + " sigils<br><img src='img/iconSigil" + (game["knowledgeTrade" + trade + "SigilTypes"][1]) + ".png'> " + format(game["knowledgeTrade" + trade + "Amounts"][1], 0) + " " + sigilColours[game["knowledgeTrade" + trade + "SigilTypes"][1]-1] + " sigils<br><img src='img/iconSigil" + (game["knowledgeTrade" + trade + "SigilTypes"][2]) + ".png'> " + format(game["knowledgeTrade" + trade + "Amounts"][2], 0) + " " + sigilColours[game["knowledgeTrade" + trade + "SigilTypes"][2]-1] + " sigils"
}

function updateKnowledgeTradeLevel(x) {
  if (x==1) {
    game.knowledgeTradeLevel = new Decimal(document.getElementById("knowledgeLevelRange").value)
    if (game.knowledgeTradeLevel.lt(1e308)) document.getElementById("knowledgeLevelInput").value = game.knowledgeTradeLevel.toNumber()
  }
  else if (x==2) {
    game.knowledgeTradeLevel = new Decimal(document.getElementById("knowledgeLevelInput").value)
		if (game.knowledgeTradeLevel.lt(0)) game.knowledgeTradeLevel = new Decimal(0)
		if (game.knowledgeTradeLevel.gt(game.knowledgeTradeLevelCap)) game.knowledgeTradeLevel = game.knowledgeTradeLevelCap
    if (game.knowledgeTradeLevel.lt(1e308)) {
			document.getElementById("knowledgeLevelRange").value = game.knowledgeTradeLevel.toNumber()
			document.getElementById("knowledgeLevelInput").value = game.knowledgeTradeLevel.toNumber()
		}
  }
  //document.getElementById("knowledgeTradeLevel").innerHTML = game.knowledgeTradeLevel
  document.getElementsByClassName("knowledgeTradeCostRange")[0].innerHTML = format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[0]).mul(3.75).floor().mul(100), 0) + " - " + format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[0]).mul(11.25).floor().mul(100), 0)
  document.getElementsByClassName("knowledgeTradeCostRange")[1].innerHTML = format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[1]).mul(3.75).floor().mul(100), 0) + " - " + format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[1]).mul(11.25).floor().mul(100), 0)
  document.getElementsByClassName("knowledgeTradeCostRange")[2].innerHTML = format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[2]).mul(3.75).floor().mul(100), 0) + " - " + format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[2]).mul(11.25).floor().mul(100), 0)
  document.getElementsByClassName("knowledgeTradeCostRange")[3].innerHTML = format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[3]).mul(3.75).floor().mul(100), 0) + " - " + format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[3]).mul(11.25).floor().mul(100), 0)
  document.getElementsByClassName("knowledgeTradeCostRange")[4].innerHTML = format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[4]).mul(3.75).floor().mul(100), 0) + " - " + format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[4]).mul(11.25).floor().mul(100), 0)
  knowledgeRewardTemp = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1))
  knowledgeRewardTemp = knowledgeRewardTemp.mul(new Decimal(2).pow(game.knowledgeUpgradesBought[0].pow(0.5)))
  if (game.tomeUpgradesBought[2] == true) knowledgeRewardTemp = knowledgeRewardTemp.mul(2)
  if (game.tomeUpgradesBought[6] == true) knowledgeRewardTemp = knowledgeRewardTemp.mul(game.totalTomes.pow(1.2).add(1))
  if (game.tomeUpgradesBought[8] == true) knowledgeRewardTemp = knowledgeRewardTemp.mul(new Decimal(1000).pow(game.blueFireUpgradesBought[5].pow(0.6))).floor()
  document.getElementById("knowledgeTradeRewardRange").innerHTML = format(knowledgeRewardTemp, 0) + " - " + format(knowledgeRewardTemp.mul(1.5), 0)
}

function purchaseKnowledgeTrade(trade) {
  sigilColour1 = sigilColours[game["knowledgeTrade" + trade + "SigilTypes"][0]-1]
  sigilColour2 = sigilColours[game["knowledgeTrade" + trade + "SigilTypes"][1]-1]
  sigilColour3 = sigilColours[game["knowledgeTrade" + trade + "SigilTypes"][2]-1]
  if (game[sigilColour1 + "Sigils"].gte(game["knowledgeTrade" + trade + "Amounts"][0]) && game[sigilColour2 + "Sigils"].gte(game["knowledgeTrade" + trade + "Amounts"][1]) && game[sigilColour3 + "Sigils"].gte(game["knowledgeTrade" + trade + "Amounts"][2])) {
    game.knowledge = game.knowledge.add(game["knowledgeTrade" + trade + "Reward"])
    if (game.knowledge.gte(game.highestKnowledge)) game.highestKnowledge = game.knowledge
    game[sigilColour1 + "Sigils"] = game[sigilColour1 + "Sigils"].sub(game["knowledgeTrade" + trade + "Amounts"][0])
    game[sigilColour2 + "Sigils"] = game[sigilColour2 + "Sigils"].sub(game["knowledgeTrade" + trade + "Amounts"][1])
    game[sigilColour3 + "Sigils"] = game[sigilColour3 + "Sigils"].sub(game["knowledgeTrade" + trade + "Amounts"][2])
    randomizeKnowledgeTrade(trade)
  }
}

function buyKnowledgeUpgrade(x) {
  //For each upgrade (if affordable): subtracts knowledge based on cost, adds 1 to the upgrade amount bought, updates the cost
  if (x==1 && game.knowledge.gte(game.knowledgeUpgradeCosts[0])) {
    if (game.knowledgeUpgradeCosts[0].lt("e1e9")) game.knowledge = game.knowledge.sub(game.knowledgeUpgradeCosts[0])
    game.knowledgeUpgradesBought[0] = game.knowledgeUpgradesBought[0].add(1)
    game.knowledgeUpgradeCosts[0] = new Decimal(2).pow(game.knowledgeUpgradesBought[0]).mul(20).floor()
    document.getElementById("knowledgeUpgrade1Cost").innerHTML = format(game.knowledgeUpgradeCosts[0], 0)
    document.getElementById("knowledgeUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.knowledgeUpgradesBought[0].pow(0.5)), 2)
  }
  else if (x==2 && game.knowledge.gte(game.knowledgeUpgradeCosts[1])) {
    if (game.knowledgeUpgradeCosts[1].lt("e1e9")) game.knowledge = game.knowledge.sub(game.knowledgeUpgradeCosts[1])
    game.knowledgeUpgradesBought[1] = game.knowledgeUpgradesBought[1].add(1)
    game.knowledgeUpgradeCosts[1] = new Decimal(5).pow(game.knowledgeUpgradesBought[1]).mul(50).floor()
    document.getElementById("knowledgeUpgrade2Cost").innerHTML = format(game.knowledgeUpgradeCosts[1], 0)
    knowledgeUpgrade2Effect = new Decimal(5).pow(game.knowledgeUpgradesBought[1].pow(0.5))
    if (knowledgeUpgrade2Effect.gt(1e20)) knowledgeUpgrade2Effect = knowledgeUpgrade2Effect.mul(1e60).pow(0.25)
		if (knowledgeUpgrade2Effect.gt("e2e7")) knowledgeUpgrade2Effect = new Decimal("e2e7")
    document.getElementById("knowledgeUpgrade2Effect").innerHTML = format(knowledgeUpgrade2Effect, 2)
  }
  else if (x==3 && game.knowledge.gte(100000)) {
    game.knowledge = game.knowledge.sub(100000)
    game.knowledgeUpgradesBought[2] = new Decimal(1)
    document.getElementsByClassName("knowledgeUpgrade")[2].disabled = true
    document.getElementsByClassName("box")[21].style.display = "block"
    document.getElementsByClassName("resourceRow")[13].style.display = "block"
    if (game.dragonStage < 6) document.getElementsByClassName("upgradeDragonButton")[4].style.display = "block"
    addUnlock() //sets unlock to 16
  }
}

function knowledgeMaxAll() {
  //Determines the amount of upgrades the user can afford and the price, subtracts knowledge, adds to the upgrade amount, updates the cost
  KU1amountCanBuy = Decimal.affordGeometricSeries(game.knowledge.div(2), 20, 2, game.knowledgeUpgradesBought[0])
  KU1Cost = Decimal.sumGeometricSeries(KU1amountCanBuy, 20, 2, game.knowledgeUpgradesBought[0])
  if (KU1Cost.lt("e1e9")) game.knowledge = game.knowledge.sub(KU1Cost)
  game.knowledgeUpgradesBought[0] = game.knowledgeUpgradesBought[0].add(KU1amountCanBuy)
  game.knowledgeUpgradeCosts[0] = new Decimal(2).pow(game.knowledgeUpgradesBought[0]).mul(20).floor()
  document.getElementById("knowledgeUpgrade1Cost").innerHTML = format(game.knowledgeUpgradeCosts[0], 0)
  document.getElementById("knowledgeUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.knowledgeUpgradesBought[0].pow(0.5)), 2)

  KU2amountCanBuy = Decimal.affordGeometricSeries(game.knowledge, 50, 5, game.knowledgeUpgradesBought[1])
  KU2Cost = Decimal.sumGeometricSeries(KU2amountCanBuy, 50, 5, game.knowledgeUpgradesBought[1])
  if (KU2Cost.lt("e1e9")) game.knowledge = game.knowledge.sub(KU2Cost)
  game.knowledgeUpgradesBought[1] = game.knowledgeUpgradesBought[1].add(KU2amountCanBuy)
  game.knowledgeUpgradeCosts[1] = new Decimal(5).pow(game.knowledgeUpgradesBought[1]).mul(50).floor()
  document.getElementById("knowledgeUpgrade2Cost").innerHTML = format(game.knowledgeUpgradeCosts[1], 0)
  knowledgeUpgrade2Effect = new Decimal(5).pow(game.knowledgeUpgradesBought[1].pow(0.5))
  if (knowledgeUpgrade2Effect.gt(1e20)) knowledgeUpgrade2Effect = knowledgeUpgrade2Effect.mul(1e60).pow(0.25)
	if (knowledgeUpgrade2Effect.gt("e2e7")) knowledgeUpgrade2Effect = new Decimal("e2e7")
  document.getElementById("knowledgeUpgrade2Effect").innerHTML = format(knowledgeUpgrade2Effect, 2)
}

function knowledgeAutoMaxAll() {
  if (!game.knowledgeAutoMaxAll) {
    game.knowledgeAutoMaxAll = true
    document.getElementById("knowledgeAutoMaxAllButton").innerHTML = "Auto max all: On"
  }
  else {
    game.knowledgeAutoMaxAll = false
    document.getElementById("knowledgeAutoMaxAllButton").innerHTML = "Auto max all: Off"
  }
}

function buyTome() {
  if (game.knowledge.gte(game.tomeCost)) {
    if (game.unlockedAchievements[15] == 0) game.knowledge = game.knowledge.sub(game.tomeCost)
    game.tomes = game.tomes.add(1)
    game.totalTomes = game.totalTomes.add(1)
    if (game.tomeUpgradesBought[7]) {game.tomeCost = new Decimal(1.1).pow(game.totalTomes).mul(100000)}
    else if (game.tomeUpgradesBought[4]) {game.tomeCost = new Decimal(1.3).pow(game.totalTomes).mul(100000)}
    else {game.tomeCost = new Decimal(1.5).pow(game.totalTomes).mul(100000)}
    document.getElementById("tomeCost").innerHTML = format(game.tomeCost, 0)
  }
}

function buyMaxTomes() {
  if (game.tomeUpgradesBought[7]) {
    amtToBuy = Decimal.affordGeometricSeries(game.knowledge, 100000, 1.1, game.totalTomes)
    costToBuy = Decimal.sumGeometricSeries(amtToBuy, 100000, 1.1, game.totalTomes)
  }
  else if (game.tomeUpgradesBought[4]) {
    amtToBuy = Decimal.affordGeometricSeries(game.knowledge, 100000, 1.3, game.totalTomes)
    costToBuy = Decimal.sumGeometricSeries(amtToBuy, 100000, 1.3, game.totalTomes)
  }
  else {
    amtToBuy = Decimal.affordGeometricSeries(game.knowledge, 100000, 1.5, game.totalTomes)
    costToBuy = Decimal.sumGeometricSeries(amtToBuy, 100000, 1.5, game.totalTomes)
  }
  game.tomes = game.tomes.add(amtToBuy)
  game.totalTomes = game.totalTomes.add(amtToBuy)
  if (game.unlockedAchievements[14] <= 1) game.knowledge = game.knowledge.sub(costToBuy)
  if (game.tomeUpgradesBought[7]) {game.tomeCost = new Decimal(1.1).pow(game.totalTomes).mul(100000)}
  else if (game.tomeUpgradesBought[4]) {game.tomeCost = new Decimal(1.3).pow(game.totalTomes).mul(100000)}
  else {game.tomeCost = new Decimal(1.5).pow(game.totalTomes).mul(100000)}
  document.getElementById("tomeCost").innerHTML = format(game.tomeCost, 0)
}

//Tome upgrades
function buyTomeUpgrade(x) {
  //Checks that the tome upgrade is not bought and that the player's tome amount is greater/equal to the corresponding upgrade cost
  if (x==12 && game.tomeUpgradesBought[11] != true && game.tomes.gte(tomeUpgradeCosts[11]) && game.darkMagicUpgradesBought[10]) {
    game.tomes = game.tomes.sub(tomeUpgradeCosts[11])
    game.tomeUpgradesBought[11] = true
    document.getElementsByClassName("tomeUpgrade")[11].disabled = true
    document.getElementsByClassName("box")[24].style.display = "block"
    document.getElementsByClassName("resourceRow")[16].style.display = "block"
    addUnlock() //sets unlock to 20
  }
  else if (x==13 && game.tomeUpgradesBought[12] != true && game.tomes.gte(tomeUpgradeCosts[12]) && game.unlocks >= 20) {
    game.tomes = game.tomes.sub(tomeUpgradeCosts[12])
    game.tomeUpgradesBought[12] = true
    document.getElementsByClassName("tomeUpgrade")[12].disabled = true
    document.getElementsByClassName("box")[25].style.display = "block"
    document.getElementsByClassName("resourceRow")[17].style.display = "block"
    document.getElementById("maxRedSigilUpgradesButton").style.display = "block"
    redSigilAutoOption = document.createElement("option")
    redSigilAutoOption.text = "Red"
    document.getElementById("sigilResetterType").add(redSigilAutoOption)
    document.getElementById("redSigilUpgrade1Cost").innerHTML = format(game.redSigilUpgrade1Cost, 0)
    document.getElementById("redSigilUpgrade1Effect").innerHTML = format(game.redSigilUpgradesBought[0].add(1), 2)
    document.getElementById("redSigilUpgrade2Cost").innerHTML = format(game.redSigilUpgrade2Cost, 0)
    document.getElementById("redSigilUpgrade2Effect").innerHTML = format(new Decimal(50).pow(game.redSigilUpgradesBought[1].pow(0.8)), 2)
    document.getElementById("redSigilUpgrade3Cost").innerHTML = format(game.redSigilUpgrade3Cost, 0)
    document.getElementById("redSigilUpgrade3Effect").innerHTML = format(new Decimal(6).pow(game.redSigilUpgradesBought[2].pow(0.7)), 2)
    addUnlock() //sets unlock to 21
  }
  else if (game.tomeUpgradesBought[x-1] != true && game.tomes.gte(tomeUpgradeCosts[x-1]) && x!=12 && x!=13) {
    game.tomes = game.tomes.sub(tomeUpgradeCosts[x-1])
    game.tomeUpgradesBought[x-1] = true
    document.getElementsByClassName("tomeUpgrade")[x-1].disabled = true
    if (x==5) {
      game.tomeCost = new Decimal(1.3).pow(game.totalTomes).mul(100000)
      document.getElementById("tomeCost").innerHTML = format(game.tomeCost, 0)
    }
    if (x==6) {
      document.getElementsByClassName("box")[22].style.display = "block"
      document.getElementsByClassName("resourceRow")[14].style.display = "block"
      addUnlock() //sets unlock to 17
    }
    if (x==8) {
      game.tomeCost = new Decimal(1.1).pow(game.totalTomes).mul(100000)
      document.getElementById("tomeCost").innerHTML = format(game.tomeCost, 0)
    }
    if (x==9) {
      document.getElementsByClassName("blueFireUpgrade")[3].style.display = "inline-block"
      document.getElementsByClassName("blueFireUpgrade")[4].style.display = "inline-block"
      document.getElementsByClassName("blueFireUpgrade")[5].style.display = "inline-block"
    }
    if (x==14) {
      newHellLayer = document.createElement("option")
      newHellLayer.text = "Greed (IV)"
      document.getElementById("hellLayer").add(newHellLayer)
      newHellLayer = document.createElement("option")
      newHellLayer.text = "Wrath (V)"
      document.getElementById("hellLayer").add(newHellLayer)
    }
  }
}

//Buy max for tome upgrades
function tomeUpgradeBuyMax() {
  for (i=1;i<12;i++) {
    if (i!=6 && i!=9) buyTomeUpgrade(i)
  }
}