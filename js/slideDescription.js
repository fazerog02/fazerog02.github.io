let LiveEditHtml_card = document.getElementById("LiveEditHtml-card");
var LiveEditHtml_cardHtml;

let FazCO2Monitor_card = document.getElementById("FazCO2Monitor-card");
var FazCO2Monitor_cardHtml;

let aimDoctor_card = document.getElementById("aimDoctor-card");
var aimDoctor_cardHtml;

let sekigae_card = document.getElementById("sekigae-card");
var sekigae_cardHtml;

function openSlideDescription_LiveEditHtml(){
    LiveEditHtml_cardHtml = LiveEditHtml_card.innerHTML;
    LiveEditHtml_card.innerHTML =
        "<div class='description-text'>" +
        "   <div class='description-title'>LiveEditHtml</div>" +
        "    テキストエリア内にhtmlを書き込むと、リアルタイムで上部に反映されます。<br>\n" +
        "    リアルタイム反映は下のチェックボックスを外すことで解除できます。\n" +
        "    また、ページ下部のdownloadボタンを押すとテキストエリア内に<br>\n" +
        "    書き込んだテキストをhtml形式でダウンロードできます。<br><br>\n" +
        "    ※htmlを書く際は、&lt;body&gt;\n以下から書き始めてください。<br>" +
        "    ※javascriptはセキュリティーの都合上実行できないようにしてあります。<br>" +
        "<div onclick='closeSlideDescription_LiveEditHtml()' class='products-about-button'><span>戻る</span></div>" +
        "</div>";
}

function closeSlideDescription_LiveEditHtml(){
    LiveEditHtml_card.innerHTML = LiveEditHtml_cardHtml;
}

function openSlideDescription_FazCO2Monitor(){
    FazCO2Monitor_cardHtml = FazCO2Monitor_card.innerHTML;
    FazCO2Monitor_card.innerHTML =
        "<div class='description-text'>" +
        "   <div class='description-title'>FazCO2Monitor</div>" +
        "    Raspberry PiとMH-Z14Aを使った二酸化炭素濃度計です．<br>\n" +
        "    現在の二酸化炭素濃度を表示するだけでなく，グラフ化してwebページから確認することもできます．また，二酸化炭素濃度が危険な値になるとメールで通知する機能もあります．<br><br>\n" +
        "    ※使用する際はREADMEの手順に従って初期設定をしてください．<br>" +
        "<div onclick='closeSlideDescription_FazCO2Monitor()' class='products-about-button'><span>戻る</span></div>" +
        "</div>";
}

function closeSlideDescription_FazCO2Monitor(){
    FazCO2Monitor_card.innerHTML = FazCO2Monitor_cardHtml;
}

function openSlideDescription_aimDoctor(){
    aimDoctor_cardHtml = aimDoctor_card.innerHTML;
    aimDoctor_card.innerHTML =
        "<div class='description-text'>" +
        "   <div class='description-title'>Aim Doctor</div>" +
        "    fpsゲームなどで必要になるaim力を鍛えるサービスです．<br>\n" +
        "    時間間隔や大きさをカスタマイズした的をクリックして遊びます．最後にはスコアも表示されます．<br>\n" +
        "<div onclick='closeSlideDescription_aimDoctor()' class='products-about-button'><span>戻る</span></div>" +
        "</div>";
}

function closeSlideDescription_aimDoctor(){
    aimDoctor_card.innerHTML = aimDoctor_cardHtml;
}

function openSlideDescription_sekigae(){
    sekigae_cardHtml = sekigae_card.innerHTML;
    sekigae_card.innerHTML =
        "<div class='description-text'>" +
        "   <div class='description-title'>sekigae</div>" +
       "        席替えができます！webなのでpdfで出力もできます！" +
        "<div onclick='closeSlideDescription_sekigae()' class='products-about-button'><span>戻る</span></div>" +
        "</div>";
}

function closeSlideDescription_sekigae(){
    sekigae_card.innerHTML = sekigae_cardHtml;
}
