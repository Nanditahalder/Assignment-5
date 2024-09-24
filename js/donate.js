document.getElementById('donate-btn').addEventListener('click',function(){
   const donateAmount = getDonateAmount('donate-input-amount');
   const donationAmountFilled = getDonationAmountFilled('dontion-amount');
   const donationAmountSub = getDonationAmountSub('donation-sub');
   if(donateAmount > 0){
    const balance = donationAmountFilled + donateAmount;
    // document.getElementById('dontion-amount').innerText = balance;
    const donationSubBalance = donationAmountSub - donateAmount;
    document.getElementById('donation-sub').innerText = donationSubBalance;
    alert('You Have Donate for Humankind')


    const p = document.createElement('p');
    p.innerText = ` ${donateAmount} Taka is Donated for faming-2024 at Feni, Bangladesh`
    document.getElementById('history-container').appendChild(p);
   }
   else{
    alert('Invalid Donation Amount')
   }
   if(isNaN(donateAmount)){
    alert('Please give some amount')
    return;
   }
})

document.getElementById('donate-btn2').addEventListener('click',function(){
   const donateAmount = getDonateAmount('donate-input-amount2');
   const donationAmountFilled = getDonationAmountFilled('dontion-amount2');
   const donationAmountSub = getDonationAmountSub('donation-sub');
   if(donateAmount > 0){
    const balance = donationAmountFilled + donateAmount;
    // document.getElementById('dontion-amount2').innerText = balance;
    const donationSubBalance = donationAmountSub - donateAmount;
    document.getElementById('donation-sub').innerText = donationSubBalance;
    alert('You Have Donate for Humankind')


    const p = document.createElement('p');
    p.innerText = ` ${donateAmount} Taka is Donated for faming-2024 at Feni, Bangladesh`
    document.getElementById('history-container1').appendChild(p);
   }
   else{
    alert('Invalid Donation Amount')
   }
   if(isNaN(donateAmount)){
    alert('Please give some amount')
    return;
   }
})

document.getElementById('donate-btn3').addEventListener('click',function(){
   const donateAmount = getDonateAmount('donate-input-amount3');
   const donationAmountFilled = getDonationAmountFilled('dontion-amount3');
   const donationAmountSub = getDonationAmountSub('donation-sub');
   if(donateAmount > 0){
    const newBalance = donationAmountFilled + donateAmount;
    // document.getElementById('dontion-amount3').innerText = newBalance;
    const donationSubBalance = donationAmountSub - donateAmount;
    document.getElementById('donation-sub').innerText = donationSubBalance;
    alert('You Have Donate for Humankind')

    const p = document.createElement('p');
    p.innerText = ` ${donateAmount} Taka is Donated for faming-2024 at Feni, Bangladesh`
    document.getElementById('history-container2').appendChild(p);
   }
   else{
    alert('Invalid Donation Amount')
   }
   if(isNaN(donateAmount)){
    alert('Please give some amount')
    return;
   }
})




// small device donation subtraction

// content 1
document.getElementById('donate-btn').addEventListener('click',function(){
    const donateAmount = getDonateAmount('donate-input-amount');
    const donationAmountFilled = getDonationAmountFilled('dontion-amount');
    const donationAmountSubSmallDevice = getDonationAmountSub('smal-divice-donation-sub');
    if(donateAmount > 0){
     const balance = donationAmountFilled + donateAmount;
     document.getElementById('dontion-amount').innerText = balance;
     const donationSubBalance = donationAmountSubSmallDevice - donateAmount;
     document.getElementById('smal-divice-donation-sub').innerText = donationSubBalance;
    }
    else{
     alert('Invalid Donation Amount')
    }
    if(isNaN(donateAmount)){
     alert('Please give some amount')
     return;
    }
 })

//  content 2
document.getElementById('donate-btn2').addEventListener('click',function(){
    const donateAmount = getDonateAmount('donate-input-amount2');
    const donationAmountFilled = getDonationAmountFilled('dontion-amount2');
    const donationAmountSubSmallDevice = getDonationAmountSub('smal-divice-donation-sub');
    if(donateAmount > 0){
     const newBalanceAmount = donationAmountFilled + donateAmount;
     document.getElementById('dontion-amount2').innerText = newBalanceAmount;
     const donationSubBalance = donationAmountSubSmallDevice - donateAmount;
     document.getElementById('smal-divice-donation-sub').innerText = donationSubBalance;
    }
    else{
     alert('Invalid Donation Amount')
    }
    if(isNaN(donateAmount)){
     alert('Please give some amount')
     return;
    }
 })
 
//  content 3
document.getElementById('donate-btn3').addEventListener('click',function(){
    const donateAmount = getDonateAmount('donate-input-amount3');
    const donationAmountFilled = getDonationAmountFilled('dontion-amount3');
    const donationAmountSubSmallDevice = getDonationAmountSub('smal-divice-donation-sub');
    if(donateAmount > 0){
     const newAmountBalance = donationAmountFilled + donateAmount;
     document.getElementById('dontion-amount3').innerText = newAmountBalance;
     const donationSubBalance = donationAmountSubSmallDevice - donateAmount;
     document.getElementById('smal-divice-donation-sub').innerText = donationSubBalance;
    }
    else{
     alert('Invalid Donation Amount')
    }
    if(isNaN(donateAmount)){
     alert('Please give some amount')
     return;
    }
 })