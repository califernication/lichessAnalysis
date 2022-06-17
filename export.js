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

function getPGNSimple() {
    setTimeout(() => {
        //click download button to deploy PGN object in the DOM
        let downloadButton = document.getElementsByClassName("icon-font-chess download daily-game-footer-button")[0];
        console.log(downloadButton);
        downloadButton.click();

        //copy pgn
        console.log(document.getElementsByClassName("share-menu-tab-pgn-textarea")[0]);

        //close the download window
        document.getElementsByClassName("icon-font-chess x icon-font-secondary")[0].click();

    }, 1);
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
        getPGNSimple();
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




