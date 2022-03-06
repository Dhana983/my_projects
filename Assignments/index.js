/* let age=565;
console.log(typeof age);
let a =5, b = 7;
if(a<b){
    var c = 50;
}
console.log(c); */
//backtik expression
/* let a= 10, b = 20;
console.log(`sum of a and b: ${a+b}`); //expression is always followed by $ */
/* let age= 16;
if(age>18){
    console.log('eligible to vote');

}
else{
    console.log('not eligible to vote')
} */
/* let names = ["john" , "mike" ,"peter","kevin"];
for(let i=0;i<names.length;i++){ */
    /* if(names[i].startsWith('p')){
        continue;
    } */
   //console.log(names[i]);
//}
   /*  console.log(names.slice(1,2));
console.log('Before: '+names);
    
let newnames = names;
newnames.push('dhana');
console.log('After: '+names);
 */

/* for(let name in names){
    console.log(name);
} */

/* for(let name of names){
    console.log(name);
} */
/* let hello = function(){
    console.log('hello');
}
console.log(typeof hello);
hello();
 */
/* let test = function(){
    console.log('Arrow function demo');
}
let test1 = () => console.log('Arrow function demo');
test(); */
/* let test1 = (a,b) => console.log(a+b);
test1(5,6);
 */
/* let test1 = (a,b) => {
    let c=a+b;
    return c;
}
console.log(test1(12,13));
console.log(typeof test1);
 */
/* let numbers = [12,23,18,26,40];
let evennumbers = numbers.filter(getEven);
function getEven(num) {
    return num%2 ==0;
    
}
console.log(evennumbers);
console.log('Original '+numbers);
let squareNum = numbers.map(getsquared);
function getsquared(num){
    return num*num;
}
console.log('squared: '+squareNum);

let sum = numbers.reduce(getsum,0);
function getsum(total,num) {
    return total+num;
    
}
console.log('sum of all the number:'+sum);
 */
/* let person = {};
console.log(typeof person);
let  person1 = {
    firstName:'dhana' ,
    lastName:"kilaru"
}
    console.log(person1.firstName + "" + person1.lastName);
    person1.country = 'aus';
    console.log(person1);

for(const key in person1){
    console.log(person1[key]);
}

 */







/* let person  = {firstname: "shane",
lastnam: "warne",
play(){
console.log('All time greats');
}

}
person.play();
 */
function Person(firstName , lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age=age;
    this.getInfo = function(){
        return this.firstName + "  "+this.lastName+" "+"age: "+this.age;
    }
}

let person1 = new Person('peter' ,'waugh' , 34);
let person2 = new Person('dhana' ,'wah' , 24);
let person3 = new Person('ter' ,'aus' , 49);


//console.log(person3);
console.log(person1.getInfo());






































