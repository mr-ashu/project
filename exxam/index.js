// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", addmatchFun);
var matchArr=JSON.parse(localStorage.getItem("schedule"))||[];
function addmatchFun(){
    event.preventDefault();
   var matchObj={
    matchNum:masaiForm.matchNum.value,
    teamA:masaiForm.teamA.value,
    teamB:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value,
    
   }
   matchArr.push(matchObj);
   localStorage.setItem("schedule",JSON.stringify(matchArr))
}