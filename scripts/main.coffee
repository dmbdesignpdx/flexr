introAction = ->
   setTimeout ->
      document.getElementById "hero"
      .classList
      .remove "forIntro"
      return
   , 100
   return


navSizing = ->
   nav = document.getElementById "nav"
   a = window.innerWidth
   b = window.pageYOffset

   if a > 740 and b > 60 or 740 > a and b > 5
      nav.classList.add "nav-scroll"
   else
      nav.classList.remove "nav-scroll"
   return


selectAndCopy = (obj,text) ->
   text.select()

   copied = document.execCommand "copy"

   if copied then obj.innerHTML = "Copied!" else obj.innerHTML = "Didn't Copy"
   return


do (a = document.body.id) ->
   if a is "download"
      linkButton = document.getElementById "linkcopy"
      linkText = document.getElementById "linktext"

      linkButton.addEventListener "click", ->
         selectAndCopy this, linkText
         return
      linkText.addEventListener "click", ->
         this.select()
         return

   else if a is "home"
      document.getElementById "top"
         .onload = introAction
   return


window.addEventListener "scroll", navSizing
window.addEventListener "resize", navSizing
