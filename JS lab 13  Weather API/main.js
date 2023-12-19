'use strict'

let weather = document.querySelector('.weather')


document.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        weather.classList.add('active');


    }, 1500)


})



let input = document.querySelector('.weather_container_input_text')

let container = document.querySelector('.weather_container')


let name = document.querySelector('.weather_container_output_name')
let degree = document.querySelector('.weather_container_output_degree')
let info = document.querySelector('.weather_container_output_info')

let icon = document.querySelector('.weather_container_output_icon')





input.addEventListener('keypress', (e) => {

    if (e.keyCode == "13") {

        const key = '8c0f70b1c515df4ededf4dc20f8e5249'

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric&lang=ru`)


            .then((res) => res.json())
            .then((data) => display(data)


            )

        function display(data) {

            name.innerHTML = `${data.name}`
            degree.innerHTML = `${Math.round(data.main.temp)}\u00B0C`
            info.innerHTML = `${data.weather[0].description}  `
            icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)



            if (data.weather[0].description == 'ясно' ) {

                console.log("HELLO IT IS WORKS")

                document.body.setAttribute('style','background-image:url("'+ 'image/sunny.jpg'  +'");')

            }

            else if (data.weather[0].description == 'пасмурно') { 
                
                
                console.log('JUST HELLO') 


                   document.body.setAttribute('style','background-image:url("'+ 'image/Claud.jpg'  +'");')
            
            }

            else if(data.weather[0].description == 'дождь'){


         document.body.setAttribute('style','background-image:url("'+'image/rain.jpg'+'")')

            }
            else if (data.weather[0].description=='небольшой снег'){
        

                document.body.setAttribute('style','background-image:url("'+'image/snowing.jpg'+'")')


            }




            localStorage.setItem('name', data.name)

            localStorage.setItem('degree', data.main.temp)

            localStorage.setItem('info', data.weather[0].description)

            localStorage.setItem('icon', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)



        }






    }



}


)



degree.style.fontWeight = 'bold';
degree.style.fontSize = '3rem';
degree.style.color = 'white';


name.style.fontWeight = 'bold';
name.style.fontSize = '2rem';
name.style.color = 'white';



info.style.fontWeight = 'bold';
info.style.fontSize = '1rem';
info.style.color = 'white';



name.innerHTML = localStorage.getItem('name');

degree.innerHTML = Math.round(localStorage.getItem('degree')) + '\u00B0C';

info.innerHTML = localStorage.getItem('info')


icon.setAttribute("src", localStorage.getItem('icon'))








