let section = document.querySelectorAll("section");
let menuHead = document.querySelectorAll('h3');

// console.log(section);
// console.log(menuHead);

for (let i = 0 ; i < menuHead.length; i++){
    menuHead[i].addEventListener("click", function() {
        section[i].classList.toggle('open');
        menuHead[i].classList.toggle('open');
    });
};

