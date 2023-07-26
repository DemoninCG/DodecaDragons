function unlockBlood() {
  if (game.gold.gte("e5e14")) {
    game.gold = game.gold.sub("e5e14")
    document.getElementById("unlockBloodButton").style.display = "none"
    document.getElementById("moreDarkMagicUpgradesButton").style.display = "block"
    document.getElementsByClassName("box")[23].style.display = "block"
    document.getElementsByClassName("resourceRow")[15].style.display = "block"
    document.getElementById("currentHellLayer").innerHTML = hellLayerNames[game.currentHellLayer - 1]
    document.getElementById("currentHellEffects").innerHTML = hellLayerEffects[game.currentHellLayer - 1]
    addUnlock() //sets unlock to 18
    for (i=10;i<14;i++) document.getElementsByClassName("tomeUpgrade")[i].style.display = "block"
  }
}

function updateHellLayer() {
  game.currentHellLayer = document.getElementById("hellLayer").selectedIndex + 1
  document.getElementById("currentHellLayer").innerHTML = hellLayerNames[game.currentHellLayer - 1]
  document.getElementById("currentHellEffects").innerHTML = hellLayerEffects[game.currentHellLayer - 1]
}

function enterExitHell() {
  if (game.unlocks >= 18 && game.currentHellLayer <= 5) {
    if (!game.inHell) {
      game.inHell = true
      sigilReset(666)
      document.getElementById("hellLayer").disabled = true
      document.getElementById("enterHellButton").innerHTML = "Exit hell"
    }
    else {
      game.inHell = false
      sigilReset(666)
      document.getElementById("hellLayer").disabled = false
      document.getElementById("enterHellButton").innerHTML = "Enter hell"
    }
  }
}