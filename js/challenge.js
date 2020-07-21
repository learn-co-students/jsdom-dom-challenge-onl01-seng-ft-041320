// elements
let counter = document.querySelector("#counter");
let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let heart = document.querySelector("#heart");
let likes = document.querySelector(".likes");
let commentsList = document.querySelector("#list");
let commentForm = document.querySelector("#comment-form");
let commentInput = document.querySelector("#comment-input");
let submitButton = document.querySelector("#submit");
let pauseButton = document.querySelector("#pause");



// counter
setInterval(()=>{counter.innerText = parseInt(counter.innerText) + 1}, 1000);

// increment - decrement
plusButton.addEventListener("click", ()=>{counter.innerText = parseInt(counter.innerText) + 1});
minusButton.addEventListener("click", ()=>{counter.innerText = parseInt(counter.innerText) - 1});


// like

heart.addEventListener("click", (e)=> {
    let like = document.createElement("li");
    like.innerText = `The number ${e.target.offsetParent.children[1].innerText} has been liked `;
    likes.appendChild(like);
});

// comment
commentForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    let comment = document.createElement("li");
    comment.innerText = e.target.elements[0].value;
    commentsList.appendChild(comment);
    commentInput.value = "";
    // comment.innerText = e.target.
})

// disable buttons
pauseButton.addEventListener("click",  () => {
    let buttons = [heart, plusButton, minusButton, submitButton];
    for(let i = 0; i < buttons.length; i++) {
        if (buttons[i].attributes.disabled === undefined || buttons[i].attributes.disabled === false) {
            buttons[i].setAttribute("disabled", true);
            pauseButton.innerText = "resume";
        } else {
            buttons[i].removeAttribute("disabled");
            pauseButton.innerText = "pause";
        }


    }})
