let plusButton = document.getElementById('plus');
let counter = document.getElementById('counter');
let minusButton = document.getElementById('minus');
let heartButton = document.getElementById('heart')
let pauseButton = document.getElementById('pause')
let commentList = document.getElementById('list')
let commentForm = document.getElementById('comment-form')
let commentInput = document.getElementById('comment-input')

let i = 0;
let paused = false;

let timer = setInterval(function() {
  if(!paused){
    counter.innerText = i;
    i++;
  }
}, 1000);

plusButton.addEventListener('click', function(){
  counter.innerHTML = i;
  i++;
});

minusButton.addEventListener('click', function(){
  counter.innerHTML = i;
  i--;
});

pauseButton.addEventListener('click', function(){
  if(live){
  live = false
  pauseButton.innerHTML = 'unpause'
} else{
  pauseButton.innerHTML = 'pause'
  live = true
}
});

heartButton.addEventListener('click', function(){
  let like = document.querySelector(".likes")

  if(document.getElementById(`Li${i}`) == null){
    let li = document.createElement("li");
    li.setAttribute("id", `Li${i}`)
    li.innerHTML = `${i} have this many likes:1`
    like.appendChild(li)
  }
  else {
    let li = document.getElementById(`Li${i}`)
    let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
    li.innerHTML = `${i} have this many likes:${splitted}`
    like.appendChild(li)
  }
});

// comments
commentForm.addEventListener('submit', function(e){
  e.preventDefault()
  commentList.innerHTML += `<li>${commentInput.value}</li>`
  commentInput.value = ""
});