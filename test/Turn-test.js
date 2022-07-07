const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn.js');

describe('Turn', function() {
  it("should expect and store a guess string and a Card object", function() {
    let card = new Card(1, "Lowercase A", ['a', 'b', 'c'], "a")
    let turn = new Turn("Example", card)
    expect(turn.guess).to.equal("Example")
    expect(turn.card).to.deep.equal(card)
  })

  it("should have a returnGuess method that returns the guess string", function() {
    let card = new Card(1, "Lowercase A", ['a', 'b', 'c'], "a")
    let turn = new Turn("Example", card)
    expect(turn.returnGuess()).to.equal("Example")
  })

  it("should return the Card when returnCard is invoked", function() {
    let card = new Card(1, "Lowercase A", ['a', 'b', 'c'], "a")
    let turn = new Turn("Example", card)
    expect(turn.returnCard()).to.deep.equal(card)
  })

  it("should return the right boolean when evaluateGuess is called", function() {
    let card = new Card(1, "Lowercase A", ['a', 'b', 'c'], "a")
    
    let wrongTurn = new Turn("Example", card)
    expect(wrongTurn.evaluateGuess()).to.equal(false)

    let rightTurn = new Turn("a", card)
    expect(rightTurn.evaluateGuess()).to.equal(true)
  })

  it("should return the proper response when giveFeedback is called", function() {
    let card = new Card(1, "Lowercase A", ['a', 'b', 'c'], "a")
    
    let wrongTurn = new Turn("Example", card)
    let rightTurn = new Turn("a", card)

    expect(rightTurn.giveFeedback()).to.equal('correct!')
    expect(wrongTurn.giveFeedback()).to.equal('incorrect!')
  })
});