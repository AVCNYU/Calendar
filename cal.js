
const monthElement = document.querySelector(".month ul li:nth-child(3)");
const daysElement = document.querySelector(".days");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dateAction = document.querySelector(".activate")
let events = []

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();

function showEvents() {


}

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Set the month and year
    monthElement.innerHTML = `${monthNames[month]}<br><span style="font-size:18px">${year}</span>`;

    // Clear previous days
    daysElement.innerHTML = "";

    // Get first day of the month and total days in the month
    const firstDayIndex = new Date(year, month, 1).getDay(); // Day index (0 - Sunday, 6 - Saturday)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the month

    // Add blank spaces for previous month's days
    for (let i = 0; i < (firstDayIndex === 0 ? 6 : firstDayIndex - 1); i++) {
        const blankDay = document.createElement("li");
        blankDay.textContent = "";
        daysElement.appendChild(blankDay);
    }



    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("li");
        dayElement.textContent = day;

        if (
            day === new Date().getDate() &&
            year === new Date().getFullYear() &&
            month === new Date().getMonth()
        ) {
            dayElement.classList.add("active");
        }




        daysElement.appendChild(dayElement);
    }

}

// Add event listeners for navigation

function test() {
    // const newButton = document.createElement('button');
    // newButton.textContent = 'Click me!';
    // document.body.appendChild(newButton);

    // newButton.addEventListener('click', () => {

    // });

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
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

renderCalendar();
for (let i = 0; i <= daysElement.length; i++) {
    document.write(daysElement)
}