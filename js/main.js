// For Flexr Grid - Beta 4.0.0

var scrolled,
nav = document.getElementById('nav'),
menu = document.getElementById('menu'),
menuLinks = document.getElementsByTagName('li'),
menuShowing;


// scrolling

window.onscroll = function() {

    if (window.innerWidth > 740){

        if (window.pageYOffset >= 60 && !scrolled){

            scrolled = true;

            nav.classList.add('shrink-large')

        }

        else if (window.pageYOffset < 60 && scrolled) {

            scrolled = false;

            nav.classList.remove('shrink-large')

        }

    }

    else {

        if (window.pageYOffset >= 20 && !scrolled){

            scrolled = true;

            nav.classList.add('shrink-small')

        }

        else if (window.pageYOffset < 20 && scrolled) {

            scrolled = false;

            nav.classList.remove('shrink-small')

        }

    }

}


// Resizing

window.onresize = function() {

    if(window.innerWidth < 740 && scrolled) {

        nav.classList.remove('shrink-large');

        nav.classList.add('shrink-small')

    }

    else if (window.innerWidth > 740 && scrolled) {

        nav.classList.add('shrink-large');

        nav.classList.remove('shrink-small')

    }

}


// drawer

document.getElementById('poma').onclick = function(event) {

    event.stopPropagation();

    menuShowing = true;

    menu.classList.add('show-menu')

}

menu.onclick = function(event) {

    event.stopPropagation()

}

document.body.onclick = function(e) {

    if (menuShowing) {

        menuShowing = false;

        menu.classList.remove('show-menu')

    }

}

for (var i = 0; i < menuLinks.length; i++) {

    menuLinks[i].onclick = function() {

        if (menuShowing) {

            menuShowing = false;

            menu.classList.remove('show-menu')

        }

    }

}
