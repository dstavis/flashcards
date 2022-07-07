const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    
    if (!turn.evaluateGuess() ) {
      this.incorrectGuesses.push(turn.card.id)
    }
    const feedback = turn.giveFeedback();
    
    this.turns++;
    this.currentCard = this.deck[this.turns];

    return feedback;
  }

  calculatePercentCorrect() {
    return ( (this.turns - this.incorrectGuesses.length) / this.turns ) * 100
  }
}

module.exports = Round;