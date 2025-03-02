const MS_PER_DAY = 86400000;
const REM_PER_DAY = 0.01;
const TEXT_HEIGHT_REM_OFFSET = 1.1;

const timelineContainer = document.getElementById("timeline_container");

const events = [
	{
		start: "1996-11-03",
		label: "Born",
		description: "Born in Rotenburg in Germany."
	},
	{
		start: "2003-08-25",
		end: "2004-07-07",
		label: "Elementary school (Goetheschule Bremerhaven)"
	},
	{
		start: "2004-08-19",
		end: "2008-07-09",
		label: "Elementary school (Veernschule Bremerhaven)"
	},
	{
		start: "2008-08-21",
		end: "2010-01-29",
		label: "High school (Hauptschule Bad Zwischenahn)"
	},
	{
		start: "2010-02-03",
		end: "2015-02-18",
		label: "High school (Immanuel-Kant-Schule Bremerhaven)",
		description: "Acquired certificate of secondary education"
	},
	{
		start: "2011-10-24",
		end: "2011-10-25",
		label: "3D-Game-Programming course"
	},
	{
		start: "2012-04-16",
		end: "2012-04-27",
		label: "Internship at NTK Neutrales Transport Kontor GmbH",
		description: "Goods transport and a few bookkeeping tasks were the focus. The internship lasted for 2 weeks."
	},
	{
		start: "2013-02-11",
		end: "2013-02-22",
		label: "Internship at Tiefkühlkiste GmbH",
		description: "A regular retail and inventory heavy internship which lasted for 2 weeks."
	},
	{
		start: "2013-04-08",
		end: "2013-04-19",
		label: "Internship at Haus des Handwerks",
		description: "Automotive mechanics and soldering were two of the primary focuses. This internship lasted 2 weeks."
	},
	{
		start: "2014-11-24",
		end: "2014-12-05",
		label: "Internship at Druckerei Werner GmbH",
		description: "Manual print of media using industrial scale printing presses. This internship lasted 2 weeks."
	},
	{
		start: "2016-06-16",
		label: "General certificate of secondary education",
		description: "Taught myself everything I needed to know in order to pass the exam for the general certificate of secondary education, which is one step up from what I acquired in school prior to this."
	},
	{
		start: "2016-08-01",
		end: "2016-08-26",
		label: "Internship at Georg Grube GmbH",
		description: "Bulk material and construction equipment transport as well as load securing were the focus. The internship lasted for 4 weeks."
	},
	{
		start: "2023-12-04",
		end: "2025-12-03",
		label: "Career change program - Application developer",
		description: "Taking part in a 2-year-long career change program to become an IT specialist specializing in application development, certified by the Chamber of Commerce and Industry."
	}
];

export function generateTimeline() {

	createVerticalTimeLine();
}

function createVerticalTimeLine() {

	// Get current date
	const startDate = new Date();

	// Get beginning of the year of the first entry
	const endDate = new Date(new Date(events[0].start).getFullYear(), 0, 1);

	// Calculate days since start of year of first entry
	const daysDelta = Math.ceil((startDate - endDate) / MS_PER_DAY);

	// Set years container height
	const yearsContainer = document.getElementById("timeline_years");
	yearsContainer.style.height = `${daysDelta * REM_PER_DAY}rem`;

	// Create all year labels
	for (let year = endDate.getFullYear(); year <= startDate.getFullYear(); year++) {

		// Currently iterating year as a date
		const yearAsDate = new Date(year, 0, 1);

		// Amount of days ago the currently iterating year started
		const daysDelta = Math.ceil((startDate - yearAsDate) / MS_PER_DAY);

		// Create and configure year label
		const yearLabel = document.createElement("p");
		yearLabel.classList.add("timeline_year");
		yearLabel.textContent = year + "-";
		yearLabel.style.top = `${(daysDelta * REM_PER_DAY) - TEXT_HEIGHT_REM_OFFSET}rem`;

		// Add year label to years container
		yearsContainer.appendChild(yearLabel);
	}
}
