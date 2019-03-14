'use strict';

var askUserName = (function() {
  return prompt('First off, what is your name? :)');
  
})();
console.log(askUserName);

function startQuiz() {
  const questionsArr = [['Do I play the guitar?', 'Do I perfer to go backpacking in the winter?', 'Do I love the summer?', 'Is my favorite show Penny Dreadful?', 'Do I have a cat named Tobby?'], ['y', 'y', 'n', 'y', 'n']];
  const answerArray = ['yes', 'y', 'no', 'n'];
  const correctMessage = 'That was correct!';
  let question;
  let score = 0;


  for (let i = 0; i < questionsArr[0].length; i++) {
    console.log(`loop: ${i}`);
    question = prompt(questionsArr[0][i]);

    if (question === null) {
      console.log('Question was null');
      alert('Thank you for playing!');
      break;
    } 
      
    while (question.toLowerCase() !== answerArray[0] && question.toLowerCase() !== answerArray[1] && question.toLowerCase() !== answerArray[2] && question.toLowerCase() !== answerArray[3]) {
      console.log('Unnacceptable answer');
      alert(`Sorry, ${question} is not an acceptable answer. Please give answers by typing Yes/No or Y/N!`);
      question = prompt(questionsArr[0][i]);
    }

    if (questionsArr[1][i] === answerArray[1] && (question.toLowerCase() === answerArray[1] || question.toLowerCase() === answerArray[0])) {
      console.log('Correct yes:' + question.toLowerCase());
      score++;
      alert(correctMessage);
    } else if (questionsArr[1][i] === answerArray[3] && (question.toLowerCase() === answerArray[3] || question.toLowerCase() === answerArray[3])) {
      console.log('Correct no: ' + question.toLowerCase());
      score++;
      alert(correctMessage);
    } else {
      console.log('wrong:' + question.toLowerCase());
      alert('Sorry, that was not correct :/');
    }
  }

  if (score > 3) {
    console.log('Final score: win');
    const bonusGame = confirm(`Congratulations! You got ${score} questions correct! Would you like to play the bonus round for a prize?`);
    
    if (bonusGame === true){
      numberGame(score);
    }
  } else if (score === 0) {
    alert('You didn\'t get any answers right :(');
  } else {
    console.log('Final score: lost');
    alert(`I'm sorry, you only got ${score} questions right :(`);
  }
}

function numberGame(score) {
  let randomNumber = Math.floor(Math.random() * (50 - 25) + 25);
  let numberAnswer = prompt('I am thinking of a number between 25 and 50! Type your answer below') * 1;
  let guess = 1;
  console.log(randomNumber);
  while (numberAnswer !== randomNumber) {
    if (typeof numberAnswer !== 'number') {
      console.log(typeof numberAnswer);
      alert(`Sorry, ${numberAnswer} is not an acceptable answer. Please give answers by typing a number below!`);
    } else if (numberAnswer > randomNumber) {
      alert('You\'re guessing too high!');
    } else {
      alert('You\'re guessing too low!');
      break;
    } 

    numberAnswer = prompt('I am thinking of a number between 25 and 50! Type your answer below') * 1;
    guess++;
    console.log(guess);
  }
  alert(`Wow, congratulations, it only took you ${guess} tries which brings your score up to ${score += 1}! Now for the final question!`);
  guessingGame(score);
}

function guessingGame(score) {
  const activityArr = ['kayaking', 'rafting', 'fishing', 'hunting', 'hiking', 'snowboarding'];
  let win = false;

  let answer = prompt('Name a type of outdoor activity that I enjoy that isn\'t backpacking!');

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < activityArr.length; j++) {
      if (activityArr[j] === answer.toLowerCase()) {
        win = true;
      }
    }
    if (win === true) {
      break;
    } else {
      alert(`Sorry try again, you only have ${6 - i} left`);
      answer = prompt('Name a type of outdoor activity that I enjoy that isn\'t backpacking!');
    }
  }
  
  if (win === true) {
    alert(`Congratulations ${askUserName}!!! You won the game with ${score += 1} points!`);
  } else {
    alert('I\'m sorry, you didn\'t make any correct choices and lose all of your points :(');
  }
}
