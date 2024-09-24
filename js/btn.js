document.getElementById('donation-btn').addEventListener('click',function(){
 console.log('clicked')
    buttonActive('history-btn');
    showSite('donation-site');
})
document.getElementById('history-btn').addEventListener('click',function(){
    //  console.log('clicked')
    buttonActive('donation-btn');
    showSite('history-site')

})