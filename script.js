const money = document.querySelector('#money');
const percentage = document.querySelector('#percentage');

money.addEventListener('input', ()=>{
    p = money.value;
    percentage.innerHTML="£"+(p*0.025).toFixed(2)
})