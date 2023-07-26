//const arrays aren't actually constant but shhh
//I am constantly suffering
const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"]

//any DOM element with an id in this array will prevent panning when it is the active element
const panResistantFields = ["dragonNameBox", "knowledgeLevelRange", "knowledgeLevelInput", "sigilResetterType", "sigilResetterMode", "sigilResetterAmount"];

const fireUpgradeInitialCosts = [0, 50, 100, 100, 500, 500, 2e7]
const fireUpgradeBase = [0, 1.8, 2, 1.4, 1.5, 2.5, 5]
const magicUpgradeCosts = [2, 3, 8, 12, 30, 100, 300, 1500, 4000, 20000, 100000, 400000, 1e8, 3e8, 1.5e9, 3e9, 1e11, 4e12, 1e13, 1e16]
const darkMagicUpgradeCosts = ["e110", "e125", "e165", "e240", "e285", "e320", "e360", "e450", "e120000", "e140000", "e3e8", "e4.5e8", "e5e8", "e6e8", "e6.75e8", "e8e8", "e1.2e9", "e1.45e9", "e1.6e9", "e1.65e9"]
const voidMagicUpgradeCosts = ["e1.25e10", "e1.4e10", "e1.55e10", "e1.65e10", "e2e10", "e3e10", "e4e10", "e6.5e10", "e9.6e10", "e1.2e11", "e2.25e11", "e3.4e11", "e4.6e11", "e5.25e12", "e2e13", "e4.25e13", "e3.75e16"]
const sigilColours = ["cyan", "blue", "indigo", "violet", "pink", "red", "orange", "yellow"]
const sigilColoursMode1 = ["red", "orange", "yellow"]
const sigilResetterModes = ["Amount","Gold","Time"]
const sigilResetterModesFull = ["Potential Sigil Amount", "Gold Amount", "Seconds Since Reset"]
const knowledgeMultipliers = [450, 112.5, 18.75, 10, 1]
const tomeUpgradeCosts = [1, 1, 2, 2, 4, 20, 75, 175, 500, 1000, 1500, 2250, 2800, 7500]
const blueFireUpgradeInitialCosts = [0, 500, 1000, 50000, 5e7, 1.5e8, 1e11]
const blueFireUpgradeBase = [0, 1.8, 2, 2.5, 1.8, 2.2, 2]
const hellLayerNames = ["limbo", "lust", "gluttony", "greed", "wrath", "heresy", "violence", "fraud", "treachery"]
const hellLayerEffects = ["-<a style='color: #fd0'>Gold</a> gain is severely reduced (log(x)^5)<br>-<a style='color: #bff'>Platinum</a> gain is ^0.1<br>-<a style='color: #60d'>Magifold</a> amount is always 1<br>-<a style='color: #8f8'>Uranium</a> gain is ^0.1",
"-<a style='color: #fd0'>Gold</a> gain is severely reduced (log(x)^2)<br>-<a style='color: #f80'>Fire</a> gain is severely reduced (log(x))<br>-<a style='color: #bff'>Platinum</a> gain is ^0.01<br>-<a style='color: #60d'>Magifold</a> amount is always 1<br>-<a style='color: #8f8'>Uranium</a> gain is ^0.01<br>-<a style='color: #06b'>Cyan sigil</a> upgrade 3 is useless",
"-<a style='color: #fd0'>Gold</a> gain is severely reduced (log(x))<br>-<a style='color: #f80'>Fire</a> gain is severely reduced (log(x))<br>-<a style='color: #bff'>Platinum</a> gain is severely reduced (log(x))<br>-<a style='color: #60d'>Magifold</a> amount is always 1<br>-<a style='color: #8f8'>Uranium</a> gain is severely reduced (log(x))<br>-<a style='color: #06b'>Cyan sigil</a> upgrade 3 is useless",
"-<a style='color: #fd0'>Gold</a> gain is severely reduced (log(x)^0.5)<br>-<a style='color: #f80'>Fire</a> gain is always 0<br>-<a style='color: #bff'>Platinum</a> gain is severely reduced (log(x))<br>-<a style='color: #60d'>Magifold</a> amount is always 1<br>-<a style='color: #8f8'>Uranium</a> gain is severely reduced (log(x))<br>-<a style='color: #06b'>Cyan sigil</a> upgrade 3 is useless",
"-<a style='color: #fd0'>Gold</a> gain is severely reduced (log(x)^0.2)<br>-<a style='color: #f80'>Fire</a> gain is always 0<br>-<a style='color: #bff'>Platinum</a> gain is severely reduced (log(x)^0.5)<br>-<a style='color: #90d'>Magic</a> amount is severely reduced (log(x))<br>-<a style='color: #60d'>Magifold</a> amount is always 1<br>-<a style='color: #8f8'>Uranium</a> gain is severely reduced (log(x)^0.5)<br>-<a style='color: #06b'>Cyan sigil</a> upgrade 3 is useless"
]
const holyTetrahedronUpgradeCosts = [1, 1, 1, 1, 2, 2, 2, 5, 5, 15, 50, 2000, 50000]
const holyOctahedronUpgradeCosts = [1, 1, 1, 2, 4, 2, 50, 750, 25000]
const holyDodecahedronUpgradeCosts = [1, 2, 6, 12, 1000, 150000]
const holyFireUpgradeInitialCosts = [0, 500, 1000, 10000, 50000, 1e7, 1e45]
const holyFireUpgradeBase = [0, 1.8, 2, 3, 2, 2.5, 3]
const plagueUpgradeInitialCosts = [0, 25, 100, 100000, 1e6, 1e13]
const plagueUpgradeBase = [0, 2, 2.5, 3, 5, 3]
const hypergodNames = ["OMNIVERSAL HYPERGOD I:<br>KARUTH", "OMNIVERSAL HYPERGOD II:<br>TOMI", "OMNIVERSAL HYPERGOD III:<br>DOLKHOR", "OMNIVERSAL HYPERGOD IV:<br>BELKIKO", "OMNIVERSAL HYPERGOD V:<br>SHOU", "OMNIVERSAL HYPERGOD VI:<br>COANGRUATOR", "OMNIVERSAL HYPERGOD VII:<br>EXILTIK", "OMNIVERSAL HYPERGOD VIII:<br>Tom", "OMNIVERSAL HYPERGOD IX:<br>ALUSTRO", "OMNIVERSAL HYPERGOD X:<br>IKOR", "OMNIVERSAL HYPERGOD XI:<br>WITHLORN", "OMNIVERSAL HYPERGOD XII:<br>FINALIKUS"]
const hypergodDefeatCosts = ["ee20000", "ee160000", "ee400000", "ee1e6", "ee2.4e6", "ee1e7", "ee4e7", "ee7e8", "ee2e9", "ee1.5e10", "ee1e11", "ee7.5e11"]
const hypergodText = ["Your ravenous growth is causing destruction in the omniverse, creature. As the high<br>&#8202;&#8202;ruler of this section of the omniverse, I command you to cease immediately.", "&#8202;&#8202;End your mindless chaos and destruction this instant! You have no idea what you're doing to the fabric of reality!", "Another greedy soul. You will be disposed of, like all those that came before you.", "I wish you would reconsider your actions. ...I suppose it's too late for that now though. The fighting won't stop until either you're gone or all of us are.", "Ogghh. You dare wake me from my slumber? This better be important, mortal creature.", "&#8202;&#8202;Nuh uh!", "You! Can you even begin to fathom the utter destruction you've caused!? The fabric of spacetime is imploding, trillions upon trillions dead under your ignorant foot, and for<br>&#8202;&#8202;what!? I implore you to cease this, organic being!", "&#8202;&#8202;Hey mate, not cool, what you're doing. You better back off, bud.", "You think you can surpass my power? I will crush you like the insignificant being you<br>&#8202;&#8202;are!", "&#8202;&#8202;Bringer of destruction. It is clear I cannot stop you, but I have no choice but to try.<br>&#8202;&#8202;Because there's no telling what will happen to the omniverse if you continue.", "You've killed off my bretheren, but the worst is yet to come for you! I'll show you the true power of the hypergods!", "&#8202;&#8202;Well, I think that's that. I am the last remaining hypergod. Destroyer of gods, ruler of<br>&#8202;&#8202;everything, the omniverse is now yours and yours alone. Farewell."]
const lightEssenceUpgradeInitialCosts = [0, 100, 600, 3000]
const lightEssenceUpgradeBase = [0, 2, 3, 3]
const darkEssenceUpgradeInitialCosts = [0, 100, 1000, 10000]
const darkEssenceUpgradeBase = [0, 2, 3, 3]
const deathEssenceUpgradeInitialCosts = [0, 1000, 10000, 200000, 1e7, 1e40]
const deathEssenceUpgradeBase = [0, 2, 3, 3, 2.5, 4]
const finalityEssenceUpgradeInitialCosts = [0, 1000, 4000, 1e15, 1e20]
const finalityEssenceUpgradeBase = [0, 2, 5, 4, 4]
const nuclearPastaNames = ["Gnocchi", "Spaghetti", "Waffles", "Lasagna", "Antispaghetti", "Antignocchi"]
const nuclearPastaPositiveEffects = ["Boost to light/dark essence gain", "Boost to death essence gain", "Boost to cosmic plague gain", "Boost to supercluster effect", "Boost to oganesson gain"]
const nuclearPastaNegativeEffects = ["&#8202;&#8202;Zero death essence gain", "&#8202;&#8202;Gold amount does not increase", "Zero dark/light essence gain", "Zero cosmic plague gain", "&#8202;&#8202;Gold amount does not increase"]
const nuclearPastaUpgradeCosts = ["ee7.5e6", "ee1.2e8", "ee2.5e8", "ee7.5e8"]

const achievementNames = [
  //Gold
  ["Starting strong", "Growing stronger", "The heap", "Motherlode", "BEZOS BEZOS BEZOS", "Unending mound of cash", "Multiversal", "Endless realm of coins", "Loaded", "Mega-loaded (???)", "Sbiisics", "On my dime!"],
  //Fire
  ["Spicy", "Burning hands", "The great fire", "Towering inferno", "Hell pit", "Carolina reapers", "Tartarus", "Pandemonium", "Infernal overlord", "Unfortunate events", "Global warming", "The end of everything"],
  //Platinum
  ["Alchemagoria", "Jeweller", "Putting in the work", "Magnum opus", "Simple chemistry", "Mirror polish", "Silver skyscrapers", "Advanced chemistry", "God of transmutation", "Platisynthesis", "Mystical barista", "Completing the work"],
  //Magic
  ["Funny wizard hat", "Sorcery", "Magiccery!", "THE BIGGER HAT", "Thaumaturgy", "Spells galore", "Reshape the Earth", "Unlimited potential", "Star shatterer", "Endless grimoires", "Void tapping", "Threshold memories"],
  //Magifolds
  ["4-dimensional", "10-dimensional", "Superstring theory", "Infinitely folding", "Incomprehensible", "Megafolds", "GIGAFOLDS", "Spacetime origami", "Nonagon Infinity", "Holonomy breakdown", "Simplex complex", "Basket case"],
  //Uranium
  ["Ionizing", "Radiating", "Neutralizing", "Terrifying", "Devastating", "Decaying", "Annihilating", "Obliterating", "Glowing", "Reducing", "Inspiring", "Ending"],
  //Cyan sigils
  ["Chromatic", "Chaotic", "Colorific", "Catastrophic", "Catatonic", "Chromatic II", "Chaotic II", "Colorific II", "Catastrophic II", "Catatonic II", "Chromatic III", "Chaotic III"],
  //Blue sigils
  ["Bichromatic", "Basic", "Biologic", "Barbaric", "Balsamic", "Bichromatic II", "Basic II", "Biologic II", "Barbaric II", "Balsamic II", "Bichromatic III", "Basic III"],
  //Indigo sigils
  ["Interdynamic", "Idealistic", "Isotropic", "Isotonic", "Idyllic", "Interdynamic II", "Idealistic II", "Isotropic II", "Isotonic II", "Idyllic II", "Interdynamic III", "Idealistic III"],
  //Violet sigils
  ["Volcanic", "Volumetric", "Vitriolic", "Voltaic", "Vinic", "Volcanic II", "Volumetric II", "Vitrolic II", "Voltaic II", "Vinic II", "Volcanic III", "Volumetric III"],
  //Pink sigils
  ["Panchromatic", "Psychotic", "Pathogenic", "Particularistic", "Platonic", "Panchromatic II", "Psychotic II", "Pathogenic II", "Particularistic II", "Platonic II", "Panchromatic III", "Psychotic III"],
  //Knowledge
  ["Big brain moment", "Deep thought", "Immaterialistic", "Planning ahead", "I conject", "Megamind", "Incremental IQ", "Shared Brainpower", "Think tank", "Intelligence singularity", "The thinker", "Epistemological"],
  //Tomes
  ["History locked away", "The mystical bookshelf", "Necronomicon", "Fully legible", "Biblical", "Rune rooms", "Library of babel", "Recursive knowledge", "No longer lost", "Athenaeum", "Bibliotech", "The face book"],
  //Blue fire
  ["Burning cold", "Frostbite", "Tundra", "The burn that cures", "Hell frozen over", "Absolute Zero", "What's cooler than being cool?", "Kamchatka", "Superfluid", "Ice V", "You're pretty cool", "Endless blue flame"],
  //Blood
  ["Coagulation", "Brutal", "Rivers of red", "Ultraviolent", "Turbo killer", "When the imposter is sus!", "Hellstar Remina", "Fresh", "Hemocytes", "Bloody brilliant", "Vampirism", "Unending bloodlust"],
  //Plutonium
  ["Ionizing II", "Radiating II", "Neutralizing II", "Terrifying II", "Devastating II", "Decaying II", "Annihilating II", "Obliterating II", "Glowing II", "Reducing II", "Inspiring II", "Ending II"],
  //Red sigils
  ["Rhythmic", "Realistic", "Robotic", "Romantic", "Relativistic", "Rhythmic II", "Realistic II", "Robotic II", "Romantic II", "Relativistic II", "Rhythmic III", "Realistic III"],
  //Orange sigils
  ["Organic", "Orthographic", "Overenergetic", "Orthochromatic", "Overchromatic", "Organic II", "Orthographic II", "Overenergetic II", "Orthochromatic II", "Overchromatic II", "Organic III", "Orthographic III"],
  //Yellow sigils
  ["Yellow", "Very yellow", "Extremely yellow", "Super yellow", "Hyper yellow", "Yellow II", "Very yellow II", "Extremely yellow II", "Super yellow II", "Hyper yellow II", "Yellow III", "Very yellow III"],
  //Holy tetrahedrons
  ["｢Made in Heaven｣", "Resets all the way down", "Cloudy with a chance of numbers", "God rays", "Heaven sent", "Convex complex", "Irreducable", "Non-Euclidean", "Pyraminx", "Alien architecture", "Caution: sharp", "Tetramazing"],
  //Holy octahedrons
  ["Dual", "Empyrean", "Ramiel", "Precisely the point", "Flesh prison", "Octal", "Magic 8-hedron", "Octagintillionaire", "No stop signs", "Unexplainable", "Unidentified floating and spinning object", "Octerrific"],
  //Holy fire
  ["White hot", "God's wrath", "Archangels", "Paradiso", "Orbital laser", "Sunfire", "10 trillion degrees", "Pistol star", "Plasmatic", "Quarks and Gluons", "Burn everything", "What is it you see in the glow?"],
  //Holy dodecahedrons
  ["Hey, it's like the name of the game! :O", "Dodecadamned", "Dodecadimensional", "Dodecalculus", "Dodecadeadly", "Dodecadangerous", "Dodecalculated", "Dodechaotic", "Dodecadivine", "Dodecadestructive", "Dodecades of work", "Dodecomplete"],
	//Planets
	["Mr. Worldwide", "The system", "Spacetime jumping", "Extreme acceleration", "Super Jupiter", "Brown dwarf", "Dyson spheres", "Dark matter pockets", "Non-Euclidean planets", "Fat Earth theory", "Type IV civilisation", "SuperUltraHyperverse"],
	//Omniversal hypergods
	["This is the final achievement row.", "You have come an incredibly long way.", "Your desire for power is unending.", "All who have tried to stop you have failed.", "There mustn't be long to go now.", "How large really is the omniverse?", "You begin to feel the laws of physics break down around you.", "What drives you?", "What is your final goal? Do you ever intend to stop?", "There is only so much of reality to claim.", "When all is said and done...", "C'est fini"]
]
const achievementRequirements = [
  //Gold
  ["100", "10000", "1e6", "1e12", "1e20", "1e30", "1e100", "1e250", "1e1000", "1e3000", "1e10000", "1e100000"],
  //Fire
  ["1000", "1e6", "1e12", "1e18", "1e30", "1e100", "1e250", "1e1000", "1e4000", "1e20000", "1e500000", "e5e7"],
  //Platinum
  ["100", "100000", "2.5e6", "1e8", "1e12", "1e20", "1e30", "1e100", "1e250", "1e1000", "1e20000", "1e150000"],
  //Magic
  ["1", "5", "50", "1000", "100000", "1e8", "1e20", "1e100", "1e500", "1e10000", "1e50000", "1e1000000"],
  //Magifolds
  ["10000", "1e6", "1e20", "1e30", "1e50", "1e250", "1e1000", "1e2500", "1e10000", "1e500000", "1e2500000", "e2e7"],
  //Uranium
  ["100", "100000", "1e7", "5e8", "1e10", "1e100", "1e1000", "1e25000", "1e1000000", "e1e8", "e1e12", "e1e15"],
  //Cyan sigils
  ["1", "5", "20", "100", "500", "1000000", "1e12", "1e25", "1e100", "1e250", "1e500", "1e1000"],
  //Blue sigils
  ["1", "5", "20", "100", "500", "1000000", "1e12", "1e25", "1e100", "1e250", "1e500", "1e1000"],
  //Indigo sigils
  ["1", "5", "20", "100", "500", "1000000", "1e12", "1e25", "1e100", "1e250", "1e500", "1e1000"],
  //Violet sigils
  ["1", "5", "20", "100", "500", "1000000", "1e12", "1e25", "1e100", "1e250", "1e500", "1e1000"],
  //Pink sigils
  ["1", "5", "20", "100", "500", "1000000", "1e12", "1e25", "1e100", "1e250", "1e500", "1e1000"],
  //Knowledge
  ["1", "10", "250", "10000", "1e9", "1e30", "1e100", "1e300", "1e750", "1e1500", "1e3000", "1e6000"],
  //Tomes
  ["1", "10", "100", "1000", "5000", "15000", "30000", "75000", "150000", "350000", "750000", "2.5e6"],
  //Blue fire
  ["1000", "1e6", "1e20", "1e35", "1e60", "1e100", "1e250", "1e600", "1e1500", "1e3000", "1e20000", "1e100000"],
  //Blood
  ["1", "10000", "5e7", "1e10", "1e20", "1e30", "1e100", "1e150", "1e200", "1e500", "1e1000", "1e3000"],
  //Plutonium
  ["100", "10000", "1e6", "1e20", "1e30", "1e100", "1e500", "1e1000", "1e2500", "1e15000", "1e50000", "1e250000"],
  //Red sigils
  ["1", "20", "1000", "100000", "1e8", "1e12", "1e20", "1e50", "1e150", "1e500", "1e1200", "1e6000"],
  //Orange sigils
  ["1", "20", "1000", "100000", "1e8", "1e12", "1e20", "1e50", "1e150", "1e500", "1e1200", "1e6000"],
  //Yellow sigils
  ["1", "20", "1000", "100000", "1e8", "1e12", "1e20", "1e50", "1e150", "1e500", "1e1200", "1e6000"],
  //Holy tetrahedrons
  ["1", "3", "10", "50", "2500", "1000000", "1e9", "1e18", "1e30", "1e80", "1e250", "1e1000"],
  //Holy octahedrons
  ["1", "3", "10", "50", "2500", "1000000", "1e9", "1e18", "1e30", "1e80", "1e250", "1e1000"],
  //Holy fire
  ["1000", "100000", "1e12", "1e20", "1e50", "1e100", "1e300", "1e1000", "1e5000", "1e20000", "1e100000", "1e500000"],
  //Holy dodecahedrons
  ["1", "3", "10", "50", "2500", "1000000", "1e9", "1e18", "1e30", "1e80", "1e250", "1e1000"],
	//Planets
	["1", "5", "10", "25", "75", "250", "500", "1200", "4000", "10000", "25000", "100000"],
	//Omniversal hypergods
	["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
]
const achievementRewards = {
  //gold
  ach0x4: "Unlock Max All button for platinum upgrades!",
  ach0x8: "Unlock autobuyer for miners! Also allows you to keep 1 miner when resetting.",
  ach0x10: "Unlock Buy Max buttons for magic and dark magic upgrades!",
  //magic
  ach3x0: "Unlock Buy Max buttons for fire upgrades!",
  ach3x1: "Unlock Max All button for fire upgrades!",
  ach3x4: "Keep all platinum upgrades on magic reset!",
  ach3x5: "Gain 1% of potential magic per second!",
  ach3x7: "Gain 100% of potential magic per second!",
  //uranium
  ach5x2: "Unlock Max All button for uranium upgrades!",
  ach5x3: "Automatically gain uranium without resetting!",
  //cyan sigils
  ach6x0: "Automatically spend time with your dragon when available! Also allows you to enter challenges while on cooldown.",
  ach6x1: "Feeding your dragon reduces scores by ^0.5 instead of resetting them!",
  ach6x2: "Automatically max all fire upgrades!",
  //blue sigils
  ach7x0: "Feeding your dragon no longer reduces challenge scores!",
  ach7x1: "Gain challenge score without entering challenges! Also, sigil resets no longer reduce challenge scores.",
  ach7x2: "Keep platinum upgrades on sigil resets!",
  //indigo sigils
  ach8x0: "Keep uranium upgrades on magic and sigil resets!",
  //violet sigils
  ach9x0: "Unlock the ability to pet your dragon! :O",
  //pink sigils
  ach10x0: "Automatically feed your dragon when available!",
  ach10x1: "Unlock Max All button for sigil upgrades!",
  ach10x2: "Keep all magic and dark magic upgrades on sigil reset!",
  //knowledge
  ach11x0: "Unlock some automation for sigil resets!",
  ach11x7: "Automatically max all knowledge upgrades!",
  //Tomes
  ach12x2: "Unlock Max All button for knowledge upgrades!",
  //Blue fire
  ach13x0: "Gain 10% of potential sigils per second!",
  ach13x2: "Unlock Buy Max buttons for blue fire upgrades!",
  ach13x4: "Unlock Max All and Auto Max All for blue fire upgrades!",
  //Blood
  ach14x1: "Automatically gain max tomes, at no cost!",
  //Plutonium
  ach15x0: "Automatically gain knowledge, at no cost!",
  ach15x3: "Automatically gain plutonium without resetting!",
  //Yellow Sigils
  ach18x2: "An option for auto resetter to cycle only Red/Orange/Yellow sigils",
  //Holy tetrahedrons
  ach19x0: "Unlock Max All button for plutonium upgrades!",
  ach19x2: "Unlock Buy Max button for tome upgrades!",
  ach19x4: "Keep tome upgrades on holy resets!",
  //Holy octahedrons
  ach20x0: "Automatically max all sigil upgrades!",
  ach20x1: "Keep alchemy upgrades on holy resets!",
  //Holy fire
  ach21x3: "Unlock Buy Max buttons for holy fire upgrades!",
  ach21x7: "Unlock Max All and Auto Max All for holy fire upgrades!",
  //Holy dodecahedrons
  ach22x0: "Keep magic and dark magic upgrades on holy resets!",
	//Planets
  ach23x2: "Gain 100% of potential R-O-Y sigils per second!",
	ach23x5: "Unlock Buy Max for planet forming!",
	ach23x6: "Unlock Buy Max buttons for cosmic plague upgrades!",
	//Omniversal hypergods
	ach24x0: "Gain 100% of potential polyhedrons per second! And a 5x plague gain multiplier.",
	ach24x1: "Another 5x plague gain multiplier :)",
	ach24x2: "Automatically buy max planets! And a 10x oganesson gain multiplier.",
	ach24x3: "A 5x light/dark essence gain multiplier!",
	ach24x4: "A 10x death essence gain multiplier!",
	ach24x5: "Unlock Max All and Auto Max All for cosmic plague upgrades!",
	ach24x6: "Unlock Max Alls for light, dark and death essence upgrades!",
	ach24x7: "Unlock Max All for finality essence upgrades!",
	ach24x8: "A 100x finality essence gain multiplier!",
	ach24x9: "Automatically gain max nuclear pasta! And another 100x finality essence gain multiplier.",
	ach24x10: "A 10,000,000x finality essence gain multiplier!",
	ach24x11: "Unlock something.",
}
const achievementResources = [
  {name:"gold", shortName:"&#8202;&#8202;Gold", internalName:"gold"},
  {name:"fire", shortName:"&#8202;&#8202;Fire", internalName:"fire"},
  {name:"platinum", shortName:"Platinum", internalName:"platinum"},
  {name:"magic", shortName:"Magic", internalName:"magic"},
  {name:"magifolds", shortName:"Magifolds", internalName:"magifolds"},
  {name:"uranium", shortName:"Uranium", internalName:"uranium"},
  {name:"cyan sigils", shortName:"C-sigils", internalName:"cyanSigils"},
  {name:"blue sigils", shortName:"&#8202;&#8202;B-sigils", internalName:"blueSigils"},
  {name:"indigo sigils", shortName:"&#8202;&#8202;I-sigils", internalName:"indigoSigils"},
  {name:"violet sigils", shortName:"&#8202;&#8202;V-sigils", internalName:"violetSigils"},
  {name:"pink sigils", shortName:"P-sigils", internalName:"pinkSigils"},
  {name:"knowledge", shortName:"&#8202;&#8202;Knwlege", internalName:"knowledge"},
  {name:"total tomes", shortName:"&#8202;&#8202;Tomes", internalName:"totalTomes"},
  {name:"blue fire", shortName:"&#8202;&#8202;B-fire", internalName:"blueFire"},
  {name:"blood", shortName:"Blood", internalName:"blood"},
  {name:"plutonium", shortName:"Plutonium", internalName:"plutonium"},
  {name:"red sigils", shortName:"R-sigils", internalName:"redSigils"},
  {name:"orange sigils", shortName:"O-sigils", internalName:"orangeSigils"},
  {name:"yellow sigils", shortName:"&#8202;&#8202;Y-sigils", internalName:"yellowSigils"},
  {name:"holy tetrahedrons", shortName:"Tetra", internalName:"holyTetrahedrons"},
  {name:"holy octahedrons", shortName:"Octa", internalName:"holyOctahedrons"},
  {name:"holy fire", shortName:"H-fire", internalName:"holyFire"},
  {name:"holy dodecahedrons", shortName:"&#8202;&#8202;Dodeca", internalName:"holyDodecahedrons"},
	{name:"planets", shortName:"&#8202;&#8202;Planets", internalName:"planets"},
	{name:"defeated hypergods", shortName:"&#8202;&#8202;Omni", internalName:"hypergodsDefeated"}
]
const achievementColours = ["#fd0", "#f80", "#bff", "#90d", "#60d", "#8f8", "#06b", "#00b", "#40b", "#60b", "#b0b", "#987", "#965", "#66f", "#f00", "#25e", "#b00", "#b60", "#bb0", "#6dd", "#d6d", "#ff9", "#d66", "#62b", "#44d"]
//this array tells the display code when each achievement should be visible. each child array corresponds to a value of game.unlocks
const achievementDisplayUnlocks = [
  [3,2,1], //unlock 0 - start
  [3,2,1], //unlock 1 - dragon
  [3,2,1], //unlock 2 - fire
  [4,3,2,1], //unlock 3 - platinum
  [6,4,3,5,1], //unlock 4 - magic
  [6,4,3,5,1], //unlock 5 - magic challenges
  [7,5,4,6,2,1], //unlock 6 - more magic upgrades
  [8,6,6,7,3,1], //unlock 7 - uranium
  [10,6,7,8,4,3,1], //unlock 8 - more platinum and uranium
  [10,6,7,8,4,3,1], //unlock 9 - dark magic upgrades
  [10,6,7,9,4,4,3,1], //unlock 10 - cyan sigils
  [11,7,8,9,5,4,4,4,1], //unlock 11 - blue sigils
  [12,8,8,10,6,5,5,5,5,1], //unlock 12 - indigo sigils
  [12,8,9,11,6,5,5,5,5,5,1], //unlock 13 - violet sigils
  [12,9,9,11,7,5,5,5,5,5,5,1], //unlock 14 - pink sigils
  [12,10,10,12,8,6,6,6,6,6,6,4,1], //unlock 15 - knowledge
  [12,10,10,12,9,7,7,7,7,7,7,5,2,1], //unlock 16 - tomes
  [12,12,12,12,12,10,8,8,8,8,8,7,4,2,1], //unlock 17 - blue fire
  [12,12,12,12,12,11,9,9,9,9,9,7,5,3,2,1], //unlock 18 - blood
  [12,12,12,12,12,11,9,9,9,9,9,7,5,3,2,1], //unlock 19 - more dark magic upgrades
  [12,12,12,12,12,12,10,10,10,10,10,8,5,4,3,3,1], //unlock 20 - plutonium
  [12,12,12,12,12,12,10,10,10,10,10,8,5,5,4,3,2,1], //unlock 21 - red sigils
  [12,12,12,12,12,12,10,10,10,10,10,8,5,5,4,3,3,2,1], //unlock 22 - orange sigils
  [12,12,12,12,12,12,11,11,11,11,11,9,6,6,6,4,4,4,3,1], //unlock 23 - yellow sigils
  [12,12,12,12,12,12,12,12,12,12,12,10,7,7,6,4,4,4,4,4,1], //unlock 24 - holy tetrahedrons
  [12,12,12,12,12,12,12,12,12,12,12,11,8,8,7,5,5,5,5,4,2,1], //unlock 25 - holy octahedrons
  [12,12,12,12,12,12,12,12,12,12,12,12,9,9,7,7,6,6,6,6,4,2,1], //unlock 26 - holy fire
  [12,12,12,12,12,12,12,12,12,12,12,12,9,9,8,8,6,6,6,7,5,3,1], //unlock 27 - void magic upgrades
  [12,12,12,12,12,12,12,12,12,12,12,12,11,10,9,9,8,7,7,8,7,4,5,1], //unlock 28 - holy dodecahedrons
	[12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,11,11,11,11,10,11,5], //unlock 29 - planets
	[12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,11,11,11,11,10,11,5,1], //unlock 30 - Omniversal hypergods
	[12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,7,3], //unlock 31 - Cosmic plague
	[12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,8,4], //unlock 32 - Oganesson
	[12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,9,5], //unlock 33 - Light and dark essences
	[12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,10,6], //unlock 34 - Death essence
	[12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,8], //unlock 35 - Nuclear pasta
	[12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,10], //unlock 36 - Finality essence
	[12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12], //unlock 37 - Finality cubes
]

//stores position and unlock data for each display tab. structure is [x, y, unlock]
const tabData = {
  main: [0, 0, 0],
  dragon: [0,330,1],
  fire: [-365, 365, 2],
  platinum: [320, 100, 3],
  magic: [0, -287, 4],
  magicUpgrades: [-365, 235, 4],
  magicChallenges: [390, -365, 5],
  uranium: [595, 100, 7],
  darkMagic: [-730, -130, 9],
  cyanSigils: [365, 515, 10],
  blueSigils: [730, 515, 11],
  indigoSigils: [1095, 515, 12],
  violetSigils: [365, 830, 13],
  pinkSigils: [730, 830, 14],
  sigilAutomation: [1095, 830, 14],
  knowledge: [-440, 850, 15],
  tomes: [-905, 850, 16],
  blueFire: [-780, 365, 17],
  blood: [-50, -650, 18],
  plutonium: [870, 100, 20],
  redSigils: [365, 1145, 21],
  orangeSigils: [730, 1145, 22],
  yellowSigils: [1095, 1145, 23],
  holyTetrahedrons: [830, -250, 24],
  holyTetrahedronTree: [830, -680, 24],
  holyOctahedrons: [1295, -250, 25],
  holyOctahedronTree: [1295, -520, 25],
  holyFire: [-1245, 365, 26],
  voidMagic: [-1095, -130, 27],
  holyDodecahedrons: [1760, -250, 28],
  holyDodecahedronTree: [1760, -520, 28],
	planets: [-515, -650, 29],
	omniversalHypergods: [390, -780, 30],
	cosmicPlague: [-1345, 850, 31],
	oganesson: [1145, 100, 32],
	lightEssence: [1440, 100, 33],
	darkEssence: [1755, 100, 33],
	deathEssence: [1437, 615, 34],
	nuclearPasta: [-980, -650, 35],
	finalityEssence: [1755, 615, 36],
	finalityCubes: [1541, 1105, 37],
}

//this is what I want the render function to see
/*
const tabPositions = [
  {
    main: [0, 0] //unlock 0 - dragon is handled with special case in render
  },
  {
    fire: [-365, 365] //unlock 1
  },
  {
    //etc
  }
]
*/