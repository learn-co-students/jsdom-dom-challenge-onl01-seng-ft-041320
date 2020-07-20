const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const newComment = document.getElementById('comment-input')
const addComment = document.getElementById('comment-form')
const commentDiv = document.getElementById('list')
let counting = true
let timer = setInterval(myTimer, 1000);

function myTimer() {
  if (counting) {
    counter.innerHTML = parseInt(counter.innerHTML) + 1
  }
};

function pauseTimer() {
  if (!counting) {
    counting = true
    pause.innerText = `pause`
    }
  else {
    counting = false
    pause.innerText = `resume`
  }
}

function decrementCounter(){
  counter.innerHTML -= 1
}

function incrementCounter(){
  counter.innerHTML = parseInt(counter.innerHTML) + 1
}

let heartCounter = heart,
  count = 1;
heartCounter.onclick = function() {
  count += 1;
};

function countHearts(e){
  let li = document.createElement('li')
  li.setAttribute('id', counter.innerHTML)
  const heartList = document.getElementById('likes')
  if (document.getElementById(counter.innerHTML) === null) {
    li.innerHTML = `${counter.innerHTML} has been liked 1 time`
    heartList.appendChild(li);
  }
  else {
   li = document.getElementById(counter.innerHTML)
   let numberOfLikes = parseInt(li.innerHTML.split( "d "[1])[4]) + 1
   li.innerHTML = `${counter.innerHTML} has been liked ${numberOfLikes} times`
  }
}

function leaveComment(e) {
  e.preventDefault();
  let p = document.createElement('p')
  p.innerHTML = `${newComment.value}`
  commentDiv.appendChild(p);
  e.target.reset()
}

function disable() {
  if (counting) {
    newComment.disabled = true;
    plus.disabled = true;
    minus.disabled = true;
  }
  else {
    newComment.disabled = false;
    plus.disabled = false;
    minus.disabled = false;
  }
}

const pauseAndDisable = pause

pauseAndDisable.addEventListener('click', disable)

counter.addEventListener('DOMContentLoaded', function timer() {
})
pause.addEventListener('click', pauseTimer)

minus.addEventListener('click', decrementCounter)

plus.addEventListener('click', incrementCounter)

heart.addEventListener('click', countHearts)

addComment.addEventListener('submit', leaveComment)
