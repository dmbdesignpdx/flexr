---
permalink: /use-flexr/
title: Use Flexr - Flexr Grid
bodyID: how-to
---

## Current Release: Version {{ site.data.info.version }}

Check out [Current Release Info](#release) for more details.

## Column/Gutter Widths and Break&nbsp;Points

<table>

   <tr>

     <th scope="rowgroup">Breakpoint Name</th>

     <td>Phone Portrait</td>

     <td>Phone Landscape</td>

     <td>Tablet Portrait</td>

     <td>Tablet Landscape</td>

     <td>Desktop</td>

   </tr>

   <tr>

      <th scope="rowgroup">Breakpoint Value</th>

      <td>470px</td>

      <td>740px</td>

      <td>940px</td>

      <td>1180px</td>

      <td>&gt;1180px</td>

   </tr>

   <tr>

      <th scope="rowgroup">Column Size</th>

      <td>auto</td>

      <td>~31px</td>

      <td>~44px</td>

      <td>~60px</td>

      <td>~68px</td>

   </tr>

   <tr>

      <th scope="rowgroup">Gutter Size</th>

      <td>16px</td>

      <td>16px</td>

      <td>24px</td>

      <td>30px</td>

      <td>30px</td>

   </tr>

</table>

## First Thing's First

You gotta link the Flexr Grid <abbr title="Cascading Style Sheets">CSS</abbr> <strong>before</strong> your CSS.

<div class="pre">
<pre>&lt;head&gt;

   ...

   &lt;link href=".../<span>flexr.min.css</span>" rel="stylesheet"&gt;

   &lt;link href=".../your.css" rel="stylesheet"&gt;

   ...

&lt;/head&gt;</pre>
</div>

## Setting Up

Here's the basic structure:

<div class="pre">
<pre>&lt;container&gt;

   &lt;row&gt;

       &lt;column(s)&gt;

           <span>your stuff!</span>

       &lt;/column(s)&gt;

   &lt;/row&gt;

&lt;/container&gt;</pre>
</div>

A <strong>container</strong> can be practically anything: a `div`, `section`, `header`, `nav`, etc., even the `body`; just something to <em>contain</em> your rows and columns. It doesn't even need a special class.

<strong>Rows</strong> and <strong>columns</strong> can also be practically anything: you can have a `ul` as a row, and its `li` elements as columns.

## One Class Will Do

Creating a column requires only one class `col-` defined by its size `[1–12]` with no need for any offset columns.

<div class="pre">
<pre>&lt;div class="row"&gt;

   &lt;div class="<span>col-6</span>"&gt;...&lt;/div&gt;

   &lt;div class="<span>col-6</span>"&gt;...&lt;/div&gt;

&lt;/div&gt;</pre>
</div>

Flexr is a <strong>12 column grid</strong>.

If you'd like to use a column with a width that _you_ define (i.e. for a logo), simply give the column the class `col-x` and define the width in your css.

## Defining Columns

<strong>Shrinking Columns</strong> is the default type.

To define <strong>Expanding Columns</strong>, all you need to do is add the expanding class `expand` in the parent row:

<div class="pre">
<pre>&lt;div class="row <span>expand</span>"&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

   &lt;div class="col-3"&gt;...&lt;/div&gt;

&lt;/div&gt;</pre>
</div>

The only canidates for Expanding Columns are the _one_, _two_, and _three_ columns. When the screen reduces to the size of tablet portrait, these columns will expand automatically for smaller screens. This will only work if the row is evenly populated with these columns.

To create <strong>Stretching Columns</strong>, just add the stretching class `stretch` in the parent row. Stretching Columns make their parent row full width to its parent, and divide the space between themselves equally with no gutters.

See the difference in behavior on the <span class="nobr">[Flexr Grid Page](/flexr-grid/).</span>

## Switching Column Sizes

Sometimes at certain screen sizes you'd like the column to be specifically bigger or smaller. Flexr has four special prefixes for switching that you can use. All you need to do is attach the prefix that matches the <strong>breakpoint</strong> where you want to change with the new column size:

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

Where `[col]` follows the same column class name structure.

<div class="pre">
 <pre>&lt;div class="row"&gt;

    &lt;div class="col-5 <span>tp-col-6</span>"&gt;...&lt;/div&gt;

    &lt;div class="col-7 <span>tp-col-6</span>"&gt;...&lt;/div&gt;

 &lt;/div&gt;</pre>
 </div>

Switching column sizes implies that you don't want expanding to happen automatically, so adding the `expand` class to the parent would not work.

## Justifying Columns

The default justification of how the columns populate is _centered_. To change the justifaction, just add the class `left` for _left-justification_ or `right` for _right-justification_ to the parent row. For example, left-justification:

<div class="pre">
<pre>&lt;div class="row <span>left</span>"&gt;

   &lt;div class="col-4"&gt;...&lt;/div&gt;

&lt;/div&gt;</pre>
</div>

## Flexr-Use Notification

If you'd like to indicate on your site that you're using Flexr, here are some badges you can link to:

<div class="pre">
<pre>
https://flexrgrid.com/host/flexr-logo-use.svg

https://flexrgrid.com/host/flexr-logo-use-black.svg

https://flexrgrid.com/host/flexr-logo-use-white.svg
</pre>
</div>

## Current Release Info
{:#release}

**Version:** {{ site.data.info.version }}<br>
**Date:** <time datetime="{{ site.data.info.rdate | date: "%F" }}">{{ site.data.info.rdate | date: "%B %e, %Y" }}</time><br>
**Notes:** {{ site.data.info.notes }}<br>
**File Size:** {{ site.data.info.size }}<br>
**Future Release Updates:** {{ site.data.info.future }}<br>
**Deprecation Warning(s):** {{ site.data.info.deprecate }}

Be sure to check back to see if you're using the current version!

If you have any questions or issues, please ask/report using [GitHub Issues](https://github.com/dmbdesignpdx/flexr/issues){:target="_blank" title="Flexr Grid Github Issues Page"}.
