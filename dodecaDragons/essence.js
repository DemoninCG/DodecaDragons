function unlockEssences() {
	if (game.gold.gte("ee500000")) {
		document.getElementsByClassName("box")[41].style.display = "block"
		document.getElementsByClassName("box")[42].style.display = "block"
		document.getElementsByClassName("resourceRow")[27].style.display = "block"
		document.getElementsByClassName("resourceRow")[28].style.display = "block"
		document.getElementById("unlockEssencesButton").style.display = "none"
		document.getElementById("unlockDeathEssenceButton").style.display = "block"
		addUnlock() //sets unlock to 33
	}
}

function buyLightEssenceUpgrade(x) {
	if (game.lightEssence.gte(game.lightEssenceUpgradeCosts[x-1])) {
		game.lightEssence = game.lightEssence.sub(game.lightEssenceUpgradeCosts[x-1])
		game.lightEssenceUpgradesBought[x-1] = game.lightEssenceUpgradesBought[x-1].add(1)
		game.lightEssenceUpgradeCosts[x-1] = new Decimal(lightEssenceUpgradeBase[x]).pow(game.lightEssenceUpgradesBought[x-1]).mul(lightEssenceUpgradeInitialCosts[x]).floor()
	}
}

function lightEssenceBuyMax(x) {
	let amtToSpend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.lightEssence; //provide an optional second argument for amount to spend
  let amtToBuy = Decimal.affordGeometricSeries(amtToSpend, lightEssenceUpgradeInitialCosts[x], lightEssenceUpgradeBase[x], game.lightEssenceUpgradesBought[x-1]); //calculate how many we can afford
  let costToBuy = Decimal.sumGeometricSeries(amtToBuy, lightEssenceUpgradeInitialCosts[x], lightEssenceUpgradeBase[x], game.lightEssenceUpgradesBought[x-1]); //determine total cost
  if (costToBuy.lt("e1e9")) game.lightEssence = game.lightEssence.sub(costToBuy);
  game.lightEssenceUpgradesBought[x-1] = game.lightEssenceUpgradesBought[x-1].add(amtToBuy);
  game.lightEssenceUpgradeCosts[x-1] = new Decimal(lightEssenceUpgradeBase[x]).pow(game.lightEssenceUpgradesBought[x-1]).mul(lightEssenceUpgradeInitialCosts[x]).floor()
}

function lightEssenceMaxAll() {
  for(let i = 1; i<4; i++) {
    lightEssenceBuyMax(i, game.lightEssence.div(3).floor())
  }
  for(let i = 1; i<4; i++) {
    lightEssenceBuyMax(i, game.lightEssence)
  }
}

function buyDarkEssenceUpgrade(x) {
	if (game.darkEssence.gte(game.darkEssenceUpgradeCosts[x-1])) {
		game.darkEssence = game.darkEssence.sub(game.darkEssenceUpgradeCosts[x-1])
		game.darkEssenceUpgradesBought[x-1] = game.darkEssenceUpgradesBought[x-1].add(1)
		game.darkEssenceUpgradeCosts[x-1] = new Decimal(darkEssenceUpgradeBase[x]).pow(game.darkEssenceUpgradesBought[x-1]).mul(darkEssenceUpgradeInitialCosts[x]).floor()
	}
}

function darkEssenceBuyMax(x) {
	let amtToSpend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.darkEssence; //provide an optional second argument for amount to spend
  let amtToBuy = Decimal.affordGeometricSeries(amtToSpend, darkEssenceUpgradeInitialCosts[x], darkEssenceUpgradeBase[x], game.darkEssenceUpgradesBought[x-1]); //calculate how many we can afford
  let costToBuy = Decimal.sumGeometricSeries(amtToBuy, darkEssenceUpgradeInitialCosts[x], darkEssenceUpgradeBase[x], game.darkEssenceUpgradesBought[x-1]); //determine total cost
  if (costToBuy.lt("e1e9")) game.darkEssence = game.darkEssence.sub(costToBuy);
  game.darkEssenceUpgradesBought[x-1] = game.darkEssenceUpgradesBought[x-1].add(amtToBuy);
  game.darkEssenceUpgradeCosts[x-1] = new Decimal(darkEssenceUpgradeBase[x]).pow(game.darkEssenceUpgradesBought[x-1]).mul(darkEssenceUpgradeInitialCosts[x]).floor()
}

function darkEssenceMaxAll() {
  for(let i = 1; i<4; i++) {
    darkEssenceBuyMax(i, game.darkEssence.div(3).floor())
  }
  for(let i = 1; i<4; i++) {
    darkEssenceBuyMax(i, game.darkEssence)
  }
}

function unlockDeathEssence() {
	if (game.gold.gte("ee1.5e6")) {
		document.getElementsByClassName("box")[43].style.display = "block"
		document.getElementsByClassName("resourceRow")[29].style.display = "block"
		document.getElementById("unlockDeathEssenceButton").style.display = "none"
		document.getElementsByClassName("upgradeDragonButton")[8].style.display = "block"
		addUnlock() //sets unlock to 34
	}
}

function buyDeathEssenceUpgrade(x) {
	if (game.deathEssence.gte(game.deathEssenceUpgradeCosts[x-1])) {
		game.deathEssence = game.deathEssence.sub(game.deathEssenceUpgradeCosts[x-1])
		game.deathEssenceUpgradesBought[x-1] = game.deathEssenceUpgradesBought[x-1].add(1)
		game.deathEssenceUpgradeCosts[x-1] = new Decimal(deathEssenceUpgradeBase[x]).pow(game.deathEssenceUpgradesBought[x-1]).mul(deathEssenceUpgradeInitialCosts[x]).floor()
	}
}

function deathEssenceBuyMax(x) {
	let amtToSpend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.deathEssence; //provide an optional second argument for amount to spend
  let amtToBuy = Decimal.affordGeometricSeries(amtToSpend, deathEssenceUpgradeInitialCosts[x], deathEssenceUpgradeBase[x], game.deathEssenceUpgradesBought[x-1]); //calculate how many we can afford
  let costToBuy = Decimal.sumGeometricSeries(amtToBuy, deathEssenceUpgradeInitialCosts[x], deathEssenceUpgradeBase[x], game.deathEssenceUpgradesBought[x-1]); //determine total cost
  if (costToBuy.lt("e1e9")) game.deathEssence = game.deathEssence.sub(costToBuy);
  game.deathEssenceUpgradesBought[x-1] = game.deathEssenceUpgradesBought[x-1].add(amtToBuy);
  game.deathEssenceUpgradeCosts[x-1] = new Decimal(deathEssenceUpgradeBase[x]).pow(game.deathEssenceUpgradesBought[x-1]).mul(deathEssenceUpgradeInitialCosts[x]).floor()
}

function deathEssenceMaxAll() {
  for(let i = 1; i<6; i++) {
    deathEssenceBuyMax(i, game.deathEssence.div(5).floor())
  }
  for(let i = 1; i<6; i++) {
    deathEssenceBuyMax(i, game.deathEssence)
  }
}

function unlockFinalityEssence() {
	if (game.gold.gte("ee1.5e8")) {
		document.getElementsByClassName("box")[45].style.display = "block"
		document.getElementsByClassName("resourceRow")[31].style.display = "block"
		document.getElementById("unlockFinalityEssenceButton").style.display = "none"
		document.getElementsByClassName("upgradeDragonButton")[9].style.display = "block"
		addUnlock() //sets unlock to 36
	}
}

function buyFinalityEssenceUpgrade(x) {
	if (game.finalityEssence.gte(game.finalityEssenceUpgradeCosts[x-1])) {
		game.finalityEssence = game.finalityEssence.sub(game.finalityEssenceUpgradeCosts[x-1])
		game.finalityEssenceUpgradesBought[x-1] = game.finalityEssenceUpgradesBought[x-1].add(1)
		game.finalityEssenceUpgradeCosts[x-1] = new Decimal(finalityEssenceUpgradeBase[x]).pow(game.finalityEssenceUpgradesBought[x-1]).mul(finalityEssenceUpgradeInitialCosts[x]).floor()
	}
}

function finalityEssenceBuyMax(x) {
	let amtToSpend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.finalityEssence; //provide an optional second argument for amount to spend
  let amtToBuy = Decimal.affordGeometricSeries(amtToSpend, finalityEssenceUpgradeInitialCosts[x], finalityEssenceUpgradeBase[x], game.finalityEssenceUpgradesBought[x-1]); //calculate how many we can afford
  let costToBuy = Decimal.sumGeometricSeries(amtToBuy, finalityEssenceUpgradeInitialCosts[x], finalityEssenceUpgradeBase[x], game.finalityEssenceUpgradesBought[x-1]); //determine total cost
  if (costToBuy.lt("e1e9")) game.finalityEssence = game.finalityEssence.sub(costToBuy);
  game.finalityEssenceUpgradesBought[x-1] = game.finalityEssenceUpgradesBought[x-1].add(amtToBuy);
  game.finalityEssenceUpgradeCosts[x-1] = new Decimal(finalityEssenceUpgradeBase[x]).pow(game.finalityEssenceUpgradesBought[x-1]).mul(finalityEssenceUpgradeInitialCosts[x]).floor()
}

function finalityEssenceMaxAll() {
  for(let i = 1; i<5; i++) {
    finalityEssenceBuyMax(i, game.finalityEssence.div(2).floor())
  }
  for(let i = 1; i<5; i++) {
    finalityEssenceBuyMax(i, game.finalityEssence)
  }
}

function unlockFinalityCubes() {
	if (game.gold.gte("ee7.5e9")) {
		document.getElementsByClassName("box")[46].style.display = "block"
		document.getElementsByClassName("resourceRow")[32].style.display = "block"
		document.getElementById("unlockFinalityCubesButton").style.display = "none"
		addUnlock() //sets unlock to 37
	}
}

function gainFinalityCube() {
	if (game.gold.gte(game.finalityCubeCost)) {
		game.finalityCubes = game.finalityCubes.add(1)
		game.finalityCubeCost = new Decimal(10).pow(new Decimal(10).pow(game.finalityCubes.mul(2.5e9).add(7.5e9)))
	}
}

function gainMaxFinalityCubes() {
	if (game.gold.gte(game.finalityCubeCost)) {
		let maxFinalityCubes = game.gold.log10().log10().div(2.5e9).sub(game.finalityCubes).sub(2).floor()
		game.finalityCubes = game.finalityCubes.add(maxFinalityCubes)
		game.finalityCubeCost = new Decimal(10).pow(new Decimal(10).pow(game.finalityCubes.mul(2.5e9).add(7.5e9)))
	}
}

function boostFinalityCubes() {
	if (game.gold.gte(game.finalityBoostCost)) {
		game.finalityBoosts = game.finalityBoosts.add(1)
		game.finalityBoostCost = new Decimal(10).pow(new Decimal(10).pow(game.finalityBoosts.mul(2.5e10).add(2.5e10)))
	}
}

function boostFinalityBoosts() {
	if (game.gold.gte(game.finalityBoostBoostCost)) {
		game.finalityBoostBoosts = game.finalityBoostBoosts.add(1)
		game.finalityBoostBoostCost = new Decimal(10).pow(new Decimal(10).pow(game.finalityBoostBoosts.mul(1e11).add(1.5e11)))
	}
}