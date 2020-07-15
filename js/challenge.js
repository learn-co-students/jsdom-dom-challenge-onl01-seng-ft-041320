document.addEventListener("DOMContentLoaded", function() {
    let timer = setInterval(increaseCount, 1000)

    function increaseCount() {
        let count = parseInt(document.getElementById('counter').innerText);
        let newCount = count + 1;
        document.getElementById('counter').innerText = newCount;
    }

    function decreaseCount() {
        let count = parseInt(document.getElementById('counter').innerText);
        let newCount = count - 1;
        document.getElementById('counter').innerText = newCount;
    }
    let numberLikes = {};
    function increaseLikes(count) {
        
        if (Object.keys(numberLikes).includes(count)) {
            numberLikes[count] += 1;
        }
        else {
            numberLikes[count] = 1;
        }
    }

    function showLikes(count) {
        let ul = document.querySelector('ul.likes')
        let li = document.createElement('li')
        li.innerHTML = `#${count} has ${numberLikes[count]} likes`
        ul.appendChild(li);
    }

    function pauseCount() {
        clearInterval(timer);
        document.getElementById('pause').innerText = "resume";
        document.getElementById('pause').id = "resume";
        document.getElementById('resume').addEventListener("click", function(e) {
            console.lo
            resumeCount();
        })
    }

    function resumeCount() {
        timer = setInterval(increaseCount, 1000);
        document.getElementById('resume').innerText = "pause";
        document.getElementById('resume').id = "pause";
    }

    document.getElementById('plus').addEventListener("click", function(e) {
        increaseCount();
    })

    document.getElementById('minus').addEventListener("click", function(e) {
        decreaseCount();
    })

    document.getElementById('heart').addEventListener("click", function(e) {
        let count = document.getElementById('counter').innerText;
        increaseLikes(count);
        showLikes(count);
    })

    document.getElementById('pause').addEventListener("click", function(e) {
        pauseCount();
    })

    document.getElementById('submit').addEventListener("click", function(e) {
        e.preventDefault();
        let comment = document.querySelector('input').value
        let list = document.getElementById('list')
        let p = document.createElement('p')
        p.innerText = comment
        list.appendChild(p);
    })


})