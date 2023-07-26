//Confirmation popups for holy polyhedron resets (could probably be optimised)
function holyPolyhedronCheck(x) {
  if (x==1) {
    if (game.holyTetrahedronsToGet.eq(0)) {
      if (confirm("Woah, hold on! You won't gain any holy tetrahedrons! Are you sure you want to ascend?")) holyPolyhedronReset(x)
    }
    else if (game.confirmations[2]) {
      if (confirm("Are you sure you want to ascend?")) holyPolyhedronReset(x)
    }
    else {holyPolyhedronReset(x)}
  }
  else if (x==2) {
    if (game.holyOctahedronsToGet.eq(0)) {
      if (confirm("Woah, hold on! You won't gain any holy octahedrons! Are you sure you want to ascend?")) holyPolyhedronReset(x)
    }
    else if (game.confirmations[2]) {
      if (confirm("Are you sure you want to ascend?")) holyPolyhedronReset(x)
    }
    else {holyPolyhedronReset(x)}
  }
  else if (x==3) {
    if (game.holyDodecahedronsToGet.eq(0)) {
      if (confirm("Woah, hold on! You won't gain any holy dodecahedrons! Are you sure you want to ascend?")) holyPolyhedronReset(x)
    }
    else if (game.confirmations[2]) {
      if (confirm("Are you sure you want to ascend?")) holyPolyhedronReset(x)
    }
    else {holyPolyhedronReset(x)}
  }
}

function holyPolyhedronReset(x) {
  if (x==1) {game.holyTetrahedrons = game.holyTetrahedrons.add(game.holyTetrahedronsToGet)}
  else if (x==2) {game.holyOctahedrons = game.holyOctahedrons.add(game.holyOctahedronsToGet)}
  else if (x==3) {game.holyDodecahedrons = game.holyDodecahedrons.add(game.holyDodecahedronsToGet)}
  
  sigilReset(0, triggerLayer="holyPolyhedron")

  game.cyanSigils = new Decimal(0)
  game.cyanSigilPower = new Decimal(0)
  game.cyanSigilPowerPerSecond = new Decimal(0)
  game.cyanSigilUpgrade1Cost = new Decimal(1)
  game.cyanSigilUpgrade2Cost = new Decimal(20)
  game.cyanSigilUpgrade3Cost = new Decimal(500)
  game.cyanSigilUpgradesBought = [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(1)]
  document.getElementById("cyanSigilUpgrade1Cost").innerHTML = format(game.cyanSigilUpgrade1Cost, 0)
  document.getElementById("cyanSigilUpgrade1Effect").innerHTML = format(game.cyanSigilUpgradesBought[0].add(1), 2)
  document.getElementById("cyanSigilUpgrade2Cost").innerHTML = format(game.cyanSigilUpgrade2Cost, 0)
  document.getElementById("cyanSigilUpgrade2Effect").innerHTML = format(game.cyanSigilUpgradesBought[1].add(1).pow(1.5), 2)
  document.getElementById("cyanSigilUpgrade3Cost").innerHTML = format(game.cyanSigilUpgrade3Cost, 0)
  document.getElementById("cyanSigilUpgrade3Effect").innerHTML = format(new Decimal(1.2).pow(game.cyanSigilUpgradesBought[2].pow(0.4)), 2)

  game.blueSigils = new Decimal(0)
  game.blueSigilPower = new Decimal(0)
  game.blueSigilPowerPerSecond = new Decimal(0)
  game.blueSigilUpgrade1Cost = new Decimal(1)
  game.blueSigilUpgrade2Cost = new Decimal(20)
  game.blueSigilUpgrade3Cost = new Decimal(100)
  game.blueSigilUpgradesBought = [new Decimal(0), new Decimal(0), new Decimal(10), new Decimal(1)]
  document.getElementById("blueSigilUpgrade1Cost").innerHTML = format(game.blueSigilUpgrade1Cost, 0)
  document.getElementById("blueSigilUpgrade1Effect").innerHTML = format(game.blueSigilUpgradesBought[0].add(1), 2)
  document.getElementById("blueSigilUpgrade2Cost").innerHTML = format(game.blueSigilUpgrade2Cost, 0)
  document.getElementById("blueSigilUpgrade2Effect").innerHTML = format(new Decimal(1e15).pow(game.blueSigilUpgradesBought[1].pow(0.6)), 2)
  document.getElementById("blueSigilUpgrade3Cost").innerHTML = format(game.blueSigilUpgrade3Cost, 0)
  document.getElementById("blueSigilUpgrade3Bought").innerHTML = format(game.blueSigilUpgradesBought[2], 0)

  game.indigoSigils = new Decimal(0)
  game.indigoSigilPower = new Decimal(0)
  game.indigoSigilPowerPerSecond = new Decimal(0)
  game.indigoSigilUpgrade1Cost = new Decimal(1)
  game.indigoSigilUpgrade2Cost = new Decimal(20)
  game.indigoSigilUpgrade3Cost = new Decimal(400)
  game.indigoSigilUpgradesBought = [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(1)]
  document.getElementById("indigoSigilUpgrade1Cost").innerHTML = format(game.indigoSigilUpgrade1Cost, 0)
  document.getElementById("indigoSigilUpgrade1Effect").innerHTML = format(game.indigoSigilUpgradesBought[0].add(1), 2)
  document.getElementById("indigoSigilUpgrade2Cost").innerHTML = format(game.indigoSigilUpgrade2Cost, 0)
  document.getElementById("indigoSigilUpgrade2Effect").innerHTML = format(Decimal.min(new Decimal(1.15).pow(game.indigoSigilUpgradesBought[1].pow(0.5)),30), 2)
  document.getElementById("indigoSigilUpgrade3Cost").innerHTML = format(game.indigoSigilUpgrade3Cost, 0)
  document.getElementById("indigoSigilUpgrade3Effect").innerHTML = format(new Decimal(2).pow(game.indigoSigilUpgradesBought[2].pow(0.6)), 2)

  game.violetSigils = new Decimal(0)
  game.violetSigilPower = new Decimal(0)
  game.violetSigilPowerPerSecond = new Decimal(0)
  game.violetSigilUpgrade1Cost = new Decimal(1)
  game.violetSigilUpgrade2Cost = new Decimal(5)
  game.violetSigilUpgradesBought = [new Decimal(0), new Decimal(0), new Decimal(1), new Decimal(1)]
  document.getElementById("violetSigilUpgrade1Cost").innerHTML = format(game.violetSigilUpgrade1Cost, 0)
  document.getElementById("violetSigilUpgrade1Effect").innerHTML = format(game.violetSigilUpgradesBought[0].add(1), 2)
  document.getElementById("violetSigilUpgrade2Cost").innerHTML = format(game.violetSigilUpgrade2Cost, 0)
  document.getElementById("violetSigilUpgrade2Effect").innerHTML = format(new Decimal(1.3).pow(game.violetSigilUpgradesBought[1].pow(0.5)), 2)

  game.pinkSigils = new Decimal(0)
  game.pinkSigilPower = new Decimal(0)
  game.pinkSigilPowerPerSecond = new Decimal(0)
  game.pinkSigilUpgrade1Cost = new Decimal(1)
  game.pinkSigilUpgrade3Cost = new Decimal(150000)
  game.pinkSigilUpgradesBought = [new Decimal(0), new Decimal(1), new Decimal(0), new Decimal(1)]
  document.getElementById("pinkSigilUpgrade1Cost").innerHTML = format(game.pinkSigilUpgrade1Cost, 0)
  document.getElementById("pinkSigilUpgrade1Effect").innerHTML = format(game.pinkSigilUpgradesBought[0].add(1), 2)
  document.getElementById("pinkSigilUpgrade3Cost").innerHTML = format(game.pinkSigilUpgrade3Cost, 0)
  document.getElementById("pinkSigilUpgrade3Effect").innerHTML = format(new Decimal(1.5).pow(game.pinkSigilUpgradesBought[2].pow(0.5)), 2)

  game.redSigils = new Decimal(0)
  game.redSigilPower = new Decimal(0)
  game.redSigilPowerPerSecond = new Decimal(0)
  game.redSigilUpgrade1Cost = new Decimal(1)
  game.redSigilUpgrade2Cost = new Decimal(1500)
  game.redSigilUpgrade3Cost = new Decimal(50000)
  game.redSigilUpgradesBought = [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(1)]
  document.getElementById("redSigilUpgrade1Cost").innerHTML = format(game.redSigilUpgrade1Cost, 0)
  document.getElementById("redSigilUpgrade1Effect").innerHTML = format(game.redSigilUpgradesBought[0].add(1), 2)
  document.getElementById("redSigilUpgrade2Cost").innerHTML = format(game.redSigilUpgrade2Cost, 0)
  document.getElementById("redSigilUpgrade2Effect").innerHTML = format(new Decimal(50).pow(game.redSigilUpgradesBought[1].pow(0.8)), 2)
  document.getElementById("redSigilUpgrade3Cost").innerHTML = format(game.redSigilUpgrade3Cost, 0)
  document.getElementById("redSigilUpgrade3Effect").innerHTML = format(new Decimal(6).pow(game.redSigilUpgradesBought[2].pow(0.7)), 2)

  game.orangeSigils = new Decimal(0)
  game.orangeSigilPower = new Decimal(0)
  game.orangeSigilPowerPerSecond = new Decimal(0)
  game.orangeSigilUpgrade1Cost = new Decimal(1)
  game.orangeSigilUpgrade2Cost = new Decimal(2500)
  game.orangeSigilUpgrade3Cost = new Decimal(250000)
  game.orangeSigilUpgradesBought = [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(1)]
  document.getElementById("orangeSigilUpgrade1Cost").innerHTML = format(game.orangeSigilUpgrade1Cost, 0)
  document.getElementById("orangeSigilUpgrade1Effect").innerHTML = format(game.orangeSigilUpgradesBought[0].add(1), 2)
  document.getElementById("orangeSigilUpgrade2Cost").innerHTML = format(game.orangeSigilUpgrade2Cost, 0)
  document.getElementById("orangeSigilUpgrade2Effect").innerHTML = format(game.orangeSigilUpgradesBought[1].pow(0.6).mul(2).add(1), 2)
  document.getElementById("orangeSigilUpgrade3Cost").innerHTML = format(game.orangeSigilUpgrade3Cost, 0)
  document.getElementById("orangeSigilUpgrade3Effect").innerHTML = format(new Decimal(6).pow(game.orangeSigilUpgradesBought[2].pow(0.7)), 2)

  game.yellowSigils = new Decimal(0)
  game.yellowSigilPower = new Decimal(0)
  game.yellowSigilPowerPerSecond = new Decimal(0)
  game.yellowSigilUpgrade1Cost = new Decimal(1)
  game.yellowSigilUpgrade2Cost = new Decimal(4000)
  game.yellowSigilUpgrade3Cost = new Decimal(2000000)
  game.yellowSigilUpgradesBought = [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(1)]
  document.getElementById("yellowSigilUpgrade1Cost").innerHTML = format(game.yellowSigilUpgrade1Cost, 0)
  document.getElementById("yellowSigilUpgrade1Effect").innerHTML = format(game.yellowSigilUpgradesBought[0].add(1), 2)
  document.getElementById("yellowSigilUpgrade2Cost").innerHTML = format(game.yellowSigilUpgrade2Cost, 0)
  document.getElementById("yellowSigilUpgrade2Effect").innerHTML = format(game.yellowSigilUpgradesBought[1].pow(0.5).mul(2).add(1), 2)
  document.getElementById("yellowSigilUpgrade3Cost").innerHTML = format(game.yellowSigilUpgrade3Cost, 0)
  document.getElementById("yellowSigilUpgrade3Effect").innerHTML = format(new Decimal(15).pow(game.yellowSigilUpgradesBought[2].pow(0.5)), 2)

  game.knowledge = new Decimal(0)
  game.highestKnowledge = new Decimal(0)
  game.knowledgeUpgradesBought[0] = new Decimal(0)
  game.knowledgeUpgradesBought[1] = new Decimal(0)
  game.knowledgeUpgradeCosts = [new Decimal(20), new Decimal(50)]
  document.getElementById("knowledgeUpgrade1Cost").innerHTML = format(game.knowledgeUpgradeCosts[0], 0)
  document.getElementById("knowledgeUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.knowledgeUpgradesBought[0].pow(0.5)), 2)
  document.getElementById("knowledgeUpgrade2Cost").innerHTML = format(game.knowledgeUpgradeCosts[1], 0)
  document.getElementById("knowledgeUpgrade2Effect").innerHTML = format(new Decimal(5).pow(game.knowledgeUpgradesBought[1].pow(0.5)), 2)

  game.tomes = new Decimal(0)
  game.totalTomes = new Decimal(0)
  if (game.unlockedAchievements[19] < 5) {
    for (i=0;i<14;i++) {
      if (i!=5 && i!=8 && i!=11 && i!=12 && i!=13) {
        game.tomeUpgradesBought[i] = false
        document.getElementsByClassName("tomeUpgrade")[i].disabled = false
      }
    }
  }

  
  game.plutonium = new Decimal(0)
  game.bestPlutoniumToGet = new Decimal(0)
  if (game.unlockedAchievements[20] < 2) {
    for (i=0;i<5;i++) {
      game.plutoniumUpgradesBought[i] = 0
      document.getElementsByClassName("plutoniumUpgradesBought")[i].innerHTML = "0"
      document.getElementsByClassName("plutoniumUpgrade")[i].disabled = false
    }
  }

  game.blueFire = new Decimal(0)
  game.blueFirePerSecond = new Decimal(0)
  game.blueFireUpgradeCosts = [new Decimal(500), new Decimal(1000), new Decimal(50000), new Decimal(5e7), new Decimal(1.5e8), new Decimal(0)]
  game.blueFireUpgradesBought = [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)]

  game.blood = new Decimal(0)

  resetKnowledgeTrades()
}

function buyHolyTetrahedronUpgrade(x) {
  if (!game.holyTetrahedronUpgradesBought[x-1] && game.holyTetrahedrons.gte(holyTetrahedronUpgradeCosts[x-1])) {
    game.holyTetrahedrons = game.holyTetrahedrons.sub(holyTetrahedronUpgradeCosts[x-1])
    game.holyTetrahedronUpgradesBought[x-1] = true
    document.getElementsByClassName("holyTetrahedronUpgrade")[x-1].disabled = true
    document.getElementsByClassName("holyTetrahedronUpgrade")[x-1].style.backgroundColor = "#9b9"
    if (x==11) {
      document.getElementsByClassName("box")[31].style.display = "block"
      document.getElementsByClassName("box")[32].style.display = "block"
      document.getElementsByClassName("resourceRow")[21].style.display = "block"
      holyOctahedronUnlockCheck()
      addUnlock() //sets unlock to 25
    }
    if (x==12) {
      document.getElementsByClassName("box")[33].style.display = "block"
      document.getElementsByClassName("resourceRow")[22].style.display = "block"
      addUnlock() //sets unlock to 26
    }
  }
  holyTetrahedronUnlockCheck()
}

function holyTetrahedronUnlockCheck() {
  if (game.holyTetrahedronUpgradesBought[0]) {
    game.holyTetrahedronUpgradesUnlocked[1] = true
    game.holyTetrahedronUpgradesUnlocked[2] = true
    game.holyTetrahedronUpgradesUnlocked[3] = true
  }
  if (game.holyTetrahedronUpgradesBought[1]) game.holyTetrahedronUpgradesUnlocked[4] = true
  if (game.holyTetrahedronUpgradesBought[2]) game.holyTetrahedronUpgradesUnlocked[5] = true
  if (game.holyTetrahedronUpgradesBought[3]) game.holyTetrahedronUpgradesUnlocked[6] = true
  if (game.holyTetrahedronUpgradesBought[4] && game.holyTetrahedronUpgradesBought[5]) game.holyTetrahedronUpgradesUnlocked[7] = true
  if (game.holyTetrahedronUpgradesBought[5] && game.holyTetrahedronUpgradesBought[6]) game.holyTetrahedronUpgradesUnlocked[8] = true
  if (game.holyTetrahedronUpgradesBought[7] && game.holyTetrahedronUpgradesBought[8]) game.holyTetrahedronUpgradesUnlocked[9] = true
  if (game.holyTetrahedronUpgradesBought[9]) game.holyTetrahedronUpgradesUnlocked[10] = true
  if (game.holyTetrahedronUpgradesBought[10]) game.holyTetrahedronUpgradesUnlocked[11] = true
  if (game.holyTetrahedronUpgradesBought[11]) game.holyTetrahedronUpgradesUnlocked[12] = true
  for (i=0;i<13;i++) {
      if (game.holyTetrahedronUpgradesBought[i]) {
        document.getElementsByClassName("holyTetrahedronUpgrade")[i].disabled = true
        document.getElementsByClassName("holyTetrahedronUpgrade")[i].style.backgroundColor = "#9b9"
      }
      else if (game.holyTetrahedronUpgradesUnlocked[i]) {
        document.getElementsByClassName("holyTetrahedronUpgrade")[i].disabled = false
        document.getElementsByClassName("holyTetrahedronUpgrade")[i].style.backgroundColor = ""
      }
      else {
        document.getElementsByClassName("holyTetrahedronUpgrade")[i].disabled = true
        document.getElementsByClassName("holyTetrahedronUpgrade")[i].style.backgroundColor = ""
      }
    }
}

function buyHolyOctahedronUpgrade(x) {
  if (!game.holyOctahedronUpgradesBought[x-1] && game.holyOctahedrons.gte(holyOctahedronUpgradeCosts[x-1])) {
    game.holyOctahedrons = game.holyOctahedrons.sub(holyOctahedronUpgradeCosts[x-1])
    game.holyOctahedronUpgradesBought[x-1] = true
    document.getElementsByClassName("holyOctahedronUpgrade")[x-1].disabled = true
    document.getElementsByClassName("holyOctahedronUpgrade")[x-1].style.backgroundColor = "#9b9"
  }
  holyOctahedronUnlockCheck()
}

function holyOctahedronUnlockCheck() {
  if (game.holyOctahedronUpgradesBought[0]) {
    game.holyOctahedronUpgradesUnlocked[1] = true
    game.holyOctahedronUpgradesUnlocked[2] = true
  }
  if (game.holyOctahedronUpgradesBought[1]) game.holyOctahedronUpgradesUnlocked[3] = true
  if (game.holyOctahedronUpgradesBought[1] && game.holyOctahedronUpgradesBought[2]) game.holyOctahedronUpgradesUnlocked[4] = true
  if (game.holyOctahedronUpgradesBought[2]) game.holyOctahedronUpgradesUnlocked[5] = true
  if (game.holyOctahedronUpgradesBought[3] && game.holyOctahedronUpgradesBought[4] && game.holyOctahedronUpgradesBought[5]) game.holyOctahedronUpgradesUnlocked[6] = true
  if (game.holyOctahedronUpgradesBought[6]) game.holyOctahedronUpgradesUnlocked[7] = true
  if (game.holyOctahedronUpgradesBought[7]) game.holyOctahedronUpgradesUnlocked[8] = true
  for (i=0;i<9;i++) {
      if (game.holyOctahedronUpgradesBought[i]) {
        document.getElementsByClassName("holyOctahedronUpgrade")[i].disabled = true
        document.getElementsByClassName("holyOctahedronUpgrade")[i].style.backgroundColor = "#9b9"
      }
      else if (game.holyOctahedronUpgradesUnlocked[i]) {
        document.getElementsByClassName("holyOctahedronUpgrade")[i].disabled = false
        document.getElementsByClassName("holyOctahedronUpgrade")[i].style.backgroundColor = ""
      }
      else {
        document.getElementsByClassName("holyOctahedronUpgrade")[i].disabled = true
        document.getElementsByClassName("holyOctahedronUpgrade")[i].style.backgroundColor = ""
      }
    }
}

function buyHolyDodecahedronUpgrade(x) {
  if (!game.holyDodecahedronUpgradesBought[x-1] && game.holyDodecahedrons.gte(holyDodecahedronUpgradeCosts[x-1])) {
    game.holyDodecahedrons = game.holyDodecahedrons.sub(holyDodecahedronUpgradeCosts[x-1])
    game.holyDodecahedronUpgradesBought[x-1] = true
    document.getElementsByClassName("holyDodecahedronUpgrade")[x-1].disabled = true
    document.getElementsByClassName("holyDodecahedronUpgrade")[x-1].style.backgroundColor = "#9b9"
  }
  holyDodecahedronUnlockCheck()
}

function holyDodecahedronUnlockCheck() {
  if (game.holyDodecahedronUpgradesBought[0]) game.holyDodecahedronUpgradesUnlocked[1] = true
  if (game.holyDodecahedronUpgradesBought[1]) game.holyDodecahedronUpgradesUnlocked[2] = true
  if (game.holyDodecahedronUpgradesBought[2]) game.holyDodecahedronUpgradesUnlocked[3] = true
  if (game.holyDodecahedronUpgradesBought[3]) game.holyDodecahedronUpgradesUnlocked[4] = true
  if (game.holyDodecahedronUpgradesBought[4]) game.holyDodecahedronUpgradesUnlocked[5] = true
  for (i=0;i<6;i++) {
      if (game.holyDodecahedronUpgradesBought[i]) {
        document.getElementsByClassName("holyDodecahedronUpgrade")[i].disabled = true
        document.getElementsByClassName("holyDodecahedronUpgrade")[i].style.backgroundColor = "#9b9"
      }
      else if (game.holyDodecahedronUpgradesUnlocked[i]) {
        document.getElementsByClassName("holyDodecahedronUpgrade")[i].disabled = false
        document.getElementsByClassName("holyDodecahedronUpgrade")[i].style.backgroundColor = ""
      }
      else {
        document.getElementsByClassName("holyDodecahedronUpgrade")[i].disabled = true
        document.getElementsByClassName("holyDodecahedronUpgrade")[i].style.backgroundColor = ""
      }
    }
}