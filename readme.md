# Thanos Tabs

Press Alt + Shift + S ~~or click the badge~~ to destroy half your tabs. (rounded down, must have at least 2 tabs to destroy a tab)

## Critical Bug

The intended design for this extension was to call `chrome.action.openPopup` after the tabs were closed to show the popup. [The documentation](https://developer.chrome.com/docs/extensions/reference/action/#method-openPopup) says that the function is available as of chrome version 99 and newer. However, there are [multiple](https://github.com/GoogleChrome/developer.chrome.com/issues/2602) [bug](https://github.com/GoogleChrome/developer.chrome.com/issues/204) [reports](https://support.google.com/chrome/thread/165625025/do-not-have-chrome-action-openpopup-in-my-javascript-project?hl=en) that this function is not implemented. Until it is, the following applies to this extension:

1. The badge will not cause a snap. Only the keyboard shortcut.
2. The badge will show the popup.

Once `openPopup` is added to a stable chromium build, the default popup in the manifest can be removed and multiple lines of code in background.js can be un-commented. Until then, this extension is half of what it could be. Sad.
