import { setupContentSwitching, searchParamCheck } from "./content_switcher.js";
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

	// Setup content switching via navbar buttons
	setupContentSwitching();

	// Get and switch to content if specified
	searchParamCheck();
}

document.addEventListener("DOMContentLoaded", init);
