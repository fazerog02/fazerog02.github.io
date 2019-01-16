let blogList = [
    [
        'HelloWorld!',
        new Date(2018, 1,15, 14, 16),
        "/blogs/2018_01_15_1416",
    ],
];

let searchResult_title = [], searchResult_url = [];

function getSearchWord(){
    let searchWord = document.getElementById("searchWord").value;
    searchBlogs(searchWord);
}

function searchBlogs(str){
    searchResult_title = [];
    searchResult_url = [];
    let blogArea = document.getElementById("blogArea");
    for(let i = 0; i < blogList.length; i++){
        if(blogList[i][0].indexOf(str) !== -1){
            searchResult_title.push(blogList[i][0]);
            searchResult_url.push(blogList[i][2]);
        }
    }
    if(searchResult_title.length <= 0){
        blogArea.innerHTML =
            "<h1>お探しのブログは見つかりませんでした</h1>";
    } else {
        blogArea.innerHTML = "";
    }
    console.log(blogArea.innerHTML);
    for(let i = 0; i < searchResult_title.length; i++){
        let blogHtml =
            `    <div class=\"content-card-title\">${searchResult_title[i]}</div>\n` +
            "    <div class=\"content-image-default\"></div>\n" +
            `    <div class=\"content-button\"><a href=${searchResult_url}><span>見る</span></a></div>`;
        blogArea.insertAdjacentHTML("afterbegin", blogHtml);
    }
}

