let hrs = document.querySelector('#hrs');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

setInterval(() => {
	let currentTime = new Date();

	hrs.innerHTML =
		(currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
	min.innerHTML =
		(currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
	sec.innerHTML =
		(currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
}, 1000);

const currentDate = document.querySelector('.currentDate');
const currentDays = document.querySelector('.days');
const previousNextIcons = document.querySelectorAll('.caleIcons span');

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const months = [
	'STYCZEŃ',
	'LUTY',
	'MARZEC',
	'KWIECIEŃ',
	'MAJ',
	'CZERWIEC',
	'LIPIEC',
	'SIERPIEŃ',
	'WRZESIEŃ',
	'PAŹDZIERNIK',
	'LISTOPAD',
	'GRUDZIEŃ',
];

const renderCalendar = () => {
	let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
	let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
	let lastDayOfMonth = new Date(
		currentYear,
		currentMonth,
		lastDateOfMonth
	).getDay();
	let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
	let today = new Date().getDate();
	let liTag = '';

	for (let i = firstDayOfMonth; i > 0; i--) {
		liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
	}

	for (let i = 1; i <= lastDateOfMonth; i++) {
		let currentDate = new Date(currentYear, currentMonth, i);
		if (
			currentDate.getDate() === today &&
			currentDate.getMonth() === date.getMonth()
		) {
			liTag += `<li class="active">${i}</li>`;
		} else {
			liTag += `<li>${i}</li>`;
		}
	}

	for (let i = lastDayOfMonth + 1; i < 7; i++) {
		liTag += `<li class="inactive">${i - lastDayOfMonth}</li>`;
	}

	currentDate.textContent = `${months[currentMonth]} ${currentYear}`;
	currentDays.innerHTML = liTag;
};

renderCalendar();

previousNextIcons.forEach((icon) => {
	icon.addEventListener('click', () => {
		currentMonth = icon.id === 'prev' ? currentMonth - 1 : currentMonth + 1;
		if (currentMonth < 0) {
			currentMonth = 11;
			currentYear--;
		} else if (currentMonth > 11) {
			currentMonth = 0;
			currentYear++;
		}
		renderCalendar();
	});
});
