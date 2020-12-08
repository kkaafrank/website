// JavaScript source code


var swimBtn = document.getElementById('swimmingButton');
var swimModal = document.getElementById('swimmingModal');

var violinBtn = document.getElementById('violinButton');
var violinModal = document.getElementById('violinModal');

var artBtn = document.getElementById('artButton');
var artModal = document.getElementById('artModal');

var gamesBtn = document.getElementById('gamesButton');
var gamesModal = document.getElementById('gamesModal');

var animeBtn = document.getElementById('animeButton');
var animeModal = document.getElementById('animeModal');

var close = document.getElementsByClassName('closeModal');
var modal = document.getElementsByClassName('modal');

//
swimBtn.onclick = function() {
    swimModal.style.display = "block";
}

close[0].onclick = function () {
    modal[0].style.display = "none";
}

//
violinBtn.onclick = function () {
    violinModal.style.display = "block";
}

close[1].onclick = function () {
    modal[1].style.display = "none";
}


//
artBtn.onclick = function () {
    artModal.style.display = "block";
}

close[2].onclick = function () {
    modal[2].style.display = "none";
}


//
gamesBtn.onclick = function () {
    gamesModal.style.display = "block";
}

close[3].onclick = function () {
    modal[3].style.display = "none";
}


//
animeBtn.onclick = function () {
    animeModal.style.display = "block";
}

close[4].onclick = function () {
    modal[4].style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
    }

    if (event.target == modal[1]) {
        modal[1].style.display = "none";
    }

    if (event.target == modal[2]) {
        modal[2].style.display = "none";
    }

    if (event.target == modal[3]) {
        modal[3].style.display = "none";
    }

    if (event.target == modal[4]) {
        modal[4].style.display = "none";
    }
}