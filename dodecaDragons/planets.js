function unlockPlanets() {
  if (game.gold.gte("e1e400")) {
    document.getElementById("unlockPlanetsButton").style.display = "none"
		document.getElementById("omniverseWarning").style.display = "block"
    document.getElementsByClassName("box")[37].style.display = "block"
		document.getElementsByClassName("resourceRow")[24].style.display = "block"
    addUnlock() //sets unlock to 29
  }
}

function formPlanet(x) {
	if (x==1 && game.holyTetrahedrons.gte(game.planetCosts[0])) {
		game.holyTetrahedrons = game.holyTetrahedrons.sub(game.planetCosts[0])
		game.planets = game.planets.add(1)
		game.planetsFormed[0] = game.planetsFormed[0].add(1)
		game.planetCosts[0] = new Decimal(1e15).pow(game.planetsFormed[0].add(1)).mul(1e15)
	}
	else if (x==2 && game.holyOctahedrons.gte(game.planetCosts[1]) && game.planetCosts[1].lt("1e499")) {
		game.holyOctahedrons = game.holyOctahedrons.sub(game.planetCosts[1])
		game.planets = game.planets.add(1)
		game.planetsFormed[1] = game.planetsFormed[1].add(1)
		game.planetCosts[1] = new Decimal(1e10).pow(game.planetsFormed[1].add(1)).mul(100000)
		if (game.planetCosts[1].gt("1e499")) document.getElementsByClassName("formPlanetButton")[1].style.backgroundColor = "#aaa"
	}
	else if (x==3 && game.holyDodecahedrons.gte(game.planetCosts[2]) && game.planetCosts[2].lt(1e199)) {
		game.holyDodecahedrons = game.holyDodecahedrons.sub(game.planetCosts[2])
		game.planets = game.planets.add(1)
		game.planetsFormed[2] = game.planetsFormed[2].add(1)
		game.planetCosts[2] = new Decimal(100000).pow(game.planetsFormed[2].add(1))
		if (game.planetCosts[2].gt(1e199)) document.getElementsByClassName("formPlanetButton")[2].style.backgroundColor = "#aaa"
	}
}

//Only for tetrahedrons
function planetBuyMax() {
	let amtToBuy = Decimal.affordGeometricSeries(game.holyTetrahedrons, 1e30, 1e15, game.planetsFormed[0]); //calculate how many we can afford
  let costToBuy = Decimal.sumGeometricSeries(amtToBuy, 1e30, 1e15, game.planetsFormed[0]); //determine total cost
  if (costToBuy.lt("e1e9")) game.holyTetrahedrons = game.holyTetrahedrons.sub(costToBuy);
	game.planets = game.planets.add(amtToBuy)
	game.planetsFormed[0] = game.planetsFormed[0].add(amtToBuy)
	game.planetCosts[0] = new Decimal(1e15).pow(game.planetsFormed[0].add(1)).mul(1e15)
}

function gainSupercluster() {
	if (game.planets.gte(game.superclusterCost)) {
		game.superclusters = game.superclusters.add(1)
		game.superclusterCost = new Decimal(1.5).pow(game.superclusters).mul(25).floor()
	}
}