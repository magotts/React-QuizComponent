import React, { Component } from 'react';
import QuizQuestion from "./QuizQuestion";


let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super();
    this.state = {quiz_position: 1};
  }
  render () {
    return (
      <QuizQuestion />
      // {quizData.quiz_questions[0].instruction_text}
    )
  }

 
}
export default Quiz;