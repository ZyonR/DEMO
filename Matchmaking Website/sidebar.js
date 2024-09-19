const closeSideBarBtn = document.querySelector('.close-sidebar-btn');
const openSideBarBtn = document.querySelector('.menu-icon');

const sideNavCont = document.querySelector('.navigation-landing');
const sideNav = Array.from(sideNavCont.children);
sideNav.forEach(element=>{
    element.addEventListener('click',e=>{
        localStorage.setItem('activate',e.target.innerHTML);
    });
});

closeSideBarBtn.addEventListener('click',e=>{
    const sideBar = document.querySelector('.sidebar');
    const sideBarWidth = sideBar.getBoundingClientRect().width;
    sideBar.style.left = "-"+sideBarWidth+'px';
});
openSideBarBtn.addEventListener('click',e=>{
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.left = 0;
    sideBar.style.display = "block";
});
window.addEventListener('resize', function() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = "none";
});
window.addEventListener('load', function() {
    const sideBar = document.querySelector('.sidebar');
    const sideBarWidth = sideBar.getBoundingClientRect().width;
    sideBar.style.left = "-"+sideBarWidth+'px';
});