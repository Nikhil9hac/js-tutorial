let str='css'
let links=document.links
let href;
Array.from(links).forEach(function(element){
    href=element.href;
    if(href.includes(str)){
        console.log(href);
    }
})