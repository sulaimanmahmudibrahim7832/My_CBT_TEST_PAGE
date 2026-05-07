import { UserAction } from "/quiz-js/result.js";
export function Autosave() {
  const Timer = document.querySelector(".time-tracker");
  let Total = 0.5 * 3600;
  setInterval(() => {
     let Hours = Math.floor(Total / 3600);
     let minutes = Math.floor(Total/ 60);
    let seconds = Math.floor(Total % 60);
    Total--;
    Timer.style.display = "inline-block";
     Timer.innerHTML =`0${Hours}:${minutes}:${seconds}`;
    if (Total === 0) {
      //UserAction()
      document.body.innerHTML = `
       <div> Your CBT is under review  </div>
           </div>-->
   <div>Submitted</div>
   <div>your result will be send to your Email after 24 
     hours of submittion 
   <br> thank you </div>
      `;
    }
  }, 1000);
}