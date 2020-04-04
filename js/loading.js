const loadBtn = document.querySelectorAll(".button");
const loadHere = document.querySelector(".container");

let index = 0;
let btnArr = [
      loadBtn[0],
      loadBtn[1]
          ];

function  clickBtn(ev) 
{
  let clickedButton = ev.target;
  let index = btnArr.indexOf(clickedButton);
  if (index === 0) 
  {
    let url = "partial/home.html";
    handleAjaxRequest(url);
  }else if (index === 1) 
  {
    let url = "partial/portfolio.html";
    handleAjaxRequest(url);
  }
}

for(let i = 0; i<btnArr.length; i++){ 
    btnArr[i].addEventListener('click', clickBtn);  
}

function handleAjaxRequest(url) 
{
  fetch(url)
    .then(function (response) {
      if (response.statusText === "OK") {
        return response.text();
      }
      throw new Error(response.statusText);
    })
    .then(function (data) {
      loadHere.innerHTML = data;
    })
    .catch(function (error) {
      loadHere.innerHTML = `<pre>${error.name}: ${error.message}</pre>`;
    });
}