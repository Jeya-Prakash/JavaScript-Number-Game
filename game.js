var guess, n = Math.floor(Math.random() * 100) + 1,
        dom = document,
        btn = dom.querySelector('#guessBtn'),
        ip = dom.querySelector('#ip'),
        newGame = dom.querySelector('#newGame'),
        guessList = dom.querySelector('#guessList'),
        rightDiv = dom.querySelector('#rightDiv'),
        wrongDiv = dom.querySelector('#wrongDiv'),
        infoDiv = dom.querySelector('#infoDiv'),
        tries = dom.querySelector('#tries');

btn.addEventListener('click', function () {
    guess = ip.value;
    ip.focus();
    if (guess >= 1 && guess <= 100) {
        ip.value = '';
        infoDiv.style.display = 'none';
        if (guess == n) {
            guessList.innerHTML += '<span class="correct">' + guess + '</span>';
            rightDiv.style.display = 'block';
            wrongDiv.style.display = 'none';
            newGame.style.display = 'initial';
            this.setAttribute('disabled', 'true');
            tries.innerHTML = 10 - dom.querySelectorAll('#guessList span').length;
        } else {
            if (dom.querySelectorAll('#guessList span').length < 9) {
                guessList.innerHTML += '<span>' + guess + '</span>';
                tries.innerHTML = 10 - dom.querySelectorAll('#guessList span').length;
                wrongDiv.innerHTML = 'Wrong Guess. Your guess is <strong>' + (guess > n ? 'high' : 'low') + '</strong>.';
                wrongDiv.style.display = 'block';
            }
            else {
                tries.innerHTML = 0;
                wrongDiv.style.display = 'none';
                newGame.style.display = 'initial';
                this.setAttribute('disabled', 'true');
                guessList.innerHTML += '<div class="gameOver">Game Over ! <div id="answerDiv">Answer is ' + n + '</div></div>';
            }
        }
    }
    else
        infoDiv.style.display = 'block';

});
newGame.addEventListener('click', function () {
    n = Math.floor(Math.random() * 100) + 1;
    ip.value = '';
    ip.focus();
    tries.innerHTML = 10;
    guessList.innerHTML = '';
    this.style.display = 'none';
    rightDiv.style.display = 'none';
    wrongDiv.style.display = 'none';
    btn.removeAttribute('disabled');
});
ip.addEventListener('focus', function () {
    setTimeout(function () {
        window.scrollTo(0, window.innerHeight);
    },0);
});
