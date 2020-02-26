let section = document.getElementsByTagName("section");
let menuHead = $(section).parent();

console.dir(section);

$(menuHead).on("click", function() {
    $(section).toggleClass("open");
});

