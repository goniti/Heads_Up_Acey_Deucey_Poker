const game = {
	bankroll: 500,
	cards: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Knave', 'Queen', 'King', 'As'],

	elements: () => {
		bankAmount = document.querySelector('#bankroll')
		buttonPlay = document.querySelector('#bet-play')
		buttonPlayAgain = document.querySelector('#bet-again')
		formBet = document.querySelector('#bet-form')
		cardLeft = document.querySelector('#card-min')
		cardRight = document.querySelector('#card-max')
		cardMiddle = document.querySelector('#card-guessed')
	},
	randomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	},
	getTwoNumbers: (min, max) => {
		let number1 = game.randomInteger(min, max)
		let number2 = game.randomInteger(min, max)

		if (number1 == number2) {
			number2 = game.randomInteger(min, max)
		} else {
			return {
				min: Math.min(number1, number2),
				max: Math.max(number1, number2),
				random: '?',
			}
		}
	},
	displayCards: () => {
		cardLeft.className = 'board__card'
		cardLeft.textContent = game.valuesCards.min
		cardLeft.classList.add(
			`board__card--${game.cards[game.valuesCards.min]}`
		)
		cardRight.className = 'board__card'
		cardRight.textContent = game.valuesCards.max
		cardRight.classList.add(
			`board__card--${game.cards[game.valuesCards.max]}`
		)

	},
	ShowHideButtons: () => {
		buttonPlay.addEventListener('click', () => {
			buttonPlay.style.display = 'none'
			formBet.style.display = 'block'
		})
		buttonPlayAgain.addEventListener('click', () => {
			buttonPlayAgain.style.display = 'none'
			formBet.style.display = 'block'
		})
		formBet.addEventListener('submit', (event) => {
			formBet.style.display = 'none'
			buttonPlayAgain.style.display = 'block'
			event.preventDefault()
		})
	},
	showBankRoll: () => {
		bankAmount.textContent = `Bank: ${game.bankroll}`
	},
	launch: () => {
		let minValue = 0
		let maxValue = game.cards.length - 1
		game.valuesCards = game.getTwoNumbers(minValue, maxValue)
		game.displayCards()
		game.ShowHideButtons()
		game.showBankRoll()
	},
	init: () => {
		game.elements()
		game.launch()
	},
}

document.addEventListener('DOMContentLoaded', game.init)
