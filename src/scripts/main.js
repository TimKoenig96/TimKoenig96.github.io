import { startDateTimeUpdater } from "./datetime.js";

function init() {

	// Update date and time
	startDateTimeUpdater();
}

document.addEventListener("DOMContentLoaded", init);
