const game = {
	bankroll: 500,
	element: () => {
		game.bankAmount = document.querySelector("#bankroll");
	},
	showBankRoll: () => {
		game.bankAmount.textContent = `Bank: ${game.bankroll}`;
	},
	launch: () => {
		game.showBankRoll();
	},

	init: () => {
		game.element();
		game.launch()
	}
}

document.addEventListener('DOMContentLoaded', game.init);
