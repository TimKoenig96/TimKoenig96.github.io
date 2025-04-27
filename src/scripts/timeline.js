const MS_PER_DAY = 86400000;
const REM_PER_DAY = 0.017;
const YEAR_REM_OFFSET = -1.12;
const CURRENT_DATE = new Date();

const events = [
	{
		start: [1996, 11, 3],
		label: "Born",
		description: "Born in Rotenburg in Germany."
	},
	{
		start: [2003, 8, 25],
		end: [2004, 7, 7],
		label: "Elementary school (Goetheschule Bremerhaven)"
	},
	{
		start: [2004, 8, 19],
		end: [2008, 7, 9],
		label: "Elementary school (Veernschule Bremerhaven)"
	},
	{
		start: [2008, 8, 21],
		end: [2010, 1, 29],
		label: "High school (Hauptschule Bad Zwischenahn)"
	},
	{
		start: [2010, 2, 3],
		end: [2015, 2, 18],
		label: "High school (Immanuel-Kant-Schule Bremerhaven)",
		description: "Acquired certificate of secondary education"
	},
	{
		start: [2011, 10, 24],
		end: [2011, 10, 25],
		label: "3D-Game-Programming course"
	},
	{
		start: [2012, 4, 16],
		end: [2012, 4, 27],
		label: "Internship at NTK Neutrales Transport Kontor GmbH",
		description: "Goods transport and a few bookkeeping tasks were the focus. The internship lasted for 2 weeks."
	},
	{
		start: [2013, 2, 11],
		end: [2013, 2, 22],
		label: "Internship at Tiefkühlkiste GmbH",
		description: "A regular retail and inventory heavy internship which lasted for 2 weeks."
	},
	{
		start: [2013, 4, 8],
		end: [2013, 4, 19],
		label: "Internship at Haus des Handwerks",
		description: "Automotive mechanics and soldering were two of the primary focuses. This internship lasted 2 weeks."
	},
	{
		start: [2014, 11, 24],
		end: [2014, 12, 5],
		label: "Internship at Druckerei Werner GmbH",
		description: "Manual print of media using industrial scale printing presses. This internship lasted 2 weeks."
	},
	{
		start: [2016, 6, 16],
		label: "General certificate of secondary education",
		description: "Taught myself everything I needed to know in order to pass the exam for the general certificate of secondary education, which is one step up from what I acquired in school prior to this."
	},
	{
		start: [2016, 8, 1],
		end: [2016, 8, 26],
		label: "Internship at Georg Grube GmbH",
		description: "Bulk material and construction equipment transport as well as load securing were the focus. The internship lasted for 4 weeks."
	},
	{
		start: [2023, 12, 4],
		end: [2025, 12, 3],
		label: "Career change program - Application developer",
		description: "Taking part in a 2-year-long career change program to become an IT specialist specializing in application development, certified by the Chamber of Commerce and Industry."
	},
	{
		start: [2025, 3, 26],
		end: [2025, 9, 17],
		label: "Internship at GSWE GmbH (1/2)",
		description: "Web development using PHP/Symfony."
	},
	// {
	// 	start: [2025, 10, 10],
	// 	end: [2025, 11, 18],
	// 	label: "Internship at GSWE GmbH (2/2)",
	// 	description: "Web development using PHP/Symfony."
	// }
];

export function generateTimeline() {
	createVerticalTimeLine();
	createAllEvents();
}

function createVerticalTimeLine() {

	// Get beginning of the year of the first entry
	const endDate = new Date(events[0].start[0], 0, 1);

	// Calculate days since start of year of first entry
	const daysDelta = Math.ceil((CURRENT_DATE - endDate) / MS_PER_DAY);

	// Set years container height
	const yearsContainer = document.getElementById("timeline_years");
	yearsContainer.style.height = `${daysDelta * REM_PER_DAY}rem`;

	// Create all year labels
	for (let year = endDate.getFullYear(); year <= CURRENT_DATE.getFullYear(); year++) {

		// Currently iterating year as a date
		const yearAsDate = new Date(year, 0, 1);

		// Amount of days ago the currently iterating year started
		const daysDelta = Math.ceil((CURRENT_DATE - yearAsDate) / MS_PER_DAY);

		// Create and configure year label
		const yearLabel = document.createElement("p");
		yearLabel.classList.add("timeline_year");
		yearLabel.textContent = year;
		yearLabel.style.top = `${(daysDelta * REM_PER_DAY) + YEAR_REM_OFFSET}rem`;

		// Add year label to years container
		yearsContainer.appendChild(yearLabel);
	}
}

function createAllEvents() {
	const timelineEndDate = new Date(events[0].start[0], 0, 1);

	events.forEach((event) => {

		// Get event start: Will be bottom of the div
		const eventStart = new Date(event.start[0], event.start[1] - 1, event.start[2]);

		// Calculate amount of days between timeline end (bottom) and the event start
		const daysDelta = Math.ceil((eventStart - timelineEndDate) / MS_PER_DAY);

		// Create and configure event element
		const eventElement = document.createElement("div");
		eventElement.classList.add("timeline_event");
		eventElement.style.bottom = `${daysDelta * REM_PER_DAY}rem`;

		// Create and configure duration indicator
		const eventDuration = document.createElement("div");
		eventDuration.classList.add("timeline_event_duration");

		// Calculate event duration if an end was specified
		if (event.end) {

			// Get event end date or at most current date
			let eventEnd = new Date(event.end[0], event.end[1] - 1, event.end[2]);
			if (eventEnd > CURRENT_DATE) eventEnd = CURRENT_DATE;

			// Calculate duration in days
			const duration = Math.ceil((eventEnd - eventStart) / MS_PER_DAY) + 1;

			// Set duration indicator height
			eventDuration.style.height = `${duration * REM_PER_DAY}rem`;
		}

		// Create and configure event underline
		const eventUnderline = document.createElement("div");
		eventUnderline.classList.add("timeline_event_underline");

		// Create and configure timeline label
		const eventLabel = document.createElement("p");
		eventLabel.classList.add("timeline_event_label");
		eventLabel.textContent = event.label;

		// Append elements to their parents
		eventElement.appendChild(eventDuration);
		eventElement.appendChild(eventUnderline);
		eventElement.appendChild(eventLabel);
		document.getElementById("timeline_events").appendChild(eventElement);
	});
}
