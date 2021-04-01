const game = {
	bankroll: 500,
	elements: () => {
		bankAmount = document.querySelector('#bankroll')
		buttonPlay = document.querySelector('#bet-play')
		buttonPlayAgain = document.querySelector('#bet-again')
		formBet = document.querySelector('#bet-form')
		cardLeft = document.querySelector('.board__card--left')
		cardRight = document.querySelector('.board__card--right')
		cardMiddle = document.querySelector('.board__card--middle')
	},
	distributionOfCard: () => {
		cardLeft.className === ' board__card--${min}'
		cardRight.className === ' board__card--${max}'
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
		game.ShowHideButtons()
		game.showBankRoll()
	},
	init: () => {
		game.elements()
		game.launch()
	},
}

document.addEventListener('DOMContentLoaded', game.init)
