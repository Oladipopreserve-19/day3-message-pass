console.log('app.js');
let btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
let notification = document.querySelector('.sendText');
notification.innerHTML = 'Your message has been delivered';
})