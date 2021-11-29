// map
var map = new Map();
map.set("1", "manav");
map.set(1, "www.javatpoint.com");
map.set(true, "bool1");
map.set("2", "ajay");
console.log("map", map);
console.log("map keys", map.keys());
console.log("map entries", map.entries());
console.log("map values", map.values());
console.log("map size", map.size);
console.log("get 1", map.get(1));
console.log("has 1", map.has(1));
console.log("has 1", map.has(4));
console.log(map.get(true));
for (let item of map.entries()) {
    console.log("map entries", item, item[0], item[1]);
}
// map.delete("1");
// console.log(map.get("1"));
// map.clear();
// console.log("map :", map);
// console.log(map.size);
// set
const set = new Set();
set.add(1);
set.add(2);
set.add("manav");
set.add(true);
set.add(1);
console.log("set", set);
console.log("set entries", set.entries());
console.log("set has manav?", set.has("manav"));
console.log("set size", set.size);
console.log("set keys", set.keys());
console.log("set values", set.values());
for (let item of set.entries()) {
    console.log(item);
}
set.delete(1);
console.log("set:", set);
set.clear();
console.log("set:", set);
// date
var date1 = new Date();
console.log(date1);
console.log(date1.getDate());
console.log(date1.getDay());
console.log(date1.getTime());
console.log(date1.getFullYear());
console.log(date1.getHours());
console.log(date1.getMilliseconds());
console.log(date1.getMinutes());
console.log(date1.getMonth());
console.log(date1.getSeconds());
console.log(date1.toString());
console.log(date1.toTimeString());
console.log(date1.toUTCString());
console.log(date1.toDateString());
console.log(date1.toLocaleDateString());
console.log(date1.toLocaleTimeString());
date1.setDate(11);
date1.setMonth(11);
date1.setFullYear(2021);
date1.setHours(11);
date1.setMinutes(11);
date1.setSeconds(11);
console.log(date1);
