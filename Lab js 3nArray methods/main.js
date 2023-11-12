const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
  ];



  // Array.filter()
// 1. Filter the list of inventors for those who were born in the 1500's.


//   let filtered = inventors.filter( (item)=> item.year >= 1500 && item.year <=1600 )



//   console.log(filtered)






// Array.map()
// 2. Give us an array of the inventors first and last names.

// let newArr = inventors.map( (i)=> `Firstname - ${i.first} , Lastname ${i.last}  `) 


// console.log(newArr)




// Array.sort()
// 3. Sort the inventors by birthdate, oldest to youngest.

// let sorted = inventors.sort((x,y)=> x.year - y.year )

// console.log(sorted)






// Array.reduce()
// 4. How many years did all the inventors live all together ?

// let reduced = inventors.reduce( ( acc , curr) =>  acc +  (curr.passed - curr.year)  ,0 )


// console.log(reduced)






// Array.every()
// 5. Did all inventors live at least 45 years ?

// let  checkYear = inventors.every ( (i) =>  i.passed - i.year > 45  )


// console.log(checkYear)






// Array.some()
// 6. At least one inventor lived for 45 years?

// let  checkYear = inventors.some( (i) =>  i.passed - i.year > 45  )


// console.log(checkYear)













// Algoritm Task

// generate(2,10,2)==> [2,4,6,8,10]



function generateNumber(x,y,z){ 

    let  newArr =[];

    for ( let i = x ; i<=y;i+=z){
          newArr.push(i)
    }

    

return newArr
}



console.log( generateNumber(2,10,2))