// As a user, I should see the timer increment every second once the page has loaded.

// Select
let counter = document.getElementById('counter');

// Listen

// Do

let i = 0;
let on = false;

let timer = setInterval(function () {
    if (!on) {
        counter.innerText = i
        i++
    }

}, 1000);

// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

//1. Select

let plusB = document.getElementById('plus');
let minusB = document.getElementById('minus');

//2.  Listen

minusB.addEventListener('click', decrement)
plusB.addEventListener('click', increment)

//3. Do

function decrement() {
    counter.innerHTML = i;
    i--;
}

function increment() {
    counter.innerHTML = i;
    i++;
}

// As a user, I can 'like' an individual number of the counter.I should see count of the number of 'likes' associated with that number.

// Select
let heartB = document.getElementById('heart')
let likesList = document.querySelector('.likes')

// Listen
heartB.addEventListener('click', heartFunc)

// Do

function heartFunc() {
        let counterNumber = i
        let likes_i = 1
        let li = document.createElement('li')
        if (counterNumber != "undefined")
            li.innerHTML = `<li>${counterNumber} has ${likes_i} likes</li>`
        else
            counterNumber = i++
            li.innerHTML = `<li>${counterNumber} has ${likes_i++} likes</li>`
        likesList.appendChild(li);
}

// As a user, I can pause the counter, which should pause the counter
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re - enable the buttons.

// Select
let pauseB = document.getElementById('pause')

// Listen
pauseB.addEventListener('click', pauseFunc)

// Do

function pauseFunc(){
    if (!on) {
        on = true
        pauseB.innerText = `resume`
    }
    else {
        on = false
        pauseB.innerText = `pause`
        i = 0
    }
}


// disable all buttons except the pause button
// Select
let disableB = document.getElementById('disable')
let list = document.getElementById('list')
let commentForm = document.getElementById('comment-form')
let commentInput = document.getElementById('comment-input')
let commentB = document.getElementById('submit')

// Listen
disableB.addEventListener('click', disableFunc)

// Do

let disabledAll = false

function disableFunc(){

    if (!disabledAll) {
        disabledAll = true
        plusB.disabled = true
        minusB.disabled = true
        heartB.disabled = true
        minusB.disabled = true
        // commentForm.disabled = true
        commentInput.disabled = true
        commentB.disabled = true
    }
    else {
        disabledAll = false
        plusB.disabled = false
        minusB.disabled = false
        heartB.disabled = false
        minusB.disabled = false
        // commentForm.disabled = true
        commentInput.disabled = false
        commentB.disabled = false
    }
}


// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
// Select
// let commentForm = document.getElementById('comment-form')
// let commentInput = document.getElementById('comment-input')
// let commentB = document.getElementById('submit')
// let list = document.getElementById('list')

// Listen
commentForm.addEventListener('submit', commentFunc)

// Do

function commentFunc(e) {
    e.preventDefault()
    list.innerHTML += `<li>${commentInput.value}</li>`
    alert('Comment successfully added!')
}