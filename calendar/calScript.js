const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const monthYear = document.getElementById('monthYear');
const daysContainer = document.getElementById('days');

let selectedDate = null;
let currentDate = new Date();
const today = new Date();

function renderCalendar() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const daysInMonth = lastDayOfMonth.getDate();
    const startingDay = firstDayOfMonth.getDay();

    monthYear.textContent = `${firstDayOfMonth.toLocaleString('default', { month: 'long' })} ${year}`;

    daysContainer.innerHTML = '';

    // Empty cells before month start
    for (let i = 0; i < startingDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('day-cell');
        daysContainer.appendChild(emptyCell);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day-cell');
        dayCell.textContent = day;

        // Highlight today's date
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dayCell.classList.add('current-day');
        }

        dayCell.addEventListener('click', () => selectDate(day, month, year));
        daysContainer.appendChild(dayCell);
    }
}




// Previous month
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

// Next month
nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

function selectDate(day, month, year) {
    selectedDate = { day, month, year };
    console.log(selectedDate);
}

// Initial render
renderCalendar();
