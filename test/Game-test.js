const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js')
const Deck = require('../src/Deck.js')
const Turn = require('../src/Turn.js')
const Round = require('../src/Round.js');
const Game = require('../src/Game.js');

const game = new Game();


describe('Game', function() {
  it('should keep track of the current round with a default of null', function() {
    expect(game.currentRound).to.equal(null)
  })

  it('should have a start method', function() {
    expect(game.start).to.be.a("function")
  })

  it('should create a deck full of cards', function() {
    game.setup()
    expect(game.deck.countCards()).to.equal(30)
    expect(game.deck.cards[0]).to.be.an.instanceOf(Card)
  })

  it('should use that deck to create a new round', function() {
    expect(game.currentRound).to.be.an.instanceOf(Round)
  })

})