// For Flexr Grid - Beta

var menuShowing,
nav = document.getElementById('nav'),
menu = document.getElementById('menu'),
menuLinks = document.getElementsByTagName('li');


// scrolling

function navSizing() {

    if (window.innerWidth < 740) {

        if (window.pageYOffset < 20) {

            nav.classList.remove('nav-scroll')

        }

        else  {

            nav.classList.add('nav-scroll')

        }

    }
    else {

        if (window.pageYOffset < 60) {

            nav.classList.remove('nav-scroll')

        }

        else {

            nav.classList.add('nav-scroll')

        }

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
