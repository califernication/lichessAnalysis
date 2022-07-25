// Main loop
checkGameStatus()

function checkGameStatus() {
    document.arrive(".quick-analysis-button", function() {
        // Find chess.com analysisButton
        var analysisButton = document.querySelector(".ui_v5-button-component.ui_v5-button-primary.ui_v5-button-full.quick-analysis-button")
        if (analysisButton.className == "ui_v5-button-component ui_v5-button-primary ui_v5-button-full quick-analysis-button"){
            Arrive.unbindAllArrive();
            injectButton(analysisButton);
            checkGameStatus();
        }
    });
}

// Injects a button similar to chess.com's native "Analysis" button 
function injectButton(analysisButton){
    // Duplicate the original button
    let newButton = analysisButton.cloneNode("deep");
    // Style it and link it to the Lichess import function.
    newButton.childNodes[2].innerText = "Lichess Analysis";
    newButton.style.margin = "8px 0px 0px 0px";
    newButton.style.padding = "0px 0px 0px 0px";
    newButton.childNodes[0].classList.remove("icon-font-chess")
    newButton.childNodes[0].classList.add("button-class")
    newButton.classList.add("shine-hope-anim")
    newButton.childNodes[0].style["height"] = "3.805rem";
    newButton.addEventListener('click', () => {
        sendToLichess();
    });
    // Append back into the DOM
    let parentNode = analysisButton.parentNode;
    parentNode.append(newButton);
}

// Make request to Lichess through the API (fetch)
function sendToLichess(){
    // 1. Get PGN

    // Get and click download button on chess.com
    let downloadButton = document.getElementsByClassName("icon-font-chess download")[0];
    downloadButton.click();

    // Wait for share tab to pop up
    document.arrive(".share-menu-tab-pgn-textarea", function()  {
        Arrive.unbindAllArrive();

        // Get PGN from text Area
        var PGN = document.getElementsByClassName("share-menu-tab-pgn-textarea")[0].value;

        // Exit out of download view (x button)
        document.querySelector("div.icon-font-chess.x.ui_outside-close-icon").click();

        // 2. Send a POST request to Lichess to import the current game
        let importUrl = "https://lichess.org/api/import"
        let req = {pgn: PGN};
        post(importUrl, req)
            .then((response) => {
                // Open the page on a new tab
                let url = response["url"] ? response["url"] : "";
                if (url) {
                    let lichessPage = window.open(url);
                } else alert("Could not import game");

            }).catch((e) => {
            alert("Error getting response from lichess.org");
            throw new Error("Response error");
        });
    });
}

// async POST function
async function post(url = '', data = {}) {
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
    return response.json();
}