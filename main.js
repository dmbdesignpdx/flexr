var scrolled, nav = document.getElementById('nav'), menuShowing;

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

document.getElementById('poma').onclick = function(event) {

    event.stopPropagation();

    menuShowing = true;

    document.getElementById('menu').classList.add('show-menu')

}

document.getElementById('menu').onclick = function(event) {

    event.stopPropagation()

}

document.body.onclick = function() {

    if (menuShowing) {

        menuShowing = false;

        document.getElementById('menu').classList.remove('show-menu')

    }

}
