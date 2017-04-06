// Intro

function introAction() {

    if (document.body.id == "home") {

        setTimeout(function(){document.getElementById('hero').classList.remove('forIntro')},100);

    }

}



// Scrolling

function navSizing() {

    var a = window.innerWidth, b = window.pageYOffset, nav = document.getElementById('nav');

    if (a > 740 && b > 60 || 740 > a && b > 5) {
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

(function(){

    if (document.body.id == "download") {

        var linkButton = document.getElementById('linkcopy'),
        linkText = document.getElementById('linktext');

        linkButton.onclick = function(){selectAndCopy(this,linkText)};

        linkText.onclick = function(){this.select()};

    }

})();



// Call Functions

window.onscroll = navSizing;

window.onresize = navSizing;

window.onload = introAction;
