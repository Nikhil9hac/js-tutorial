// console.log('nikhil';)
// object literal
// let car={
//     name:'maruti',
//     topspeed:180,
//     run:function(){
//         console.log('car is running');
//     }
// }
// console.log(car.name);
// console.log(car.topspeed);
// console.log(car.run())

function generalCar(name,topSpeed){
    this.name=name;
    this.topSpeed=topSpeed;
    this.run=function(){
        console.log('car is Running');
    }
    this.ananlyze=function(){
        console.log(`${name} is ${200-topSpeed}KMpH slower than mercedes`)
    }
}
car2=new generalCar('maruti',180);
console.log(car2.ananlyze())
car3=new generalCar('alto',80);
console.log(car3.ananlyze())
car4=new generalCar('mercedes',200);
console.log(car4.ananlyze())