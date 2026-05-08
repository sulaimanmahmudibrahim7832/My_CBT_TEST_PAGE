import {  answers, index,notificationContainer } from "./quiz.js";
import { quiz } from "/quiz-js/questions.js";
 export const result = {
  corrects: 0,
  skips: 0,
  wrongs:0
}
function calculateResult() {
  answers.forEach((question) => {
  //console.log(question);
  if (question === quiz[index].correct) {
    result.corrects++;
    index++;
    //console.log(result.corrects)
  }
  else if (question === null) {
    result.skips++;
  } else {
    result.wrongs++;
    //console.log(result.wrongs);
  }
});
};
 
export function UserAction() {
  notificationContainer.style.display = "flex";
 notificationContainer.innerHTML = `<div> 
  <h4> Are you sure you want to submit </h4>
  <button class="yes-submit-button"> Yes </button>
   <button class="no-submit-button">No</button>
  </div>`;
  const yesButton = document.querySelector(".yes-submit-button");
  const noButton = document.querySelector(".no-submit-button");
  // console.log(yesButton, noButton);
  yesButton.addEventListener("click", () => {
    notificationContainer.style.display = "none";
      //calculateResult();
    //console.log(result.corrects , result.wrongs , result.skips);
   document.body.innerHTML = `
    <div> Your CBT is under review  </div>
    <!--<div><h1>Your Mathematics CBT test result </h1>
    -<div>
    <h2> details</h2>
    <p> total questions : ${result.corrects + result.wrongs + result.skips}</p>
    <h3> your score :
    <br>
    <math>
<mfrac>
<mrow>
<mn>${result.corrects}</mn>
</mrow>
<mrow>
<mn>${result.wrongs + result.corrects + result.skips}</mn>
</mrow>
</mfrac>
    </math>
    </h3>
    <h4> you <button class="skips"> skips </button> : ${result.skips} questions </h4>
    <h4> you attempted: ${result.wrongs} <button class="wrongs"> wrongs </button> </h4>
    <h4> also you have : ${result.corrects} <button class="corrects"> corrects</button> </h4>
     </div>-->
    <div>Submitted</div>
    <div>your result will be send to your Email after 24 hours of submittion 
    <br> thank you </div>
    `;
   /* alert(`total = ${result.corrects + result.wrongs + result.skips},
  marks = ${result.corrects},
  skips = ${result.skips}
  ${(result.corrects)}/${(result.corrects+result.wrongs+result.skips)}
  
  `);*/
    
    
  });
  noButton.addEventListener('click', () => {
    notificationContainer.style.display = "none";
  });
};
