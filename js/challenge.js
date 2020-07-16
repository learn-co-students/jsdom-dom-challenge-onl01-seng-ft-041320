document.addEventListener("DOMContentLoaded", function() {
    let totalSeconds = 0;
    let counter = setInterval(increaseTimer, 1000);
    let secondsLabel = document.getElementById("counter");
    let pauseButton = document.querySelector("#pause");
    let buttons = document.querySelectorAll('button')
    let ul = document.querySelector('ul.likes');
    let form = document.querySelector("#comment-form");
    let listComments = document.querySelector("div.comments");

    function increaseTimer() {
        ++totalSeconds;
        secondsLabel.innerHTML = totalSeconds;
    }
    
    let likesCounter = {};
    function increaseLikes(counter) {
        if (Object(likesCounter).hasOwnProperty(counter)) {
            likesCounter[counter] += 1;
        }
        else {
            likesCounter[counter] = 1;
        }
    }

    function showLikes() {
        if (ul) {
            while(ul.firstChild) ul.removeChild(ul.firstChild);
        }
        for ([key, value] of Object.entries(likesCounter)) {
            let li = document.createElement('li');
            li.innerHTML += `${key} was liked ${value} times.`;
            ul.appendChild(li);
        };
    }

    function pauseCount() {
        if (this.innerText == "pause"){
          this.innerText = "resume";
          disableBTNS();
          clearInterval(counter);
        }else{
          this.innerText = "pause";
          enableBTNS()
          counter = setInterval(increaseTimer,1000);
        }
      }

    document.getElementById("minus").addEventListener("click", function(){
        --totalSeconds
    });

    function disableBTNS(){
        buttons.forEach(function(btn){
          if (btn.id != "pause"){
             btn.disabled = true;
          }
        });
      }
    
    function enableBTNS(){
        buttons.forEach(function(btn){
          if (btn.disabled == true){
             btn.disabled = false;
          }
        })
      }

    function newComment(e) {
        let li = document.createElement('li');
        li.innerText = form.querySelector('input').value;
        listComments.append(li);
        form.reset();
        e.preventDefault();
    }

    document.getElementById("plus").addEventListener("click", function(){
        ++totalSeconds
    });
    
    document.getElementById("heart").addEventListener("click", function(){
        increaseLikes(totalSeconds);
        showLikes(totalSeconds);
    
    });

    pauseButton.addEventListener('click',pauseCount);
    
    document.querySelector("#comment-form").addEventListener('submit',newComment);


});