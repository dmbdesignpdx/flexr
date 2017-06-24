# Flexr Grid - Version 2.0.3

Flexr is a responsive grid for those who just want a grid. Created by a Daniel Blake, a front end web designer, with a focus on the digital grid layout and its response to different screens. It features three ways columns react: expanding, shrinking and stretching.


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

A container can be practically anything: a `div`, `section`, `header`, `nav`, etc., even the `body`; just something to _contain_ your rows and columns. It doesn't even need any special class.

**Rows** and **columns** can also be practically anything: you can have a `ul` as a row, and its `li` elements as columns.

## One Class Will Do

Creating a column requires only one class `col-` defined by its size `[1&ndash;12]` with no need for any offset columns.

```html
<div class="row">

   <div class="col-6">...</div>

   <div class="col-6">...</div>

</div>
```

Flexr is a **12 column grid**.

If you'd like to use a column with a width that _you_ define (i.e. a logo), simply give the column the class `col-x` and define the width in your css.


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

The only canidates for Expanding Columns are the _one_, _two_, and _three_ columns. When the screen reduces to the size of tablet portrait, these columns will expand automatically for smaller screens. This will only work if the row is evenly populated with these columns.

To create **Stretching Columns**, just add the stretching class `stretch` in the parent row. Stretching Columns make their parent row full width to its parent, and divide the space between themselves equally with no gutters.

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

The default justification of how the columns populate is _centered_. To change the justifaction, just add the class `jus-l` for _left_ or `jus-r` for _right_ to the parent row. For example, left-justification:

```html
<div class="row jus-l">

   <div class="col-4">...</div>

</div>
```


## Column/Gutter Widths and Break Points

Breakpoint Name|Breakpoint Value|Column Width|Gutter Width
-|-|-|-
Desktop|1180px +|~68px|28px
Tablet Landscape|1180px|~60px|28px
Tablet Portrait|940px|~44px|24px
Phone Landscape|740px|~31px|16px
Phone Portrait|520px|auto|16px


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

**Version:** 2.0.3

**Date:** June 27, 2017

**Notes:** Adds MIT license.

**File Size:** 3KB

**Future Release Updates:** Sass versions will be available soon.

**Deprecation Warning:** Class names 'exp' and 'fill' will become deprecated by Version 3.0.0; please use 'expand' and 'stretch', respectively, instead.

\*Be sure to check back to see if you're using the current version!
