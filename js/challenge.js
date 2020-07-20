document.addEventListener("DOMContentLoaded", () => {
    //counter:
    
    var i = 0;
   
    let counter = document.getElementById('counter');
    const likes = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const comments = document.getElementById('list');
    let commentInput = document.getElementById('comment-input')
    const submit = document.getElementById('submit')
    const heart = document.getElementById('heart');

    let start = window.setInterval(increase, 1000);
    // debugger

    function increase() {
        i++;
        counter.innerHTML = i;
    }

   

    //minus & plus buttons
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');

    function decreaseCounter() {
        counter.innerHTML = i
        i -= 1;
    }

    function increaseCounter() {
        counter.innerHTML = i
        i += 1;
    }
    

    minus.addEventListener('click', decreaseCounter);
    plus.addEventListener('click', increaseCounter);

//pause timer:
    let pause = document.getElementById('pause');
    let buttons = document.querySelectorAll('button')
    const allButtonsArray = [submit, plus, minus, heart]
//click pause and have other buttons all disabled
//pause counter 
//changes 'pause' to 'resume'
    function pauseCounter(e) {
        if (e.target.innerText == 'pause') {
            clearInterval(start);
            e.target.innerText = 'resume';
            allButtonsArray.forEach(function(button) {
                button.disabled = true
            });
        }else{
            start = window.setInterval(increase, 1000);
            e.target.innerText = 'pause';
            allButtonsArray.forEach(function(button) {
                button.disabled = false
            });
        }
    }
    pause.addEventListener('click', pauseCounter)

//  #list#comments
//type in a comment
//click submit
//comment (input field) gets added to list (<p>)
//words to disappear from comment field

    function addComment(e) {
        e.preventDefault();
        let commentInputText = commentInput.value  //string
        const newComment = document.createElement('p') 
        newComment.innerText = commentInputText //string
        // debugger
        comments.appendChild(newComment)
        commentInput.value = ""
    }

commentForm.addEventListener('submit', addComment)


// likes / heart: 
// click on heart
// counter number gets liked x amount of times
// 
    


heart.addEventListener('click', function() {
    if(document.getElementById(`Li${i}`) == null) {
        let li = document.createElement("li");
        li.setAttribute("id", `Li${i}`);
        li.innerText = `${i} has this many likes: 1`
        likes.appendChild(li)
    }
    else {
        let li = document.getElementById(`Li${i}`)
        let newCount = parseInt(li.innerText.split(":")[1]) + 1
        li.innerText = `${i} has this many likes: ${newCount}`
        likes.appendChild(li)
    }
})
    

});


