 let numbers=[1,2,3,4,5,6,7,8,9,10];
 let evens= numbers.filter(num=> num % 2 ===0);
 console.log(evens);

let users=[{name:"Mary", age:20},
                 {name:"Ben", age:16},
                 {name:"Edwin", age : 19},
                 {name:"Ken", age:18},
                 {name:"Moureen", age:12},
];
let adults=users.filter((user)=>user.age>=18)
console.log(adults)