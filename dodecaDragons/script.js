//TO DO LIST
//Check that the code at the end of the reset function is updated
//Remove known bugs and to do list from changelog

//Stolen code to check if the user is on a mobile device
window.mobileCheck = function() {
  let check = false;
  /*
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  */
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);

  
  return check;
};
if (mobileCheck()) {
  //document.getElementById("mobileCover").style.display = "block"
  document.getElementById("navArrows").style.display = "block"
  document.getElementById("home").style.opacity = "0.7"
  document.getElementById("alerts").style.display = "none"
  window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
  };
}

//prevents user from tab indexing
document.addEventListener("keydown", (event) => {
	if (event.key == "Tab") {
			event.preventDefault();
	}
});

window.isDevVersion = window.location.href.indexOf('demonin.com') == -1
if (isDevVersion) {
  document.getElementById("inDevSpan").innerHTML = "INDEV";
    //FPS stuff
  window.times = []
  window.fps = 0
  
  function refreshLoop() {
    window.requestAnimationFrame(() => {
      const now = performance.now()
      while (times.length > 0 && times[0] <= now - 1000) times.shift()
      times.push(now)
      fps = times.length
      refreshLoop()
    });
  }
  refreshLoop()

  setInterval(function() {document.getElementById("fps").innerHTML = fps + " fps"}, 200);
}

//Formatting code taken from RedShark77's games
function format(ex, acc=2, max=9) {
  function E(x) {return new Decimal(x)}
  ex = E(ex)
  neg = ex.lt(0)?"-":""
  if (ex.mag == Infinity) return neg + 'Infinity'
  if (Number.isNaN(ex.mag)) return neg + 'NaN'
  //The bit I added, this rounds the mag if it's extremely close to an integer due to rounding errors during calculations
  if (ex.layer > 0 && ex.mag % 1 != 0 && (ex.mag % 1) > 0.9999) ex.mag = Math.round(ex.mag)
  if (ex.lt(0)) ex = ex.mul(-1)
  if (ex.eq(0)) return ex.toFixed(acc)
  let e = ex.log10().floor()
  if (ex.log10().lt(Math.min(-acc,0)) && acc > 1) {
    let e = ex.log10().ceil()
    let m = ex.div(e.eq(-1)?E(0.1):E(10).pow(e))
    let be = e.mul(-1).max(1).log10().gte(9)
    return neg+(be?'':m.toFixed(2))+'e'+format(e, 0, max)
  }
  else if (e.lt(max)) {
    let a = Math.max(Math.min(acc-e.toNumber(), acc), 0)
    return neg+(a>0?ex.toFixed(a):ex.toFixed(a).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
  }
  else {
    if (ex.gte("eeee10")) {
      let slog = ex.slog()
      return (slog.gte(1e9)?'':E(10).pow(slog.sub(slog.floor())).toFixed(4)) + "F" + format(slog.floor(), 0)
    }
    let m = ex.div(E(10).pow(e))
    let be = e.log10().gte(4)
    return neg+(be?'':m.toFixed(2))+'e'+format(e, 0, max)
  }
}


var autosaveStarted = false;
//Sets all variables to their base values
function reset() {
	game = {
    unlockedAchievements: [0,0,0,0,0,0,0,0,0,0,0],

    unlocks: 0,
    lastMajorChangeVersion: 3, //tracks what version was last played so adjustments can be made in the loading code when necessary. 
    lastUpdate: Date.now(),
    lastSave: 0,
    lastSigilReset: Date.now(),
    timePlayed: 0,
    backgroundPatternOn: true,
    confirmations: [true, true, true],
    achievementFlashActive: false,
    currentTab: 1,
    dragonName: "Unnamed dragon",

    sigilResetterActive: false,
    sigilResetterType: 0,
    sigilResetterMode: 0, //0 is sigil amount, 1 is gold, 2 is time since reset
    sigilResetterAmount: new Decimal(1),
    sigilResetterGold: new Decimal(1),
    sigilResetterTime: new Decimal(1),
    sigilResetterCycle: false, //specifies whether the resetter should cycle to next colour on each reset
    sigilResetterCycleMode: 0, //0 is all unlocked colours, 1 is R-O-Y only
    
    gold: new Decimal(0),
    goldPerSecond: new Decimal(0),
    miners: new Decimal(0),
    minerCost: new Decimal(20),
    
    fire: new Decimal(0),
    firePerSecond: new Decimal(1),
    //I still need to condense these into an array *cries*
    fireGoldMultiplier: new Decimal(1),
    fireAutoMaxAll: true,
    fireUpgrade1Bought: new Decimal(0),
    fireUpgrade1Cost: new Decimal(50),
    fireUpgrade2Bought: new Decimal(0),
    fireUpgrade2Cost: new Decimal(100),
    fireUpgrade3Bought: new Decimal(0),
    fireUpgrade3Cost: new Decimal(100),
    fireUpgrade4Bought: new Decimal(0),
    fireUpgrade4Cost: new Decimal(500),
    fireUpgrade5Bought: new Decimal(0),
    fireUpgrade5Cost: new Decimal(500),
    fireUpgrade6Bought: new Decimal(0),
    fireUpgrade6Cost: new Decimal(2e7),
    dragonStage: 1,
    
    platinumConvertCooldown: 0,
    platinumToGet: new Decimal(0),
    bestPlatinumToGet: new Decimal(0),
    platinum: new Decimal(0),
    platinumUpgradesBought: [0, 0, 0, 0, 0, 0, 0, 0, 0],

    magic: new Decimal(0),
    magicToGet: new Decimal(0),
    magicEffect: new Decimal(1),
    goldPerClick: new Decimal(1),
    minerAutoBuyMax: true,
    magicUpgradesBought: [],
    darkMagicUpgradesBought: [],
    voidMagicUpgradesBought: [],

    selectedChallenges: [false, false, false, false],
    challengesActive: false,
    noOfSelectedChallenges: 0,
    magicScoreToGet: new Decimal(0),
    magicScore1: new Decimal(0),
    magicScore2: new Decimal(0),
    magicScore3: new Decimal(0),
    magicScore4: new Decimal(0),
    magifolds: new Decimal(1),

    uraniumConvertCooldown: 0,
    uraniumToGet: new Decimal(0),
    bestUraniumToGet: new Decimal(0),
    uranium: new Decimal(0),
    uraniumUpgradesBought: [0, 0, 0, 0, 0],

    dragonTimeSpent: new Decimal(0),
    dragonTimeCooldown: 0,
    dragonFood: new Decimal(0),
    dragonFeedCost: new Decimal(100000000),
    
    dragonTimeEffect: new Decimal(1),
    dragonPets: 0,

    //Sigil stuff
    cyanSigils: new Decimal(0),
    cyanSigilsToGet: new Decimal(0),
    cyanSigilPower: new Decimal(0),
    cyanSigilPowerPerSecond: new Decimal(0),
    //cyanSigilUpgrade1Bought: new Decimal(0),
    cyanSigilUpgrade1Cost: new Decimal(1),
    //cyanSigilUpgrade2Bought: new Decimal(0),
    cyanSigilUpgrade2Cost: new Decimal(20),
    //cyanSigilUpgrade3Bought: new Decimal(0),
    cyanSigilUpgrade3Cost: new Decimal(500),
    //cyanSigilUpgrade6Bought: new Decimal(0), //Actually the 4th sigil upgrade, name must stay for backwards compatibility
    cyanSigilUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],

    blueSigils: new Decimal(0),
    blueSigilsToGet: new Decimal(0),
    blueSigilPower: new Decimal(0),
    blueSigilPowerPerSecond: new Decimal(0),
    //blueSigilUpgrade1Bought: new Decimal(0),
    blueSigilUpgrade1Cost: new Decimal(1),
    //blueSigilUpgrade2Bought: new Decimal(0),
    blueSigilUpgrade2Cost: new Decimal(20),
    //blueSigilUpgrade3Bought: new Decimal(0),
    blueSigilUpgrade3Cost: new Decimal(100),
    //blueSigilUpgrade6Bought: new Decimal(0), //Actually the 4th sigil upgrade, name must stay for backwards compatibility
    blueSigilUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],

    indigoSigils: new Decimal(0),
    indigoSigilsToGet: new Decimal(0),
    indigoSigilPower: new Decimal(0),
    indigoSigilPowerPerSecond: new Decimal(0),
    //indigoSigilUpgrade1Bought: new Decimal(0),
    indigoSigilUpgrade1Cost: new Decimal(1),
    //indigoSigilUpgrade2Bought: new Decimal(0),
    indigoSigilUpgrade2Cost: new Decimal(20),
    //indigoSigilUpgrade4Bought: new Decimal(0), //Actually the 3rd sigil upgrade, name must stay for backwards compatibility
    indigoSigilUpgrade3Cost: new Decimal(400),
    //indigoSigilUpgrade6Bought: new Decimal(0), //Actually the 4th sigil upgrade, name must stay for backwards compatibility
    indigoSigilUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],

    violetSigils: new Decimal(0),
    violetSigilsToGet: new Decimal(0),
    violetSigilPower: new Decimal(0),
    violetSigilPowerPerSecond: new Decimal(0),
    //violetSigilUpgrade1Bought: new Decimal(0),
    violetSigilUpgrade1Cost: new Decimal(1),
    //violetSigilUpgrade2Bought: new Decimal(0),
    violetSigilUpgrade2Cost: new Decimal(5),
    //violetSigilUpgrade5Bought: new Decimal(0), //Actually the 3rd sigil upgrade, name must stay for backwards compatibility
    //violetSigilUpgrade6Bought: new Decimal(0), //Actually the 4th sigil upgrade, name must stay for backwards compatibility
    violetSigilUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],

    pinkSigils: new Decimal(0),
    pinkSigilsToGet: new Decimal(0),
    pinkSigilPower: new Decimal(0),
    pinkSigilPowerPerSecond: new Decimal(0),
    pinkSigilUpgrade1Cost: new Decimal(1),
    //pinkSigilUpgrade3Bought: new Decimal(0),
    pinkSigilUpgrade3Cost: new Decimal(150000),
    pinkSigilUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],

    knowledge: new Decimal(0),
    highestKnowledge: new Decimal(0),
    knowledgeTradeLevel: new Decimal(1),
    knowledgeTradeLevelCap: new Decimal(3),
    knowledgeTrade1SigilTypes: [1, 2, 3],
    knowledgeTrade1Amounts: [new Decimal(0), new Decimal(0), new Decimal(0)],
    knowledgeTrade1Multipliers: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
    knowledgeTrade1Reward: new Decimal(0),
    knowledgeTrade2SigilTypes: [1, 2, 3],
    knowledgeTrade2Amounts: [new Decimal(0), new Decimal(0), new Decimal(0)],
    knowledgeTrade2Multipliers: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
    knowledgeTrade2Reward: new Decimal(0),
    knowledgeTrade3SigilTypes: [1, 2, 3],
    knowledgeTrade3Amounts: [new Decimal(0), new Decimal(0), new Decimal(0)],
    knowledgeTrade3Multipliers: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
    knowledgeTrade3Reward: new Decimal(0),
    knowledgeUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0)],
    knowledgeUpgradeCosts: [new Decimal(20), new Decimal(50)],
    knowledgeAutoMaxAll: true,

    tomes: new Decimal(0),
    totalTomes: new Decimal(0),
    tomeCost: new Decimal(100000),
    tomeUpgradesBought: [],

    blueFire: new Decimal(0),
    blueFirePerSecond: new Decimal(0),
    blueFireUpgradeCosts: [new Decimal(500), new Decimal(1000), new Decimal(50000), new Decimal(5e7), new Decimal(1.5e8), new Decimal(1e11)],
    blueFireUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
    blueFireAutoMaxAll: true,

    blood: new Decimal(0),
    bloodPerSecond: new Decimal(0),
    currentHellLayer: 1,
    inHell: false,

    plutoniumConvertCooldown: 0,
    plutoniumToGet: new Decimal(0),
    bestPlutoniumToGet: new Decimal(0),
    plutonium: new Decimal(0),
    plutoniumUpgradesBought: [0, 0, 0, 0, 0],

    redSigils: new Decimal(0),
    redSigilsToGet: new Decimal(0),
    redSigilPower: new Decimal(0),
    redSigilPowerPerSecond: new Decimal(0),
    redSigilUpgrade1Cost: new Decimal(1),
    redSigilUpgrade2Cost: new Decimal(1500),
    redSigilUpgrade3Cost: new Decimal(50000),
    redSigilUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],

    orangeSigils: new Decimal(0),
    orangeSigilsToGet: new Decimal(0),
    orangeSigilPower: new Decimal(0),
    orangeSigilPowerPerSecond: new Decimal(0),
    orangeSigilUpgrade1Cost: new Decimal(1),
    orangeSigilUpgrade2Cost: new Decimal(2500),
    orangeSigilUpgrade3Cost: new Decimal(250000),
    orangeSigilUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],

    yellowSigils: new Decimal(0),
    yellowSigilsToGet: new Decimal(0),
    yellowSigilPower: new Decimal(0),
    yellowSigilPowerPerSecond: new Decimal(0),
    yellowSigilUpgrade1Cost: new Decimal(1),
    yellowSigilUpgrade2Cost: new Decimal(4000),
    yellowSigilUpgrade3Cost: new Decimal(2000000),
    yellowSigilUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],

    holyTetrahedrons: new Decimal(0),
    holyTetrahedronsToGet: new Decimal(0),
    holyTetrahedronUpgradesUnlocked: [true],
    holyTetrahedronUpgradesBought: [],

    holyOctahedrons: new Decimal(0),
    holyOctahedronsToGet: new Decimal(0),
    holyOctahedronUpgradesUnlocked: [true],
    holyOctahedronUpgradesBought: [],

    holyFire: new Decimal(0),
    holyFirePerSecond: new Decimal(0),
    holyFireUpgradeCosts: [new Decimal(500), new Decimal(1000), new Decimal(10000), new Decimal(50000), new Decimal(1e7), new Decimal(1)],
    holyFireUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
		holyFireAutoMaxAll: true,

    holyDodecahedrons: new Decimal(0),
    holyDodecahedronsToGet: new Decimal(0),
    holyDodecahedronUpgradesUnlocked: [true],
    holyDodecahedronUpgradesBought: [],
		
		planets: new Decimal(0),
		planetEffect: new Decimal(1),
		planetCosts: [new Decimal(1e30), new Decimal(1e15), new Decimal(1e5)],
		planetsFormed: [new Decimal(0), new Decimal(0), new Decimal(0)],
		superclusters: new Decimal(0),
		superclusterCost: new Decimal(25),
		
		hypergodsDefeated: 0,
		
		cosmicPlague: new Decimal(0),
		cosmicPlaguePerSecond: new Decimal(0),
		spores: new Decimal(0),
		sporeCost: new Decimal("ee7500"),
		plagueUpgradeCosts: [new Decimal(25), new Decimal(100), new Decimal(100000), new Decimal(1e6), new Decimal(1e13)],
		plagueUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
		plagueAutoMaxAll: true,
		
		oganesson: new Decimal(0),
		oganessonPerSecond: new Decimal(0),
		oganessonUpgradesBought: [0, 0, 0, 0, 0, 0, 0],
		
		lightEssence: new Decimal(0),
		lightEssencePerSecond: new Decimal(0),
		lightEssenceUpgradeCosts: [new Decimal(100), new Decimal(600), new Decimal(3000)],
		lightEssenceUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0)],
		darkEssence: new Decimal(0),
		darkEssencePerSecond: new Decimal(0),
		darkEssenceUpgradeCosts: [new Decimal(100), new Decimal(1000), new Decimal(10000)],
		darkEssenceUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0)],
		deathEssence: new Decimal(0),
		deathEssencePerSecond: new Decimal(0),
		deathEssenceUpgradeCosts: [new Decimal(1000), new Decimal(10000), new Decimal(200000), new Decimal(1e7), new Decimal(1e40)],
		deathEssenceUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
		finalityEssence: new Decimal(0),
		finalityEssencePerSecond: new Decimal(0),
		finalityEssenceUpgradeCosts: [new Decimal(1000), new Decimal(4000), new Decimal(1e15), new Decimal(1e20)],
		finalityEssenceUpgradesBought: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
		
		nuclearPasta: new Decimal(0),
		nuclearPastaCost: new Decimal("ee3.5e6"),
		nuclearPastaState: 1,
		nuclearPastaStateInfo: true,
		nuclearPastaCooldown: 30,
		nuclearPastaExtended: false,
		nuclearPastaUpgradesBought: [false, false, false, false],
		
		finalityCubes: new Decimal(0),
		finalityCubeCost: new Decimal("ee7.5e9"),
		finalityCubeEffect: new Decimal(1),
		finalityBoosts: new Decimal(0),
		finalityBoostCost: new Decimal("ee2.5e10"),
		finalityBoostBoosts: new Decimal(0),
		finalityBoostBoostCost: new Decimal("ee1.5e11"),
  }

  for (i=3;i<47;i++) { //The x in i<x should always be equal to the number of tabs (final tab number plus 1)
    if (i != 18) document.getElementsByClassName("box")[i].style.display = "none"
  }
  for (i=1;i<33;i++) document.getElementsByClassName("resourceRow")[i].style.display = "none"
	for (i=1;i<9;i++) document.getElementsByClassName("upgradeDragonButton")[i].style.display = "none" //Should always be equal to the number of dragons
  for (i=12;i<20;i++) document.getElementsByClassName("magicUpgrade")[i].style.display = "none"
  for (i=8;i<20;i++) document.getElementsByClassName("darkMagicUpgrade")[i].style.display = "none"
  for (i=10;i<14;i++) document.getElementsByClassName("tomeUpgrade")[i].style.display = "none"
  for (i=0;i<6;i++) document.getElementsByClassName("fireBuyMaxButton")[i].style.display = "none"
  for (i=0;i<6;i++) document.getElementsByClassName("blueFireBuyMaxButton")[i].style.display = "none"
  for (i=0;i<6;i++) document.getElementsByClassName("holyFireBuyMaxButton")[i].style.display = "none"
  document.getElementById("sigilResetterType").length = 5
  document.getElementById("hellLayer").length = 3
  document.getElementsByClassName("fireUpgrade")[5].style.display = "none"
  document.getElementById("fireMaxAllButton").style.display = "none"
  document.getElementById("platinumMaxAllButton").style.display = "none"
  document.getElementsByClassName("platinumUpgrade")[6].style.display = "none"
  document.getElementById("magicUpgradeBuyMaxButton").style.display = "none"
  document.getElementById("uraniumMaxAllButton").style.display = "none"
  document.getElementById("fireAutoMaxAllButton").style.display = "none"
  document.getElementById("dragonPetStuff").style.display = "none"
  document.getElementById("minerAutoBuyMaxButton").style.display = "none"
  document.getElementById("darkMagicUpgradeBuyMaxButton").style.display = "none"
  document.getElementById("dragonPetButton").disabled = false
  document.getElementById("sigilResetAutomation").style.display = "none"
  document.getElementById("tomeUpgradeBuyMaxButton").style.display = "none"
  document.getElementById("plutoniumMaxAllButton").style.display = "none"
	document.getElementById("blueFireMaxAllButton").style.display = "none"
	document.getElementById("blueFireAutoMaxAllButton").style.display = "none"
  document.getElementById("maxRedSigilUpgradesButton").style.display = "none"
  document.getElementById("maxOrangeSigilUpgradesButton").style.display = "none"
	document.getElementsByClassName("holyFireUpgrade")[5].style.display = "none"
	document.getElementById("holyFireMaxAllButton").style.display = "none"
	document.getElementById("holyFireAutoMaxAllButton").style.display = "none"
	document.getElementById("planetBuyMaxButton").style.display = "none"
	document.getElementById("plagueMaxAllButton").style.display = "none"
	document.getElementById("plagueAutoMaxAllButton").style.display = "none"
  
  document.getElementById("unlockAlchemyButton").style.display = "none"
  document.getElementById("unlockMagicButton").style.display = "none"
  document.getElementById("moreMagicUpgradesButton").style.display = "none"
  document.getElementById("morePUupgradesButton").style.display = "none"
  document.getElementById("unlockDarkMagicUpgradesButton").style.display = "none"
  document.getElementById("unlockBloodButton").style.display = "none"
  document.getElementById("moreDarkMagicUpgradesButton").style.display = "none"
  document.getElementById("unlockVoidMagicUpgradesButton").style.display = "none"
	document.getElementById("unlockPlanetsButton").style.display = "none"
	document.getElementById("omniverseWarning").style.display = "none"
	document.getElementById("unlockEssencesButton").style.display = "none"
	document.getElementById("unlockDeathEssenceButton").style.display = "none"
	document.getElementById("unlockNuclearPastaButton").style.display = "none"
	document.getElementById("unlockFinalityEssenceButton").style.display = "none"
	document.getElementById("unlockFinalityCubesButton").style.display = "none"
	document.getElementById("bigFinishButton").style.display = "none"
}

reset()

//If the user confirms the hard reset, resets all variables, saves and refreshes the page
function hardReset() {
  if (confirm("Are you sure you want to reset? You will lose everything!")) {
    reset()
    save()
    location.reload()
  }
}

function save() {
  //console.log("saving")
  game.lastSave = Date.now();
  localStorage.setItem("dodecaSave", JSON.stringify(game));
  localStorage.setItem("dodecaLastSaved", game.lastSave);
}

function setAutoSave() {
  setInterval(save, 5000);
  autosaveStarted = true;
}
//setInterval(save, 5000)

function exportGame() {
  save()
  let inputField = document.getElementById("exportField");
  inputField.value = btoa(JSON.stringify(game));
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    let editable = inputField.contentEditable;
    let readOnly = inputField.readOnly;
    inputField.contentEditable = 'true';
    inputField.readOnly = 'false';
    let range = document.createRange();
    range.selectNodeContents(inputField);
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    inputField.setSelectionRange(0, 999999);
    inputField.contentEditable = editable;
    inputField.readOnly = readOnly;
  } else {
    inputField.select();
  }
  inputField.select();
  document.execCommand('copy');
  alert("Copied to clipboard!");
  /*
  if (mobileCheck()) {
    //inputField.type = 'text';
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      let editable = inputField.contentEditable;
      let readOnly = inputField.readOnly;
      inputField.contentEditable = 'true';
      inputField.readOnly = 'false';
      let range = document.createRange();
      range.selectNodeContents(inputField);
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      inputField.setSelectionRange(0, 999999);
      inputField.contentEditable = editable;
      inputField.readOnly = readOnly;
    } else {
      inputField.select();
    }
    document.execCommand('copy');
    //inputField.type = 'hidden';
    inputField.blur();
  } else {
    inputField.select();
    document.execCommand('copy');
    alert("Copied to clipboard!");
    //navigator.clipboard.writeText(btoa(JSON.stringify(game))).then(function() {
      //alert("Copied to clipboard!")
    //}, function() {
      //alert("Error copying to clipboard, try again...")
    //}); 
  }
  */
}

function importGame() {
  //loadgame = JSON.parse(atob(prompt("Input your save here:")))
  let loadgame = JSON.parse(atob(document.getElementById("exportField").value));
  if (loadgame && loadgame != null && loadgame != "") {
    reset()
    loadGame(loadgame)
    save()
  }
  else {
    alert("Invalid input.")
  }
}

function load() {
	reset()
	let loadgame = JSON.parse(localStorage.getItem("dodecaSave"))
  //loadgame.kkkgl();
	if (loadgame != null) {loadGame(loadgame)}
  else {document.getElementById("loadingScreenCover").style.display = "none"}
}

//load()

function loadGame(loadgame) {
  let shouldCheckVersion = false; //check if we need to implement a fix for version differences
  let oldVersion = loadgame.lastMajorChangeVersion; //save old version since we'll be overwriting as part of the load process, but we don't want to execute the fix until after loading
  if (oldVersion === undefined || oldVersion < game.lastMajorChangeVersion) {
    shouldCheckVersion = true;
  }
  loadgame.lastMajorChangeVersion = game.lastMajorChangeVersion; //set loadgame version to current version so save has proper version going forward

  
  //Sets each variable in 'game' to the equivalent variable in 'loadgame' (the saved file)
  let loadKeys = Object.keys(loadgame);
  for (i=0; i<loadKeys.length; i++) {
    if (loadgame[loadKeys[i]] != "undefined") {
      let thisKey = loadKeys[i];
      if (typeof loadgame[thisKey] == "string" && thisKey != "dragonName") {game[thisKey] = new Decimal(loadgame[thisKey])}
      else if (Array.isArray(loadgame[thisKey]) && game[loadKeys[i]]) { // If the value is an array and the corresponding key exists in the game object
        for (j = 0; j < loadgame[thisKey].length; j++) { // Iterate through the array elements
          //if (typeof loadgame[thisKey][j] == "string" && !isNaN(parseFloat(loadgame[thisKey][j]))) { // If the array element is a string that can be converted to a Decimal, do so
					if (typeof loadgame[thisKey][j] == "string") {
            game[loadKeys[i]][j] = new Decimal(loadgame[thisKey][j])
          }
          else { // Otherwise, copy the value directly
            game[loadKeys[i]][j] = loadgame[thisKey][j]
          }
        }
      }
      //else {game[Object.keys(game)[i]] = loadgame[loadKeys[i]]}
      else {game[loadKeys[i]] = loadgame[loadKeys[i]]}
    }
  }

  game.lastUpdate = Date.now(); // set last update to current time, will want to tweak this if offline progress is ever added!

  if (shouldCheckVersion) fixSaveVersion(oldVersion);
  
  //All of these change what's visible/available based on game progress
  document.getElementById("minerCost").innerHTML = format(game.minerCost, 0)
  if (game.miners.gte(1)) document.getElementsByClassName("resourceRow")[1].style.display = "block"
  //Make the sigil confirmation toggle "true" if it's not defined
  if (game.confirmations[1] != true && game.confirmations[1] != false) game.confirmations[1] = true
  //Disables the background pattern if the toggle is off
  if (!game.backgroundPatternOn) {
    document.getElementById("backgroundPatternButton").innerHTML = "Background Pattern: Off"
    document.body.style.backgroundImage = "none"
  }

  //Desperate check to make sure people aren't ahead at the holy fire point
  if (!game.holyTetrahedronUpgradesBought[11] && game.unlocks >= 26) game.unlocks = 25

  //achievement stuff
  for (let i=0;i<achievementNames.length;i++) {game.unlockedAchievements[i] = game.unlockedAchievements[i] || 0} //ensure unlocked achievement array doesn't break when new categories are added
  showAchievements(game.unlocks) //load appropriate achievements in to the DOM
  processAchievementRewards()
  game.achievementFlashActive = false; // make sure flash isn't still set to true through reload
  game.currentTab = 1; // reset current tab to 1 to ensure achievement flash properly triggers
  if (game.dragonName !== undefined) document.getElementById("dragonNameBox").value = game.dragonName
  if (game.fireAutoMaxAll) {document.getElementById("fireAutoMaxAllButton").innerHTML = "Auto max all: On"} //Toggle the fire auto max all button
  else {document.getElementById("fireAutoMaxAllButton").innerHTML = "Auto max all: Off"}
  if (game.blueFireAutoMaxAll) {document.getElementById("blueFireAutoMaxAllButton").innerHTML = "Auto max all: On"} //Toggle the blue fire auto max all button
  else {document.getElementById("blueFireAutoMaxAllButton").innerHTML = "Auto max all: Off"}
	if (game.holyFireAutoMaxAll) {document.getElementById("holyFireAutoMaxAllButton").innerHTML = "Auto max all: On"} //Toggle the holy fire auto max all button
  else {document.getElementById("holyFireAutoMaxAllButton").innerHTML = "Auto max all: Off"}
	if (game.plagueAutoMaxAll) {document.getElementById("plagueAutoMaxAllButton").innerHTML = "Auto max all: On"} //Toggle the holy fire auto max all button
  else {document.getElementById("plagueAutoMaxAllButton").innerHTML = "Auto max all: Off"}
  if (game.minerAutoBuyMax) {document.getElementById("minerAutoBuyMaxButton").innerHTML = "Auto max all: On"}
  else {document.getElementById("minerAutoBuyMaxButton").innerHTML = "Auto max all: Off"}
  if (game.knowledgeAutoMaxAll) {document.getElementById("knowledgeAutoMaxAllButton").innerHTML = "Auto max all: On"}
  else {document.getElementById("knowledgeAutoMaxAllButton").innerHTML = "Auto max all: Off"}
  if (game.dragonPets >= 5) {document.getElementById("dragonPetButton").innerHTML = "You have petted your dragon sufficiently."}
  else if (game.dragonPets >= 4) {document.getElementById("dragonPetRequirement").innerHTML = "pink"}
  else if (game.dragonPets >= 3) {document.getElementById("dragonPetRequirement").innerHTML = "violet"}
  else if (game.dragonPets >= 2) {document.getElementById("dragonPetRequirement").innerHTML = "indigo"}
  else if (game.dragonPets >= 1) {document.getElementById("dragonPetRequirement").innerHTML = "blue"}
  else {document.getElementById("dragonPetRequirement").innerHTML = "cyan"}
  if (game.dragonPets >= 5) document.getElementById("dragonPetButton").disabled = true
  document.getElementById("dragonPets").innerHTML = game.dragonPets
  document.getElementById("dragonPetEffect").innerHTML = format(new Decimal(5).pow(game.dragonPets ** 0.5), 2)
  if (game.pinkSigilUpgradesBought.length == 3) game.pinkSigilUpgradesBought[3] = new Decimal(0) //Adds the 4th pink sigil upgrade
  document.getElementsByClassName("knowledgeUpgrade")[2].disabled = false

  
  //for (let j=0;j<achievementResourceInternals.length;j++) { //achievementResourceInternals tells us the internal names of the resources e.g. cyanSigils
    //for (let i=0;i<game.unlockedAchievements[i];i++) {
      //let thisId = "ach" + j + "x" + i;
      //document.getElementById(thisId).classList.add("achievementUnlocked")
    //}
  //}
  
  //Dragon box stuff
  if (game.unlocks >= 1) {
    document.getElementById("unlockDragonButton").style.display = "none"
    document.getElementById("unlockAlchemyButton").style.display = "block"
    document.getElementsByClassName("box")[3].style.display = "block"
    document.getElementsByClassName("resourceRow")[2].style.display = "block"
  }
  //Fire stuff
  if (game.unlocks >= 2) {
    document.getElementById("buyFireUpgradesButton").style.display = "none"
    document.getElementsByClassName("box")[4].style.display = "block"
    document.getElementsByClassName("upgradeDragonButton")[0].style.display = "block"
    document.getElementById("fireUpgrade1Cost").innerHTML = format(game.fireUpgrade1Cost, 0)
    document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.fireUpgrade1Bought.pow(0.6)), 2)
    document.getElementById("fireUpgrade2Cost").innerHTML = format(game.fireUpgrade2Cost, 0)
    document.getElementById("fireUpgrade3Cost").innerHTML = format(game.fireUpgrade3Cost, 0)
    document.getElementById("fireUpgrade4Cost").innerHTML = format(game.fireUpgrade4Cost, 0)
    document.getElementById("fireUpgrade5Cost").innerHTML = format(game.fireUpgrade5Cost, 0)
    document.getElementById("fireUpgrade6Cost").innerHTML = format(game.fireUpgrade6Cost, 0)
    document.getElementById("fireUpgrade6Effect").innerHTML = format(new Decimal(3).pow(game.fireUpgrade6Bought.pow(0.6)), 2)
  }
  //Platinum stuff
  if (game.unlocks >= 3) {
    document.getElementById("unlockAlchemyButton").style.display = "none"
    document.getElementById("unlockMagicButton").style.display = "block"
    document.getElementsByClassName("box")[5].style.display = "block"
    document.getElementsByClassName("resourceRow")[3].style.display = "block"
    document.getElementById("platinumConvertCooldown").innerHTML = game.platinumConvertCooldown
    if (game.platinumConvertCooldown > 0) {document.getElementById("platinumConvertButton").disabled = true}
    else {document.getElementById("platinumConvertButton").disabled = false}
    //Ugh, this is what happens when you keep adding new platinum upgrades
    if (game.platinumUpgradesBought.length < 6) game.platinumUpgradesBought[5] = 0
    if (game.platinumUpgradesBought.length < 7) game.platinumUpgradesBought[6] = 0
    if (game.platinumUpgradesBought.length < 8) game.platinumUpgradesBought[7] = 0
    if (game.platinumUpgradesBought.length < 9) game.platinumUpgradesBought[8] = 0
    for (i=0;i<9;i++) document.getElementsByClassName("platinumUpgradesBought")[i].innerHTML = game.platinumUpgradesBought[i]
    //Could be shortened
    if (game.platinumUpgradesBought[0] == 20) {document.getElementsByClassName("platinumUpgrade")[0].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[0].disabled = false}
    if (game.platinumUpgradesBought[1] == 20) {document.getElementsByClassName("platinumUpgrade")[1].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[1].disabled = false}
    if (game.platinumUpgradesBought[2] == 1) {
      document.getElementsByClassName("platinumUpgrade")[2].disabled = true
      document.getElementsByClassName("fireUpgrade")[5].style.display = "inline-block"
    }
    else {document.getElementsByClassName("platinumUpgrade")[2].disabled = false}
    if (game.platinumUpgradesBought[3] == 5) {document.getElementsByClassName("platinumUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[3].disabled = false}
    if (game.platinumUpgradesBought[4] == 1) {document.getElementsByClassName("platinumUpgrade")[4].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[4].disabled = false}
    if (game.platinumUpgradesBought[5] == 4) {document.getElementsByClassName("platinumUpgrade")[5].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[5].disabled = false}
    if (!game.magicUpgradesBought[10] && game.platinumUpgradesBought[6] > 10) game.platinumUpgradesBought[6] = 10
    if ((!game.magicUpgradesBought[10] && game.platinumUpgradesBought[6] == 10) || game.platinumUpgradesBought[6] == 20) {document.getElementsByClassName("platinumUpgrade")[6].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[6].disabled = false}
    if (game.platinumUpgradesBought[7] == 5) {document.getElementsByClassName("platinumUpgrade")[7].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[7].disabled = false}
    if (game.platinumUpgradesBought[8] == 5) {document.getElementsByClassName("platinumUpgrade")[8].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[8].disabled = false}
    document.getElementById("platinumUpgrade7Effect").innerHTML = format(new Decimal(1.5).pow(game.platinumUpgradesBought[6]), 2)
  }
  //Hide confirmation toggle box if importing save before magic
  if (game.unlocks < 4) document.getElementById("confirmationToggleBox").style.display = "none"
  //Magic and magic upgrade stuff
  if (game.unlocks >= 4) {
    //magic confirmation toggle
    document.getElementById("confirmationToggleBox").style.display = "block"
    if (game.confirmations[0] == false) {document.getElementsByClassName("confirmationToggle")[0].style.border = "2px solid red"}
    else {document.getElementsByClassName("confirmationToggle")[0].style.border = "2px solid #0f0"}
    document.getElementById("unlockMagicButton").style.display = "none"
    document.getElementsByClassName("box")[6].style.display = "block"
    document.getElementsByClassName("box")[7].style.display = "block"
    document.getElementsByClassName("resourceRow")[4].style.display = "block"
    for (i=0;i<20;i++) {
      if (game.magicUpgradesBought[i] == true) {document.getElementsByClassName("magicUpgrade")[i].disabled = true}
      else {document.getElementsByClassName("magicUpgrade")[i].disabled = false}
    }
    if (game.magicUpgradesBought[7]) document.getElementsByClassName("platinumUpgrade")[6].style.display = "inline-block"
  }
  //Magic challenge stuff
  if (game.unlocks >= 5) {
    document.getElementsByClassName("box")[8].style.display = "block"
    document.getElementsByClassName("resourceRow")[5].style.display = "block"
    document.getElementById("moreMagicUpgradesButton").style.display = "block"
    document.getElementById("magicScore1").innerHTML = format(game.magicScore1, 0)
    document.getElementById("magicScore2").innerHTML = format(game.magicScore2, 0)
    document.getElementById("magicScore3").innerHTML = format(game.magicScore3, 0)
    document.getElementById("magicScore4").innerHTML = format(game.magicScore4, 0)
    document.getElementById("magicMult1").innerHTML = format(game.magicScore1.add(1), 0)
    document.getElementById("magicMult2").innerHTML = format(game.magicScore2.add(1), 0)
    document.getElementById("magicMult3").innerHTML = format(game.magicScore3.add(1), 0)
    document.getElementById("magicMult4").innerHTML = format(game.magicScore4.add(1), 0)
    document.getElementById("magifolds").innerHTML = format(game.magifolds, 0)
    if (game.violetSigilUpgradesBought[2].eq(1)) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(game.magifolds.add(10).log10().log10().add(8)), 2)}
    else if (game.darkMagicUpgradesBought[3]) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(8), 2)}
    else if (game.magicUpgradesBought[18]) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(6), 2)}
    else {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(4), 2)}
    document.getElementsByClassName("resourceText")[5].innerHTML = format(game.magifolds, 0)
    //Sets the color of the magic challenge text
    for (i=0;i<4;i++) {
      if (game.selectedChallenges[i]) {document.getElementsByClassName("magicChallenge")[i].style.color = "#0f0"}
      else {document.getElementsByClassName("magicChallenge")[i].style.color = "white"}
    }
    if (game.challengesActive) {document.getElementById("activeChallenges").innerHTML = "Challenges active: " + (game.selectedChallenges[0] ? 'A1 ' : '') + (game.selectedChallenges[1] ? 'A2 ' : '') + (game.selectedChallenges[2] ? 'B1 ' : '') + (game.selectedChallenges[3] ? 'B2' : '') + " (" + game.noOfSelectedChallenges + ")"}
    else {document.getElementById("activeChallenges").innerHTML = "You are not in any challenges!"}
  }
  //More magic upgrade stuff
  if (game.unlocks < 6) document.getElementsByClassName("box")[7].style.height = "350px"
  if (game.unlocks >= 6) {
    document.getElementById("moreMagicUpgradesButton").style.display = "none"
    document.getElementsByClassName("box")[7].style.height = "560px"
    for (i=12;i<20;i++) {document.getElementsByClassName("magicUpgrade")[i].style.display = "block"}
  }
  //Uranium stuff
  if (game.unlocks >= 7) {
    document.getElementsByClassName("box")[9].style.display = "block"
    document.getElementsByClassName("resourceRow")[6].style.display = "block"
    document.getElementById("morePUupgradesButton").style.display = "block"
    document.getElementById("uraniumConvertCooldown").innerHTML = game.uraniumConvertCooldown
    //Ugh, this is what happens when you keep adding new uranium upgrades
    while (game.uraniumUpgradesBought.length < 5) game.uraniumUpgradesBought.push(0)
    if (game.uraniumConvertCooldown > 0) {document.getElementById("uraniumConvertButton").disabled = true}
    else {document.getElementById("uraniumConvertButton").disabled = false}
    for (i=0;i<5;i++) document.getElementsByClassName("uraniumUpgradesBought")[i].innerHTML = game.uraniumUpgradesBought[i]
    //Could be shortened
    if (game.uraniumUpgradesBought[0] == 100) {document.getElementsByClassName("uraniumUpgrade")[0].disabled = true}
    else {document.getElementsByClassName("uraniumUpgrade")[0].disabled = false}
    if (game.uraniumUpgradesBought[1] == 20) {document.getElementsByClassName("uraniumUpgrade")[1].disabled = true}
    else {document.getElementsByClassName("uraniumUpgrade")[1].disabled = false}
    if (game.uraniumUpgradesBought[2] == 5) {document.getElementsByClassName("uraniumUpgrade")[2].disabled = true}
    else {document.getElementsByClassName("uraniumUpgrade")[2].disabled = false}
    if (game.uraniumUpgradesBought[3] == 1) {document.getElementsByClassName("uraniumUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("uraniumUpgrade")[3].disabled = false}
    if (game.uraniumUpgradesBought[4] == 10) {document.getElementsByClassName("uraniumUpgrade")[4].disabled = true}
    else {document.getElementsByClassName("uraniumUpgrade")[4].disabled = false}
  }
  //More platinum and uranium upgrades
  if (game.unlocks >= 8) {
    document.getElementById("morePUupgradesButton").style.display = "none"
    document.getElementById("unlockDarkMagicUpgradesButton").style.display = "block"
    document.getElementsByClassName("platinumUpgrade")[7].style.display = "inline-block"
    document.getElementsByClassName("platinumUpgrade")[8].style.display = "inline-block"
    document.getElementsByClassName("uraniumUpgrade")[3].style.display = "inline-block"
    document.getElementsByClassName("uraniumUpgrade")[4].style.display = "inline-block"
  }
  //Dark magic upgrade stuff
  if (game.unlocks >= 9) {
    document.getElementById("unlockDarkMagicUpgradesButton").style.display = "none"
    document.getElementsByClassName("box")[10].style.display = "block"
    for (i=0;i<20;i++) {
      if (game.darkMagicUpgradesBought[i] == true) {document.getElementsByClassName("darkMagicUpgrade")[i].disabled = true}
      else {document.getElementsByClassName("darkMagicUpgrade")[i].disabled = false}
    }
  }
  //Cyan sigil stuff
  if (game.unlocks < 10) document.getElementById("horrorTabButton").style.display = "none"
  if (game.unlocks >= 10) {
    if (game.confirmations[1] == false) {document.getElementsByClassName("confirmationToggle")[1].style.border = "2px solid red"}
    else {document.getElementsByClassName("confirmationToggle")[1].style.border = "2px solid #0f0"}
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
  }
  //Blue sigil stuff
  if (game.unlocks >= 11) {
    document.getElementsByClassName("box")[12].style.display = "block"
    document.getElementsByClassName("resourceRow")[8].style.display = "block"
    document.getElementById("blueSigilUpgrade1Cost").innerHTML = format(game.blueSigilUpgrade1Cost, 0)
    document.getElementById("blueSigilUpgrade1Effect").innerHTML = format(game.blueSigilUpgradesBought[0].add(1), 2)
    document.getElementById("blueSigilUpgrade2Cost").innerHTML = format(game.blueSigilUpgrade2Cost, 0)
    document.getElementById("blueSigilUpgrade2Effect").innerHTML = format(new Decimal(1e15).pow(game.blueSigilUpgradesBought[1].pow(0.6)), 2)
    document.getElementById("blueSigilUpgrade3Cost").innerHTML = format(game.blueSigilUpgrade3Cost, 0)
    document.getElementById("blueSigilUpgrade3Bought").innerHTML = format(game.blueSigilUpgradesBought[2], 0)
    if (game.blueSigilUpgradesBought[2].gte(10)) {document.getElementsByClassName("blueSigilUpgrade")[2].disabled = true}
    else {document.getElementsByClassName("blueSigilUpgrade")[2].disabled = false}
    if (game.blueSigilUpgradesBought[3].eq(1)) {document.getElementsByClassName("blueSigilUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("blueSigilUpgrade")[3].disabled = false}
  }
  //Indigo sigil stuff
  if (game.unlocks >= 12) {
    document.getElementsByClassName("box")[13].style.display = "block"
    document.getElementsByClassName("resourceRow")[9].style.display = "block"
    document.getElementById("indigoSigilUpgrade1Cost").innerHTML = format(game.indigoSigilUpgrade1Cost, 0)
    document.getElementById("indigoSigilUpgrade1Effect").innerHTML = format(game.indigoSigilUpgradesBought[0].add(1), 2)
    document.getElementById("indigoSigilUpgrade2Cost").innerHTML = format(game.indigoSigilUpgrade2Cost, 0)
    document.getElementById("indigoSigilUpgrade2Effect").innerHTML = format(Decimal.min(new Decimal(1.15).pow(game.indigoSigilUpgradesBought[1].pow(0.5)),30), 2)
    document.getElementById("indigoSigilUpgrade3Cost").innerHTML = format(game.indigoSigilUpgrade3Cost, 0)
    document.getElementById("indigoSigilUpgrade3Effect").innerHTML = format(new Decimal(2).pow(game.indigoSigilUpgradesBought[2].pow(0.6)), 2)
    if (game.indigoSigilUpgradesBought[3].eq(1)) {document.getElementsByClassName("indigoSigilUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("indigoSigilUpgrade")[3].disabled = false}
  }
  //Violet sigil stuff
  if (game.unlocks >= 13) {
    document.getElementsByClassName("box")[14].style.display = "block"
    document.getElementsByClassName("resourceRow")[10].style.display = "block"
    document.getElementById("violetSigilUpgrade1Cost").innerHTML = format(game.violetSigilUpgrade1Cost, 0)
    document.getElementById("violetSigilUpgrade1Effect").innerHTML = format(game.violetSigilUpgradesBought[0].add(1), 2)
    document.getElementById("violetSigilUpgrade2Cost").innerHTML = format(game.violetSigilUpgrade2Cost, 0)
    document.getElementById("violetSigilUpgrade2Effect").innerHTML = format(new Decimal(1.3).pow(game.violetSigilUpgradesBought[1].pow(0.5)), 2)
    if (game.violetSigilUpgradesBought[2].eq(1)) {
      document.getElementsByClassName("violetSigilUpgrade")[2].disabled = true
    }
    else {document.getElementsByClassName("violetSigilUpgrade")[2].disabled = false}
    if (game.violetSigilUpgradesBought[3].eq(1)) {
      document.getElementsByClassName("violetSigilUpgrade")[3].disabled = true
    }
    else {document.getElementsByClassName("violetSigilUpgrade")[3].disabled = false}
    //if (game.violetSigilUpgrade5Bought.eq(1)) {document.getElementsByClassName("violetSigilUpgrade")[2].disabled = true}
    //else {document.getElementsByClassName("violetSigilUpgrade")[2].disabled = false}
    //if (game.violetSigilUpgrade6Bought.eq(1)) {document.getElementsByClassName("violetSigilUpgrade")[3].disabled = true}
    //else {document.getElementsByClassName("violetSigilUpgrade")[3].disabled = false}
    //This is so bad and I know how to condense it and I WON'T because I'm EVIL (and tired)
  }
  //Pink sigil stuff
  if (game.unlocks >= 14) {
    document.getElementsByClassName("box")[16].style.display = "block"
    document.getElementsByClassName("resourceRow")[11].style.display = "block"
    document.getElementById("pinkSigilUpgrade1Cost").innerHTML = format(game.pinkSigilUpgrade1Cost, 0)
    document.getElementById("pinkSigilUpgrade1Effect").innerHTML = format(game.pinkSigilUpgradesBought[0].add(1), 2)
    document.getElementById("pinkSigilUpgrade3Cost").innerHTML = format(game.pinkSigilUpgrade3Cost, 0)
    document.getElementById("pinkSigilUpgrade3Effect").innerHTML = format(new Decimal(1.5).pow(game.pinkSigilUpgradesBought[2].pow(0.5)), 2)
    if (game.pinkSigilUpgradesBought[1].gt(0)) {
      for (i=8;i<10;i++) document.getElementsByClassName("darkMagicUpgrade")[i].style.display = "inline-block"
      document.getElementsByClassName("pinkSigilUpgrade")[1].disabled = true
    }
    else {
      for (i=8;i<10;i++) document.getElementsByClassName("darkMagicUpgrade")[i].style.display = "none"
      document.getElementsByClassName("pinkSigilUpgrade")[1].disabled = false
    }
    if (game.pinkSigilUpgradesBought[3].gt(0)) {document.getElementsByClassName("pinkSigilUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("pinkSigilUpgrade")[3].disabled = false}
  }
  //Knowledge stuff
  if (game.unlocks >= 15) {
    document.getElementsByClassName("box")[19].style.display = "block"
    document.getElementsByClassName("resourceRow")[12].style.display = "block"
    //document.getElementById("knowledgeTradeLevel").innerHTML = game.knowledgeTradeLevel
    if (game.knowledgeTradeLevel.lt(1e308)) {
      document.getElementById("knowledgeLevelRange").max = game.knowledgeTradeLevelCap.toNumber()
      document.getElementById("knowledgeLevelInput").max = game.knowledgeTradeLevelCap.toNumber()
      document.getElementById("knowledgeLevelRange").value = game.knowledgeTradeLevel.toNumber()
      document.getElementById("knowledgeLevelInput").value = game.knowledgeTradeLevel.toNumber()
    }
    document.getElementById("knowledgeUpgrade1Cost").innerHTML = format(game.knowledgeUpgradeCosts[0], 0)
    document.getElementById("knowledgeUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.knowledgeUpgradesBought[0].pow(0.5)), 2)
    document.getElementById("knowledgeUpgrade2Cost").innerHTML = format(game.knowledgeUpgradeCosts[1], 0)
    knowledgeUpgrade2Effect = new Decimal(5).pow(game.knowledgeUpgradesBought[1].pow(0.5))
    if (knowledgeUpgrade2Effect.gt(1e20)) knowledgeUpgrade2Effect = knowledgeUpgrade2Effect.mul(1e60).pow(0.25)
		if (knowledgeUpgrade2Effect.gt("e2e7")) knowledgeUpgrade2Effect = new Decimal("e2e7")
    document.getElementById("knowledgeUpgrade2Effect").innerHTML = format(knowledgeUpgrade2Effect, 2)
    if (game.knowledgeUpgradesBought[2].eq(1)) document.getElementsByClassName("knowledgeUpgrade")[2].disabled = true
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
    loadKnowledgeTrade(1)
    loadKnowledgeTrade(2)
    loadKnowledgeTrade(3)
  }
  //Tome stuff
  if (game.unlocks >= 16) {
    if (game.dragonStage < 6) document.getElementsByClassName("upgradeDragonButton")[4].style.display = "block"
    document.getElementsByClassName("box")[21].style.display = "block"
    document.getElementsByClassName("resourceRow")[13].style.display = "block"
    document.getElementById("tomeCost").innerHTML = format(game.tomeCost, 0)
    for (i=0;i<14;i++) {
      if (game.tomeUpgradesBought[i] == true) {document.getElementsByClassName("tomeUpgrade")[i].disabled = true}
      else {document.getElementsByClassName("tomeUpgrade")[i].disabled = false}
    }
  }
  //Blue fire stuff
  if (game.unlocks >= 17) {
    document.getElementsByClassName("box")[22].style.display = "block"
    document.getElementsByClassName("resourceRow")[14].style.display = "block"
    for (i=1;i<7;i++) {
      if (game.blueFireUpgradeCosts[i-1].eq(0)) game.blueFireUpgradeCosts[i-1] = new Decimal(blueFireUpgradeBase[i]).pow(game.blueFireUpgradesBought[i-1]).mul(blueFireUpgradeInitialCosts[i]).floor()
      document.getElementById("blueFireUpgrade"+i+"Cost").innerHTML = format(game.blueFireUpgradeCosts[i-1], 0)
    }
    if (game.tomeUpgradesBought[8] == true) {
      document.getElementsByClassName("blueFireUpgrade")[3].style.display = "inline-block"
      document.getElementsByClassName("blueFireUpgrade")[4].style.display = "inline-block"
      document.getElementsByClassName("blueFireUpgrade")[5].style.display = "inline-block"
    }
  }
  //Blood stuff
  if (game.unlocks >= 18) {
    document.getElementsByClassName("box")[23].style.display = "block"
    document.getElementsByClassName("resourceRow")[15].style.display = "block"
    document.getElementById("moreDarkMagicUpgradesButton").style.display = "block"
    document.getElementById("currentHellLayer").innerHTML = hellLayerNames[game.currentHellLayer - 1]
    document.getElementById("currentHellEffects").innerHTML = hellLayerEffects[game.currentHellLayer - 1]
    for (i=10;i<14;i++) document.getElementsByClassName("tomeUpgrade")[i].style.display = "block"
    if (game.inHell) {
      document.getElementById("hellLayer").disabled = true
      document.getElementById("enterHellButton").innerHTML = "Exit hell"
    }
    else {
      document.getElementById("hellLayer").disabled = false
      document.getElementById("enterHellButton").innerHTML = "Enter hell"
    }
    if (game.tomeUpgradesBought[13]) {
      newHellLayer = document.createElement("option")
      newHellLayer.text = "Greed (IV)"
      document.getElementById("hellLayer").add(newHellLayer)
      newHellLayer = document.createElement("option")
      newHellLayer.text = "Wrath (V)"
      document.getElementById("hellLayer").add(newHellLayer)
    }
    document.getElementById("hellLayer").selectedIndex = game.currentHellLayer - 1
  }
  //More dark magic upgrades
  if (game.unlocks >= 19) {
    document.getElementById("moreDarkMagicUpgradesButton").style.display = "none"
    for (i=10;i<20;i++) document.getElementsByClassName("darkMagicUpgrade")[i].style.display = "inline-block"
  }
  //Plutonium stuff
  if (game.unlocks >= 20) {
    document.getElementsByClassName("box")[24].style.display = "block"
    document.getElementsByClassName("resourceRow")[16].style.display = "block"
    document.getElementById("plutoniumConvertCooldown").innerHTML = game.plutoniumConvertCooldown
    if (game.plutoniumConvertCooldown > 0) {document.getElementById("plutoniumConvertButton").disabled = true}
    else {document.getElementById("plutoniumConvertButton").disabled = false}
    for (i=0;i<5;i++) document.getElementsByClassName("plutoniumUpgradesBought")[i].innerHTML = game.plutoniumUpgradesBought[i]
    //Could be shortened
    if (game.plutoniumUpgradesBought[0] == 40) {document.getElementsByClassName("plutoniumUpgrade")[0].disabled = true}
    else {document.getElementsByClassName("plutoniumUpgrade")[0].disabled = false}
    if (game.plutoniumUpgradesBought[1] == 8) {document.getElementsByClassName("plutoniumUpgrade")[1].disabled = true}
    else {document.getElementsByClassName("plutoniumUpgrade")[1].disabled = false}
    if (game.plutoniumUpgradesBought[2] == 4) {document.getElementsByClassName("plutoniumUpgrade")[2].disabled = true}
    else {document.getElementsByClassName("plutoniumUpgrade")[2].disabled = false}
    if (game.plutoniumUpgradesBought[3] == 10) {document.getElementsByClassName("plutoniumUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("plutoniumUpgrade")[3].disabled = false}
    if (game.plutoniumUpgradesBought[4] == 20) {document.getElementsByClassName("plutoniumUpgrade")[4].disabled = true}
    else {document.getElementsByClassName("plutoniumUpgrade")[4].disabled = false}
  }
  //Red sigil stuff
  if (game.unlocks >= 21) {
    document.getElementsByClassName("box")[25].style.display = "block"
    document.getElementsByClassName("resourceRow")[17].style.display = "block"
    document.getElementById("maxRedSigilUpgradesButton").style.display = "block"
    redSigilAutoOption = document.createElement("option")
    redSigilAutoOption.text = "Red"
    document.getElementById("sigilResetterType").add(redSigilAutoOption)
    document.getElementById("redSigilUpgrade1Cost").innerHTML = format(game.redSigilUpgrade1Cost, 0)
    document.getElementById("redSigilUpgrade1Effect").innerHTML = format(game.redSigilUpgradesBought[0].add(1), 2)
    if (game.redSigilUpgrade2Cost.eq(2500))  game.redSigilUpgrade2Cost = new Decimal(1500)
    document.getElementById("redSigilUpgrade2Cost").innerHTML = format(game.redSigilUpgrade2Cost, 0)
    document.getElementById("redSigilUpgrade2Effect").innerHTML = format(new Decimal(50).pow(game.redSigilUpgradesBought[1].pow(0.8)), 2)
    document.getElementById("redSigilUpgrade3Cost").innerHTML = format(game.redSigilUpgrade3Cost, 0)
    document.getElementById("redSigilUpgrade3Effect").innerHTML = format(new Decimal(6).pow(game.redSigilUpgradesBought[2].pow(0.7)), 2)
    if (game.redSigilUpgradesBought[3].eq(1)) {document.getElementsByClassName("redSigilUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("redSigilUpgrade")[3].disabled = false}
  }
  //Orange sigil stuff
  if (game.unlocks >= 22) {
    document.getElementsByClassName("box")[26].style.display = "block"
    document.getElementsByClassName("resourceRow")[18].style.display = "block"
    document.getElementById("maxOrangeSigilUpgradesButton").style.display = "block"
    orangeSigilAutoOption = document.createElement("option")
    orangeSigilAutoOption.text = "Orange"
    document.getElementById("sigilResetterType").add(orangeSigilAutoOption)
    document.getElementById("orangeSigilUpgrade1Cost").innerHTML = format(game.orangeSigilUpgrade1Cost, 0)
    document.getElementById("orangeSigilUpgrade1Effect").innerHTML = format(game.orangeSigilUpgradesBought[0].add(1), 2)
    document.getElementById("orangeSigilUpgrade2Cost").innerHTML = format(game.orangeSigilUpgrade2Cost, 0)
    document.getElementById("orangeSigilUpgrade2Effect").innerHTML = format(game.orangeSigilUpgradesBought[1].pow(0.6).mul(2).add(1), 2)
    document.getElementById("orangeSigilUpgrade3Cost").innerHTML = format(game.orangeSigilUpgrade3Cost, 0)
    document.getElementById("orangeSigilUpgrade3Effect").innerHTML = format(new Decimal(6).pow(game.orangeSigilUpgradesBought[2].pow(0.7)), 2)
    if (game.orangeSigilUpgradesBought[3].eq(1)) {document.getElementsByClassName("orangeSigilUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("orangeSigilUpgrade")[3].disabled = false}
  }
  //Yellow sigil stuff
  if (game.unlocks >= 23) {
    document.getElementsByClassName("box")[28].style.display = "block"
    document.getElementsByClassName("resourceRow")[19].style.display = "block"
    document.getElementById("maxYellowSigilUpgradesButton").style.display = "block"
    yellowSigilAutoOption = document.createElement("option")
    yellowSigilAutoOption.text = "Yellow"
    document.getElementById("sigilResetterType").add(yellowSigilAutoOption)
    document.getElementById("yellowSigilUpgrade1Cost").innerHTML = format(game.yellowSigilUpgrade1Cost, 0)
    document.getElementById("yellowSigilUpgrade1Effect").innerHTML = format(game.yellowSigilUpgradesBought[0].add(1), 2)
    document.getElementById("yellowSigilUpgrade2Cost").innerHTML = format(game.yellowSigilUpgrade2Cost, 0)
    document.getElementById("yellowSigilUpgrade2Effect").innerHTML = format(game.yellowSigilUpgradesBought[1].pow(0.5).mul(2).add(1), 2)
    document.getElementById("yellowSigilUpgrade3Cost").innerHTML = format(game.yellowSigilUpgrade3Cost, 0)
    document.getElementById("yellowSigilUpgrade3Effect").innerHTML = format(new Decimal(15).pow(game.yellowSigilUpgradesBought[2].pow(0.5)), 2)
    if (game.yellowSigilUpgradesBought[3].eq(1)) {document.getElementsByClassName("yellowSigilUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("yellowSigilUpgrade")[3].disabled = false}
  }
  //Holy tetrahedron stuff
  if (game.unlocks >= 24) {
    document.getElementsByClassName("confirmationToggle")[2].style.display = "inline-block"
    if (game.confirmations[2] == false) {document.getElementsByClassName("confirmationToggle")[2].style.border = "2px solid red"}
    else {document.getElementsByClassName("confirmationToggle")[2].style.border = "2px solid #0f0"}
    document.getElementsByClassName("box")[29].style.display = "block"
    document.getElementsByClassName("box")[30].style.display = "block"
    document.getElementsByClassName("resourceRow")[20].style.display = "block"
    holyTetrahedronUnlockCheck()
  }
  //Holy octahedron stuff
  if (game.unlocks >= 25) {
    document.getElementsByClassName("box")[31].style.display = "block"
    document.getElementsByClassName("box")[32].style.display = "block"
    document.getElementsByClassName("resourceRow")[21].style.display = "block"
    holyOctahedronUnlockCheck()
  }
  //Holy fire stuff
  if (game.unlocks >= 26) {
    document.getElementsByClassName("box")[33].style.display = "block"
    document.getElementsByClassName("resourceRow")[22].style.display = "block"
    for (i=1;i<7;i++) {
      if (game.holyFireUpgradeCosts[i-1].eq(0)) game.holyFireUpgradeCosts[i-1] = new Decimal(holyFireUpgradeBase[i]).pow(game.holyFireUpgradesBought[i-1]).mul(holyFireUpgradeInitialCosts[i]).floor()
      document.getElementById("holyFireUpgrade"+i+"Cost").innerHTML = format(game.holyFireUpgradeCosts[i-1], 0)
    }
  }
  //Void magic upgrade stuff
  if (game.unlocks >= 27) {
    document.getElementsByClassName("box")[34].style.display = "block"
    document.getElementsByClassName("upgradeDragonButton")[6].style.display = "block"
    for (i=0;i<17;i++) {
      if (game.voidMagicUpgradesBought[i] == true) {document.getElementsByClassName("voidMagicUpgrade")[i].disabled = true}
      else {document.getElementsByClassName("voidMagicUpgrade")[i].disabled = false}
    }
		if (game.voidMagicUpgradesBought[7] == true) {
			document.getElementsByClassName("holyFireUpgrade")[5].style.display = "inline-block"
			document.getElementsByClassName("holyFireBuyMaxButton")[5].style.display = "inline-block"
		}
  }
  //Holy dodecahedron stuff
  if (game.unlocks >= 28) {
    document.getElementsByClassName("box")[35].style.display = "block"
    document.getElementsByClassName("box")[36].style.display = "block"
    document.getElementsByClassName("resourceRow")[23].style.display = "block"
    holyDodecahedronUnlockCheck()
  }
	//Planet stuff
  if (game.unlocks >= 29) {
		document.getElementById("omniverseWarning").style.display = "block"
    document.getElementsByClassName("box")[37].style.display = "block"
		document.getElementsByClassName("resourceRow")[24].style.display = "block"
		if (game.planetCosts[2].gt(1e199)) document.getElementsByClassName("formPlanetButton")[2].style.backgroundColor = "#aaa"
		if (game.planetCosts[1].gt("1e499")) document.getElementsByClassName("formPlanetButton")[1].style.backgroundColor = "#aaa"
  }
	//Omniversal hypergod stuff
	if (game.unlocks >= 30) {
		document.getElementById("omniverseWarning").style.display = "none"
		document.getElementsByClassName("box")[38].style.display = "block"
		if (game.hypergodsDefeated == 12) {
			document.getElementById("hypergodImage").style.display = "none"
			document.getElementById("hypergodName").style.display = "none"
			document.getElementById("hypergodText").innerHTML = "&#8202;&#8202;There are no more hypergods to defeat!"
			document.getElementById("hypergodButton").style.display = "none"
			document.getElementById("bigFinishButton").style.display = "block"
		}
		else {
			document.getElementById("hypergodImage").style.display = "block"
			document.getElementById("hypergodName").style.display = "block"
			document.getElementById("hypergodButton").style.display = "block"
			document.getElementById("hypergodImage").src = "img/hypergod" + (game.hypergodsDefeated+1) + ".png"
			document.getElementById("hypergodName").innerHTML = hypergodNames[game.hypergodsDefeated]
			document.getElementById("hypergodText").innerHTML = hypergodText[game.hypergodsDefeated]
			document.getElementById("hypergodDefeatCost").innerHTML = format(hypergodDefeatCosts[game.hypergodsDefeated])
		}
	}
	//Cosmic plague stuff
	if (game.unlocks >= 31) {
		document.getElementsByClassName("box")[39].style.display = "block"
		document.getElementsByClassName("resourceRow")[25].style.display = "block"
		document.getElementsByClassName("upgradeDragonButton")[7].style.display = "block"
	}
	//if (game.plagueUpgradeCosts.length == 4) game.plagueUpgradeCosts[4] = new Decimal(1e13)
	//if (game.plagueUpgradesBought.length == 4) game.plagueUpgradesBought[4] = new Decimal(0)
	//Oganesson stuff
	if (game.unlocks >= 32) {
		document.getElementsByClassName("box")[40].style.display = "block"
		document.getElementsByClassName("resourceRow")[26].style.display = "block"
		document.getElementById("unlockEssencesButton").style.display = "block"
		for (i=0;i<7;i++) document.getElementsByClassName("oganessonUpgradesBought")[i].innerHTML = game.oganessonUpgradesBought[i]
    //Could be shortened
    if (game.oganessonUpgradesBought[0] == 10) {document.getElementsByClassName("oganessonUpgrade")[0].disabled = true}
    else {document.getElementsByClassName("oganessonUpgrade")[0].disabled = false}
		if (game.oganessonUpgradesBought[1] == 10) {document.getElementsByClassName("oganessonUpgrade")[1].disabled = true}
    else {document.getElementsByClassName("oganessonUpgrade")[1].disabled = false}
		if (game.oganessonUpgradesBought[2] == 10) {document.getElementsByClassName("oganessonUpgrade")[2].disabled = true}
    else {document.getElementsByClassName("oganessonUpgrade")[2].disabled = false}
		if (game.oganessonUpgradesBought[3] == 1) {
			document.getElementsByClassName("oganessonUpgrade")[3].disabled = true
			document.getElementsByClassName("plagueUpgrade")[4].style.display = "inline-block"
			document.getElementsByClassName("plagueBuyMaxButton")[5].style.display = "inline-block"
		}
    else {document.getElementsByClassName("oganessonUpgrade")[3].disabled = false}
		if (game.oganessonUpgradesBought[4] == 5) {document.getElementsByClassName("oganessonUpgrade")[4].disabled = true}
    else {document.getElementsByClassName("oganessonUpgrade")[4].disabled = false}
		if (game.oganessonUpgradesBought[5] == 10) {document.getElementsByClassName("oganessonUpgrade")[5].disabled = true}
    else {document.getElementsByClassName("oganessonUpgrade")[5].disabled = false}
		if (game.oganessonUpgradesBought[6] == 10) {document.getElementsByClassName("oganessonUpgrade")[6].disabled = true}
    else {document.getElementsByClassName("oganessonUpgrade")[6].disabled = false}
	}
	//Essence stuff
	if (game.unlocks >= 33) {
		document.getElementsByClassName("box")[41].style.display = "block"
		document.getElementsByClassName("box")[42].style.display = "block"
		document.getElementsByClassName("resourceRow")[27].style.display = "block"
		document.getElementsByClassName("resourceRow")[28].style.display = "block"
		document.getElementById("unlockEssencesButton").style.display = "none"
		document.getElementById("unlockDeathEssenceButton").style.display = "block"
	}
	//Death essence stuff
	if (game.unlocks >= 34) {
		document.getElementsByClassName("box")[43].style.display = "block"
		document.getElementsByClassName("resourceRow")[29].style.display = "block"
		document.getElementById("unlockDeathEssenceButton").style.display = "none"
		document.getElementsByClassName("upgradeDragonButton")[8].style.display = "block"
	}
	//Nuclear pasta stuff
	if (game.unlocks >= 35) {
		document.getElementsByClassName("box")[44].style.display = "block"
		document.getElementsByClassName("resourceRow")[30].style.display = "block"
		document.getElementById("unlockNuclearPastaButton").style.display = "none"
		document.getElementById("unlockFinalityEssenceButton").style.display = "block"
		document.getElementById("extendNuclearPastaButton").disabled = game.nuclearPastaExtended
		for (let i=0;i<4;i++) {
			if (game.nuclearPastaUpgradesBought[i]) {document.getElementsByClassName("nuclearPastaUpgrade")[i].disabled = true}
			else {document.getElementsByClassName("nuclearPastaUpgrade")[i].disabled = false}
		}
	}
	//Finality essence stuff
	if (game.unlocks >= 36) {
		document.getElementsByClassName("box")[45].style.display = "block"
		document.getElementsByClassName("resourceRow")[31].style.display = "block"
		document.getElementById("unlockFinalityEssenceButton").style.display = "none"
		document.getElementsByClassName("upgradeDragonButton")[9].style.display = "block"
		if (game.finalityEssenceUpgradeCosts[2].gt(9e15) && game.finalityEssenceUpgradeCosts[2].lt(1.1e16)) game.finalityEssenceUpgradeCosts[2] = new Decimal(1e15) //Upgrade 3 cost used to be 1e16, should now be 1e15
	}
	//Finality cube stuff
	if (game.unlocks >= 37) {
		document.getElementsByClassName("box")[46].style.display = "block"
		document.getElementsByClassName("resourceRow")[32].style.display = "block"
		document.getElementById("unlockFinalityCubesButton").style.display = "none"
	}

  //Dragon stage stuff
	document.getElementsByClassName("upgradeDragonButton")[0].style.display = "block"
  document.getElementById("dragonStageCounter").innerHTML = romanNumerals[game.dragonStage - 1]
  if (game.dragonStage >= 2) {
    document.getElementsByClassName("upgradeDragonButton")[0].style.display = "none"
    document.getElementsByClassName("upgradeDragonButton")[1].style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon2.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have an</a><br>Adult dragon"
    document.getElementById("dragonInfo").innerHTML = "Your large dragon friend inspires awe and fear, and spews fire for you."
  }
  if (game.dragonStage >= 3) {
    document.getElementsByClassName("upgradeDragonButton")[1].style.display = "none"
    document.getElementsByClassName("upgradeDragonButton")[2].style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon3.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have an</a><br>Elder dragon"
    document.getElementById("dragonInfo").innerHTML = "Your strong and wise dragon friend rests upon your mountain of gold, and defends it with inferno-like breath."
  }
  if (game.dragonStage >= 4) {
    document.getElementsByClassName("upgradeDragonButton")[2].style.display = "none"
    document.getElementsByClassName("upgradeDragonButton")[3].style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon4.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Dark dragon"
    document.getElementById("dragonInfo").innerHTML = "Your menacing dark dragon calls upon the power of the void itself to defend your empire."
  }
  if (game.dragonStage < 5) {
    document.getElementById("dragonAffectionStuff").style.display = "none"
  }
  if (game.dragonStage >= 5) {
    document.getElementsByClassName("upgradeDragonButton")[3].style.display = "none"
    document.getElementById("dragonImg").src = "img/iconDragon5.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Light dragon"
    document.getElementById("dragonInfo").innerHTML = "Your heavenly light dragon focuses the power of the gods themselves to protect your people from harm. It can also fire lightning out of its claws, because it's cool like that."
    document.getElementById("dragonAffectionStuff").style.display = "block"
    document.getElementById("dragonTimeCooldown").innerHTML = format(game.dragonTimeCooldown, 0)
    document.getElementById("dragonTimeSpent").innerHTML = format(game.dragonTimeSpent, 0)
    game.dragonTimeEffect = new Decimal(1.2).pow(game.dragonTimeSpent.pow(0.3))
    if (game.dragonTimeEffect.gt(2)) game.dragonTimeEffect = game.dragonTimeEffect.add(2).pow(0.5)
    dragonTimeEffectCap = new Decimal(2.5)
    if (game.tomeUpgradesBought[8] == true) dragonTimeEffectCap = dragonTimeEffectCap.mul(game.blueFireUpgradesBought[4].pow(0.7).div(5).add(1))
    if (game.unlocks >= 26) dragonTimeEffectCap = dragonTimeEffectCap.mul(game.holyFireUpgradesBought[2].pow(0.7).mul(5).add(1))
    if (game.dragonTimeEffect.gt(dragonTimeEffectCap)) {
      game.dragonTimeEffect = dragonTimeEffectCap
      document.getElementById("dragonTimeEffectCap").innerHTML = " (capped)"
    }
    else {document.getElementById("dragonTimeEffectCap").innerHTML = ""}
    document.getElementById("dragonTimeEffect").innerHTML = format(game.dragonTimeEffect, 3)
    if (game.dragonTimeCooldown > 0) {document.getElementById("dragonSpendTimeButton").disabled = true}
    else {document.getElementById("dragonSpendTimeButton").disabled = false}
    //The dragon feed cost used to be higher, this changes it for old players with the old cost
    if (game.dragonFeedCost.eq(new Decimal(10).pow(new Decimal(2).pow(game.dragonFood).mul(10)))) game.dragonFeedCost = new Decimal(10).pow(new Decimal(2).pow(game.dragonFood).mul(8).round())
    document.getElementById("dragonFeedCost").innerHTML = format(game.dragonFeedCost, 0)
    document.getElementById("dragonFood").innerHTML = format(game.dragonFood, 0)
    document.getElementById("dragonFoodEffect").innerHTML = format(new Decimal(1.3).pow(game.dragonFood), 3)
  }
  if (game.dragonStage >= 6) {
    document.getElementsByClassName("upgradeDragonButton")[4].style.display = "none"
    document.getElementsByClassName("upgradeDragonButton")[5].style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon6.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Machine dragon"
    document.getElementById("dragonInfo").innerHTML = "Despite being filled with immense eldrich technology spiralling inwards forever, a million billion tiny cogs quietly ticking away, your dragon feels like merely a cog itself. Perhaps... it is still imperfect."
    
    if (game.unlocks >= 18) {document.getElementById("unlockBloodButton").style.display = "none"}
    else {document.getElementById("unlockBloodButton").style.display = "block"}
  }
  if (game.dragonStage >= 7) {
    document.getElementsByClassName("upgradeDragonButton")[5].style.display = "none"
    if (game.unlocks < 27) document.getElementById("unlockVoidMagicUpgradesButton").style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon7.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Holy dragon"
    document.getElementById("dragonInfo").innerHTML = "Your dragon channels boundless energy through itself, a being of near-infinite strength. One even the gods fear. How did we get here?"
  }
  if (game.dragonStage >= 8) {
    document.getElementsByClassName("upgradeDragonButton")[6].style.display = "none"
		if (game.unlocks < 29) document.getElementById("unlockPlanetsButton").style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon8.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Multidimensional dragon"
    document.getElementById("dragonInfo").innerHTML = "Your dragon can view countless universes at once and channel all of their combined power."
  }
	if (game.dragonStage >= 9) {
    document.getElementsByClassName("upgradeDragonButton")[7].style.display = "none"
    document.getElementById("dragonImg").src = "img/iconDragon9.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Plague dragon"
    document.getElementById("dragonInfo").innerHTML = "Dripping with the most dangerous substance in the omniverse, your dragon is completely unkillable."
  }
	if (game.dragonStage >= 10) {
    document.getElementsByClassName("upgradeDragonButton")[8].style.display = "none"
		if (game.unlocks < 35) document.getElementById("unlockNuclearPastaButton").style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon10.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Death dragon"
    document.getElementById("dragonInfo").innerHTML = "Your dragon embodies death itself. It seems you have killed Death and taken his place as the taker of souls."
  }
	if (game.dragonStage >= 11) {
    document.getElementsByClassName("upgradeDragonButton")[9].style.display = "none"
		if (game.unlocks < 37) document.getElementById("unlockFinalityCubesButton").style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon11.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Finality dragon"
    document.getElementById("dragonInfo").innerHTML = "Your dragon is now composed of the essence of the omniverse itself. It is physically impossible to become any stronger. Unless...?"
  }

  //sigil resetter stuff, needs to be after unlocks so the sigil resetter types can all be properly prefilled
  document.getElementById("sigilResetterAmount").value = game["sigilResetter" + sigilResetterModes[game.sigilResetterMode]].toString(); //set input field for sigil resetter amount
  document.getElementById("sigilResetterActive").checked = game.sigilResetterActive;
  document.getElementById("sigilResetterCycle").checked = game.sigilResetterCycle;
  let currentResetterType = sigilColours[game.sigilResetterType];
  document.getElementById("sigilResetterType").value = currentResetterType[0].toUpperCase() + currentResetterType.slice(1);
  if (document.getElementById("sigilResetterType").value === '') {document.getElementById("sigilResetterType").value = 'Cyan'; game.sigilResetterType = 0}
  document.getElementById("sigilResetterMode").value = sigilResetterModesFull[game.sigilResetterMode];

  
  document.getElementById("hotkeySpan").innerHTML = generateHotkeyText();
  populateTabPositions()
  render(renderVars.posX, renderVars.posY)
  document.getElementById("loadingScreenCover").style.display = "none"
}

function fixSaveVersion(oldVersion) { 
  if (oldVersion === undefined) { //v 0.5.0, addressing sigil upgrade changes for achievement update
    if (game.cyanSigilUpgrade1Bought) game.cyanSigilUpgradesBought = [game.cyanSigilUpgrade1Bought, game.cyanSigilUpgrade2Bought, game.cyanSigilUpgrade3Bought, game.cyanSigilUpgrade6Bought];
    if (game.blueSigilUpgrade1Bought)game.blueSigilUpgradesBought = [game.blueSigilUpgrade1Bought, game.blueSigilUpgrade2Bought, game.blueSigilUpgrade3Bought, game.blueSigilUpgrade6Bought];
    if (game.indigoSigilUpgrade1Bought)game.indigoSigilUpgradesBought = [game.indigoSigilUpgrade1Bought, game.indigoSigilUpgrade2Bought, game.indigoSigilUpgrade4Bought, game.indigoSigilUpgrade6Bought];
    if (game.violetSigilUpgrade1Bought)game.violetSigilUpgradesBought = [game.violetSigilUpgrade1Bought, game.violetSigilUpgrade2Bought, game.violetSigilUpgrade5Bought, game.violetSigilUpgrade6Bought];
    if (game.pinkSigilUpgrade3Bought || typeof(game.pinkSigilUpgradesBought[0]) === 'number') game.pinkSigilUpgradesBought = [new Decimal(0), new Decimal(0), new Decimal(0)];
    let keysToDelete = ["cyanSigilUpgrade1Bought", "cyanSigilUpgrade2Bought", "cyanSigilUpgrade3Bought", "cyanSigilUpgrade4Bought", "cyanSigilUpgrade5Bought", "cyanSigilUpgrade6Bought", "blueSigilUpgrade1Bought", "blueSigilUpgrade2Bought", "blueSigilUpgrade3Bought", "blueSigilUpgrade4Bought", "blueSigilUpgrade5Bought", "blueSigilUpgrade6Bought", "indigoSigilUpgrade1Bought", "indigoSigilUpgrade2Bought", "indigoSigilUpgrade3Bought", "indigoSigilUpgrade4Bought", "indigoSigilUpgrade5Bought", "indigoSigilUpgrade6Bought", "violetSigilUpgrade1Bought", "violetSigilUpgrade2Bought", "violetSigilUpgrade3Bought", "violetSigilUpgrade4Bought", "violetSigilUpgrade5Bought", "violetSigilUpgrade6Bought", "pinkSigilUpgrade3Bought"]
    for (let i = 0;i < keysToDelete.length;i++) {
      delete(game[keysToDelete[i]])
    }
    oldVersion = 0;
  }
  if (oldVersion < 2) { //v 0.5.0 hotfix, addressing dark magic upgrade retainment issues
    if (game.pinkSigilUpgradesBought[1].gt(0)) {
      game.darkMagicUpgradesBought = game.darkMagicUpgradesBought.slice(0,10);
    } else {
      game.darkMagicUpgradesBought = game.darkMagicUpgradesBought.slice(0,8);
    }
  }
  if (oldVersion < 3) { //v 0.7.3, addressing unlock order issues arising from an unlock being skippable
    if (game.tomeUpgradesBought[11]) game.unlocks = 20;
    if (game.tomeUpgradesBought[12]) game.unlocks = 21;
  }
}

timeStopped = false
timeStopSound = new Audio("img/timeStop.mp3")
timeStopSound.volume = 0.2
timeResumeSound = new Audio("img/timeResume.mp3")
timeResumeSound.volume = 0.2

//Small update (occurs every 150ms)
function updateSmall() {
  if (timeStopped) return;
  
  //Gold/second formula and multipliers
  let diff = Date.now() - game.lastUpdate;
  diff = diff/1000;
  game.lastUpdate = Date.now();

  alertString = ""
  if (game.challengesActive) alertString += "<a style='color:#0ff'>!</a> You are in magic challenges<br>"
  if (game.inHell) alertString += "<a style='color:#0ff'>!</a> You are in hell<br>"
  if (game.sigilResetterActive) alertString += "<a style='color:#0ff'>!</a> Sigil resetter is enabled<br>"
  document.getElementById("alerts").innerHTML = alertString
  
  game.goldPerSecond = game.miners.mul(game.fire.div(10).add(1).log10().mul(2).add(1))
  if (game.unlocks >= 2) {
    if (game.darkMagicUpgradesBought[5]) {game.goldPerSecond = game.goldPerSecond.mul(new Decimal(5).pow(game.fireUpgrade2Bought.pow(0.8)))}
    else if (game.magicUpgradesBought[8]) {game.goldPerSecond = game.goldPerSecond.mul(new Decimal(1.6).pow(game.fireUpgrade2Bought.pow(0.8)))}
    else {game.goldPerSecond = game.goldPerSecond.mul(new Decimal(1.25).pow(game.fireUpgrade2Bought.pow(0.8)))}
    if (game.platinumUpgradesBought[8] > 0) {game.goldPerSecond = game.goldPerSecond.mul(game.fireUpgrade4Bought.pow(game.miners.pow(0.3)).pow(game.platinumUpgradesBought[8] / 4).add(1))}
    else {game.goldPerSecond = game.goldPerSecond.mul(game.fireUpgrade4Bought.pow(1.5).mul(game.miners).div(50).add(1))}
  }
  if (game.unlocks >= 3) game.goldPerSecond = game.goldPerSecond.mul(1 + game.platinumUpgradesBought[0] * 0.2)
  if (game.platinumUpgradesBought[5] > 0) game.goldPerSecond = game.goldPerSecond.mul(platinumUpgrade6Effect)
  if (game.challengesActive && game.selectedChallenges[3]) game.goldPerSecond = game.goldPerSecond.div(1e25)
  if (game.unlocks >= 4) game.goldPerSecond = game.goldPerSecond.mul(game.magicEffect)
  if (game.magicUpgradesBought[0]) game.goldPerSecond = game.goldPerSecond.mul(game.gold.add(1).log10().add(1))
  if (game.magicUpgradesBought[2]) game.goldPerSecond = game.goldPerSecond.mul(55.5)
  if (game.magicUpgradesBought[5]) {
    if (game.magicUpgradesBought[9]) {game.goldPerSecond = game.goldPerSecond.mul(game.miners.pow(3).add(1))}
    else {game.goldPerSecond = game.goldPerSecond.mul(game.miners.pow(1.5).add(1))}
  }
  if (game.unlocks >= 5) {
    if (game.violetSigilUpgradesBought[2].eq(1)) {game.goldPerSecond = game.goldPerSecond.mul(game.magifolds.pow(game.magifolds.add(10).log10().log10().add(8)))}
    else if (game.darkMagicUpgradesBought[3]) {game.goldPerSecond = game.goldPerSecond.mul(game.magifolds.pow(8))}
    else if (game.magicUpgradesBought[18]) {game.goldPerSecond = game.goldPerSecond.mul(game.magifolds.pow(6))}
    else {game.goldPerSecond = game.goldPerSecond.mul(game.magifolds.pow(4))}
  }
  if (game.dragonStage >= 5) game.goldPerSecond = game.goldPerSecond.pow(game.dragonTimeEffect)
  if (game.unlocks >= 10) {
    if (!game.inHell || game.currentHellLayer < 2) game.goldPerSecond = game.goldPerSecond.pow(new Decimal(1.2).pow(game.cyanSigilUpgradesBought[2].pow(0.4)))
  }
  if (game.tomeUpgradesBought[3]) game.goldPerSecond = game.goldPerSecond.pow(game.platinum.add(1e10).slog().div(2))
  if (game.holyDodecahedronUpgradesBought[4]) game.goldPerSecond = game.goldPerSecond.pow(game.redSigils.pow(0.2).add(1))
  if (game.challengesActive && game.selectedChallenges[1]) game.goldPerSecond = game.goldPerSecond.pow(0.25)
  if (game.inHell) { //Can definitely be made better using a switch
    if (game.currentHellLayer == 1) game.goldPerSecond = game.goldPerSecond.add(1).log10().pow(5)
    else if (game.currentHellLayer == 2) game.goldPerSecond = game.goldPerSecond.add(1).log10().pow(2)
    else if (game.currentHellLayer == 3) game.goldPerSecond = game.goldPerSecond.add(1).log10()
    else if (game.currentHellLayer == 4) game.goldPerSecond = game.goldPerSecond.add(1).log10().pow(0.5)
    else if (game.currentHellLayer == 5) game.goldPerSecond = game.goldPerSecond.add(1).log10().pow(0.2)
    if (game.holyOctahedronUpgradesBought[1]) game.goldPerSecond = game.goldPerSecond.mul(1e250)
    if (game.tomeUpgradesBought[10]) game.goldPerSecond = game.goldPerSecond.pow(game.blood.add(1).log10().add(1))
  }
    
  //Gold/click formula and multipliers
  if (game.magicUpgradesBought[8]) {game.goldPerClick = game.fireUpgrade3Bought.pow(12).mul(4).add(1)}
  else {game.goldPerClick = game.fireUpgrade3Bought.pow(2.6).mul(4).add(1)}
  if (game.unlocks >= 4) game.goldPerClick = game.goldPerClick.mul(game.magicEffect)
  if (game.magicUpgradesBought[0]) game.goldPerClick = game.goldPerClick.mul(game.gold.add(1).log10().add(1))
  if (game.magicUpgradesBought[2]) game.goldPerClick = game.goldPerClick.mul(55.5)
  if (game.unlocks >= 5) {
    if (game.violetSigilUpgradesBought[2].eq(1)) {game.goldPerClick = game.goldPerClick.mul(game.magifolds.pow(game.magifolds.add(10).log10().log10().add(8)))}
    else if (game.darkMagicUpgradesBought[3]) {game.goldPerClick = game.goldPerClick.mul(game.magifolds.pow(8))}
    else if (game.magicUpgradesBought[18]) {game.goldPerClick = game.goldPerClick.mul(game.magifolds.pow(6))}
    else {game.goldPerClick = game.goldPerClick.mul(game.magifolds.pow(4))}
  }
  if (game.dragonStage >= 5) game.goldPerClick = game.goldPerClick.pow(game.dragonTimeEffect)
  if (game.challengesActive && game.selectedChallenges[1]) game.goldPerClick = game.goldPerClick.pow(0.25)
  if (game.challengesActive && game.selectedChallenges[3]) game.goldPerClick = new Decimal(20)
  if (game.inHell) { //Can definitely be made better using a switch
    if (game.currentHellLayer == 1) game.goldPerClick = game.goldPerClick.add(1).log10().pow(5)
    else if (game.currentHellLayer == 2) game.goldPerClick = game.goldPerClick.add(1).log10().pow(2)
    else if (game.currentHellLayer == 3) game.goldPerClick = game.goldPerClick.add(1).log10()
    else if (game.currentHellLayer == 4) game.goldPerClick = game.goldPerClick.add(1).log10().pow(0.5)
    else if (game.currentHellLayer == 5) game.goldPerClick = game.goldPerClick.add(1).log10().pow(0.2)
    if (game.holyOctahedronUpgradesBought[1]) game.goldPerClick = game.goldPerClick.mul(1e250)
    if (game.tomeUpgradesBought[10]) game.goldPerClick = game.goldPerClick.pow(game.blood.add(1).log10().add(1))
  }
  document.getElementById("gold").innerHTML = format(game.gold, 0)
  document.getElementById("goldPerSecond").innerHTML = format(game.goldPerSecond, 0)
  document.getElementById("goldPerClick").innerHTML = format(game.goldPerClick, 0)

  //Enables/disables buy miner button based on whether the user's gold is higher than the cost
  if (game.gold.gte(game.minerCost)) {document.getElementById("buyMinerButton").disabled = false}
  else {document.getElementById("buyMinerButton").disabled = true}

  //Fire/second formula and multipliers
  if (game.voidMagicUpgradesBought[5]) {game.firePerSecond = game.gold}
  else if (game.voidMagicUpgradesBought[4]) {game.firePerSecond = game.gold.pow("1e-10")}
  else {
    if (game.magicUpgradesBought[13]) {game.firePerSecond = new Decimal(3.5).pow(game.fireUpgrade1Bought.pow(0.7))}
    else {game.firePerSecond = new Decimal(2).pow(game.fireUpgrade1Bought.pow(0.6))}
    if (game.unlocks >= 2) game.firePerSecond = game.firePerSecond.mul(game.fireUpgrade5Bought.pow(1.5).mul(game.gold.add(1).log10()).div(5).add(1))
    if (game.unlocks >= 3) game.firePerSecond = game.firePerSecond.mul(1 + game.platinumUpgradesBought[1] * 0.2)
    if (game.magicUpgradesBought[2]) game.firePerSecond = game.firePerSecond.mul(55.5)
    if (game.magicUpgradesBought[4]) game.firePerSecond = game.firePerSecond.mul(game.gold.add(1).log2().add(1))
    if (game.dragonStage == 5) game.firePerSecond = game.firePerSecond.mul(1e15)
    else if (game.dragonStage == 4) game.firePerSecond = game.firePerSecond.mul(1e8)
    else if (game.dragonStage == 3) game.firePerSecond = game.firePerSecond.mul(10000)
    else if (game.dragonStage == 2) game.firePerSecond = game.firePerSecond.mul(100)
    if (game.dragonStage >= 5) game.firePerSecond = game.firePerSecond.pow(new Decimal(1.3).pow(game.dragonFood))
    if (game.unlocks >= 17) game.firePerSecond = game.firePerSecond.pow(game.blueFireUpgradesBought[1].add(1).log10().div(4).add(1))
    if (game.holyTetrahedronUpgradesBought[9]) game.firePerSecond = game.firePerSecond.pow(10000)
    if (game.challengesActive && game.selectedChallenges[2]) {
      if (game.magicUpgradesBought[14]) {game.firePerSecond = game.firePerSecond.pow(0.3)}
      else {game.firePerSecond = game.firePerSecond.pow(0.1)}
    }
    if (game.inHell) { //Can definitely be made better using a switch
      if (game.currentHellLayer == 2 || game.currentHellLayer == 3) game.firePerSecond = game.firePerSecond.add(1).log10()
      else if (game.currentHellLayer >= 4) game.firePerSecond = new Decimal(0)
    }
  }
  document.getElementById("fire").innerHTML = format(game.fire, 0)
  document.getElementById("firePerSecond").innerHTML = format(game.firePerSecond, 0)
  
  //Fire gold multiplier formula and multipliers
  if (game.darkMagicUpgradesBought[5]) {game.fireGoldMultiplier = game.fire.div(10).add(1).log10().mul(2).add(1).mul(new Decimal(5).pow(game.fireUpgrade2Bought.pow(0.8)))}
  else if (game.magicUpgradesBought[8]) {game.fireGoldMultiplier = game.fire.div(10).add(1).log10().mul(2).add(1).mul(new Decimal(1.6).pow(game.fireUpgrade2Bought.pow(0.8)))}
  else {game.fireGoldMultiplier = game.fire.div(10).add(1).log10().mul(2).add(1).mul(new Decimal(1.25).pow(game.fireUpgrade2Bought.pow(0.8)))}
  document.getElementById("fireGoldMultiplier").innerHTML = format(game.fireGoldMultiplier, 2)
  
  document.getElementsByClassName("resourceText")[0].innerHTML = format(game.gold, 0)
  document.getElementsByClassName("resourceText")[1].innerHTML = format(game.miners, 0)
  if (game.unlocks >= 1) document.getElementsByClassName("resourceText")[2].innerHTML = format(game.fire, 0)
  if (game.unlocks >= 2) {
    //Enables/disables fire upgrade buttons based on whether the user's fire is higher than the cost (code can be made better)
    if (game.fire.gte(game.fireUpgrade1Cost) && game.fireUpgrade1Cost.lt("e1e9")) {document.getElementsByClassName("fireUpgrade")[0].disabled = false}
    else {document.getElementsByClassName("fireUpgrade")[0].disabled = true}
    if (game.fire.gte(game.fireUpgrade2Cost) && game.fireUpgrade2Cost.lt("e1e9")) {document.getElementsByClassName("fireUpgrade")[1].disabled = false}
    else {document.getElementsByClassName("fireUpgrade")[1].disabled = true}
    if (game.fire.gte(game.fireUpgrade3Cost) && game.fireUpgrade3Cost.lt("e1e9")) {document.getElementsByClassName("fireUpgrade")[2].disabled = false}
    else {document.getElementsByClassName("fireUpgrade")[2].disabled = true}
    if (game.fire.gte(game.fireUpgrade4Cost) && game.fireUpgrade4Cost.lt("e1e9")) {document.getElementsByClassName("fireUpgrade")[3].disabled = false}
    else {document.getElementsByClassName("fireUpgrade")[3].disabled = true}
    if (game.fire.gte(game.fireUpgrade5Cost) && game.fireUpgrade5Cost.lt("e1e9")) {document.getElementsByClassName("fireUpgrade")[4].disabled = false}
    else {document.getElementsByClassName("fireUpgrade")[4].disabled = true}
    if (game.fire.gte(game.fireUpgrade6Cost) && game.fireUpgrade6Cost.lt("e1e9")) {document.getElementsByClassName("fireUpgrade")[5].disabled = false}
    else {document.getElementsByClassName("fireUpgrade")[5].disabled = true}
    if (game.darkMagicUpgradesBought[5]) {document.getElementById("fireUpgrade2Effect").innerHTML = format(new Decimal(5).pow(game.fireUpgrade2Bought.pow(0.8)), 2)}
    else if (game.magicUpgradesBought[8]) {document.getElementById("fireUpgrade2Effect").innerHTML = format(new Decimal(1.6).pow(game.fireUpgrade2Bought.pow(0.8)), 2)}
    else {document.getElementById("fireUpgrade2Effect").innerHTML = format(new Decimal(1.25).pow(game.fireUpgrade2Bought.pow(0.8)), 2)}
    if (game.magicUpgradesBought[8]) {document.getElementById("fireUpgrade3Effect").innerHTML = format(game.fireUpgrade3Bought.pow(12).mul(4).add(1), 2)}
    else {document.getElementById("fireUpgrade3Effect").innerHTML = format(game.fireUpgrade3Bought.pow(2.6).mul(4).add(1), 2)}
    if (game.platinumUpgradesBought[8] > 0) {document.getElementById("fireUpgrade4Effect").innerHTML = format(game.fireUpgrade4Bought.pow(game.miners.pow(0.3)).pow(game.platinumUpgradesBought[8] / 4).add(1), 2)}
    else {document.getElementById("fireUpgrade4Effect").innerHTML = format(game.fireUpgrade4Bought.pow(1.5).mul(game.miners).div(50).add(1), 2)}
    document.getElementById("fireUpgrade5Effect").innerHTML = format(game.fireUpgrade5Bought.pow(1.5).mul(game.gold.add(1).log10()).div(5).add(1), 2)
  }
  if (game.unlocks >= 3) {
    document.getElementById("platinum").innerHTML = format(game.platinum, 0)
    document.getElementsByClassName("resourceText")[3].innerHTML = format(game.platinum, 0)
    //Determines the amount of platinum to get when converting gold
    game.platinumToGet = game.gold.add(1).log2().mul(new Decimal(3).pow(game.fireUpgrade6Bought.pow(0.6)))
    if (game.unlocks >= 7) game.platinumToGet = game.platinumToGet.mul(1.2 ** game.uraniumUpgradesBought[0])
    if (game.unlocks >= 8) game.platinumToGet = game.platinumToGet.mul(10 ** game.uraniumUpgradesBought[4])
    if (game.unlocks >= 11) game.platinumToGet = game.platinumToGet.mul(new Decimal(1e15).pow(game.blueSigilUpgradesBought[1].pow(0.6)))
    if (game.holyTetrahedronUpgradesBought[4]) game.platinumToGet = game.platinumToGet.mul(1e20)
    if (game.unlocks >= 17) game.platinumToGet = game.platinumToGet.pow(game.blueFireUpgradesBought[2].add(1).log2().add(1))
    if (game.darkMagicUpgradesBought[12]) game.platinumToGet = game.platinumToGet.pow(666)
    if (game.challengesActive && game.selectedChallenges[1]) game.platinumToGet = game.platinumToGet.pow(0.25)
    if (game.inHell) { //Can definitely be made better using a switch
      if (game.currentHellLayer == 1) game.platinumToGet = game.platinumToGet.pow(0.1)
      else if (game.currentHellLayer == 2) game.platinumToGet = game.platinumToGet.pow(0.01)
      else if (game.currentHellLayer == 3 || game.currentHellLayer == 4) game.platinumToGet = game.platinumToGet.add(1).log10()
      else if (game.currentHellLayer == 5) game.platinumToGet = game.platinumToGet.add(1).log10().pow(0.5)
    }
    game.platinumToGet = game.platinumToGet.floor()
    document.getElementById("platinumToGet").innerHTML = format(game.platinumToGet, 0)
    if (game.platinumToGet.gt(game.bestPlatinumToGet)) game.bestPlatinumToGet = game.platinumToGet
    document.getElementById("extraPlatinumPerSecond").innerHTML = format(Decimal.max(game.bestPlatinumToGet.div(10), 2), 0)
    if (game.uraniumUpgradesBought[3]) {platinumUpgrade6Effect = game.platinum.add(1).pow(game.platinumUpgradesBought[5] * 1.2)}
    else {platinumUpgrade6Effect = game.platinum.add(1).log10().add(1).pow(game.platinumUpgradesBought[5] * 1.2)}
    if (game.challengesActive && game.selectedChallenges[3]) platinumUpgrade6Effect = platinumUpgrade6Effect.div(1e25)
    document.getElementById("platinumUpgrade6Effect").innerHTML = format(platinumUpgrade6Effect, 2)
    if (game.magicUpgradesBought[10]) {document.getElementById("platinumUpgrade7Max").innerHTML = "20"}
    else {document.getElementById("platinumUpgrade7Max").innerHTML = "10"}
  }
  if (game.unlocks >= 4) {
    //Determines the amount of magic to get when doing a magic reset
    //game.magicToGet = game.gold.div(1e15).pow(0.1)
    //if (game.magicUpgradesBought[3]) {
      //if (game.magicUpgradesBought[9]) {game.magicToGet = game.magicToGet.mul(game.magic.add(1).log2().mul(4).add(1))}
      //else {game.magicToGet = game.magicToGet.mul(game.magic.add(1).log2().mul(1.5).add(1))}
    //}
    //if (game.magicUpgradesBought[1]) game.magicToGet = game.magicToGet.mul(1.5)
    //if (game.magicUpgradesBought[6]) game.magicToGet = game.magicToGet.mul(2)
    //if (game.magicUpgradesBought[17]) game.magicToGet = game.magicToGet.mul(3)
    //if (game.unlocks >= 10) game.magicToGet = game.magicToGet.mul(game.cyanSigils.add(1).pow(2))
    //if (game.unlocks >= 11) game.magicToGet = game.magicToGet.mul(game.blueSigils.add(1).pow(3))
    //if (game.unlocks >= 12) game.magicToGet = game.magicToGet.mul(game.indigoSigils.add(1).pow(4))
    //if (game.unlocks >= 13) game.magicToGet = game.magicToGet.mul(game.violetSigils.add(1).pow(5))
    //if (game.unlocks >= 14) game.magicToGet = game.magicToGet.mul(game.pinkSigils.add(1).pow(6))
    //if (game.darkMagicUpgradesBought[9] == true) game.magicToGet = game.magicToGet.pow(1.1)
    //if (game.darkMagicUpgradesBought[1]) game.magicToGet = game.magicToGet.pow(game.uranium.add(1).log10().div(30).add(1))
    game.magicToGet = getMagicGain()
    document.getElementById("magicToGet").innerHTML = format(game.magicToGet, 0)
    if (game.unlocks >= 10) {document.getElementById("nextMagic").innerHTML = ""}
    else {document.getElementById("nextMagic").innerHTML = "Next magic at " + format(getNextMagicAt(), 0) + " gold<br>"}
    //document.getElementById("nextMagic").innerHTML = "Next magic at " + format(getNextMagicAt(), 0) + " gold<br>"
    document.getElementById("magic").innerHTML = format(game.magic, 0)
    document.getElementsByClassName("resourceText")[4].innerHTML = format(game.magic, 0)
    game.magicEffect = game.magic.mul(3).mul(new Decimal(1.5).pow(game.platinumUpgradesBought[6])).add(1)
    if (game.magicUpgradesBought[15]) game.magicEffect = game.magicEffect.pow(2)
    if (game.plutoniumUpgradesBought[1] > 0) game.magicEffect = game.magicEffect.pow((game.plutoniumUpgradesBought[1] * 100000) ** 0.8 + 1)
    if (game.inHell && game.currentHellLayer >= 5) game.magicEffect = game.magicEffect.add(1).log10()
    if (game.challengesActive && game.selectedChallenges[0]) game.magicEffect = game.magic.pow(0.2).div(1e15)
    if (game.magicEffect.gt("e1000")) {
      game.magicEffect = game.magicEffect.mul("e1000").pow(0.5)
      document.getElementById("magicEffectCap").innerHTML = " (softcapped)"
    }
    else {document.getElementById("magicEffectCap").innerHTML = ""}
    if (game.magicEffect.gt("e100000")) {game.magicEffect = game.magicEffect.mul("e900000").pow(0.1)}
    document.getElementById("magicEffect").innerHTML = format(game.magicEffect, 2)
    document.getElementById("magicUpgrade1Effect").innerHTML = format(game.gold.add(1).log10().add(1), 2)
    if (game.magicUpgradesBought[9]) {
      document.getElementById("magicUpgrade4Effect").innerHTML = format(game.magic.add(1).log2().mul(4).add(1), 2)
      document.getElementById("magicUpgrade6Effect").innerHTML = format(game.miners.pow(3).add(1), 2)
    }
    else {
      document.getElementById("magicUpgrade4Effect").innerHTML = format(game.magic.add(1).log2().mul(1.5).add(1), 2)
      document.getElementById("magicUpgrade6Effect").innerHTML = format(game.miners.pow(1.5).add(1), 2)
    }
    document.getElementById("magicUpgrade5Effect").innerHTML = format(game.gold.add(1).log2().add(1), 2)
  }
  if (game.unlocks >= 5) {
    //Sets the magic score to get from exiting magic challenges
    game.magicScoreToGet = game.gold.add(1).multiply(game.fire.add(1)).log10()
    if (game.magicUpgradesBought[12]) game.magicScoreToGet = game.magicScoreToGet.mul(2)
    if (game.magicUpgradesBought[16]) game.magicScoreToGet = game.magicScoreToGet.mul(game.magifolds.log10().add(1).div(3))
    if (game.unlocks >= 7) game.magicScoreToGet = game.magicScoreToGet.mul(2 ** game.uraniumUpgradesBought[2])
    if (game.darkMagicUpgradesBought[6]) game.magicScoreToGet = game.magicScoreToGet.mul(2)
    if (game.unlocks >= 10) game.magicScoreToGet = game.magicScoreToGet.mul(game.cyanSigils.add(1).pow(2))
    if (game.unlocks >= 11) game.magicScoreToGet = game.magicScoreToGet.mul(game.blueSigils.add(1).pow(3))
    if (game.unlocks >= 13) game.magicScoreToGet = game.magicScoreToGet.mul(game.violetSigils.add(1).pow(5))
    if (game.unlocks >= 21) game.magicScoreToGet = game.magicScoreToGet.mul(new Decimal(10).pow(game.redSigils.pow(0.5).mul(400)))
    if (game.unlocks >= 22) game.magicScoreToGet = game.magicScoreToGet.mul(new Decimal(10).pow(game.orangeSigils.pow(0.5).mul(800)))
    if (game.unlocks >= 23) game.magicScoreToGet = game.magicScoreToGet.mul(new Decimal(10).pow(game.yellowSigils.pow(0.5).mul(1600)))
    if (game.unlocks >= 14) {
      game.magicScoreToGet = game.magicScoreToGet.mul(game.pinkSigils.add(1).pow(6))
      game.magicScoreToGet = game.magicScoreToGet.pow(new Decimal(1.5).pow(game.pinkSigilUpgradesBought[2].pow(0.5)))
    }
    if (game.darkMagicUpgradesBought[0]) game.magicScoreToGet = game.magicScoreToGet.pow(1.3)
    if (game.holyTetrahedronUpgradesBought[1]) game.magicScoreToGet = game.magicScoreToGet.pow(2)
    if (game.holyOctahedronUpgradesBought[5]) game.magicScoreToGet = game.magicScoreToGet.pow(100)
    game.magicScoreToGet = game.magicScoreToGet.floor()
    if (game.unlockedAchievements[7] > 1) {
      game.magicScore1 = Decimal.max(game.magicScoreToGet, game.magicScore1);
      game.magicScore2 = Decimal.max(game.magicScoreToGet, game.magicScore2);
      game.magicScore3 = Decimal.max(game.magicScoreToGet, game.magicScore3);
      game.magicScore4 = Decimal.max(game.magicScoreToGet, game.magicScore4);
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
      if (game.violetSigilUpgradesBought[2].eq(1)) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(game.magifolds.add(10).log10().log10().add(8)), 2)}
      else if (game.darkMagicUpgradesBought[3]) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(8), 2)}
      else if (game.magicUpgradesBought[18]) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(6), 2)}
      else {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(4), 2)}
      document.getElementsByClassName("resourceText")[5].innerHTML = format(game.magifolds, 0)
    }
    if (game.challengesActive) {
      document.getElementById("magicChallengeButton").innerHTML = "Exit challenges for " + format(game.magicScoreToGet, 0) + " score"
    }
    else {
      game.magicScoreToGet = new Decimal(0)
      document.getElementById("magicChallengeButton").innerHTML = "Enter challenges"
    }
  }
  if (game.unlocks >= 6) {
    document.getElementById("magicUpgrade17Effect").innerHTML = format(game.magifolds.log10().div(3), 2)
  }
  if (game.unlocks >= 7) {
    document.getElementById("uranium").innerHTML = format(game.uranium, 0)
    document.getElementsByClassName("resourceText")[6].innerHTML = format(game.uranium, 0)
    game.uraniumToGet = game.platinum.add(1).log2().mul(1 + 0.1 * game.uraniumUpgradesBought[1])
    if (game.unlocks >= 8) game.uraniumToGet = game.uraniumToGet.mul(2 ** game.platinumUpgradesBought[7])
    if (game.darkMagicUpgradesBought[4]) game.uraniumToGet = game.uraniumToGet.mul(100)
    if (game.unlocks >= 10) game.uraniumToGet = game.uraniumToGet.mul(game.cyanSigilUpgradesBought[1].add(1).pow(1.5))
    if (game.holyTetrahedronUpgradesBought[5]) game.uraniumToGet = game.uraniumToGet.mul(100)
    if (game.unlocks >= 15) {
      knowledgeUpgrade2Effect = new Decimal(5).pow(game.knowledgeUpgradesBought[1].pow(0.5))
      if (knowledgeUpgrade2Effect.gt(1e20)) knowledgeUpgrade2Effect = knowledgeUpgrade2Effect.mul(1e60).pow(0.25)
			if (knowledgeUpgrade2Effect.gt("e2e7")) knowledgeUpgrade2Effect = new Decimal("e2e7")
      game.uraniumToGet = game.uraniumToGet.pow(knowledgeUpgrade2Effect)
    }
		if (game.voidMagicUpgradesBought[12] == true) game.uraniumToGet = game.uraniumToGet.pow(1e30)
		if (game.unlocks >= 34 && game.deathEssenceUpgradesBought[2].gt(0)) {
			let deathEssenceUpgrade3Effect = new Decimal(2).pow(game.deathEssenceUpgradesBought[2].pow(0.7)).mul(10000)
			if (deathEssenceUpgrade3Effect.gt(500000)) deathEssenceUpgrade3Effect = deathEssenceUpgrade3Effect.mul(500000).pow(0.5)
			if (deathEssenceUpgrade3Effect.gt(1e9)) deathEssenceUpgrade3Effect = new Decimal(1e9)
			deathEssenceUpgrade3Effect = new Decimal(10).pow(deathEssenceUpgrade3Effect)
			game.uraniumToGet = game.uraniumToGet.pow(deathEssenceUpgrade3Effect)
		}
    if (game.inHell) { //Can definitely be made better using a switch
      if (game.currentHellLayer == 1) game.uraniumToGet = game.uraniumToGet.pow(0.1)
      else if (game.currentHellLayer == 2) game.uraniumToGet = game.uraniumToGet.pow(0.01)
      else if (game.currentHellLayer == 3 || game.currentHellLayer == 4) game.uraniumToGet = game.uraniumToGet.add(1).log10()
      else if (game.currentHellLayer == 5) game.uraniumToGet = game.uraniumToGet.add(1).log10().pow(0.5)
    }
    game.uraniumToGet = game.uraniumToGet.floor()
    document.getElementById("uraniumToGet").innerHTML = format(game.uraniumToGet, 0)
    if (game.uraniumToGet.gt(game.bestUraniumToGet)) game.bestUraniumToGet = game.uraniumToGet
    document.getElementById("extraUraniumPerSecond").innerHTML = format(Decimal.max(game.bestUraniumToGet.div(10), 1), 0)
  }
  if (game.unlocks >= 9) {
    document.getElementById("darkMagicUpgrade2Effect").innerHTML = format(game.uranium.add(1).log10().div(30).add(1), 2)
  }
  if (game.unlocks >= 10) {
    game.cyanSigilsToGet = game.gold.add(1).log10().div(new Decimal(3000).sub(game.blueSigilUpgradesBought[2].mul(100))).floor()
    document.getElementById("nextCyanSigil").innerHTML = format(new Decimal(10).pow(game.cyanSigilsToGet.add(1).mul(new Decimal(3000).sub(game.blueSigilUpgradesBought[2].mul(100)))), 0)
    if (game.darkMagicUpgradesBought[8] == true) game.cyanSigilsToGet = game.cyanSigilsToGet.mul(3)
    game.cyanSigilsToGet = game.cyanSigilsToGet.mul(new Decimal(5).pow(game.dragonPets ** 0.5))
    if (game.unlocks >= 15) game.cyanSigilsToGet = game.cyanSigilsToGet.mul(game.highestKnowledge.div(3).pow(0.7).add(1))
    if (game.unlocks >= 18) game.cyanSigilsToGet = game.cyanSigilsToGet.mul(game.blood.pow(2).add(1))
    if (game.plutoniumUpgradesBought[2] > 0) game.cyanSigilsToGet = game.cyanSigilsToGet.mul(game.plutonium.add(1).pow(0.5).mul(10).pow(game.plutoniumUpgradesBought[2]))
    if (game.holyTetrahedronUpgradesBought[2]) game.cyanSigilsToGet = game.cyanSigilsToGet.mul(1e50)
		if (game.unlocks >= 34 && game.deathEssenceUpgradesBought[1].gt(0)) game.cyanSigilsToGet = game.cyanSigilsToGet.mul(new Decimal(10).pow(new Decimal(2).pow(game.deathEssenceUpgradesBought[1].pow(0.5)).mul(1e10)))
    game.cyanSigilsToGet = game.cyanSigilsToGet.round()
    document.getElementById("cyanSigils").innerHTML = format(game.cyanSigils, 0)
    document.getElementById("cyanSigilsToGet").innerHTML = format(game.cyanSigilsToGet, 0)
    document.getElementsByClassName("resourceText")[7].innerHTML = format(game.cyanSigils, 0)
    document.getElementById("cyanSigilEffect").innerHTML = format(game.cyanSigils.add(1).pow(2), 0)
    game.cyanSigilPowerPerSecond = game.cyanSigils.pow(2).div(100).mul(game.cyanSigilUpgradesBought[0].add(1))
    if (game.unlocks >= 12) game.cyanSigilPowerPerSecond = game.cyanSigilPowerPerSecond.pow(Decimal.min(new Decimal(1.15).pow(game.indigoSigilUpgradesBought[1].pow(0.5)),30))
    if (game.voidMagicUpgradesBought[2]) game.cyanSigilPowerPerSecond = game.cyanSigilPowerPerSecond.pow(2)
    document.getElementById("cyanSigilPower").innerHTML = format(game.cyanSigilPower, 2)
    document.getElementById("cyanSigilPowerPerSecond").innerHTML = format(game.cyanSigilPowerPerSecond, 2)
  }
  if (game.unlocks >= 11) {
    game.blueSigilsToGet = game.gold.add(1).log10().div(8000).floor()
    document.getElementById("nextBlueSigil").innerHTML = format(new Decimal(10).pow(game.blueSigilsToGet.add(1).mul(8000)), 0)
    if (game.darkMagicUpgradesBought[8] == true) game.blueSigilsToGet = game.blueSigilsToGet.mul(3)
    game.blueSigilsToGet = game.blueSigilsToGet.mul(new Decimal(5).pow(game.dragonPets ** 0.5))
    if (game.unlocks >= 15) game.blueSigilsToGet = game.blueSigilsToGet.mul(game.highestKnowledge.div(3).pow(0.7).add(1))
    if (game.unlocks >= 18) game.blueSigilsToGet = game.blueSigilsToGet.mul(game.blood.pow(2).add(1))
    if (game.plutoniumUpgradesBought[2] > 0) game.blueSigilsToGet = game.blueSigilsToGet.mul(game.plutonium.add(1).pow(0.5).mul(10).pow(game.plutoniumUpgradesBought[2]))
    game.blueSigilsToGet = game.blueSigilsToGet.round()
    document.getElementById("blueSigils").innerHTML = format(game.blueSigils, 0)
    document.getElementById("blueSigilsToGet").innerHTML = format(game.blueSigilsToGet, 0)
    document.getElementsByClassName("resourceText")[8].innerHTML = format(game.blueSigils, 0)
    document.getElementById("blueSigilEffect").innerHTML = format(game.blueSigils.add(1).pow(3), 0)
    game.blueSigilPowerPerSecond = game.blueSigils.pow(2).div(100).mul(game.blueSigilUpgradesBought[0].add(1))
    if (game.unlocks >= 13) game.blueSigilPowerPerSecond = game.blueSigilPowerPerSecond.pow(new Decimal(1.3).pow(game.violetSigilUpgradesBought[1].pow(0.5)))
    document.getElementById("blueSigilPower").innerHTML = format(game.blueSigilPower, 2)
    document.getElementById("blueSigilPowerPerSecond").innerHTML = format(game.blueSigilPowerPerSecond, 2)
  }
  if (game.unlocks >= 12) {
    game.indigoSigilsToGet = game.gold.add(1).log10().div(16000).floor()
    document.getElementById("nextIndigoSigil").innerHTML = format(new Decimal(10).pow(game.indigoSigilsToGet.add(1).mul(16000)), 0)
    game.indigoSigilsToGet = game.indigoSigilsToGet.mul(new Decimal(5).pow(game.dragonPets ** 0.5))
    if (game.unlocks >= 15) game.indigoSigilsToGet = game.indigoSigilsToGet.mul(game.highestKnowledge.div(3).pow(0.7).add(1))
    if (game.unlocks >= 18) game.indigoSigilsToGet = game.indigoSigilsToGet.mul(game.blood.pow(2).add(1))
    if (game.plutoniumUpgradesBought[2] > 0) game.indigoSigilsToGet = game.indigoSigilsToGet.mul(game.plutonium.add(1).pow(0.5).mul(10).pow(game.plutoniumUpgradesBought[2]))
    game.indigoSigilsToGet = game.indigoSigilsToGet.round()
    document.getElementById("indigoSigils").innerHTML = format(game.indigoSigils, 0)
    document.getElementsByClassName("resourceText")[9].innerHTML = format(game.indigoSigils, 0)
    document.getElementById("indigoSigilEffect").innerHTML = format(game.indigoSigils.add(1).pow(4), 0)
    document.getElementById("indigoSigilsToGet").innerHTML = format(game.indigoSigilsToGet, 0)
    game.indigoSigilPowerPerSecond = game.indigoSigils.pow(2).div(100).mul(game.indigoSigilUpgradesBought[0].add(1))
    if (game.tomeUpgradesBought[0]) game.indigoSigilPowerPerSecond = game.indigoSigilPowerPerSecond.pow(1.3)
    document.getElementById("indigoSigilPower").innerHTML = format(game.indigoSigilPower, 2)
    document.getElementById("indigoSigilPowerPerSecond").innerHTML = format(game.indigoSigilPowerPerSecond, 2)
  }
  if (game.unlocks >= 13) {
    game.violetSigilsToGet = game.gold.add(1).log10().div(30000).floor()
    document.getElementById("nextVioletSigil").innerHTML = format(new Decimal(10).pow(game.violetSigilsToGet.add(1).mul(30000)), 0)
    game.violetSigilsToGet = game.violetSigilsToGet.mul(new Decimal(5).pow(game.dragonPets ** 0.5))
    if (game.unlocks >= 15) game.violetSigilsToGet = game.violetSigilsToGet.mul(game.highestKnowledge.div(3).pow(0.7).add(1))
    if (game.unlocks >= 18) game.violetSigilsToGet = game.violetSigilsToGet.mul(game.blood.pow(2).add(1))
    if (game.plutoniumUpgradesBought[2] > 0) game.violetSigilsToGet = game.violetSigilsToGet.mul(game.plutonium.add(1).pow(0.5).mul(10).pow(game.plutoniumUpgradesBought[2]))
    game.violetSigilsToGet = game.violetSigilsToGet.round()
    document.getElementById("violetSigils").innerHTML = format(game.violetSigils, 0)
    document.getElementsByClassName("resourceText")[10].innerHTML = format(game.violetSigils, 0)
    document.getElementById("violetSigilEffect").innerHTML = format(game.violetSigils.add(1).pow(5), 0)
    document.getElementById("violetSigilsToGet").innerHTML = format(game.violetSigilsToGet, 0)
    game.violetSigilPowerPerSecond = game.violetSigils.pow(2).div(100).mul(game.violetSigilUpgradesBought[0].add(1))
    document.getElementById("violetSigilPower").innerHTML = format(game.violetSigilPower, 2)
    document.getElementById("violetSigilPowerPerSecond").innerHTML = format(game.violetSigilPowerPerSecond, 2)
  }
  if (game.unlocks >= 14) {
    game.pinkSigilsToGet = game.gold.add(1).log10().div(300000).floor()
    document.getElementById("nextPinkSigil").innerHTML = format(new Decimal(10).pow(game.pinkSigilsToGet.add(1).mul(300000)), 0)
    game.pinkSigilsToGet = game.pinkSigilsToGet.mul(new Decimal(5).pow(game.dragonPets ** 0.5))
    if (game.unlocks >= 15) game.pinkSigilsToGet = game.pinkSigilsToGet.mul(game.highestKnowledge.div(3).pow(0.7).add(1))
    if (game.unlocks >= 18) game.pinkSigilsToGet = game.pinkSigilsToGet.mul(game.blood.pow(2).add(1))
    if (game.plutoniumUpgradesBought[2] > 0) game.pinkSigilsToGet = game.pinkSigilsToGet.mul(game.plutonium.add(1).pow(0.5).mul(10).pow(game.plutoniumUpgradesBought[2]))
    if (game.holyTetrahedronUpgradesBought[8]) game.pinkSigilsToGet = game.pinkSigilsToGet.pow(2)
		if (game.unlocks >= 33) game.pinkSigilsToGet = game.pinkSigilsToGet.pow(new Decimal(1.1).pow(game.lightEssenceUpgradesBought[2].pow(0.5)))
    game.pinkSigilsToGet = game.pinkSigilsToGet.round()
    document.getElementById("pinkSigils").innerHTML = format(game.pinkSigils, 0)
    document.getElementsByClassName("resourceText")[11].innerHTML = format(game.pinkSigils, 0)
    document.getElementById("pinkSigilEffect").innerHTML = format(game.pinkSigils.add(1).pow(6), 0)
    document.getElementById("pinkSigilsToGet").innerHTML = format(game.pinkSigilsToGet, 0)
    game.pinkSigilPowerPerSecond = game.pinkSigils.pow(2).div(100).mul(game.pinkSigilUpgradesBought[0].add(1))
    if (game.tomeUpgradesBought[1]) game.pinkSigilPowerPerSecond = game.pinkSigilPowerPerSecond.mul(game.totalTomes.pow(0.5).mul(3).add(1))
    document.getElementById("pinkSigilPower").innerHTML = format(game.pinkSigilPower, 2)
    document.getElementById("pinkSigilPowerPerSecond").innerHTML = format(game.pinkSigilPowerPerSecond, 2)
  }
  if (game.unlocks >= 15) {
    document.getElementById("knowledge").innerHTML = format(game.knowledge, 0)
    document.getElementsByClassName("resourceText")[12].innerHTML = format(game.knowledge, 0)
    document.getElementById("highestKnowledge").innerHTML = format(game.highestKnowledge, 0)
    game.knowledgeTradeLevelCap = Decimal.min(game.highestKnowledge.add(1).log2().mul(1.6).add(3).floor(), 9999)
    if (game.knowledgeTradeLevelCap.lt(1e308)) {
      document.getElementById("knowledgeLevelRange").max = game.knowledgeTradeLevelCap.toNumber()
      document.getElementById("knowledgeLevelInput").max = game.knowledgeTradeLevelCap.toNumber()
    }
    document.getElementById("knowledgeSigilBoost").innerHTML = format(game.highestKnowledge.div(3).pow(0.7).add(1), 2)
  }
  if (game.unlocks >= 16) {
    document.getElementById("tomes").innerHTML = format(game.tomes, 0)
    document.getElementsByClassName("resourceText")[13].innerHTML = format(game.tomes, 0)
    document.getElementById("totalTomes").innerHTML = format(game.totalTomes, 0)
    document.getElementById("tomeUpgrade2Effect").innerHTML = format(game.totalTomes.pow(0.5).mul(5).add(1), 2)
    document.getElementById("tomeUpgrade7Effect").innerHTML = format(game.totalTomes.pow(1.2).add(1), 2)
    document.getElementById("tomeUpgrade10Effect").innerHTML = format(game.totalTomes.pow(0.6), 2)
  }
  if (game.unlocks >= 17) {
    game.blueFirePerSecond = game.fire.add(1).log10().div(10000)
    game.blueFirePerSecond = game.blueFirePerSecond.mul(new Decimal(2).pow(game.blueFireUpgradesBought[0].pow(0.6)))
    if (game.dragonStage >= 6) game.blueFirePerSecond = game.blueFirePerSecond.mul(100)
    if (game.tomeUpgradesBought[9]) game.blueFirePerSecond = game.blueFirePerSecond.mul(game.totalTomes.pow(0.6))
    if (game.darkMagicUpgradesBought[10]) game.blueFirePerSecond = game.blueFirePerSecond.mul(game.blood.add(1))
    if (game.plutoniumUpgradesBought[3] > 0) game.blueFirePerSecond = game.blueFirePerSecond.mul(1.5 ** game.plutoniumUpgradesBought[3])
    if (game.plutoniumUpgradesBought[4] > 0) game.blueFirePerSecond = game.blueFirePerSecond.mul(1.25 ** game.plutoniumUpgradesBought[4])
    if (game.unlocks >= 21) game.blueFirePerSecond = game.blueFirePerSecond.mul(new Decimal(50).pow(game.redSigilUpgradesBought[1].pow(0.8)))
    if (game.dragonStage >= 7) game.blueFirePerSecond = game.blueFirePerSecond.mul(1e50)
    if (game.holyOctahedronUpgradesBought[3]) game.blueFirePerSecond = game.blueFirePerSecond.mul(1e250)
    if (game.holyTetrahedronUpgradesBought[6]) game.blueFirePerSecond = game.blueFirePerSecond.mul(game.plutonium.pow(0.5).add(1))
    if (game.holyTetrahedronUpgradesBought[0]) game.blueFirePerSecond = game.blueFirePerSecond.pow(2)
		if (game.unlocks >= 29) game.blueFirePerSecond = game.blueFirePerSecond.pow(game.planetEffect)
		if (game.unlocks >= 31) game.blueFirePerSecond = game.blueFirePerSecond.pow(game.plagueUpgradesBought[2].pow(0.5).mul(10).add(1))
		if (game.unlocks >= 32) game.blueFirePerSecond = game.blueFirePerSecond.pow(game.oganesson.log10().div(10).add(1).pow(game.oganessonUpgradesBought[4]))
    document.getElementById("blueFire").innerHTML = format(game.blueFire, 0)
    document.getElementById("blueFirePerSecond").innerHTML = format(game.blueFirePerSecond, 0)
    document.getElementsByClassName("resourceText")[14].innerHTML = format(game.blueFire, 0)
    //Enables/disables blue fire upgrade buttons based on whether the user's blue fire is higher than the cost
    for (i=0;i<6;i++) {
      if (game.blueFire.gte(game.blueFireUpgradeCosts[i])) {document.getElementsByClassName("blueFireUpgrade")[i].disabled = false}
      else {document.getElementsByClassName("blueFireUpgrade")[i].disabled = true}
    }
    document.getElementById("blueFireUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.blueFireUpgradesBought[0].pow(0.6)), 2)
    document.getElementById("blueFireUpgrade2Effect").innerHTML = format(game.blueFireUpgradesBought[1].add(1).log10().div(4).add(1), 3)
    document.getElementById("blueFireUpgrade3Effect").innerHTML = format(game.blueFireUpgradesBought[2].add(1).log2().add(1), 2)
    document.getElementById("blueFireUpgrade4Effect").innerHTML = format(game.blueFireUpgradesBought[3].pow(0.7).mul(5).add(1), 2)
    document.getElementById("blueFireUpgrade5Effect").innerHTML = format(game.blueFireUpgradesBought[4].pow(0.7).div(5).add(1), 2)
    document.getElementById("blueFireUpgrade6Effect").innerHTML = format(new Decimal(1000).pow(game.blueFireUpgradesBought[5].pow(0.6)), 2)
  }
  if (game.unlocks >= 18) {
    document.getElementById("blood").innerHTML = format(game.blood, 0)
    document.getElementById("bloodEffect").innerHTML = format(game.blood.pow(2).add(1), 0)
    document.getElementById("bloodPerSecond").innerHTML = format(game.bloodPerSecond, 0)
    document.getElementsByClassName("resourceText")[15].innerHTML = format(game.blood, 0)
    document.getElementById("tomeUpgrade11Effect").innerHTML = format(game.blood.add(1).log10().add(1), 2)
		if (game.voidMagicUpgradesBought[6]) {game.bloodPerSecond = game.gold.add(1).log10()}
		else {
			if (game.inHell) { //Can definitely be made better using a switch
				if (game.currentHellLayer == 1) game.bloodPerSecond = game.gold.add(1).log10().pow(2).div(1000).floor()
				else if (game.currentHellLayer == 2) game.bloodPerSecond = game.gold.add(1).log10().pow(3.5).div(75000).floor()
				else if (game.currentHellLayer == 3) game.bloodPerSecond = game.gold.add(1).log10().pow(5).div(1000000).floor()
				else if (game.currentHellLayer == 4) game.bloodPerSecond = game.gold.add(1).log10().pow(8).div(1e7).floor()
				else if (game.currentHellLayer == 5) game.bloodPerSecond = game.gold.add(1).log10().pow(15).div(1e10).floor()
				if (game.darkMagicUpgradesBought[11]) game.bloodPerSecond = game.bloodPerSecond.mul(game.blood.add(1).log10().div(1.5).add(1))
				if (game.darkMagicUpgradesBought[13]) game.bloodPerSecond = game.bloodPerSecond.mul(game.plutonium.add(1).log2().add(1))
				if (game.unlocks >= 21) game.bloodPerSecond = game.bloodPerSecond.mul(new Decimal(6).pow(game.redSigilUpgradesBought[2].pow(0.7)))
				if (game.unlocks >= 22) game.bloodPerSecond = game.bloodPerSecond.mul(new Decimal(6).pow(game.orangeSigilUpgradesBought[2].pow(0.7)))
				if (game.unlocks >= 23) game.bloodPerSecond = game.bloodPerSecond.mul(new Decimal(15).pow(game.yellowSigilUpgradesBought[2].pow(0.5)))
				if (game.holyOctahedronUpgradesBought[2]) game.bloodPerSecond = game.bloodPerSecond.mul(new Decimal(1e9).pow(game.currentHellLayer))
				if (game.holyDodecahedronUpgradesBought[1]) game.bloodPerSecond = game.bloodPerSecond.mul(game.holyDodecahedrons.add(1).pow(10))
				if (game.holyTetrahedronUpgradesBought[6] && game.bloodPerSecond.lt(1e9)) game.bloodPerSecond = new Decimal(1e9)
			}
			else {game.bloodPerSecond = new Decimal(0)}
		}
  }
  if (game.unlocks >= 19) {
    document.getElementById("darkMagicUpgrade11Effect").innerHTML = format(game.blood.add(1), 2)
    document.getElementById("darkMagicUpgrade12Effect").innerHTML = format(game.blood.add(1).log10().div(1.5).add(1), 2)
    document.getElementById("darkMagicUpgrade14Effect").innerHTML = format(game.plutonium.add(1).log2().add(1), 2)
    document.getElementById("darkMagicUpgrade16Effect").innerHTML = format(game.blueFire.add(1).log10().div(10).add(1), 2)
    document.getElementById("darkMagicUpgrade17Effect").innerHTML = format(game.blood.add(1).log10().div(2).add(1), 2)
    document.getElementById("darkMagicUpgrade18Effect").innerHTML = format(game.plutonium.add(1).log10().add(1), 2)
  }
  if (game.unlocks >= 20) {
    document.getElementById("plutonium").innerHTML = format(game.plutonium, 0)
    document.getElementsByClassName("resourceText")[16].innerHTML = format(game.plutonium, 0)
    game.plutoniumToGet = game.uranium.add(1).log10().div(1e13).mul(1 + 0.05 * game.plutoniumUpgradesBought[0])
    if (game.darkMagicUpgradesBought[14]) game.plutoniumToGet = game.plutoniumToGet.mul(10)
    if (game.darkMagicUpgradesBought[18]) game.plutoniumToGet = game.plutoniumToGet.pow(2)
    if (game.holyDodecahedronUpgradesBought[2]) game.plutoniumToGet = game.plutoniumToGet.mul(1e20)
    if (game.unlocks >= 26) game.plutoniumToGet = game.plutoniumToGet.pow(game.holyFireUpgradesBought[3].pow(0.6).mul(2.5).add(1))
		if (game.unlocks >= 32) game.plutoniumToGet = game.plutoniumToGet.pow(game.oganessonUpgradesBought[0] / 50 + 1)
		if (game.unlocks >= 36) game.plutoniumToGet = game.plutoniumToGet.pow(new Decimal(1.2).pow(game.finalityEssenceUpgradesBought[2].pow(0.5)))
    game.plutoniumToGet = game.plutoniumToGet.floor()
    document.getElementById("plutoniumToGet").innerHTML = format(game.plutoniumToGet, 0)
    if (game.plutoniumToGet.gt(game.bestPlutoniumToGet)) game.bestPlutoniumToGet = game.plutoniumToGet
    document.getElementById("extraPlutoniumPerSecond").innerHTML = format(Decimal.max(game.bestPlutoniumToGet.div(10), 0), 0)
    document.getElementById("plutoniumUpgrade2Effect").innerHTML = format((game.plutoniumUpgradesBought[1] * 100000) ** 0.8 + 1, 2)
    document.getElementById("plutoniumUpgrade3Effect").innerHTML = format(game.plutonium.add(1).pow(0.5).mul(10).pow(game.plutoniumUpgradesBought[2]), 2)
  }
  if (game.unlocks >= 21) {
    game.redSigilsToGet = Decimal.max(game.gold.add(10).log10().log10().sub(20).floor(), 0)
    document.getElementById("nextRedSigil").innerHTML = format(new Decimal(10).pow(new Decimal(10).pow(game.redSigilsToGet.add(21))), 0)
    if (game.darkMagicUpgradesBought[15]) game.redSigilsToGet = game.redSigilsToGet.mul(game.blueFire.add(1).log10().div(10).add(1))
    if (game.unlocks >= 22) game.redSigilsToGet = game.redSigilsToGet.mul(game.orangeSigilUpgradesBought[1].pow(0.5).mul(2).add(1))
    if (game.holyTetrahedronUpgradesBought[3]) game.redSigilsToGet = game.redSigilsToGet.mul(10)
    if (game.holyOctahedronUpgradesBought[0]) game.redSigilsToGet = game.redSigilsToGet.mul(game.holyTetrahedrons.add(1))
    if (game.holyDodecahedronUpgradesBought[0]) game.redSigilsToGet = game.redSigilsToGet.mul(game.holyOctahedrons.add(1))
    if (game.holyDodecahedronUpgradesBought[3]) game.redSigilsToGet = game.redSigilsToGet.mul(1e20)
    game.redSigilsToGet = game.redSigilsToGet.round()
    document.getElementById("redSigils").innerHTML = format(game.redSigils, 0)
    document.getElementsByClassName("resourceText")[17].innerHTML = format(game.redSigils, 0)
    document.getElementById("redSigilEffect").innerHTML = format(new Decimal(10).pow(game.redSigils.pow(0.5).mul(400)), 0)
    document.getElementById("redSigilsToGet").innerHTML = format(game.redSigilsToGet, 0)
    game.redSigilPowerPerSecond = game.redSigils.pow(2).div(100).mul(game.redSigilUpgradesBought[0].add(1))
    document.getElementById("redSigilPower").innerHTML = format(game.redSigilPower, 2)
    document.getElementById("redSigilPowerPerSecond").innerHTML = format(game.redSigilPowerPerSecond, 2)
  }
  if (game.unlocks >= 22) {
    game.orangeSigilsToGet = Decimal.max(game.gold.add(10).log10().log10().sub(21).div(2).floor(), 0)
    document.getElementById("nextOrangeSigil").innerHTML = format(new Decimal(10).pow(new Decimal(10).pow(game.orangeSigilsToGet.mul(2).add(23))), 0)
    if (game.darkMagicUpgradesBought[16]) game.orangeSigilsToGet = game.orangeSigilsToGet.mul(game.blood.add(1).log10().div(2).add(1))
    if (game.unlocks >= 23) game.orangeSigilsToGet = game.orangeSigilsToGet.mul(game.yellowSigilUpgradesBought[1].pow(0.5).mul(2).add(1))
    if (game.holyTetrahedronUpgradesBought[3]) game.orangeSigilsToGet = game.orangeSigilsToGet.mul(10)
    if (game.holyOctahedronUpgradesBought[0]) game.orangeSigilsToGet = game.orangeSigilsToGet.mul(game.holyTetrahedrons.add(1))
    if (game.holyDodecahedronUpgradesBought[0]) game.orangeSigilsToGet = game.orangeSigilsToGet.mul(game.holyOctahedrons.add(1))
    game.orangeSigilsToGet = game.orangeSigilsToGet.round()
    document.getElementById("orangeSigils").innerHTML = format(game.orangeSigils, 0)
    document.getElementsByClassName("resourceText")[18].innerHTML = format(game.orangeSigils, 0)
    document.getElementById("orangeSigilEffect").innerHTML = format(new Decimal(10).pow(game.orangeSigils.pow(0.5).mul(800)), 0)
    document.getElementById("orangeSigilsToGet").innerHTML = format(game.orangeSigilsToGet, 0)
    game.orangeSigilPowerPerSecond = game.orangeSigils.pow(2).div(100).mul(game.orangeSigilUpgradesBought[0].add(1))
    if (game.voidMagicUpgradesBought[1]) game.orangeSigilPowerPerSecond = game.orangeSigilPowerPerSecond.mul(1e20)
    document.getElementById("orangeSigilPower").innerHTML = format(game.orangeSigilPower, 2)
    document.getElementById("orangeSigilPowerPerSecond").innerHTML = format(game.orangeSigilPowerPerSecond, 2)
  }
  if (game.unlocks >= 23) {
    game.yellowSigilsToGet = Decimal.max(game.gold.add(10).log10().log10().sub(22).div(3).floor(), 0)
    document.getElementById("nextYellowSigil").innerHTML = format(new Decimal(10).pow(new Decimal(10).pow(game.yellowSigilsToGet.mul(3).add(25))), 0)
    if (game.darkMagicUpgradesBought[17]) game.yellowSigilsToGet = game.yellowSigilsToGet.mul(game.plutonium.add(1).log10().add(1))
    if (game.holyTetrahedronUpgradesBought[3]) game.yellowSigilsToGet = game.yellowSigilsToGet.mul(10)
    if (game.holyOctahedronUpgradesBought[0]) game.yellowSigilsToGet = game.yellowSigilsToGet.mul(game.holyTetrahedrons.add(1))
    if (game.holyDodecahedronUpgradesBought[0]) game.yellowSigilsToGet = game.yellowSigilsToGet.mul(game.holyOctahedrons.add(1))
    game.yellowSigilsToGet = game.yellowSigilsToGet.round()
    document.getElementById("yellowSigils").innerHTML = format(game.yellowSigils, 0)
    document.getElementsByClassName("resourceText")[19].innerHTML = format(game.yellowSigils, 0)
    document.getElementById("yellowSigilEffect").innerHTML = format(new Decimal(10).pow(game.yellowSigils.pow(0.5).mul(1600)), 0)
    document.getElementById("yellowSigilsToGet").innerHTML = format(game.yellowSigilsToGet, 0)
    game.yellowSigilPowerPerSecond = game.yellowSigils.pow(2).div(100).mul(game.yellowSigilUpgradesBought[0].add(1))
    if (game.darkMagicUpgradesBought[19]) game.yellowSigilPowerPerSecond = game.yellowSigilPowerPerSecond.mul(1000)
    document.getElementById("yellowSigilPower").innerHTML = format(game.yellowSigilPower, 2)
    document.getElementById("yellowSigilPowerPerSecond").innerHTML = format(game.yellowSigilPowerPerSecond, 2)
  }
  if (game.unlocks >= 24) {
    game.holyTetrahedronsToGet = game.gold.add(1).log10().div(1e30).pow(0.05)
		if (game.unlocks >= 26) {
			let holyFireUpgrade2Effect = new Decimal(3).pow(game.holyFireUpgradesBought[1].pow(0.6))
			if (holyFireUpgrade2Effect.gt("1e2000")) holyFireUpgrade2Effect = holyFireUpgrade2Effect.mul("1e2000").pow(0.5)
			if (holyFireUpgrade2Effect.gt("1e10000")) holyFireUpgrade2Effect = new Decimal("1e10000")
			game.holyTetrahedronsToGet = game.holyTetrahedronsToGet.mul(holyFireUpgrade2Effect)
		}
		if (game.voidMagicUpgradesBought[10] == true) game.holyTetrahedronsToGet = game.holyTetrahedronsToGet.mul(game.planets.pow(1.5).add(1))
    document.getElementById("holyTetrahedrons").innerHTML = format(game.holyTetrahedrons, 0)
    document.getElementsByClassName("resourceText")[20].innerHTML = format(game.holyTetrahedrons, 0)
    document.getElementById("holyTetrahedronsToGet").innerHTML = format(game.holyTetrahedronsToGet.floor(), 0)
    if (game.holyFireUpgradesBought[1].eq(0)) {document.getElementById("nextHolyTetrahedron").innerHTML = "<br>Next at " + format(new Decimal(10).pow(game.holyTetrahedronsToGet.ceil().pow(20).mul(1e30)), 0) + " gold"}
    else {document.getElementById("nextHolyTetrahedron").innerHTML = ""}
    game.holyTetrahedronsToGet = game.holyTetrahedronsToGet.floor()
  }
  if (game.unlocks >= 25) {
    game.holyOctahedronsToGet = game.gold.add(1).log10().div(1e60).pow(0.02)
    if (game.unlocks >= 26) game.holyOctahedronsToGet = game.holyOctahedronsToGet.mul(new Decimal(2).pow(game.holyFireUpgradesBought[4].pow(0.6)))
    if (game.voidMagicUpgradesBought[0]) game.holyOctahedronsToGet = game.holyOctahedronsToGet.mul(10)
		if (game.voidMagicUpgradesBought[10] == true) game.holyOctahedronsToGet = game.holyOctahedronsToGet.mul(game.planets.pow(1.5).add(1))
		if (game.voidMagicUpgradesBought[9] == true) game.holyOctahedronsToGet = game.holyOctahedronsToGet.pow(1.25)
    document.getElementById("holyOctahedrons").innerHTML = format(game.holyOctahedrons, 0)
    document.getElementsByClassName("resourceText")[21].innerHTML = format(game.holyOctahedrons, 0)
    document.getElementById("holyOctahedronsToGet").innerHTML = format(game.holyOctahedronsToGet.floor(), 0)
    if (game.holyFireUpgradesBought[4].eq(0)) {document.getElementById("nextHolyOctahedron").innerHTML = "<br>Next at " + format(new Decimal(10).pow(game.holyOctahedronsToGet.ceil().pow(50).mul(1e60)), 0) + " gold"}
    else {document.getElementById("nextHolyOctahedron").innerHTML = ""}
    game.holyOctahedronsToGet = game.holyOctahedronsToGet.floor()
  }
  if (game.unlocks >= 26) {
    game.holyFirePerSecond = game.blueFire.add(1).log10().div(100)
    game.holyFirePerSecond = game.holyFirePerSecond.mul(new Decimal(2).pow(game.holyFireUpgradesBought[0].pow(0.6)))
    if (game.holyTetrahedronUpgradesBought[12]) game.holyFirePerSecond = game.holyFirePerSecond.mul(100)
    if (game.holyOctahedronUpgradesBought[7]) game.holyFirePerSecond = game.holyFirePerSecond.mul(game.holyOctahedrons.add(1))
    if (game.holyDodecahedronUpgradesBought[5]) game.holyFirePerSecond = game.holyFirePerSecond.mul(game.holyDodecahedrons.add(1))
    if (game.dragonStage >= 8) game.holyFirePerSecond = game.holyFirePerSecond.mul(1e10)
		if (game.unlocks >= 29) game.holyFirePerSecond = game.holyFirePerSecond.pow(game.planetEffect)
		if (game.unlocks >= 31) game.holyFirePerSecond = game.holyFirePerSecond.pow(game.plagueUpgradesBought[3].pow(0.5).div(10).add(1))
		if (game.unlocks >= 36) game.holyFirePerSecond = game.holyFirePerSecond.pow(new Decimal(1.1).pow(game.finalityEssenceUpgradesBought[1].pow(0.5)))
    document.getElementById("holyFire").innerHTML = format(game.holyFire, 0)
    document.getElementById("holyFirePerSecond").innerHTML = format(game.holyFirePerSecond, 0)
    document.getElementsByClassName("resourceText")[22].innerHTML = format(game.holyFire, 0)
    //Enables/disables holy fire upgrade buttons based on whether the user's holy fire is higher than the cost
    for (i=0;i<6;i++) {
      if (game.holyFire.gte(game.holyFireUpgradeCosts[i])) {document.getElementsByClassName("holyFireUpgrade")[i].disabled = false}
      else {document.getElementsByClassName("holyFireUpgrade")[i].disabled = true}
    }
    document.getElementById("holyFireUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.holyFireUpgradesBought[0].pow(0.6)), 2)
		let holyFireUpgrade2Effect = new Decimal(3).pow(game.holyFireUpgradesBought[1].pow(0.6))
		if (holyFireUpgrade2Effect.gt("1e2000")) {
			holyFireUpgrade2Effect = holyFireUpgrade2Effect.mul("1e2000").pow(0.5)
			if (holyFireUpgrade2Effect.gt("1e10000")) {
				holyFireUpgrade2Effect = new Decimal("1e10000")
				document.getElementById("holyFireEffect2Softcap").innerHTML = " (hardcapped)"
			}
			else {
				document.getElementById("holyFireEffect2Softcap").innerHTML = " (softcapped)"
			}
		}
		else {
			document.getElementById("holyFireEffect2Softcap").innerHTML = ""
		}
    document.getElementById("holyFireUpgrade2Effect").innerHTML = format(holyFireUpgrade2Effect, 2)
    document.getElementById("holyFireUpgrade3Effect").innerHTML = format(game.holyFireUpgradesBought[2].pow(0.7).mul(5).add(1), 2)
    document.getElementById("holyFireUpgrade4Effect").innerHTML = format(game.holyFireUpgradesBought[3].pow(0.6).mul(2.5).add(1), 2)
    document.getElementById("holyFireUpgrade5Effect").innerHTML = format(new Decimal(2).pow(game.holyFireUpgradesBought[4].pow(0.6)), 2)
		let holyFireUpgrade6Effect = new Decimal(2).pow(game.holyFireUpgradesBought[5].pow(0.7))
		if (holyFireUpgrade6Effect.gt("1e2000")) {
			holyFireUpgrade6Effect = holyFireUpgrade6Effect.mul("1e2000").pow(0.5)
			if (holyFireUpgrade6Effect.gt("1e10000")) {
				holyFireUpgrade6Effect = new Decimal("1e10000")
				document.getElementById("holyFireEffect6Softcap").innerHTML = " (hardcapped)"
			}
			else {
				document.getElementById("holyFireEffect6Softcap").innerHTML = " (softcapped)"
			}
		}
		else {
			document.getElementById("holyFireEffect6Softcap").innerHTML = ""
		}
		document.getElementById("holyFireUpgrade6Effect").innerHTML = format(holyFireUpgrade6Effect, 2)
  }
  if (game.unlocks >= 28) {
    game.holyDodecahedronsToGet = game.gold.add(1).log10().div(1e140).pow(0.02)
		if (game.voidMagicUpgradesBought[7] == true) {
			let holyFireUpgrade6Effect = new Decimal(2).pow(game.holyFireUpgradesBought[5].pow(0.7))
			if (holyFireUpgrade6Effect.gt("1e2000")) holyFireUpgrade6Effect = holyFireUpgrade6Effect.mul("1e2000").pow(0.5)
			if (holyFireUpgrade6Effect.gt("1e10000")) holyFireUpgrade6Effect = new Decimal("1e10000")
			game.holyDodecahedronsToGet = game.holyDodecahedronsToGet.mul(holyFireUpgrade6Effect)
		}
		if (game.voidMagicUpgradesBought[10] == true) game.holyDodecahedronsToGet = game.holyDodecahedronsToGet.mul(game.planets.pow(1.5).add(1))
    document.getElementById("holyDodecahedrons").innerHTML = format(game.holyDodecahedrons, 0)
    document.getElementsByClassName("resourceText")[23].innerHTML = format(game.holyDodecahedrons, 0)
    document.getElementById("holyDodecahedronsToGet").innerHTML = format(game.holyDodecahedronsToGet.floor(), 0)
    if (game.voidMagicUpgradesBought[7] != true) {document.getElementById("nextHolyDodecahedron").innerHTML = "<br>Next at " + format(new Decimal(10).pow(game.holyDodecahedronsToGet.ceil().pow(50).mul(1e140)), 0) + " gold"}
		else {document.getElementById("nextHolyDodecahedron").innerHTML = ""}
    game.holyDodecahedronsToGet = game.holyDodecahedronsToGet.floor()
  }
	if (game.unlocks >= 29) {
		game.planetEffect = game.planets.pow(0.8).div(5).add(1)
		if (game.unlocks >= 35 && (game.nuclearPastaState == 4 || game.nuclearPastaUpgradesBought[3])) {
			game.planetEffect = game.planetEffect.mul(game.superclusters.pow(0.7).div(8).add(1).mul(Decimal.min(new Decimal(0.02).mul(game.nuclearPasta.pow(0.6)).add(1), 1.3)))
			document.getElementById("superclusterEffect").innerHTML = format(game.superclusters.pow(0.7).div(8).add(1).mul(Decimal.min(new Decimal(0.02).mul(game.nuclearPasta.pow(0.6)).add(1), 1.3)), 2)
		}
		else if (game.voidMagicUpgradesBought[14] == true) {
			game.planetEffect = game.planetEffect.mul(game.superclusters.pow(0.7).div(8).add(1))
			document.getElementById("superclusterEffect").innerHTML = format(game.superclusters.pow(0.7).div(8).add(1), 2)
		}
		else {
			game.planetEffect = game.planetEffect.mul(game.superclusters.pow(0.7).div(10).add(1))
			document.getElementById("superclusterEffect").innerHTML = format(game.superclusters.pow(0.7).div(10).add(1), 2)
		}
		if (game.voidMagicUpgradesBought[13] == true) game.planetEffect = game.planetEffect.mul(1.2)
		if (game.unlocks >= 31) game.planetEffect = game.planetEffect.mul(game.plagueUpgradesBought[1].add(1).log10().div(4).add(1))
		if (game.unlocks >= 32) game.planetEffect = game.planetEffect.add(game.oganessonUpgradesBought[2] * 2)
		if (game.planetEffect.gte(600)) {
			game.planetEffect = game.planetEffect.mul(600).pow(0.5)
			document.getElementById("planetEffectSoftcap").innerHTML = " (softcapped)"
		}
		else {document.getElementById("planetEffectSoftcap").innerHTML = ""}
		document.getElementById("planets").innerHTML = format(game.planets, 0)
		document.getElementById("planetEffect").innerHTML = format(game.planetEffect, 2)
		document.getElementsByClassName("resourceText")[24].innerHTML = format(game.planets, 0)
		for (let i=0;i<3;i++) document.getElementsByClassName("planetCost")[i].innerHTML = format(game.planetCosts[i], 0)
		document.getElementById("superclusters").innerHTML = format(game.superclusters, 0)
		document.getElementById("superclusterCost").innerHTML = format(game.superclusterCost, 0)
	}
	if (game.unlocks >= 31) {
		game.cosmicPlaguePerSecond = game.spores.pow(2)
		game.cosmicPlaguePerSecond = game.cosmicPlaguePerSecond.mul(game.plagueUpgradesBought[0].pow(1.3).add(1))
		if (game.unlockedAchievements[24] > 0) game.cosmicPlaguePerSecond = game.cosmicPlaguePerSecond.mul(5)
		if (game.unlockedAchievements[24] > 1) game.cosmicPlaguePerSecond = game.cosmicPlaguePerSecond.mul(5)
		if (game.dragonStage >= 9) game.cosmicPlaguePerSecond = game.cosmicPlaguePerSecond.mul(100)
		if (game.unlocks >= 32) {
			game.cosmicPlaguePerSecond = game.cosmicPlaguePerSecond.mul(1.5 ** game.oganessonUpgradesBought[1])
			game.cosmicPlaguePerSecond = game.cosmicPlaguePerSecond.mul(1.5 ** game.oganessonUpgradesBought[5])
		}
		if (game.unlocks >= 33) game.cosmicPlaguePerSecond = game.cosmicPlaguePerSecond.mul(new Decimal(2).pow(game.lightEssenceUpgradesBought[1].pow(0.6)))
		if (game.unlocks >= 34) game.cosmicPlaguePerSecond = game.cosmicPlaguePerSecond.mul(new Decimal(10).pow(game.deathEssenceUpgradesBought[3].pow(0.7)))
		if (game.unlocks >= 35 && (game.nuclearPastaState == 3 || game.nuclearPastaUpgradesBought[2])) game.cosmicPlaguePerSecond = game.cosmicPlaguePerSecond.mul(Decimal.min(new Decimal(10).pow(game.nuclearPasta.pow(0.7)), "1e1500"))
		else if (game.unlocks >= 35 && game.nuclearPastaState == 4) game.cosmicPlaguePerSecond = new Decimal(0)
		document.getElementById("cosmicPlague").innerHTML = format(game.cosmicPlague, 0)
		document.getElementsByClassName("resourceText")[25].innerHTML = format(game.cosmicPlague, 0)
		document.getElementById("cosmicPlaguePerSecond").innerHTML = format(game.cosmicPlaguePerSecond, 0)
		document.getElementById("spores").innerHTML = format(game.spores, 0)
		document.getElementById("sporeCost").innerHTML = format(game.sporeCost, 0)
		for (let i=0;i<5;i++) document.getElementsByClassName("plagueUpgradeCost")[i].innerHTML = format(game.plagueUpgradeCosts[i], 0)
		document.getElementsByClassName("plagueUpgradeEffect")[0].innerHTML = format(game.plagueUpgradesBought[0].pow(1.3).add(1), 2)
		document.getElementsByClassName("plagueUpgradeEffect")[1].innerHTML = format(game.plagueUpgradesBought[1].add(1).log10().div(4).add(1), 2)
		document.getElementsByClassName("plagueUpgradeEffect")[2].innerHTML = format(game.plagueUpgradesBought[2].pow(0.5).mul(10).add(1), 2)
		document.getElementsByClassName("plagueUpgradeEffect")[3].innerHTML = format(game.plagueUpgradesBought[3].pow(0.5).div(10).add(1), 3)
		document.getElementsByClassName("plagueUpgradeEffect")[4].innerHTML = format(new Decimal(2).pow(game.plagueUpgradesBought[4].pow(0.5)), 2)
	}
	if (game.unlocks >= 32) {
		game.oganessonPerSecond = Decimal.max(game.plutonium.log10().div(1e9).floor(), 0)
		if (game.plagueUpgradesBought[4].gt(0)) game.oganessonPerSecond = game.oganessonPerSecond.mul(new Decimal(2).pow(game.plagueUpgradesBought[4].pow(0.5)))
		if (game.unlockedAchievements[24] > 2) game.oganessonPerSecond = game.oganessonPerSecond.mul(10)
		if (game.unlocks >= 33) game.oganessonPerSecond = game.oganessonPerSecond.mul(new Decimal(1.5).pow(game.darkEssenceUpgradesBought[1].pow(0.6)))
		if (game.unlocks >= 35 && game.nuclearPastaState == 5) game.oganessonPerSecond = game.oganessonPerSecond.mul(Decimal.min(new Decimal(1.5).pow(game.nuclearPasta.pow(0.6)), 1e30))
		document.getElementById("oganesson").innerHTML = format(game.oganesson, 0)
		document.getElementsByClassName("resourceText")[26].innerHTML = format(game.oganesson, 0)
		document.getElementById("oganessonPerSecond").innerHTML = format(game.oganessonPerSecond, 0)
		document.getElementById("oganessonUpgrade1Effect").innerHTML = format(game.oganessonUpgradesBought[0] / 50 + 1, 2)
		document.getElementById("oganessonUpgrade2Effect").innerHTML = format(1.5 ** game.oganessonUpgradesBought[1], 2)
		document.getElementById("oganessonUpgrade3Effect").innerHTML = format(game.oganessonUpgradesBought[2] * 2, 2)
		document.getElementById("oganessonUpgrade5Effect").innerHTML = format(game.oganesson.log10().div(10).add(1).pow(game.oganessonUpgradesBought[4]), 2)
		document.getElementById("oganessonUpgrade6Effect").innerHTML = format(1.5 ** game.oganessonUpgradesBought[5], 2)
		document.getElementById("oganessonUpgrade7Effect").innerHTML = format(game.oganessonUpgradesBought[6] ** 1.2 * 2 + 1, 2)
	}
	if (game.unlocks >= 33) {
		game.lightEssencePerSecond = game.darkEssence.add(1).log10().add(1)
		game.lightEssencePerSecond = game.lightEssencePerSecond.mul(new Decimal(2).pow(game.lightEssenceUpgradesBought[0].pow(0.5)))
		game.lightEssencePerSecond = game.lightEssencePerSecond.mul(game.oganessonUpgradesBought[6] ** 1.2 * 2 + 1)
		if (game.unlockedAchievements[24] > 3) game.lightEssencePerSecond = game.lightEssencePerSecond.mul(5)
		if (game.unlocks >= 34) {
			game.lightEssencePerSecond = game.lightEssencePerSecond.mul(game.deathEssence.add(1).log10().mul(2).add(1))
			game.lightEssencePerSecond = game.lightEssencePerSecond.mul(new Decimal(10000).pow(game.deathEssenceUpgradesBought[4].pow(0.5)))
		}
		if (game.dragonStage >= 10) game.lightEssencePerSecond = game.lightEssencePerSecond.mul(1000)
		if (game.unlocks >= 35 && (game.nuclearPastaState == 1 || game.nuclearPastaUpgradesBought[0])) game.lightEssencePerSecond = game.lightEssencePerSecond.mul(Decimal.min(new Decimal(3).pow(game.nuclearPasta.pow(0.7)), 1e75))
		else if (game.unlocks >= 35 && game.nuclearPastaState == 3) game.lightEssencePerSecond = new Decimal(0)
		if (game.unlocks >= 36) game.lightEssencePerSecond = game.lightEssencePerSecond.mul(new Decimal(10000).pow(game.finalityEssenceUpgradesBought[3].pow(0.5)))
		if (game.unlocks >= 37) game.lightEssencePerSecond = game.lightEssencePerSecond.mul(game.finalityCubeEffect)
		game.darkEssencePerSecond = game.lightEssence.add(1).log10().add(1)
		game.darkEssencePerSecond = game.darkEssencePerSecond.mul(new Decimal(2).pow(game.darkEssenceUpgradesBought[0].pow(0.5)))
		game.darkEssencePerSecond = game.darkEssencePerSecond.mul(game.oganessonUpgradesBought[6] ** 1.2 * 2 + 1)
		if (game.unlockedAchievements[24] > 3) game.darkEssencePerSecond = game.darkEssencePerSecond.mul(5)
		if (game.unlocks >= 34) {
			game.darkEssencePerSecond = game.darkEssencePerSecond.mul(game.deathEssence.add(1).log10().mul(2).add(1))
			game.darkEssencePerSecond = game.darkEssencePerSecond.mul(new Decimal(10000).pow(game.deathEssenceUpgradesBought[4].pow(0.5)))
		}
		if (game.dragonStage >= 10) game.darkEssencePerSecond = game.darkEssencePerSecond.mul(1000)
		if (game.unlocks >= 35 && (game.nuclearPastaState == 1 || game.nuclearPastaUpgradesBought[0])) game.darkEssencePerSecond = game.darkEssencePerSecond.mul(Decimal.min(new Decimal(3).pow(game.nuclearPasta.pow(0.7)), 1e75))
		else if (game.unlocks >= 35 && game.nuclearPastaState == 3) game.darkEssencePerSecond = new Decimal(0)
		if (game.unlocks >= 36) game.darkEssencePerSecond = game.darkEssencePerSecond.mul(new Decimal(10000).pow(game.finalityEssenceUpgradesBought[3].pow(0.5)))
		if (game.unlocks >= 37) game.darkEssencePerSecond = game.darkEssencePerSecond.mul(game.finalityCubeEffect)
		document.getElementById("lightEssence").innerHTML = format(game.lightEssence, 0)
		document.getElementsByClassName("resourceText")[27].innerHTML = format(game.lightEssence, 0)
		document.getElementById("lightEssencePerSecond").innerHTML = format(game.lightEssencePerSecond, 0)
		document.getElementById("lightEssenceMultiplier").innerHTML = format(game.lightEssence.add(1).log10().add(1), 2)
		document.getElementById("darkEssence").innerHTML = format(game.darkEssence, 0)
		document.getElementsByClassName("resourceText")[28].innerHTML = format(game.darkEssence, 0)
		document.getElementById("darkEssencePerSecond").innerHTML = format(game.darkEssencePerSecond, 0)
		document.getElementById("darkEssenceMultiplier").innerHTML = format(game.darkEssence.add(1).log10().add(1), 2)
		for (let i=0;i<3;i++) document.getElementsByClassName("lightEssenceUpgradeCost")[i].innerHTML = format(game.lightEssenceUpgradeCosts[i], 0)
		for (let i=0;i<3;i++)	document.getElementsByClassName("darkEssenceUpgradeCost")[i].innerHTML = format(game.darkEssenceUpgradeCosts[i], 0)
		document.getElementsByClassName("lightEssenceUpgradeEffect")[0].innerHTML = format(new Decimal(2).pow(game.lightEssenceUpgradesBought[0].pow(0.5)), 2)
		document.getElementsByClassName("lightEssenceUpgradeEffect")[1].innerHTML = format(new Decimal(2).pow(game.lightEssenceUpgradesBought[1].pow(0.6)), 2)
		document.getElementsByClassName("lightEssenceUpgradeEffect")[2].innerHTML = format(new Decimal(1.1).pow(game.lightEssenceUpgradesBought[2].pow(0.5)), 2)
		document.getElementsByClassName("darkEssenceUpgradeEffect")[0].innerHTML = format(new Decimal(2).pow(game.darkEssenceUpgradesBought[0].pow(0.5)), 2)
		document.getElementsByClassName("darkEssenceUpgradeEffect")[1].innerHTML = format(new Decimal(1.5).pow(game.darkEssenceUpgradesBought[1].pow(0.6)), 2)
		if (game.darkEssenceUpgradesBought[2].gt(0)) {document.getElementsByClassName("darkEssenceUpgradeEffect")[2].innerHTML = format(new Decimal(10).pow(new Decimal(2).pow(game.darkEssenceUpgradesBought[2].pow(0.5)).mul(5e9)), 2)}
		else {document.getElementsByClassName("darkEssenceUpgradeEffect")[2].innerHTML = format(1, 2)}
	}
	if (game.unlocks >= 34) {
		game.deathEssencePerSecond = game.darkEssence.add(game.lightEssence).pow(0.4).div(100)
		game.deathEssencePerSecond = game.deathEssencePerSecond.mul(new Decimal(2).pow(game.deathEssenceUpgradesBought[0].pow(0.5)))
		if (game.unlocks >= 35 && (game.nuclearPastaState == 2 || game.nuclearPastaUpgradesBought[1])) game.deathEssencePerSecond = game.deathEssencePerSecond.mul(Decimal.min(new Decimal(2.5).pow(game.nuclearPasta.pow(0.6)), 1e7))
		else if (game.unlocks >= 35 && game.nuclearPastaState == 1) game.deathEssencePerSecond = new Decimal(0)
		if (game.unlockedAchievements[24] > 4) game.deathEssencePerSecond = game.deathEssencePerSecond.mul(10)
		if (game.unlocks >= 36) game.deathEssencePerSecond = game.deathEssencePerSecond.mul(game.finalityEssence.add(1).log10().mul(2).add(1))
		if (game.deathEssencePerSecond.gt(1e20)) game.deathEssencePerSecond = game.deathEssencePerSecond.mul(1e20).pow(0.5)
		if (game.dragonStage >= 11) game.deathEssencePerSecond = game.deathEssencePerSecond.mul(100)
		if (game.unlocks >= 37) game.deathEssencePerSecond = game.deathEssencePerSecond.mul(game.finalityCubeEffect)
		document.getElementById("deathEssence").innerHTML = format(game.deathEssence, 0)
		document.getElementsByClassName("resourceText")[29].innerHTML = format(game.deathEssence, 0)
		document.getElementById("deathEssencePerSecond").innerHTML = format(game.deathEssencePerSecond, 0)
		document.getElementById("deathEssenceMultiplier").innerHTML = format(game.deathEssence.add(1).log10().mul(2).add(1), 2)
		for (let i=0;i<5;i++) document.getElementsByClassName("deathEssenceUpgradeCost")[i].innerHTML = format(game.deathEssenceUpgradeCosts[i], 0)
		document.getElementsByClassName("deathEssenceUpgradeEffect")[0].innerHTML = format(new Decimal(2).pow(game.deathEssenceUpgradesBought[0].pow(0.5)), 2)
		if (game.deathEssenceUpgradesBought[1].gt(0)) {document.getElementsByClassName("deathEssenceUpgradeEffect")[1].innerHTML = format(new Decimal(10).pow(new Decimal(2).pow(game.deathEssenceUpgradesBought[1].pow(0.5)).mul(1e10)), 2)}
		else {document.getElementsByClassName("deathEssenceUpgradeEffect")[1].innerHTML = format(1, 2)}
		if (game.deathEssenceUpgradesBought[2].gt(0)) {
			let deathEssenceUpgrade3Effect = new Decimal(2).pow(game.deathEssenceUpgradesBought[2].pow(0.7)).mul(10000)
			if (deathEssenceUpgrade3Effect.gt(500000)) {
				deathEssenceUpgrade3Effect = deathEssenceUpgrade3Effect.mul(500000).pow(0.5)
				if (deathEssenceUpgrade3Effect.gt(1e9)) {
					deathEssenceUpgrade3Effect = new Decimal(1e9)
					document.getElementById("deathEssenceUpgrade3Softcap").innerHTML = " (hardcapped)"
				}
				else {
					document.getElementById("deathEssenceUpgrade3Softcap").innerHTML = " (softcapped)"
				}
			}
			else {
				document.getElementById("deathEssenceUpgrade3Softcap").innerHTML = ""
			}
			deathEssenceUpgrade3Effect = new Decimal(10).pow(deathEssenceUpgrade3Effect)
			document.getElementsByClassName("deathEssenceUpgradeEffect")[2].innerHTML = format(deathEssenceUpgrade3Effect, 2)
		}
		else {
			document.getElementsByClassName("deathEssenceUpgradeEffect")[2].innerHTML = format(1, 2)
			document.getElementById("deathEssenceUpgrade3Softcap").innerHTML = ""
		}
		document.getElementsByClassName("deathEssenceUpgradeEffect")[3].innerHTML = format(new Decimal(20).pow(game.deathEssenceUpgradesBought[3].pow(0.7)), 2)
		document.getElementsByClassName("deathEssenceUpgradeEffect")[4].innerHTML = format(new Decimal(10000).pow(game.deathEssenceUpgradesBought[4].pow(0.5)), 2)
	}
	if (game.unlocks >= 35) {
		document.getElementById("nuclearPasta").innerHTML = format(game.nuclearPasta, 0)
		document.getElementsByClassName("resourceText")[30].innerHTML = format(game.nuclearPasta, 0)
		document.getElementById("nuclearPastaCost").innerHTML = format(game.nuclearPastaCost, 0)
		document.getElementById("nuclearPastaState").innerHTML = nuclearPastaNames[game.nuclearPastaState-1]
		document.getElementById("nuclearPastaPositiveEffect").innerHTML = nuclearPastaPositiveEffects[game.nuclearPastaState-1]
		document.getElementById("nuclearPastaNegativeEffect").innerHTML = nuclearPastaNegativeEffects[game.nuclearPastaState-1]
		switch(game.nuclearPastaState) {
			case 1:
				document.getElementById("nuclearPastaEffect").innerHTML = format(Decimal.min(new Decimal(3).pow(game.nuclearPasta.pow(0.7)), 1e75), 2)
				break;
			case 2:
				document.getElementById("nuclearPastaEffect").innerHTML = format(Decimal.min(new Decimal(2.5).pow(game.nuclearPasta.pow(0.6)), 1e7), 2)
				break;
			case 3:
				document.getElementById("nuclearPastaEffect").innerHTML = format(Decimal.min(new Decimal(10).pow(game.nuclearPasta.pow(0.7)), "1e1500"), 2)
				break;
			case 4:
				document.getElementById("nuclearPastaEffect").innerHTML = format(Decimal.min(new Decimal(0.02).mul(game.nuclearPasta.pow(0.6)).add(1), 1.3), 2)
				break;
			case 5:
				document.getElementById("nuclearPastaEffect").innerHTML = format(Decimal.min(new Decimal(1.5).pow(game.nuclearPasta.pow(0.6)), 1e30), 2)
				break;
			default:
				document.getElementById("nuclearPastaEffect").innerHTML = ""
				break;
		} 
	}
	if (game.unlocks >= 36) {
		game.finalityEssencePerSecond = game.deathEssence.add(game.lightEssence).pow(0.3).div(1e16)
		game.finalityEssencePerSecond = game.finalityEssencePerSecond.mul(new Decimal(2).pow(game.finalityEssenceUpgradesBought[0].pow(0.5)))
		if (game.dragonStage >= 11) game.finalityEssencePerSecond = game.finalityEssencePerSecond.mul(100)
		if (game.unlockedAchievements[24] > 8) game.finalityEssencePerSecond = game.finalityEssencePerSecond.mul(100)
		if (game.unlocks >= 37) game.finalityEssencePerSecond = game.finalityEssencePerSecond.mul(game.finalityCubeEffect)
		if (game.unlockedAchievements[24] > 9) game.finalityEssencePerSecond = game.finalityEssencePerSecond.mul(100)
		if (game.unlockedAchievements[24] > 10) game.finalityEssencePerSecond = game.finalityEssencePerSecond.mul(1e7)
		if (game.unlockedAchievements[24] > 11) game.finalityEssencePerSecond = game.finalityEssencePerSecond.mul(1e28)
		document.getElementById("finalityEssence").innerHTML = format(game.finalityEssence, 0)
		document.getElementsByClassName("resourceText")[31].innerHTML = format(game.finalityEssence, 0)
		document.getElementById("finalityEssencePerSecond").innerHTML = format(game.finalityEssencePerSecond, 0)
		document.getElementById("finalityEssenceMultiplier").innerHTML = format(game.finalityEssence.add(1).log10().mul(2).add(1), 2)
		for (let i=0;i<4;i++) document.getElementsByClassName("finalityEssenceUpgradeCost")[i].innerHTML = format(game.finalityEssenceUpgradeCosts[i], 0)
		document.getElementsByClassName("finalityEssenceUpgradeEffect")[0].innerHTML = format(new Decimal(2).pow(game.finalityEssenceUpgradesBought[0].pow(0.5)), 2)
		document.getElementsByClassName("finalityEssenceUpgradeEffect")[1].innerHTML = format(new Decimal(1.1).pow(game.finalityEssenceUpgradesBought[1].pow(0.5)), 2)
		document.getElementsByClassName("finalityEssenceUpgradeEffect")[2].innerHTML = format(new Decimal(1.2).pow(game.finalityEssenceUpgradesBought[2].pow(0.5)), 2)
		document.getElementsByClassName("finalityEssenceUpgradeEffect")[3].innerHTML = format(new Decimal(10000).pow(game.finalityEssenceUpgradesBought[3].pow(0.5)), 2)
	}
	if (game.unlocks >= 37) {
		document.getElementById("finalityCubes").innerHTML = format(game.finalityCubes, 0)
		document.getElementsByClassName("resourceText")[32].innerHTML = format(game.finalityCubes, 0)
		document.getElementById("finalityCubeCost").innerHTML = format(game.finalityCubeCost, 0)
		document.getElementById("finalityBoostCost").innerHTML = format(game.finalityBoostCost, 0)
		document.getElementById("finalityBoostBoostCost").innerHTML = format(game.finalityBoostBoostCost, 0)
		game.finalityCubeEffect = new Decimal(100).pow(game.finalityCubes.pow(0.5))
		game.finalityCubeEffect = game.finalityCubeEffect.mul(new Decimal(50000).pow(game.finalityBoosts.pow(0.8)))
		game.finalityCubeEffect = game.finalityCubeEffect.mul(new Decimal(100000).pow(game.finalityBoostBoosts.pow(0.7)))
		if (game.finalityCubeEffect.gt(1e100)) game.finalityCubeEffect = new Decimal(1e100)
		document.getElementById("finalityCubeEffect").innerHTML = format(game.finalityCubeEffect, 0)
	}
  //game.gold = game.gold.add(game.goldPerSecond.mul(diff));
  //if (game.unlocks >= 1) game.fire = game.fire.add(game.firePerSecond.mul(diff)) // .mul(diff)
  //if (game.unlockedAchievements[6] > 2 && game.fireAutoMaxAll) fireMaxAll()
  //if (game.unlockedAchievements[6] > 0) dragonSpendTime()
  //if (game.unlockedAchievements[10] > 0) dragonFeed();
  //if (game.unlockedAchievements[3] > 7) {game.magic = game.magic.add(game.magicToGet.mul(diff)) }
  //else if (game.unlockedAchievements[3] > 5) {game.magic = game.magic.add(game.magicToGet.mul(diff).div(100))}
  //if (game.unlocks >= 10) game.cyanSigilPower = game.cyanSigilPower.add(game.cyanSigilPowerPerSecond.mul(diff))
  //if (game.unlocks >= 11) game.blueSigilPower = game.blueSigilPower.add(game.blueSigilPowerPerSecond.mul(diff))
  //if (game.unlocks >= 12) game.indigoSigilPower = game.indigoSigilPower.add(game.indigoSigilPowerPerSecond.mul(diff))
  //if (game.unlocks >= 13) game.violetSigilPower = game.violetSigilPower.add(game.violetSigilPowerPerSecond.mul(diff))
  //if (game.unlocks >= 14) game.pinkSigilPower = game.pinkSigilPower.add(game.pinkSigilPowerPerSecond.mul(diff))
  //if (game.unlockedAchievements[5] > 3) game.uranium = game.uranium.add(game.uraniumToGet.mul(diff))
  //if (game.unlockedAchievements[0] > 8 && game.minerAutoBuyMax) buyMaxMiners()  
}
updateSmall()
setInterval(updateSmall, 150)

//Large update (occurs once per second)
function updateLarge() {
  if (timeStopped) return;
  
  //Adds to the user's gold
  if (game.unlocks < 35 || game.nuclearPastaUpgradesBought[3] || (game.nuclearPastaState != 2 && game.nuclearPastaState != 5)) game.gold = game.gold.add(game.goldPerSecond.div(2))
  //Adds to the user's fire
  if (game.unlocks >= 1) game.fire = game.fire.add(game.firePerSecond.div(2))
  //Auto maxes all if the upgrade is bought
  if (game.unlockedAchievements[6] > 2 && game.fireAutoMaxAll) fireMaxAll()
  
  //Handles the platinum convert button cooldown
  if (game.platinumConvertCooldown > 0) {
    game.platinumConvertCooldown -= 0.5
    document.getElementById("platinumConvertCooldown").innerHTML = format(game.platinumConvertCooldown, 0)
    if (game.platinumConvertCooldown == 0) document.getElementById("platinumConvertButton").disabled = false
  }
  if (game.platinumUpgradesBought[4] == 1) game.platinum = game.platinum.add(game.platinumToGet.div(2))
  if (game.unlocks >= 3) game.platinum = game.platinum.add(Decimal.max(game.bestPlatinumToGet.div(20), 2))
  
  //Handles the uranium convert button cooldown
  if (game.uraniumConvertCooldown > 0) {
    game.uraniumConvertCooldown -= 0.5
    document.getElementById("uraniumConvertCooldown").innerHTML = format(game.uraniumConvertCooldown, 0)
    if (game.uraniumConvertCooldown == 0) document.getElementById("uraniumConvertButton").disabled = false
  }
  if (game.unlocks >= 7) game.uranium = game.uranium.add(Decimal.max(game.bestUraniumToGet.div(20), 1))
  
  //Handles the dragon time spending cooldown
  if (game.dragonTimeCooldown > 0) {
    game.dragonTimeCooldown -= 0.5
    document.getElementById("dragonTimeCooldown").innerHTML = format(game.dragonTimeCooldown, 0)
    if (game.dragonTimeCooldown == 0) document.getElementById("dragonSpendTimeButton").disabled = false
  }
  if (game.unlockedAchievements[6] > 0) {
    dragonSpendTime()
  }
  if (game.unlockedAchievements[10] > 0) {
    dragonFeed();
  }

  //Handles the plutonium convert button cooldown
  if (game.plutoniumConvertCooldown > 0) {
    game.plutoniumConvertCooldown -= 0.5
    document.getElementById("plutoniumConvertCooldown").innerHTML = format(game.plutoniumConvertCooldown, 0)
    if (game.plutoniumConvertCooldown == 0) document.getElementById("plutoniumConvertButton").disabled = false
  }
  if (game.unlocks >= 20) game.plutonium = game.plutonium.add(Decimal.max(game.bestPlutoniumToGet.div(20), 0))
  
  if (game.unlockedAchievements[3] > 7) {game.magic = game.magic.add(game.magicToGet.div(2))}
  else if (game.unlockedAchievements[3] > 5) {game.magic = game.magic.add(game.magicToGet.div(100))}
  magicHardcap = new Decimal("e5000000")
  if (game.tomeUpgradesBought[8] == true) magicHardcap = magicHardcap.pow(game.blueFireUpgradesBought[3].pow(0.7).mul(5).add(1))
  if (game.magic.gt(magicHardcap)) {
    game.magic = magicHardcap
    document.getElementById("magicCap").innerHTML = " (hardcapped)"
  }
  else {document.getElementById("magicCap").innerHTML = ""}
  if (game.unlocks >= 10) game.cyanSigilPower = game.cyanSigilPower.add(game.cyanSigilPowerPerSecond.div(2))
  if (game.unlocks >= 11) game.blueSigilPower = game.blueSigilPower.add(game.blueSigilPowerPerSecond.div(2))
  if (game.unlocks >= 12) game.indigoSigilPower = game.indigoSigilPower.add(game.indigoSigilPowerPerSecond.div(2))
  if (game.unlocks >= 13) game.violetSigilPower = game.violetSigilPower.add(game.violetSigilPowerPerSecond.div(2))
  if (game.unlocks >= 14) game.pinkSigilPower = game.pinkSigilPower.add(game.pinkSigilPowerPerSecond.div(2))
  if (game.unlocks >= 17) game.blueFire = game.blueFire.add(game.blueFirePerSecond.div(2))
  if (game.unlocks >= 18) game.blood = game.blood.add(game.bloodPerSecond.div(2))
  if (game.unlocks >= 21) game.redSigilPower = game.redSigilPower.add(game.redSigilPowerPerSecond.div(2))
  if (game.unlocks >= 22) game.orangeSigilPower = game.orangeSigilPower.add(game.orangeSigilPowerPerSecond.div(2))
  if (game.unlocks >= 23) game.yellowSigilPower = game.yellowSigilPower.add(game.yellowSigilPowerPerSecond.div(2))
  if (game.unlocks >= 26 && game.holyTetrahedronUpgradesBought[11]) game.holyFire = game.holyFire.add(game.holyFirePerSecond.div(2))
  if (game.holyOctahedronUpgradesBought[4]) game.holyTetrahedrons = game.holyTetrahedrons.add(0.5)
	if (game.unlocks >= 31) game.cosmicPlague = game.cosmicPlague.add(game.cosmicPlaguePerSecond.div(2))
	if (game.unlocks >= 33) {
		game.lightEssence = game.lightEssence.add(game.lightEssencePerSecond.div(2))
		game.darkEssence = game.darkEssence.add(game.darkEssencePerSecond.div(2))
	}
	if (game.unlocks >= 34) game.deathEssence = game.deathEssence.add(game.deathEssencePerSecond.div(2))
	if (game.unlocks >= 36) game.finalityEssence = game.finalityEssence.add(game.finalityEssencePerSecond.div(2))

  if (game.unlockedAchievements[5] > 3) game.uranium = game.uranium.add(game.uraniumToGet.div(2))
  if (game.unlockedAchievements[15] > 3) game.plutonium = game.plutonium.add(game.plutoniumToGet.div(2))
	game.oganesson = game.oganesson.add(game.oganessonPerSecond.div(2))
  if (game.unlockedAchievements[0] > 8 && game.minerAutoBuyMax) buyMaxMiners()
  if (game.unlockedAchievements[13] > 0) {
    game.cyanSigils = game.cyanSigils.add(game.cyanSigilsToGet.div(20))
    game.blueSigils = game.blueSigils.add(game.blueSigilsToGet.div(20))
    game.indigoSigils = game.indigoSigils.add(game.indigoSigilsToGet.div(20))
    game.violetSigils = game.violetSigils.add(game.violetSigilsToGet.div(20))
    game.pinkSigils = game.pinkSigils.add(game.pinkSigilsToGet.div(20))
  }
  if (game.unlockedAchievements[15] > 0) {
    idealTradeLevel = (game.cyanSigils.div(500000)).log10().div(0.178)
    knowledgeRewardTemp = new Decimal(1.5).pow(idealTradeLevel.sub(1))
    knowledgeRewardTemp = knowledgeRewardTemp.mul(new Decimal(2).pow(game.knowledgeUpgradesBought[0].pow(0.5)))
    if (game.tomeUpgradesBought[2] == true) knowledgeRewardTemp = knowledgeRewardTemp.mul(2)
    if (game.tomeUpgradesBought[6] == true) knowledgeRewardTemp = knowledgeRewardTemp.mul(game.totalTomes.pow(1.2).add(1))
    if (game.tomeUpgradesBought[8] == true) knowledgeRewardTemp = knowledgeRewardTemp.mul(new Decimal(1000).pow(game.blueFireUpgradesBought[5].pow(0.6)))
    if (game.holyTetrahedronUpgradesBought[7]) knowledgeRewardTemp = knowledgeRewardTemp.mul(1e150)
    if (game.holyOctahedronUpgradesBought[8]) knowledgeRewardTemp = knowledgeRewardTemp.mul("e550")
		if (game.voidMagicUpgradesBought[11] == true) knowledgeRewardTemp = knowledgeRewardTemp.mul("e12000")
		if (game.unlocks >= 33 && game.darkEssenceUpgradesBought[2].gt(0)) knowledgeRewardTemp = knowledgeRewardTemp.mul(new Decimal(10).pow(new Decimal(2).pow(game.darkEssenceUpgradesBought[2].pow(0.5)).mul(5e9)))
    knowledgeRewardTemp = knowledgeRewardTemp.div(2).floor()
    game.knowledge = game.knowledge.add(knowledgeRewardTemp)
    if (game.knowledge.gte(game.highestKnowledge)) game.highestKnowledge = game.knowledge
    document.getElementById("knowledgePerSecond").innerHTML = " (" + format(knowledgeRewardTemp, 0) + "/s)"
  }
  else {document.getElementById("knowledgePerSecond").innerHTML = ""}
	if (game.unlockedAchievements[23] > 2) {
    game.redSigils = game.redSigils.add(game.redSigilsToGet.div(2))
    game.orangeSigils = game.orangeSigils.add(game.orangeSigilsToGet.div(2))
    game.yellowSigils = game.yellowSigils.add(game.yellowSigilsToGet.div(2))
  }

  if (game.unlockedAchievements[13] > 4 && game.blueFireAutoMaxAll) blueFireMaxAll()
  if (game.unlockedAchievements[11] > 7 && game.knowledgeAutoMaxAll) knowledgeMaxAll()
  if (game.unlockedAchievements[14] > 1) buyMaxTomes()
	if (game.unlockedAchievements[21] > 7 && game.holyFireAutoMaxAll) holyFireMaxAll()
	if (game.unlockedAchievements[24] > 5 && game.plagueAutoMaxAll) plagueMaxAll()
		
	if (game.unlockedAchievements[24] > 2) planetBuyMax()
		
	if (game.unlocks == 29 && game.gold.gte("e1e5000")) {
		document.getElementById("omniverseWarning").style.display = "none"
		document.getElementsByClassName("box")[38].style.display = "block"
		addUnlock() //sets unlock to 30
	}
	
	if (game.unlockedAchievements[24] > 0) {
		game.holyTetrahedrons = game.holyTetrahedrons.add(game.holyTetrahedronsToGet.div(2))
		game.holyOctahedrons = game.holyOctahedrons.add(game.holyOctahedronsToGet.div(2))
		game.holyDodecahedrons = game.holyDodecahedrons.add(game.holyDodecahedronsToGet.div(2))
	}
	
	if (game.unlockedAchievements[24] > 9) gainMaxPasta()
	
	if (game.unlocks >= 35) {
		game.nuclearPastaCooldown -= 0.5
		if (game.nuclearPastaCooldown == 0) {
			game.nuclearPastaCooldown = 30
			setNuclearPastaState()
			game.nuclearPastaExtended = false
			document.getElementById("extendNuclearPastaButton").disabled = false
		}
		document.getElementById("nuclearPastaCooldown").innerHTML = (game.nuclearPastaCooldown < 9.5 ? "&#8202;&#8202;" : "") + format(game.nuclearPastaCooldown, 0)
	}
  
  updateSmall()
  checkAchievements()
  if (game.sigilResetterActive) sigilAutoResetter();
  if (game.unlockedAchievements[20] > 0) {
    maxAllSigilUpgrades()
    maxRedSigilUpgrades()
    maxOrangeSigilUpgrades()
    maxYellowSigilUpgrades()
  }
  
  if (!isDevVersion) {
    let lastConfirmedSave = parseInt(localStorage.getItem("dodecaLastSaved"));
    if (Date.now() - lastConfirmedSave > 60000) {
      document.getElementById("autosaveWarning").style.display = 'block';
      document.getElementById("saveErrorCode").innerHTML = getSaveErrorCode();
    } else {
      document.getElementById("autosaveWarning").style.display = 'none';
    }
  }
}
setInterval(updateLarge, 500)

function changeTab(x) {
  switch(x) {
    case 0:
      document.getElementsByClassName("box")[27].style.display = "none"
      document.getElementsByClassName("box")[17].style.display = "none"
      document.getElementsByClassName("box")[15].style.display = "none"
      document.getElementsByClassName("box")[2].style.display = "none"
      document.getElementsByClassName("box")[1].style.display = "none"
      break
    case 1:
      document.getElementsByClassName("box")[27].style.display = "none"
      document.getElementsByClassName("box")[17].style.display = "none"
      document.getElementsByClassName("box")[15].style.display = "none"
      document.getElementsByClassName("box")[2].style.display = "block"
      document.getElementsByClassName("box")[1].style.display = "none"
      break
    case 2:
      document.getElementsByClassName("box")[27].style.display = "none"
      document.getElementsByClassName("box")[17].style.display = "none"
      document.getElementsByClassName("box")[15].style.display = "none"
      document.getElementsByClassName("box")[2].style.display = "none"
      document.getElementsByClassName("box")[1].style.display = "block"
      break
    case 3:
      document.getElementsByClassName("box")[27].style.display = "none"
      document.getElementsByClassName("box")[17].style.display = "block"
      document.getElementsByClassName("box")[15].style.display = "none"
      document.getElementsByClassName("box")[2].style.display = "none"
      document.getElementsByClassName("box")[1].style.display = "none"
      break
    case 4:
      document.getElementsByClassName("box")[27].style.display = "block"
      document.getElementsByClassName("box")[17].style.display = "none"
      document.getElementsByClassName("box")[15].style.display = "none"
      document.getElementsByClassName("box")[2].style.display = "none"
      document.getElementsByClassName("box")[1].style.display = "none"
      break
    case 5:
      document.getElementsByClassName("box")[27].style.display = "none"
      document.getElementsByClassName("box")[17].style.display = "none"
      document.getElementsByClassName("box")[15].style.display = "block"
      document.getElementsByClassName("box")[2].style.display = "none"
      document.getElementsByClassName("box")[1].style.display = "none"
      break
    default:
      document.getElementsByClassName("box")[27].style.display = "none"
      document.getElementsByClassName("box")[17].style.display = "none"
      document.getElementsByClassName("box")[15].style.display = "none"
      document.getElementsByClassName("box")[2].style.display = "block"
      document.getElementsByClassName("box")[1].style.display = "none"
      break
  }
  game.currentTab = x;
}

function toggleConfirmations(x) {
  if (x==1) {
    if (game.confirmations[0]) {
      game.confirmations[0] = false
      document.getElementsByClassName("confirmationToggle")[0].style.border = "2px solid red"
    }
    else {
      game.confirmations[0] = true
      document.getElementsByClassName("confirmationToggle")[0].style.border = "2px solid #0f0"
    }
  }
  else if (x==2) {
    if (game.confirmations[1]) {
      game.confirmations[1] = false
      document.getElementsByClassName("confirmationToggle")[1].style.border = "2px solid red"
    }
    else {
      game.confirmations[1] = true
      document.getElementsByClassName("confirmationToggle")[1].style.border = "2px solid #0f0"
    }
  }
  else if (x==3) {
    if (game.confirmations[2]) {
      game.confirmations[2] = false
      document.getElementsByClassName("confirmationToggle")[2].style.border = "2px solid red"
    }
    else {
      game.confirmations[2] = true
      document.getElementsByClassName("confirmationToggle")[2].style.border = "2px solid #0f0"
    }
  }
}

function changeBackgroundPattern() {
  if (game.backgroundPatternOn) {
    game.backgroundPatternOn = false
    document.getElementById("backgroundPatternButton").innerHTML = "Background Pattern: Off"
    document.body.style.backgroundImage = "none"
  }
  else {
    game.backgroundPatternOn = true
    document.getElementById("backgroundPatternButton").innerHTML = "Background Pattern: On"
    document.body.style.backgroundImage = "url('img/back.png')"
  }
}

function addUnlock(x = 1) {
  game.unlocks += x;
  let newAch = false;
  for (let i=0; i<achievementDisplayUnlocks[game.unlocks].length; i++) {
    if (achievementDisplayUnlocks[game.unlocks][i] > achievementDisplayUnlocks[game.unlocks - x][i]) {newAch = true; break;}
  }
  if (newAch) {
    showAchievements(game.unlocks);
    achievementTabFlash();
  }  
  document.getElementById("hotkeySpan").innerHTML = generateHotkeyText();
  panToNewUnlock();
}

function lerp (start, end, amt){
  return (1 - amt) * start + amt * end;
}

function lerpColour(start, end, amt) {
  let startInt = parseInt(start,16); //convert colour string to hexdecimal
  let endInt = parseInt(end,16); //same with end colour string
  return Math.round(lerp(startInt, endInt, amt)).toString(16) //perform standard lerp, round off the result, and convert back to hexdecimal
}

lastTimePlayedUp = Date.now()
function timePlayedUp() {
	if (bigFinishPoint == 0) {
		timePlayedDiff = (Date.now() - lastTimePlayedUp) / 1000
		game.timePlayed += timePlayedDiff
		timePlayedFloor = Math.floor(game.timePlayed)
		timePlayedHours = Math.floor(timePlayedFloor / 3600)
		timePlayedMinutes = Math.floor(timePlayedFloor / 60) % 60
		timePlayedSeconds = timePlayedFloor % 60
		timeString = (timePlayedHours + ":" + ((timePlayedMinutes < 10 ? '0' : '') + timePlayedMinutes) + ":" + ((timePlayedSeconds < 10 ? '0' : '') + timePlayedSeconds))
		document.getElementById("timePlayed").innerHTML = timeString
		lastTimePlayedUp = Date.now()
	}
}

setInterval(timePlayedUp, 100)

function getSaveErrorCode() {
  //error code will indicate 3 things: 
  let _validSave = 0; //first value is whether a valid save exists in the storage.
  let _timeMatches = 0; //second value is whether the time on this save matches the tracked time.
  let _intervalStarted = 0; //Third value is whether autosave interval ever seemingly initialized.
  let lastConfirmedSave = parseInt(localStorage.getItem("dodecaLastSaved"));
  if (lastConfirmedSave > 0) _validSave = 1;
  if (lastConfirmedSave === game.lastSave) _timeMatches = 1;
  if (autosaveStarted) _intervalStarted = 1;
  let errorCode = "" + _validSave + _timeMatches + _intervalStarted;
  if (_timeMatches === 0) errorCode = errorCode + ": " + (game.lastSave - lastConfirmedSave) / 1000; // if times don't match, this appaends the number of seconds they're off by
  return errorCode;
}

function changeDragonName() {game.dragonName = document.getElementById("dragonNameBox").value}

function timeStopStart() {
  if (!timeStopped) {
    timeStopped = true
    timeStopSound.play()
    setTimeout(function() {document.body.style.filter = "grayscale(100%)"}, 500)
  }
  else {
    timeStopped = false
    timeResumeSound.play()
    setTimeout(function() {document.body.style.filter = "none"}, 500)
  }
}

//The big finale (saving this for later)

function bigFinishCheck() {
	if (game.gold.gte("ee1e12")) bigFinish()
}

bigFinishPoint = 0
function bigFinish() {
	if (bigFinishPoint == 0) {
		panTo(0,0)
		document.getElementById("navArrows").style.display = "none"
		document.getElementById("home").style.display = "none"
		for (i=0;i<5;i++) document.getElementsByClassName("tabButton")[i].style.display = "none"
		"none"
		document.getElementsByClassName("box")[1].style.display = "none" 
		document.getElementsByClassName("box")[2].style.display = "none" 
		document.getElementsByClassName("box")[15].style.display = "none" 
		document.getElementsByClassName("box")[17].style.display = "none" 
		document.getElementsByClassName("box")[27].style.display = "none"
    document.getElementById("dragonImg").src = "img/iconDragon12.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>DodecaDragon"
    document.getElementById("dragonInfo").innerHTML = ""
		document.getElementById("dragonStageCounter").innerHTML = "XII"
    game.dragonStage = 11
		timePlayedFloor = Math.floor(game.timePlayed)
		timePlayedHours = Math.floor(timePlayedFloor / 3600)
		timePlayedMinutes = Math.floor(timePlayedFloor / 60) % 60
		timePlayedSeconds = timePlayedFloor % 60
		timeString = (timePlayedHours + ":" + ((timePlayedMinutes < 10 ? '0' : '') + timePlayedMinutes) + ":" + ((timePlayedSeconds < 10 ? '0' : '') + timePlayedSeconds))
		document.getElementById("finalTime").innerHTML = timeString
	}
	for (i=0;i<47;i++) {
		document.getElementsByClassName("box")[i].style.transition = "opacity 1.5s"
		if (i!=3) document.getElementsByClassName("window-body")[i].style.display = "none"
	}
  if (bigFinishPoint >= 47) {
		setTimeout(function() {
			document.getElementById("finalDiv").style.display = "block"
			document.body.style.filter = "none"
		}, 2000)
		return;
	}
  document.body.style.filter = "grayscale(" + (bigFinishPoint * (100/47)) + "%)"
  document.body.style.backgroundImage = "none"
  document.body.style.backgroundColor = "black"
  document.getElementsByClassName("box")[46-bigFinishPoint].style.opacity = "0"
  bigFinishPoint++
  setTimeout(bigFinish, 1500/(47-bigFinishPoint) ** 0.5)
}

let dragonClicked = false
function dragonClicky(event) {
  if (event.ctrlKey) {
    document.getElementById("dragonImg").src = "img/iconDragonAlt1.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Purple robot dragon"
    document.getElementById("dragonInfo").innerHTML = "Your dragon has a strange affinity for large numbers. An easter egg for a certain someone!"
    document.getElementsByClassName("box")[3].style.backgroundColor = "#a9c"
  }
  else if (!dragonClicked) {
		dragonClicked = true
    $.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
      info = JSON.stringify(data, null, 2)
      if (info) alert("Hmm? For what reason did you click on me? You want to battle me? I'm sorry young one, but I don't think that's a wise idea.\n\nDo you feel safe, out there in " + JSON.parse(info)["city"] + "?")
    });
  }
}