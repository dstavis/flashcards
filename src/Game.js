const { prototype } = require('mocha');
const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = null;
    this.deck;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  setup() {
    const cards = prototypeQuestions.map( (cardData) => {
      return new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer) 
    })
    this.deck = new Deck(cards);
    this.currentRound = new Round(this.deck)
  }

  start() {
    this.setup()

    this.printMessage(this.deck, this.currentRound)
    this.printQuestion(this.currentRound)
  }

}

module.exports = Game;