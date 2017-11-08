const player = getPlayingSide('#PlayerSide')

// Check if player equip exceeds limit
function playerReachedEquipLimit() {
	return playingSideReachedEquipLimit(player)
}

// Check if player hand is less than limit
function playerCanDraw() {
	return playingSideCanDraw(player);
}

// Handle event when player clicked on a card
async function onCardPlayed(event) {
	event.preventDefault()
	if(isNPCTurn() || isCombatPhase()) {
		return;
	}

	this.removeEventListener('click', onCardPlayed);

	playingSidePlayCard(player, this);

	await prepareTutorial();

	switchTurn();
}

// Set the hero card for the player
function playerSetHero(heroCard) {
	setHero(player, heroCard);
}

// Set score for an element of the player
function playerSetScore(card) {
	addScore(player, card);
}

// Draw a card and append it to the player's hand
function playerDrawCard() {
	playingSideDrawCard(player, STOREKEY.PLAYER_HERO);
}
