# 08 — DOM Mini Tasks

## (Selectors, textContent, style, create/remove)

In previous lessons you worked mostly in the **console**.

Now your JavaScript will begin to affect the **actual web page**.

This unit focuses ONLY on basic DOM wiring:

- Selecting elements
- Reading and changing `textContent`
- Updating simple styles or classes
- Creating and removing elements

No events yet.  
No localStorage.  
No APIs.

We keep the scope small so the DOM feels safe and clear.

---

# 1. What is the DOM?

The **DOM (Document Object Model)** is how the browser represents your HTML as a tree of JavaScript objects.

Think of it like a family tree 🌳:

- Each HTML element is a node
- Nodes are connected in a structure
- JavaScript can find nodes, read them, and change them

The DOM is what allows JavaScript to make the page feel **alive instead of static**.

Example:

```html
<h1 id="title">Hello</h1>
```

```js
const titleElement = document.getElementById("title");
titleElement.textContent = "Hi LetPhil Mentee!";
```

In that example:

- JavaScript finds the `<h1>`
- JavaScript changes its text
- The user sees the update on the page

Visual flow:

```text
HTML exists → JavaScript selects → JavaScript changes → User sees update
```

---

# 2. Why DOM Matters

You will use DOM skills when:

- Rendering dashboards
- Showing API results on the page
- Updating UI
- Building task lists
- Displaying user data

DOM manipulation is where JavaScript becomes **visual and interactive**.

Before DOM, most of your work happens in the console.  
With DOM, your code starts changing what the user actually sees.

---

# 3. Tools in this Lesson

## Selectors

Selectors help JavaScript **find elements that already exist in the HTML**.

Important:

**Selectors do NOT create elements.**  
They only find elements that are already on the page.

### `document.getElementById("idName")`

Use this when:

- You want **one specific element**
- That element has a unique `id`

Example:

```js
const title = document.getElementById("mainTitle");
```

Mental model:

👉 “I know exactly which element I want.”

---

### `document.querySelector(".className")`

Use this when:

- You want the **first element** that matches a CSS selector

Example:

```js
const card = document.querySelector(".card");
```

You can use:

- `#title` for an id
- `.card` for a class
- `h1` for a tag
- `.card h2` for a more specific selector

Mental model:

👉 “Find me the first element that looks like this.”

---

### `document.querySelectorAll("li")`

Use this when:

- You want **multiple elements**

Example:

```js
const items = document.querySelectorAll("li");
```

Important:

`querySelectorAll()` returns a **collection called a NodeList**, not a single element.

That means you usually need a loop to work with each item:

```js
items.forEach((item) => {
  item.style.color = "red";
});
```

Mental model:

👉 “Find ALL elements that match this rule.”

---

## Simple Selector Rule for Beginners

A helpful way to choose:

- Use `getElementById()` when you want **one exact element by id**
- Use `querySelector()` when you want the **first match**
- Use `querySelectorAll()` when you want **many matches**

---

## Changing Text

You can change what the user sees by updating the text inside an element.

```js
element.textContent = "New text";
```

Important:

`textContent` replaces **all text inside the element**.

This is useful for things like:

- changing headings
- showing messages
- updating counters
- displaying data from JavaScript

---

## Styling

You can also change how elements look.

### Inline style

```js
element.style.color = "red";
element.style.backgroundColor = "#0f172a";
```

This is useful when the style needs to change dynamically.

For example:

- highlight an item
- show an error
- change a background color
- respond to app state

### Using classes

```js
element.classList.add("highlight");
element.classList.remove("highlight");
```

This is often cleaner because:

- CSS controls the design
- JavaScript only adds or removes the class

A good beginner mental model is:

> CSS defines how things normally look.  
> JavaScript changes how things look when something happens.

---

## Creating and Removing Elements

Sometimes content is not already in the HTML.

That is when JavaScript creates new elements.

### Create a new element

```js
const newElement = document.createElement("li");
```

Why create elements in JavaScript instead of HTML?

Because in real apps, content often appears later:

- API data loads
- a user adds a task
- a message arrives
- a new notification appears

HTML is the **starting structure**.  
JavaScript builds **live content while the app is running**.

### Give the new element content

```js
newElement.textContent = "New movie";
```

### Append it to the page

```js
parent.appendChild(newElement);
```

This step is very important.

If you only create the element, it exists only in memory.  
The user still cannot see it.

So the mental model is:

```text
create → configure → attach → user sees it
```

### Remove an element

```js
element.remove();
```

This deletes the element from the page.

Used for things like:

- removing a task
- deleting a list item
- clearing an old message

---

# 4. Understanding the Symbols

```text
document → browser object representing the page
.getElementById() → finds one element by its id
.querySelector() → finds the first matching element
.querySelectorAll() → finds multiple matching elements
.textContent → reads or changes the text inside an element
.style → inline style control
.classList.add() → adds a CSS class
.classList.remove() → removes a CSS class
.createElement() → creates a new HTML element
.appendChild() → attaches a new element to the page
.remove() → deletes an element from the page
```

---

# 5. Why Style, Create, and Append in JavaScript?

This is an important beginner question.

## Why not just do all styling in HTML/CSS?

Because HTML and CSS usually define the **starting state** of the page.

JavaScript is used when the page needs to **change while the app is running**.

Examples:

- make a card highlight after an action
- show a warning message
- switch a visual state
- update a status text

So:

- HTML = structure
- CSS = default appearance
- JavaScript = dynamic changes

---

## Why create elements in JavaScript instead of writing them directly in HTML?

Because sometimes the content does not exist yet.

Examples:

- a user types a new to-do item
- an API sends back products
- a playlist loads songs
- a notification appears later

If the content is dynamic, JavaScript creates it.

---

## Why append elements?

Because creating an element alone does not put it on the screen.

You must attach it to a parent element in the DOM.

Without `appendChild()`, the browser does not display it.

---

# 6. Mini Homework — Favorite Movies DOM Card

On a separate page you will:

1. Select heading and list elements
2. Change the heading text
3. Use `textContent` to display how many movies exist
4. Create and append a new `<li>`
5. Remove one existing `<li>`

Everything is visible directly on the page.

No events yet — just DOM practice.

This homework is meant to help you feel comfortable with the **core DOM pattern**:

```text
select → change → create → attach → remove
```

Once this feels natural, adding events later will make much more sense.
