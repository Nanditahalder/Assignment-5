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