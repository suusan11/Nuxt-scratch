// Add target and rel to external links
const domain = document.domain;
const regexp = new RegExp(domain);
const links = document.getElementsByTagName('a');
for(let link of links) {
    if(!regexp.test(link.href)) {
        if(link.href.match(/^https:\/\//) || link.href.match(/^http:\/\//)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener');
        }
    }else if(link.href.match(/\.pdf/)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener');
    }
}

// Open global menu
const menuBtn = document.getElementById('js-toggle-menu');
const gnav = document.getElementById('js-global-menu');
const body = document.querySelector('body');
let scrollValue;

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is__open');
    gnav.classList.toggle('is__open');
    body.classList.toggle('is__open');
    if(body.classList.contains('is__open')) {
        scrollValue = window.pageYOffset;
        body.style.top = -scrollValue + 'px';
    }else {
        body.style.removeProperty('top');
        window.scrollTo(0, scrollValue);
    }
});

// Internal link
const menus = document.querySelectorAll('.global__menu > ul > li > a');
menus.forEach(menu => {
    menu.addEventListener('click', () => {
        if(body.classList.contains('is__open')) {
            body.classList.remove('is__open');
            gnav.classList.remove('is__open');
        }
    })
});

// Adjust link position
window.onload = () => {
    if(window.location.hash == "") {
        return;
    }
    document.getElementById(window.location.hash.slice(1)).scrollIntoView(true);
}