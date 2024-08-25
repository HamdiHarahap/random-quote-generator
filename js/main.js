import { api, apiKey } from './api.js'

const category = [
	'age',
	'alone',
	'amazing',
	'anger',
	'art',
	'attitude',
	'best',
	'beauty',
	'birthday',
	'cool',
	'computers',
	'dad',
	'dreams',
	'failure',
	'education',
	'family',
	'fear',
	'funny',
	'friendship',
	'good',
	'inspirational',
]

async function getQuotes() {
	const randomIndex = Math.floor(Math.random() * category.length)
	const apiUrl = api + category[randomIndex]

	const response = await fetch(apiUrl, {
		headers: {
			'X-Api-Key': apiKey,
		},
	})

	let data = await response.json()

	const filteredData = data.filter((quote) => {
		const wordCount = quote.quote.split(' ').length
		return wordCount <= 30
	})

	const randomFilteredIndex = Math.floor(Math.random() * filteredData.length)
	const selectedQuote = filteredData[randomFilteredIndex]

	document.querySelector('.author').innerHTML = selectedQuote.author
	document.querySelector('.category').innerHTML = selectedQuote.category
	document.querySelector('.quote').innerHTML = `"${selectedQuote.quote}"`
	document.querySelector('.container').style.display = 'flex'
}

const generate = document.querySelector('.generate-button')
generate.addEventListener('click', function () {
	getQuotes()
})

const copyButton = document.querySelector('.copy')
copyButton.addEventListener('click', function () {
	const quoteText = document.querySelector('.quote').textContent

	navigator.clipboard.writeText(quoteText).then(() => {
		alert('Quote copied to clipboard')
	})
})

const share = document.querySelector('.share')
share.addEventListener('click', function () {})
