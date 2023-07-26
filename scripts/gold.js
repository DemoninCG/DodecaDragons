function produceGold() {
  game.gold = game.gold.add(game.goldPerClick)
}

function buyMiner() {
  if (game.gold.gte(game.minerCost)) {
    //Subtracts gold based on cost, adds a miner, updates the cost
    if (game.gold.lt("e1e9")) game.gold = Decimal.max(game.gold.sub(game.minerCost), 0)
    game.miners = game.miners.add(1)
    game.minerCost = new Decimal(1.1).sub(game.platinumUpgradesBought[3] * 0.005).pow(game.miners).mul(20).floor()
    document.getElementById("minerCost").innerHTML = format(game.minerCost, 0)
    document.getElementsByClassName("resourceRow")[1].style.display = "block"
  }
}

function buyMaxMiners() {
  if (game.gold.gte(game.minerCost)) {
    //Determines the amount of miners the user can afford and the price, subtracts gold, adds miners, updates the cost
    BMamountCanBuy = Decimal.affordGeometricSeries(game.gold, 20, new Decimal(1.1).sub(game.platinumUpgradesBought[3] * 0.005), game.miners)
    BMCost = Decimal.sumGeometricSeries(BMamountCanBuy, 20, new Decimal(1.1).sub(game.platinumUpgradesBought[3] * 0.005), game.miners)
    if (BMCost.lt("e1e9")) game.gold = Decimal.max(game.gold.sub(BMCost), 0)
    //game.gold = game.gold.sub(BMCost)
    game.miners = game.miners.add(BMamountCanBuy)
    game.minerCost = new Decimal(1.1).sub(game.platinumUpgradesBought[3] * 0.005).pow(game.miners).mul(20).floor()
    document.getElementById("minerCost").innerHTML = format(game.minerCost, 0)
    document.getElementsByClassName("resourceRow")[1].style.display = "block"
  }
}


function minerAutoBuyMax() {
  if (!game.minerAutoBuyMax) {
    game.minerAutoBuyMax = true
    document.getElementById("minerAutoBuyMaxButton").innerHTML = "Auto buy max: On"
  }
  else {
    game.minerAutoBuyMax = false
    document.getElementById("minerAutoBuyMaxButton").innerHTML = "Auto buy max: Off"
  }
}