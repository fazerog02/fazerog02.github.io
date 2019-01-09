let realTimePreview = setInterval(preview, 1000);
let previewArea = document.getElementById("previewArea");
function preview(){
    let text = document.getElementById("editBlog");
    previewArea.innerHTML = text.value;
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