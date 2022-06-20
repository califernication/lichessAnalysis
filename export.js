console.log("export.js inject");

function duplicate(analysisButton){
    var newButton = analysisButton.cloneNode("deep");
    console.log(analysisButton.childNodes[2]);
    newButton.childNodes[2].innerText = "Lichess Analysis";
    var parentNode = analysisButton.parentNode;
    parentNode.append(newButton);
    newButton.addEventListener('click', () => {
        sendToLichess();
    });  
}

// Make request to Lichess
function sendToLichess(){
    // Get PGN

    // Get and click download button on chess.com
    let downloadButton = document.getElementsByClassName("icon-font-chess download")[0];
    console.log(downloadButton);
    downloadButton.click();

    // Wait for share tab to pop up
    document.arrive(".share-menu-tab-pgn-textarea", function()  {
        Arrive.unbindAllArrive();

        // Get PGN from text Area
        var PGN = document.getElementsByClassName("share-menu-tab-pgn-textarea")[0].value;
        console.log(PGN)

        // Exit out of download view (x button)
        document.querySelector("div.icon-font-chess.x.ui_outside-close-icon").click();
        
    });

    window.open("https://lichess.org/paste", '_blank').focus();

    document.arrive("#form3-pgn", function() {
        Arrive.unbindAllArrive();
        let pasteArea = document.getElementById("form3-pgn");
        console.log(pasteArea)
        pasteArea.innerText = PGN;
    });
    
    

    // newButton.addEventListener("click",
    // function(){ window.open(url, "url");; });
}

document.arrive("button", function() {
    // Arrive.unbindAllArrive();
    // 'this' refers to the newly created element
    var analysisButton = document.querySelector("button.ui_v5-button-component.ui_v5-button-basic")
    // var newButton = analysisButton.cloneNode("deep");
    // newButton.id = "new";
    var child = analysisButton.firstChild;
    if(child.className === "ui_v5-button-icon icon-font-chess chess-board-search"){
        console.log("About to create button.")
        Arrive.unbindAllArrive();
        duplicate(analysisButton);
        sendToLichess();
    }
});

async function postData(url = '', data = {}) {
    var formBody = [];
    for (var property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody
    });
    return response.json(); // parses JSON response into native JavaScript objects
}





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




