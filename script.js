/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const quizForm = document.getElementById("quiz-form");
const answerInputs = Array.from(document.getElementsByClassName("answer"));
const questions = document.querySelectorAll(".question-item");
const alert = document.getElementById("alert");

// TODO: 3. Create a submit event listener for the form that does the following.
//    1. Prevent the default behaviour
quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers

  questions.forEach((question) => {
    question.classList.add("incorrect");
    question.classList.remove("correct");
  });

  //    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
  const CheckedAnswers = answerInputs.filter((answer) => answer.checked);
  //    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
  CheckedAnswers.map((answer) => {
    const isCorrect = answer.value === "true";
    const questionItem = answer.closest(".question-item");

    //    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
    if (isCorrect) {
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
      //    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
    } else {
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }

    //    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)

    const allTrue = CheckedAnswers.every((answer) => answer.value === "true");
    const allAnswers = CheckedAnswers.length === questions.length;

    if (allTrue && allAnswers) {
      alert.classList.add("active");
      setTimeout(() => {
        alert.classList.remove("active");
      }, 2000);
    }
  });
});
