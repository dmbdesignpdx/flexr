# VARIABLES
site =
   init: document.body.id
   nav: document.getElementById "nav"



# FUNCTIONS
navSizing = ->
   w = window.innerWidth
   y = window.pageYOffset

   if w > 740 and y > 60 or 740 > w and y > 5
      site.nav.classList.add "nav-scroll"
   else
      site.nav.classList.remove "nav-scroll"
   return



if site.init is "home"
   introAction = ->
      setTimeout ->
         document.getElementById "hero"
         .classList.remove "forIntro"
         return
      , 100
      return

   document.getElementById "top"
      .addEventListener "load", introAction



if site.init is "download"
   linkButton = document.getElementById "linkcopy"
   linkText = document.getElementById "linktext"

   selectAndCopy = (obj,text) ->
      text.select()

      copied = document.execCommand "copy"

      if copied then obj.innerHTML = "Copied!" else obj.innerHTML = "Didn't Copy"
      return


   linkButton.addEventListener "click", ->
      selectAndCopy this, linkText
      return
   linkText.addEventListener "click", ->
      this.select()
      return



# INVOKE
window.addEventListener "scroll", navSizing
window.addEventListener "resize", navSizing
