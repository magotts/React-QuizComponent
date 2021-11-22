import React, { Component } from 'react';
import QuizQuestions from "./QuizQuestions";


let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super();
    this.state = {quiz_position: 1};
  }
  render () {
    return (
      <QuizQuestions />
      // {quizData.quiz_questions[0].instruction_text}
    )
  }

 
}
export default Quiz;