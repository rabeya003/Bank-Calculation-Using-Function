document.getElementById('btn-withdraw').addEventListener('click',function(){
    // get new withdraw from inputfield:
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawString=withdrawField.value;
    const newWithdrawInnertext=parseFloat(newWithdrawString);

    // clear input field
    withdrawField.value='';

    //if enter string or NAN
    if(isNaN(newWithdrawInnertext)){
        alert('Please provide a number');
        return;

    }

    const withdrawTotal=document.getElementById('Withdraw-total');
    const previousWithdrawstring=withdrawTotal.innerText;
    const previousWithdraw=parseFloat(previousWithdrawstring);

    // Get the previous balance from balance field
    const totallBalance=document.getElementById('Balance-total');
    const previousTotallBalanceString=totallBalance.innerText;
    const previousTotallBalance =parseFloat(previousTotallBalanceString);

    // if the newammount is grater then Totall balance:
    if(newWithdrawInnertext>previousTotallBalance){
        alert('This amount is gretaer then your balance')
        return;
    }
    // Current Totall withdraw
    const currentwithdraw=newWithdrawInnertext+previousWithdraw;
    withdrawTotal.innerText=currentwithdraw;

    // totall balance now
    const currentBalance=previousTotallBalance-newWithdrawInnertext;
    totallBalance.innerText=currentBalance;


})