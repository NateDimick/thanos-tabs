const quotes = [
    "I am inevitable",
    "I call that... mercy",
    "You could not live with your own failure",
    "The hardest choices require the strongest wills",
    "Reality is often disappointing",
    "Fine. I'll do it myself",
    "Perfectly balanced, as all things should be",
    "I'm sorry, little one",
    "Your optimism is misplaced",
    "Dread it, run from it, destiny still arrives",
    "I hope they remember you",
    "The universe required correction",
    "They called me a madman",
    "Today, I lost more than you can know",
    "A small price to pay for salvation",
    "This day extracts a heavy toll"
]
// generate random number
window.addEventListener("DOMContentLoaded", (event) => {
    const rnd = Math.floor(Math.random() * quotes.length)
    // insert quote in to #quote
    document.getElementById("quote").innerHTML = quotes[rnd]
    chrome.runtime.sendMessage({ msg: "snap" }, (resp) => {
        console.log(resp)
    })
})

