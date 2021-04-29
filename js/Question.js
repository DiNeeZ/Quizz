export class Question {
  constructor(question, choices, answerKey) {
    this.question = question;
    this.choices = choices;
    this.answerKey = answerKey;
  }

  isCorrent(guessKey) {
    return guessKey === this.answerKey;
  }
}