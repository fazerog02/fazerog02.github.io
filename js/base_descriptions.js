let body = document.body;
let headerSource = document.createElement("div");

headerSource.classList.add("header");
headerSource.innerHTML = "<h1><a href=\"/\">FazRoom</a></h1>\n" +
    "<div id=\"header-menu\">\n" +
    "    <a href=\"/about\">\n" +
    "    <div class=\"header-box-about\">\n" +
    "    <div class=\"header-box-text\">ABOUT</div>\n" +
    "    </div>\n" +
    "    </a>\n" +
    "    <a href=\"/link\">\n" +
    "    <div class=\"header-box-link\">\n" +
    "    <div class=\"header-box-text\">LINK</div>\n" +
    "    </div>\n" +
    "    </a>\n" +
    "    <a href=\"/projects\">\n" +
    "    <div class=\"header-box-projects\">\n" +
    "    <div class=\"header-box-text\">PROJECTS</div>\n" +
    "    </div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "    <div id=\"header-sideNav\" class=\"close\"></div>";
body.insertBefore(headerSource, body.firstChild);


let footerSource =document.createElement("div");

footerSource.classList.add("footer");
footerSource.innerHTML =
    "<a href=\"/about\">©2019 fazerog</a>";
body.appendChild(footerSource);

let snowSource =
    "<link rel=\"stylesheet\" href=\"../css/snow.css\" type=\"text/css\">\n" +
    "<script src=\"../js/snow.js\" type=\"text/javascript\"></script>";
body.insertAdjacentHTML("beforeend", snowSource);


let head = document.head;
let baseHeadContents =
    "    <link rel=\"shortcut icon\" href=\"../img/favicon.ico\">\n" +
    "    <link href=\"https://fonts.googleapis.com/css?family=Josefin+Sans\" rel=\"stylesheet\">\n" +
    "    <link rel=\"stylesheet\" href=\"../css/header.css\" type=\"text/css\">\n" +
    "    <link rel=\"stylesheet\" href=\"../css/footer.css\" type=\"text/css\">\n" +
    "    <link rel=\"stylesheet\" href=\"../css/content.css\" type=\"text/css\">\n";

head.insertAdjacentHTML('afterbegin', baseHeadContents);