console.log("export.js inject");

function duplicate(analysisButton){
    var newButton = analysisButton.cloneNode("deep");
    console.log(analysisButton.childNodes[2]);
    newButton.childNodes[2].innerText = "Lichess Analysis";
    var parentNode = analysisButton.parentNode;
    parentNode.append(newButton);
}

// Be weird with Chess.com API to fetch data
function getPGN() {

    const pgn = getPGN();
    var currentUrl = window.location.href;
    console.log(currentUrl);
    var gameId = currentUrl.slice(-11);
    console.log(gameId);
    const APIurl = `chess.com/callback/live/game/${gameId}`;

    pgnData(APIurl, requestData)
        .then((response) => {
            //on response, open the lichess game url window in a new tab 
            let url = response["url"] ? response["url"] : "";
            if (url) {
                let lichessGameWindow = window.open(url);
            } else alert("Could not import game");

        }).catch((e) => {
        alert("Error getting response from lichess.org");
        throw new Error("Response error");
    });
    let lichessImportUrl = "https://lichess.org/api/import"
    let requestData = {pgn: gamePGN};
    return value;
}

// use arrive.js to see when the PNG pops up.
function getPGNSimple() {
    let downloadButton = document.getElementsByClassName("icon-font-chess download daily-game-footer-button")[0];
    console.log(downloadButton);
    downloadButton.click();
    document.arrive(".share-menu-tab-pgn-textarea", function()  {
        Arrive.unbindAllArrive();
        let PGN = document.getElementsByClassName("share-menu-tab-pgn-textarea")[0];
        console.log(PGN.value);
        //Exit out of download view (x button)
        document.querySelector("div.icon-font-chess.x.ui_outside-close-icon").click();
    });
    return PGN.value
}

// Make request to Lichess
function sendToLichess(){
    

    newButton.addEventListener("click",
    function(){ window.open(url, "url");; });

}

document.arrive("button", function() {
    // Arrive.unbindAllArrive();
    // 'this' refers to the newly created element
    var analysisButton = document.querySelector("button.ui_v5-button-component.ui_v5-button-basic")
    // var newButton = analysisButton.cloneNode("deep");
    // newButton.id = "new";
    var child = analysisButton.firstChild;
    if(child.className === "ui_v5-button-icon icon-font-chess chess-board-search"){
        console.log("SUCCCC")
        Arrive.unbindAllArrive();
        duplicate(analysisButton);
        var PGN = getPGNSimple();
        // sendToLichess();
    }
    // console.log(analysisButton);
    // console.log(child)
});





// var analysisFrame = document.getElementsByClassName(".quick-analysis-buttons .ui_v5-button-component ui_v5-button-basic");
// console.log(analysisFrame);

// var clock = document.querySelector(".clock-component clock-white clock-top clock-player-turn player-clock");
// console.log(clock);

// analysisFrame.appendChild(analysisButton);


// waitForElementToDisplay(".quick-analysis-buttons .ui_v5-button-component ui_v5-button-basic",function(){alert("Hi");},1000,9000);

// function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
//   var startTimeInMs = Date.now();
//   (function loopSearch() {
//     if (analysisFrame.querySelector.firstChild != undefined) {
//       console.log("find")
//       return;
//     }
//     else {
//       console.log("not find")
//       setTimeout(function () {
//         if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
//           return;
//         loopSearch();
//       }, checkFrequencyInMs);
//     }
//   })();

// }



// $(document).ready(function() {

    
    
// });




