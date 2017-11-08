// Showing the tutorial sequence
async function introTutorial() {
	// If player is first timer
	if(getData(STOREKEY.INTRODUCTION_TUTORIAL)) {
		return;
	}

	info("INTRO");

	await dialog(`
		Welcome to L'eau.web
		<br/>
		Seems like you are new here.
		`)

	await dialog(`
		My name is Lebot and I will be your opponent in this game.
		<br/>
		Disclaimer: I am a random bot.
		`)

	await dialog(`
		This is a turn-based push your luck card game.
		<br/>
		Winner of 2 rounds wins the game.
		`)

	await dialog(`
			First, let us pick our hero card!
		`, "LET'S DO THIS!")

	setData(STOREKEY.INTRODUCTION_TUTORIAL, true)
}


// Tutorial for the hero choosing
async function heroTutorial() {
	if(getData(STOREKEY.HERO_TUTORIAL)) {
		return;
	}

	await dialog(`
		The cards you and I choose will be compared
		<br/>
	 	to select the first player.
		`)

	setData(STOREKEY.HERO_TUTORIAL, true)
}

// Tutorial fo the element
async function elementTutorial() {
	if(getData(STOREKEY.ELEMENT_TUTORIAL)) {
		return;
	}

	await dialog(`
		There are 5 types of card:
		<br/>
		WATER, FIRE, AERO, EARTH
		<br/>
		and ETHER
	`)

	setData(STOREKEY.ELEMENT_TUTORIAL, true)
}

// Init Prepare tutorial
async function initPrepareTutorial() {
	const storekey = STOREKEY.INIT_PREPARE_TUTORIAL;
	if(getData(storekey)) {
		return;
	}

	await dialog(`
		Each round in the game has two phases: <br/>
		PREPARE and COMBAT
	`)

	await dialog(`
		In the PREPARE phase, we will take turn to either
		<br/>
		<b>Draw a card</b> from the central deck
		<br/>
			or
		<br/>
		<b>Equip a card</b> from our hand.
		`)

	setData(storekey, true)
}

// Tutorial for prepare phase
async function prepareTutorial() {
	const storekey = STOREKEY.PREPARE_TUTORIAL;
	if(getData(storekey)) {
		return;
	}

	await dialog(`
		There are ${CONSTANT.EQUIP_LIMIT} equipment slots.
		<br/>
		The first player to fill up their slots
		<br/>
		will initiate the COMBAT phase.
		`)

	await dialog(`
		The goal of the PREPARE phase is to accumulate <br/>
		as many point as possible before COMBAT.
		`)

	setData(storekey, true)
}

// Tutorial on each phases of the game
async function combatTutorial() {
	const storekey = STOREKEY.COMBAT_TUTORIAL;
	if(getData(storekey)) {
		return;
	}

	await dialog(`
		In the COMBAT phase, our final score will be calculated using
		<br/>
	 	a 3-stage "nullification" process.
		`)

	showInterface()
	await dialog(`
		You can read more about this process
		<br/>
		in the rule book.
	`)

	await dialog(`
		Whoever has the highest score after the combat phase
		<br/>
		wins the round.
		`)

	await dialog(`
		Score are accumulated and carried over to the next round.
		<br/>
		So plan your move!
		`, 'Cool beans!')

	setData(storekey, true)
}

// Interface tutorial
async function interfaceTutorial(){
	if(getData(STOREKEY.INTERFACE_TUTORIAL)) {
		return;
	}

	info('LIKE THIS')

	await dialog(`
		There will be notification popping up
		<br/>
		with useful information.
		`)

	showInterface()
	await dialog(`
		The detailed rule can be read in
		<br/>
		the rulebook located on
		<br/>
		the left side bar.
		`)
	setData(STOREKEY.INTERFACE_TUTORIAL, true)
}


// License notice tutorial
async function licenseTutorial(){
	if(getData(STOREKEY.LICENSE_TUTORIAL)) {
		return;
	}
	await dialog(`
		You will not see the tutorial again until you clean up your localstorage.
		<br/>
		Please agree to the GPLv3 license before copying this work.
		`, 'I ACCEPT');

	await dialog(`
		Thank you for playing and I hope you enjoy the game.
		`, 'START GAME');

	setData(STOREKEY.LICENSE_TUTORIAL, true)
}
