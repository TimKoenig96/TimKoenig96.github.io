import { startDateTimeUpdater } from "./datetime.js";
import { setupNavbarToggle } from "./navbar_toggler.js";
import { generateTimeline } from "./timeline.js";

function init() {

	// Update date and time
	startDateTimeUpdater();

	// Create timeline CV
	generateTimeline();

	// Set up the navbar toggle function
	setupNavbarToggle();
}

document.addEventListener("DOMContentLoaded", init);
