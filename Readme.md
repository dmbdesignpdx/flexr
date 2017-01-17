# Flexr Grid - Beta (0.8.0)

Flexr is a responsive grid for those who just want a grid. Created by a graphic designer with an acute focus on the digital grid layout and its response to different screens. It features two types of column-collapsing: Expanding, Shrinking and Filling.


## First Thing's First

You gotta link Flexr CSS.

<pre>&lt;head&gt;

   &lt;link href="path-to/<b>flexr.css</b>" rel="stylesheet"&gt;

   &lt;link href="path-to/your.css" rel="stylesheet"&gt;

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


## Defining Columns

**Shrinking Columns** is the default type of collapsing.

To create **Expanding Columns**, all you need to do is add the expanding class <code>exp</code> in the parent row:

<pre>&lt;div class="row <b>exp</b>"&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

&lt;/div&gt;</pre>

**New!** To define **Filling Columns**, just add the filling class <code>fill</code> in the parent row. Filling Columns make their parent row full width to its parent, and divide the space between themselves equally with no gutters.


## Justifying Columns

The default justification is centered. To justify the columns to left or the right, just add the class <code>jus-[l,r]</code> to the parent row. For example, left-justification:

<pre>&lt;div class="row <b>jus-l</b>"&gt;

   &lt;div class="col-4"&gt;...&lt;/div&gt;

&lt;/div&gt;</pre>


## Flexr Nav Objects

You can use **Flexr Nav Objects** to help keep the logo and menu links inline with the Flexr grid. The <code>logo-</code> and <code>menu-</code> objects act just like columns and each object has a size that fits into the grid <code>[s,m,l,xl]</code>.

The contents of the menu object will be automatically spaced evenly. If that's not what you want, you can override that by using the same justification classes previously mentioned.

Here is an example of a nav utilizing the Flexr options:

<pre>&lt;nav class="row"&gt;

   &lt;div class="<b>logo-m</b>"&gt;...&lt;/div&gt;

   &lt;ul class="<b>menu-xl</b>"&gt;...&lt;/ul&gt;

&lt;/nav&gt;</pre>


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
      
         <div class="logo">...</div>
         
         <ul class="menu-xl">...</ul>
   
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


### Current Version of Flexr: 0.8.0

Version Release: January 17, 2017

File Size: 1.8KB


                
Be sure to check back to see if you're using the current version!
