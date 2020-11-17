let mybtn=document.getElementById('mybtn');
mybtn.addEventListener('click',function(){
    let love=document.getElementById('loveMea');
    result=Math.ceil(Math.random()*100);
    love.value=result;
})