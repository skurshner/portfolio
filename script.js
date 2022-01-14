// Contact me menu
const openMenu = () => {
  document.getElementById("email-dropdown").classList.toggle("show");
};

window.onclick = function (event) {
  if (!event.target.matches(".contact-button")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const copyEmail = () => {
  const sendButton = document.getElementById("contact-button");
  navigator.clipboard.writeText("skurshner@gmail.com").then(() => {
    sendButton.innerText = "Copied!";
  });

  setTimeout(() => (sendButton.innerText = "Contact Me"), 2500);
};

// Page animations
const toggleVisibleClass = elements =>
  elements.forEach(element => {
    element.target.classList.toggle("is-visible");
  });

const observer = new IntersectionObserver(toggleVisibleClass);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(target => {
  observer.observe(target);
});
