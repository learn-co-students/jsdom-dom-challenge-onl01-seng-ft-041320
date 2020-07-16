//1. Look at the screen and ask yourself, which of these elements are going to change in some way, and select them and save them to variables 
//2. Which of these elements that I've selected will respond to direct human interaction, or events. 
//3. Put event listeners on them, and define the callback functions that need to be performed on those events. 


// Variable of each element
let counterButton = document.getElementById('counter')
let minusButton = document.getElementById('minus')
let plusButton = document.getElementById('plus')
let heartButton = document.getElementById('heart')
let pauseButton = document.getElementById('pause')
let commentList = document.getElementById('list')
let commentForm = document.getElementById('comment-form')
let commentInput = document.getElementById('comment-input')

// comments
commentForm.addEventListener('submit', function(e){
  e.preventDefault()
  commentList.innerHTML += `<li>${commentInput.value}</li>`
  commentInput.value = ""
})

let live = true

//counter
let count = 0

let timer = setInterval(function(){
  if (live){
  counterButton.innerHTML = count
  count += 1
  }
}, 1000)

// increament counter
plusButton.addEventListener('click', function(){
  counterButton.innerHTML = count
  count += 1
})

// decrement counter
minusButton.addEventListener('click', function(){
  counterButton.innerHTML = count
  count -= 1
})

//pause
pauseButton.addEventListener('click', function(){
  if(live){
  live = false
  pauseButton.innerHTML = 'unpause'
} else{
  pauseButton.innerHTML = 'pause'
  live = true
}
})

// connect the likes with the specific number on the timer
// use object

heartButton.addEventListener('click', function(){
  let like = document.querySelector(".likes")

  if(document.getElementById(`Li${count}`) == null){
    let li = document.createElement("li");
    li.setAttribute("id", `Li${count}`)
    li.innerHTML = `${count} have this many likes:1`
    like.appendChild(li)
  }
  else {
    let li = document.getElementById(`Li${count}`)
    let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
    li.innerHTML = `${count} have this many likes:${splitted}`
    like.appendChild(li)
  }
})