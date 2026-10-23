# HTML Basics

HTML uses **tags** to define the structure of a webpage.

A tag tells the browser what type of content it is reading.

Example:

```html
<h1>SwiftLogix</h1>
```

Here:

```text
<h1>      Opening Tag

SwiftLogix
          Content

</h1>     Closing Tag
```

Together, they form an **HTML element**.

---

# Basic HTML Tags

## 1. `<html>`

The `<html>` tag is the root element of an HTML document.

Everything on the webpage is written inside it.

```html
<html>
</html>
```

---

## 2. `<head>`

The `<head>` contains information about the webpage.

It is mainly used by the browser and search engines.

```html
<head>
</head>
```

It commonly contains:

- Page title
- Meta information
- CSS links

---

## 3. `<title>`

The `<title>` sets the text shown in the browser tab.

```html
<title>SwiftLogix</title>
```

Browser tab:

```text
SwiftLogix
```

---

## 4. `<body>`

The `<body>` contains the visible content of the webpage.

```html
<body>

  <h1>SwiftLogix</h1>

</body>
```

Almost everything users see is written inside `<body>`.

---

# Text Tags

## 5. `<h1>` to `<h6>`

Heading tags are used for titles and section headings.

```html
<h1>Smarter Logistics. Faster Delivery.</h1>

<h2>Track Your Shipment</h2>

<h3>Fast Delivery</h3>
```

Hierarchy:

```text
<h1> → Main heading

<h2> → Section heading

<h3> → Subsection heading
```

HTML provides:

```html
<h1>
<h2>
<h3>
<h4>
<h5>
<h6>
```

---

## 6. `<p>`

The `<p>` tag is used for paragraphs or normal text.

```html
<p>
  Manage and track your shipments from one place.
</p>
```

Use `<p>` for:

- Descriptions
- Information
- Explanations
- Short content blocks

---

# Link and Media Tags

## 7. `<a>`

The `<a>` tag creates a clickable link.

```html
<a href="#tracking">
  Track Shipment
</a>
```

The `href` attribute tells the browser where the link should go.

Example:

```html
<a href="https://example.com">
  Visit Website
</a>
```

---

## 8. `<img>`

The `<img>` tag displays an image.

```html
<img
  src="images/truck.jpg"
  alt="SwiftLogix delivery truck"
>
```

Important attributes:

| Attribute | Purpose |
|---|---|
| `src` | Location of the image |
| `alt` | Description of the image |

---

# Button and Form Tags

## 9. `<button>`

The `<button>` tag creates a clickable button.

```html
<button>
  Track Shipment
</button>
```

HTML creates the button.

Later:

```text
CSS        → Styles the button

JavaScript → Adds behaviour
```

---

## 10. `<input>`

The `<input>` tag allows users to enter data.

```html
<input
  type="text"
  placeholder="Enter shipment ID"
>
```

Example:

```text
Shipment ID: [____________]
```

---

## 11. `<label>`

The `<label>` tag describes an input field.

```html
<label for="shipmentId">
  Shipment ID
</label>

<input
  id="shipmentId"
  type="text"
>
```

This makes forms easier to understand and improves accessibility.

---

# Page Structure Tags

## 12. `<header>`

The `<header>` represents the top section of a webpage.

It commonly contains:

- Logo
- Website name
- Navigation

Example:

```html
<header>

  <h2>SwiftLogix</h2>

</header>
```

---

## 13. `<nav>`

The `<nav>` tag contains navigation links.

```html
<nav>

  <a href="#">Home</a>

  <a href="#tracking">
    Track Shipment
  </a>

  <a href="#services">
    Services
  </a>

</nav>
```

---

## 14. `<main>`

The `<main>` tag contains the primary content of the webpage.

```html
<main>

  <!-- Main content -->

</main>
```

Usually, a page has one main content area.

---

## 15. `<section>`

The `<section>` tag groups related content.

Example:

```html
<section>

  <h2>
    Track Your Shipment
  </h2>

</section>
```

SwiftLogix might have:

```text
Hero Section

Tracking Section

Services Section

Recent Shipment Section
```

---

## 16. `<footer>`

The `<footer>` represents the bottom section of a webpage.

```html
<footer>

  <p>
    © 2026 SwiftLogix. All rights reserved.
  </p>

</footer>
```

A footer may contain:

- Copyright
- Contact details
- Policies
- Additional links

---

# Container Tags

## 17. `<div>`

The `<div>` tag is a general-purpose container.

It groups related elements together.

```html
<div>

  <h3>Live Tracking</h3>

  <p>
    Track shipment progress in real time.
  </p>

</div>
```

Later, CSS can style this `<div>` as a card.

---

## 18. `<span>`

The `<span>` tag is used to group a small part of text.

```html
<p>
  Status:
  <span>In Transit</span>
</p>
```

Later, CSS can style only:

```text
In Transit
```

without changing the entire paragraph.

---

# List Tags

## 19. `<ul>`

The `<ul>` tag creates an unordered list.

```html
<ul>

  <li>Fast Delivery</li>

  <li>Live Tracking</li>

  <li>AI ETA</li>

</ul>
```

This usually appears with bullet points.

---

## 20. `<ol>`

The `<ol>` tag creates an ordered list.

```html
<ol>

  <li>Order Created</li>

  <li>Picked Up</li>

  <li>In Transit</li>

  <li>Delivered</li>

</ol>
```

This usually appears as a numbered list.

---

## 21. `<li>`

The `<li>` tag represents one item inside a list.

```html
<li>Live Tracking</li>
```

It is used inside:

```html
<ul>
```

or:

```html
<ol>
```

---

# Quick Reference

| Tag | Purpose |
|---|---|
| `<html>` | Root of the HTML document |
| `<head>` | Page information |
| `<title>` | Browser tab title |
| `<body>` | Visible webpage content |
| `<h1>`–`<h6>` | Headings |
| `<p>` | Paragraph |
| `<a>` | Link |
| `<img>` | Image |
| `<button>` | Button |
| `<input>` | User input |
| `<label>` | Input label |
| `<header>` | Top section |
| `<nav>` | Navigation |
| `<main>` | Main content |
| `<section>` | Related content section |
| `<footer>` | Bottom section |
| `<div>` | General container |
| `<span>` | Small inline container |
| `<ul>` | Bullet list |
| `<ol>` | Numbered list |
| `<li>` | List item |

---

# SwiftLogix Example

```html
<body>

  <header>

    <h2>SwiftLogix</h2>

    <nav>
      <a href="#">Home</a>
      <a href="#tracking">Track Shipment</a>
      <a href="#services">Services</a>
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

      <button>
        Track Shipment
      </button>

    </section>

    <section id="tracking">

      <h2>
        Track Your Shipment
      </h2>

      <label for="shipmentId">
        Shipment ID
      </label>

      <input
        id="shipmentId"
        type="text"
        placeholder="Enter shipment ID"
      >

      <button>
        Search
      </button>

    </section>

  </main>

  <footer>

    <p>
      © 2026 SwiftLogix. All rights reserved.
    </p>

  </footer>

</body>
```

# Remember

```text
HTML
  ↓
Creates Structure

CSS
  ↓
Controls Appearance

JavaScript
  ↓
Adds Behaviour
```
