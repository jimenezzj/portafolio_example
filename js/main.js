const navToggle = document.querySelector('.navToggle');
const navLinks = document.querySelectorAll('.nav__link')
const btnMyWork = document.querySelector('#btn-my-work');
const btnEn = document.querySelector('#btnEn');
const btnEs = document.querySelector('#btnEs');
const expMainWrapper = document.querySelector("#work-wrapper");
const educMainWrapper = document.querySelector("#education-wrapper");

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

// Goals
const goalsTitle = document.querySelector(".section__title--goals");
const goalsBody = document.querySelectorAll(".goals__body .goals__item");

// Work & Education
const workWrapper = document.querySelector("#work-wrapper");
const educationWrapper = document.querySelector("#education-wrapper");

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

    // fill experience section
    if (document.querySelector("#work-wrapper > .experience-list "))
        document.querySelectorAll("#work-wrapper > .experience-list ").forEach(i => i.remove());
    fillExpirienceSection(getInfo.experiences, "exp");

    // fill education section
    if (document.querySelector("#education-wrapper > .experience-list "))
        document.querySelectorAll("#education-wrapper > .experience-list ").forEach(i => i.remove());
    fillExpirienceSection(getInfo.education, "educ");

    // fill goals
    fillGoals(getInfo);

    // Work & education Wrapper
    educationWrapper.querySelector("h2").innerHTML = getInfo.we.education.title;
    educationWrapper.querySelector("p").innerHTML = getInfo.we.education.subTitle;

    workWrapper.querySelector("h2").innerHTML = getInfo.we.work.title;
    workWrapper.querySelector("p").innerHTML = getInfo.we.work.subTitle;
}

function fillExpirienceSection(expsList, typeList) {
    // if (document.querySelector("#work-wrapper > .experience-list ")) {
    //     document.querySelector("#work-wrapper > div").remove();
    // }

    let expWrapper = document.createElement("div");
    expWrapper.classList.add("experience-list");
    let img = document.createElement("img");
    img.classList.add("experience-list__img");
    let expTitle = document.createElement("h3");
    expTitle.classList.add("experience-list__title");
    let expSubTitle = document.createElement("p");
    expSubTitle.classList.add("experience-list__subtitle");

    expWrapper.appendChild(img);
    expWrapper.appendChild(expTitle);
    expWrapper.appendChild(expSubTitle);

    expsList.forEach(ex => {
        let listWrapp = document.createElement("ul");
        let expList = document.createElement("div");
        expList.classList.add("experience-list__body");
        img.src = ex.companyImg;
        expTitle.innerHTML = ex.title;
        expSubTitle.innerHTML = ex.subtitle;
        ex.desc.forEach(d => {
            let item = document.createElement("li");
            item.innerHTML = d;
            listWrapp.appendChild(item);
        });
        expList.appendChild(listWrapp);
        expWrapper.appendChild(expList);
        if (typeList === "exp") expMainWrapper.appendChild(expWrapper.cloneNode(true));
        if (typeList === "educ") educMainWrapper.appendChild(expWrapper.cloneNode(true));
        expList.remove();
    });
}

function fillGoals(info) {
    goalsTitle.innerHTML = info.goals.title;
    goalsBody.forEach((item, i) => {
        item.querySelector("h2").innerHTML = info.goals.items[i].title;
        item.querySelector("p").innerHTML = info.goals.items[i].description;
    });
}

changeLang(btnEn.id);

