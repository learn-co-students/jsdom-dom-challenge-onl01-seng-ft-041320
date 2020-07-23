const counter=document.getElementById("counter")
const minus=document.getElementById("minus")
const plus=document.getElementById("plus")
const pause=document.getElementById("pause")
const heart=document.getElementById("heart")
const commentFormTextField=document.getElementById("comment-input")
const commentFormSubmit=document.getElementById("submit")
const toggleObjects=[minus,plus,heart,commentFormTextField,commentFormSubmit]
const commentForm=document.getElementById("comment-form")

let tick
let likesList = document.getElementsByClassName("likes")[0]

function counting() {
    tick = setInterval(upCount, 1000);
}

function stopCounting() {
    clearInterval(tick)
}

function upCount() {
    n = parseInt(counter.innerText)
    counter.innerText = n + 1
}

function downCount() {
    n = parseInt(counter.innerText)
    counter.innerText = n - 1
}

function checkListForId(ulArray, id) {
    let found = false
    if (ulArray.length > 0) {
        for (let li of ulArray) {
            if (li.id == `${id}`) {
                found = true
            }
        }
    }
    return found
}

document.onload = counting()

minus.addEventListener("click", downCount)

plus.addEventListener("click", upCount)

pause.addEventListener("click", function() {
    if (pause.innerText == "pause") {
        stopCounting()
        toggleObjects.forEach(function(obj) {
            obj.disabled = true
        })
        pause.innerText = "resume"
    } else {
        counting()
        toggleObjects.forEach(function(obj) {
            obj.disabled = false
        })
        pause.innerText = "pause"
    }
})

heart.addEventListener("click", function(){
    num = counter.innerText
    if (checkListForId(likesList.children, num)) {
        let li = document.getElementById(`${num}`)
        if (li.children[0].innerText == "1") {
            li.innerHTML = `${num} has been liked <span>2</span> times`
        } else {
            li.children[0].innerText = parseInt(li.children[0].innerText) + 1
        }
    } else {
        likesList.innerHTML += `<li id=${num}>${num} has been liked <span>1</span> time</li>`
    } 
})

commentForm.addEventListener("submit", function(event){
    event.preventDefault()
    if (commentFormTextField.value != "") {
        let p = document.createElement("p")
        let list = document.getElementById("list")
        list.appendChild(p)
        p.innerText = commentFormTextField.value
        commentFormTextField.value = ""
    }
})