const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const loginpopup = document.querySelector('.login');
const iconClose = document.querySelector('.icon-close');
const submitbutton = document.querySelector('.smtbtn')



registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');

});
loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    
});
loginpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');

});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');

});
submitbutton.addEventListener('click', ()=> {
    const eml = document.getElementById("eml").value;
    const pass = document.getElementById("pass").value;
    localStorage.setItem('email', eml);
    localStorage.setItem('password', pass);
    if(eml == "" && pass ==""){
        alert("Input Fields Empty")
    }
})