document.getElementById('login').addEventListener('click' , function(){
    document.getElementById('login-area').classList.add('hidden');
    document.getElementById('transaction-area').style.display = 'block'
})
document.getElementById('addDeposit').addEventListener('click', function(){
    const depositNumber = updateInputNumber("depositAmmount");
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText('currentBalance', depositNumber);
    document.getElementById('depositAmmount').value = "";


})
document.getElementById('addWithdraw').addEventListener('click', function(){
    const withdrawNumber = updateInputNumber('withdrawAmount');
    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', withdrawNumber);
    document.getElementById('withdrawAmount').value = "";
})
function updateInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
function updateSpanText(id, addNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const newBalance = currentNumber + addNumber;
    document.getElementById(id).innerText = newBalance;
}