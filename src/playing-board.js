// Add into the score of the player
function addScore(playingSide, {element, point}) {
	if (element === CONSTANT.ELEMENT.ETHER) {
		return;
	}

	const currentPoint = parseInt(playingSide.point[element].innerHTML);
	playingSide.point[element].innerHTML = currentPoint + point;
}

// set the hero card for the playing side
function setHero(playingSide, heroCard) {
	const heroCardEl = createCardEl(heroCard);

	playingSide.avatar.appendChild(heroCardEl);

	setEquipLimit(playingSide, CONSTANT.EQUIP_LIMIT);
}

// Check if playing side have card on hand
function playingSideCanPlayCard({hand}) {
	return hand.children.length > 0;
}

// Check if the playing side can draw card
function playingSideCanDraw({hand}){
	return hand.children.length < CONSTANT.CARD_LIMIT;
}

// Check if the playing side can equip more card
function playingSideReachedEquipLimit({equip}){
	return equip.children.length >= CONSTANT.EQUIP_LIMIT;
}

// Add the Flip card to target element
function addFlip(targetEl) {
	targetEl.classList.add("Flip");
}

// Remove the Flip class from target element
function removeFlip(targetEl) {
	targetEl.classList.remove("Flip");
}

// Add a card to the playing side's hand
function playingSideDrawCard({hand}, storeKey) {
	const {element} = getData(storeKey);

	const point = getRandomInt(CONSTANT.POINT_LIMIT) + 1;

	const card = getRandomCard(element, point);

	const cardEl = createCardEl(card, onCardPlayed);

	hand.appendChild(cardEl);
}

// Equip a card from hand
function playingSidePlayCard(playingSide, cardEl) {
	playingSide.equip.appendChild(cardEl);

	addScore(playingSide, cardEl.card);
}
