const game = {
	bankroll: 500,
	cards: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Knave', 'Queen', 'King', 'As'],
	minValue: 0,
	maxValue: 12,

	elements: () => {
		bankAmount = document.querySelector('#bankroll')
		buttonPlay = document.querySelector('#bet-play')
		buttonPlayAgain = document.querySelector('#bet-again')
		formBet = document.querySelector('#bet-form')
		betInput = document.querySelector('#bet-input')
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
		}
		return {
			min: Math.min(number1, number2),
			max: Math.max(number1, number2),
			random: '?',
		}
	},
	randomizeCard: () => {
		game.valuesCards = game.getTwoNumbers(game.minValue, game.maxValue)
	},
	displayCards: () => {
		cardLeft.className = 'board__card'
		cardLeft.classList.add(
			`board__card--${game.cards[game.valuesCards.min]}`
		)
		cardRight.className = 'board__card'
		cardRight.classList.add(
			`board__card--${game.cards[game.valuesCards.max]}`
		)
		cardMiddle.className = 'board__card board__card--undefined'
	},
	turnOverGuessingCard: () => {
		game.valuesCards.random = game.randomInteger(
			game.minValue,
			game.maxValue
		)
		cardMiddle.className = `board__card board__card--${
			game.cards[game.valuesCards.random]
		}`
	},
	handleActionPlayer: () => {
		buttonPlay.addEventListener('click', () => {
			buttonPlay.style.display = 'none'
			formBet.style.display = 'block'
		})
		buttonPlayAgain.addEventListener('click', () => {
			buttonPlayAgain.style.display = 'none'
			formBet.style.display = 'block'
			game.launch()
		})
		formBet.addEventListener('submit', (event) => {
			formBet.style.display = 'none'
			buttonPlayAgain.style.display = 'block'
			game.betValue = event.target[0].value
			game.handleResult()
			event.preventDefault()
		})
	},
	handleResult: () => {
		game.turnOverGuessingCard()
		let cardMin = game.valuesCards.min
		let cardMax = game.valuesCards.max
		let cardRandom = game.valuesCards.random

		if (cardRandom > cardMin && cardRandom < cardMax) {
			game.bankroll = game.bankroll + (game.betValue * 2)
			game.showResult("bravo vous avez gagner ! la somme est doublé")
		} else if (cardRandom === cardMin || cardRandom === cardMax) {
			game.bankroll = game.bankroll + (game.betValue * 3)
			game.showResult("bravo vous avez gagner ! la somme est tripplé")
		} else {
			game.bankroll = game.bankroll - game.betValue
			game.showResult("Perdu ! votre Bank diminue")
		}
		game.showBankRoll()
	},
	showResult: (message) => {

			console.log(message);

	},
	showBankRoll: () => {
		bankAmount.textContent = `Bank: ${game.bankroll}`
	},
	launch: () => {
		game.randomizeCard()
		game.displayCards()
		game.showBankRoll()
	},
	init: () => {
		game.elements()
		game.launch()
		game.handleActionPlayer()
	},
}

document.addEventListener('DOMContentLoaded', game.init)
