let currentCount = document.getElementById('counter');
let minusButton = document.getElementById('minus');
let plusButton = document.getElementById('plus');
let heartButton = document.getElementById('heart');
let likes = document.querySelector(".likes");
let pauseButton = document.getElementById('pause');
let buttons = document.querySelectorAll('button');
let form = document.getElementById("comment-form");
let listComments = document.getElementById("list");
let pause;


function startCount() {
    let num = parseInt(currentCount.innerText);
    num++;
    currentCount.innerText = num;
};


function subtractCount() {
    let num =  parseInt(currentCount.innerText);
    num--;
    currentCount.innerText = num;
};

function addCount() {
    let num = parseInt(currentCount.innerText);
    num++;
    currentCount.innerText = num;
};

function addLike() {
    let newLike = document.createElement('li');
    newLike.innerText = `${currentCount.innerText} has been liked for 1 time`;
    likes.appendChild(newLike);
}

function pauseCount() {

    if (pauseButton.innerText === 'pause') {
        disableButtons();
        pauseButton.innerText = 'resume'
        clearInterval(pause);
    } else {
        pauseButton.innerText = 'pause'
        enableButtons();
        pause = setInterval(startCount, 1000);
    }
};

function disableButtons() {
    buttons.forEach(function (btn) {
        if (btn.id != "pause") {
            btn.disabled = true;
        }
    })
};

function enableButtons() {
    buttons.forEach(function (btn) {
        if (btn.disabled == true) {
            btn.disabled = false;
        }
    })
};

function addComment(e) {
    userComment = form.querySelector('input').value;
    let liTag = document.createElement('li');
    liTag.innerText = userComment;
    listComments.append(liTag);
    e.preventDefault();
}




pause = setInterval(startCount, 1000);
minusButton.addEventListener('click', subtractCount);
plusButton.addEventListener('click', addCount);
heartButton.addEventListener('click', addLike);
pauseButton.addEventListener('click', pauseCount);
form.addEventListener('submit', addComment);