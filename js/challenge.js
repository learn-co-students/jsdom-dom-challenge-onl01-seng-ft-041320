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
// Listen
// Do


// As a user, I can pause the counter, which should pause the counter

// Select
let pauseB = document.getElementById('pause')

// Listen
pauseB.addEventListener('click', pauseFunc)

// Do

function pauseFunc(){
    if (!on) {
        on = true
    }
    else {
        on = false
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


// the pause button should then show the text "resume."
// Select
// Listen
// Do


// When 'resume' is clicked, it should restart the counter and re - enable the buttons.
// Select
// Listen
// Do


// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
// Select
// Listen
// Do
