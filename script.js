const burgerIcon = document.querySelector(".navbar-burger");
const navMenu = document.getElementById("Example");
burgerIcon.addEventListener("click", () => {
	burgerIcon.classList.toggle("is-active");
	navMenu.classList.toggle("is-active");
});
