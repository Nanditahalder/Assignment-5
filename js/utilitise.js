function getDonateAmount (id){
    const donateValue = document.getElementById(id).value;
    const donateValueNumber = parseFloat(donateValue);
    return donateValueNumber;
}
function getDonationAmountFilled (id){
    const donationAmount = document.getElementById(id).innerText;
    const donationAmountNumber = parseFloat(donationAmount);
    return donationAmountNumber;
}
function getDonationAmountSub(id){
    const donationSub = document.getElementById(id).innerText;
    const donationSubNumber = parseFloat(donationSub);
    return donationSubNumber;
}
function buttonActive(id){
    document.getElementById('donation-btn').classList.add('bg-[rgb(188,244,97)]');
    document.getElementById('history-btn').classList.add('bg-[rgb(188,244,97)]');
    document.getElementById(id).classList.remove('bg-[rgb(188,244,97)]');
    
}
function showSite(id){
    document.getElementById('donation-site').classList.add('hidden');
    document.getElementById('history-site').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    
}