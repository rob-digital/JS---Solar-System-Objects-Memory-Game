

document.addEventListener('DOMContentLoaded' , () => {
  const cardArray = [
    {
      name: 'sun',
      img: 'images/sun.jpg'
    },
    {
      name: 'moon',
      img: 'images/moon.jpg'
    },
    {
      name: 'jupiter',
      img: 'images/jupiter.jpg'
    },
    {
      name: 'saturn',
      img: 'images/saturn.png'
    },
    {
      name: 'mars',
      img: 'images/mars.jpg'
    },
    {
      name: 'neptun',
      img: 'images/neptun.jpg'
    },
    {
      name: 'asteroid',
      img: 'images/asteroid.jpg'
    },
    {
      name: 'pluto',
      img: 'images/pluto.jpg'
    },
    {
      name: 'uranus',
      img: 'images/uranus.jpg'
    },
     {
      name: 'mercury',
      img: 'images/mercury.jpg'
    }, 
     {
      name: 'venus',
      img: 'images/venus.jpg'
    },
    {
      name: 'comet',
      img: 'images/comet.jpg'
    }, 
    {
      name: 'sun',
      img: 'images/sun.jpg'
    },
    {
      name: 'moon',
      img: 'images/moon.jpg'
    },
    {
      name: 'jupiter',
      img: 'images/jupiter.jpg'
    },
    {
      name: 'saturn',
      img: 'images/saturn.png'
    },
    {
      name: 'mars',
      img: 'images/mars.jpg'
    },
    {
      name: 'neptun',
      img: 'images/neptun.jpg'
    },
    {
      name: 'asteroid',
      img: 'images/asteroid.jpg'
    },
    {
      name: 'pluto',
      img: 'images/pluto.jpg'
    },
    {
      name: 'uranus',
      img: 'images/uranus.jpg'
    },
     {
      name: 'mercury',
      img: 'images/mercury.jpg'
    }, 
     {
      name: 'venus',
      img: 'images/venus.jpg'
    },
    {
      name: 'comet',
      img: 'images/comet.jpg'
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  console.log(' :', cardArray.sort(() => 0.5 - Math.random()));

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  function createBoard() {

      cardArray.forEach((el, index) => {
          //for (var [key, value] of cardArray) {
          let card = document.createElement('img')
          card.setAttribute('src', 'images/qm2.jpg')
          card.setAttribute('data-id', index)
          grid.appendChild(card)
          
          // console.log(index,' :', card);
        card.addEventListener('click', flipCard)

     })
  }

// check for match 
function checkForMatch( ) {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]

    if(cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src' , 'images/white.png')
      cards[optionTwoId].setAttribute('src' , 'images/white.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src' , 'images/qm2.jpg')
      cards[optionTwoId].setAttribute('src' , 'images/qm2.jpg')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations'
    }

}

// flip card
function flipCard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
    if ( cardsChosen.length === 2 ) {
      setTimeout(checkForMatch, 500)
    }
}

  createBoard()

})