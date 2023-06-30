var context_id = -1;
console.log('jx06')
chrome.input.ime.onFocus.addListener((context) => {
    context_id = context.contextID;
    console.log('jx01', context.contextID)
});

chrome.input.ime.onKeyEvent.addListener(
    (engineID, keyData) => {
        console.log('jx01', keyData)
        if (keyData.type == "keydown" && keyData.key.match(/^[a-z]$/)) {
            chrome.input.ime.commitText({
                "contextID": context_id,
                "text": keyData.key.toUpperCase()
            });
            return true;
        } else {
            return false;
        }
    }
);