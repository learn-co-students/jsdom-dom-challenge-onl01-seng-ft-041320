// variables 
const counterBox = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const likeButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const submitButton = document.getElementById('submit');
const form = document.getElementById('comment-form');
const commentDiv = document.getElementById('list');
playing = 0
likedNumbers = []

// functions

function counting(object) {
    let num = parseInt(object.innerText)
    timer = setInterval(function() {
        num = num + 1;
        object.innerText = num;
    }, 1000);
};

function minusInteger() {
    let num = parseInt(counterBox.innerText)
    num = num - 1
    counterBox.innerText = num
};

function plusInteger() {
    let num = parseInt(counterBox.innerText)
    num = num + 1
    counterBox.innerText = num
};

function likeInteger() {
    object = document.getElementById("heart")
    let num = parseInt(counterBox.innerText)
    let ul = document.getElementsByTagName("ul")[0]
    let entry = document.createElement('li');
    likedNumbers.push(num)
    var likeCount = 0;
    for (var i = 0; i < likedNumbers.length; i++) {
        if (likedNumbers[i] === num)
            likeCount++;
        entry.innerText = `${num} has been liked ${likeCount} times`
    }

    ul.appendChild(entry)
};


function pauseInteger() {
    object = document.getElementById("pause")
    if (playing === 0) {
        clearInterval(timer),
            playing = 1
        object.innerText = "resume"
        decrementButton.disabled = true
        incrementButton.disabled = true
        likeButton.disabled = true
    } else if (playing === 1) {
        counting(counterBox)
        playing = 0
        object.innerText = "pause"
        decrementButton.disabled = false
        incrementButton.disabled = false
        likeButton.disabled = false
    }
};

function addComment(event) {
    formInputValue = document.getElementById("comment-input")
    newPara = document.createElement('p');
    newCommentNode = document.createTextNode(formInputValue.value)
    newPara.appendChild(newCommentNode)
    commentDiv.appendChild(newPara)
};
// event listeners
document.addEventListener("DOMContentLoaded", counting(counterBox));

minusButton.addEventListener("click", function() {
    minusInteger()
});

plusButton.addEventListener("click", function() {
    plusInteger()
});

likeButton.addEventListener('click', function() {
    likeInteger()
});

pauseButton.addEventListener('click', function() {
    pauseInteger()
});

form.addEventListener('submit', function() {
    event.preventDefault()
    addComment()
});