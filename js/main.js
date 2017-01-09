// For Flexr Grid - Beta

var menuShowing,
nav = document.getElementById('nav'),
menu = document.getElementById('menu'),
menuLinks = document.getElementsByTagName('li');


// Scrolling

function navSizing() {

    var a = window.innerWidth, b = window.pageYOffset;

    if ((740 > a && b > 20) || (a > 740 && b > 60)) {

        nav.classList.add('nav-scroll')

    }
    else {

        nav.classList.remove('nav-scroll')

    }

}


// drawer

function drawerAction() {

    if (menuShowing) {

        menuShowing = false;

        nav.classList.remove('show-menu')

    }
    else {

        menuShowing = true;

        nav.classList.add('show-menu')

    }

}


// Intro

function introAction() {

    if(document.body.id == "home") {

        document.getElementById('hero').classList.remove('forIntro')

    }

}


// Call Functions

window.onscroll = function() {

    navSizing()

};

window.onresize = function() {

    navSizing()

};

document.getElementById('poma').onclick = function() {

    drawerAction()

};

for (var i in menuLinks) {

    menuLinks[i].onclick = function() {

        drawerAction()

    }

};

window.onload = function() {

    introAction()

};
