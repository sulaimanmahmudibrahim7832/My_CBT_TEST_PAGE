import { index, answers, options,questionSpan,buttons_Array} from "/quiz-js/quiz.js";
import { quiz } from "/quiz-js/questions.js";
export function displayAnswer(index) {
  
    for (let i = 0; i < buttons_Array.length; i++) {
      buttons_Array[index].classList.add("is_answered");
      break
    }
  
}
function saveAction() {
  if (answers[index] !== null) {
    document.querySelector(`input[value="${answers[index]}"]`).checked
      = true;
}
}

export function showQuestion() {
  const Qnumber = document.querySelector(".question-number");
  const Qtext = document.querySelector('.question-text');
  const QoptionA = document.querySelector(".optionA");
  const QoptionB = document.querySelector(".optionB");
  const QoptionC = document.querySelector(".optionC");
  const QoptionD = document.querySelector(".optionD");


  Qnumber.textContent = quiz[index].questionId;
  Qtext.textContent = quiz[index].questionText;
  QoptionA.textContent = quiz[index].optionA;
  QoptionB.textContent = quiz[index].optionB;
  QoptionC.textContent = quiz[index].optionC;
  QoptionD.textContent = quiz[index].optionD;

  questionSpan.innerHTML = `${index + 1}`;
  options.forEach(
    input => {
      input.checked = false;
    }
  );
  
    options.forEach(input => {
      input.addEventListener("change", () => {
        answers[index] = input.value;
        displayAnswer(index);
      });
      //let save = answers[index];
      saveAction();
    });
  };


 
  //console.log(answers[index]);
export{saveAction}