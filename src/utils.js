// Helper method to create an element with specified class
function createElementWithClass(type, classname) {
	const el = document.createElement(type);
	el.setAttribute("class", classname);
	return el;
}

// Helper method to create an element with specified class
function createElementWithId(type, id) {
	const el = document.createElement(type);
	el.setAttribute("id", id);
	return el;
}

// Utility to set the equipment limit label
function setEquipLimit(playingSide, limit) {
	const equipmentLabelEl = playingSide.side.querySelector('.EquipmentLabel h2');

	equipmentLabelEl.innerHTML += limit;
}

// Utility method to get the playing side elements from the DOM
function getPlayingSide(sideId) {
	const side = document.querySelector(sideId);

	const hand = side.querySelector('.Hand');

	const equip = side.querySelector('.Equipment');

	const stats = side.querySelector('.Stats');

	stats.innerHTML = defaultStatsStructure();

	const point = {}

	CONSTANT.ELEMENTS.map((el) => {
		const query = CONSTANT.ELEMENT_POINT_QUERY[el];
		if (query) {
			point[el] = stats.querySelector(query);

			point[el].innerHTML = '0';
		}
	})

	const avatar = stats.querySelector('.Avatar');

	return {
		side,
		hand,
		equip,
		stats,
		point,
		avatar
	};
}

// Check if current phase is prepare
function isPreparePhase() {
	return getData(STOREKEY.PHASE) === CONSTANT.PHASE.PREPARE;
}

// Check if current phase is combat
function isCombatPhase() {
	return getData(STOREKEY.PHASE) === CONSTANT.PHASE.COMBAT;
}

// Return true if it is player's turn
function isPlayerTurn() {
	const currentTurn = getData(STOREKEY.TURN);

	return currentTurn === CONSTANT.TURN.PLAYER;
}

// Return true if it is npc's turn
function isNPCTurn() {
	return !isPlayerTurn();
}

// Get an integer between 0 and max-1
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

// Get a random element in an array
function getRandomInArray(array) {
	return array[getRandomInt(array.length)]
}

// Remove all child of an element
function removeAllChild(el) {
	while(el.firstChild) {
		el.removeChild(el.firstChild);
	}
}

// Return a promise as to how long one should wait
function wait(duration) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve();
		}, duration);
	});
}

// Check and increment a number in localStorage accordingly
function checkAndIncrement(key) {
	const current = getData(key);

	const next = current !== null
		? (current + 1)
		: 0;

	return setData(key, next);
}

// Toggling the show class within the duration
async function toggleShow(targetEl, duration) {
	targetEl.classList.add("Show");

	await wait(duration);

	targetEl.classList.remove("Show");
}

// Return the default structure of stats group element
function defaultStatsStructure() {
	return `
		<div class="Fire Point">
			<div class="Number"></div>
			<label> <span class="oi" data-glyph="fire"></span> Fire</label>
		</div>
		<div class="Water Point">

			<div class="Number"></div>
			<label> <span class="oi" data-glyph="droplet"></span> Water</label>
		</div>
		<div class="Avatar FlexCenter"></div>
		<div class="Earth Point">

			<div class="Number"></div>
			<label><span class="oi" data-glyph="map-marker"></span> Earth</label>
		</div>
		<div class="Aero Point">

			<div class="Number"></div>
			<label><span class="oi" data-glyph="lightbulb"></span>Aero</label>
		</div>
	`
}
