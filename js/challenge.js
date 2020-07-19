
let counter = document.getElementById('counter');

let alwaysTrue = true;

let secondCounter = 0
let timer = setInterval(function() {
    if (alwaysTrue) {
        counter.innerHTML = secondCounter
        secondCounter += 1;
    }
}, 1000);
// code to make counter increment by 1 every second



const minusButton = document.getElementById('minus');
minusButton.addEventListener('click', function() {
    secondCounter -= 1;
    counter.innerHTML = parseInt(counter.innerHTML) - 1
    alert('1 has been subtracted from the counter');
})

const plusButton = document.getElementById('plus');
plusButton.addEventListener('click', function() {
    secondCounter += 1;
    counter.innerHTML = parseInt(counter.innerHTML) + 1
    alert('1 has been added to the counter');
})

const heartButton = document.getElementById('heart');
heartButton.addEventListener('click', function() {
    let like = document.querySelector('.likes')
    if(document.getElementById(`Li${counter}`) == null) {
        let li = document.createElement('li');
        li.setAttribute('id', `Li${counter}`)
        li.innerHTML = `${counter} have this many likes : 1`
        like.appendChild(li)
    }
    else {
        let li = document.getElementById(`Li${counter}`)
        let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
        li.innerHTML = `${counter} have this many likes:${splitted}`
        like.appendChild(li)
    }
})

const pauseButton = document.getElementById('pause');
// pauses timer
pauseButton.addEventListener('click', function() {
    if (alwaysTrue) {
        pauseButton.innerHTML = 'resume'
        alwaysTrue = false
    }
    else {
        pauseButton.innerHTML = 'pause'
        alwaysTrue = true 
    }
})

