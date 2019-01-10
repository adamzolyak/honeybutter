//doesn't run until the webpage is already loaded

//this example works with http://www.tinkurlab.com/

console.log('Waffle.io Sugar is running!')

//Element by Id
let card = document.getElementById('site-title')

console.log('card', card)

card.style['background-color'] = '#FF00FF'

//Element by Class
let cards = document.getElementsByClassName('entry-title')

console.log('cards', cards)

for (card of cards) {
  console.log('for card...')
  card.style['background-color'] = '#FFFF00'
}
