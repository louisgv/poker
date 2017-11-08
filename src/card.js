// Base class for a card
class Card {
	constructor({element, image, point} = {
		element: CONSTANT.ELEMENT.ETHER,
		image: null,
		point: 0
	}, data = {}) {
		this.element = element;
		this.image = image;
		this.point = point;
		this.background = CONSTANT.ELEMENT_COLOR[element];
		this.data = data;
	}
}

// Get a random card
function getRandomCard(
	heroElement = getRandomInArray(CONSTANT.ELEMENTS),
	point = 0,
	threshold = CONSTANT.DEFAULT_THRESHOLD
) {
	const prob = Math.random();

	const element = prob < threshold
		? heroElement
		: getRandomInArray(CONSTANT.ELEMENTS)

	// REVIEW: When DIFFY is up, better put it here:
	// const image = point > 0 && point <= CONSTANT.POINT_LIMIT
	// 	?	GIPHY_TABLE[element][point - 1]
	// 	: null;

	const image = point > 0 && point <= CONSTANT.POINT_LIMIT
		?	`./data/${element}/${point-1}.gif`
		: null;

	return new Card({element, point, image},
		{ info : [`Nullifies ${CONSTANT.ELEMENT_NULLIFICATION[element]}`]});
}

// Generate a card element
function createCardEl(card = new Card(), clickCallback=()=>{}, classname = '') {
	const cardEl = createElementWithClass('div', 'Card ' + classname);

	const cardContainerEl = createElementWithClass('div', 'CardContainer');

	const cardFaceEl = createElementWithClass('div', 'CardFace');

	const cardBackEl = createElementWithClass('div', 'CardBack');

	if (card.point > 0) {
		const cardPointEl = createElementWithClass('div', 'CardPoint');

		cardPointEl.innerHTML = card.point;

		cardFaceEl.appendChild(cardPointEl);
	}

	if (card.image) {
		const cardImageEl = createElementWithClass('img', 'CardImage');

		cardImageEl.src = card.image;

		cardFaceEl.appendChild(cardImageEl);
	}

	cardFaceEl.style.background = card.background;

	cardContainerEl.appendChild(cardFaceEl);

	cardContainerEl.appendChild(cardBackEl);

	cardEl.appendChild(cardContainerEl);

	cardEl.addEventListener('click', clickCallback);
	cardEl.card = card;

	const tooltipEl = createElementWithClass('div', 'CardTooltip')

	tooltipEl.innerHTML = `<p><b>Element</b>: ${card.element}</p>`;

	tooltipEl.innerHTML += card.point
		? ` <p> <b>Point</b>: ${card.point} </p>`
		: ''

	tooltipEl.innerHTML += card.data.info
		? card.data.info.map(inf => `<p>${inf}</p>`).join('')
		: ''

	cardEl.appendChild(tooltipEl);

	return cardEl;
}
