const btn = document.querySelector('.btn');
btn.addEventListener('click', result);

function result(e) {
    e.preventDefault();
    let correctAnswers = 0;
    if (document.querySelector('#question-1').checked) {
        correctAnswers++;
    };
    if (document.querySelector('#question-2').checked) {
        correctAnswers++;
    };
    if (document.querySelector('#question-3').checked) {
        correctAnswers++;
    };
    if (document.querySelector('#question-4').checked) {
        correctAnswers++;
    };
    document.querySelector('#result').textContent = `correct answers: ${correctAnswers}`;
}