#!/usr/bin/env node

const keys = 	[
		'WATER', 'FIRE', 'EARTH', 'AERO', 'ETHER'
	];

const data = {
	"ETHER": ["https://media1.giphy.com/media/3ov9jDblR6W2d6NfJC/100w.gif", "https://media0.giphy.com/media/C9OAIR7RoJHHO/100w.gif", "https://media1.giphy.com/media/3oEjHItZBaUaSL8ABa/100w.gif", "https://media1.giphy.com/media/3o6Zt1i4DTF49KTN72/100w.gif", "https://media1.giphy.com/media/7akzRYGqAsgFO/100w.gif", "https://media1.giphy.com/media/10A8Ho8Vjpcbw4/100w.gif", "https://media0.giphy.com/media/l378oSO2dTDLrCYda/100w.gif", "https://media2.giphy.com/media/Rk8D8WnVkllmw/100w.gif", "https://media1.giphy.com/media/l4FGkfE9ELLwqo6s0/100w.gif", "https://media2.giphy.com/media/jPSeFrEDCdjBC/100w.gif"],
	"WATER": ["https://media3.giphy.com/media/81ibCJOlpBtnO/100w.gif", "https://media3.giphy.com/media/jG2lYVv626nxS/100w.gif", "https://media1.giphy.com/media/eMhgCGfx613Jm/100w.gif", "https://media3.giphy.com/media/14alWliY4jxbBS/100w.gif", "https://media1.giphy.com/media/26BRAojlUnm9hXC9y/100w.gif", "https://media0.giphy.com/media/l0MYwYuQfHS3zJNo4/100w.gif", "https://media0.giphy.com/media/3o7aDcWRhaYdDerGgg/100w.gif", "https://media0.giphy.com/media/hMjigpUaorZpm/100w.gif", "https://media3.giphy.com/media/3o7aD8X07rNA6cZb0Y/100w.gif", "https://media1.giphy.com/media/o11K4lZQKiOYw/100w.gif"],
	"FIRE": ["https://media3.giphy.com/media/d3ML8uo39Q8jxwEE/100w.gif", "https://media3.giphy.com/media/6Hsdux8Igg5ig/100w.gif", "https://media0.giphy.com/media/26BRt5hkD6hLzTl3q/100w.gif", "https://media2.giphy.com/media/l1J9QZXasDUhbX0fC/100w.gif", "https://media2.giphy.com/media/26BRx71hqRexBe7Wo/100w.gif", "https://media1.giphy.com/media/3o7aD3RScly3FyZwQg/100w.gif", "https://media2.giphy.com/media/l46CmRhQlMBRQUfDO/100w.gif", "https://media3.giphy.com/media/3oKIPkHXpUP8lIO0AU/100w.gif", "https://media0.giphy.com/media/xUPGcGO8JJLMfEhYis/100w.gif", "https://media1.giphy.com/media/uB6eLycBCOl68/100w.gif"],
	"EARTH": ["https://media1.giphy.com/media/4BJCvMoLPePq8/100w.gif", "https://media1.giphy.com/media/JWXSWIOQ0nUk0/100w.gif", "https://media2.giphy.com/media/oEyl6yCC5D9kI/100w.gif", "https://media1.giphy.com/media/jvxoEFeBA3rBm/100w.gif", "https://media0.giphy.com/media/yQNrqRVTblEek/100w.gif", "https://media0.giphy.com/media/l4FGvoyD37aTN57fW/100w.gif", "https://media2.giphy.com/media/KgBBvfXC05JVC/100w.gif", "https://media3.giphy.com/media/TYi0y890JDMyI/100w.gif", "https://media3.giphy.com/media/lvE2fs12TJ3Rm/100w.gif", "https://media0.giphy.com/media/JFCt9VrybGgTe/100w.gif"],
	"AERO": ["https://media2.giphy.com/media/rtRflhLVzbNWU/100w.gif", "https://media0.giphy.com/media/W8fWP13NK8og/100w.gif", "https://media3.giphy.com/media/tCJfibBuyK1Gw/100w.gif", "https://media0.giphy.com/media/ghiMEnnnIE5xe/100w.gif", "https://media3.giphy.com/media/iRrWh8qeRda92/100w.gif", "https://media0.giphy.com/media/10i8NSey2PFvP2/100w.gif", "https://media3.giphy.com/media/qel5YMmm9Wa1q/100w.gif", "https://media3.giphy.com/media/ZZGxZS56Kb8MU/100w.gif", "https://media3.giphy.com/media/7j2hfyeVcDtf2/100w.gif", "https://media3.giphy.com/media/tTG9nDcehvHHi/100w.gif"]
}

keys.map((item) => {
	console.log(item);
})
