const heroSelectionOverlayEl = document.querySelector('#HeroSelectionOverlay');

// Callback handle to log the selected hero and start the main game
function onHeroSelected(playerHeroCard) {
  heroSelectionOverlayEl.style.display = "none";

	playerHeroCard.data.info.pop();

	setData(STOREKEY.PLAYER_HERO, playerHeroCard);

  playerSetHero(playerHeroCard);

	// document.body.style.background = CONSTANT.ELEMENT_COLOR[playerHeroCard.element]

  const npcHeroCard = getRandomCard();

	npcHeroCard.data.info = [
		`HERO CARD`,
		`Higher chance of drawing ${npcHeroCard.element} card`
	]

	npcHeroCard.image = CONSTANT.ELEMENT_HERO_IMAGE[npcHeroCard.element]

	setData(STOREKEY.NPC_HERO, npcHeroCard);

  npcSetHero(npcHeroCard);
}

// Spawn all of the hero selection cards
function spawnHeroSelectionCards() {
	const heroCardContainerEl = createElementWithId('div', 'HeroCardContainer');

	heroSelectionOverlayEl.innerHTML = `<h1>Choose your hero card</h1>`;

	heroSelectionOverlayEl.appendChild(heroCardContainerEl);

	return new Promise(function(resolve, reject) {

		CONSTANT.ELEMENTS.map((element) => {
			const background = CONSTANT.ELEMENT_COLOR[element];

			const card = new Card({ element, image : CONSTANT.ELEMENT_HERO_IMAGE[element] },
				{ info: [
					`HERO CARD`,
					`Higher chance of drawing ${element} card`,
					`Beats ${CONSTANT.ELEMENT_HIERARCHY[element].join(' and ')} in rock paper scisor`
				] });

			const elmCardEl = createCardEl(card, () => {
				onHeroSelected(card);
				resolve();
			});

			heroCardContainerEl.appendChild(elmCardEl);
		})

	});
}
