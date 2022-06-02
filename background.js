function snapAwayTabs() {
  chrome.tabs.query({currentWindow: true}, snapTabsCallback)
}

async function snapTabsCallback(tabs) {
  console.log("I am inevitable")
  console.log(tabs)
  const tabIds = tabs.map(t => t.id)
  console.log(tabIds)
  shuffle(tabIds)
  console.log(tabIds)
  await chrome.tabs.remove(tabIds.slice(Math.ceil(tabIds.length / 2)))

  // TODO: uncomment once action.openPopup issue is fixed
  // // hopefully will set the popup, show it, and then allow for regular clicking to happen
  // await chrome.action.setPopup({popup: "popup.html"})
  // await chrome.action.openPopup({}) // docs say works in chrome 99+, however there are multiple bug reports saying otherwise (and from experiente it does not work)
  // chrome.action.setPopup({popup: ""})
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
  console.log(/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1]) // chrome version, also stolen from SO
  chrome.action.onClicked.addListener(snapAwayTabs)
  chrome.commands.onCommand.addListener((command) => {
    if (command === "snapTabs") {
      snapAwayTabs()
    }
  })
})
