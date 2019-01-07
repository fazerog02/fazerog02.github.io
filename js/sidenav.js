window.onload = function(){
    let userAgent = window.navigator.userAgent.toLowerCase();
    let iPhone = userAgent.indexOf('iphone');
    let iPad = userAgent.indexOf('ipad');
    let iPod = userAgent.indexOf('ipod');
    let Android = userAgent.indexOf('android');
    if(iPhone !== -1 || iPad !== -1 || iPod !== -1 || Android !== -1){
        document.getElementById("header-menu").innerHTML =
            "<div id='header-sideNav-button' onclick='sidenavMotion()'><img src='/img/humberger.png' alt='error'></div>";
        document.getElementById("header-sideNav").innerHTML =
            "<div class='header-sideNav-content-div'><a href='/about' class='header-sideNav-content'>ABOUT</a>" +
            "<div class='header-sideNav-content-div'><a href='/link' class='header-sideNav-content'>LINK</a>" +
            "<div class='header-sideNav-content-div'><a href='/projects' class='header-sideNav-content'>PROJECTS</a>";
        let button = document.getElementById("header-sideNav-button");
        button.style.position = 'absolute';
        button.style.top = '0px';
        button.style.left = 'calc(100% - 75px)';
        button.style.margin = '0px';
        button.style.fontSize = "300%";
        let header = document.getElementById('header-sideNav');
        header.style.position = "fixed";
        header.style.top = "75px";
        header.style.right = "0px";
        header.margin = "0px";
        let contents = document.getElementsByClassName("header-sideNav-content");
        let contents_div = document.getElementsByClassName("header-sideNav-content-div");
        for(let i = 0; i< contents.length; i++){
            contents_div[i].style.width = "0px";
            contents[i].style.fontSize = "250%";
            contents[i].style.textDecoration = "none";
            contents[i].style.height = "75px";
            contents_div[i].style.height = "75px";
            contents_div[i].style.background = "#ffffff";
        }
    }
};


function sidenavMotion(){
    let header = document.getElementById('header-sideNav');
    header.style.transformOrigin = 'right';
    header.style.transition = 'all 500ms 0s ease';
    header.style.height = 'calc(100vh - 75px)';
    header.style.zIndex = "10000";
    header.style.boxShadow = "0px 8px 16px lightgray";
    header.style.zIndex = "10";
    let contents = document.getElementsByClassName("header-sideNav-content");
    if(header.className === "close"){
        header.classList.remove("close");
        header.classList.add("open");
        header.style.width = "200px";
        for(let i = 0; i< contents.length; i++){
            contents[i].style.width = "200px";
        }
    } else if(header.className === "open"){
        header.classList.remove("open");
        header.classList.add("close");
        header.style.width = "0px";
        for(let i = 0; i< contents.length; i++){
            contents[i].style.width = "0px";
        }
    }
}