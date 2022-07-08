window.onload = function () {
  
  let circleNumbers = document.getElementById("card__centerdown");
  let div;

  for (let i = 1; i <= 5; i++) {
    div = document.createElement("div");
    let span = document.createElement("span");
    let content = document.createTextNode(`${i}`);
    span.appendChild(content);
    div.appendChild(span);
    console.log(div); 
    circleNumbers.appendChild(div);
    div.classList.toggle("circle"); 
  }

  let buttons = document.querySelectorAll(".circle");

  buttons.forEach(btn=>{
      btn.addEventListener("click",function(e){
        btn.classList.toggle("circle--clicked");
        console.log(btn.innerText + " clicked");
      });
  });
}