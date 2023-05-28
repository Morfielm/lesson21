const initApp = () => {
  const cookieConsent = document.querySelector(".cookie-consent");
  const cookieButtonStatus = localStorage.getItem("cookie_button_status");
  if (cookieButtonStatus === "pressed") {
    cookieConsent.classList.add("hide");
  }

  const button = document.querySelector(".cookie-consent__button");
  button.addEventListener("click", () => {
    cookieConsent.classList.add("hide");
    localStorage.setItem("cookie_button_status", "pressed");
  });
};

export default initApp;
