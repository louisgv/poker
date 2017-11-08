const npc = getPlayingSide('#NPCSide')

// Hide npc's stats
function npcHideStats() {
	removeFlip(npc.stats)
}

// Reveal npc's stats
function npcRevealStats() {
	addFlip(npc.stats)
}

// Hide equipment cards
function npcHideEquipment() {
	removeFlip(npc.equip)
}

// Reveal npc's equip card
function npcRevealEquipment() {
	addFlip(npc.equip)
}

// Check if npc Equip exceed limit
function npcReachedEquipLimit() {
	return playingSideReachedEquipLimit(npc)
}

// Check if npc Hand is below limit
function npcCanDraw(){
	return playingSideCanDraw(npc);
}

// Check if npc has card on hand
function npcCanPlayCard() {
	return playingSideCanPlayCard(npc);
}

// Draw a card into the npc's hand
function npcDrawCard() {
	playingSideDrawCard(npc, STOREKEY.NPC_HERO);
}

// Set the hero card for the player
function npcSetHero(heroCard) {
  setHero(npc, heroCard);
}

// Play a card from the npc's hand
function npcPlayCard() {
	const cardEl = getRandomInArray(npc.hand.children);

	playingSidePlayCard(npc, cardEl);
}

// Set score for an element of the npc
function npcSetScore(card) {
	addScore(npc, card);
}
