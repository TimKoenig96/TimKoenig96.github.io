let currentContent = "about_me";

function switchToContent(targetId) {

	// No button clicked or active button clicked
	if (!targetId || currentContent === targetId) return;

	// Deactivate current button and hide content
	document.querySelector(`[data-target="${currentContent}"]`).classList.remove("active");
	document.querySelector(`[data-content="${currentContent}"]`).classList.remove("active");

	// Activeate target
	document.querySelector(`[data-target="${targetId}"]`).classList.add("active");
	document.querySelector(`[data-content="${targetId}"]`).classList.add("active");

	// Update current content name
	currentContent = targetId;
}

function navbarClickHandler(event) {

	// Get clicked button
	const targetId = event.target.closest("[data-target]")?.dataset.target;

	// Switch to content
	switchToContent(targetId);

	// Update search parameters
	const newUrl = new URL(document.location.href);
	newUrl.searchParams.set("page", encodeURIComponent(targetId));
	history.pushState({}, "", newUrl);
}

export function searchParamCheck() {

	// Get search params and target page
	const searchParams = new URLSearchParams(window.location.search);
	const targetId = decodeURIComponent(searchParams.get("page"));

	// Nothing specified
	if (!targetId) return;

	// Get button and content
	const button = document.querySelector(`[data-target="${targetId}"]`);
	const content = document.querySelector(`[data-content="${targetId}"]`);

	// If button or content don't exist
	if (!button || !content) return;

	// Switch to content
	switchToContent(targetId);
}

export function setupContentSwitching() {
	document.getElementById("navbar").addEventListener("click", navbarClickHandler);
}
