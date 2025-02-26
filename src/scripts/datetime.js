const dateTimeElement = document.getElementById("datetime");

export function updateDateTime() {
	const now = new Date();
	const date = now.toLocaleDateString(undefined, { day: "2-digit", month: "2-digit", year: "numeric" });
	const time = now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

	dateTimeElement.textContent = `${date} | ${time}`;

	setTimeout(updateDateTime, 1000);
}
