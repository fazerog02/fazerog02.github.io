let realTimePreview = setInterval(preview, 1000);
let previewArea = document.getElementById("previewArea");

let inputText = document.getElementById("editBlog");
function preview(){
    if(document.getElementById("isRealTime").checked){
        let inputText = document.getElementById("editBlog");
        let text =
            "<div class='header-pre'>\n" +
            "    <h1><a href='/'>FazRoom</a></h1>\n" +
            "    <div id='header-menu-pre'>\n" +
            "        <a href='/about' style='text-decoration: none;'>\n" +
            "            <div class='header-box-about-pre'>\n" +
            "                <div class='header-box-text-pre'>ABOUT</div>\n" +
            "            </div>\n" +
            "        </a>\n" +
            "        <a href='/link' style='text-decoration: none;'>\n" +
            "            <div class='header-box-link-pre'>\n" +
            "                <div class='header-box-text-pre'>LINK</div>\n" +
            "            </div>\n" +
            "        </a>\n" +
            "        <a href='/projects' style='text-decoration: none;'>\n" +
            "            <div class='header-box-projects-pre'>\n" +
            "                <div class='header-box-text-pre'>PROJECTS</div>\n" +
            "            </div>\n" +
            "        </a>\n" +
            "    </div>\n" +
            "</div>\n" +
            "<div id='header-sideNav-pre' class='close'></div>\n" +
            "<div id='content-pre'>\n" +
            inputText.value +
            "</div>\n" +
            "<div class='footer-pre'>\n" +
            "    <a href='about'>©2019 fazerog</a>\n" +
            "</div>";
        previewArea.innerHTML = text;
    }
}

function downloadHtml(){
    let htmlContent = document.getElementById("editBlog").value;
    let downloadButton = document.getElementById("downloadHtml");
    let now_year = new Date().getFullYear();
    let now_month = new Date().getMonth() + 1;
    let now_date = new Date().getDate();
    let now_hour = new Date().getHours();
    let now_minute = new Date().getMinutes();
    let now_second = new Date().getSeconds();
    let nowString = now_year.toString() + "-" +
                    now_month.toString() + "-" +
                    now_date.toString() + "-" +
                    now_hour.toString() + "-" +
                    now_minute.toString() + "-" +
                    now_second.toString();
    downloadButton.download = nowString + ".html";
    let html = new Blob([htmlContent], { "type" : "text/plain"});
    downloadButton.href = window.URL.createObjectURL(html);
}