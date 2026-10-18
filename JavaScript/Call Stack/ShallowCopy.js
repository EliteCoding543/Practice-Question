// const obj = {
//     name: "Shivam",
//     age : 20,
//     address: {
//         city: "Delhi"
//     }
// };
// console.log("Before Shallow copy",obj.address.city)
// const res = { ...obj };

// res.name = "Rohit";
// res.age = 25;
// res.address.city = "Noida";

// console.log(obj.name); 
// console.log(obj.age)         // "Shivam"
// console.log(obj.address.city);  // "Mumbai"

const obj = {
    address: {
        city: "Delhi",
        details : {
            name : "Shivani",
            age : 25,
        }
    }

};
// obj.address.details.name = "Hemu"
console.log(obj)

const res = { ...obj };


res.address.details.name = "Saloni"
// res.address.city = "Noida";
// res.address = { city: "Mumbai" };

// console.log(obj.address.city);
// console.log(res.details.name);

console.log(res.address.details.name)