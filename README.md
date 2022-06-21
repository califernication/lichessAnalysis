# Lichess Cloud Analysis for Chess.com
A simple browser extension for one-click analysis of Chess.com games on Lichess.

## Why?
I love free, powerful open-source software! Chess.com does not offer free cloud analysis, only local line evaluations. The first is a lot easier to understand for beginners and much more accesible to users with lower end devices. Lichess cloud analysis is a wonderful tool, and for users who might not want to leave chess.com (because of their friends or arguably better puzzles and lessons) can get a glimpse of its advantages.

## Installation
This is a Chromiun-based extension, so you can use it on Chrome, Edge, Opera, Firefox, or other (non-tested) web explorers. Find it either on the Firefox Addons website or the Chrome Webstore.

**Chrome Webstore**  
Pending review.

**Firefox Addons**  
Pending review.

**Manual installation**  
Drag the latest release from this repo and drop it in [chrome://extensions/](chrome://extensions/) or your web explorer's equivalent (make sure developer mode is enabled!).

## How to use?
After you have finished a game on chess.com or when you go to review a game, the script injects an HTML button under the nominal Analysis button. When clicked, it takes you to a Lichess analysis board of the same game.

![You'll see a nice new button like below](https://github.com/califernication/lichessAnalysis/blob/main/screenshots/newButtonGif.gif)

## FAQ

**Is there a game import limit?**  
Yes, Lichess limits import to 100 games per hour when not authenticated (OAuth2). The extension currently does not ask the user to authenticate in order to lessen set up time.

**How does the extension work?**  
The script scraps your game's PNG from chess.com through the DOM and then sends a POST request to the Lichess API through the api/import endroute. Chess.com's official API is _very_ limited, so getting information from the DOM directly is necessary; currently, there is no way to get a game's PGN through the API. If this ever changes, I will update the source code and the documentation to implement this better practice.

The extension uses [Arrive.js](https://github.com/uzairfarooq/arrive), which abstracts the interface of [mutation observers](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver), to interact with the DOM efficiently.

