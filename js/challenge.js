let counterButton = document.getElementById('counter')
let minusButton = document.getElementById('minus')
let plusButton = document.getElementById('plus')
let heartButton = document.getElementById('heart')
let pauseButton = document.getElementById('pause')
let commentList = document.getElementById('list')
let commentForm = document.getElementById('comment-form')
let commentInput = document.getElementById('comment-input')

let live = true

let count = 0

let timer = setInterval(function(){
  if (live){
  counterButton.innerHTML = count
  count += 1
  }
}, 1000)

plusButton.addEventListener('click', function(){
  counterButton.innerHTML = count
  count += 1
})

minusButton.addEventListener('click', function(){
  counterButton.innerHTML = count
  count -= 1
})

pauseButton.addEventListener('click', function(){
  if(live){
  live = false
  pauseButton.innerHTML = 'unpause'
} else{
  pauseButton.innerHTML = 'pause'
  live = true
}
})

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