//console.log("quized");
import { showQuestion,saveAction,displayAnswer} from '/quiz-js/tracker.js';
import {UserAction } from './result.js';
import { Autosave } from './auto-save.js';
import { quiz } from './questions.js';
export const notificationContainer = document.querySelector(".submit-notification");

  notificationContainer.style.display = "none";
document.querySelector(".goto-container").style.display = "none";



let GotoButtonsHtml = '';


})
  
};*/
/*function clearUserState() {
  optA.checked = false;
  optB.checked = false;
  optC.checked = false;
  optD.checked = false;
}*/







 const QoptionA = document.querySelector(".optionA");
 const QoptionB = document.querySelector(".optionB");
 const QoptionC = document.querySelector(".optionC");
 const QoptionD = document.querySelector(".optionD");

  export let index = 0;
  const lastIndex = quiz.length - 1;
export const options = document.querySelectorAll("input[name='a']");
export let answers = Array(quiz.length).fill(null);
totalQuestions.innerHTML = `${quiz.length}`;
showQuestion();


body.addEventListener('keydown', () => {
  //console.log(key === "keyN");
  if (event.key.toUpperCase() === "n".toUpperCase()) {
    nextAction();
  }
  else if (event.key.toUpperCase() === 'p'.toUpperCase()) {
    previousAction();
  }
  else if (event.key.toUpperCase() === 'g'.toUpperCase()) {
    document.querySelector(".goto-container").style.display = "flex";
  }
  else if (event.key.toUpperCase() === 's'.toUpperCase()) {
    //renderResultPreview();
    UserAction()
  }
 
  else if (event.key.toUpperCase() === 'a'.toUpperCase()) {
    //console.log("A has pressed")
     //input.checked = true;
    options[0].checked = true;
    answers[index] = options[0].value;
    displayAnswer(index);
  }
  else if (event.key.toUpperCase() === 'b'.toUpperCase()) {
    //console.log("B was pressed");
     //input.checked = true;
    options[1].checked = true;
    answers[index] = options[1].value;
    displayAnswer(index);
  }
  else if (event.key.toUpperCase() === "c".toUpperCase()) {
    //console.log("C has pressed")
     //input.checked = true;
    options[2].checked = true;
    answers[index] = options[2].value;
    displayAnswer(index);
  }
  else if (event.key.toUpperCase() === "d".toUpperCase()) {
    //console.log("D has pressed");
     //input.checked = true;
    options[3].checked = true;
    answers[index] = options[3].value;
    displayAnswer(index);
  }
});





  function updateButtons(index) {
    for (let i = 0; i < buttons_Array.length; i++) {
      if (index === index) {
        buttons_Array.forEach(
          btn => {
            btn.classList.remove("current-index");
          }
        )
        buttons_Array[index].classList.add("current-index");
      }
      break
    }
};
function nextAction() {
      if (index < lastIndex) {
   index++;
   showQuestion();
        updateButtons(index);
        previosButton.classList.remove("last-index");
        
  }
  if (index === lastIndex) {
    nextButton.classList.add("last-index");
    //console.log("is last");
     previosButton.classList.remove("last-index");
  }
  
};
function previousAction() {
  if (index > 0) {
  index--;
  showQuestion();
  updateButtons(index);
    previosButton.classList.remove("last-index");
    nextButton.classList.remove('last-index');
  }
  if (index === 0) {
    previosButton.classList.add("last-index");
    nextButton.classList.remove('last-index');
  }
}
  
nextButton.addEventListener('click', () => {
  nextAction();
  });
  previosButton.addEventListener("click", () => {
    previousAction();
  });

/*function UserAction() {
  answers.forEach((question) => {
    if (question === quiz[index].correct) {
      result.corrects++;
    }
    else if (question === null) {
      result.skips++;
    } else {
      result.wrongs++;
    }
  })
  console.log(result.corrects * 5, result.wrongs * 5, result.skips);
  alert(`total = ${result.corrects + result.wrongs + result.skips},
    marks = ${result.corrects * 10},
    skips = ${result.skips}
    ${(result.corrects)*10}/${(result.corrects+result.wrongs+result.skips)*10}
    
    `);
  }*/
let buttons = "";
quiz.forEach((question,index) => {
  buttons += `<button  id="current-index${index}" class="question-button">${index + 1} </button>`;
});
GotoButtonsHtml = `<span>${buttons}</span>`;
document.querySelector(".goto-container").innerHTML = `<div>${GotoButtonsHtml}</div>
 <div class="closed-button-container">
<span class="closed-button">X</span>
   </div>`;
const closedButton = document.querySelector(".closed-button");
//console.log(closedButton);
closedButton.addEventListener("click",button=> {
  document.querySelector(".goto-container").style.display = "none";
});
gotoButton.addEventListener('click', () => {
  document.querySelector(".goto-container").style.display = "flex";
});
export const buttons_Array = document.querySelectorAll(".goto-container button");



buttons_Array[0].classList.add("current-index");
buttons_Array.forEach((button, position) => {              
  button.addEventListener("click", () => {
    index = position;
    nextButton.classList.remove("last-index");
    previosButton.classList.remove("last-index");
    showQuestion();
        if (handleButtonRenderation(index, position)) {
          buttons_Array.forEach(btn => {
            btn.classList.remove("current-index");
          });
          button.classList.add("current-index");
        };
        }
  );
      
});

submitButton.addEventListener("click", () => {
  //renderResultPreview();
  UserAction();
});
Autosave();

function handleButtonRenderation(currentIndex,position) {
  //console.log("i handled it ");
  let index = 0;
  if (position === currentIndex) {
    //console.log("match found");
    return true;
  }
  else {
    return false 
  }
}
function checkAnswer(index) {
if (answers[index] !== null)
{
  return true;
  }
else {
  return false 
  }
}

/*const stateManager = {
  answered: false,
  currentIndex: 1,
  visitedIndex: 10,
};
*/
