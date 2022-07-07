class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = id || 0;
    this.question = question || undefined;
    this.answers = answers || [];
    this.correctAnswer = correctAnswer || undefined;
  }
}

module.exports = Card;