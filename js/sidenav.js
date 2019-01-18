isMobile();

function isMobile(){
    let userAgent = window.navigator.userAgent.toLowerCase();
    let iPhone = userAgent.indexOf('iphone');
    let iPad = userAgent.indexOf('ipad');
    let iPod = userAgent.indexOf('ipod');
    let Android = userAgent.indexOf('android');
    if(iPhone !== -1 || iPad !== -1 || iPod !== -1 || Android !== -1){
        sidenavInit();
    }
}

function sidenavInit() {
    document.getElementById("header-menu").innerHTML =
        "<div id='header-sideNav-button' onclick='sidenavMotion()'><img src='/img/humberger.png' alt='error'></div>";
    document.getElementById("header-sideNav").innerHTML =
        "<div class='header-sideNav-content'><a href='/about'>ABOUT</a>" +
        "<div class='header-sideNav-content'><a href='/link'>LINK</a>" +
        "<div class='header-sideNav-content'><a href='/products'>PRODUCTS</a>";

    let header = document.getElementById('header-sideNav');
    header.style.transition = "all 400ms 0s ease-out";
}

function sidenavMotion(){
    let header = document.getElementById('header-sideNav');
    let contents = document.getElementsByClassName("header-sideNav-content");

    if(header.className === "close"){
        header.classList.remove("close");
        header.classList.add("open");
    } else if(header.className === "open"){
        header.classList.remove("open");
        header.classList.add("close");
    }
}