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
