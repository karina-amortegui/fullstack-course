# 08 — Functions (Foundations Pack)

Welcome to the **Functions Module** 🎯  
This section is one of the most important transitions in your JavaScript journey.

Up until now, you have learned:

- Variables
- Data Types
- Operators
- Conditionals
- Loops
- Arrays & Objects
- Array Methods

Now we learn **FUNCTIONS**, which combine everything you already know into reusable logic.

---

# 🧠 Why Functions Matter

Think of a function like a **machine**.

👉 You give it inputs  
👉 It performs work  
👉 It gives you an output

Example:

```js
function greet(name) {
  console.log("Hello " + name);
}
```

"

Instead of repeating the same logic many times, we create a function once and reuse it.

This makes code:

✅ Cleaner  
✅ Easier to maintain  
✅ More professional  
✅ More scalable

⭐ A function becomes truly powerful when it can **return a value that other parts of the program can use.**

This is how real applications calculate totals, validate data, and transform information.

---

# 📚 Types of Functions You Will Learn

## 1️⃣ Function Declaration

```js
function sayHello() {
  console.log("Hello!");
}
```

Used for main reusable program logic.

---

## 2️⃣ Function Expression

```js
const sayBye = function () {
  console.log("Bye!");
};
```

Used when a function must be **stored inside a variable and used later**.  
This gives more control over when and where the function runs.

---

## 3️⃣ Arrow Function

```js
const add = (a, b) => a + b;
```

Modern and shorter syntax.  
Very common inside array methods and event logic.

---

## 4️⃣ Callback Function (Very Important Concept)

A **callback function is NOT a special type of function.**

👉 It is simply **any function that is passed as an argument into another function**  
👉 So that the receiving function can **run it later**.

This callback can be:

- a function declaration
- a function expression
- an arrow function
- an anonymous function

Once a function is passed as an argument, it becomes a **callback**.

Example:

```js
setTimeout(() => {
  console.log("Runs later");
}, 1000);
```

Here:

- `setTimeout` is the main built-in function
- The arrow function is the **callback**
- It runs **after a delay**

---

## 🔁 Callback Mental Model (Visual Flow)

```
Main Function → receives callback → decides WHEN to run it
```

This means:

- You give a function to another function
- That function controls the timing of execution

---

## 📍 Where Do We See Callbacks in Real Development?

Callbacks happen whenever something occurs **later in time**:

- After a delay → `setTimeout`
- After a click → `button.addEventListener`
- For each item → array methods like `.forEach`
- After data loads → working with APIs

The pattern is always the same:

👉 A function is **passed into another function**  
👉 The main function decides **when to execute it**

---

# 📊 When Do We Use Each Type?

| Function Type        | When You Use It                             | Real-Life Example                   |
| -------------------- | ------------------------------------------- | ----------------------------------- |
| Function Declaration | Main reusable logic                         | calculateTotal(), validateForm()    |
| Function Expression  | Store a function in a variable to use later | Controlled execution, modular logic |
| Arrow Function       | Small modern logic blocks                   | Array methods, event listeners      |
| Callback Function    | When something must happen later            | Click events, timers, API responses |
| Async Function       | Working with server data                    | Fetching API information            |
| Method (Object)      | Behavior tied to an object                  | cart.addItem(), user.login()        |

_(Async functions will be covered later in the API module.)_

---

# 🌎 Real Life Situations (Why Functions Exist)

## 🧾 Formatting Data

Instead of repeating logic everywhere:

```js
formatPrice(10);
formatPrice(5.5);
```

One function handles all formatting.

---

## 🖱️ DOM Events (Next Module)

```js
button.addEventListener("click", () => {});
```

The arrow function is a **callback reacting to user interaction.**

Understanding functions first makes DOM much easier.

---

## 🌐 API Requests (Later Modules)

```js
async function loadData() {}
```

Functions allow us to manage:

- Loading states
- Errors
- Server responses
- Data processing

---

# 🧱 Skills You Are Building

After finishing this pack you should be able to:

✅ Write reusable logic  
✅ Understand parameters vs arguments  
✅ Use `return` correctly  
✅ Use arrow functions confidently  
✅ Understand callbacks before DOM

---

# 🚀 Why This Comes BEFORE DOM

DOM is simply:

👉 Functions reacting to user actions.

If functions make sense to you, DOM will feel natural instead of confusing.

---

# ❤️ Final Tip

Functions are the moment JavaScript becomes structured and powerful.

Take your time.  
Practice small examples.  
Confidence builds quickly here.

---

# 🧪 Homework — Functions Practice

This homework helps you practice the core function concepts from this module.

You will work in a **console-based mini exercise pack**.

The visual page is simple — the real results appear in the **browser console**.

### ▶️ How to run

1. Open the page in your browser
2. Right-click → Inspect
3. Open the **Console** tab
4. Refresh the page
5. Read the output for each task

---

# 🎯 Homework Tasks

## ✅ Task 1 — Make a Machine

Create a function `doubleNumber`.

- Takes one parameter `n`
- Returns `n * 2`
- Test it with several numbers

👉 Practice: parameters + `return`

---

## ✅ Task 2 — Guardrail Function

Create a function `canWatchMovie`.

- Takes parameter `age`
- If age ≥ 13 → return `"Allowed ✅"`
- Else → return `"Not allowed ❌"`

👉 Practice: functions + `if / else`

---

## ✅ Task 3 — Default Parameter

Create a function `greet`.

- Parameter `name`
- Default value `"friend"`
- Return `"Hello, <name>!"`

👉 Practice: optional input + returned strings

---

## ✅ Task 4 — Arrow Function

Create an arrow function `subtract`.

- Parameters: `a`, `b`
- Return `a - b`

👉 Practice: modern function syntax

---

## ✅ Task 5 — Callback Mini

Create a function `doMath`.

Parameters:

- `numberA`
- `numberB`
- `operation` (a function)

Inside the function:
return operation(numberA, numberB)

Call it twice:

- once with an **add** callback
- once with a **multiply** callback

👉 Practice: passing functions as arguments

---

## ✅ Task 6 — Real-Life Mini: Tax Calculator

Create a function `addTax`.

- Parameters: `price`, `taxRatePercent`
- Convert percent → decimal
- Return final price with tax

👉 Practice: real calculation logic inside a function

---

# 🧠 Skills You Practice

- Function declarations
- Arrow functions
- Parameters & arguments
- Default parameters
- `return` values
- Conditional logic inside functions
- Beginner callback thinking

---

# 🚀 Learning Goal

After this homework you should feel more confident:

- writing reusable logic
- sending values into functions
- receiving results with `return`
- understanding how functions help structure real applications

You are now thinking more like a **real JavaScript developer.**
