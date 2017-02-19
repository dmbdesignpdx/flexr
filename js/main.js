var nav = document.getElementById('nav'),
linkButton,
linkText;


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



// Intro

function introAction() {

    if(document.body.id == "home") {

        document.getElementById('hero').classList.remove('forIntro')

    }

}



//  Select Link


function selectAndCopy(obj){

        linkText.select();

        var copied = document.execCommand('copy');

        if (copied) {
            obj.innerHTML = "Copied!"
        }
        else {
            obj.innerHTML = "CMD+C/CTRL+C"
        }

}

function selectAll(obj) {

    obj.select();

}

function findLinkID(check){

    if (check) {
        linkButton = check,
        linkText = document.getElementById('linktext');

        linkButton.onclick = function(){selectAndCopy(this)};
        linkText.onclick = function(){selectAll(this)};

    }

}

findLinkID(document.getElementById('linkcopy'));



// Call Functions

window.onscroll = function() {

    navSizing()

};

window.onresize = function() {

    navSizing()

};


window.onload = function() {

    navSizing();

    introAction()

};
