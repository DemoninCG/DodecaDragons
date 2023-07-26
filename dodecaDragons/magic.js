//Unlocks magic
function unlockMagic() {
  if (game.gold.gte(1e15)) {
    game.gold = game.gold.sub(1e15)
    document.getElementById("unlockMagicButton").style.display = "none"
    document.getElementById("confirmationToggleBox").style.display = "block"
    document.getElementsByClassName("box")[6].style.display = "block"
    document.getElementsByClassName("box")[7].style.display = "block"
    document.getElementsByClassName("resourceRow")[4].style.display = "block"
    addUnlock() //sets unlock to 4
  }
}

//Confirmation popups for magic resets
function magicCheck() {
  if (game.magicToGet.eq(0)) {
    if (confirm("Woah, hold on! You won't gain any magic! Are you sure you want to perform a magic reset?")) magicReset()
  }
  else if (game.confirmations[0]) {
    if (confirm("Are you sure you want to perform a magic reset?")) magicReset()
  }
  else {magicReset()}
}

function magicReset(triggerLayer = "magic") {
  //Sets most pre-magic veriables back to their original states
  game.gold = new Decimal(0)
  if (game.unlockedAchievements[0] > 8) {game.miners = new Decimal(1)}
  else {game.miners = new Decimal(0)}
  game.minerCost = new Decimal(20)
  document.getElementById("minerCost").innerHTML = "20"
  
  game.fire = new Decimal(0)
  game.fireUpgrade1Bought = new Decimal(0)
  game.fireUpgrade1Cost = new Decimal(50)
  game.fireUpgrade2Bought = new Decimal(0)
  game.fireUpgrade2Cost = new Decimal(100)
  game.fireUpgrade3Bought = new Decimal(0)
  game.fireUpgrade3Cost = new Decimal(100)
  game.fireUpgrade4Bought = new Decimal(0)
  game.fireUpgrade4Cost = new Decimal(500)
  game.fireUpgrade5Bought = new Decimal(0)
  game.fireUpgrade5Cost = new Decimal(500)
  game.fireUpgrade6Bought = new Decimal(0)
  game.fireUpgrade6Cost = new Decimal(2e7)
  document.getElementById("fireUpgrade1Cost").innerHTML = format(game.fireUpgrade1Cost, 0)
  document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.fireUpgrade1Bought.pow(0.6)), 2)
  document.getElementById("fireUpgrade2Cost").innerHTML = format(game.fireUpgrade2Cost, 0)
  document.getElementById("fireUpgrade3Cost").innerHTML = format(game.fireUpgrade3Cost, 0)
  document.getElementById("fireUpgrade4Cost").innerHTML = format(game.fireUpgrade4Cost, 0)
  document.getElementById("fireUpgrade5Cost").innerHTML = format(game.fireUpgrade5Cost, 0)
  document.getElementById("fireUpgrade6Cost").innerHTML = format(game.fireUpgrade6Cost, 0)
  document.getElementById("fireUpgrade6Effect").innerHTML = format(new Decimal(3).pow(game.fireUpgrade6Bought.pow(0.6)), 2)

  game.platinum = new Decimal(0)
  game.bestPlatinumToGet = new Decimal(0)
  if ( (triggerLayer === "magic" && game.unlockedAchievements[3] < 5) || (triggerLayer === "sigil" && game.unlockedAchievements[7] < 3) || (triggerLayer == "holyPolyhedron" && game.unlockedAchievements[20] < 2)) {
    for (i=0;i<9;i++) {
      if (i!=2 && i!=6) {
        game.platinumUpgradesBought[i] = 0
        document.getElementsByClassName("platinumUpgradesBought")[i].innerHTML = "0"
        document.getElementsByClassName("platinumUpgrade")[i].disabled = false
      }
    }
    document.getElementsByClassName("platinumUpgradesBought")[2].innerHTML = "1"
  }

  game.magic = game.magic.add(game.magicToGet)
  magicHardcap = new Decimal("e5000000")
  if (game.tomeUpgradesBought[8] == true) magicHardcap = magicHardcap.pow(game.blueFireUpgradesBought[3].pow(0.7).mul(5).add(1))
  if (game.magic.gt(magicHardcap)) {
    game.magic = magicHardcap
    document.getElementById("magicCap").innerHTML = " (hardcapped)"
  }
  else {document.getElementById("magicCap").innerHTML = ""}
}

//Magic upgrades
function buyMagicUpgrade(x) {
  //Checks that the magic upgrade is not bought and that the player's magic is greater/equal to the corresponding upgrade cost
  if (game.magicUpgradesBought[x-1] != true && game.magic.gte(magicUpgradeCosts[x-1])) {
    game.magic = game.magic.sub(magicUpgradeCosts[x-1])
    game.magicUpgradesBought[x-1] = true
    document.getElementsByClassName("magicUpgrade")[x-1].disabled = true
    if (x==8) document.getElementsByClassName("platinumUpgrade")[6].style.display = "block"
    if (x==11 && game.platinumUpgradesBought[6] == 10) document.getElementsByClassName("platinumUpgrade")[6].disabled = false 
    if (x==12) {
      document.getElementsByClassName("box")[8].style.display = "block"
      document.getElementsByClassName("resourceRow")[5].style.display = "block"
      document.getElementById("moreMagicUpgradesButton").style.display = "block"
      addUnlock() //sets unlock to 5
    }
    if (x==14) document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(3.5).pow(game.fireUpgrade1Bought.pow(0.7)), 2)
    if (x==19) document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(6), 2)
    if (x==20) {
      document.getElementsByClassName("magicUpgrade")[19].disabled = true
      document.getElementsByClassName("box")[9].style.display = "block"
      document.getElementsByClassName("resourceRow")[6].style.display = "inline-block"
      document.getElementById("morePUupgradesButton").style.display = "block"
      addUnlock() //sets unlock to 7
    }
  }
}

function magicUpgradeBuyMax() {for (i=1;i<21;i++) buyMagicUpgrade(i)}

//Unlocks more magic upgrades lol
function unlockMoreMagicUpgrades() {
  if (game.magifolds.gte(150000) && game.magic.gte(2e8)) {
    game.magic = game.magic.sub(2e8)
    document.getElementById("moreMagicUpgradesButton").style.display = "none"
    document.getElementsByClassName("box")[7].style.height = "560px"
    document.getElementsByClassName("box")[7].style.top = (window.innerHeight / 2 + renderVars.posY + renderVars.diffY - 133) + "px"
    for (i=12;i<20;i++) {document.getElementsByClassName("magicUpgrade")[i].style.display = "block"}
    addUnlock() //sets unlock to 6
  }
}

function unlockDarkMagicUpgrades() {
  if (game.gold.gte("e1000")) {
    game.gold = game.gold.sub("e1000")
    document.getElementById("unlockDarkMagicUpgradesButton").style.display = "none"
    document.getElementsByClassName("box")[10].style.display = "block"
    addUnlock() //sets unlock to 9
  }
}

//Dark magic upgrades
function buyDarkMagicUpgrade(x) {
  //Checks that the magic upgrade is not bought and that the player's magic is greater/equal to the corresponding upgrade cost
  if (game.darkMagicUpgradesBought[x-1] != true && game.magic.gte(darkMagicUpgradeCosts[x-1])) {
    game.magic = game.magic.sub(darkMagicUpgradeCosts[x-1])
    game.darkMagicUpgradesBought[x-1] = true
    document.getElementsByClassName("darkMagicUpgrade")[x-1].disabled = true
    if (x==4) document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(8), 2)
    if (x==8) {
      document.getElementById("horrorTabButton").style.display = "block"
      document.getElementsByClassName("box")[11].style.display = "block"
      document.getElementsByClassName("resourceRow")[7].style.display = "block"
      document.getElementsByClassName("confirmationToggle")[1].style.display = "inline-block"
      document.getElementById("cyanSigilUpgrade1Cost").innerHTML = format(game.cyanSigilUpgrade1Cost, 0)
      document.getElementById("cyanSigilUpgrade1Effect").innerHTML = format(game.cyanSigilUpgradesBought[0].add(1), 2)
      document.getElementById("cyanSigilUpgrade2Cost").innerHTML = format(game.cyanSigilUpgrade2Cost, 0)
      document.getElementById("cyanSigilUpgrade2Effect").innerHTML = format(game.cyanSigilUpgradesBought[1].add(1).pow(1.5), 2)
      document.getElementById("cyanSigilUpgrade3Cost").innerHTML = format(game.cyanSigilUpgrade3Cost, 0)
      document.getElementById("cyanSigilUpgrade3Effect").innerHTML = format(new Decimal(1.2).pow(game.cyanSigilUpgradesBought[2].pow(0.4)), 2)
      if (game.cyanSigilUpgradesBought[3] == 1) {document.getElementsByClassName("cyanSigilUpgrade")[3].disabled = true}
      else {document.getElementsByClassName("cyanSigilUpgrade")[3].disabled = false}
      addUnlock() //sets unlock to 10
    }
  } 
}

function darkMagicUpgradeBuyMax() {
  for (i=1;i<9;i++) buyDarkMagicUpgrade(i)
  if (game.pinkSigilUpgradesBought[1].eq(1)) {for (i=9;i<21;i++) buyDarkMagicUpgrade(i)}
}

function moreDarkMagicUpgrades() {
  if (game.gold.gte("e6.66e16")) {
    game.gold = game.gold.sub("e6.66e16")
    document.getElementById("moreDarkMagicUpgradesButton").style.display = "none"
    for (i=10;i<20;i++) document.getElementsByClassName("darkMagicUpgrade")[i].style.display = "inline-block"
    addUnlock() //sets unlock to 19
  }
}

function unlockVoidMagicUpgrades() {
  if (game.gold.gte("e1e100") && game.holyFire.gte(1e8)) {
    document.getElementById("unlockVoidMagicUpgradesButton").style.display = "none"
    document.getElementsByClassName("box")[34].style.display = "block"
    document.getElementsByClassName("upgradeDragonButton")[6].style.display = "block"
    addUnlock() //sets unlock to 27
  }
}

//Void magic upgrades
function buyVoidMagicUpgrade(x) {
  //Checks that the magic upgrade is not bought and that the player's magic is greater/equal to the corresponding upgrade cost
  if (game.voidMagicUpgradesBought[x-1] != true && game.magic.gte(voidMagicUpgradeCosts[x-1])) {
    game.voidMagicUpgradesBought[x-1] = true
    document.getElementsByClassName("voidMagicUpgrade")[x-1].disabled = true
    if (x==4) {
      document.getElementsByClassName("box")[35].style.display = "block"
      document.getElementsByClassName("box")[36].style.display = "block"
      document.getElementsByClassName("resourceRow")[23].style.display = "block"
      holyDodecahedronUnlockCheck()
      addUnlock() //sets unlock to 28
    }
		else if (x==8) {
			document.getElementsByClassName("holyFireUpgrade")[5].style.display = "inline-block"
			document.getElementsByClassName("holyFireBuyMaxButton")[5].style.display = "inline-block"
			game.holyFireUpgradeCosts[5] = new Decimal(holyFireUpgradeBase[6]).pow(game.holyFireUpgradesBought[5]).mul(holyFireUpgradeInitialCosts[6]).floor()
			document.getElementById('holyFireUpgrade6Cost').innerHTML = format(game.holyFireUpgradeCosts[5], 0);
		}
		else if (x==16) {
      document.getElementsByClassName("box")[39].style.display = "block"
			document.getElementsByClassName("resourceRow")[25].style.display = "block"
			document.getElementsByClassName("upgradeDragonButton")[7].style.display = "block"
      addUnlock() //sets unlock to 31
    }
		else if (x==17) {
      document.getElementsByClassName("box")[40].style.display = "block"
			document.getElementsByClassName("resourceRow")[26].style.display = "block"
			document.getElementById("unlockEssencesButton").style.display = "block"
      addUnlock() //sets unlock to 32
    }
  } 
}

function getMagicGain() {
  let toGet = game.gold.div(1e15).pow(0.1);
  if (game.magicUpgradesBought[3]) {
    if (game.magicUpgradesBought[9]) {toGet = toGet.mul(game.magic.add(1).log2().mul(4).add(1))}
    else {toGet = toGet.mul(game.magic.add(1).log2().mul(1.5).add(1))}
  }
  if (game.magicUpgradesBought[1]) toGet = toGet.mul(1.5);
  if (game.magicUpgradesBought[6]) toGet = toGet.mul(2);
  if (game.magicUpgradesBought[17]) toGet = toGet.mul(3);
  if (game.unlocks >= 10) toGet = toGet.mul(game.cyanSigils.add(1).pow(2));
  if (game.unlocks >= 11) toGet = toGet.mul(game.blueSigils.add(1).pow(3));
  if (game.unlocks >= 12) toGet = toGet.mul(game.indigoSigils.add(1).pow(4));
  if (game.unlocks >= 13) toGet = toGet.mul(game.violetSigils.add(1).pow(5));
  if (game.unlocks >= 14) toGet = toGet.mul(game.pinkSigils.add(1).pow(6));
  if (game.darkMagicUpgradesBought[9] == true) toGet = toGet.pow(1.1);
  if (game.darkMagicUpgradesBought[1]) toGet = toGet.pow(game.uranium.add(1).log10().div(30).add(1));
  magicHardcap = new Decimal("e5000000")
  if (game.tomeUpgradesBought[8] == true) magicHardcap = magicHardcap.pow(game.blueFireUpgradesBought[3].pow(0.7).mul(5).add(1))
  if (toGet.gt(magicHardcap)) toGet = magicHardcap
  toGet = toGet.floor();
  return toGet;
}

function getNextMagicAt() {
  let nextMagic = game.magicToGet.add(1);
  if (game.magicUpgradesBought[17]) nextMagic = nextMagic.div(3);
  if (game.magicUpgradesBought[6]) nextMagic = nextMagic.div(2);
  if (game.magicUpgradesBought[1]) nextMagic = nextMagic.div(1.5);
  if (game.magicUpgradesBought[3]) {
    if (game.magicUpgradesBought[9]) {nextMagic = nextMagic.div(game.magic.add(1).log2().mul(4).add(1))}
    else {nextMagic = nextMagic.div(game.magic.add(1).log2().mul(1.5).add(1))}
  }
  nextMagic = nextMagic.pow(10).mul(1e15).add(1);
  if (game.unlocks >= 10) nextMagic = new Decimal(6969); //should be hidden by this point, so nobody should see this
  return nextMagic;
}