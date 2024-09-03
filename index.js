let xturn = true;
let oturn = false;
let divarr = []
let head = document.getElementById('header');
let winMood = false;

let open=setTimeout(function openHTMLFile() {
    let url = "game.html";
    window.open(url, "_blank");
 }
 ,4000);
function setTurn() {
    if (xturn === true) {
        xturn = false;
        oturn = true;
        head.innerHTML = 'O';
    }
    else {
        xturn = true;
        oturn = false;
        head.innerHTML = 'X';
    }
}
function play(id) {
    if (xturn === true && document.getElementById(id).innerHTML == '' && winMood == false) {
        document.getElementById(id).innerHTML = 'X';
        setTurn();
    }
    else if (oturn === true && document.getElementById(id).innerHTML == '' && winMood == false) {
        document.getElementById(id).innerHTML = 'O';
        setTurn();
    }
    else {

    }
    checkWinner();
}
function checkWinner() {
    for (let i = 1; i < 10; i++) 
    {
        divarr[i] = document.getElementById('div' + i).innerHTML;
    }
    if (divarr[1] == divarr[2] && divarr[2] == divarr[3] && divarr[1] != '') {
        if (divarr[1] == 'X') {
            head.innerHTML = 'X WON!';
        }
        else {
            head.innerHTML = 'O WON!';
        }
        stopGame();
        winMood = true;
    }
    else if (divarr[4] == divarr[5] && divarr[5] == divarr[6] && divarr[4] != '') {
        if (divarr[4] == 'X') {
            head.innerHTML = 'X WON!';
        }
        else {
            head.innerHTML = 'O WON!';
        }
        stopGame();
        winMood = true;
    }
    else if (divarr[7] == divarr[8] && divarr[8] == divarr[9] && divarr[7] != '') {
        if (divarr[7] == 'X') {
            head.innerHTML = 'X WON!';
        }
        else {
            head.innerHTML = 'O WON!';
        }
        stopGame();
        winMood = true;
    }
    else if (divarr[1] == divarr[4] && divarr[4] == divarr[7] && divarr[1] != '') {
        if (divarr[1] == 'X') {
            head.innerHTML = 'X WON!';
            
        }
        else {
            head.innerHTML = 'O WON!';
        }
        stopGame();
        winMood = true;

    }
    else if (divarr[2] == divarr[5] && divarr[5] == divarr[8] && divarr[2] != '') {
        if (divarr[2] == 'X') {
            head.innerHTML = 'X WON!';
        }
        else {
            head.innerHTML = 'O WON!';
        }
        stopGame();
        winMood = true;

    }
    else if (divarr[3] == divarr[6] && divarr[6] == divarr[9] && divarr[3] != '') {
        if (divarr[3] == 'X') {
            head.innerHTML = 'X WON!';
        }
        else {
            head.innerHTML = 'O WON!';
        }
        stopGame();
        winMood = true;
    }
    else if (divarr[7] == divarr[8] && divarr[8] == divarr[9] && divarr[7] != '') {
        if (divarr[7] == 'X') {
            head.innerHTML = 'X WON!';
        }
        else {
            head.innerHTML = 'O WON!';
        }
        stopGame();
        winMood = true;

    } else if (divarr[1] == divarr[5] && divarr[5] == divarr[9] && divarr[1] != '') {
        if (divarr[1] == 'X') {
            head.innerHTML = 'X WON!';
        }
        else {
            head.innerHTML = 'O WON!';
        }
        stopGame();
        winMood = true;

    }
    else if (divarr[3] == divarr[5] && divarr[5] == divarr[7] && divarr[3] != '') {
        if (divarr[3] == 'X') {
            head.innerHTML = 'X WON!';
        }
        else {
            head.innerHTML = 'O WON!';
        }
        stopGame();
        winMood = true;

    }
    else {
        if(winMood==false && divarr[1]!=''  && divarr[2]!=''&& divarr[3]!='' 
            && divarr[4]!='' && divarr[5]!='' && divarr[6]!='' 
            && divarr[7]!='' && divarr[8]!='' && divarr[9]!='') 
        head.innerHTML = 'TIE';
        stopGame();
    }
}

checkWinner();
function restart() {
    location.reload();

}
function stopGame() 
{
    document.getElementById('restart').innerHTML = '<button onclick=restart()> RESTART</button>'
}
clearTimeout(open);
