let output=document.querySelector('.output');
output.addEventListener('click',function(){
    let weight=document.getElementById('myweight').value;
    let height=document.getElementById('myheight').value*0.01;
    result1=weight/Math.pow(height,2)
    let val=document.getElementById('result');
    val.value=Math.round(result1);
})