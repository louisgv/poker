// Global constant for the game's configuration
const CONSTANT = {
	GIPHY: {
		URL: 'https://api.giphy.com/v1/stickers/search?',
		API_KEY: 'kD7ApWahPcBwM4UuSGk1Y99Hot9F7Dsv',
		TIMEOUT: 60 * 60 * 1000 // Re-fetch every hour
	},
	PHASE: {
		PREPARE: 'PREPARE',
		COMBAT: 'COMBAT'
	},

	TURN: {
		PLAYER: 'PLAYER_TURN',
		NPC: 'NPC_TURN',
	},

	CARD_LIMIT: 6,
	EQUIP_LIMIT: 3,
	POINT_LIMIT: 10,
	ROUND_LIMIT: 3,

	INITIAL_CARD_COUNT: 5,
	DEFAULT_THRESHOLD: 0.72,

	ELEMENT: {
		ETHER: 'ETHER',
		WATER: 'WATER',
		FIRE: 'FIRE',
		EARTH: 'EARTH',
		AERO: 'AERO',
	},

	ELEMENT_COLOR: {
		ETHER: 'linear-gradient(to right, #232526, #414345)',
		WATER: 'linear-gradient(to right, #000046, #1cb5e0)',
		FIRE: 'linear-gradient(to right, #e52d27, #b31217)',
		EARTH: 'linear-gradient(to right, #f7971e, #ffd200)',
		AERO: 'linear-gradient(to top, #fdfc47, #24fe41)'
	},

	ELEMENT_KEYWORD: {
		ETHER: 'CRYSTAL',
		WATER: 'WATER',
		FIRE: 'FIRE',
		EARTH: 'ROCK',
		AERO: 'BIRD	'
	},

	ELEMENT_HIERARCHY: {
		ETHER: ['WATER', 'FIRE'],
		WATER: ['FIRE', 'AERO'],
		FIRE: ['AERO', 'EARTH'],
		AERO: ['EARTH', 'ETHER'],
		EARTH: ['ETHER', 'WATER']
	},

	ELEMENT_NULLIFICATION: {
		ETHER: 'ETHER',
		WATER: 'FIRE',
		FIRE: 'AERO',
		AERO: 'EARTH',
		EARTH: 'WATER'
	},

	ELEMENT_POINT_QUERY: {
		FIRE: '.Fire .Number',
		WATER: '.Water .Number',
		EARTH: '.Earth .Number',
		AERO: '.Aero .Number'
	},

	ELEMENT_SCORE: {
		ETHER: 0,
		WATER: 0,
		FIRE: 0,
		EARTH: 0,
		AERO: 0
	},

	ELEMENT_HERO_IMAGE: {
		ETHER: './media/ether.png',
		WATER: './media/water.png',
		FIRE: './media/fire.png',
		EARTH: './media/earth.png',
		AERO: './media/aero.png'
	},

	ELEMENTS: [
		'WATER', 'FIRE', 'EARTH', 'AERO', 'ETHER'
	],

	TUTORIAL: [

	]
}

// Get data from a data source, using localStorage for now.
function getData(key) {
	const namespacedKey = STORENAMESPACE + key;

	return JSON.parse(localStorage.getItem(namespacedKey));
}

// Set the data in a data source, using localStorage for now.
function setData(key, value) {
	const namespacedKey = STORENAMESPACE + key;

	const result = JSON.stringify(value);

	localStorage.setItem(namespacedKey, result);

	return result;
}

const GIPHY_TABLE = {
	ETHER: [],
	WATER: [],
	FIRE: [],
	EARTH: [],
	AERO: [],
}

/*
LOCALSTORAGE data structure keys:
*/

const STORENAMESPACE = 'LEAU.WEB.';

const STOREKEY = {
	INTRODUCTION_TUTORIAL: 'INTRODUCTION_TUTORIAL',
	HERO_TUTORIAL: 'HERO_TUTORIAL',
	ELEMENT_TUTORIAL: 'ELEMENT_TUTORIAL',

	INIT_PREPARE_TUTORIAL: 'INIT_PREPARE_TUTORIAL',
	PREPARE_TUTORIAL: 'PREPARE_TUTORIAL',
	COMBAT_TUTORIAL: 'COMBAT_TUTORIAL',

	INTERFACE_TUTORIAL: 'INTERFACE_TUTORIAL',
	LICENSE_TUTORIAL: 'LICENSE_TUTORIAL',
	SAVE_DATA: 'SAVE_DATA',
	TURN: 'TURN',
	PHASE: 'PHASE',
	ROUND: 'ROUND',
	PLAYER_ROUND: 'PLAYER_ROUND',
	NPC_ROUND: 'NPC_ROUND',
	PLAYER_HERO: 'PLAYER_HERO',
	NPC_HERO: 'NPC_HERO',
	HIGH_SCORE: 'HIGH_SCORE',
	PLAYER_SCORE: 'PLAYER_SCORE',
	NPC_SCORE: 'NPC_SCORE',
	COPYRIGHT_STATE: 'COPYRIGHT_STATE',
	GIPHY_TABLE: 'GIPHY_TABLE',
	GIPHY_TIMESTAMP: 'GIPHY_TIMESTAMP'
}
