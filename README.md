# lichessAnalysis
A simple browser extension for one-click analysis of Chess.com games on Lichess.

## Installation
This is a Chromiun-based extension, so you can use it on Chrome, Edge, Opera, Firefox, or other (non-tested) web explorers. Find it either on the Firefox Addons website or the Chrome Webstore.

**Chrome Webstore**

**Firefox Addons**

## How to use?
After you have finished a game on chess.com or when you go to review a game, the script injects an HTML button under the nominal Analysis button. When clicked, it takes you to a Lichess analysis board of the same game.

## FAQ

**Is there a game import limit?**  
Yes, Lichess limits import to 100 games per hour when not authenticated (OAuth2). The extension currently does not ask the user to authenticate in order to lessen set up time.

**How does the extension work?**  
The script scraps your game's PNG from chess.com through the DOM and then sends a POST request to the Lichess API through the api/import endroute. Chess.com's official API is _very_ limited, so getting information from the DOM directly is necessary. Currently, there is no way to get a game's PGN through the API. If this ever changes, I will update the source code and the documentation to implement this better practice.

