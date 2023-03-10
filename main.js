var bike="yamaha";
console.log(bike,typeof bike);
var prise=150000;
console.log(prise,typeof prise);
var available=true;
console.log(available, typeof available);
var discount=null;
console.log(discount,typeof discount);
var condition=undefined;
console.log(condition,typeof condition);
var logo=Symbol();
console.log(logo,typeof logo);

let hisage=19;
if(hisage>18){
    console.log("voter is eligibale to vote");
}
else{
    console.log("voter is not eligibale to vote");
}
function addnumbers(a,b){
var c=1+b;
  return c;
}
console.log(addnumbers(1,2))
console.log(addnumbers(1,4))
console.log(addnumbers(1,6));
var animals=["tiger","lion","cheetha","leopord","gorilla","monkey","godzilla","chimpanzee","cow","dog","deer","bear","elephant","rhino","rabbit","crocordile","giraffe","kangroo","camel","wolf"];
console.log(animals.length);
for(var i=0;i<animals.length;i++){
    console.log(animals[i]);
}
var fruits=["apple","banana","grapes","mango","papaya"]
console.log(fruits.length);
fruits.push("strawberry");
console.log(fruits);
fruits.unshift();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.pop();
console.log(fruits);