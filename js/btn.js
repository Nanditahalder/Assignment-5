document.getElementById('donation-btn').addEventListener('click',function(){
 console.log('clicked')
    buttonActive('history-btn');
})
document.getElementById('history-btn').addEventListener('click',function(){
     console.log('clicked')
    buttonActive('donation-btn');

})