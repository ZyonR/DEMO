let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const iasPrograms = [
    {'program-title':'BS Biology','program-description':'Bachelor of Science in Biology is a preparatory program for those aspiring to enter the fields of biomedical research, biotechnology, human medicine and other allied health professions.', "program-link":'https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-science-in-biology/'},
    {'program-title':'BS Psychology','program-description':'Bachelor of Science in Psychology is a four-year program that provides students with an understanding of human behavior and mental processes.', "program-link":'https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-science-in-psychology/'},
    {'program-title':'BS Applied Mathematics','program-description':'Bachelor of Science in Applied Mathematics allows students to gain proficiency in the use of mathematical principles to model real-world phenomena. Possessing a strong foundation in various mathematical theories and techniques, students can apply their knowledge across various fields.', "program-link":'https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-science-in-applied-mathematics/'},
    {'program-title':'BS Chemistry','program-description':'The Bachelor of Science in Chemistry (BS Chem) program seeks to develop competitive chemists with a solid grounding in theories and their applications through research. Students will acquire laboratory skills and critical thinking through thorough lectures, advanced laboratory equipment, seminars, and professional involvement.', "program-link":'https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-science-in-chemistry/'},
    {'program-title':'BA Communications','program-description':'The Bachelor of Arts in Communication (BA Comm) is a four-year undergraduate program intended to prepare aspiring media practitioners and communication professionals into becoming principled, competitive leaders in their future careers.', "program-link":'https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-arts-in-communication/'},
    {'program-title':'BA International Studies','program-description':'Bachelor of Arts in International Studies is a four-year undergraduate program designed to produce competent future leaders in understanding global affairs.', "program-link":'https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-arts-in-international-studies/'},
    {'program-title':'BA Interdisciplinary Studies','program-description':'Bachelor of Arts in Interdisciplinary Studies (BAIDS) is a four-year undergraduate program designed to develop students with the right analytical tools for different social, political, and economic issues among states.', "program-link":'https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-arts-in-interdisciplinary-studies/'},
    {'program-title':'BA Language & Literature Studies','program-description':'The Bachelor of Arts in Language and Literature Studies is designed to train students in a range of skills including advanced communicative competence, effective strategies in rhetoric and research, and modes of literacy that provide access to macro/micro skills and integrated/integrative competencies.', "program-link":'https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-arts-in-language-and-literature-studies/'},
    {'program-title':'BA Political Science','program-description':'The Bachelor of Arts in Political Science (BAPS) program of the Far Eastern University aims to provide students with an extensive and analytical understanding of the theoretical and functional aspects of Philippine politics and foreign relations.', "program-link":'https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-arts-in-political-science/'}
];
var organizationLinks = [
    {'facebook-link': 'https://www.facebook.com/FEUIDSSoc', 'image-location': '../imgs-webp/idssoc-logo.webp'},
    {'facebook-link': 'https://www.facebook.com/FEUISSoc', 'image-location': '../imgs-webp/issoc-logo.webp'},
    {'facebook-link': 'https://www.facebook.com/FEUBioSoc', 'image-location': '../imgs-webp/biosoc-logo.webp'},
    {'facebook-link': 'https://www.facebook.com/FeuCommSoc', 'image-location': '../imgs-webp/commsoc-logo.webp'},
    {'facebook-link': 'https://www.facebook.com/FEUMathSoc', 'image-location': '../imgs-webp/mathsoc-logo.webp'},
    {'facebook-link': 'https://www.facebook.com/FEUPsych', 'image-location': '../imgs-webp/psychsoc-logo.webp'},
    {'facebook-link': 'https://www.facebook.com/feupoliticalsciencesociety', 'image-location': '../imgs-webp/pss-logo.webp'},
    {'facebook-link': 'https://www.facebook.com/FEULitSoc', 'image-location': '../imgs-webp/litsoc-logo.webp'},
    {'facebook-link': 'https://www.facebook.com/FEUELC', 'image-location': '../imgs-webp/feuelc-logo.webp'}
];
const closeSideBarBtn = document.querySelector('.close-sidebar-btn');
const openSideBarBtn = document.querySelector('.menu-icon');

const sideNavCont = document.querySelector('.navigation-landing');
const sideNav = Array.from(sideNavCont.children);
sideNav.forEach(element=>{
    element.addEventListener('click',e=>{
        localStorage.setItem('activate',e.target.innerHTML);
    });
});

if(localStorage.getItem('activate')=='Programs'){
    const programATag = document.querySelector('.programs');
    programATag.click();
}else if(localStorage.getItem('activate')=='Academic Organizations'){
    const acadATag = document.querySelector('.acad-organizations');
    acadATag.click();
}

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
    displayPrograms();
    displayFooter();
});

function displayFooter(){
    const acadOrgLocation = document.querySelector('.academic-organizations-cont');
    organizationLinks.forEach(function(org,index){
        const newa = document.createElement('a');
        console.log(org);
        newa.classList.add('acad-org-logo-a');
        newa.href = org['facebook-link'];

        newa.innerHTML = `<img src="${org['image-location']}" alt="${'Logo'+index}" class="logo">`;

        acadOrgLocation.appendChild(newa);
    });
}
function displayPrograms() {
    const programCardLocation = document.querySelector('.program-cards');
    iasPrograms.forEach(program => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('program');

        newDiv.innerHTML=`
            <h1>${program['program-title'].toUpperCase()}</h1>
            <p>${program['program-description']}</p>
            <a href='${program['program-link']}'>More Information</a>
        `;
        programCardLocation.appendChild(newDiv);
    });
}

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
    if (currentScroll > lastScrollTop) {
        navbar.style.top = '-100px';
    } else {
        navbar.style.top = '0'; 
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);