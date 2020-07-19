document.addEventListener("DOMContentLoaded", () => {
    //counter:
    
    var i = 0;
    const counter = document.getElementById('counter');

    function start() {
        setInterval(increase, 1000);
    }

    function increase() {
        i++;
        counter.innerHTML = i;
    }

    start();

    //minus & plus buttons
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');

    function decreaseCounter(e) {

    }

    function increaseCounter() {
        let count = counter.innerHTML;
        let updatedCount = count += 1;
        counter.innerHTML = updatedCount;
        // value = counter.innerHTML
        // counter.innerHTML(++value);
        // console.log(value);
        // return
    }
    

    minus.addEventListener('click', decreaseCounter);
    plus.addEventListener('click', increaseCounter);

    
    const heart = document.getElementById('heart');
    const pause = document.getElementById('pause');
    const likes = document.getElementById('likes');
    const commentForm = document.getElementById('comment-form');
    const comments = document.getElementsByClassName('comments');

});
//  #list#comments