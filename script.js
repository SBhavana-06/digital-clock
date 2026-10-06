
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    hours = String(hours).padStart(2, "0");

    document.getElementById("time").textContent =
        `${hours}:${minutes}:${seconds}`;

    document.getElementById("period").textContent = period;

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
}

updateClock();

setInterval(updateClock, 1000);