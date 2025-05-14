// 1. Button click changes color and text
const magicButton = document.getElementById('magicButton');
magicButton.addEventListener('click', () => {
  magicButton.textContent = "You Clicked Me!";
  magicButton.style.backgroundColor = "#ff69b4";
});

// Bonus: Double click shows a secret
magicButton.addEventListener('dblclick', () => {
  alert("🎉 You found the secret double click!");
});

// 2. Hover effect
const hoverText = document.getElementById('hoverText');
hoverText.addEventListener('mouseover', () => {
  hoverText.textContent = "You hovered! 🎈";
});
hoverText.addEventListener('mouseout', () => {
  hoverText.textContent = "Hover over me!";
});

// 3. Keypress detection
const keyInput = document.getElementById('keyInput');
keyInput.addEventListener('keyup', (event) => {
  console.log("You typed: " + event.key);
});

// 4. Tabs switching
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(div => div.style.display = 'none');
    document.getElementById(`tab-${button.dataset.tab}`).style.display = 'block';
  });
});

// 5. Form Validation
const form = document.getElementById('myForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop the page from refreshing
  const emailValue = email.value;
  const passwordValue = password.value;

  if (!emailValue.includes('@')) {
    formMessage.textContent = "Invalid email!";
    return;
  }

  if (passwordValue.length < 8) {
    formMessage.textContent = "Password must be at least 8 characters.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Form submitted successfully! 🎉";
});

// Bonus: Real-time password feedback
password.addEventListener('input', () => {
  if (password.value.length < 8) {
    formMessage.textContent = "Password too short!";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Looking good!";
    formMessage.style.color = "green";
  }
});
