let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
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
let developerImages = ["../imgs-webp/dev-1.webp",
                        "../imgs-webp/dev-2.webp",
                        "../imgs-webp/dev-3.webp",
                        "../imgs-webp/dev-4.webp",
                        "../imgs-webp/dev-5.webp",];
let proponentImages = [ "../imgs-webp/propo-1.webp",
                        "../imgs-webp/propo-2.webp",
                        "../imgs-webp/propo-3.webp"];

window.addEventListener('load', function() {
    displayFooter();
    developerImages = shuffleArray(developerImages);
    proponentImages = shuffleArray(proponentImages);
    displayTeam("image-propo");
    displayTeam("image-dev");
});
function displayTeam(container){
    let imagesCont = document.getElementById(container);
    let suffix;
    let arrayOfImgs;
    if(container == "image-propo"){
        suffix = '-propo';
        arrayOfImgs = proponentImages;
    }else{
        suffix = '-dev';
        arrayOfImgs = developerImages;
    }
    arrayOfImgs.forEach(function(element,index){
        imagesCont.innerHTML+=`<img id="img${index+1+suffix}" src="${element}" class="d-block w-100" alt="Image ${index+1}"></img>`;
    });
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
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
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
    if (currentScroll > lastScrollTop) {
        navbar.style.top = '-100px';
    } else {
        navbar.style.top = '0'; 
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);