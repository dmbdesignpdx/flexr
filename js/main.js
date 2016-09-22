// For Flexr Grid - Beta

var menuShowing,
nav = document.getElementById('nav'),
menu = document.getElementById('menu'),
menuLinks = document.getElementsByTagName('li');


// scrolling

function navSizing() {

    var a = window.innerWidth, b = window.pageYOffset;

    if ((a < 740 && b > 20) || (a > 740 && b > 60)) {

        nav.classList.add('nav-scroll')

    }
    else {

        nav.classList.remove('nav-scroll')

    }

}

window.onscroll = function() {

    navSizing()

}


// Resizing

window.onresize = function() {

    navSizing()

}


// drawer

document.getElementById('poma').onclick = function(event) {

    event.stopPropagation();

    menuShowing = true;

    nav.children[0].classList.add('show-menu')

}

menu.onclick = function(event) {

    event.stopPropagation()

}

document.body.onclick = function(e) {

    if (menuShowing) {

        menuShowing = false;

        nav.children[0].classList.remove('show-menu')

    }

}

for (var i = 0; i < menuLinks.length; i++) {

    menuLinks[i].onclick = function() {

        if (menuShowing) {

            menuShowing = false;

            nav.children[0].classList.remove('show-menu')

        }

    }

}
