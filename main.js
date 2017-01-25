var scrolled, nav = document.getElementById('nav'), menu = document.getElementById('menu'), menuLinks = document.getElementsByTagName('li'), menuShowing;


// scrolling

window.onscroll = function() {

    if (window.pageYOffset > 10 && !scrolled) {

        scrolled = true;

        if (window.innerWidth > 740) {

            nav.classList.add('shrink-large')

        }

        else {

            nav.classList.add('shrink-small')

        }

    }

    else if (window.pageYOffset < 10 && scrolled) {

        scrolled = false;

        nav.classList.remove('shrink-large');

        nav.classList.remove('shrink-small')

    }

}



// pullout menu

document.getElementById('poma').onclick = function(event) {

    event.stopPropagation();

    menuShowing = true;

    menu.classList.add('show-menu')

}

menu.onclick = function(event) {

    event.stopPropagation()

}

document.body.onclick = function() {

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
