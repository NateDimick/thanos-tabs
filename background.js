function snapAwayTabs() {
  chrome.tabs.query({currentWindow: true}, snapTabsCallback)
}

async function snapTabsCallback(tabs) {
  console.log("I am inevitable")
  const tabIds = tabs.map(t => t.id)
  shuffle(tabIds)
  await chrome.tabs.remove(tabIds.slice(Math.ceil(tabIds.length / 2)))
}

// shamelessly copied from SO: 
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener(snapAwayTabs)
  chrome.commands.onCommand.addListener((command) => {
    if (command === "snapTabs") {
      snapAwayTabs()
      // TODO: uncomment once action.openPopup issue is fixed
      // // hopefully will set the popup, show it, and then allow for regular clicking to happen
      // await chrome.action.openPopup({}) // docs say works in chrome 99+, however there are multiple bug reports saying otherwise (and from experience it does not work)
    }
  })
  chrome.runtime.onMessage.addListener(
    function (req, from, resp) {
      if (req.msg === "snap") {
        snapAwayTabs()
        resp({farewell: "ok"})
      }
    }
  )
})
