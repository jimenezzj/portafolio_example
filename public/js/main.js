const navToggle = document.querySelector('.navToggle');
const navLinks = document.querySelectorAll('.nav__link')
const btnMyWork = document.querySelector('#btn-my-work');
const btnEn = document.querySelector('#btnEn');
const btnEs = document.querySelector('#btnEs');

// Intro elements
const introEle = document.querySelector('.section__title--intro');
const nameEle = document.querySelector('.section__title--intro strong');
const posEle = document.querySelector('.section__subtitle--intro');

//Navbar elements
const navBarsItems = document.querySelectorAll('.nav__list .nav__item a');

// Services elements
const serviceTitleEle = document.querySelector('.section__title--services');
const frontTitle = document.querySelector('.service__title--front');
const frontSubTitle = document.querySelectorAll('.service__subtitle--front');

const backTitle = document.querySelector('.service__title--back');
const backSubTitles = document.querySelectorAll('.service__subtitle--back');

const uiTitle = document.querySelector('.service__title--ui');
const uiSubTitles = document.querySelectorAll('.service__subtitle--ui');

// Aboutme elements
const aboutTitleEle = document.querySelector('.section__title--about');
const aboutSubTitleEle = document.querySelector('.section__subtitle--about');
const aboutBody = document.querySelectorAll('.about-me__body p');

// My work elements
const myWorkTitle = document.querySelector('.section__title--myWork');
const myWorkSubTitle = document.querySelector('.section__subtitle--myWork');

let currentLang = btnEn.id;

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

btnMyWork.addEventListener('click', () => {
    window.location.replace('#work');
});

btnEn.addEventListener('click', e => changeLang(e.target.id));
btnEs.addEventListener('click', e => changeLang(e.target.id));

function changeLang(id) {
    if (btnEn.id === id) {
        currentLang = btnEn.id;
        btnEs.classList.remove('active');
        btnEn.classList.add('active');
    } else {
        currentLang = btnEs.id;
        btnEs.classList.add('active');
        btnEn.classList.remove('active');
    }
    loadInfo();
}

function loadInfo() {
    const lang = currentLang === btnEn.id ? 'EN' : 'ES'; // lang selected by user
    const getInfo = info[lang]; // get info according to lang

    // Fill the intro section
    let nameCloneEle;
    nameEle.innerHTML = getInfo.intro.name;
    nameCloneEle = nameEle.cloneNode(true);
    introEle.innerHTML = getInfo.intro.greenting;
    posEle.innerHTML = getInfo.intro.pos;
    introEle.appendChild(nameCloneEle);

    // Fill services section
    serviceTitleEle.innerHTML = getInfo.services.title;
    frontTitle.innerHTML = getInfo.services.subTitles.front.title;
    frontSubTitle.forEach((ele, i) => ele.innerHTML = getInfo.services.subTitles.front.subtitles[i] + ':');
    backTitle.innerHTML = getInfo.services.subTitles.back.title;
    backSubTitles.forEach((ele, i) => ele.innerHTML = getInfo.services.subTitles.back.subtitles[i] + ':');
    uiTitle.innerHTML = getInfo.services.subTitles.ui.title;
    uiSubTitles.forEach((ele, i) => ele.innerHTML = getInfo.services.subTitles.ui.subtitles[i] + ':');

    // Fill about section
    aboutTitleEle.innerHTML = getInfo.about.title;
    aboutSubTitleEle.innerHTML = getInfo.about.subTitle;
    aboutBody.forEach((ele, i) => ele.innerHTML = getInfo.about.description[i]);

    // Fill my work section
    myWorkTitle.innerHTML = getInfo.work.title;
    myWorkSubTitle.innerHTML = getInfo.work.subTitle;

    // Fill navbar
    navBarsItems.forEach(ele => ele.innerHTML = getInfo.navbar[ele.classList[0]]);

    btnMyWork.innerHTML = getInfo.buttons.work;
}

changeLang(btnEn.id);

