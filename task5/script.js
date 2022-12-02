//При вводе текста в поле ввода (input) текст должен дублироваться в текстовый блок с id duplicateField
let input = document.querySelector('input')

input.addEventListener('keyup', function(event) {
  
 let p = document.querySelector('#duplicateField')
  p.textContent = event.target.value
})

//При нажатии кнопки «Вывести текст в консоль и удалить из формы»
let button = document.querySelector('button');

button.addEventListener('click', function (event) {
    console.log(input.value)
    input.value = "";
    duplicateField.textContent = "";
})

