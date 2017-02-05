# Flexr Grid - Beta (0.9.0)

Flexr is a responsive grid for those who just want a grid. Created by a graphic designer with an acute focus on the digital grid layout and its response to different screens. It features three types of column-collapsing: Expanding, Shrinking and Filling.


## First Thing's First

You gotta link the Flexr CSS **before** your own CSS:

<pre>&lt;head&gt;

   ...

   &lt;link rel="stylesheet" href="path-to/<b>flexr.css</b>"&gt;

   &lt;link rel="stylesheet" href="path-to/your.css"&gt;
   
   ...

&lt;/head&gt;</pre>


## Setting Up

Here's the basic structure:

<pre>&lt;section | container&gt;

   &lt;row&gt;
   
      &lt;column(s)&gt;
      
         <b>your stuff here!</b>
      
      &lt;/column(s)&gt;

   &lt;/row&gt;

&lt;/section | container&gt;</pre>

This structure isn't set in stone, you may choose to use a section or container as row. It's up to you!


## One Class Will Do

Creating a column requires only one class <code>col-</code> defined by its size <code>[1&ndash;12]</code> (total column size no more than 12 per row):

<pre>&lt;div class="row"&gt;

   &lt;div class="<b>col-6</b>"&gt;...&lt;/div&gt;

   &lt;div class="<b>col-6</b>"&gt;...&lt;/div&gt;

&lt;/div&gt;</pre>

**New!** If you'd like to use a column with a width that <i>you</i> define (i.e. a logo), simply give the column the class <code>col-x</code> and define the width in your css.


## Defining Columns

**Shrinking Columns** is the default type of collapsing.

To create **Expanding Columns**, all you need to do is add the expanding class <code>exp</code> in the parent row:

<pre>&lt;div class="row <b>exp</b>"&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

&lt;/div&gt;</pre>

Expanding Columns are columns that instead of shrinking in width along with the screen size (as Shrinking Columns do), they expand to keep their real estate on the screen.

**New!** To define **Filling Columns**, just add the filling class <code>fill</code> in the parent row. Filling Columns make their parent row full width to its parent, and divide the space between themselves equally with no gutters.


## Justifying Columns

The default justification is centered. To justify the columns to left or the right, just add the class <code>jus-[l,r]</code> to the parent row. For example, left-justification:

<pre>&lt;div class="row <b>jus-l</b>"&gt;

   &lt;div class="col-4"&gt;...&lt;/div&gt;

&lt;/div&gt;</pre>


## Column/Gutter Widths and Break Points

Break Point|Column Width|Gutter Width
---|---|---
1180px +|~68px|28px
1180px|~60px|28px
940px|~44px|24px
740px|~31px|16px
520px|auto|16px


## Basic Site Example

```html
<body>

   <header>

      <nav class="row">
      
         <div class="col-x">...</div>
         
         <ul class="col-5">...</ul>
   
      </nav>
   
   </header>
   
    <section>
   
      <div class="row">
      
         <div class="col-6">...</div>
         
         <div class="col-6">...</div>
      
      </div>
   
   </section>
   
   <section>
   
      <div class="row">
      
         <div class="col-4">...</div>
         
         <div class="col-4">...</div>
         
         <div class="col-4">...</div>
      
      </div>
   
   </section>
   
   <footer>
   
      <div class="row">
      
         <div class="col-8">...</div>
         
         <div class="col-3">...</div>
      
      </div>
   
   </footer>

</body>
```


### Current Version: 0.9.0

Release Date: **January 30, 2017**
Release Notes: *Removed* Flexr Nav Objects. *Added* col-x class.

File Size: 1.6KB


                
Be sure to check back to see if you're using the current version!
