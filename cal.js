const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

const calendarHeader = document.getElementById("month-year");
const datesContainer = document.getElementById("dates");
const prevButton = document.getElementById("prev-month");
const nextButton = document.getElementById("next-month");

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    calendarHeader.textContent = `${monthNames[month]} ${year}`;
    datesContainer.innerHTML = "";

    const firstDay = firstDayOfMonth(year, month);
    const totalDays = daysInMonth(year, month);

    // Fill in days from previous month
    const prevMonthDays = daysInMonth(year, month - 1);
    for (let i = firstDay - 1; i >= 0; i--) {
        const day = document.createElement("div");
        day.classList.add("date", "inactive");
        day.textContent = prevMonthDays - i;
        datesContainer.appendChild(day);
    }

    // Fill in days for current month
    for (let i = 1; i <= totalDays; i++) {
        const day = document.createElement("div");
        day.classList.add("date");
        day.textContent = i;
        datesContainer.appendChild(day);
    }

    // Fill in days from next month
    const remainingDays = 7 - ((firstDay + totalDays) % 7);
    if (remainingDays < 7) {
        for (let i = 1; i <= remainingDays; i++) {
            const day = document.createElement("div");
            day.classList.add("date", "inactive");
            day.textContent = i;
            datesContainer.appendChild(day);
        }
    }
}

prevButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initialize calendar
renderCalendar();
