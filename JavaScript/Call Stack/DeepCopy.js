const obj = {
    name : "Shivam",
    age : 25,
    address : {
        city : "Noida",
        pin : 201301,
    }
}

console.log("Before Original Obj is ", obj.name = "Mohit")
const res = structuredClone(obj)
console.log(res)
// Now change same copy

res.name = "Rohit"
res.address.city = "UP12"

console.log("After deep copy value is :", res)

