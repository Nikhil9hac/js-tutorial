newli=document.createElement('li')
<li>​</li>​
tnode=documenr
VM2892:1 Uncaught ReferenceError: documenr is not defined
    at <anonymous>:1:1
(anonymous) @ VM2892:1
tnode=document.createTextNode('Nikhil')
"Nikhil"
nweli.classname='created1';
VM3141:1 Uncaught ReferenceError: nweli is not defined
    at <anonymous>:1:1
(anonymous) @ VM3141:1
newli.className='created1';
"created1"
newli.id='created2';
"created2"
newli.setAttribute('title','javascript_title');
undefined
newli
<li class=​"created1" id=​"created2" title=​"javascript_title">​</li>​
newli.appendChild(tnode)
"Nikhil"
newli
<li class=​"created1" id=​"created2" title=​"javascript_title">​Nikhil​</li>​
newli.innerHTML='<b>`${tnode}`/b>'
"<b>`${tnode}`/b>"
newli
<li class=​"created1" id=​"created2" title=​"javascript_title">​…​</li>​<b>​`${tnode}`/b>​</b>​</li>​
let ul=document.querySelector('ul.navi');
undefined
ul
<ul class=​"navi">​…​</ul>​
ul.appendChild(newli)
<li class=​"created1" id=​"created2" title=​"javascript_title">​…​</li>​
newli.style.color='white';
"white"
newli.style.marginTop='25px'
"25px"
newli.style.marginTop='5px'
"5px"
newli.style.marginTop='2px'
"2px"
newli.style.marginTop='1px'
"1px"