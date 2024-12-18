const menu = document.querySelector('.menu-toggle');
const themeSwitcher = document.querySelector('input');
const currentTheme = localStorage.getItem('theme') || 'light';
const img = document.querySelector('header img');


menu.addEventListener('click', function () {
    menu.classList.toggle('open')
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
})


document.body.classList.add(`${currentTheme}-theme`);

themeSwitcher.addEventListener('change', () => {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.replace('light-theme', 'dark-theme');
        img.style.filter = 'invert(1)';
        localStorage.setItem('theme', 'dark');

    } else {
        document.body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light');
        img.style.filter = 'invert(0)';
    }
})
