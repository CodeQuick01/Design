const nav_home = document.getElementById('nav-home-active');
const nav_services = document.getElementById('nav-services');
const nav_contact = document.getElementById('nav-contact');
const nav_settings = document.getElementById('nav-settings');

const poster_home = document.getElementById('p-home-active');
const poster_services = document.getElementById('p-services');
const poster_contact = document.getElementById('p-contact');
const poster_settings = document.getElementById('p-settings');

nav_home.addEventListener("click", function() {
    nav_home.id = "nav-home-active";
    nav_services.id = "nav-services";
    nav_contact.id = "nav-contact";
    nav_settings.id = "nav-settings";
    
    poster_home.id = "p-home-active";
    poster_services.id = "p-services";
    poster_contact.id = "p-contact";
    poster_settings.id = "p-settings";
});

nav_services.addEventListener("click", function() {
    nav_home.id = "nav-home";
    nav_services.id = "nav-services-active";
    nav_contact.id = "nav-contact";
    nav_settings.id = "nav-settings";

    poster_home.id = "p-home";
    poster_services.id = "p-services-active";
    poster_contact.id = "p-contact";
    poster_settings.id = "p-settings";
});

nav_contact.addEventListener("click", function() {
    nav_home.id = "nav-home";
    nav_services.id = "nav-services";
    nav_contact.id = "nav-contact-active";
    nav_settings.id = "nav-settings";

    poster_home.id = "p-home";
    poster_services.id = "p-services";
    poster_contact.id = "p-contact-active";
    poster_settings.id = "p-settings";
});

nav_settings.addEventListener("click", function() {
    nav_home.id = "nav-home";
    nav_services.id = "nav-services";
    nav_contact.id = "nav-contact";
    nav_settings.id = "nav-settings-active";

    poster_home.id = "p-home";
    poster_services.id = "p-services";
    poster_contact.id = "p-contact";
    poster_settings.id = "p-settings-active";
});