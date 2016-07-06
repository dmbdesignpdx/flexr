# Flexr Grid

Flexr is a responsive grid for modern browsers.


## First Thing's First

You gotta link Flexr CSS.

<pre>&lt;head&gt;

   &lt;link href="path-to/<b>flexr.css</b>" rel="stylesheet"&gt;

   &lt;link href="path-to/your.css" rel="stylesheet"&gt;

&lt;/head&gt;</pre>


## One Class Will Do

Creating a column requires only one class <code>col-</code> defined by its size <code>[1&ndash;12]</code> (total column size no more than 12 per row):

<pre>&lt;div class="row"&gt;

   &lt;div class="<b>col-6</b>"&gt;...&lt;/div&gt;

   &lt;div class="<b>col-6</b>"&gt;...&lt;/div&gt;

&lt;/div&gt;</pre>


## Defining Columns

**Shrinking Columns** is the default type of collapsing.

To define **Expanding Columns**, all you need to do is add the expanding class <code>exp</code> in the parent row:

<pre>&lt;div class="row <b>exp</b>"&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

&lt;/div&gt;</pre>


## Justifying Columns

The default justification is centered. To justify the columns to left or the right, just add the class <code>jus-[l,r]</code> to the parent row. For example, left-justification:

<pre>&lt;div class="row <b>jus-l</b>"&gt;

   &lt;div class="col-4"&gt;...&lt;/div&gt;

&lt;/div&gt;</pre>


## Flexr Nav Objects

You can use **Flexr Nav Objects** to help keep the logo and menu links inline with the Flexr grid. The <code>logo-</code> and <code>menu-</code> objects act just like columns and each object has a size that fits into the grid <code>[s,m,l,xl]</code>.

The contents of the row child and the menu object in the nav will be automatically spaced evenly. If that's not what you want, you can override that by using the same justification classes previously mentioned.

Here is an example of a nav utilizing the Flexr options:

<pre>&lt;nav&gt;

   &lt;div class="row"&gt;

      &lt;div class="<b>logo-m</b>"&gt;...&lt;/div&gt;

      &lt;ul class="<b>menu-xl</b>"&gt;...&lt;/ul&gt;

   &lt;/div&gt;

&lt;/nav&gt;</pre>


## Column/Gutter Widths and Break Points

| **Break Points** | <**520px** | 520px - 740px | 740px - 940px | 940px - 1180px | >1180px |
