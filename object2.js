// console.log('nikhil');
// let obj={
//     name:'nikhil',
//     eyecolor:'brown',
//     height:164,
//     country:"india"
// }
function obj(name,height,countrry,eyecolor){
    this.name=name;
    this.height=height;
    this.countrry=countrry;
    this.eyecolor=eyecolor;
    this.language="hindi";
}
let nikhil=new obj('nikhil',164,"india","brown");
console.log(nikhil)
// obj.prototype.language="hindi";
// console.log(nikhil)
// obj.prototype.getname=function(){
//     return this.name
// }
// obj.prototype.getlanguage=function(){
//     return this.language
// }
// console.log(nikhil.getname());
// console.log(nikhil.getlanguage());
// console.log(obj)
obj.prototype.setname=function(na){
    this.name=na;
}
nikhil.setname("tullu");
console.log(nikhil)