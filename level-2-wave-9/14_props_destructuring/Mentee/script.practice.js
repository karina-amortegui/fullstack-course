const propsTask1Btn = document.getElementById("propsTask1Btn");
const propsTask1Display = document.getElementById("propsTask1Display");
const propsTask2Btn = document.getElementById("propsTask2Btn");
const propsTask2Display = document.getElementById("propsTask2Display");
const destructTask1Btn = document.getElementById("destructTask1Btn");
const destructTask1Display = document.getElementById("destructTask1Display");
const destructTask2Btn = document.getElementById("destructTask2Btn");
const destructTask2Container  = document.getElementById("destructTask2Container");
const statusText = document.getElementById("statusText");

// If a variable is null, the id in HTML does not match

console.log(
propsTask1Btn,
propsTask1Display,
propsTask2Btn,
propsTask2Display,
destructTask1Btn,
destructTask1Display,
destructTask2Btn,
destructTask2Container,
statusText
);

function createWelcomeMessageProps(props) {
  return `Welcome ${props.text}`;
};

propsTask1Btn.addEventListener("click", () => {
  const messageProps = { text: "LetPhil mentee!" };
  console.log("Props Task 1 object: ", messageProps);
  const result = createWelcomeMessageProps(messageProps);
  propsTask1Display.textContent = result;
});

function createUserSummaryProps(props) {
  return `User: ${props.name} Age: ${props.age}`;
};

propsTask2Btn.addEventListener("click", () => {
  const userProps = { name: "Ana", age: 22 };
  const result = createUserSummaryProps(userProps);
  propsTask2Display.textContent = result;
});

function createWelcomeMessageDestructured({text}) {
  return `Welcome ${text}`;
};

destructTask1Btn.addEventListener("click", () => {
  const messageProps = { text: "Destructuring unlocked" };
  const result = createWelcomeMessageDestructured(messageProps);
  destructTask1Display.textContent = result;
});

function createProductCard({ title, price, stock }) {
  const priceText = `$${price.toFixed(2)}`;
  
  let stockMessage = stock === 0 ? "Out of stock" : `In stock $${stock}`;
  let stockClass = stock === 0 ? "out" : "in";

  return
    `<article class="product-card">
    <h3 class="product-title">${title}</h3>
    <p class="product-price">${priceText}</p>
    <p class="product-stock ${stockClass}">${stockMessage}</p>
    </article>`; 
};

destructTask2Btn.addEventListener("click", () => {
  const product = { title: "Wireless Headphones", price: 59.99, stock: 12};
  const card = createProductCard(product);
  destructTask2Container.innterHTML = card;
  statusText.textContent = "Card rendered using destructuring"
});