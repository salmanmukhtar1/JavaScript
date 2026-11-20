let person1 = {
firstName : "Salman",
 lastName : "Mukhtar",
 age : 25,
 town : "sweden",
};

let person2 ={
 firstName : "Ahmed",
 lastName : "Ali",
 age : 20,
 town : "Londan",
}; 

console.log(person2["town"]);

for (let key in person1) {
    console.log(key + ": " + person1[key]);
}