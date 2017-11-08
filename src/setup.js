// setup the game and restore the state of previous game if exist
async function setup() {

	await Promise.all([
		// warmUpGiphyTable(),
		introTutorial()
	])

	setData(STOREKEY.ROUND, 0);

	info("PICK HERO");

	await Promise.all([
		spawnHeroSelectionCards(),
		heroTutorial()
	])

	await interfaceTutorial();

	await licenseTutorial();

	await startGame();
}

window.addEventListener('load', setup);
