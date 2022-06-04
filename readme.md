# Thanos Tabs

Press Alt + Shift + S or click the badge to destroy half your tabs. (rounded down, must have at least 2 tabs to destroy a tab, will not destroy your current tab)

## Browser Support

This extension definitely works in Chrome. Whether it works in other chromium based browsers (Edge, Brave, Opera) has not been tested. It does not work in Firefox because of Manifest v3. It does not work in Safari, probably.

If you'd like to port this to your browser, feel free to fork.

## Future Plans

* switch from callbacks to promises once they are implemented
* use `chrome.action.openPopup` to give the keyboard shortcut the same experience as clicking the extension icon, once chrome supports it (if they ever will... see below)

## Critical Bug

The intended design for this extension was to close half of all open tabs and show a Thanos quote in the popup every time the extension was prompted, regardless of if that was through the badge or the keyboard shortcut. The badge implementation is done via message passing. A script in the popup triggers the background tab deletion function through an event. Getting the popup to trigger from the keyboard shortcut would require a call to `chrome.action.openPopup` after the tabs were closed to show the popup. [The documentation](https://developer.chrome.com/docs/extensions/reference/action/#method-openPopup) says that the function is available as of chrome version 99 and newer. However, there are [multiple](https://github.com/GoogleChrome/developer.chrome.com/issues/2602) [bug](https://github.com/GoogleChrome/developer.chrome.com/issues/204) [reports](https://support.google.com/chrome/thread/165625025/do-not-have-chrome-action-openpopup-in-my-javascript-project?hl=en) that this function is not implemented.
