const buttonCLR = document.querySelector('#bCLR');
const buttonDEL = document.querySelector('#bDEL');
const button9 = document.querySelector('#b9');
const button8 = document.querySelector('#b8');
const button7 = document.querySelector('#b7');
const button6 = document.querySelector('#b6');
const button5 = document.querySelector('#b5');
const button4 = document.querySelector('#b4');
const button3 = document.querySelector('#b3');
const button2 = document.querySelector('#b2');
const button1 = document.querySelector('#b1');
const button0 = document.querySelector('#b0');
const buttonAdd = document.querySelector('#bADD');
const buttonSubtract = document.querySelector('#bSUB');
const buttonMultiply = document.querySelector('#bMUL');
const buttonDivide = document.querySelector('#bDIV');
const buttonModulo = document.querySelector('#bMOD');
const buttonComa = document.querySelector('#bCOM');
const buttonEqual = document.querySelector('#bEQU');

let inputField = document.querySelector('#inputText');

let calculate = (number) => {
	inputField.value += number;
};

let result = () => {
	try {
		inputField.value = eval(inputField.value);
	} catch (error) {
		alert(`Wprowadzono złe dane`);
	}
};

let clear = () => {
	inputField.value = ' ';
};

let remove = () => {
	inputField.value = inputField.value.slice(0, -1);
};

button0.addEventListener('click', () => calculate(0));
button1.addEventListener('click', () => calculate(1));
button2.addEventListener('click', () => calculate(2));
button3.addEventListener('click', () => calculate(3));
button4.addEventListener('click', () => calculate(4));
button5.addEventListener('click', () => calculate(5));
button6.addEventListener('click', () => calculate(6));
button7.addEventListener('click', () => calculate(7));
button8.addEventListener('click', () => calculate(8));
button9.addEventListener('click', () => calculate(9));
buttonAdd.addEventListener('click', () => calculate(`+`));
buttonSubtract.addEventListener('click', () => calculate(`-`));
buttonMultiply.addEventListener('click', () => calculate(`*`));
buttonDivide.addEventListener('click', () => calculate(`/`));
// buttonModulo.addEventListener('click', () => calculate(`%`));
buttonComa.addEventListener('click', () => calculate`.`);
buttonEqual.addEventListener('click', () => result());
buttonCLR.addEventListener('click', () => clear());
buttonDEL.addEventListener('click', () => remove());

inputField.addEventListener('input', (letter) => {
	const inputValue = letter.target.value;

	const sanitizedValue = inputValue.replace(/[=%]/g, '');

	const filteredValue = sanitizedValue.replace(/[^0-9+\-*/.%]/g, '');

	inputField.value = filteredValue;
});

inputField.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		result();
	}
});
