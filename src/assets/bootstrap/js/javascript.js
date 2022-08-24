(function readyJS(win,doc){
'use strict';

let form1 = doc.querySelector('#form1');
let inputText = doc.querySelector('#inpText');
let lengthArea = doc.querySelector('#lengthArea');
let radio = doc.getElementsByName('gender');
let sel = doc.querySelector('#sel');
let btn = doc.querySelector('#btn');

let gallery = doc.querySelector('.gallery');
let files = doc.querySelector('#img');

inputText.style.backgroundColor = 'blue'
//inputText.value = 'Texto'

//Excelente para trabalhar validações de campos
function validateInput(event) {
    event.preventDefault();
    if (event.target.value === '') {
        alert('Preencha o campo');
    }
}

function countArea(event) {
    lengthArea.innerHTML = event.target.textLength;
    if (event.target.textLength >=30){
        txtArea.setAttribute('disabled', 'disabled');
    }
}

/* Espera o usuário digitar algo, caso não ocorra, chama a 
função para validar */
inpText.addEventListener('blur', validateInput,false);
// console.log(inputText);

//Textarea
txtArea.value = 'Exemplo'
console.log(txtArea);
txtArea.addEventListener('keyup', countArea,false);

//Checkbox
console.log(check.checked)
if(check.checked === false) {
    alert('Accept the terms')
}

//Radio
function radioTest(event) {
    if(event.target.value === 'Male'){
        alert('Male')
    } else {
        alert('Female')
    }
}

for(let i = 0; i < radio.length; i++) {
    radio[i].addEventListener('click', radioTest, false);
}


//Select
function selValidate(event) {
    if (event.target.selectedIndex === 0){
        alert('Seleciona pelo menos 1 opção')
     
    }
    
}

sel.addEventListener('change', selValidate, false);

//Button 
function subForm(event) {
    event.preventDefault();
    console.log(event)
}

btn.addEventListener('click', subForm, false);

//Files
function imgPreview(event) {
    gallery.innerHTML = '';
    let files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        if(files[i].size > 300000) {
            alert('Imagem muito grande!')
        } else {
        let reader = new FileReader();
        reader.onload = function (event) {

            let urlImg = event.target.result;
            let newImg = doc.createElement('img');
            newImg.setAttribute('src', urlImg);
            newImg.style= 'width: 100px;margin:5px;';
            gallery.appendChild(newImg);
        }
        reader.readAsDataURL(files[i])
        // console.log(files[i].size);
    }
        
    }
    
}

files.addEventListener('change', imgPreview, false);





})(window,document);