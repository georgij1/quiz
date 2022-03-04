let btnNext = document.getElementById('btn-next');
btnNext.onclick = function (){
    let quiz2 = document.querySelector('.DisplayNone');
    quiz2.style.display = 'block';
    let DisplayNone = document.getElementById('DisplayNone');
    DisplayNone.style.display = 'none';
};
//wrong класс ошибки в css
//correct класс правильности в css
let September12 = document.getElementById('12September');
let September13 = document.getElementById('13September');
let December4 = document.getElementById('4December');
let September1 =  document.getElementById('1September');
September12.onclick = function (){
    console.log('Вы нажали на 12 сентября')
    September12.classList.add('correct');
    alert('Вы ответили правильно на 1 из 2 вопросов!')
}
September13.onclick = function (){
    console.log('Вы нажали на 13 сентября')
    September13.classList.add('wrong');
}
December4.onclick = function (){
    console.log('Вы нажали на 4 Декабрь')
    December4.classList.add('wrong');
}
September1.onclick = function (){
    console.log('Вы нажали на 1 Сентября')
    September1.classList.add('wrong');
}
let Zero = document.getElementById('zero');
let First = document.getElementById('First');
let Second = document.getElementById('Second');
let Third = document.getElementById('Third');
Zero.onclick = function (){
    Zero.classList.add('wrong');
}
Second.onclick = function (){
    Second.classList.add('wrong');
}
Third.onclick = function (){
    Third.classList.add('wrong');
}
First.onclick = function (){
    First.classList.add('correct');
    alert('Ура вы выиграли викторину');
    alert('Вы ответили правильно на 2 из 2 вопросов!');
}
let btnNext1 = document.getElementById('btn-next1');
btnNext1.onclick = function (){
    let quizOverModal = document.querySelector('.quiz-over-modal');
    quizOverModal.classList.add('active');
}
let btnTryAgain = document.getElementById('btn-try-again');
btnTryAgain.onclick = function (){
    Reload();
}
const Reload = () => {
    window.location.reload();
}
let correctAnswer = document.getElementById('correct-answer');

//Промер определения кнопки на которую нажал пользователь
//const example = document.querySelector('.example');
//
// example.addEventListener('click', e => {
//   console.log(e.target);
// });