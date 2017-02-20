// Intro

function introAction() {

    if (document.body.id == "home") {

        document.getElementById('hero').classList.remove('forIntro')

    }

}



// Scrolling

function navSizing() {

    var a = window.innerWidth, b = window.pageYOffset, nav = document.getElementById('nav');

    if ((740 > a && b > 20) || (a > 740 && b > 60)) {

        nav.classList.add('nav-scroll')

    } else {

        nav.classList.remove('nav-scroll')

    }

}



//  Select Link

function selectAndCopy(obj,text) {

        text.select();

        var copied = document.execCommand('copy');

        if (copied) {
            obj.innerHTML = "Copied!"
        }
        else {
            obj.innerHTML = "Didn't Copy"
        }

}

function selectAll(obj) {

    obj.select();

}

function findLinkID(check) {

    if (check) {
        var linkButton = check,
        linkText = document.getElementById('linktext');

        linkButton.onclick = function(){selectAndCopy(this,linkText)};

        linkText.onclick = function(){selectAll(this)};

    }

}



// Call Functions

findLinkID(document.getElementById('linkcopy'));

window.onscroll = navSizing;

window.onresize = navSizing;

window.onload = introAction;
