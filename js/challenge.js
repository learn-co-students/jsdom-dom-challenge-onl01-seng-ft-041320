let counter = 0;
let counterInterval;
let counterElement = document.getElementById("counter");
let likes = {};

document.addEventListener("DOMContentLoaded", () => {
    startInterval();
});

document.getElementById("submit").addEventListener("click", () => {
    event.preventDefault();
    let commentElement = document.createElement("li");
    commentElement.innerText = document.getElementById("comment-input").value;
    document.getElementById("list").append(commentElement);
});

document.getElementById("pause").addEventListener("click", () => {
    stopInterval();
});

document.getElementById("heart").addEventListener("click", () => {
    if (counter in likes){
        likes[counter]++;
    } else {
        likes[counter] = 1;
    }
    let likesListItem = document.createElement("li");
    likesListItem.innerText = `${counter} has been liked ${likes[counter]} time`;
    document.querySelector(".likes").append(likesListItem);
})

function startInterval() {
    counterInterval = setInterval(incrementCounter, 1000);
}

function stopInterval() {
    clearInterval(counterInterval);
}

function incrementCounter() {
    counter++;
    updateCounterElement()
}

function decrementCounter() {
    counter--;
    updateCounterElement()
}

function updateCounterElement() {
    counterElement.innerText = counter;
}

document.getElementById("plus").addEventListener("click", () => {incrementCounter()});

document.getElementById("minus").addEventListener("click", () => {decrementCounter()});