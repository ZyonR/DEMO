
const statements = [
    {'statement-img':"../imgs-webp/statement-img-7.webp",'statement-text':"I help resolve conflicts among my friends by mediating discussions and persuading them to reconcile, rather than directly solving the issue for them."},
    {'statement-img':"../imgs-webp/statement-img-8.webp",'statement-text':"I find it more effective to experience things firsthand."},
    {'statement-img':"../imgs-webp/statement-img-18.webp",'statement-text':"I am more familiar with the concepts of mental health compared to its intricate details. "},
    {'statement-img':"../imgs-webp/statement-img-1.webp",'statement-text':"I prefer reading and writing essays over solving numbers and equations."},
    {'statement-img':"../imgs-webp/statement-img-9.webp",'statement-text':"I am more interested in understanding human emotions than focusing on biological aspects."},
    {'statement-img':"../imgs-webp/statement-img-10.webp",'statement-text':"I solve AI art issues by creating a detection algorithm rather than a policy."},
    {'statement-img':"../imgs-webp/statement-img-11.webp",'statement-text':"I am more into fieldwork rather than lab experimentation."},
    {'statement-img':"../imgs-webp/statement-img-12.webp",'statement-text':"I see myself as a policy maker rather than a spokesperson."},
    {'statement-img':"../imgs-webp/statement-img-2.webp",'statement-text':"I am better at navigating the periodic table rather than the history of literature."},
    {'statement-img':"../imgs-webp/statement-img-6.webp",'statement-text':"I am more interested in domestic affairs rather than foreign affairs."},
    {'statement-img':"../imgs-webp/statement-img-4.webp",'statement-text':"I am interested in animal rights regardless of their breed."},
    {'statement-img':"../imgs-webp/statement-img-3.webp",'statement-text':"I consider myself more of an effective communicator than a detail-oriented person."},
    {'statement-img':"../imgs-webp/statement-img-13.webp",'statement-text':"I am more interested in the thought processes than the chemical structures underlying them."},
    {'statement-img':"../imgs-webp/statement-img-14.webp",'statement-text':"I would like to understand how different countries address their issues regarding illegal drugs, rather than focusing on which specific drugs are prevalent in each country."},
    {'statement-img':"../imgs-webp/statement-img-5.webp",'statement-text':"In a science fair,  I am more interested in the substance of the content than in how it is presented."},
    {'statement-img':"../imgs-webp/statement-img-15.webp",'statement-text':"I am more interested in the possibility of the existence of mythical creatures than in their representations."},
    {'statement-img':"../imgs-webp/statement-img-16.webp",'statement-text':"I am interested in Philippine politics rather than its culture."},
    {'statement-img':"../imgs-webp/statement-img-17.webp",'statement-text':"When someone is delivering their speech, I am more interested in how the person delivers the message rather than their behavior."},
];

const cardsContainer = document.querySelector('.cards-cont');
let cards;

window.addEventListener('load', e => {
    displayCards();
    cards = Array.from(cardsContainer.querySelectorAll('.card'));
    cards.forEach(card => {
        card.addEventListener('mousedown', startDragging);
        card.addEventListener('touchstart', startDragging);
    });
    initializeCards();
});
function displayCards() {
    statements.forEach(statement => {
        cardsContainer.innerHTML += `<div class="card">
                                        <img src="${statement['statement-img']}" class="image"/>
                                            <p class="textbox">${statement['statement-text']}</p>
                                    </div>`;
    });
}
const heartAnim = document.getElementById('heart');
const rejectAnim = document.getElementById('reject');

let startX = 0;
let currentX = 0;
let isDragging = false;
let currentIndex = 0;
let a = 0 // Number of left swipes
let b = 0 // Number of right swipes
let courseInfo = {};

let courses = {
    "com" : 0,
    "lls" : 0,
    "ids" : 0,
    "is" : 0,
    "psych" : 0,
    "am" : 0,
    "bio" : 0,
    "ps" : 0,
    "chem" : 0
};

// Initialize the cards in the correct order
function initializeCards() {
    console.log(cards);
    cards.forEach((card, index) => {
        card.style.zIndex = cards.length - index;
        card.style.display = 'block';
    });
    currentIndex = 0;
    const card = cards[currentIndex];
    card.style.boxShadow = "0 0 20px 0.1px rgba(0, 0, 0, 0.67)";
}

/*
displayYourMatch({
    'orgLogo':'../imgs-webp/idssoc-logo.webp', 
    'program-name':"BS Interdisciplinary Studies",
    'more-info':'https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-arts-in-interdisciplinary-studies/',
    'fb-org-page': 'https://www.facebook.com/FEUIDSSoc'
});

"com" : 0,
    "lls" : 0,
    "ids" : 0,
    "is" : 0,
    "psych" : 0,
    "am" : 0,
    "bio" : 0,
    "ps" : 0,
    "chem" : 0
*/

function highestValue(dict){
    const sortedDict = Object.fromEntries(Object.entries(dict).sort(([,a],[,b]) => b-a));
    if (b == 0) return "None";
    if (b == 18) return "all";
    return Object.keys(sortedDict)[0];
}

function courseResult(course){
    var info = {
        'orgLogo' : "",
        'program-name' : "",
        'more-info' : "",
        'fb-org-page' : ""
    };
    switch (course){
        case "com" :
            info["orgLogo"] = "../imgs-webp/commsoc-logo.webp";
            info["program-name"] = "BA Communications";
            info["more-info"] = "https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-arts-in-communication/";
            info["fb-org-page"] = "https://www.facebook.com/FeuCommSoc";
            break;

        case "lls" :
            info["orgLogo"] = "../imgs-webp/litsoc-logo.webp";
            info["program-name"] = "BA Language & Literature";
            info["more-info"] = 'https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-arts-in-language-and-literature-studies/';
            info["fb-org-page"] = 'https://www.facebook.com/FEULitSoc';
            break;

        case "ids" :
            info["orgLogo"] = "../imgs-webp/idssoc-logo.webp";
            info["program-name"] = "BA Interdisciplinary Studies";
            info["more-info"] = "https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-arts-in-interdisciplinary-studies/";
            info["fb-org-page"] = "https://www.facebook.com/FEUIDSSoc";
            break;

        case "is" :
            info["orgLogo"] = "../imgs-webp/issoc-logo.webp";
            info["program-name"] = "BA International Studies";
            info["more-info"] = "https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-arts-in-international-studies/";
            info["fb-org-page"] = "https://www.facebook.com/FEUISSoc";
            break;

        case "psych" :
            info["orgLogo"] = "../imgs-webp/psychsoc-logo.webp";
            info["program-name"] = "BS Psychology";
            info["more-info"] = "https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-science-in-psychology/";
            info["fb-org-page"] = "https://www.facebook.com/FEUPsych";
            break;

        case "am" :
            info["orgLogo"] = "../imgs-webp/mathsoc-logo.webp";
            info["program-name"] = "BS Applied Mathematics";
            info["more-info"] = "https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-science-in-applied-mathematics/";
            info["fb-org-page"] = "https://www.facebook.com/FEUMathSoc";
            break;

        case "bio" :
            info["orgLogo"] = "../imgs-webp/biosoc-logo.webp";
            info["program-name"] = "BS Biology";
            info["more-info"] = "https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-science-in-biology/";
            info["fb-org-page"] = "https://www.facebook.com/FEUBioSoc";
            break;

        case "ps" :
            info["orgLogo"] = "../imgs-webp/pss-logo.webp";
            info["program-name"] = "BA Political Science";
            info["more-info"] = "https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-arts-in-political-science/";
            info["fb-org-page"] = "https://www.facebook.com/feupoliticalsciencesociety";
            break;

        case "chem" :
            info["orgLogo"] = "../imgs-webp/mathsoc-logo.webp";
            info["program-name"] = "BS Chemistry";
            info["more-info"] = "https://www.feu.edu.ph/institute-of-arts-and-sciences/bachelor-of-science-in-chemistry/";
            info["fb-org-page"] = "https://www.facebook.com/FEUMathSoc";
            break;

    }
    return info;
}

// Attach event listeners to each card

document.addEventListener('mousemove', dragCard);
document.addEventListener('touchmove', dragCard);
document.addEventListener('mouseup', stopDragging);
document.addEventListener('touchend', stopDragging);

function startDragging(event) {
    event.preventDefault();
    isDragging = true;
    startX = event.clientX || event.touches[0].clientX;
}

function dragCard(event) {
    if (!isDragging) {
        const card = cards[currentIndex];
        card.style.boxShadow = "0 0 20px 0.1px rgba(0, 0, 0, 0.67)";
        return;
    }

    const x = event.clientX || event.touches[0].clientX;
    const offsetX = x - startX;
    currentX = offsetX;

    if (event.cancelable) {
        // event.preventDefault();
    }

    updateCardPosition();
}

function stopDragging() {
    if (!isDragging) {
        return;
    }

    isDragging = false;
    if (Math.abs(currentX) > 100) {
        if (currentX > 0) {
            updateScore(1); // Swipe right
        } else {
            updateScore(-1); // Swipe left
        }
        swipeCard();
    } else {
        currentX = 0;
        updateCardPosition();
    }
}

function updateCardPosition() {
    const card = cards[currentIndex];
    card.style.transform = `translateX(${currentX}px) rotate(${currentX / 10}deg)`;
}

function swipeCard() {
    const card = cards[currentIndex];
    card.style.transform = `translateX(${currentX * 5}px) rotate(${currentX / 2}deg)`;
    card.style.transition = 'transform 0.5s ease-in-out';
    card.addEventListener('transitionend', onSwipeEnd);
}



function onSwipeEnd() {
    var card = cards[currentIndex];
    card.removeEventListener('transitionend', onSwipeEnd);
    card.style.transition = '';
    currentX = 0;
    card.style.transform = '';
    card.style.zIndex = -1;
    card.style.display = 'none';

    currentIndex = (currentIndex + 1) % cards.length;
    card = cards[currentIndex];
    card.style.boxShadow = "0 0 20px 0.1px rgba(0, 0, 0, 0.67)";

    heartAnim.style.animation = "none";
    rejectAnim.style.animation = "none";
    if (currentIndex === 0) {
        courseInfo = courseResult(highestValue(courses));

        localStorage.setItem('program-name', courseInfo['program-name']);
        localStorage.setItem('orgLogo', courseInfo['orgLogo']);
        localStorage.setItem('more-info', courseInfo['more-info']);
        localStorage.setItem('fb-org-page', courseInfo['fb-org-page']);
        localStorage.setItem('numSwipeRight', a);
        window.location.href = '../results-page/results-page.html';
        resetCards();
    }
}

function resetCards() {
    // Reset all cards and set their display and z-index properties
    cards.forEach((card, index) => {
        card.style.display = 'block';
        card.style.zIndex = cards.length - index;
        card.style.boxShadow = "none";
    });
    currentIndex = 0;
}

function updateScore(value) {
    console.log(courses);

    if (value < 0) {
        rejectAnim.style.animation = "pop-up 1s ease-in-out 1";
        b += value * -1
    } else {
        heartAnim.style.animation = "pop-up 1s ease-in-out 1";
        a += value
    }

    switch (currentIndex){
        case 0:
            courses.com += value
            courses.ids += -value
            break;
        case 1:
            courses.lls += value
            courses.is += -value
            break;
        case 2:
            courses.ids += value
            courses.psych += -value
            break;
        case 3:
            courses.is += value
            courses.am += -value
            break;
        case 4:
            courses.psych += value
            courses.bio += -value
            break;
        case 5:
            courses.am += value
            courses.ps += -value
            break;
        case 6:
            courses.bio += value
            courses.chem += -value
            break;
        case 7:
            courses.ps += value
            courses.com += -value
            break;
        case 8:
            courses.chem += value
            courses.lls += -value
            break;
        case 9:
            courses.is += value
            courses.ps += -value
            break;
        case 10:
            courses.ids += value
            courses.bio += -value
            break;
        case 11:
            courses.lls += value
            courses.am += -value
            break;
        case 12:
            courses.psych += value
            courses.chem += -value
            break;
        case 13:
            courses.chem += value
            courses.is += -value
            break;
        case 14:
            courses.am += value
            courses.com += -value
            break;
        case 15:
            courses.bio += value
            courses.lls += -value
            break;
        case 16:
            courses.ps += value
            courses.ids += -value
            break;
        case 17:
            courses.com += value
            courses.psych += -value
            break;
    }

}
