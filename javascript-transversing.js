undefined
cont
<div class=​"container">​…​</div>​::before​<div class=​"logo">​…​</div>​<nav>​…​</nav>​</div>​
cont.childNodes
NodeList(5) [text, div.logo, text, nav, text]0: text1: div.logo2: text3: nav4: textlength: 5__proto__: NodeList
The remote object could not be resolved into a valid node.
cont.children
HTMLCollection(2) [div.logo, nav]0: div.logo1: navlength: 2__proto__: HTMLCollection
let nodename=cont.childNodes[0].nodeName
undefined
nodename
"#text"
let nodename=cont.childNodes[1].nodeName
undefined
nodename
"DIV"
let nodename=cont.childNodes[3].nodeName
undefined
nodename
"NAV"
let nodetype=cont.childNodes[0].nodeType
undefined
nodetype
3
let nodetype=cont.childNodes[1].nodeType
undefined
nodetype
1
let nodetype=cont.childNodes[3].nodeType
undefined
nonetype
VM847:1 Uncaught ReferenceError: nonetype is not defined
    at <anonymous>:1:1
(anonymous) @ VM847:1
nodetype
1
let contai=document.querySelector('.main2')
undefined
contai
<div class=​"main2">​…​</div>​
contai.childNodes
NodeList(7) [text, div#box-1, text, div#box-2, text, div#box-3, text]
contai.children
HTMLCollection(3) [div#box-1, div#box-2, div#box-3, box-1: div#box-1, box-2: div#box-2, box-3: div#box-3]
contai.children[0].children
HTMLCollection(3) [img, h2, p]0: img1: h22: plength: 3__proto__: HTMLCollection
contai.children[0].children[2]
<p>​…​</p>​
contai.children[0].children[2].children[0]
undefined
contai.firstChild
#text
contai.firstElementChild
<div id=​"box-1">​…​</div>​
contai.lastChild
#text
contai.lastElementChild
<div id=​"box-3">​…​</div>​
contai.childElementCount
3
contai.firstElementChild.parentNode
<div class=​"main2">​…​</div>​
contai.firstElementChild.parentElement
<div class=​"main2">​…​</div>​
contai.firstElementChild.nextSibling
#text
contai.firstElementChild.nextSibling.nextSibling
<div id=​"box-2">​…​</div>​
contai.firstElementChild.nextSibling.nextSibling.nextSibling
#text
contai.firstElementChild.nextSibling.nextSibling.nextSibling.nextSibling
<div id=​"box-3">​…​</div>​