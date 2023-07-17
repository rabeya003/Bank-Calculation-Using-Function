document.getElementById('btn-deposit').addEventListener('click',function(){
    //get deposit ammount from the deposit input field
    const depositField=document.getElementById('enter-deposit');
    const newDeposidtString=depositField.value;
    const newDepositInnertext=parseFloat(newDeposidtString);

    // clear the inputfield:
    depositField.value='';
    //if enter string or NAN
    if(isNaN(newWithdrawInnertext)){
        alert('Please provide a number');
        return;

    }

    // get the previous deposit total:
    const depositTotall=document.getElementById('deposit-total');
    const previousdepositTotalString=depositTotall.innerText;
    const previousdepositTotal=parseFloat(previousdepositTotalString);

    // calculate new deposit total and set it to the deposit total:
    const currentdeposit=newDepositInnertext+previousdepositTotal;
    depositTotall.innerText=currentdeposit;

    // get current Balance
    const totalBalance=document.getElementById('Balance-total');
    const preBalanceString=totalBalance.innerText;
    const preBalance=parseFloat(preBalanceString);

    const currentTotallBalance=preBalance+newDepositInnertext;
    totalBalance.innerText=currentTotallBalance;



})