"use strict";



let item = document.querySelectorAll('.drop_down_item')

item.forEach((i) => {


    i.addEventListener('click', (() => {

        let btn = i.querySelector('.btn')

        i.classList.toggle('active')
        btn.classList.toggle('active_button')


    }))



})

