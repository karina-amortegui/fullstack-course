/* SOURCE CLIMBING - MAIN JAVASCRIPT
This file powers all interactive features across the site. */

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // Fetch a random quote from the ZenQuotes API
  const quotes = [
    { text: "The best climber is the one having the most fun.", author: "Alex Lowe" },
    { text: "Climbing is not a battle with the elements, nor a fight against gravity. It is a contemplation of life.", author: "Lynn Hill" },
    { text: "Every mountain top is within reach if you just keep climbing.", author: "Barry Finlay" },
    { text: "In climbing, the route is the puzzle. Your body and mind are the solution.", author: "Chris Sharma" },
    { text: "The summit is what drives us, but the climb itself is what matters.", author: "Conrad Anker" },
    { text: "There is no such thing as bad weather, only inappropriate clothing.", author: "Sir Ranulph Fiennes" },
    { text: "Climb the mountain not to plant your flag, but to embrace the challenge.", author: "David McCullough" }
  ];

  async function displayQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const quoteAuthor = document.getElementById('quoteAuthor');
    if (!quoteDisplay || !quoteAuthor) return;

    try {
      //Fetch 50 quotes fromt he free ZenQuotes API
      const response = await fetch('https://zenquotes.io/api/quotes');

      //Check if the response is OK
      if (!response.ok) {
        throw new Error('Failed to fetch quotes from API');
      }

      //Parse the JSON response into an array
      const data = await response.json();

      //Data is an array: [{q: "...", a: "..."}, ...]
      if (Array.isArray(data) && data.length > 0) {
        //Pick a random quote from the API response using Math.random()
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];

        quoteDisplay.textContent = `"${randomQuote.q}"`;
        quoteAuthor.textContent = `- ${randomQuote.a}`;
      } else {
        throw new Error('Empty response from API');
      }
    } catch (error) {
      //If the API fails (network error, CORS, etc.), fall back to local quotes
      console.log('API error:', error.message);
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const fallbackQuote = quotes[randomIndex];
      quoteDisplay.textContent = `"${fallbackQuote.text}"`;
      quoteAuthor.textContent = `- ${fallbackQuote.author}`;
    }
  }

  //Display a random quote when the page loads
  displayQuote();

//CONTACT FORM

const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submissionsList = document.getElementById('submissionsList');

  /*
   * XSS Protection Helper
   * Creates a temporary div, sets its textContent (which escapes HTML),
   * then returns the escaped HTML string.
   */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /*
   * Load and display all saved submissions from localStorage.
   * Uses DOM element creation (createElement, textContent, appendChild)
   * to safely render user-submitted content.
   */
  function loadSubmissions() {
    if (!submissionsList) return;

    const stored = localStorage.getItem('submissions');
    const submissions = stored ? JSON.parse(stored) : [];

    submissionsList.innerHTML = '';

    if (submissions.length === 0) {
      submissionsList.innerHTML = '<p style="color: var(--text-muted);">No messages yet. Submit the form above to see them here.</p>';
      return;
    }

    const title = document.createElement('h3');
    title.className = 'submissions-title';
    title.textContent = `Previous Messages (${submissions.length})`;
    submissionsList.appendChild(title);

    // Show most recent first
    submissions.slice().reverse().forEach(sub => {
      const card = document.createElement('div');
      card.className = 'submission-card';

      const meta = document.createElement('div');
      meta.className = 'meta';

      const name = document.createElement('span');
      name.className = 'name';
      name.textContent = escapeHtml(sub.name);

      const subject = document.createElement('span');
      subject.className = 'subject';
      subject.textContent = escapeHtml(sub.subject);

      meta.appendChild(name);
      meta.appendChild(subject);

      const message = document.createElement('p');
      message.className = 'message';
      message.textContent = escapeHtml(sub.message);

      const date = document.createElement('div');
      date.className = 'date';
      date.textContent = sub.date ? escapeHtml(sub.date) : '';

      card.appendChild(meta);
      card.appendChild(message);
      card.appendChild(date);
      submissionsList.appendChild(card);
    });
  }

  // Load existing submissions when the page loads
  loadSubmissions();

  // Handle form submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // Prevent the default form submission (page reload)
      e.preventDefault();

      // Get values from all form fields
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value.trim();

      // Validation: ensure all fields are filled
      if (!name || !email || !subject || !message) {
        formStatus.textContent = 'Please fill out all fields.';
        formStatus.className = 'error';
        return;
      }

      // Create a submission object with a timestamp
      const submission = {
        name,
        email,
        subject,
        message,
        date: new Date().toLocaleString()
      };

      // Save to localStorage: read existing, append new, write back
      const stored = localStorage.getItem('submissions');
      const submissions = stored ? JSON.parse(stored) : [];
      submissions.push(submission);
      localStorage.setItem('submissions', JSON.stringify(submissions));

      // Show success feedback
      formStatus.textContent = 'Message sent successfully!';
      formStatus.className = 'success';

      // Reset the form fields
      contactForm.reset();

      // Refresh the displayed submissions list
      loadSubmissions();

      // Clear success message after 3 seconds
      setTimeout(() => {
        formStatus.textContent = '';
        formStatus.className = '';
      }, 3000);
    });
  }

});
