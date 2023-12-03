"use strict";

let form = document.querySelector('.todo_frm');
let input = document.querySelector('.todo_frm_input');

let btn = document.querySelector('.todo_frm_submit');
let list = document.querySelector('.todo_list');



btn.addEventListener('click', (e) => {

    e.preventDefault()

    if (input.value.length <= 0) { alert("Dont use empty input") }
    else {
        let newElement = document.createElement('li');

        let cancel = document.createElement('p');

        cancel.innerHTML ='<i class="fa-solid fa-xmark"></i> '

        let div = document.createElement('div')
        list.appendChild(div);
        div.appendChild(newElement)
        div.appendChild(cancel)

        div.classList.add('active')



        newElement.innerHTML = input.value.trim();



        cancel.addEventListener('click', () => {

            div.remove()




        })
        input.value = ""
    }
})

