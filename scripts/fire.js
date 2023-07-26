
//Unlocks fire upgrades
function buyFireUpgrades() {
  if (game.gold.gte(5000)) {
    game.gold = game.gold.sub(5000)
    document.getElementById("buyFireUpgradesButton").style.display = "none"
    document.getElementsByClassName("box")[4].style.display = "block"
    document.getElementsByClassName("upgradeDragonButton")[0].style.display = "block"
    addUnlock() //sets unlock to 2
  }
}

/*
function buyFireUpgrade(x) {
  //For each upgrade (if affordable): subtracts fire based on cost, adds 1 to the upgrade amount bought, updates the cost
  if (x==1 && game.fire.gte(game.fireUpgrade1Cost)) {
    game.fire = game.fire.sub(game.fireUpgrade1Cost)
    game.fireUpgrade1Bought = game.fireUpgrade1Bought.add(1)
    game.fireUpgrade1Cost = new Decimal(1.8).pow(game.fireUpgrade1Bought).mul(50).floor()
    document.getElementById("fireUpgrade1Cost").innerHTML = format(game.fireUpgrade1Cost, 0)
    if (game.magicUpgradesBought[13]) {document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(3.5).pow(game.fireUpgrade1Bought.pow(0.7)), 2)}
    else {document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.fireUpgrade1Bought.pow(0.6)), 2)}
  }
  else if (x==2 && game.fire.gte(game.fireUpgrade2Cost)) {
    game.fire = game.fire.sub(game.fireUpgrade2Cost)
    game.fireUpgrade2Bought = game.fireUpgrade2Bought.add(1)
    game.fireUpgrade2Cost = new Decimal(2).pow(game.fireUpgrade2Bought).mul(100).floor()
    document.getElementById("fireUpgrade2Cost").innerHTML = format(game.fireUpgrade2Cost, 0)
  }
  else if (x==3 && game.fire.gte(game.fireUpgrade3Cost)) {
    game.fire = game.fire.sub(game.fireUpgrade3Cost)
    game.fireUpgrade3Bought = game.fireUpgrade3Bought.add(1)
    game.fireUpgrade3Cost = new Decimal(1.4).pow(game.fireUpgrade3Bought).mul(100).floor()
    document.getElementById("fireUpgrade3Cost").innerHTML = format(game.fireUpgrade3Cost, 0)
  }
  else if (x==4 && game.fire.gte(game.fireUpgrade4Cost)) {
    game.fire = game.fire.sub(game.fireUpgrade4Cost)
    game.fireUpgrade4Bought = game.fireUpgrade4Bought.add(1)
    game.fireUpgrade4Cost = new Decimal(1.5).pow(game.fireUpgrade4Bought).mul(500).floor()
    document.getElementById("fireUpgrade4Cost").innerHTML = format(game.fireUpgrade4Cost, 0)
  }
  else if (x==5 && game.fire.gte(game.fireUpgrade5Cost)) {
    game.fire = game.fire.sub(game.fireUpgrade5Cost)
    game.fireUpgrade5Bought = game.fireUpgrade5Bought.add(1)
    game.fireUpgrade5Cost = new Decimal(2.5).pow(game.fireUpgrade5Bought).mul(500).floor()
    document.getElementById("fireUpgrade5Cost").innerHTML = format(game.fireUpgrade5Cost, 0)
  }
  else if (x==6 && game.fire.gte(game.fireUpgrade6Cost)) {
    game.fire = game.fire.sub(game.fireUpgrade6Cost)
    game.fireUpgrade6Bought = game.fireUpgrade6Bought.add(1)
    game.fireUpgrade6Cost = new Decimal(5).pow(game.fireUpgrade6Bought).mul(2e7).floor()
    document.getElementById("fireUpgrade6Cost").innerHTML = format(game.fireUpgrade6Cost, 0)
    document.getElementById("fireUpgrade6Effect").innerHTML = format(new Decimal(3).pow(game.fireUpgrade6Bought.pow(0.6)), 2)
  }
}
*/

function buyFireUpgrade(x) {
  let costString = 'fireUpgrade' + x + 'Cost'; //string identifying the property for this upgrade's cost
  let boughtString = 'fireUpgrade' + x + 'Bought'; //string identifying the property for how many times this upgrade has been bought
  if (game[costString] === undefined || !game.fire.gte(game[costString])) return; //make sure the upgrade provided by x actually exists, and that we can afford it
  if (game[costString].lt("e1e9")) game.fire = game.fire.sub(game[costString]);
  game[boughtString] = game[boughtString].add(1);
  game[costString] = new Decimal(fireUpgradeBase[x]).pow(game[boughtString]).mul(fireUpgradeInitialCosts[x]).floor(); //update cost to reflect new count
  document.getElementById(costString).innerHTML = format(game[costString], 0);
  switch (x) {
    case 1:
      //the effect of upgrade 1 depends on whether magic upgrade 13 has been purchased
      let upg1eff = game.magicUpgradesBought[13] ? new Decimal(3.5).pow(game.fireUpgrade1Bought.pow(0.7)) : new Decimal(2).pow(game.fireUpgrade1Bought.pow(0.6));
      document.getElementById("fireUpgrade1Effect").innerHTML = format(upg1eff, 2)
      break;
    case 6:
      document.getElementById("fireUpgrade6Effect").innerHTML = format(new Decimal(3).pow(game.fireUpgrade6Bought.pow(0.6)), 2)
      break;
  }
}

/*
function fireBuyMax(x) {
  //Determines the maximum upgrades buyable, subtracts fire based on cost, adds to the upgrade amount bought, updates the cost
  switch(x) {
    case 1:
      FU1amountCanBuy = Decimal.affordGeometricSeries(game.fire, 50, 1.8, game.fireUpgrade1Bought)
      FU1Cost = Decimal.sumGeometricSeries(FU1amountCanBuy, 50, 1.8, game.fireUpgrade1Bought)
      game.fire = game.fire.sub(FU1Cost)
      game.fireUpgrade1Bought = game.fireUpgrade1Bought.add(FU1amountCanBuy)
      game.fireUpgrade1Cost = new Decimal(1.8).pow(game.fireUpgrade1Bought).mul(50).floor()
      document.getElementById("fireUpgrade1Cost").innerHTML = format(game.fireUpgrade1Cost, 0)
      if (game.magicUpgradesBought[13]) {document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(3.5).pow(game.fireUpgrade1Bought.pow(0.7)), 2)}
      else {document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.fireUpgrade1Bought.pow(0.6)), 2)}
      break
    case 2:
      FU2amountCanBuy = Decimal.affordGeometricSeries(game.fire, 100, 2, game.fireUpgrade2Bought)
      FU2Cost = Decimal.sumGeometricSeries(FU2amountCanBuy, 100, 2, game.fireUpgrade2Bought)
      game.fire = game.fire.sub(FU2Cost)
      game.fireUpgrade2Bought = game.fireUpgrade2Bought.add(FU2amountCanBuy)
      game.fireUpgrade2Cost = new Decimal(2).pow(game.fireUpgrade2Bought).mul(100).floor()
      document.getElementById("fireUpgrade2Cost").innerHTML = format(game.fireUpgrade2Cost, 0)
      break
    case 3:
      FU3amountCanBuy = Decimal.affordGeometricSeries(game.fire, 100, 1.4, game.fireUpgrade3Bought)
      FU3Cost = Decimal.sumGeometricSeries(FU3amountCanBuy, 100, 1.4, game.fireUpgrade3Bought)
      game.fire = game.fire.sub(FU3Cost)
      game.fireUpgrade3Bought = game.fireUpgrade3Bought.add(FU3amountCanBuy)
      game.fireUpgrade3Cost = new Decimal(1.4).pow(game.fireUpgrade3Bought).mul(100).floor()
      document.getElementById("fireUpgrade3Cost").innerHTML = format(game.fireUpgrade3Cost, 0)
      break
    case 4:
      FU4amountCanBuy = Decimal.affordGeometricSeries(game.fire, 500, 1.5, game.fireUpgrade4Bought)
      FU4Cost = Decimal.sumGeometricSeries(FU4amountCanBuy, 500, 1.5, game.fireUpgrade4Bought)
      game.fire = game.fire.sub(FU4Cost)
      game.fireUpgrade4Bought = game.fireUpgrade4Bought.add(FU4amountCanBuy)
      game.fireUpgrade4Cost = new Decimal(1.5).pow(game.fireUpgrade4Bought).mul(500).floor()
      document.getElementById("fireUpgrade4Cost").innerHTML = format(game.fireUpgrade4Cost, 0)
      break
    case 5:
      FU5amountCanBuy = Decimal.affordGeometricSeries(game.fire, 500, 2.5, game.fireUpgrade5Bought)
      FU5Cost = Decimal.sumGeometricSeries(FU5amountCanBuy, 500, 2.5, game.fireUpgrade5Bought)
      game.fire = game.fire.sub(FU5Cost)
      game.fireUpgrade5Bought = game.fireUpgrade5Bought.add(FU5amountCanBuy)
      game.fireUpgrade5Cost = new Decimal(2.5).pow(game.fireUpgrade5Bought).mul(500).floor()
      document.getElementById("fireUpgrade5Cost").innerHTML = format(game.fireUpgrade5Cost, 0)
      break
    case 6:
      FU6amountCanBuy = Decimal.affordGeometricSeries(game.fire, 2e7, 5, game.fireUpgrade6Bought)
      FU6Cost = Decimal.sumGeometricSeries(FU6amountCanBuy, 2e7, 5, game.fireUpgrade6Bought)
      game.fire = game.fire.sub(FU6Cost)
      game.fireUpgrade6Bought = game.fireUpgrade6Bought.add(FU6amountCanBuy)
      game.fireUpgrade6Cost = new Decimal(5).pow(game.fireUpgrade6Bought).mul(2e7).floor()
      document.getElementById("fireUpgrade6Cost").innerHTML = format(game.fireUpgrade6Cost, 0)
      document.getElementById("fireUpgrade6Effect").innerHTML = format(new Decimal(3).pow(game.fireUpgrade6Bought.pow(0.6)), 2)
      break
  }
}
*/

function fireBuyMax(x) {
  let amtToSpend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.fire; //provide an optional second argument for amount to spend
  let costString = 'fireUpgrade' + x + 'Cost'; //string identifying the property for this upgrade's cost
  let boughtString = 'fireUpgrade' + x + 'Bought'; //string identifying the property for how many times this upgrade has been bought
  let amtToBuy = Decimal.affordGeometricSeries(amtToSpend, fireUpgradeInitialCosts[x], fireUpgradeBase[x], game[boughtString]); //calculate how many we can afford
  let costToBuy = Decimal.sumGeometricSeries(amtToBuy, fireUpgradeInitialCosts[x], fireUpgradeBase[x], game[boughtString]); //determine total cost
  if (costToBuy.lt("e1e9")) game.fire = Decimal.max(game.fire.sub(costToBuy), 0);
  game[boughtString] = game[boughtString].add(amtToBuy);
  game[costString] = new Decimal(fireUpgradeBase[x]).pow(game[boughtString]).mul(fireUpgradeInitialCosts[x]).floor(); //update cost to reflect new count
  document.getElementById(costString).innerHTML = format(game[costString], 0);
  switch (x) {
    case 1:
      //the effect of upgrade 1 depends on whether magic upgrade 13 has been purchased
      let upg1eff = game.magicUpgradesBought[13] ? new Decimal(3.5).pow(game.fireUpgrade1Bought.pow(0.7)) : new Decimal(2).pow(game.fireUpgrade1Bought.pow(0.6));
      document.getElementById("fireUpgrade1Effect").innerHTML = format(upg1eff, 2)
      break;
    case 6:
      document.getElementById("fireUpgrade6Effect").innerHTML = format(new Decimal(3).pow(game.fireUpgrade6Bought.pow(0.6)), 2)
      break;
  }
}

function fireMaxAll() {
  if (game.platinumUpgradesBought[2]) {
    for(let i = 1; i<7; i++) {
      fireBuyMax(i, game.fire.div(6).floor())
    }
  } else {
    for(let i = 1; i<6; i++) {
      fireBuyMax(i, game.fire.div(5).floor())
    }
  }
  
  if (game.platinumUpgradesBought[2]) {
    for(let i = 1; i<7; i++) {
      fireBuyMax(i, game.fire)
    }
  } else {
    for(let i = 1; i<6; i++) {
      fireBuyMax(i, game.fire)
    }
  }
}

function fireAutoMaxAll() {
  if (!game.fireAutoMaxAll) {
    game.fireAutoMaxAll = true
    document.getElementById("fireAutoMaxAllButton").innerHTML = "Auto max all: On"
  }
  else {
    game.fireAutoMaxAll = false
    document.getElementById("fireAutoMaxAllButton").innerHTML = "Auto max all: Off"
  }
}

function buyBlueFireUpgrade(x) {
  if (!game.blueFire.gte(game.blueFireUpgradeCosts[x-1])) return; //make sure that we can afford the upgrade
  if (new Decimal(game.blueFireUpgradeCosts[x-1]).lt("e1e9")) game.blueFire = game.blueFire.sub(game.blueFireUpgradeCosts[x-1]);
  game.blueFireUpgradesBought[x-1] = game.blueFireUpgradesBought[x-1].add(1);
  game.blueFireUpgradeCosts[x-1] = new Decimal(blueFireUpgradeBase[x]).pow(game.blueFireUpgradesBought[x-1]).mul(blueFireUpgradeInitialCosts[x]).floor(); //update cost to reflect new count
  document.getElementById('blueFireUpgrade' + x + 'Cost').innerHTML = format(game.blueFireUpgradeCosts[x-1], 0);
  if (x==5) {
    document.getElementById("dragonTimeEffectCap").innerHTML = ""
  }
}

function blueFireBuyMax(x) {
  let amtToSpend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.blueFire; //provide an optional second argument for amount to spend
  let amtToBuy = Decimal.affordGeometricSeries(amtToSpend, blueFireUpgradeInitialCosts[x], blueFireUpgradeBase[x], game.blueFireUpgradesBought[x-1]); //calculate how many we can afford
  let costToBuy = Decimal.sumGeometricSeries(amtToBuy, blueFireUpgradeInitialCosts[x], blueFireUpgradeBase[x], game.blueFireUpgradesBought[x-1]); //determine total cost
  if (costToBuy.lt("e1e9")) game.blueFire = game.blueFire.sub(costToBuy);
  game.blueFireUpgradesBought[x-1] = game.blueFireUpgradesBought[x-1].add(amtToBuy);
  game.blueFireUpgradeCosts[x-1] = new Decimal(blueFireUpgradeBase[x]).pow(game.blueFireUpgradesBought[x-1]).mul(blueFireUpgradeInitialCosts[x]).floor(); //update cost to reflect new count
  document.getElementById('blueFireUpgrade' + x + 'Cost').innerHTML = format(game.blueFireUpgradeCosts[x-1], 0);
}

function blueFireMaxAll() {
  for(let i = 1; i<7; i++) {
    blueFireBuyMax(i, game.blueFire.div(6).floor())
  }
  for(let i = 1; i<7; i++) {
    blueFireBuyMax(i, game.blueFire)
  }
}

function blueFireAutoMaxAll() {
  if (!game.blueFireAutoMaxAll) {
    game.blueFireAutoMaxAll = true
    document.getElementById("blueFireAutoMaxAllButton").innerHTML = "Auto max all: On"
  }
  else {
    game.blueFireAutoMaxAll = false
    document.getElementById("blueFireAutoMaxAllButton").innerHTML = "Auto max all: Off"
  }
}

function buyHolyFireUpgrade(x) {
  if (!game.holyFire.gte(game.holyFireUpgradeCosts[x-1])) return; //make sure that we can afford the upgrade
  if (new Decimal((game.holyFireUpgradeCosts[x-1])).lt("e1e9")) game.holyFire = game.holyFire.sub(game.holyFireUpgradeCosts[x-1]);
  game.holyFireUpgradesBought[x-1] = game.holyFireUpgradesBought[x-1].add(1);
  game.holyFireUpgradeCosts[x-1] = new Decimal(holyFireUpgradeBase[x]).pow(game.holyFireUpgradesBought[x-1]).mul(holyFireUpgradeInitialCosts[x]).floor(); //update cost to reflect new count
  document.getElementById('holyFireUpgrade' + x + 'Cost').innerHTML = format(game.holyFireUpgradeCosts[x-1], 0);
}

function holyFireBuyMax(x) {
  let amtToSpend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.holyFire; //provide an optional second argument for amount to spend
  let amtToBuy = Decimal.affordGeometricSeries(amtToSpend, holyFireUpgradeInitialCosts[x], holyFireUpgradeBase[x], game.holyFireUpgradesBought[x-1]); //calculate how many we can afford
  let costToBuy = Decimal.sumGeometricSeries(amtToBuy, holyFireUpgradeInitialCosts[x], holyFireUpgradeBase[x], game.holyFireUpgradesBought[x-1]); //determine total cost
  if (costToBuy.lt("e1e9")) game.holyFire = game.holyFire.sub(costToBuy);
  game.holyFireUpgradesBought[x-1] = game.holyFireUpgradesBought[x-1].add(amtToBuy);
  game.holyFireUpgradeCosts[x-1] = new Decimal(holyFireUpgradeBase[x]).pow(game.holyFireUpgradesBought[x-1]).mul(holyFireUpgradeInitialCosts[x]).floor(); //update cost to reflect new count
  document.getElementById('holyFireUpgrade' + x + 'Cost').innerHTML = format(game.holyFireUpgradeCosts[x-1], 0);
}

function holyFireMaxAll() {
  for(let i = 1; i<7; i++) {
    holyFireBuyMax(i, game.holyFire.div(6).floor())
  }
  for(let i = 1; i<7; i++) {
    holyFireBuyMax(i, game.holyFire)
  }
}

function holyFireAutoMaxAll() {
  if (!game.holyFireAutoMaxAll) {
    game.holyFireAutoMaxAll = true
    document.getElementById("holyFireAutoMaxAllButton").innerHTML = "Auto max all: On"
  }
  else {
    game.holyFireAutoMaxAll = false
    document.getElementById("holyFireAutoMaxAllButton").innerHTML = "Auto max all: Off"
  }
}