const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js')
const Card = require('../src/Card.js')
const Deck = require('../src/Deck.js')

const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

const deck = new Deck([card1, card2, card3]);

const round = new Round(deck);

describe("Round", function() {
  it("should have a deck", function() {
    expect(round.deck).to.deep.equal([card1, card2, card3])
  })

  it("should start with a current card that is the first card", function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1)
  })
  
  it("should keep track of turns, starting with a default of 0", function() {
    expect(round.turns).to.equal(0)
  })

  it("should keep a record of all incorrect guesses so far, with a default value of 0", function() {
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it("should give proper feedback when taking turns", function() {
    
    // WARNING: These lines act as setup for the following tests. If they are skipped, nothing else will work properly.
    const turn1 = round.takeTurn('sea otter')
    const turn2 = round.takeTurn('spleen') 
    
    expect(turn1).to.equal('correct!')
    expect(turn2).to.equal('incorrect!') 
  })

  it("should track how many turns have elapsed", function() {
    expect(round.turns).to.equal(2)
  })

  it("should store the IDs of any cards that were guessed wrong", function() {
    expect(round.incorrectGuesses).to.deep.equal([14])
  })

  it("should update the current card each time a turn is taken", function() {
    expect(round.returnCurrentCard()).to.deep.equal(card3)
  })

  it("should calculate what percentage of the turns taken so far were correct", function() {
    expect(round.calculatePercentCorrect()).to.equal(50)
  })









})