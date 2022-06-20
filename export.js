console.log("export.js inject");

function duplicate(analysisButton){
    let newButton = analysisButton.cloneNode("deep");
    // console.log(analysisButton.childNodes[2]);
    newButton.childNodes[2].innerText = "Lichess Analysis";
    newButton.addEventListener('click', () => {
        sendToLichess();
    });
    let parentNode = analysisButton.parentNode;
    parentNode.append(newButton);
}

// Make request to Lichess
function sendToLichess(){
    // Get PGN

    // Get and click download button on chess.com
    let downloadButton = document.getElementsByClassName("icon-font-chess download")[0];
    // console.log(downloadButton);
    downloadButton.click();

    // Wait for share tab to pop up
    document.arrive(".share-menu-tab-pgn-textarea", function()  {
        Arrive.unbindAllArrive();

        // Get PGN from text Area
        var PGN = document.getElementsByClassName("share-menu-tab-pgn-textarea")[0].value;
        // console.log(PGN)

        // Exit out of download view (x button)
        document.querySelector("div.icon-font-chess.x.ui_outside-close-icon").click();

        let lichessImportUrl = "https://lichess.org/api/import"
        let requestData = {pgn: PGN};
        //send a post request to lichess to import a game
        postData(lichessImportUrl, requestData)
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
    }
});

// async post function
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
    return response.json();
}