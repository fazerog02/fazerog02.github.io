console.log("startSnow() can snow!");
function startSnow(){
    function getRand(){
        let randNum;
        while (1) {
            randNum = Math.floor(Math.random() * 10);
            if (randNum > 0) break;
        }
        return randNum;
    }

    function getRandWith0(){
        return Math.floor(Math.random() * 10);
    }

    function getRandBig(){
        return Math.floor(Math.random() * 100);
    }
    let howMany = 100;
    let snowList = new Array([]);
    let snowXList = new Array([]);
    let snowYList = new Array([]);
    let snowDiv = document.getElementById('snow');
    let xCounter = 0;
    let snowClass;
    initSnow();
    function initSnow() {
        for (let i = 0; i < howMany; i++) {
            let snow = document.createElement('div');
            if (getRandWith0() > 6) {
                snowClass = "snowBig";
            } else {
                snowClass = "snow";
            }
            snow.id = "snow" + i;
            snow.style.position = 'absolute';
            snowYList[i] = getRandBig() * -2;
            snow.style.top = snowYList[i] + 'vh';
            snowXList[i] = getRand() * 10;
            snow.style.left = snowXList[i] + 'vw';
            snow.className = snowClass;
            snowDiv.appendChild(snow);
            snowList[i] = document.getElementById('snow' + i);
        }
    }
    let interval = setInterval(snowAnimation, 50);
    function snowAnimation(){
        for(let i = 0; i < howMany; i++){
            if(snowYList[i] >= 99) snowYList[i] = getRandBig() * -2;
            snowYList[i] += 0.5;
            snowList[i].style.top = snowYList[i] + 'vh';
            if(snowXList[i] <= 1 || snowXList[i] >= 99) snowXList[i] = getRandWith0() * 10;
            if(xCounter % 5 === 0 && getRandWith0() > 4) {
                if (getRandWith0() > 4) {
                    snowXList[i] += 0.2;
                } else {
                    snowXList[i] -= 0.2;
                }
                snowList[i].style.left = snowXList[i] + 'vw';
                xCounter = 0;
            }
        }
        xCounter++;
    }
}