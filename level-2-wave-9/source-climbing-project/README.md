# Source Climbing Center — Student Final Project

A 3-page climbing gym website built with vanilla HTML, CSS, and JavaScript for a student final project. Covers 6 requirements: Navigation, Responsive Layout, DOM Manipulation, localStorage, API Usage, and Contact Form.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Home page — hero, features, random quote |
| `about.html` | About/First Visit page — real content from sourceclimbing.com |
| `contact.html` | Contact page — form, hours, map, group reservations |
| `css/style.css` | All styles — mobile-first, dark + acid green palette |
| `js/main.js` | All JavaScript — nav, quote API, form, localStorage |
| `images/` | Logo + photos from the original website |

---

## Requirement 1: Navigation

**What the grader should see:** A fixed nav bar with a logo, 3 desktop links (Home / About / Contact), a "READ & SIGN RELEASE" lime button, and a hamburger menu that opens a full-screen mobile menu.

**Where to look:**

| File | Lines | What It Is |
|------|-------|------------|
| `css/style.css` | ~30–120 | Nav styles: fixed positioning, backdrop blur, desktop links, hamburger button |
| `css/style.css` | ~268–280 | `@media (min-width: 768px)` — desktop links appear, hamburger hidden |
| `js/main.js` | ~18–36 | `getElementById`, `querySelectorAll`, `classList.toggle('open')` on hamburger click |
| `index.html` | ~15–46 | `<nav>` HTML with logo, links, release button, hamburger, mobile menu |
| `about.html` | ~15–44 | Same nav — "Same nav on every page" comment |
| `contact.html` | ~15–44 | Same nav — "Same nav on every page" comment |

**Key code:**
```javascript
// js/main.js, lines 18–36
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});
```

---

## Requirement 2: Responsive Layout

**What the grader should see:** The site works on mobile (1 column) and reflows to 2–4 columns on tablet/desktop. Uses CSS Grid `auto-fit` + `minmax()` and a mobile-first `@media` breakpoint at 768px.

**Where to look:**

| File | Lines | What It Is |
|------|-------|------------|
| `css/style.css` | ~1–10 | CSS Variables (`:root`) for theming — dark + acid green |
| `css/style.css` | ~12–25 | Mobile-first base styles — `box-sizing`, font, reset |
| `css/style.css` | ~268+ | `@media (min-width: 768px)` — all desktop overrides |
| `css/style.css` | ~290–294 | `grid-template-columns: repeat(2, 1fr)` — features on tablet |
| `css/style.css` | ~314–317 | `grid-template-columns: repeat(4, 1fr)` — features on desktop |
| `css/style.css` | ~294–296 | `grid-template-columns: 1fr 1fr` — about page grids |
| `css/style.css` | ~298–301 | `grid-template-columns: 1.5fr 1fr` — contact page |
| `index.html` | ~67–70 | `features-grid` — CSS Grid cards |
| `index.html` | ~23 | `meta viewport` — mobile viewport setup |

**Key code:**
```css
/* css/style.css, lines 290–294 */
@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## Requirement 3: DOM Manipulation

**What the grader should see:** JavaScript that selects elements with `getElementById` and `querySelectorAll`, toggles CSS classes, creates elements dynamically, and sets `textContent`.

**Where to look:**

| File | Lines | What It Is |
|------|-------|------------|
| `js/main.js` | ~18–19 | `getElementById('hamburger')`, `getElementById('mobileMenu')` |
| `js/main.js` | ~28 | `querySelectorAll('a')` on mobile menu links |
| `js/main.js` | ~30–33 | `classList.remove('open')` to close menu on link click |
| `js/main.js` | ~56–59 | `getElementById('quoteDisplay')`, `getElementById('quoteAuthor')` |
| `js/main.js` | ~100–140 | `getElementById('contactForm')`, `getElementById('formStatus')` |
| `js/main.js` | ~116–125 | `createElement('div')`, `createElement('span')` — builds submission cards |
| `js/main.js` | ~127–137 | `textContent`, `appendChild()` — populates submission cards |
| `js/main.js` | ~167–171 | `innerHTML = ''`, `createElement('h3')` — clears and rebuilds list |

**Key code:**
```javascript
// js/main.js, lines 116–137 — dynamic DOM element creation
const card = document.createElement('div');
card.className = 'submission-card';

const name = document.createElement('span');
name.className = 'name';
name.textContent = escapeHtml(sub.name);

const message = document.createElement('p');
message.className = 'message';
message.textContent = escapeHtml(sub.message);

card.appendChild(name);
card.appendChild(message);
submissionsList.appendChild(card);
```

---

## Requirement 4: localStorage

**What the grader should see:** Data saved to `localStorage` with `JSON.stringify`, retrieved with `JSON.parse`, and persisting across page reloads.

**Where to look:**

| File | Lines | What It Is |
|------|-------|------------|
| `js/main.js` | ~143–147 | `localStorage.getItem('submissions')` — read existing data |
| `js/main.js` | ~148–149 | `JSON.parse(stored)` — convert string back to array |
| `js/main.js` | ~154 | `submissions.push(submission)` — add new entry |
| `js/main.js` | ~155 | `localStorage.setItem('submissions', JSON.stringify(submissions))` — save back |
| `js/main.js` | ~163 | `localStorage.getItem('submissions')` — re-read on every load |
| `js/main.js` | ~164 | `JSON.parse(stored)` — parse again for display |
| `contact.html` | ~75–77 | Comment: "REQUIREMENT 6: CONTACT FORM (+ covers REQUIREMENT 4: localStorage)" |

**Key code:**
```javascript
// js/main.js, lines 143–155 — save form submission to localStorage
const stored = localStorage.getItem('submissions');
const submissions = stored ? JSON.parse(stored) : [];

submissions.push(submission);
localStorage.setItem('submissions', JSON.stringify(submissions));
```

---

## Requirement 5: API Usage

**What the grader should see:** A real API call using `fetch()`, `async/await`, `try/catch`, and `Math.random()` to pick a random quote from the API response.

**Where to look:**

| File | Lines | What It Is |
|------|-------|------------|
| `js/main.js` | ~38–42 | Comment: "REQUIREMENT 5: API USAGE" |
| `js/main.js` | ~53 | `async function displayQuote()` — async function |
| `js/main.js` | ~57 | `await fetch('https://zenquotes.io/api/quotes')` — real API call |
| `js/main.js` | ~62 | `if (!response.ok)` — error check |
| `js/main.js` | ~68 | `await response.json()` — parse JSON |
| `js/main.js` | ~72–73 | `Math.floor(Math.random() * data.length)` — random selection |
| `js/main.js` | ~74–75 | `.q` and `.a` — access quote text and author from API |
| `js/main.js` | ~78–82 | `catch (error)` — error handling with fallback |
| `js/main.js` | ~83–86 | Fallback: `Math.random()` on local quotes array |
| `index.html` | ~95–98 | Quote display section with `id="quoteDisplay"` and `id="quoteAuthor"` |

**Key code:**
```javascript
// js/main.js, lines 53–86 — real API with async/await, try/catch, Math.random()
async function displayQuote() {
  try {
    const response = await fetch('https://zenquotes.io/api/quotes');

    if (!response.ok) {
      throw new Error('Failed to fetch quotes from API');
    }

    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];

      quoteDisplay.textContent = `"${randomQuote.q}"`;
      quoteAuthor.textContent = `— ${randomQuote.a}`;
    }
  } catch (error) {
    // Fallback to local climbing quotes
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const fallbackQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${fallbackQuote.text}"`;
    quoteAuthor.textContent = `— ${fallbackQuote.author}`;
  }
}

displayQuote();
```

---

## Requirement 6: Contact Form

**What the grader should see:** A working form with validation, `preventDefault()`, XSS sanitization, `localStorage` save, and dynamic display of submitted messages.

**Where to look:**

| File | Lines | What It Is |
|------|-------|------------|
| `contact.html` | ~48–76 | Form HTML with `id="contactForm"`, name, email, subject, message |
| `contact.html` | ~75–77 | Comment: "REQUIREMENT 6: CONTACT FORM (+ covers REQUIREMENT 4: localStorage)" |
| `js/main.js` | ~99–105 | Comment: "REQUIREMENT 6: CONTACT FORM" |
| `js/main.js` | ~109 | `contactForm.addEventListener('submit', (e) => {` — submit handler |
| `js/main.js` | ~110 | `e.preventDefault()` — stops page reload |
| `js/main.js` | ~112–116 | `getElementById` on all form fields, `.value.trim()` — get values |
| `js/main.js` | ~118–121 | `if (!name \|\| !email \|\| !subject \|\| !message)` — validation check |
| `js/main.js` | ~96–101 | `escapeHtml(text)` — XSS protection using `textContent` on temp div |
| `js/main.js` | ~124–129 | `createElement('div')`, `textContent` — safe DOM insertion of user data |
| `js/main.js` | ~143–155 | `localStorage.getItem`, `JSON.parse`, `push`, `JSON.stringify`, `setItem` — save to localStorage |
| `js/main.js` | ~163–171 | `loadSubmissions()` — reads localStorage and rebuilds the DOM display |

**Key code:**

```javascript
// js/main.js, lines 96–101 — XSS sanitization helper
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
```

```javascript
// js/main.js, lines 109–121 — form validation with preventDefault
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !subject || !message) {
    formStatus.textContent = 'Please fill out all fields.';
    formStatus.className = 'error';
    return;
  }
  // ... save to localStorage and display
});
```

```javascript
// js/main.js, lines 124–137 — safe DOM creation with user data
const card = document.createElement('div');
card.className = 'submission-card';

const nameSpan = document.createElement('span');
nameSpan.className = 'name';
nameSpan.textContent = escapeHtml(sub.name);

const messageP = document.createElement('p');
messageP.className = 'message';
messageP.textContent = escapeHtml(sub.message);

card.appendChild(nameSpan);
card.appendChild(messageP);
submissionsList.appendChild(card);
```

---

## Running the Project

1. Unzip `source-climbing.zip`
2. Open `index.html` in any browser — no server required
3. Click around: Home → About → Contact
4. Submit the contact form, reload the page — messages persist via localStorage
5. The quote section loads a new random quote on every page load (via ZenQuotes API)

---

## Credits

- Content sourced from the real [sourceclimbing.com](https://www.sourceclimbing.com)
- Photos downloaded from the original website
- Quotes API: [ZenQuotes](https://zenquotes.io/)
- Built for a student final project demonstrating HTML, CSS, and JavaScript
