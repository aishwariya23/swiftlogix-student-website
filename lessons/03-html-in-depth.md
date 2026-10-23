# Advanced HTML

Now that we understand basic HTML tags, let's go deeper into how webpages are structured and how HTML elements work together.

In this lesson, we will cover:

- HTML attributes
- Semantic HTML
- IDs and classes
- Nesting
- Block and inline elements
- Forms
- Tables
- Media
- Accessibility
- Meta tags
- Better HTML structure

---

# 1. HTML Attributes

Attributes provide additional information about an element.

Example:

```html id="t7v30x"
<a href="#tracking">
  Track Shipment
</a>
```

Here:

```text id="rim78e"
href
```

is an attribute.

It tells the browser where the link should go.

General structure:

```html id="l55c8c"
<tag attribute="value">
  Content
</tag>
```

Example:

```html id="h3ff2i"
<img
  src="images/truck.jpg"
  alt="SwiftLogix delivery truck"
  width="400"
>
```

Common attributes include:

| Attribute | Purpose |
|---|---|
| `id` | Gives an element a unique identity |
| `class` | Groups similar elements |
| `href` | Link destination |
| `src` | File or image location |
| `alt` | Image description |
| `type` | Defines input type |
| `placeholder` | Shows hint text |
| `name` | Identifies form data |
| `value` | Stores a value |

---

# 2. `id` Attribute

An `id` uniquely identifies one element.

Example:

```html id="ir1mvi"
<section id="tracking">

  <h2>
    Track Your Shipment
  </h2>

</section>
```

Now a link can jump directly to that section:

```html id="gedt4e"
<a href="#tracking">
  Track Shipment
</a>
```

Think of `id` as:

```text id="z5t2ob"
One unique name
        ↓
One specific element
```

---

# 3. `class` Attribute

A `class` is used to group similar elements.

Example:

```html id="fuh5fa"
<div class="service-card">
  Fast Delivery
</div>

<div class="service-card">
  Live Tracking
</div>

<div class="service-card">
  AI ETA
</div>
```

All three elements belong to:

```text id="hcmzsl"
service-card
```

This becomes especially useful when we start CSS.

Remember:

```text id="6lj6b5"
id
↓
Usually identifies one element

class
↓
Can be used by many elements
```

---

# 4. Nesting

HTML elements can be placed inside other elements.

This is called **nesting**.

Example:

```html id="f2du0s"
<section>

  <h2>
    Why SwiftLogix?
  </h2>

  <div>

    <h3>
      Live Tracking
    </h3>

    <p>
      Monitor your shipment in real time.
    </p>

  </div>

</section>
```

Structure:

```text id="3sb7wj"
section
│
├── h2
│
└── div
    │
    ├── h3
    │
    └── p
```

The outer element is often called the **parent**.

The element inside it is a **child**.

---

# 5. Parent and Child Elements

Example:

```html id="0e7q7t"
<nav>

  <a href="#">Home</a>

  <a href="#tracking">
    Track Shipment
  </a>

</nav>
```

Here:

```text id="ly12st"
<nav>
   ↓
Parent

<a>
   ↓
Children
```

Understanding this relationship becomes important in CSS and JavaScript.

---

# 6. Semantic HTML

Semantic HTML uses tags that describe the purpose of content.

Example:

```html id="n9alqu"
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Compare:

```html id="57qidw"
<div>
  SwiftLogix
</div>
```

with:

```html id="y8ufo1"
<header>
  SwiftLogix
</header>
```

Both can contain content.

But `<header>` gives meaning to that content.

---

# Why Use Semantic HTML?

Semantic HTML makes code easier for:

- Developers
- Browsers
- Search engines
- Screen readers

It improves:

- Readability
- Accessibility
- SEO
- Maintainability

---

# 7. `<article>`

The `<article>` tag represents self-contained content.

Example:

```html id="anz8g9"
<article>

  <h3>
    Shipment S102
  </h3>

  <p>
    Destination: Ahmedabad
  </p>

  <p>
    Status: In Transit
  </p>

</article>
```

This could represent one shipment card.

---

# 8. `<aside>`

The `<aside>` tag contains related but secondary information.

Example:

```html id="wmvmor"
<aside>

  <h3>
    Delivery Tips
  </h3>

  <p>
    Keep your shipment ID ready for faster tracking.
  </p>

</aside>
```

---

# 9. Block and Inline Elements

Some HTML elements usually take the full available width.

These are commonly called **block elements**.

Examples:

```html id="rcpmml"
<div>
<p>
<h1>
<section>
<header>
footer>
```

Others stay within the same line.

These are commonly called **inline elements**.

Examples:

```html id="qlk3bw"
<span>
<a>
<strong>
<em>
```

Example:

```html id="2uq7wr"
<p>
  Status:
  <span>In Transit</span>
</p>
```

---

# 10. Text Formatting Tags

## `<strong>`

Represents important text.

```html id="jp1qsm"
<p>
  Status:
  <strong>Delayed</strong>
</p>
```

---

## `<em>`

Adds emphasis.

```html id="60la3u"
<p>
  Delivery may be
  <em>slightly delayed</em>.
</p>
```

---

# 11. Forms

Forms allow users to enter and submit data.

Example:

```html id="rmz5ct"
<form>

  <label for="shipmentId">
    Shipment ID
  </label>

  <input
    type="text"
    id="shipmentId"
    name="shipmentId"
  >

  <button type="submit">
    Search
  </button>

</form>
```

Structure:

```text id="zrayey"
FORM

Label
  ↓
Input
  ↓
Button
```

---

# 12. Common Input Types

HTML provides different input types.

## Text

```html id="egoxzp"
<input type="text">
```

## Email

```html id="7b4wgq"
<input type="email">
```

## Password

```html id="jqhf1z"
<input type="password">
```

## Number

```html id="zvn42t"
<input type="number">
```

## Date

```html id="3baivx"
<input type="date">
```

## Checkbox

```html id="885rlf"
<input type="checkbox">
```

## Radio Button

```html id="vm4j59"
<input type="radio">
```

---

# 13. Placeholder

A placeholder provides a hint inside an input.

```html id="8fjwth"
<input
  type="text"
  placeholder="Enter shipment ID"
>
```

It may appear as:

```text id="glaw0b"
[ Enter shipment ID ]
```

---

# 14. Required Fields

The `required` attribute makes an input mandatory.

```html id="xgqxas"
<input
  type="text"
  id="shipmentId"
  required
>
```

The browser can stop the form from submitting when the field is empty.

---

# 15. Select Dropdown

Use `<select>` when users need to choose from options.

```html id="efnrvu"
<label for="status">
  Shipment Status
</label>

<select id="status">

  <option>
    Delivered
  </option>

  <option>
    In Transit
  </option>

  <option>
    Delayed
  </option>

</select>
```

---

# 16. Textarea

Use `<textarea>` for longer text input.

```html id="pehf45"
<label for="message">
  Message
</label>

<textarea
  id="message"
  rows="4"
>
</textarea>
```

Useful for:

- Feedback
- Address
- Notes
- Comments

---

# 17. Tables

Tables are useful for structured data.

SwiftLogix may display shipment information in a table.

```html id="n8u5gh"
<table>

  <tr>
    <th>Shipment ID</th>
    <th>Destination</th>
    <th>Status</th>
  </tr>

  <tr>
    <td>S101</td>
    <td>Mumbai</td>
    <td>Delivered</td>
  </tr>

  <tr>
    <td>S102</td>
    <td>Ahmedabad</td>
    <td>In Transit</td>
  </tr>

</table>
```

Important table tags:

| Tag | Purpose |
|---|---|
| `<table>` | Creates a table |
| `<tr>` | Table row |
| `<th>` | Table heading |
| `<td>` | Table data |

---

# 18. Better Table Structure

For larger tables, use:

```html id="3mnxo5"
<table>

  <thead>
    <tr>
      <th>Shipment ID</th>
      <th>Status</th>
    </tr>
  </thead>

  <tbody>

    <tr>
      <td>S101</td>
      <td>Delivered</td>
    </tr>

  </tbody>

</table>
```

Here:

```text id="ix320j"
<thead>
↓
Table headings

<tbody>
↓
Table data
```

---

# 19. Images with Better Accessibility

Always include meaningful `alt` text.

Good:

```html id="3w6hvw"
<img
  src="images/truck.jpg"
  alt="SwiftLogix delivery truck on a highway"
>
```

Avoid:

```html id="2zt7wk"
<img
  src="images/truck.jpg"
  alt="image"
>
```

The `alt` text should describe what is important about the image.

---

# 20. Audio and Video

HTML can also display media.

## Video

```html id="q2jizv"
<video controls>

  <source
    src="delivery-demo.mp4"
    type="video/mp4"
  >

</video>
```

## Audio

```html id="ucrxpk"
<audio controls>

  <source
    src="notification.mp3"
    type="audio/mpeg"
  >

</audio>
```

The `controls` attribute displays playback controls.

---

# 21. Iframe

An `<iframe>` can display another webpage or embedded resource.

Example:

```html id="jnr9mj"
<iframe
  src="https://example.com"
  title="Example Website"
>
</iframe>
```

It can also be used for things like:

- Maps
- Videos
- Embedded tools

---

# 22. HTML Entities

Some characters have special meaning in HTML.

HTML entities allow us to display them safely.

Example:

```html id="7lf7fp"
&copy;
```

Displays:

```text id="qw47im"
©
```

Other examples:

| Entity | Output |
|---|---|
| `&copy;` | © |
| `&lt;` | < |
| `&gt;` | > |
| `&amp;` | & |

---

# 23. Meta Tags

Meta tags are written inside `<head>`.

They provide information about the webpage.

Example:

```html id="0yr61f"
<meta charset="UTF-8">
```

Defines character encoding.

Another important example:

```html id="fwvq9n"
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
>
```

This helps webpages display properly on mobile devices.

---

# 24. Page Description

A webpage can include a description.

```html id="r2drzu"
<meta
  name="description"
  content="SwiftLogix shipment tracking platform"
>
```

This information may be used by search engines.

---

# 25. Connecting CSS

HTML can connect to a CSS file using:

```html id="bp8qq1"
<link
  rel="stylesheet"
  href="style.css"
>
```

This usually goes inside `<head>`.

Example:

```html id="f1xijx"
<head>

  <title>
    SwiftLogix
  </title>

  <link
    rel="stylesheet"
    href="style.css"
  >

</head>
```

---

# 26. Connecting JavaScript

JavaScript can be connected using:

```html id="s1ckue"
<script src="script.js"></script>
```

This is commonly placed near the end of `<body>`.

Example:

```html id="t44x5h"
<body>

  <!-- Page content -->

  <script src="script.js"></script>

</body>
```

Now the three technologies connect:

```text id="q1y2fx"
HTML
↓
Structure

CSS
↓
Appearance

JavaScript
↓
Behaviour
```

---

# 27. Accessibility

Accessibility means building webpages that more people can use, including users who use assistive technologies.

Good HTML already helps accessibility.

Important practices include:

- Use meaningful headings.
- Add `alt` text to images.
- Use `<label>` with form inputs.
- Use semantic elements.
- Use buttons for actions.
- Use links for navigation.

---

# Good vs Poor Example

Poor:

```html id="isid57"
<div onclick="searchShipment()">
  Search
</div>
```

Better:

```html id="hxny14"
<button>
  Search
</button>
```

Why?

Because `<button>` tells the browser and assistive technologies that the element performs an action.

---

# 28. HTML Comments

Comments help developers organize code.

```html id="tsm3hw"
<!-- Tracking Section -->
```

Comments are not displayed in the browser.

Example:

```html id="tuhnlx"
<main>

  <!-- Hero Section -->

  <section>
  </section>

  <!-- Tracking Section -->

  <section>
  </section>

</main>
```

---

# 29. Better SwiftLogix HTML Structure

A more complete SwiftLogix structure might look like:

```html id="jgwpro"
<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <meta
    name="description"
    content="SwiftLogix shipment tracking platform"
  >

  <title>
    SwiftLogix
  </title>

  <link
    rel="stylesheet"
    href="style.css"
  >

</head>

<body>

  <header>

    <h2>
      SwiftLogix
    </h2>

    <nav>

      <a href="#">
        Home
      </a>

      <a href="#tracking">
        Track Shipment
      </a>

      <a href="#services">
        Services
      </a>

      <a href="#contact">
        Contact
      </a>

    </nav>

  </header>

  <main>

    <section>

      <h1>
        Smarter Logistics. Faster Delivery.
      </h1>

      <p>
        Manage and track your shipments from one place.
      </p>

      <img
        src="images/truck.jpg"
        alt="SwiftLogix delivery truck"
      >

    </section>

    <section id="tracking">

      <h2>
        Track Your Shipment
      </h2>

      <form>

        <label for="shipmentId">
          Shipment ID
        </label>

        <input
          type="text"
          id="shipmentId"
          name="shipmentId"
          placeholder="Enter shipment ID"
          required
        >

        <button type="submit">
          Search
        </button>

      </form>

    </section>

    <section id="services">

      <h2>
        Why SwiftLogix?
      </h2>

      <article>

        <h3>
          Fast Delivery
        </h3>

        <p>
          Quick and efficient shipment management.
        </p>

      </article>

      <article>

        <h3>
          Live Tracking
        </h3>

        <p>
          Monitor shipment progress in real time.
        </p>

      </article>

      <article>

        <h3>
          AI ETA
        </h3>

        <p>
          Get intelligent delivery-time estimates.
        </p>

      </article>

    </section>

    <section>

      <h2>
        Recent Shipments
      </h2>

      <table>

        <thead>

          <tr>
            <th>Shipment ID</th>
            <th>Destination</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>S101</td>
            <td>Mumbai</td>
            <td>Delivered</td>
          </tr>

          <tr>
            <td>S102</td>
            <td>Ahmedabad</td>
            <td>In Transit</td>
          </tr>

        </tbody>

      </table>

    </section>

  </main>

  <footer id="contact">

    <p>
      &copy; 2026 SwiftLogix.
      All rights reserved.
    </p>

  </footer>

  <script src="script.js"></script>

</body>

</html>
```

---

# Advanced HTML Quick Reference

| Concept | Purpose |
|---|---|
| Attributes | Add information to elements |
| `id` | Identify one specific element |
| `class` | Group similar elements |
| Nesting | Place elements inside other elements |
| Semantic HTML | Give meaning to page structure |
| `<article>` | Independent content block |
| `<aside>` | Secondary content |
| `<form>` | Collect user input |
| `<select>` | Dropdown selection |
| `<textarea>` | Multi-line input |
| `<table>` | Display structured data |
| `<thead>` | Table header |
| `<tbody>` | Table body |
| `<video>` | Display video |
| `<audio>` | Play audio |
| `<iframe>` | Embed another resource |
| `<meta>` | Provide page information |
| `<link>` | Connect external resources |
| `<script>` | Connect JavaScript |

---

# Key Takeaway

Basic HTML teaches us:

```text id="jpdbhs"
What elements exist?
```

Advanced HTML teaches us:

```text id="f1zylq"
How should those elements
be organised and connected?
```

For SwiftLogix:

```text id="3co2mf"
Semantic Structure
      +
Forms
      +
Tables
      +
Accessibility
      +
Metadata
      =
Better HTML
```

HTML creates the structure.

Next, CSS will control how that structure looks.
