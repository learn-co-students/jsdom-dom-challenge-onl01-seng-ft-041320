document.addEventListener("DOMContentLoaded", 
function() {
    const counter = document.getElementById('counter');

    const minusButton = document.getElementById('minus');

    const plusButton = document.getElementById('plus');

    const heartButton = document.getElementById('heart');

    let pauseButton = document.getElementById('pause');

    const submitButton = document.getElementById('submit')

    const buttonsArray = [minusButton, plusButton, heartButton, submitButton] 

    const commentArea = document.querySelector('.comments');

    const commentForm = document.getElementById('comment-form');

    const commentInputField = document.getElementById('comment-input');

    const likesArea = document.querySelector('.likes')

    function timerFunc(counter){
        counter.innerHTML = parseInt(counter.innerHTML) + 1
    };

    let timer = window.setInterval(timerFunc, 1000, counter);

    function pauseOrResumeCounter(e){
        if (e.target.id == 'pause'){
            clearInterval(timer);
            e.target.id = 'resume';
            e.target.innerText = 'resume';
            buttonsArray.forEach(function(button){
                button.disabled = true;
            });

        } else {
            timer = window.setInterval(timerFunc, 1000, counter);
            e.target.id = 'pause';
            e.target.innerText = 'pause';
            heartButton.disabled = false;
            buttonsArray.forEach(function(button){
                button.disabled = false;
            });
        }

    };

    function reduceTime(){
        counter.innerHTML = parseInt(counter.innerText) - 1;
    };

    function addTime(){
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    };

    function addComment(e){
        e.preventDefault();
        let commentText = commentInputField.value;
        let comment = document.createElement("p");
        comment.innerHTML = commentText;
        commentArea.appendChild(comment);
        commentInputField.value = '';
    };

    function addLikes(){
        let number = counter.innerText;
        if (!!document.querySelector(`[data-num="${number}"]`)){
            let li = document.querySelector(`[data-num="${number}"]`);
            let likesCount = parseInt(li.firstElementChild.innerHTML);
            li.innerHTML=number+` has been liked <span>${likesCount+1}</span> times`
        } else {
            likesArea.innerHTML += `<li data-num="${number}">${number} has been liked <span>1</span> time.</li>`
        }
    };

    pauseButton.addEventListener('click', pauseOrResumeCounter);

    minusButton.addEventListener('click', reduceTime);

    plusButton.addEventListener('click', addTime);

    commentForm.addEventListener('submit', addComment);

    heartButton.addEventListener('click', addLikes);

});