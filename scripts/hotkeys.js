function generateHotkeyText() {
  let hotkeyText = '<p style="font-weight: bold">Shift+S - manual save';
  if (game.unlocks >= 3) {
    hotkeyText += '<br><a style="color: #288">P - platinum</a>'
  }
  if (game.unlocks >= 4) {
    hotkeyText += '<br><a style="color: #90d">M - magic</a>'
  }
  if (game.unlocks >= 5) {
    hotkeyText += '<br><a style="color: #60d">1, 2, 3, 4 - activate/deactivate magic challenges</a><br><a style="color: #60d">C - enter/exit magic challenges</a>'
  }
  if (game.unlocks >= 7) {
    hotkeyText += '<br><a style="color: #282">U - uranium</a>'
  }
  if (game.unlocks >= 10) {
    hotkeyText += '<br><a style="color: #06b">Shift+1 - cyan sigils</a>, <a style="color: #00b">Shift+2 - blue sigils</a>, et cetera'
  }
  if (game.unlocks >= 16) {
    hotkeyText += '<br><a style="color: #965">T - convert max tomes</a>'
  }
  if (game.unlocks >= 18) {
    hotkeyText += '<br><a style="color: #f00">H - enter/exit hell</a>'
  }
  if (game.unlocks >= 20) {
    hotkeyText += '<br><a style="color: #25e">Shift+P - plutonium</a>'
  }
  hotkeyText += '</p>'
  return hotkeyText
}

Mousetrap.bind('shift+t', timeStopStart);
Mousetrap.bind('shift+s', save);
Mousetrap.bind('p', () => {if (game.unlocks >= 3) platinumConvert()});
Mousetrap.bind('m', () => {if (game.unlocks >= 4) magicCheck()});
Mousetrap.bind('1', () => {if (game.unlocks >= 5) {showMagicChallenge(1); activateMagicChallenge(1)}});
Mousetrap.bind('2', () => {if (game.unlocks >= 5) {showMagicChallenge(2); activateMagicChallenge(2)}});
Mousetrap.bind('3', () => {if (game.unlocks >= 5) {showMagicChallenge(3); activateMagicChallenge(3)}});
Mousetrap.bind('4', () => {if (game.unlocks >= 5) {showMagicChallenge(4); activateMagicChallenge(4)}});
Mousetrap.bind('c', () => {if (game.unlocks >= 5) enterExitMagicChallenges()});
Mousetrap.bind('u', () => {if (game.unlocks >= 7) uraniumConvert()});
Mousetrap.bind('t', () => {if (game.unlocks >= 16) buyMaxTomes()});
Mousetrap.bind('h', () => {if (game.unlocks >= 18) enterExitHell()});
Mousetrap.bind('shift+p', () => {if (game.unlocks >= 20) plutoniumConvert()});
Mousetrap.bind('shift+1', () => {if (game.unlocks >= 10) sigilCheck(1)}); //cyan
Mousetrap.bind('shift+2', () => {if (game.unlocks >= 11) sigilCheck(2)}); //blue
Mousetrap.bind('shift+3', () => {if (game.unlocks >= 12) sigilCheck(3)}); //indigo
Mousetrap.bind('shift+4', () => {if (game.unlocks >= 13) sigilCheck(4)}); //violet
Mousetrap.bind('shift+5', () => {if (game.unlocks >= 14) sigilCheck(5)}); //pink
Mousetrap.bind('shift+6', () => {if (game.unlocks >= 21) sigilCheck(6)}); //red
Mousetrap.bind('shift+7', () => {if (game.unlocks >= 22) sigilCheck(7)}); //orange
Mousetrap.bind('shift+8', () => {if (game.unlocks >= 23) sigilCheck(8)}); //yellow