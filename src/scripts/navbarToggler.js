export function setupNavbarToggle() {
	document.getElementById("navbar_toggle").addEventListener("click", () => {
		document.body.classList.toggle("nav_toggled");
	});
}
