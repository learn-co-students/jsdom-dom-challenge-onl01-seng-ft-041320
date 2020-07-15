  
let currentCount = document.querySelector("#counter");
let minusButton = document.querySelector("#minus");
let plusButton = document.querySelector("#plus");
let heartButton = document.querySelector("#heart");
let pauseButton = document.querySelector("#pause");
let likes = document.querySelector("ul");
let form = document.querySelector("#comment-form");
let listComments = document.querySelector("div.comments");
let buttons = document.querySelectorAll('button')
let pause;

function startCounter(){
    let num = parseInt(currentCount.innerText);
    num++ ;
    currentCount.innerText = num;
  }
  
  function subtractCount() {
    let currentCount = document.querySelector("#counter");
    let num = parseInt(currentCount.textContent);
    num--;
    currentCount.innerText = num;
  }
  
  function addCount() {
    let currentCount = document.querySelector("#counter");
    let num = parseInt(currentCount.textContent);
    num++;
    currentCount.innerText = num;
  }
  
  function disableBTNS(){
    buttons.forEach(function(btn){
      if (btn.id != "pause"){
         btn.disabled = true;
      }
    });
  }
  
  function enableBTNS(){
    buttons.forEach(function(btn){
      if (btn.disabled == true){
         btn.disabled = false;
      }
    })
  }
  
  function pauseCount() {
    if (this.innerText == "pause"){
      this.innerText = "resume";
      disableBTNS();
      clearInterval(pause);
    }else{
      this.innerText = "pause";
      enableBTNS()
      pause = setInterval(startCounter,1000);
    }
  }
  
  function addLike() {
    likes.innerHTML = `<div>${currentCount.innerText}</div>`;
  }
  
  function addComment(e) {
    let listComments = document.querySelector("div.comments");
      userComment = form.querySelector('input').value;
      let liTag = document.createElement('li');
      liTag.innerText = userComment;
      listComments.append(liTag);
      e.preventDefault();
  }
  
pause = setInterval(startCounter,1000);
minusButton.addEventListener('click',subtractCount);
plusButton.addEventListener('click',addCount);
pauseButton.addEventListener('click',pauseCount);
heartButton.addEventListener('click',addLike);
form.addEventListener('submit',addComment);