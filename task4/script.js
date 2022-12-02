

userText.addEventListener('click', function (event) { 
    event.preventDefault(); 
    const userTextField = prompt('Введите текст'); 
    const userText = document.querySelector('#userText');
    const descr = document.querySelector('.descr');
    userText.textContent = userTextField; 
    descr.textContent = 'текст ссылки изменен';
    
    if (userTextField === '') {
        userText.textContent = 'Чтобы изменить текст ссылки, необходимо ввести текст'; 
        descr.textContent = 'попробуйте еще раз';
}
}
)