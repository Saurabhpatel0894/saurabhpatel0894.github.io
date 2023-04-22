let header= document.querySelector('header');
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
menu.onclick = () =>{
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

//GitHub

GitHubCalendar(".calendar", "Saurabhpatel0894");
// or enable responsive functionality
GitHubCalendar(".calendar", "Saurabhpatel0894", { responsive: true });