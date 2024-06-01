var fruits = ["apple","mango","banana"]
fruits.pop ("bnana");
console.log(fruits);


var animals = ["elephant","monkey","loin","cat",]
animals.push ("cow");
console.log(animals);


var girls = ["anisa","hafiza","fatma","sobia"]
girls.shift ("sobia");
console.log(girls);

var girls = ["anisa","hafiza","fatma","sobia"]
girls.unshift ("sobia");
console.log(girls);


var staff = ["saira","sana","safya"]
staff.splice(0,1,"safya");
console.log(staff);

var city = ["karachi","lahore","pishawar","islamabad"]
var check = city.splice(1,0,"headrabad")
console.log(check);
console.log(city[1]);
