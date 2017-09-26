// Intro

let introAction = () => {

   setTimeout(function(){document.getElementById('hero').classList.remove('forIntro')},100);

};



// Scrolling

let navSizing = () => {

   const nav = document.getElementById('nav');
   let [a,b] = [window.innerWidth, window.pageYOffset];

   if (a > 740 && b > 60 || 740 > a && b > 5) {

      nav.classList.add('nav-scroll')

   } else {

      nav.classList.remove('nav-scroll')

   }

};


//  Select Link

let selectAndCopy = (obj,text) => {

   text.select();

   const copied = document.execCommand('copy');

   if (copied) {
      obj.innerHTML = "Copied!"
   } else {
      obj.innerHTML = "Didn't Copy"
   }

};

(a => {

   if (a == "download") {

      const linkButton = document.getElementById('linkcopy'),
      linkText = document.getElementById('linktext');

      linkButton.onclick = function(){selectAndCopy(this,linkText)};

      linkText.onclick = function(){this.select()};

   } else if (a == "home") {

      document.getElementById('top').onload = introAction;

   }

})(document.body.id);


// Call Functions

window.addEventListener('scroll',navSizing);

window.addEventListener('resize',navSizing);
