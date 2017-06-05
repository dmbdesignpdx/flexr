# Flexr Grid - Version 2.0.2

Flexr is a responsive grid for those who just want a grid. Created by a web designer with an acute focus on the digital grid layout and its response to different screens. It features three ways that column react: expand, shrink and stretch.


## First Thing's First

You gotta link the Flexr CSS **before** your own CSS:

```html
<head>

   ...

   <link rel="stylesheet" href=".../flexr.css">

   <link rel="stylesheet" href=".../your.css">

   ...

</head>
```


## Setting Up

Here's the basic structure:

```html
<container>

   <row>

      <column(s)>

         your stuff!

      </column(s)>

   </row>

</container>
```

A container can be practically anything: a `div`, `section`, `nav`, `ul`, etc., even the `body`; just something to _contain_ your rows and columns. It doesn't even need a special class.


## One Class Will Do

Creating a column requires only one class `col-` defined by its size `[1&ndash;12]` (total column size no more than 12 per row). No need for offset columns.

```html
<div class="row">

   <div class="col-6">...</div>

   <div class="col-6">...</div>

</div>
```

If you'd like to use a column with a width that <i>you</i> define (i.e. a logo), simply give the column the class `col-x` and define the width in your css.


## Defining Columns

**Shrinking Columns** is the default type of collapsing.

To create **Expanding Columns**, all you need to do is add the expanding class `expand` in the parent row:

```html
<div class="row expand">

   <div class="col-3">...</div>

   <div class="col-3">...</div>

   <div class="col-3">...</div>

   <div class="col-3">...</div>

</div>
```

Expanding Columns are columns that instead of shrinking in width along with the screen size (as Shrinking Columns do), they expand to keep their real estate on the screen.

To define **Stretching Columns**, just add the stretching class `stretch` in the parent row. Stretching Columns make their parent row full width to its parent, and divide the space between themselves equally with no gutters.

## Switching Column Sizes

Sometimes at certain screen sizes you'd like the column to be specifically bigger or smaller. Flexr has four special prefixes for switching that you can use. All you need to do is attach the prefix that correlates with the **break point** you want to the column size you want it to change to.

<dl>
   <dt><code>tl-[col]</code></dt>
   <dd>Tablet Landscape</dd>
   <dt><code>tp-[col]</code></dt>
   <dd>Tablet Portrait</dd>
   <dt><code>pl-[col]</code></dt>
   <dd>Phone Landscape</dd>
   <dt><code>pp-[col]</code></dt>
   <dd>Phone Portrait</dd>
</dl>

Where `[col]` follows the same column class name structure:

```html
<div class="row">

   <div class="col-5 tp-col-6">...</div>

   <div class="col-7 tp-col-6">...</div>

</div>
```

## Justifying Columns

The default justification is centered. To justify the columns to left or the right, just add the class `jus-[l,r]` to the parent row. For example, left-justification:

```html
<div class="row jus-l">

   <div class="col-4">...</div>

</div>
```


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

      <div class="row expand">

         <div class="col-3">...</div>

         <div class="col-3">...</div>

         <div class="col-3">...</div>

         <div class="col-3">...</div>

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

## Flexr Badges

If you'd like to indicate on your site that you're using Flexr, here are some badges you can link to:

```txt
http://flexrgrid.com/host/flexr-logo-use.svg

http://flexrgrid.com/host/flexr-logo-use-black.svg

http://flexrgrid.com/host/flexr-logo-use-white.svg
```

## Current Release Info

**Version:** 2.0.2

**Date:** June 5, 2017

**Notes:** Removes col-4 ability to expand.

**File Size:** 3KB

**Future Release Updates:** .sass and .scss versions will be available soon.

**Deprecation Warning:** Class names 'exp' and 'fill' will become deprecated by Version 3.0.0; please use 'expand' and 'stretch', respectively, instead.

\*Be sure to check back to see if you're using the current version!
