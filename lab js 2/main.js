'use strict';







/*
1. Funksiya yazın, bu funksiya parametr olaraq bir söz qəbul etsin. Daha sonra bu sözü tərsinə çevirsin.



function getReverced(word){ 

let result = ''
    for(let i = word.length-1; i >= 0 ;i-- ){

 result+=word[i]

    }

return result 

}

console.log(getReverced('Salam'))

*/






/* 2. "Never give up"  cümləsində " e"  hərfinin neçə dəfə istifadə olundugunu göstərən funksiya yazın.


let word = 'Never give up'

function letterCounting(){

let result = 0 

  for( let i=0 ; i <= word.length; i++ ){

if(word[i]=='e'){ result += 1 }

  }  

return result


}


console.log(letterCounting())

*/





/* 3. Aşağıda göstərilən bu 3 şərtə görə bir funksiya yazın.Funksiyada capacity  ilə göstərilən şərtləri yoxladıqdan sonra console a capacity i  və maşının type ı göstərin. Example :  ['medium mercedes', small bmw', 'large ford', 'large bmw'].Map metodundan istifadə edərsiz.


// const cars = [
//     {
//       color: "red",
//       type: "mercedes",
//       capacity: 5,
//       price: 120,
//     },
//     {
//       color: "blue",
//       type: "bmw",
//       capacity: 2,
//       price: 70,
//     },
//     {
//       color: "blue",
//       type: "ford",
//       capacity: 6,
//       price: 220,
//     },
//     {
//       color: "blue",
//       type: "bmw",
//       capacity: 6,
//       price: 400,
//     },
//   ];
   

small car = 1-3 people
medium car = 4-5 people
large car = 6-9 people 






const chekCar = cars.map((item)=> {

let garage = ''

if( item.capacity < 3){ garage+=`Small  ${item.type}   Car`  }

else if ( item.capacity < 5){ garage+=` Medium  ${item.type}  Car`}

else { garage += `Large  ${item.type}  Car`}


return garage

}

     

)

console.log(chekCar)


*/






/* 4.Eyni arrayin daxilində rəngi göy olan maşınların qiymətində 30 % endirim edin.Filter və Map metodundan istifadə edərsiz 


let filtred = cars.filter((i)=> i.color==='blue' )

  filtred.map( (it)=>it.price =  ` after 30% discount ${ it.price - (it.price*0.3)}$`)

 console.log(filtred)

*/




