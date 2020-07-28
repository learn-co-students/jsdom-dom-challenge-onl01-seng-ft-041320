let counter = document.querySelector("#counter");
let minusButton = document.querySelector("#minus");
let plusButton = document.querySelector("#plus");
let heartButton = document.querySelector("#heart");
let likes = document.querySelector(".likes");
let pauseButton = document.getElementById('pause');
let form = document.querySelector("#comment-form");
let listComments = document.querySelector("div.comments");
let buttons = document.querySelectorAll('button')
let pause;



// Counter goes up by 1 every second
function startCounter() {
    let num = parseInt(counter.innerText);
    num++;
    counter.innerText = num;
}

// Add and Subtract from the counter

function addCount() {
    let counter = document.querySelector("#counter");
    let num = parseInt(counter.textContent);
    num++;
    counter.innerText = num;
}

function subtractCount() {
    let counter = document.querySelector("#counter");
    let num = parseInt(counter.textContent);
    num--;
    counter.innerText = num;
}


// Heart emoji to the number

function addLike() {
    if (document.getElementById(`Li${counter}`) == null) {
        let li = document.createElement('li');
        li.setAttribute('id', `Li${counter}`)
        li.innerHTML = `${counter.innerHTML} have this many likes : 1`
        likes.appendChild(li)
    } else {
        let li = document.getElementById(`Li${counter}`)
        let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
        li.innerHTML = `${counter.innerHTML} have this many likes : ${splitted}`
        likes.appendChild(li)
    }
}


//Pause timer
function enableBTNS() {
    buttons.forEach(function(btn) {
        if (btn.disabled == true) {
            btn.disabled = false;
        }
    })
}

function pauseCount() {
    if (this.innerText == "pause") {
        this.innerText = "resume";
        disableBTNS();
        clearInterval(pause);
    } else {
        this.innerText = "pause";
        enableBTNS()
        pause = setInterval(startCounter, 1000);
    }
}

// Add a comment

function addComment(e) {
    let listComments = document.querySelector("div.comments");
    userComment = form.querySelector('input').value;
    let liTag = document.createElement('li');
    liTag.innerText = userComment;
    listComments.append(liTag);
    e.preventDefault();
}

//Event listeners

pause = setInterval(startCounter, 1000);
minusButton.addEventListener('click', subtractCount);
plusButton.addEventListener('click', addCount);
pauseButton.addEventListener('click', pauseCount);
heartButton.addEventListener('click', addLike);
form.addEventListener('submit', addComment);