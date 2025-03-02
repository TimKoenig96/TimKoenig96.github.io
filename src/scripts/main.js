import { startDateTimeUpdater } from "./datetime.js";
import { generateTimeline } from "./timeline.js";

function init() {

	// Update date and time
	startDateTimeUpdater();

	// Create timeline CV
	generateTimeline();
}

document.addEventListener("DOMContentLoaded", init);
