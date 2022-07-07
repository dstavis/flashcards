const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js')
const Card = require('../src/Card')

const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

const deck = new Deck([card1, card2, card3]);

describe('Deck', function() {

  it("should have cards", function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3])
  })

  it("should know how many cards are in the deck", function() {
    expect(deck.countCards()).to.equal(3)
  })

})