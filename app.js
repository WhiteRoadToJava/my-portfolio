const hamb = document.querySelector('#header .nav-bar .nav-list .hamb');
const mobileMenu = document.querySelector('#header .nav-bar .nav-list ul');
const header = document.querySelector('#header .header');


if(hamb && mobileMenu ){
    hamb.addEventListener('click', () => {
        hamb.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

mobileMenu.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => {
        hamb.classList.remove("active");
        mobileMenu.classList.remove("active");
    })
);

document.addEventListener("scroll", () => {
    if(!header) return ;
    header.computedStyleMap.backgroundColor = window.scrollY > 250 ? "#29323c" : "transparent";
})
