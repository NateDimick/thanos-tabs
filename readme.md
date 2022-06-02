# Thanos Tabs

Press Alt + Shift + S ~~or click the badge~~ to destroy half your tabs. (rounded down, must have at least 2 tabs to destroy a tab)

## Critical Bug

The intended design for this extension was to close half of all open tabs and show a Thanos quote in the popup every time the extension was prompted, regardless of if that was through the badge or the keyboard shortcut. The badge implementation is done via message passing. A script in the popup triggers the background tab deletion function through an event. Getting the popup to trigger from the keyboard shortcut would require a call to `chrome.action.openPopup` after the tabs were closed to show the popup. [The documentation](https://developer.chrome.com/docs/extensions/reference/action/#method-openPopup) says that the function is available as of chrome version 99 and newer. However, there are [multiple](https://github.com/GoogleChrome/developer.chrome.com/issues/2602) [bug](https://github.com/GoogleChrome/developer.chrome.com/issues/204) [reports](https://support.google.com/chrome/thread/165625025/do-not-have-chrome-action-openpopup-in-my-javascript-project?hl=en) that this function is not implemented. Until it is, the following applies to this extension:

1. The badge will cause the popup which triggers the tab deletion
2. The keyboard shortcut will only delete tabs.

Once `openPopup` is added to a stable chromium build, multiple lines of code in background.js can be un-commented. Until then, this extension is 3/4 of what it could be. Sad.
