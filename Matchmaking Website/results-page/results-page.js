const elcLogo = document.querySelector('.elc-logo');

function displayYourMatch(program){
    const yourMatch = document.querySelector('.program');
    const yourMatchOrg = document.querySelector('.organization-logo');
    const moreinfoBtn = document.querySelector('.more-information-a');
    const orgFBLink = document.querySelector('.organization-logo-a-tag');

    yourMatch.innerHTML = program['program-name'];
    yourMatchOrg.src=program['orgLogo'];
    moreinfoBtn.href = program['more-info'];
    orgFBLink.href = program['fb-org-page'];

    if(program['program-name']=='BA Language & Literature'){
        elcLogo.style.display='block';
    }
    if(program['program-name']=='Check Out Other Institutes'){
        const boomToOops = document.querySelector('.boom');
        boomToOops.innerHTML = 'OOPS!';
    }
}

elcLogo.addEventListener('touchStart',e=>{
    window.location.href = 'https://www.facebook.com/FEUELC';
});
elcLogo.addEventListener('touchEnd',e=>{
    window.location.href = 'https://www.facebook.com/FEUELC';
});
elcLogo.addEventListener('click',e=>{
    window.location.href = 'https://www.facebook.com/FEUELC';
});
const allLikedValue = {
    'orgLogo':'../imgs-webp/iassc.webp', 
    'program-name':"Institute of Arts and Sciences",
    'more-info':'https://www.feu.edu.ph/institute-of-arts-and-sciences/',
    'fb-org-page': "https://www.facebook.com/IASSCOfficial"
}
const yourMatch = {
    'orgLogo':localStorage.getItem('orgLogo'), 
    'program-name':localStorage.getItem('program-name'),
    'more-info':localStorage.getItem('more-info'),
    'fb-org-page': localStorage.getItem('fb-org-page')
}
const allRejected = {
    'orgLogo':'../imgs-webp/feu-logo.webp', 
    'program-name':"Check Out Other Institutes",
    'more-info':'https://www.feu.edu.ph/',
    'fb-org-page': 'https://www.facebook.com/FarEasternUniversity'
}

if(localStorage.getItem('numSwipeRight') == 0){
    displayYourMatch(allRejected);
}else if(localStorage.getItem('numSwipeRight') == 18){
    displayYourMatch(allLikedValue);
}else{
    displayYourMatch(yourMatch);
}