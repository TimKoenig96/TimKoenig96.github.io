let currentContent = "about_me";

function navbarClickHandler(event) {

	// Get clicked button
	const target = event.target.closest("[data-target]")?.dataset.target;

	// No button clicked or active button clicked
	if (!target || currentContent === target) return;

	// Deactivate current button and hide content
	document.querySelector(`[data-target="${currentContent}"]`).classList.remove("active");
	document.querySelector(`[data-content="${currentContent}"]`).classList.remove("active");

	// Activeate target
	document.querySelector(`[data-target="${target}"]`).classList.add("active");
	document.querySelector(`[data-content="${target}"]`).classList.add("active");

	// Update current content name
	currentContent = target;
}

export function setupContentSwitching() {
	document.getElementById("navbar").addEventListener("click", navbarClickHandler);
}
