const question = [
	{
		question: 'Zaznacz największe zwierzę na świecie',
		answers: [
			{ text: 'Rekin', correct: false },
			{ text: 'Wieloryb', correct: true },
			{ text: 'Słoń', correct: false },
			{ text: 'Hipopotam', correct: false },
		],
	},
	{
		question: 'Zaznacz najmniejszy kontynent na świecie',
		answers: [
			{ text: 'Azja', correct: false },
			{ text: 'Afryka', correct: false },
			{ text: 'Australia', correct: true },
			{ text: 'Antarktyka', correct: false },
		],
	},
	{
		question: 'Kto opracował wzór E=MC²',
		answers: [
			{ text: 'Thomas Alva Edison', correct: false },
			{ text: 'Albert Einstein', correct: true },
			{ text: 'Stephen Hawking', correct: false },
			{ text: 'Nikola Tesla', correct: false },
		],
	},
	{
		question: 'Który astronom wstrzymał słońce, ruszył ziemię',
		answers: [
			{ text: 'Mikołaj Kopernik', correct: true },
			{ text: 'Galileusz', correct: false },
			{ text: 'Johannes Kepler', correct: false },
			{ text: 'Isaac Newton', correct: false },
		],
	},
	{
		question: 'W którym roku była bitwa pod Grunwaldem',
		answers: [
			{ text: '1140r.', correct: false },
			{ text: '1041r.', correct: false },
			{ text: '1410r.', correct: true },
			{ text: '1401r.', correct: false },
		],
	},
];

const questionElement = document.querySelector('#question');
const answerBtns = document.querySelector('#answerBtns');
const nextBtn = document.querySelector('#nextBtn');

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
	currentQuestionIndex = 0;
	score = 0;
	nextBtn.textContent = 'Następne pytanie';
	showQuestion();
};

// console.log(question);

const showQuestion = () => {
	resetState();
	let currentQuestion = question[currentQuestionIndex];
	let questionNumber = currentQuestionIndex + 1;
	questionElement.textContent = questionNumber + '. ' + currentQuestion.question;

	currentQuestion.answers.forEach((answer) => {
		const button = document.createElement('button');
		button.textContent = answer.text;
		button.classList.add('btn');
		answerBtns.appendChild(button);
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', (e) => selectAnswer(e));
	});
};

const resetState = () => {
	nextBtn.style.display = 'none';
	while (answerBtns.firstChild) {
		answerBtns.removeChild(answerBtns.firstChild);
	}
};

const selectAnswer = (e) => {
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === 'true';
	if (isCorrect) {
		selectedBtn.classList.add('correct');
		score++;
	} else {
		selectedBtn.classList.add('incorrect');
	}
	Array.from(answerBtns.children).forEach((button) => {
		if (button.dataset.correct === 'true') {
			button.classList.add('correct');
		}
		button.disabled = true;
	});
	nextBtn.style.display = 'block';
};

function showScore() {
	resetState();
	questionElement.textContent = `Zdobyłeś ${score} z ${question.length} punktów!`;
	nextBtn.textContent = 'Jeszcze raz?';
	nextBtn.style.display = 'block';
}

function handleNextButton() {
	currentQuestionIndex++;
	if (currentQuestionIndex < question.length) {
		showQuestion();
	} else {
		showScore();
	}
}

nextBtn.addEventListener('click', () => {
	if (currentQuestionIndex < question.length) {
		handleNextButton();
	} else {
		startQuiz();
	}
});

startQuiz();
