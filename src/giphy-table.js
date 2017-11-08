// Re-fetch all the necessary giphy stamp for each element
// and cache them
async function renewGiphyTable() {
	// Fetch all the giphy related to each element
	const results = await Promise.all(CONSTANT.ELEMENTS.map((element) => {
		const query = CONSTANT.ELEMENT_KEYWORD[element];

		const url = getGiphyURL(query, CONSTANT.POINT_LIMIT)
		return fetch(url);
	}))

	// Grab its json
	const resultsJSON = await Promise.all(results.map(r => r.json()));

	// Assign the json element into the giphy table
	resultsJSON.map(({data}, i) => {

		const element = CONSTANT.ELEMENTS[i];

		GIPHY_TABLE[element] = data.map(d => d.images.fixed_width_small.url)
	})

	setData(STOREKEY.GIPHY_TABLE, GIPHY_TABLE);
	setData(STOREKEY.GIPHY_TIMESTAMP, new Date());
}

// Pre-populate the giphy table for ease of access later
async function warmUpGiphyTable() {
	const giphyTimeString = getData(STOREKEY.GIPHY_TIMESTAMP);

	const giphyTimestamp = giphyTimeString
		? new Date(giphyTimeString).getTime()
		: 0;

	// If giphy cached data seems outdated
	if (Date.now() - giphyTimestamp > CONSTANT.GIPHY.TIMEOUT)
		// Return after fetching a new giphy table
		return await renewGiphyTable();

	// else revive the cached table
	const giphyTable = getData(STOREKEY.GIPHY_TABLE);

	CONSTANT.ELEMENTS.map((element) => {
		GIPHY_TABLE[element] = giphyTable[element]
	})
}


// Return a giphy url to search the query with the limit
function getGiphyURL(query, limit) {
	const {
		URL,
		API_KEY
	} = CONSTANT.GIPHY;
	return URL +
		"api_key=" + API_KEY +
		"&q=" + query +
		"&limit=" + limit;
}
