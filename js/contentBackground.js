let content = document.getElementById("content");
setInterval(colorChanger, 2000);

let colorList = new Array(["#FFFF66", 'FFCC66', 'FF9966', 'CC9999', '#CCCC66', '#CCCCFF']);
let counter = 0;
function colorChanger(){
    if(counter > 5) counter = 0;
    content.style.backgroundColor = colorList[0][counter];
    counter++;
}