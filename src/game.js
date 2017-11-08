const centralDeck = document.querySelector('#CentralDeck');

// Start the game
async function startGame() {

	for(let i = 0; i < CONSTANT.INITIAL_CARD_COUNT; i++) {
		playerDrawCard();
		npcDrawCard();
	}
	resetWinningRound()

	await newRound(getFirstTurnPlayer());
}

// Reset the winning count for each player
function resetWinningRound() {
	setData(STOREKEY.PLAYER_ROUND, 0);
	setData(STOREKEY.NPC_ROUND, 0);
}

// Check if game is over
async function isGameOver() {

	const playerRoundCount = getData(STOREKEY.PLAYER_ROUND);
	const npcRoundCount = getData(STOREKEY.NPC_ROUND);

	if (playerRoundCount === null || npcRoundCount === null) {
		resetWinningRound()
		return false;
	}

	if (playerRoundCount > 1) {
		resetWinningRound()

		await dialog("CONGRATULATION <br/> You Won!", "Another game!");

		return true;
	}

	if (npcRoundCount > 1) {
		resetWinningRound()

		await dialog("GAMEOVER <br/> I Won!", "Another game!");

		return true;
	}

	return false;
}

// Start a new round
async function newRound(firstPlayer) {
	const currentRound = checkAndIncrement(STOREKEY.ROUND);

	const endGame = await isGameOver();

	if (endGame) {

		await announce('New game starting...');

		window.location.reload(true);

		return;
	}

	await announce('New round starting...');

	info("ROUND " + currentRound, 1800);

	await	announce('PREPARE PHASE')

	setTurn(firstPlayer);

	setData(STOREKEY.PHASE, CONSTANT.PHASE.PREPARE);
}

// Implementing a 5-way rock paper scisor game to determine the first
// to make a move
function getFirstTurnPlayer() {

	const playerHero = getData(STOREKEY.PLAYER_HERO);

	const npcHero = getData(STOREKEY.NPC_HERO);

	// If the npc element hiearchy has the player's element, this means npc's element
	// beats player's element
	return (CONSTANT.ELEMENT_HIERARCHY[npcHero.element].includes(playerHero.element))
		? CONSTANT.TURN.NPC
		: CONSTANT.TURN.PLAYER;
}

// Handle event when player click on the drawing deck
function onCentralDeckClicked() {
	if (isCombatPhase()) {
		return announce("We are in combat phase!");
	}

	if (!isPlayerTurn() ) {
		return announce("It's my turn!");
	}

  if (!playerCanDraw()) {
    return announce("Card limit reached!");
  }

  playerDrawCard();
  switchTurn();
}

// npc behavior lies here
async function npcMakeMove() {
	if (isCombatPhase()) {
		return;
	}

	// If it can draw, assigns a random to it drawing chance
	const willDraw = npcCanDraw()
		? Math.random()
		: 0;

	// If it can play card, assigns a random to its playing chance
	const willPlayCard = npcCanPlayCard()
		? Math.random()
		: 0;

	// Based on the decision, it either draw or play
	if (willDraw > willPlayCard) {
		npcDrawCard();
		await info("I DRAW", 1800);
	} else {
		npcPlayCard();
		await info("I EQUIP", 1800);
	}
}

// Check if the combat phase should commence
function shouldcombat () {
	return playerReachedEquipLimit() || npcReachedEquipLimit();
}

// Handle switching turn and invoke npc's logic
function switchTurn() {
	if (shouldcombat()) {
		combat();
	}

	if (isCombatPhase()) {
		return;
	}

	// Check if it is npc turn
	const isCurrentlyNPCTurn = isNPCTurn();

	// Switch turn
  const nextTurn = isCurrentlyNPCTurn
    ? CONSTANT.TURN.PLAYER
    : CONSTANT.TURN.NPC

	setTurn(nextTurn);
}

// Set current turn, as well as animating NPC behavior
async function setTurn(turn) {
	setData(STOREKEY.TURN, turn);

	// If after set turn, it is npc turn
	if (isNPCTurn()) {
		info("MY TURN");
		await announce("It's my turn");
		document.body.style.cursor = "progress";

		// info("THINKING", 1800);

		await npcMakeMove();

		switchTurn();

		document.body.style.cursor = "default";
	} else {

		info("YOUR TURN");
		await announce("It's your turn");
		await initPrepareTutorial();
	}
}

centralDeck.addEventListener('click', onCentralDeckClicked)
