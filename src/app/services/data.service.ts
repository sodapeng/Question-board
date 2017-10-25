import { Injectable } from '@angular/core';
import { Question} from "../models/Question";

@Injectable()
export class DataService {
  questions: Question[];
  constructor() {
    /*
    this.questions = [
      {
        text: 'What is your name',
        answer: 'My name is Soda',
        hide: true
      },
      {
        text: 'What is your favorite color',
        answer: 'My favorite color is green',
        hide: true
      },
      {
        text: 'What is your favorite language',
        answer: 'My favorite language is java',
        hide: true
      }
    ];
    */
  }

  //Get questions from local storage
  getQuestions() {
    if(localStorage.getItem('question') === null)
      this.questions = [];
    else {
      this.questions = JSON.parse(localStorage.getItem('question'));
    }
    return this.questions;
  }

  //Add questions from local storage
  addQuestion(question: Question) {
   this.questions.unshift(question);

   //Init local var;
    let questions;

    if(localStorage.getItem('question') === null) {
      questions = [];
      //Push new question
      questions.unshift(question);
      // Set new array to local storage
      localStorage.setItem('question', JSON.stringify(questions));
    }
    else {
      questions = JSON.parse(localStorage.getItem('question'));
      //Add new question
      questions.unshift(question);
      //Re set LS
      localStorage.setItem('question', JSON.stringify(this.questions));
    }
  }

  removeQuestion(question: Question) {
    for(let i = 0; i < this.questions.length; i++) {
      if(question == this.questions[i])
        this.questions.splice(i,1);
    }
    localStorage.setItem('question', JSON.stringify(this.questions));
  }

}
