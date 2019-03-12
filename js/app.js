'use strict';

function startQuiz() {
  console.log('Quiz started');

  const thankYouMessage = 'Thank you for playing!';
  const unacceptableAnswerMessage = 'Sorry, that was not an accepted answer';

  let score = 0;
  let startQuiz = confirm('Would you like to start Michael\'s quiz? Give answers by typing Yes/No or Y/N!');

  if (startQuiz === true) {
    let guitarQuestion = prompt('Do I play the guitar?');
    console.log(`Guitar question: ${guitarQuestion}`);

    if (guitarQuestion === null) {
      console.log('Question 1: Returned null');
      console.log('Quiz ending');
      alert(thankYouMessage);
      return;
    } else if (guitarQuestion.toLowerCase() !== 'yes' && guitarQuestion.toLowerCase() !== 'y' && guitarQuestion.toLowerCase() !== 'no' && guitarQuestion.toLowerCase() !== 'n') {
      console.log('Question 1: Unacceptable answer');
      console.log('Quiz ending');
      alert(unacceptableAnswerMessage);
      return;
    } else {
      console.log('Question 1: Statement passes');
      if (guitarQuestion.toLowerCase() === 'yes' || guitarQuestion.toLowerCase() === 'y' && guitarQuestion !== null) {
        score += 1;
        alert('Correct, I do play the guitar!');
        console.log(`Yes! Score is now ${score}`);
      } else {
        alert('Wrong, I have been playing the guitar for most of my life!');
        console.log(`No! Score is still ${score}`);
      }
    }

    let backpackingQuestion = prompt('Do I perfer to go backpacking in the winter?');
    console.log(`Backpacking question: ${backpackingQuestion}`);

    if (backpackingQuestion === null) {
      console.log('Question 2: Returned null');
      console.log('Quiz ending');
      alert(thankYouMessage);
      return;
    } else if (backpackingQuestion.toLowerCase() !== 'yes' && backpackingQuestion.toLowerCase() !== 'y' && backpackingQuestion.toLowerCase() !== 'no' && backpackingQuestion.toLowerCase() !== 'n') {
      console.log('Question 2: Unacceptable answer');
      console.log('Quiz ending');
      alert(unacceptableAnswerMessage);
      return;
    } else {
      console.log('Question 2: Statement passes');
      if (backpackingQuestion.toLowerCase() === 'yes' || backpackingQuestion.toLowerCase() === 'y' && backpackingQuestion !== null) {
        score += 1;
        alert('Correct, I perfer to backpack in the winter!');
        console.log(`Yes! Score is now ${score}`);
      } else {
        alert('Wrong, I actually do perfer to backpack in the winter!');
        console.log(`No! Score is still ${score}`);
      }
    }

    let summerQuestion = prompt('Do I love the summer?');
    console.log(`Summer question: ${summerQuestion}`);

    if (summerQuestion === null) {
      console.log('Question 3: Returned null');
      console.log('Quiz ending');
      alert(thankYouMessage);
      return;
    } else if (summerQuestion.toLowerCase() !== 'yes' && summerQuestion.toLowerCase() !== 'y' && summerQuestion.toLowerCase() !== 'no' && summerQuestion.toLowerCase() !== 'n') {
      console.log('Question 3: Unacceptable answer');
      console.log('Quiz ending');
      alert(unacceptableAnswerMessage);
      return;
    } else {
      console.log('Question 3: Statement passes');
      if (summerQuestion.toLowerCase() === 'yes' || summerQuestion.toLowerCase() === 'y' && summerQuestion !== null) {
        alert('Wrong, I actually hate the summer heat!');
        console.log(`No! Score is still ${score}`);
      } else {
        score += 1;
        alert('Correct, I don\'t like the summer heat!');
        console.log(`Yes! Score is now ${score}`);
      }
    }

    let tvShowQuestion = prompt('Is my favorite show Penny Dreadful?');
    console.log(`TV Show question: ${tvShowQuestion}`);

    if (tvShowQuestion === null) {
      console.log('Question 4: Returned null');
      console.log('Quiz ending');
      alert(thankYouMessage);
      return;
    } else if (tvShowQuestion.toLowerCase() !== 'yes' && tvShowQuestion.toLowerCase() !== 'y' && tvShowQuestion.toLowerCase() !== 'no' && tvShowQuestion.toLowerCase() !== 'n') {
      console.log('Question 4: Unacceptable answer');
      console.log('Quiz ending');
      alert(unacceptableAnswerMessage);
      return;
    } else {
      console.log('Question 4: Statement passes');
      if (tvShowQuestion.toLowerCase() === 'yes' || tvShowQuestion.toLowerCase() === 'y') {
        score += 1;
        alert('Correct, my favorite show is Penny Dreadful!');
        console.log(`Yes! Score is now ${score}`);
      } else {
        alert('Wrong, my favorite show is actually Penny Dreadful!');
        console.log(`No! Score is still ${score}`);
      }
    }

    let catQuestion = prompt('Do I have a cat named Tobby?');
    console.log(`Cat question: ${catQuestion}`);

    if (catQuestion === null) {
      console.log('Question 5: Returned null');
      console.log('Quiz ending');
      alert(thankYouMessage);
      return;
    } else if (catQuestion.toLowerCase() !== 'yes' && catQuestion.toLowerCase() !== 'y' && catQuestion.toLowerCase() !== 'no' && catQuestion.toLowerCase() !== 'n') {
      console.log('Question 5: Unacceptable answer');
      console.log('Quiz ending');
      alert(unacceptableAnswerMessage);
      return;
    } else {
      console.log('Question 5: Statement passes');
      if (catQuestion.toLowerCase() === 'yes' || catQuestion.toLowerCase() === 'y' && catQuestion !== null) {
        alert('Wrong, my cat\'s name is actually Alastor!');
        console.log(`No! Score is still ${score}`);
      } else {
        score += 1;
        alert('Correct, my cat\'s name is Alastor!');
        console.log(`Yes! Score is now ${score}`);
      }
    }

    if (score > 3) {
      console.log('Final score');
      alert(`Congratulations! You got ${score} questions correct!`);
    } else {
      console.log('Final score');
      alert(`I'm sorry, you only got ${score} questions right :(`);
    }
  }
}
