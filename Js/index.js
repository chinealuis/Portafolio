const navToggle = document.querySelector(".nav-toggle");
const toggleButton = document.querySelector(".toggle-button");
const closeButton = document.querySelector(".close-button");

const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu_visible");
    toggleButton.classList.toggle("toggle_invisible");
    closeButton.classList.toggle("close_visible");
    

    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar Menu"); 
    }
    else{
        navToggle.setAttribute("aria-label", "Abrir Menu");
    }
});

const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]' );

const observer = new IntersectionObserver((entrie)=>{                     
    entrie.forEach(entry=>{
        const id = entry.target.getAttribute('id');
        const menuLink = document.querySelector(`.nav-menu a[href="#${id}"]`);

        if(entry.isIntersecting){
            document.querySelector(".nav-menu a.selected").classList.remove('selected');
            menuLink.classList.add('selected');
        }
      
    })
}, {rootMargin: "-60% 0px -40% 0px"});

menuLinks.forEach(menuLink =>{
    menuLink.addEventListener('click', function(){
        navMenu.classList.remove("nav-menu_visible");
        closeButton.classList.toggle("close_visible"); 
        toggleButton.classList.toggle("toggle_invisible");
    })

    const hash = menuLink.getAttribute('href');
    const target = document.querySelector(hash);

    if(target){
        observer.observe(target);
    }
})


