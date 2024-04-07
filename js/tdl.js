
const textBox = document.querySelector('#inputSpace');
const ulContainer = document.querySelector('#listContainer');
const plusButton = document.querySelector('#addButton');

const addTask = () => {
	if (textBox.value === '') {
		alert('Najpierw coś napisz!');
	} else {
		let newLi = document.createElement('li');
		newLi.innerHTML = textBox.value;
		ulContainer.appendChild(newLi);

		let dltBtn = document.createElement('span');
		dltBtn.innerHTML = '\u00d7';
		newLi.appendChild(dltBtn);
	}
	textBox.value = '';
};

const crossOut = (clickList) => {
	if (clickList.target.tagName === 'LI') {
		clickList.target.classList.toggle('checked');
	} else if (clickList.target.tagName === 'SPAN') {
		clickList.target.parentElement.remove();
	}
};

const clickEnter = (enterKey) => {
	if (enterKey.key === 'Enter') {
		addTask();
	}
};

ulContainer.addEventListener('click', (clickList) => crossOut(clickList));
textBox.addEventListener('keyup', (enterKey) => clickEnter(enterKey));
plusButton.addEventListener('click', () => addTask());