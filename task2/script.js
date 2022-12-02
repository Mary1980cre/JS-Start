const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', function() {
    alert('служит для вывода информации в консоль');
})

const alert1 = document.querySelector('.alert1');

alert1.addEventListener ('click', function() {
    alert('Пример работы alert');

}
)

const promt1 = document.querySelector('.promt1');

promt1.addEventListener ('click', function() {
prompt('Пример работы promt','Введите имя');
})